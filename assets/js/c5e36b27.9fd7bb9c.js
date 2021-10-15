"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9724],{8740:function(e,t,n){var r=n(808),a=n(7791),o=n(7135),s=n.n(o),c=["skins"],l=["local","version"],i=["compact","flat","shortcodes"];!function(e,t){if("function"==typeof define&&n.amdO)define("Emojibase",["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var r={exports:{}};t(r.exports),e.Emojibase=r.exports}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:void 0,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.UNQUALIFIED=e.UNICODE_VERSIONS=e.TEXT=e.SUPPORTED_LOCALES=e.SKIN_KEY_MEDIUM_LIGHT=e.SKIN_KEY_MEDIUM_DARK=e.SKIN_KEY_MEDIUM=e.SKIN_KEY_LIGHT=e.SKIN_KEY_DARK=e.SEQUENCE_REMOVAL_PATTERN=e.MINIMALLY_QUALIFIED=e.MEDIUM_SKIN=e.MEDIUM_LIGHT_SKIN=e.MEDIUM_DARK_SKIN=e.MALE=e.LIGHT_SKIN=e.LATEST_UNICODE_VERSION=e.LATEST_EMOJI_VERSION=e.LATEST_CLDR_VERSION=e.GROUP_KEY_TRAVEL_PLACES=e.GROUP_KEY_SYMBOLS=e.GROUP_KEY_SMILEYS_EMOTION=e.GROUP_KEY_PEOPLE_BODY=e.GROUP_KEY_OBJECTS=e.GROUP_KEY_FOOD_DRINK=e.GROUP_KEY_FLAGS=e.GROUP_KEY_COMPONENT=e.GROUP_KEY_ANIMALS_NATURE=e.GROUP_KEY_ACTIVITIES=e.FULLY_QUALIFIED=e.FIRST_UNICODE_EMOJI_VERSION=e.FEMALE=e.EMOTICON_OPTIONS=e.EMOJI_VERSIONS=e.EMOJI=e.DARK_SKIN=void 0,e.appendSkinToneIndex=function(e,t,n){void 0===n&&(n="");return e+"_"+n+(Array.isArray(t.tone)?t.tone.join("-"):t.tone)},e.fetchEmojis=function(e,t){return h.apply(this,arguments)},e.fetchFromCDN=n,e.fetchMessages=function(e,t){return _.apply(this,arguments)},e.fetchShortcodes=E,e.flattenEmojiData=m,e.fromCodepointToUnicode=function(e){return String.fromCodePoint.apply(String,e)},e.fromHexcodeToCodepoint=function(e,t){void 0===t&&(t="-");return e.split(t).map((function(e){return Number.parseInt(e,16)}))},e.fromUnicodeToHexcode=function(e,n){void 0===n&&(n=!0);var r=[];return[].concat(e).forEach((function(e){for(var a,o,s=null!==(a=null===(o=e.codePointAt(0))||void 0===o?void 0:o.toString(16).toUpperCase())&&void 0!==a?a:"";s.length<4;)s="0"+s;(!n||n&&!s.match(t))&&r.push(s)})),r.join("-")},e.generateEmoticonPermutations=function e(t,n){void 0===n&&(n={});var r=n,a=r.isFace,o=void 0===a||a,s=r.withNose,c=void 0===s||s,l=[t];t.toUpperCase()!==t&&l.push.apply(l,e(t.toUpperCase(),n));o&&(t.includes("/")&&l.push.apply(l,e(t.replace("/","\\"),n)),t.includes(")")&&l.push.apply(l,e(t.replace(")","]"),n).concat(e(t.replace(")","}"),n))),t.includes("(")&&l.push.apply(l,e(t.replace("(","["),n).concat(e(t.replace("(","{"),n))),t.includes(":")&&l.push.apply(l,e(t.replace(":","="),n)),c&&l.forEach((function(e){e.includes("-")||l.push(e.slice(0,-1)+"-"+e.slice(-1))})));return l.sort((function(e,t){return t.length-e.length})),[].concat(new Set(l))},e.joinShortcodes=f,e.joinShortcodesToEmoji=p,e.stripHexcode=function(e){return e.replace(v,"")};var t=/200D|FE0E|FE0F/g;e.SEQUENCE_REMOVAL_PATTERN=t;e.TEXT=0;e.EMOJI=1;e.FEMALE=0;e.MALE=1;e.FULLY_QUALIFIED=0;e.MINIMALLY_QUALIFIED=1;e.UNQUALIFIED=2;e.LIGHT_SKIN=1;e.MEDIUM_LIGHT_SKIN=2;e.MEDIUM_SKIN=3;e.MEDIUM_DARK_SKIN=4;e.DARK_SKIN=5;e.GROUP_KEY_SMILEYS_EMOTION="smileys-emotion";e.GROUP_KEY_PEOPLE_BODY="people-body";e.GROUP_KEY_ANIMALS_NATURE="animals-nature";e.GROUP_KEY_FOOD_DRINK="food-drink";e.GROUP_KEY_TRAVEL_PLACES="travel-places";e.GROUP_KEY_ACTIVITIES="activities";e.GROUP_KEY_OBJECTS="objects";e.GROUP_KEY_SYMBOLS="symbols";e.GROUP_KEY_FLAGS="flags";e.GROUP_KEY_COMPONENT="component";e.SKIN_KEY_LIGHT="light";e.SKIN_KEY_MEDIUM_LIGHT="medium-light";e.SKIN_KEY_MEDIUM="medium";e.SKIN_KEY_MEDIUM_DARK="medium-dark";e.SKIN_KEY_DARK="dark";e.LATEST_EMOJI_VERSION="14.0";e.LATEST_UNICODE_VERSION="14.0.0";e.LATEST_CLDR_VERSION="40-beta3";e.FIRST_UNICODE_EMOJI_VERSION="6.0.0";e.EMOJI_VERSIONS=["1.0","2.0","3.0","4.0","5.0","11.0","12.0","12.1","13.0","13.1"];e.UNICODE_VERSIONS=["6.0","6.1","6.2","6.3","7.0","8.0","9.0","10.0","11.0","12.0","12.1","13.0"];e.SUPPORTED_LOCALES=["da","de","en","en-gb","es","es-mx","et","fi","fr","hu","it","ja","ko","lt","ms","nb","nl","pl","pt","ru","sv","th","uk","zh","zh-hant"];function n(e,t){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)(s().mark((function e(t,n){var a,o,c,i,u,E,d,p,m,f,h;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0===n&&(n={}),o=(a=n).local,c=void 0!==o&&o,i=a.version,u=void 0===i?"latest":i,E=(0,r.Z)(a,l),e.next=7;break;case 5:if(u){e.next=7;break}throw new Error("A valid release version is required.");case 7:if(d=c?localStorage:sessionStorage,p="emojibase/"+u+"/"+t,!(m=d.getItem(p))){e.next=12;break}return e.abrupt("return",Promise.resolve(JSON.parse(m)));case 12:return e.next=14,fetch("https://cdn.jsdelivr.net/npm/emojibase-data@"+u+"/"+t,Object.assign({credentials:"omit",mode:"cors",redirect:"error"},E));case 14:if((f=e.sent).ok){e.next=17;break}throw new Error("Failed to load Emojibase dataset.");case 17:return e.next=19,f.json();case 19:h=e.sent;try{d.setItem(p,JSON.stringify(h))}catch(s){}return e.abrupt("return",h);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.EMOTICON_OPTIONS={":{>":{withNose:!1},"</3":{isFace:!1},"<3":{isFace:!1},"\\m/":{isFace:!1},"\\M/":{isFace:!1},"0)":{withNose:!1}};var u={discord:"joypixels",slack:"iamcal"};function E(e,t,n){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(s().mark((function e(t,r,a){var o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(t+"/shortcodes/"+(null!==(o=u[r])&&void 0!==o?o:r)+".json",a));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t){if(0===t.length)return e;var n=new Set(e.shortcodes);return t.forEach((function(t){var r=t[e.hexcode];Array.isArray(r)?r.forEach((function(e){return n.add(e)})):r&&n.add(r)})),e.shortcodes=[].concat(n),e.skins&&e.skins.forEach((function(e){p(e,t)})),e}function m(e,t){void 0===t&&(t=[]);var n=[];return e.forEach((function(e){if(e.skins){var a=e.skins,o=(0,r.Z)(e,c);n.push(p(o,t)),a.forEach((function(e){var r=Object.assign({},e);o.tags&&(r.tags=[].concat(o.tags)),n.push(p(r,t))}))}else n.push(p(e,t))})),n}function f(e,t){return 0===t.length||e.forEach((function(e){p(e,t)})),e}function h(){return(h=(0,a.Z)(s().mark((function e(t,a){var o,c,l,u,d,p,h,_,v,S;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===a&&(a={}),c=(o=a).compact,l=void 0!==c&&c,u=o.flat,d=void 0!==u&&u,p=o.shortcodes,h=void 0===p?[]:p,_=(0,r.Z)(o,i),e.next=4,n(t+"/"+(l?"compact":"data")+".json",_);case 4:if(v=e.sent,S=[],!(h.length>0)){e.next=10;break}return e.next=9,Promise.all(h.map((function(e){var n;if(e.includes("/")){var r=e.split("/");n=E(r[0],r[1],_)}else n=E(t,e,_);return n.catch((function(){return{}}))})));case 9:S=e.sent;case 10:return e.abrupt("return",d?m(v,S):f(v,S));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=(0,a.Z)(s().mark((function e(t,r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(t+"/messages.json",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=new RegExp("(-| )?("+t.source+")","g")}))},3103:function(e,t,n){n.d(t,{PG:function(){return h},ZP:function(){return I},$O:function(){return _}});var r=n(7791),a=n(7135),o=n.n(a),s=(n(2328),n(7378)),c=n(8740),l=n(6726),i=n.n(l),u=n(6744),E=n.n(u),d=n(593),p="browserFilters_1Heq",m="undefined"!=typeof location,f={da:"Danish",de:"German","en-gb":"English, Great Britain",en:"English","es-mx":"Spanish, Mexico",es:"Spanish",et:"Estonian",fi:"Finnish",fr:"French",hu:"Hungarian",it:"Italian",ja:"Japanese",ko:"Korean",lt:"Lithuanian",ms:"Malay",nb:"Norwegian, Bokm\xe5l",nl:"Dutch",pl:"Polish",pt:"Portuguese",ru:"Russian",sv:"Swedish",th:"Thai",uk:"Ukrainian","zh-hant":"Chinese, Traditional",zh:"Chinese"},h={cldr:"CLDR","cldr-native":"CLDR (native)",emojibase:"Emojibase","emojibase-legacy":"Emojibase (legacy)",github:"GitHub",iamcal:"IamCal (Slack)",joypixels:"JoyPixels (Discord)"};function _(e,t){var n=t.filter,r=t.genders,a=t.group,o=t.subgroup,s=t.skinTones,c=[];return e.forEach((function(e){if((r||void 0===e.gender)&&!(a>=0&&e.group!==a||o>=0&&e.subgroup!==o)){if(n){var t,l,i=e.label.toLocaleLowerCase().includes(n),u=null==(t=e.shortcodes)?void 0:t.some((function(e){return e.toLocaleLowerCase().includes(n)})),E=null==(l=e.tags)?void 0:l.some((function(e){return e.toLocaleLowerCase().includes(n)}));if(!i&&!u&&!E)return}c.push(e),s&&e.skins&&c.push.apply(c,e.skins)}})),c.sort((function(e,t){var n,r;return(null!=(n=e.order)?n:1e4)-(null!=(r=t.order)?r:1e4)})),c}function v(e){var t={};return e.forEach((function(e){t[e.order]=e.message})),t}var S=new URLSearchParams(m?location.search:"");function I(e){var t,n,a,l,u,_=e.defaultShortcodePresets,I=void 0===_?["emojibase"]:_,g=e.disabled,b=void 0!==g&&g,N=e.hideCldr,O=void 0!==N&&N,T=e.onChange,k=(0,s.useState)(null!=(t=S.get("filter"))?t:""),L=k[0],U=k[1],R=(0,s.useState)(L),K=R[0],C=R[1],M=(0,s.useState)(null!=(n=S.get("locale"))?n:"en"),y=M[0],A=M[1],P=(0,s.useState)(Number(null!=(a=S.get("group"))?a:-1)),D=P[0],x=P[1],j=(0,s.useState)(),Y=j[0],F=j[1],w=(0,s.useState)(),G=w[0],V=w[1],H=(0,s.useState)(Number(null!=(l=S.get("subgroup"))?l:-1)),J=H[0],Z=H[1],B=(0,s.useState)(),Q=B[0],z=B[1],q=(0,s.useState)("true"===S.get("genders")),X=q[0],$=q[1],W=(0,s.useState)("true"===S.get("skinTones")),ee=W[0],te=W[1],ne=(0,s.useState)(decodeURIComponent(null!=(u=S.get("shortcodePresets"))?u:I.join(",")).split(",").filter(Boolean)),re=ne[0],ae=ne[1];(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.W4)("en",{version:d.e});case 2:return t=e.sent,F(v(t.groups)),z(v(t.subgroups)),e.next=7,(0,c.uU)("meta/groups.json",{version:d.e});case 7:n=e.sent,V(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,s.useEffect)((function(){!function(e){m&&history.pushState({},document.title,""+location.origin+location.pathname+"?"+e.toString())}(S),T({filter:K,locale:y,genders:X,group:D,subgroup:J,skinTones:ee,shortcodePresets:re})}),[K,y,X,D,J,ee,re,T]);var oe=i()((function(e){S.set("filter",e),C(e)}),350),se=(0,s.useCallback)((function(e){e.persist();var t=e.currentTarget.value;U(t),oe(t)}),[oe]),ce=(0,s.useCallback)((function(e){var t=e.currentTarget.value;S.set("locale",t),A(t)}),[]),le=(0,s.useCallback)((function(e){var t=Number(e.currentTarget.value);S.set("group",String(t)),S.set("subgroup","-1"),x(t),Z(-1)}),[]),ie=(0,s.useCallback)((function(e){var t=Number(e.currentTarget.value);S.set("subgroup",String(t)),Z(t)}),[]),ue=(0,s.useCallback)((function(e){var t=e.currentTarget.checked;S.set("genders",String(t)),$(t)}),[]),Ee=(0,s.useCallback)((function(e){var t=e.currentTarget.checked;S.set("skinTones",String(t)),te(t)}),[]),de=(0,s.useCallback)((function(e){var t=e.currentTarget,n=t.checked,r=t.value;ae((function(e){var t=new Set(e);n?t.add(r):t.delete(r);var a=[].concat(t).sort();return S.set("shortcodePresets",encodeURIComponent(a.join(","))),a}))}),[]);return s.createElement("div",{className:p},s.createElement("div",{className:"row"},s.createElement("div",{className:"col col--3"},s.createElement("label",{htmlFor:"filter"},"Annotation"),s.createElement("input",{disabled:b,id:"filter",name:"filter",type:"search",value:L,onChange:se})),s.createElement("div",{className:"col col--3"},s.createElement("label",{htmlFor:"locale"},"Locale"),s.createElement("select",{disabled:b,id:"locale",name:"locale",value:y,onChange:ce},Object.entries(f).sort((function(e,t){return e[1].localeCompare(t[1])})).map((function(e){var t=e[0],n=e[1];return s.createElement("option",{key:t,value:t},n," (",t,")")})))),s.createElement("div",{className:"col col--3"},s.createElement("label",{htmlFor:"group"},"Group"),s.createElement("select",{disabled:b||!G||!Y,id:"group",name:"group",value:D,onChange:le},s.createElement("option",{value:"-1"},"(none)"),G&&Y&&Object.keys(G.groups).map((function(e){return s.createElement("option",{key:e,value:e},E()(Y[e]))})))),s.createElement("div",{className:"col col--3"},s.createElement("label",{htmlFor:"subgroup"},"Subgroup"),s.createElement("select",{disabled:b||!G||!G.hierarchy[D]||!Q,id:"subgroup",name:"subgroup",value:J,onChange:ie},s.createElement("option",{value:"-1"},"(none)"),G&&Q&&(G.hierarchy[D]||[]).map((function(e){return s.createElement("option",{key:e,value:e},E()(Q[e]))}))))),s.createElement("br",null),s.createElement("div",{className:"row"},s.createElement("div",{className:"col col--3"},s.createElement("h4",null,"Display"),s.createElement("label",{className:"label--inline",htmlFor:"genders"},s.createElement("input",{checked:X,disabled:b,id:"genders",name:"genders",type:"checkbox",onChange:ue})," ","Genders?"),s.createElement("label",{className:"label--inline",htmlFor:"skinTones"},s.createElement("input",{checked:ee,disabled:b,id:"skinTones",name:"skinTones",type:"checkbox",onChange:Ee})," ","Skin tones?")),s.createElement("div",{className:"col col-9"},s.createElement("h4",null,"Shortcode presets"),Object.entries(h).map((function(e){var t=e[0],n=e[1];return t.includes("cldr")&&O?null:s.createElement("label",{key:t,className:"label--inline",htmlFor:"preset-"+t},s.createElement("input",{checked:re.includes(t),disabled:b,id:"preset-"+t,name:"presets",type:"checkbox",value:t,onChange:de})," ",n)})))))}},9888:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7378);function a(e){var t=e.preset,n=e.shortcodes;return n&&0!==n.length?r.createElement(r.Fragment,null,(Array.isArray(n)?n:[n]).sort().map((function(e){return r.createElement("div",{key:t+"-"+e},":"+e+":")}))):null}},593:function(e,t,n){n.d(t,{e:function(){return r}});var r="latest"},9765:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(7791),a=n(7135),o=n.n(a),s=n(7378),c=n(8740),l=n(1996),i=n(3103),u=n(9888),E=n(593);function d(){var e=(0,s.useState)([]),t=e[0],n=e[1],a=(0,s.useState)(!1),d=a[0],p=a[1],m=(0,s.useCallback)(function(){var e=(0,r.Z)(o().mark((function e(t){var r,a,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.locale,a=t.shortcodePresets,p(!0),e.next=4,(0,c.tt)(r,{shortcodes:a.map((function(e){return e.includes("cldr")?e:"en/"+e})),version:E.e});case 4:s=e.sent,n((0,i.$O)(s,t)),p(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return s.createElement(l.Z,{description:"Table of all emojis across any supported locale.",title:"Emoji table"},s.createElement("main",{className:"table-container"},s.createElement("h2",null,"Emoji table"),s.createElement(i.ZP,{disabled:d,onChange:m}),s.createElement("div",{className:"table-responsive"},s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null),s.createElement("th",null,"Annotation"),s.createElement("th",null,"Shortcodes"),s.createElement("th",null,"Tags"))),s.createElement("tbody",null,d&&s.createElement("tr",null,s.createElement("td",{className:"text--center",colSpan:4},"Loading emojis\u2026")),!d&&s.createElement(s.Fragment,null,s.createElement("tr",null,s.createElement("td",{className:"text--center",colSpan:4},t.length.toLocaleString()," emojis")),t.map((function(e){var t;return s.createElement("tr",{key:e.hexcode,"data-hexcode":e.hexcode},s.createElement("td",{className:"text--center emoji--large"},e.emoji||e.text),s.createElement("td",null,e.label,e.emoticon&&s.createElement("span",{className:"text--muted"}," ",e.emoticon)),s.createElement("td",null,s.createElement(u.Z,{preset:"emojibase",shortcodes:e.shortcodes})),s.createElement("td",null,null==(t=e.tags)?void 0:t.join(", ")))}))))))))}}}]);