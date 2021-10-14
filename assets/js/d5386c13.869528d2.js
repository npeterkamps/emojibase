"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3597],{8740:function(e,r,t){var a=t(808),n=t(7791),s=t(7135),o=t.n(s),i=["skins"],l=["local","version"],c=["compact","flat","shortcodes"];!function(e,r){if("function"==typeof define&&t.amdO)define("Emojibase",["exports"],r);else if("undefined"!=typeof exports)r(exports);else{var a={exports:{}};r(a.exports),e.Emojibase=a.exports}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:void 0,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.UNQUALIFIED=e.UNICODE_VERSIONS=e.TEXT=e.SUPPORTED_LOCALES=e.SKIN_KEY_MEDIUM_LIGHT=e.SKIN_KEY_MEDIUM_DARK=e.SKIN_KEY_MEDIUM=e.SKIN_KEY_LIGHT=e.SKIN_KEY_DARK=e.SEQUENCE_REMOVAL_PATTERN=e.MINIMALLY_QUALIFIED=e.MEDIUM_SKIN=e.MEDIUM_LIGHT_SKIN=e.MEDIUM_DARK_SKIN=e.MALE=e.LIGHT_SKIN=e.LATEST_UNICODE_VERSION=e.LATEST_EMOJI_VERSION=e.LATEST_CLDR_VERSION=e.GROUP_KEY_TRAVEL_PLACES=e.GROUP_KEY_SYMBOLS=e.GROUP_KEY_SMILEYS_EMOTION=e.GROUP_KEY_PEOPLE_BODY=e.GROUP_KEY_OBJECTS=e.GROUP_KEY_FOOD_DRINK=e.GROUP_KEY_FLAGS=e.GROUP_KEY_COMPONENT=e.GROUP_KEY_ANIMALS_NATURE=e.GROUP_KEY_ACTIVITIES=e.FULLY_QUALIFIED=e.FIRST_UNICODE_EMOJI_VERSION=e.FEMALE=e.EMOTICON_OPTIONS=e.EMOJI_VERSIONS=e.EMOJI=e.DARK_SKIN=void 0,e.appendSkinToneIndex=function(e,r,t){void 0===t&&(t="");return e+"_"+t+(Array.isArray(r.tone)?r.tone.join("-"):r.tone)},e.fetchEmojis=function(e,r){return h.apply(this,arguments)},e.fetchFromCDN=t,e.fetchMessages=function(e,r){return y.apply(this,arguments)},e.fetchShortcodes=d,e.flattenEmojiData=p,e.fromCodepointToUnicode=function(e){return String.fromCodePoint.apply(String,e)},e.fromHexcodeToCodepoint=function(e,r){void 0===r&&(r="-");return e.split(r).map((function(e){return Number.parseInt(e,16)}))},e.fromUnicodeToHexcode=function(e,t){void 0===t&&(t=!0);var a=[];return[].concat(e).forEach((function(e){for(var n,s,o=null!==(n=null===(s=e.codePointAt(0))||void 0===s?void 0:s.toString(16).toUpperCase())&&void 0!==n?n:"";o.length<4;)o="0"+o;(!t||t&&!o.match(r))&&a.push(o)})),a.join("-")},e.generateEmoticonPermutations=function e(r,t){void 0===t&&(t={});var a=t,n=a.isFace,s=void 0===n||n,o=a.withNose,i=void 0===o||o,l=[r];r.toUpperCase()!==r&&l.push.apply(l,e(r.toUpperCase(),t));s&&(r.includes("/")&&l.push.apply(l,e(r.replace("/","\\"),t)),r.includes(")")&&l.push.apply(l,e(r.replace(")","]"),t).concat(e(r.replace(")","}"),t))),r.includes("(")&&l.push.apply(l,e(r.replace("(","["),t).concat(e(r.replace("(","{"),t))),r.includes(":")&&l.push.apply(l,e(r.replace(":","="),t)),i&&l.forEach((function(e){e.includes("-")||l.push(e.slice(0,-1)+"-"+e.slice(-1))})));return l.sort((function(e,r){return r.length-e.length})),[].concat(new Set(l))},e.joinShortcodes=f,e.joinShortcodesToEmoji=g,e.stripHexcode=function(e){return e.replace(k,"")};var r=/200D|FE0E|FE0F/g;e.SEQUENCE_REMOVAL_PATTERN=r;e.TEXT=0;e.EMOJI=1;e.FEMALE=0;e.MALE=1;e.FULLY_QUALIFIED=0;e.MINIMALLY_QUALIFIED=1;e.UNQUALIFIED=2;e.LIGHT_SKIN=1;e.MEDIUM_LIGHT_SKIN=2;e.MEDIUM_SKIN=3;e.MEDIUM_DARK_SKIN=4;e.DARK_SKIN=5;e.GROUP_KEY_SMILEYS_EMOTION="smileys-emotion";e.GROUP_KEY_PEOPLE_BODY="people-body";e.GROUP_KEY_ANIMALS_NATURE="animals-nature";e.GROUP_KEY_FOOD_DRINK="food-drink";e.GROUP_KEY_TRAVEL_PLACES="travel-places";e.GROUP_KEY_ACTIVITIES="activities";e.GROUP_KEY_OBJECTS="objects";e.GROUP_KEY_SYMBOLS="symbols";e.GROUP_KEY_FLAGS="flags";e.GROUP_KEY_COMPONENT="component";e.SKIN_KEY_LIGHT="light";e.SKIN_KEY_MEDIUM_LIGHT="medium-light";e.SKIN_KEY_MEDIUM="medium";e.SKIN_KEY_MEDIUM_DARK="medium-dark";e.SKIN_KEY_DARK="dark";e.LATEST_EMOJI_VERSION="14.0";e.LATEST_UNICODE_VERSION="14.0.0";e.LATEST_CLDR_VERSION="40-alpha3";e.FIRST_UNICODE_EMOJI_VERSION="6.0.0";e.EMOJI_VERSIONS=["1.0","2.0","3.0","4.0","5.0","11.0","12.0","12.1","13.0","13.1"];e.UNICODE_VERSIONS=["6.0","6.1","6.2","6.3","7.0","8.0","9.0","10.0","11.0","12.0","12.1","13.0"];e.SUPPORTED_LOCALES=["da","de","en","en-gb","es","es-mx","et","fi","fr","hu","it","ja","ko","lt","ms","nb","nl","pl","pt","ru","sv","th","uk","zh","zh-hant"];function t(e,r){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(o().mark((function e(r,t){var n,s,i,c,u,d,m,g,p,f,h;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0===t&&(t={}),s=(n=t).local,i=void 0!==s&&s,c=n.version,u=void 0===c?"latest":c,d=(0,a.Z)(n,l),e.next=7;break;case 5:if(u){e.next=7;break}throw new Error("A valid release version is required.");case 7:if(m=i?localStorage:sessionStorage,g="emojibase/"+u+"/"+r,!(p=m.getItem(g))){e.next=12;break}return e.abrupt("return",Promise.resolve(JSON.parse(p)));case 12:return e.next=14,fetch("https://cdn.jsdelivr.net/npm/emojibase-data@"+u+"/"+r,Object.assign({credentials:"omit",mode:"cors",redirect:"error"},d));case 14:if((f=e.sent).ok){e.next=17;break}throw new Error("Failed to load Emojibase dataset.");case 17:return e.next=19,f.json();case 19:h=e.sent;try{m.setItem(g,JSON.stringify(h))}catch(o){}return e.abrupt("return",h);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.EMOTICON_OPTIONS={":{>":{withNose:!1},"</3":{isFace:!1},"<3":{isFace:!1},"\\m/":{isFace:!1},"\\M/":{isFace:!1},"0)":{withNose:!1}};var u={discord:"joypixels",slack:"iamcal"};function d(e,r,t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(o().mark((function e(r,a,n){var s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(r+"/shortcodes/"+(null!==(s=u[a])&&void 0!==s?s:a)+".json",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,r){if(0===r.length)return e;var t=new Set(e.shortcodes);return r.forEach((function(r){var a=r[e.hexcode];Array.isArray(a)?a.forEach((function(e){return t.add(e)})):a&&t.add(a)})),e.shortcodes=[].concat(t),e.skins&&e.skins.forEach((function(e){g(e,r)})),e}function p(e,r){void 0===r&&(r=[]);var t=[];return e.forEach((function(e){if(e.skins){var n=e.skins,s=(0,a.Z)(e,i);t.push(g(s,r)),n.forEach((function(e){var a=Object.assign({},e);s.tags&&(a.tags=[].concat(s.tags)),t.push(g(a,r))}))}else t.push(g(e,r))})),t}function f(e,r){return 0===r.length||e.forEach((function(e){g(e,r)})),e}function h(){return(h=(0,n.Z)(o().mark((function e(r,n){var s,i,l,u,m,g,h,y,k,E;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n={}),i=(s=n).compact,l=void 0!==i&&i,u=s.flat,m=void 0!==u&&u,g=s.shortcodes,h=void 0===g?[]:g,y=(0,a.Z)(s,c),e.next=4,t(r+"/"+(l?"compact":"data")+".json",y);case 4:if(k=e.sent,E=[],!(h.length>0)){e.next=10;break}return e.next=9,Promise.all(h.map((function(e){var t;if(e.includes("/")){var a=e.split("/");t=d(a[0],a[1],y)}else t=d(r,e,y);return t.catch((function(){return{}}))})));case 9:E=e.sent;case 10:return e.abrupt("return",m?p(k,E):f(k,E));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=(0,n.Z)(o().mark((function e(r,a){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(r+"/messages.json",a));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=new RegExp("(-| )?("+r.source+")","g")}))},3103:function(e,r,t){t.d(r,{PG:function(){return g},ZP:function(){return y},$O:function(){return p}});t(2328);var a=t(7378),n=t(6726),s=t.n(n),o=t(6744),i=t.n(o),l="browserFilters_1Heq",c=t(9815),u=t(5952),d="undefined"!=typeof location,m={da:"Danish",de:"German","en-gb":"English, Great Britain",en:"English","es-mx":"Spanish, Mexico",es:"Spanish",et:"Estonian",fi:"Finnish",fr:"French",hu:"Hungarian",it:"Italian",ja:"Japanese",ko:"Korean",lt:"Lithuanian",ms:"Malay",nb:"Norwegian, Bokm\xe5l",nl:"Dutch",pl:"Polish",pt:"Portuguese",ru:"Russian",sv:"Swedish",th:"Thai",uk:"Ukrainian","zh-hant":"Chinese, Traditional",zh:"Chinese"},g={cldr:"CLDR","cldr-native":"CLDR (native)",emojibase:"Emojibase","emojibase-legacy":"Emojibase (legacy)",github:"GitHub",iamcal:"IamCal (Slack)",joypixels:"JoyPixels (Discord)"};function p(e,r){var t=r.filter,a=r.genders,n=r.group,s=r.subgroup,o=r.skinTones,i=[];return e.forEach((function(e){if((a||void 0===e.gender)&&!(n>=0&&e.group!==n||s>=0&&e.subgroup!==s)){if(t){var r,l,c=e.label.toLocaleLowerCase().includes(t),u=null==(r=e.shortcodes)?void 0:r.some((function(e){return e.toLocaleLowerCase().includes(t)})),d=null==(l=e.tags)?void 0:l.some((function(e){return e.toLocaleLowerCase().includes(t)}));if(!c&&!u&&!d)return}i.push(e),o&&e.skins&&i.push.apply(i,e.skins)}})),i.sort((function(e,r){var t,a;return(null!=(t=e.order)?t:1e4)-(null!=(a=r.order)?a:1e4)})),i}function f(e){var r={};return e.forEach((function(e){r[e.order]=e.message})),r}var h=new URLSearchParams(d?location.search:"");function y(e){var r,t,n,o,p,y=e.defaultShortcodePresets,k=void 0===y?["emojibase"]:y,E=e.disabled,b=void 0!==E&&E,v=e.hideCldr,S=void 0!==v&&v,_=e.onChange,I=(0,a.useState)(null!=(r=h.get("filter"))?r:""),N=I[0],O=I[1],T=(0,a.useState)(N),w=T[0],L=T[1],R=(0,a.useState)(null!=(t=h.get("locale"))?t:"en"),U=R[0],A=R[1],C=(0,a.useState)(Number(null!=(n=h.get("group"))?n:-1)),x=C[0],K=C[1],M=(0,a.useState)(f(u.groups))[0],P=(0,a.useState)(c)[0],j=(0,a.useState)(Number(null!=(o=h.get("subgroup"))?o:-1)),D=j[0],Y=j[1],F=(0,a.useState)(f(u.subgroups))[0],G=(0,a.useState)("true"===h.get("genders")),J=G[0],V=G[1],Z=(0,a.useState)("true"===h.get("skinTones")),H=Z[0],B=Z[1],Q=(0,a.useState)(decodeURIComponent(null!=(p=h.get("shortcodePresets"))?p:k.join(",")).split(",").filter(Boolean)),z=Q[0],q=Q[1];(0,a.useEffect)((function(){!function(e){d&&history.pushState({},document.title,""+location.origin+location.pathname+"?"+e.toString())}(h),_({filter:w,locale:U,genders:J,group:x,subgroup:D,skinTones:H,shortcodePresets:z})}),[w,U,J,x,D,H,z,_]);var $=s()((function(e){h.set("filter",e),L(e)}),350),X=(0,a.useCallback)((function(e){e.persist();var r=e.currentTarget.value;O(r),$(r)}),[$]),W=(0,a.useCallback)((function(e){var r=e.currentTarget.value;h.set("locale",r),A(r)}),[]),ee=(0,a.useCallback)((function(e){var r=Number(e.currentTarget.value);h.set("group",String(r)),h.set("subgroup","-1"),K(r),Y(-1)}),[]),re=(0,a.useCallback)((function(e){var r=Number(e.currentTarget.value);h.set("subgroup",String(r)),Y(r)}),[]),te=(0,a.useCallback)((function(e){var r=e.currentTarget.checked;h.set("genders",String(r)),V(r)}),[]),ae=(0,a.useCallback)((function(e){var r=e.currentTarget.checked;h.set("skinTones",String(r)),B(r)}),[]),ne=(0,a.useCallback)((function(e){var r=e.currentTarget,t=r.checked,a=r.value;q((function(e){var r=new Set(e);t?r.add(a):r.delete(a);var n=[].concat(r).sort();return h.set("shortcodePresets",encodeURIComponent(n.join(","))),n}))}),[]);return a.createElement("div",{className:l},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--3"},a.createElement("label",{htmlFor:"filter"},"Annotation"),a.createElement("input",{disabled:b,id:"filter",name:"filter",type:"search",value:N,onChange:X})),a.createElement("div",{className:"col col--3"},a.createElement("label",{htmlFor:"locale"},"Locale"),a.createElement("select",{disabled:b,id:"locale",name:"locale",value:U,onChange:W},Object.entries(m).sort((function(e,r){return e[1].localeCompare(r[1])})).map((function(e){var r=e[0],t=e[1];return a.createElement("option",{key:r,value:r},t," (",r,")")})))),a.createElement("div",{className:"col col--3"},a.createElement("label",{htmlFor:"group"},"Group"),a.createElement("select",{disabled:b,id:"group",name:"group",value:x,onChange:ee},a.createElement("option",{value:"-1"},"(none)"),Object.keys(P.groups).map((function(e){return a.createElement("option",{key:e,value:e},i()(M[e]))})))),a.createElement("div",{className:"col col--3"},a.createElement("label",{htmlFor:"subgroup"},"Subgroup"),a.createElement("select",{disabled:b||!P.hierarchy[x],id:"subgroup",name:"subgroup",value:D,onChange:re},a.createElement("option",{value:"-1"},"(none)"),(P.hierarchy[x]||[]).map((function(e){return a.createElement("option",{key:e,value:e},i()(F[e]))}))))),a.createElement("br",null),a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--3"},a.createElement("h4",null,"Display"),a.createElement("label",{className:"label--inline",htmlFor:"genders"},a.createElement("input",{checked:J,disabled:b,id:"genders",name:"genders",type:"checkbox",onChange:te})," ","Genders?"),a.createElement("label",{className:"label--inline",htmlFor:"skinTones"},a.createElement("input",{checked:H,disabled:b,id:"skinTones",name:"skinTones",type:"checkbox",onChange:ae})," ","Skin tones?")),a.createElement("div",{className:"col col-9"},a.createElement("h4",null,"Shortcode presets"),Object.entries(g).map((function(e){var r=e[0],t=e[1];return r.includes("cldr")&&S?null:a.createElement("label",{key:r,className:"label--inline",htmlFor:"preset-"+r},a.createElement("input",{checked:z.includes(r),disabled:b,id:"preset-"+r,name:"presets",type:"checkbox",value:r,onChange:ne})," ",t)})))))}},9888:function(e,r,t){t.d(r,{Z:function(){return n}});var a=t(7378);function n(e){var r=e.preset,t=e.shortcodes;return t&&0!==t.length?a.createElement(a.Fragment,null,(Array.isArray(t)?t:[t]).sort().map((function(e){return a.createElement("div",{key:r+"-"+e},":"+e+":")}))):null}},7892:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var a=t(7791);function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function s(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o=t(7135),i=t.n(o),l=t(7378),c=t(8740),u=t(1996),d=t(3103),m=t(9888);function g(e){return e}function p(){var e=(0,l.useState)(!1),r=e[0],t=e[1],n=(0,l.useState)([]),o=n[0],p=n[1],f=(0,l.useState)({}),h=f[0],y=f[1],k=(0,l.useState)([]),E=k[0],b=k[1],v=(0,l.useState)(["emojibase","github","iamcal","joypixels"]),S=v[0],_=v[1],I=(0,l.useCallback)(function(){var e=(0,a.Z)(i().mark((function e(r){var a,n,s,o,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.locale,n=r.shortcodePresets,t(!0),e.next=4,(0,c.t)(a,{shortcodes:S,version:"next"});case 4:return s=e.sent,e.next=7,(0,c.J)(a,"cldr",{version:"next"});case 7:return o=e.sent,e.next=10,Promise.all(n.map((function(e){return(0,c.J)(a,e,{version:"next"}).catch(g)})));case 10:l=e.sent,p((0,d.$O)(s,r)),y(o),b(l),_(n),t(!1);case 16:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[S]);return l.createElement(u.Z,{description:"Table of all shortcodes for every emoji character.",title:"Shortcodes table"},l.createElement("main",{className:"table-container"},l.createElement("h2",null,"Shortcodes table"),l.createElement(d.ZP,{hideCldr:!0,defaultShortcodePresets:S,disabled:r,onChange:I}),l.createElement("div",{className:"table-responsive"},l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{colSpan:2}),l.createElement("th",null,"CLDR"),S.map((function(e){return l.createElement("th",{key:"header-"+e},d.PG[e])})),l.createElement("th",null))),l.createElement("tbody",null,r&&l.createElement("tr",null,l.createElement("td",{className:"text--center",colSpan:4+S.length},"Loading emojis\u2026")),!r&&l.createElement(l.Fragment,null,l.createElement("tr",null,l.createElement("td",{className:"text--center",colSpan:4+S.length},o.length.toLocaleString()," emojis")),o.map((function(e){var r=function(e){var r="";if(0===e.length)return!1;for(var t,a=s(e);!(t=a()).done;){var n=t.value,o=Array.isArray(n)?n.sort().join(","):n;if(r){if(r!==o)return!1}else r=o}return!0}(E.map((function(r){return r[e.hexcode]})));return l.createElement("tr",{key:e.hexcode,"data-hexcode":e.hexcode},l.createElement("td",{className:"text--center emoji--large"},e.emoji||e.text),l.createElement("td",null,l.createElement("div",null,e.label),l.createElement("div",{className:"text--muted no-wrap"},e.hexcode)),l.createElement("td",null,l.createElement(m.Z,{preset:"cldr",shortcodes:h[e.hexcode]})),r?l.createElement("td",{colSpan:S.length},l.createElement(m.Z,{preset:S[0],shortcodes:E[0][e.hexcode]})):S.map((function(r,t){return l.createElement("td",{key:e.hexcode+r},l.createElement(m.Z,{preset:r,shortcodes:E[t][e.hexcode]}))})),l.createElement("td",{className:"text--center emoji--large"},e.emoji||e.text))}))))))))}},5952:function(e){e.exports=JSON.parse('{"groups":[{"key":"smileys-emotion","message":"smileys & emotion","order":0},{"key":"people-body","message":"people & body","order":1},{"key":"component","message":"components","order":2},{"key":"animals-nature","message":"animals & nature","order":3},{"key":"food-drink","message":"food & drink","order":4},{"key":"travel-places","message":"travel & places","order":5},{"key":"activities","message":"activities","order":6},{"key":"objects","message":"objects","order":7},{"key":"symbols","message":"symbols","order":8},{"key":"flags","message":"flags","order":9}],"skinTones":[{"key":"light","message":"light skin tone"},{"key":"medium-light","message":"medium-light skin tone"},{"key":"medium","message":"medium skin tone"},{"key":"medium-dark","message":"medium-dark skin tone"},{"key":"dark","message":"dark skin tone"}],"subgroups":[{"key":"face-smiling","message":"smiling","order":0},{"key":"face-affection","message":"affectionate","order":1},{"key":"face-tongue","message":"with tongue","order":2},{"key":"face-hand","message":"with hands","order":3},{"key":"face-neutral-skeptical","message":"neutral / skeptical","order":4},{"key":"face-sleepy","message":"sleepy","order":5},{"key":"face-unwell","message":"unwell","order":6},{"key":"face-hat","message":"with hats","order":7},{"key":"face-glasses","message":"with glasses","order":8},{"key":"face-concerned","message":"concerned","order":9},{"key":"face-negative","message":"negative","order":10},{"key":"face-costume","message":"costumed & creatures","order":11},{"key":"cat-face","message":"cat faces","order":12},{"key":"monkey-face","message":"monkey faces","order":13},{"key":"emotion","message":"emotions","order":14},{"key":"hand-fingers-open","message":"fingers open","order":15},{"key":"hand-fingers-partial","message":"hand signs","order":16},{"key":"hand-single-finger","message":"finger pointing","order":17},{"key":"hand-fingers-closed","message":"fingers closed","order":18},{"key":"hands","message":"hands","order":19},{"key":"hand-prop","message":"hand props","order":20},{"key":"body-parts","message":"body parts","order":21},{"key":"person","message":"people","order":22},{"key":"person-gesture","message":"gestures","order":23},{"key":"person-role","message":"roles & careers","order":24},{"key":"person-fantasy","message":"fantasy","order":25},{"key":"person-activity","message":"activities","order":26},{"key":"person-sport","message":"athletics","order":27},{"key":"person-resting","message":"resting","order":28},{"key":"family","message":"family","order":29},{"key":"person-symbol","message":"people symbols","order":30},{"key":"skin-tone","message":"skin tones","order":31},{"key":"hair-style","message":"hair styles","order":32},{"key":"animal-mammal","message":"mammals","order":33},{"key":"animal-bird","message":"birds","order":34},{"key":"animal-amphibian","message":"amphibians","order":35},{"key":"animal-reptile","message":"reptiles","order":36},{"key":"animal-marine","message":"marine life","order":37},{"key":"animal-bug","message":"bugs","order":38},{"key":"plant-flower","message":"flowers","order":39},{"key":"plant-other","message":"other plants","order":40},{"key":"food-fruit","message":"fruit","order":41},{"key":"food-vegetable","message":"vegetables","order":42},{"key":"food-prepared","message":"cooked / prepared","order":43},{"key":"food-asian","message":"asian","order":44},{"key":"food-marine","message":"seafood","order":45},{"key":"food-sweet","message":"sweets & candy","order":46},{"key":"drink","message":"drink","order":47},{"key":"dishware","message":"dishware","order":48},{"key":"place-map","message":"globes & maps","order":49},{"key":"place-geographic","message":"geographic locations","order":50},{"key":"place-building","message":"buildings","order":51},{"key":"place-religious","message":"religious buildings","order":52},{"key":"place-other","message":"other places","order":53},{"key":"transport-ground","message":"ground transportation","order":54},{"key":"transport-water","message":"water transportation","order":55},{"key":"transport-air","message":"air transportation","order":56},{"key":"hotel","message":"hotel","order":57},{"key":"time","message":"time","order":58},{"key":"sky-weather","message":"weather","order":59},{"key":"event","message":"events & holidays","order":60},{"key":"award-medal","message":"award medals","order":61},{"key":"sport","message":"sports","order":62},{"key":"game","message":"games & hobbies","order":63},{"key":"arts-crafts","message":"arts & crafts","order":64},{"key":"clothing","message":"clothing","order":65},{"key":"sound","message":"sound","order":66},{"key":"music","message":"music","order":67},{"key":"musical-instrument","message":"musical instruments","order":68},{"key":"phone","message":"phone","order":69},{"key":"computer","message":"computer","order":70},{"key":"light-video","message":"light, film & video","order":71},{"key":"book-paper","message":"books & paper","order":72},{"key":"money","message":"money","order":73},{"key":"mail","message":"mail","order":74},{"key":"writing","message":"writing","order":75},{"key":"office","message":"office supplies","order":76},{"key":"lock","message":"lock & keys","order":77},{"key":"tool","message":"tools","order":78},{"key":"science","message":"science equipment","order":79},{"key":"medical","message":"medical","order":80},{"key":"household","message":"household items","order":81},{"key":"other-object","message":"other objects","order":82},{"key":"transport-sign","message":"transport signs","order":83},{"key":"warning","message":"warning symbols","order":84},{"key":"arrow","message":"arrows","order":85},{"key":"religion","message":"religious symbols","order":86},{"key":"zodiac","message":"zodiac signs","order":87},{"key":"av-symbol","message":"audio & video symbols","order":88},{"key":"gender","message":"gender signs","order":89},{"key":"math","message":"math symbols","order":90},{"key":"punctuation","message":"punctuation","order":91},{"key":"currency","message":"currencies","order":92},{"key":"other-symbol","message":"other symbols","order":93},{"key":"keycap","message":"keypad characters","order":94},{"key":"alphanum","message":"alphanumeric symbols","order":95},{"key":"geometric","message":"shapes & colors","order":96},{"key":"flag","message":"other flags","order":97},{"key":"country-flag","message":"country flags","order":98},{"key":"subdivision-flag","message":"subdivision flags","order":99}]}')},9815:function(e){e.exports=JSON.parse('{"groups":{"0":"smileys-emotion","1":"people-body","2":"component","3":"animals-nature","4":"food-drink","5":"travel-places","6":"activities","7":"objects","8":"symbols","9":"flags"},"hierarchy":{"0":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"1":[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"2":[31,32],"3":[33,34,35,36,37,38,39,40],"4":[41,42,43,44,45,46,47,48],"5":[49,50,51,52,53,54,55,56,57,58,59],"6":[60,61,62,63,64],"7":[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"8":[83,84,85,86,87,88,89,90,91,92,93,94,95,96],"9":[97,98,99]},"subgroups":{"0":"face-smiling","1":"face-affection","2":"face-tongue","3":"face-hand","4":"face-neutral-skeptical","5":"face-sleepy","6":"face-unwell","7":"face-hat","8":"face-glasses","9":"face-concerned","10":"face-negative","11":"face-costume","12":"cat-face","13":"monkey-face","14":"emotion","15":"hand-fingers-open","16":"hand-fingers-partial","17":"hand-single-finger","18":"hand-fingers-closed","19":"hands","20":"hand-prop","21":"body-parts","22":"person","23":"person-gesture","24":"person-role","25":"person-fantasy","26":"person-activity","27":"person-sport","28":"person-resting","29":"family","30":"person-symbol","31":"skin-tone","32":"hair-style","33":"animal-mammal","34":"animal-bird","35":"animal-amphibian","36":"animal-reptile","37":"animal-marine","38":"animal-bug","39":"plant-flower","40":"plant-other","41":"food-fruit","42":"food-vegetable","43":"food-prepared","44":"food-asian","45":"food-marine","46":"food-sweet","47":"drink","48":"dishware","49":"place-map","50":"place-geographic","51":"place-building","52":"place-religious","53":"place-other","54":"transport-ground","55":"transport-water","56":"transport-air","57":"hotel","58":"time","59":"sky-weather","60":"event","61":"award-medal","62":"sport","63":"game","64":"arts-crafts","65":"clothing","66":"sound","67":"music","68":"musical-instrument","69":"phone","70":"computer","71":"light-video","72":"book-paper","73":"money","74":"mail","75":"writing","76":"office","77":"lock","78":"tool","79":"science","80":"medical","81":"household","82":"other-object","83":"transport-sign","84":"warning","85":"arrow","86":"religion","87":"zodiac","88":"av-symbol","89":"gender","90":"math","91":"punctuation","92":"currency","93":"other-symbol","94":"keycap","95":"alphanum","96":"geometric","97":"flag","98":"country-flag","99":"subdivision-flag"}}')}}]);