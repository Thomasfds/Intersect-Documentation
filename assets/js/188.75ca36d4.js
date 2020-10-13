(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{372:function(t,a,n){"use strict";n.r(a);var e=n(27),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"dealing-with-conflicts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dealing-with-conflicts"}},[t._v("#")]),t._v(" Dealing with Conflicts")]),t._v(" "),n("p",[t._v("A merge conflict occurs when you try to merge branches where the same lines or sections of code have been modified. Unfortunately in these instances Git requires a little help to sort things out.")]),t._v(" "),n("p",[t._v("Whether you're working with pull requests or trying to merge branches locally you're eventually going to have to deal with a merge conflict.")]),t._v(" "),n("p",[t._v("In the event of a merge conflict Git will alert you of the files needing attention. Within each file you will find conflict blocks.")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/46efc74d34c68ffe9a424b898f365cb8.png",alt:"conflictalert"}})]),t._v(" "),n("p",[t._v("Here is a conflict I dealt with recently.")]),t._v(" "),n("p",[t._v("The original code looked like the following:")]),t._v(" "),n("div",{staticClass:"language-cs extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cs"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Player Out of Range Or Offline")]),t._v("\nPacketSender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SendChatMsg")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Strings"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Trading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("outofrange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    CustomColors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NoTarget\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("We were working on refactoring our code in two different branches at the same time. In one branch we were replacing usages of client with player. In another branch we were refactoring colors.")]),t._v(" "),n("p",[t._v("Upon merging the second branch I was left to solve the following conflict:")]),t._v(" "),n("div",{staticClass:"language-cs extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cs"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Player Out of Range Or Offline")]),t._v("\nPacketSender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SendChatMsg")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HEAD")]),t._v("\n    player"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Strings"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Trading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("outofrange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    CustomColors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NoTarget\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Strings"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Trading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("outofrange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    CustomColors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Combat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NoTarget\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" updating"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("colors\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("The ======= separates the code from both branches. In the top half we changed client to player. In the bottom half we changed CustomColors.NoTarget to CustomColors.Combat.NoTarget.")]),t._v(" "),n("p",[t._v("In some instances you will decide to keep the code above the divider in others you will keep the code below the divider. In this case we want to keep code from both so I manually updated the file to end up with the resulting code.")]),t._v(" "),n("div",{staticClass:"language-cs extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cs"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Player Out of Range Or Offline")]),t._v("\nPacketSender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SendChatMsg")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    player"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Strings"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Trading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("outofrange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    CustomColors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Combat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NoTarget\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("After resolving the conflcit, removing the conflict markers, and saving the file Github allowed the merge to proceed as planned.")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/98036a1ec4daea465a9526987444d8c7.png",alt:"mergeable"}})]),t._v(" "),n("p",[t._v("In your programming endeavors you will eventually come across merge conflicts. Although annoying they are generally easy to work out. Hopefully this example and explaination helps in dealing with that process.")])])}),[],!1,null,null,null);a.default=s.exports}}]);