import fetchMock from 'fetch-mock-jest';
import { fetchFromCDN } from '../src/fetchFromCDN';
import { setupStorage } from './helpers';

describe('fetchFromCDN()', () => {
	beforeEach(() => {
		setupStorage();

		fetchMock.mock('*', [1, 2, 3]);
	});

	afterEach(() => {
		fetchMock.reset();
	});

	it('errors if no path', async () => {
		// @ts-expect-error No args
		await expect(() => fetchFromCDN()).rejects.toThrow(
			'A valid JSON dataset is required to fetch.',
		);
	});

	it('errors if path doesnt end in JSON', async () => {
		await expect(() => fetchFromCDN('en/data')).rejects.toThrow(
			'A valid JSON dataset is required to fetch.',
		);
	});

	it('errors if no version', async () => {
		await expect(() => fetchFromCDN('en/data.json', { version: '' })).rejects.toThrow(
			'A valid release version is required.',
		);
	});

	it('errors if response is not ok', async () => {
		fetchMock.mock('path:en/data.json', 404);

		try {
			await fetchFromCDN('en/data.json');
		} catch (error) {
			expect(error).toEqual(new Error('Failed to load Emojibase dataset.'));
		}
	});

	it('returns the value from session storage', async () => {
		(global.sessionStorage.getItem as jest.Mock).mockImplementation(() =>
			JSON.stringify([1, 2, 3, 4, 5]),
		);

		const data = await fetchFromCDN('en/data.json');

		expect(data).toEqual([1, 2, 3, 4, 5]);

		(global.sessionStorage.getItem as jest.Mock).mockReset();
	});

	it('triggers a fetch', async () => {
		await fetchFromCDN('en/data.json');

		expect(fetchMock).toHaveBeenCalledWith(
			'https://cdn.jsdelivr.net/npm/emojibase-data@latest/en/data.json',
			{
				credentials: 'omit',
				mode: 'cors',
				redirect: 'error',
			},
		);
	});

	it('can customize fetch', async () => {
		await fetchFromCDN('ja/compact.json', { redirect: 'follow', version: '1.2.3' });

		expect(fetchMock).toHaveBeenCalledWith(
			'https://cdn.jsdelivr.net/npm/emojibase-data@1.2.3/ja/compact.json',
			{
				credentials: 'omit',
				mode: 'cors',
				redirect: 'follow',
			},
		);
	});

	it('returns data from fetch', async () => {
		const data = await fetchFromCDN('en/data.json');

		expect(data).toEqual([1, 2, 3]);
	});

	it('caches data to session storage', async () => {
		await fetchFromCDN('en/data.json');

		expect(global.sessionStorage.setItem).toHaveBeenCalledWith(
			'emojibase/latest/en/data.json',
			'[1,2,3]',
		);
	});

	it('caches data to local storage', async () => {
		await fetchFromCDN('en/data.json', { local: true });

		expect(global.localStorage.setItem).toHaveBeenCalledWith(
			'emojibase/latest/en/data.json',
			'[1,2,3]',
		);
	});
});
