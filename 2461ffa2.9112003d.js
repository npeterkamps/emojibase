(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{105:function(e,t,o){"use strict";var n=o(0),a=o.n(n),i=o(103),c=o(95),r=o(55),l=o.n(r),s=37,b=39;t.a=function(e){var t=e.lazy,o=e.block,r=e.defaultValue,d=e.values,m=e.groupId,p=e.className,u=Object(i.a)(),j=u.tabGroupChoices,h=u.setTabGroupChoices,f=Object(n.useState)(r),O=f[0],N=f[1],C=n.Children.toArray(e.children);if(null!=m){var g=j[m];null!=g&&g!==O&&d.some((function(e){return e.value===g}))&&N(g)}var v=function(e){N(e),null!=m&&h(m,e)},F=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":o},p)},d.map((function(e){var t=e.value,o=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return F.push(e)},onKeyDown:function(e){!function(e,t,o){switch(o.keyCode){case b:!function(e,t){var o=e.indexOf(t)+1;e[o]?e[o].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var o=e.indexOf(t)-1;e[o]?e[o].focus():e[e.length-1].focus()}(e,t)}}(F,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},o)}))),t?Object(n.cloneElement)(C.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},C.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},106:function(e,t,o){"use strict";var n=o(0),a=o.n(n);t.a=function(e){var t=e.children,o=e.hidden,n=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:o,className:n},t)}},78:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return b})),o.d(t,"default",(function(){return m}));var n=o(3),a=o(7),i=(o(0),o(97)),c=o(105),r=o(106),l={title:"API"},s={unversionedId:"api",id:"api",isDocsHomePage:!1,title:"API",description:"What kind of emoji database would this be without a few helper functions for easily using and",source:"@site/docs/api.mdx",slug:"/api",permalink:"/docs/api",editUrl:"https://github.com/milesj/emojibase/edit/master/website/docs/api.mdx",version:"current",sidebar:"docs",previous:{title:"Emoticons",permalink:"/docs/emoticons"},next:{title:"Translations",permalink:"/docs/translations"}},b=[{value:"<code>fetchFromCDN</code>",id:"fetchfromcdn",children:[{value:"Options",id:"options",children:[]}]},{value:"<code>fetchEmojis</code>",id:"fetchemojis",children:[{value:"Options",id:"options-1",children:[]}]},{value:"<code>fetchMetadata</code>",id:"fetchmetadata",children:[{value:"Options",id:"options-2",children:[]}]},{value:"<code>fetchShortcodes</code>",id:"fetchshortcodes",children:[{value:"Options",id:"options-3",children:[]}]},{value:"<code>flattenEmojiData</code>",id:"flattenemojidata",children:[]},{value:"<code>fromCodepointToUnicode</code>",id:"fromcodepointtounicode",children:[]},{value:"<code>fromHexcodeToCodepoint</code>",id:"fromhexcodetocodepoint",children:[]},{value:"<code>fromUnicodeToHexcode</code>",id:"fromunicodetohexcode",children:[]},{value:"<code>generateEmoticonPermutations</code>",id:"generateemoticonpermutations",children:[]},{value:"<code>joinShortcodesToEmoji</code>",id:"joinshortcodestoemoji",children:[]},{value:"<code>joinShortcodes</code>",id:"joinshortcodes",children:[]},{value:"<code>stripHexcode</code>",id:"striphexcode",children:[]}],d={toc:b};function m(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"What kind of emoji database would this be without a few helper functions for easily using and\nworking with emoji characters? A bad one, and thus, a handful of functions can be found in the\n",Object(i.b)("inlineCode",{parentName:"p"},"emojibase")," package."),Object(i.b)(c.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add emojibase\n"))),Object(i.b)(r.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install emojibase\n")))),Object(i.b)("h2",{id:"fetchfromcdn"},Object(i.b)("inlineCode",{parentName:"h2"},"fetchFromCDN")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"fetchFromCDN<T",">","(path: string, options?: FetchFromCDNOptions): Promise<T",">")),Object(i.b)("p",null,"This function will fetch ",Object(i.b)("inlineCode",{parentName:"p"},"emojibase-data")," JSON files from our ",Object(i.b)("a",{parentName:"p",href:"https://cdn.jsdelivr.net/npm/emojibase-data@latest/"},"CDN"),", parse them, and return the\nresponse. It requires a file path relative to the ",Object(i.b)("inlineCode",{parentName:"p"},"emojibase-data")," package as the 1st argument and\nan optional object of options as the 2rd argument."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { fetchFromCDN } from 'emojibase';\n\nawait fetchFromCDN('ja/compact.json', { version: '2.1.3' });\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Only JSON datasets can be fetched from the CDN.")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"local")," (",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),") - Cache the response in local storage instead of session storage. Defaults to\n",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"version")," (",Object(i.b)("inlineCode",{parentName:"li"},"string"),") - The release version to fetch. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"latest"),"."),Object(i.b)("li",{parentName:"ul"},"All options supported by ",Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request"},"fetch"),".")),Object(i.b)("h2",{id:"fetchemojis"},Object(i.b)("inlineCode",{parentName:"h2"},"fetchEmojis")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"fetchEmojis(locale: Locale, options?: FetchEmojisOptions): Promise<Emoji[]",">")),Object(i.b)("p",null,"Fetches and returns a localized list of emojis (and optional shortcodes) from our ",Object(i.b)("a",{parentName:"p",href:"https://cdn.jsdelivr.net/npm/emojibase-data@latest/"},"CDN"),". Uses\n",Object(i.b)("a",{parentName:"p",href:"#fetchfromcdn"},Object(i.b)("inlineCode",{parentName:"a"},"fetchFromCDN"))," and ",Object(i.b)("a",{parentName:"p",href:"#fetchshortcodes"},Object(i.b)("inlineCode",{parentName:"a"},"fetchShortcodes"))," under the hood."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { fetchEmojis } from 'emojibase';\n\nawait fetchEmojis('ja', {\n  compact: true,\n  shortcodes: ['cldr'],\n  version: '2.1.3',\n});\n")),Object(i.b)("p",null,"It's also possible to load shortcodes from other languages by prefixing the shortcode preset with\nthe chosen locale. This is useful if you want to support English and Japanese in parallel, for\nexample."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"await fetchEmojis('ja', {\n  shortcodes: ['cldr', 'en/cldr'],\n});\n")),Object(i.b)("h3",{id:"options-1"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"compact")," (",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),") - Load the compact dataset instead of the full dataset. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"flat")," (",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),") - Flatten the dataset (moving skin tones to the root). Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"shortcodes")," (",Object(i.b)("inlineCode",{parentName:"li"},"string[]"),") - List of shortcode ",Object(i.b)("a",{parentName:"li",href:"/docs/shortcodes#presets"},"presets")," to load and merge into the emojis\ndataset. Defaults to an empty list."),Object(i.b)("li",{parentName:"ul"},"All options supported by ",Object(i.b)("a",{parentName:"li",href:"#fetchfromcdn"},Object(i.b)("inlineCode",{parentName:"a"},"fetchFromCDN")),".")),Object(i.b)("h2",{id:"fetchmetadata"},Object(i.b)("inlineCode",{parentName:"h2"},"fetchMetadata")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"fetchMetadata(locale: Locale options?: FetchFromCDNOptions): Promise<MetadataDataset",">")),Object(i.b)("p",null,"Fetches and returns localized messages for emoji related information like groups and sub-groups.\nUses ",Object(i.b)("a",{parentName:"p",href:"#fetchfromcdn"},Object(i.b)("inlineCode",{parentName:"a"},"fetchFromCDN"))," under the hood."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { fetchMetadata } from 'emojibase';\n\nawait fetchMetadata('zh', { version: '2.1.3' });\n")),Object(i.b)("h3",{id:"options-2"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All options supported by ",Object(i.b)("a",{parentName:"li",href:"#fetchfromcdn"},Object(i.b)("inlineCode",{parentName:"a"},"fetchFromCDN")),".")),Object(i.b)("h2",{id:"fetchshortcodes"},Object(i.b)("inlineCode",{parentName:"h2"},"fetchShortcodes")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"fetchShortcodes(locale: Locale, preset: ShortcodePreset, options?: FetchFromCDNOptions):\nPromise<ShortcodesDataset",">")),Object(i.b)("p",null,"Fetches and returns localized shortcodes for the defined ",Object(i.b)("a",{parentName:"p",href:"/docs/shortcodes#presets"},"preset")," from our ",Object(i.b)("a",{parentName:"p",href:"https://cdn.jsdelivr.net/npm/emojibase-data@latest/"},"CDN"),". The\nresponse is a mapping of emoji hexcodes to shortcodes (either a string or array of strings). Uses\n",Object(i.b)("a",{parentName:"p",href:"#fetchfromcdn"},Object(i.b)("inlineCode",{parentName:"a"},"fetchFromCDN"))," under the hood."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { fetchShortcodes } from 'emojibase';\n\nawait fetchShortcodes('ja', 'cldr', { version: '2.1.3' });\n")),Object(i.b)("h3",{id:"options-3"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All options supported by ",Object(i.b)("a",{parentName:"li",href:"#fetchfromcdn"},Object(i.b)("inlineCode",{parentName:"a"},"fetchFromCDN")),".")),Object(i.b)("h2",{id:"flattenemojidata"},Object(i.b)("inlineCode",{parentName:"h2"},"flattenEmojiData")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"flattenEmojiData(data: Emoji[], shortcodeDatasets?: ShortcodesDataset[]): Emoji[]")),Object(i.b)("p",null,"By default, emoji ",Object(i.b)("a",{parentName:"p",href:"/docs/datasets#data-structure"},"skin modifications are nested")," under the base\nneutral skin tone emoji. To flatten the data into a single dimension array, use the\n",Object(i.b)("inlineCode",{parentName:"p"},"flattenEmojiData")," function."),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"shortcodeDatasets")," is defined, it will join the shortcodes to the emoji object using\n",Object(i.b)("a",{parentName:"p",href:"#joinshortcodestoemoji"},Object(i.b)("inlineCode",{parentName:"a"},"joinShortcodesToEmoji")),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { flattenEmojiData } from 'emojibase';\n\nflattenEmojiData([\n  {\n    hexcode: '1F3CB-FE0F-200D-2642-FE0F',\n    // ...\n    skins: [\n      {\n        hexcode: '1F3CB-1F3FB-200D-2642-FE0F',\n        // ...\n      },\n      // ...\n    ],\n  },\n]);\n\n/*\n[\n  {\n    hexcode: '1F3CB-FE0F-200D-2642-FE0F',\n    // ...\n  },\n  {\n    hexcode: '1F3CB-1F3FB-200D-2642-FE0F',\n    // ...\n  },\n]\n*/\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Tags from the parent emoji will be passed down to the skin modifications.")),Object(i.b)("h2",{id:"fromcodepointtounicode"},Object(i.b)("inlineCode",{parentName:"h2"},"fromCodepointToUnicode")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"fromCodepointToUnicode(codepoint: CodePoint[]): Unicode")),Object(i.b)("p",null,"This function will convert an array of numerical codepoints to a literal emoji Unicode character."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { fromCodepointToUnicode } from 'emojibase';\n\nfromCodepointToUnicode([128104, 8205, 128105, 8205, 128103, 8205, 128102]); // \ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66\n")),Object(i.b)("h2",{id:"fromhexcodetocodepoint"},Object(i.b)("inlineCode",{parentName:"h2"},"fromHexcodeToCodepoint")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"fromHexcodeToCodepoint(code: Hexcode, joiner?: string): CodePoint[]")),Object(i.b)("p",null,"This function will convert a hexadecimal codepoint to an array of numerical codepoints. By default,\nit will split the hexcode using a dash, but can be customized with the 2nd argument."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { fromHexcodeToCodepoint } from 'emojibase';\n\nfromHexcodeToCodepoint('270A-1F3FC'); // [9994, 127996]\nfromHexcodeToCodepoint('270A 1F3FC', ' '); // [9994, 127996]\n")),Object(i.b)("h2",{id:"fromunicodetohexcode"},Object(i.b)("inlineCode",{parentName:"h2"},"fromUnicodeToHexcode")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"fromUnicodeToHexcode(unicode: Unicode, strip?: boolean): Hexcode")),Object(i.b)("p",null,"This function will convert a literal emoji Unicode character into a dash separated hexadecimal\ncodepoint. Unless ",Object(i.b)("inlineCode",{parentName:"p"},"false")," is passed as the 2nd argument, zero width joiner's and variation selectors\nare removed."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { fromUnicodeToHexcode } from 'emojibase';\n\nfromUnicodeToHexcode('\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66'); // 1F468-1F469-1F467-1F466\nfromUnicodeToHexcode('\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66', false); // 1F468-200D-1F469-200D-1F467-200D-1F466\n")),Object(i.b)("h2",{id:"generateemoticonpermutations"},Object(i.b)("inlineCode",{parentName:"h2"},"generateEmoticonPermutations")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"generateEmoticonPermutations(emoticon: Emoticon, options?: PermutationOptions): Emoticon[]")),Object(i.b)("p",null,"This function will generate multiple permutations of a base emoticon character. The following\npermutations will occur:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},")")," mouth will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"]")," and ",Object(i.b)("inlineCode",{parentName:"li"},"}"),". The same applies to sad/frowning mouths."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/")," mouth will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"\\"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":")," eyes will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"="),"."),Object(i.b)("li",{parentName:"ul"},"Supports a ",Object(i.b)("inlineCode",{parentName:"li"},"-")," nose, by injecting between the eyes and mouth."),Object(i.b)("li",{parentName:"ul"},"Supports both uppercase and lowercase variants.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { generateEmoticonPermutations } from 'emojibase';\n\ngenerateEmoticonPermutations(':)'); // =-), =-}, :-], =-], :-}, :-), =}, =], =), :}, :], :)\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The base emoticon must follow a set of ",Object(i.b)("a",{parentName:"p",href:"/docs/emoticons"},"naming guidelines")," to work properly.")),Object(i.b)("p",null,"Furthermore, this function accepts an options object as the 2nd argument, as a means to customize\nthe output."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"isFace")," (bool) - Toggles face permutations (mouth and eye variants). Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"withNose")," (bool) - Toggles nose inclusion. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),".")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"generateEmoticonPermutations(':)', { withNose: false }); // =}, =], =), :}, :], :)\ngenerateEmoticonPermutations('\\\\m/', { isFace: false }); // \\m/, \\M/\n")),Object(i.b)("h2",{id:"joinshortcodestoemoji"},Object(i.b)("inlineCode",{parentName:"h2"},"joinShortcodesToEmoji")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"joinShortcodesToEmoji<T extends Emoji | CompactEmoji",">","(emoji: T, shortcodeDatasets:\nShortcodesDataset[]): T")),Object(i.b)("p",null,"Will join shortcodes from multiple shortcode datasets into a single emoji object using its hexcode.\nWill remove duplicates in the process."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { joinShortcodesToEmoji } from 'emojibase';\n\njoinShortcodesToEmoji(\n  {\n    annotation: 'information',\n    name: 'INFORMATION SOURCE',\n    hexcode: '2139',\n    tags: ['i'],\n    emoji: '\u2139\ufe0f',\n    // ...\n  },\n  [\n    { '2139': 'information' /* ... */ },\n    { '2139': 'info' /* ... */ },\n    { '2139': 'info_source' /* ... */ },\n    { '2139': 'info' /* ... */ },\n  ],\n);\n\n/*\n{\n  annotation: 'information',\n  name: 'INFORMATION SOURCE',\n  hexcode: '2139',\n  tags: ['i'],\n  emoji: '\u2139\ufe0f',\n  shortcodes: ['information', 'info', 'info_source'],\n  // ...\n}\n*/\n")),Object(i.b)("h2",{id:"joinshortcodes"},Object(i.b)("inlineCode",{parentName:"h2"},"joinShortcodes")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"joinShortcodes<T extends Emoji | CompactEmoji",">","(emojis: T[], shortcodeDatasets:\nShortcodesDataset[]): T[]")),Object(i.b)("p",null,"Like ",Object(i.b)("inlineCode",{parentName:"p"},"joinShortcodesToEmoji")," but joins shortcodes to a list of emoji objects."),Object(i.b)("h2",{id:"striphexcode"},Object(i.b)("inlineCode",{parentName:"h2"},"stripHexcode")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"stripHexcode(hexcode: Hexcode): Hexcode")),Object(i.b)("p",null,"This function will strip zero width joiners (",Object(i.b)("inlineCode",{parentName:"p"},"200D"),") and variation selectors (",Object(i.b)("inlineCode",{parentName:"p"},"FE0E"),", ",Object(i.b)("inlineCode",{parentName:"p"},"FE0F"),") from a\nhexadecimal codepoint."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { stripHexcode } from 'emojibase';\n\nstripHexcode('1F468-200D-2695-FE0F'); // 1F468-2695\n")))}m.isMDXComponent=!0}}]);