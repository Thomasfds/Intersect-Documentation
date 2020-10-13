(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{521:function(e,t,a){"use strict";a.r(t);var r=a(27),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"repo-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repo-layout"}},[e._v("#")]),e._v(" Repo Layout")]),e._v(" "),a("h2",{attrs:{id:"branches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#branches"}},[e._v("#")]),e._v(" Branches")]),e._v(" "),a("p",[e._v("Branching allows you to create independent lines of development. Intersect has two main branches of code. Master contains our most recent stable build, and Development contains the latest features that are still being developed and debugged. You can switch branches or create new branches in the Github Desktop app by clicking the branches dropdown box.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/7cb30357ee4dd2a55bc24b20eeb63d78.png",alt:"branching"}})]),e._v(" "),a("p",[e._v("It is considered best practice to always branch off of Master or Development when making code changes. For example, if I wanted to fix a bug in Master I would make a new branch off Master called 'fixing-xyz'. I would then fix the bug, test my fix, commit my changes and then finally merge 'fixing-xyz' back into Master. That way the Master branch is always able to compile and work even if fixing that bug takes awhile.")]),e._v(" "),a("p",[e._v("One major benefit of branching is the ability to avoid duplicate work. As an example, since our Development branch is based on and is a a continuation of Master we can often fix bugs in Master and automatically pull those fixes into Development without coding the same fix twice.")]),e._v(" "),a("h2",{attrs:{id:"directories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directories"}},[e._v("#")]),e._v(" Directories")]),e._v(" "),a("p",[e._v("The actual Intersect directory layout is fairly simple.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("File/Directory")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Documentation")]),e._v(" "),a("td",[e._v("Licensing for each individual project and shortcuts to these docs.")])]),e._v(" "),a("tr",[a("td",[e._v("Intersect (Core)")]),e._v(" "),a("td",[e._v("Shared assembly between the Client, Editor, and Server. Contains class definitions for game objects, configurations, and more.")])]),e._v(" "),a("tr",[a("td",[e._v("Intersect.Client.Framework")]),e._v(" "),a("td",[e._v("Abtracted client code for audio playback, file management, graphic output and more. This also contains our heavily modified Gwen UI library.")])]),e._v(" "),a("tr",[a("td",[e._v("Intersect.Client")]),e._v(" "),a("td",[e._v("The actual Intersect Client code. MonoGame inherits the Client Framework to power the engine using MonoGame DesktopGl for cross platform support.")])]),e._v(" "),a("tr",[a("td",[e._v("Intersect.Editor")]),e._v(" "),a("td",[e._v("Intersect Game Editor which is also powered by MonoGame DirectX. DirectX is required due our use of SwapChainRenderTargets.")])]),e._v(" "),a("tr",[a("td",[e._v("Intersect.Server")]),e._v(" "),a("td",[e._v("Intersect Server which runs as a console application. This authoritative server controls every action taken within Intersect games.")])]),e._v(" "),a("tr",[a("td",[e._v("Intersect.Shared")]),e._v(" "),a("td",[e._v("Shared helper functions and information for all the projects above.")])]),e._v(" "),a("tr",[a("td",[e._v("Intersect.Tests.*")]),e._v(" "),a("td",[e._v("Unit testing for all of the projects listed above.")])]),e._v(" "),a("tr",[a("td",[e._v("Intersect.Utilities")]),e._v(" "),a("td",[e._v("Contains useful tools for working with Intersect. Stuff like generating rsa encryption keys for networking. Not used often.")])]),e._v(" "),a("tr",[a("td",[e._v("AUTHORS.md")]),e._v(" "),a("td",[e._v("List of Intersect Authors.")])]),e._v(" "),a("tr",[a("td",[e._v("CONTRIBUTORS.md")]),e._v(" "),a("td",[e._v("List of Intersect Contributors.")])]),e._v(" "),a("tr",[a("td",[e._v("Intersect.sln")]),e._v(" "),a("td",[e._v("Visual Studio Solution file that loads all of the aforementioned projects in Visual Studio.")])]),e._v(" "),a("tr",[a("td",[e._v("README.md")]),e._v(" "),a("td",[e._v("Readme file for Github that describes the Intersect engine, libraries we use, and more.")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);