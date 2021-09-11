(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return c}));var o=t(3),a=t(7),i=(t(0),t(97)),s={title:"Specification alignment"},r={unversionedId:"spec",id:"spec",isDocsHomePage:!1,title:"Specification alignment",description:"Emojibase aims to be as specification compliant as possible, but to ensure small datasets, and ease",source:"@site/docs/spec.md",slug:"/spec",permalink:"/docs/spec",editUrl:"https://github.com/milesj/emojibase/edit/master/website/docs/spec.md",version:"current",sidebar:"docs",previous:{title:"TypeScript support",permalink:"/docs/typescript"}},d=[{value:"v12.0",id:"v120",children:[{value:"Combination skin tones",id:"combination-skin-tones",children:[]},{value:"Merged variation selectors",id:"merged-variation-selectors",children:[]}]},{value:"v11.0",id:"v110",children:[{value:"Separate genders",id:"separate-genders",children:[]},{value:"Combination genders",id:"combination-genders",children:[]}]}],l={toc:d};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Emojibase aims to be as specification compliant as possible, but to ensure small datasets, and ease\nof use, some liberties are taken."),Object(i.b)("h2",{id:"v120"},"v12.0"),Object(i.b)("h3",{id:"combination-skin-tones"},"Combination skin tones"),Object(i.b)("p",null,"Some ",Object(i.b)("a",{parentName:"p",href:"http://unicode.org/reports/tr51/#Multi_Person_Groupings"},"multi-person")," emojis (couple, holding\nhands, etc) can now change the skin tones of individual persons in the emoji. This is problematic\nbecause:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The number of combinations may grow over time."),Object(i.b)("li",{parentName:"ul"},"The number of skin tones for an emoji may be greater than 5.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Where should the extra skin tone data reside?"),Object(i.b)("li",{parentName:"ul"},"How will emoji pickers handle this large number of skin tones?"))),Object(i.b)("li",{parentName:"ul"},"Multiple skin tone emojis have hexcodes that no longer match the parent.")),Object(i.b)("p",null,'For example, the "women holding hands" emoji with dark & light skin tones applied is\n',Object(i.b)("inlineCode",{parentName:"p"},"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FB"),', while the theoretical parent "women holding hands" emoji\nis ',Object(i.b)("inlineCode",{parentName:"p"},"1F46D"),". Notice that ",Object(i.b)("inlineCode",{parentName:"p"},"1F46D")," is not found in the skin tone variant hexcode."),Object(i.b)("p",null,"For the time being, these multiple skin tone variants are manually mapped to a parent emoji, and are\nplaced within the ",Object(i.b)("inlineCode",{parentName:"p"},"skins")," array. Because of this, the ",Object(i.b)("inlineCode",{parentName:"p"},"skins")," array may contain more than 5 variants\n(up to 15 in some cases), and the ",Object(i.b)("inlineCode",{parentName:"p"},"tone")," property may now be an array of all skin tones."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "annotation": "people holding hands",\n    "hexcode": "1F9D1-200D-1F91D-200D-1F9D1",\n    // ...\n    "skins": [\n        {\n            "annotation": "people holding hands: light skin tone",\n            "hexcode": "1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FB",\n            // ...\n            "tone": 1\n        },\n        {\n            "annotation": "people holding hands: medium-light skin tone, light skin tone",\n            "hexcode": "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FB",\n            // ...\n            "tone": [2, 1]\n        },\n        {\n            "annotation": "people holding hands: medium-light skin tone",\n            "hexcode": "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FC",\n            // ...\n            "tone": 2\n        },\n        {\n            "annotation": "people holding hands: medium skin tone, light skin tone",\n            "hexcode": "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FB",\n            // ...\n            "tone": [3, 1]\n        },\n        {\n            "annotation": "people holding hands: medium skin tone, medium-light skin tone",\n            "hexcode": "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FC",\n            // ...\n            "tone": [3, 2]\n        },\n        {\n            "annotation": "people holding hands: medium skin tone",\n            "hexcode": "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FD",\n            // ...\n            "tone": 3\n        },\n        {\n            "annotation": "people holding hands: medium-dark skin tone, light skin tone",\n            "hexcode": "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FB",\n            // ...\n            "tone": [4, 1]\n        },\n        {\n            "annotation": "people holding hands: medium-dark skin tone, medium-light skin tone",\n            "hexcode": "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FC",\n            // ...\n            "tone": [4, 2]\n        },\n        {\n            "annotation": "people holding hands: medium-dark skin tone, medium skin tone",\n            "hexcode": "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FD",\n            // ...\n            "tone": [4, 3]\n        },\n        {\n            "annotation": "people holding hands: medium-dark skin tone",\n            "hexcode": "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FE",\n            // ...\n            "tone": 4\n        },\n        {\n            "annotation": "people holding hands: dark skin tone, light skin tone",\n            "hexcode": "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FB",\n            // ...\n            "tone": [5, 1]\n        },\n        {\n            "annotation": "people holding hands: dark skin tone, medium-light skin tone",\n            "hexcode": "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FC",\n            // ...\n            "tone": [5, 2]\n        },\n        {\n            "annotation": "people holding hands: dark skin tone, medium skin tone",\n            "hexcode": "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FD",\n            // ...\n            "tone": [5, 3]\n        },\n        {\n            "annotation": "people holding hands: dark skin tone, medium-dark skin tone",\n            "hexcode": "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FE",\n            // ...\n            "tone": [5, 4]\n        },\n        {\n            "annotation": "people holding hands: dark skin tone",\n            "hexcode": "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FF",\n            // ...\n            "tone": 5\n        }\n    ]\n}\n')),Object(i.b)("h3",{id:"merged-variation-selectors"},"Merged variation selectors"),Object(i.b)("p",null,"Before v12, and even pre-emoji, many emoji characters were represented as a single Unicode hexcode.\nOvertime, emoji (",Object(i.b)("inlineCode",{parentName:"p"},"FE0F"),") and text (",Object(i.b)("inlineCode",{parentName:"p"},"FE0E"),") variation selector characters (additional hexcodes) were\nappended to emoji characters to differentiate their presentation."),Object(i.b)("p",null,"In v12, many existing emoji have been duplicated to always include the emoji variation selector\n(",Object(i.b)("a",{parentName:"p",href:"http://unicode.org/reports/tr51/#Presentation_Style"},"more info here"),"). An example of this raw\ndataset looked like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "00A9": {\n        "description": "copyright",\n        "hexcode": "00A9"\n        // ...\n    },\n    "00A9-FE0F": {\n        "description": "copyright",\n        "hexcode": "00A9-FE0F"\n        // ...\n    }\n}\n')),Object(i.b)("p",null,"To avoid duplication across our datasets, the emoji ",Object(i.b)("em",{parentName:"p"},"with")," variation selector (ending in ",Object(i.b)("inlineCode",{parentName:"p"},"FE0F"),") is\nremoved from the final output, and all unique properties are merged into the non-variation selector\nsibling. Don't fret though, as the ",Object(i.b)("a",{parentName:"p",href:"/docs/datasets#data-structure"},Object(i.b)("inlineCode",{parentName:"a"},"emoji")," property")," ",Object(i.b)("em",{parentName:"p"},"will always"),"\ninclude the variation selector, along with the ",Object(i.b)("inlineCode",{parentName:"p"},"text")," property."),Object(i.b)("p",null,"The resulting dataset would include the following structure:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "annotation": "copyright",\n    "hexcode": "00A9",\n    "emoji": "\xa9\ufe0f", // 00A9-FE0F\n    "text": "\xa9\ufe0e" // 00A9-FE0E\n    // ...\n}\n')),Object(i.b)("h2",{id:"v110"},"v11.0"),Object(i.b)("h3",{id:"separate-genders"},"Separate genders"),Object(i.b)("p",null,"Separate genders are represented as 3 unique emoji types (people/person, women/woman, or men/man),\neach with their own hexcodes."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "annotation": "person in steamy room",\n  "hexcode": "1F9D6"\n  // ...\n},\n{\n  "annotation": "man in steamy room",\n  "hexcode": "1F9D6-200D-2642-FE0F"\n  // ...\n},\n{\n  "annotation": "woman in steamy room",\n  "hexcode": "1F9D6-200D-2640-FE0F"\n  // ...\n},\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The men and women variants ",Object(i.b)("strong",{parentName:"p"},"always")," refer back to the people variant through a shared hexcode\n(",Object(i.b)("inlineCode",{parentName:"p"},"1F9D6")," in the example above).")),Object(i.b)("h3",{id:"combination-genders"},"Combination genders"),Object(i.b)("p",null,"Single emojis that support multiple genders are also represented as unique emojis with their own\nhexcodes."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "annotation": "kiss",\n  "hexcode": "1F48F"\n  // ...\n},\n{\n  "annotation": "kiss: woman, man",\n  "hexcode": "1F469-200D-2764-FE0F-200D-1F48B-200D-1F468"\n  // ...\n},\n{\n  "annotation": "kiss: man, man",\n  "hexcode": "1F468-200D-2764-FE0F-200D-1F48B-200D-1F468",\n  // ...\n},\n{\n  "annotation": "kiss: woman, woman",\n  "hexcode": "1F469-200D-2764-FE0F-200D-1F48B-200D-1F469",\n  // ...\n},\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The men and women variants ",Object(i.b)("strong",{parentName:"p"},"do not")," share a hexcode with the people emoji.")))}c.isMDXComponent=!0}}]);