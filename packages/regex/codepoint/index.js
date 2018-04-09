module.exports = /[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9\u23EA\u23ED-\u23EF\u23F1-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2708\u2709\u270C\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2753\u2757\u2763\u2764\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299\u{1F004}\u{1F170}\u{1F171}\u{1F17E}\u{1F17F}\u{1F202}\u{1F21A}\u{1F22F}\u{1F237}\u{1F30D}-\u{1F30F}\u{1F315}\u{1F31C}\u{1F321}\u{1F324}-\u{1F32C}\u{1F336}\u{1F378}\u{1F37D}\u{1F393}\u{1F396}\u{1F397}\u{1F399}-\u{1F39B}\u{1F39E}\u{1F39F}\u{1F3A7}\u{1F3AC}-\u{1F3AE}\u{1F3C2}\u{1F3C4}\u{1F3C6}\u{1F3CA}-\u{1F3CE}\u{1F3D4}-\u{1F3E0}\u{1F3ED}\u{1F3F3}\u{1F3F5}\u{1F3F7}\u{1F408}\u{1F415}\u{1F41F}\u{1F426}\u{1F43F}\u{1F441}\u{1F442}\u{1F446}-\u{1F449}\u{1F44D}\u{1F44E}\u{1F453}\u{1F46A}\u{1F47D}\u{1F4A3}\u{1F4B0}\u{1F4B3}\u{1F4BB}\u{1F4BF}\u{1F4CB}\u{1F4DA}\u{1F4DF}\u{1F4E4}-\u{1F4E6}\u{1F4EA}-\u{1F4ED}\u{1F4F7}\u{1F4F9}-\u{1F4FB}\u{1F4FD}\u{1F508}\u{1F50D}\u{1F512}\u{1F513}\u{1F549}\u{1F54A}\u{1F550}-\u{1F567}\u{1F56F}\u{1F570}\u{1F573}-\u{1F579}\u{1F587}\u{1F58A}-\u{1F58D}\u{1F590}\u{1F5A5}\u{1F5A8}\u{1F5B1}\u{1F5B2}\u{1F5BC}\u{1F5C2}-\u{1F5C4}\u{1F5D1}-\u{1F5D3}\u{1F5DC}-\u{1F5DE}\u{1F5E1}\u{1F5E3}\u{1F5E8}\u{1F5EF}\u{1F5F3}\u{1F5FA}\u{1F610}\u{1F687}\u{1F68D}\u{1F691}\u{1F694}\u{1F698}\u{1F6AD}\u{1F6B2}\u{1F6B9}\u{1F6BA}\u{1F6BC}\u{1F6CB}\u{1F6CD}-\u{1F6CF}\u{1F6E0}-\u{1F6E5}\u{1F6E9}\u{1F6F0}\u{1F6F3}][\uFE0E\uFE0F]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9\u23EA\u23ED-\u23EF\u23F1-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2708\u2709\u270C\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2753\u2757\u2763\u2764\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299\u{1F004}\u{1F170}\u{1F171}\u{1F17E}\u{1F17F}\u{1F202}\u{1F21A}\u{1F22F}\u{1F237}\u{1F30D}-\u{1F30F}\u{1F315}\u{1F31C}\u{1F321}\u{1F324}-\u{1F32C}\u{1F336}\u{1F378}\u{1F37D}\u{1F393}\u{1F396}\u{1F397}\u{1F399}-\u{1F39B}\u{1F39E}\u{1F39F}\u{1F3A7}\u{1F3AC}-\u{1F3AE}\u{1F3C2}\u{1F3C4}\u{1F3C6}\u{1F3CA}-\u{1F3CE}\u{1F3D4}-\u{1F3E0}\u{1F3ED}\u{1F3F3}\u{1F3F5}\u{1F3F7}\u{1F408}\u{1F415}\u{1F41F}\u{1F426}\u{1F43F}\u{1F441}\u{1F442}\u{1F446}-\u{1F449}\u{1F44D}\u{1F44E}\u{1F453}\u{1F46A}\u{1F47D}\u{1F4A3}\u{1F4B0}\u{1F4B3}\u{1F4BB}\u{1F4BF}\u{1F4CB}\u{1F4DA}\u{1F4DF}\u{1F4E4}-\u{1F4E6}\u{1F4EA}-\u{1F4ED}\u{1F4F7}\u{1F4F9}-\u{1F4FB}\u{1F4FD}\u{1F508}\u{1F50D}\u{1F512}\u{1F513}\u{1F549}\u{1F54A}\u{1F550}-\u{1F567}\u{1F56F}\u{1F570}\u{1F573}-\u{1F579}\u{1F587}\u{1F58A}-\u{1F58D}\u{1F590}\u{1F5A5}\u{1F5A8}\u{1F5B1}\u{1F5B2}\u{1F5BC}\u{1F5C2}-\u{1F5C4}\u{1F5D1}-\u{1F5D3}\u{1F5DC}-\u{1F5DE}\u{1F5E1}\u{1F5E3}\u{1F5E8}\u{1F5EF}\u{1F5F3}\u{1F5FA}\u{1F610}\u{1F687}\u{1F68D}\u{1F691}\u{1F694}\u{1F698}\u{1F6AD}\u{1F6B2}\u{1F6B9}\u{1F6BA}\u{1F6BC}\u{1F6CB}\u{1F6CD}-\u{1F6CF}\u{1F6E0}-\u{1F6E5}\u{1F6E9}\u{1F6F0}\u{1F6F3}]/u;
