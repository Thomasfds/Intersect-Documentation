(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{574:function(t,e,s){"use strict";s.r(e);var a=s(27),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),s("h2",{attrs:{id:"get-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-token"}},[t._v("#")]),t._v(" Get Token")]),t._v(" "),s("p",[t._v("Get an authorization token for api requests that require auth.")]),t._v(" "),s("h3",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("p",[s("strong",[t._v("URL")]),t._v(" : "),s("code",[t._v("/api/oauth/token")])]),t._v(" "),s("p",[s("strong",[t._v("Method")]),t._v(" : "),s("code",[t._v("POST")])]),t._v(" "),s("p",[s("strong",[t._v("Authorization Required")]),t._v(" : "),s("code",[t._v("No")])]),t._v(" "),s("p",[s("strong",[t._v("Content Type")]),t._v(" : "),s("code",[t._v("application/json")])]),t._v(" "),s("p",[s("strong",[t._v("Body")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("grant_type")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Auth Type.")]),t._v(" "),s("td",[t._v("✔️")])]),t._v(" "),s("tr",[s("td",[t._v("username")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Username of API Authorized Account")]),t._v(" "),s("td",[t._v("✔️")])]),t._v(" "),s("tr",[s("td",[t._v("password")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("SHA256 Hash of Account Password")]),t._v(" "),s("td",[t._v("✔️")])])])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"grant_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jcsnider"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Notes")])]),t._v(" "),s("ul",[s("li",[t._v("The grant type to receive an auth token is 'password'.")]),t._v(" "),s("li",[t._v("Password must be a SHA256 hash of the user's password, with hyphens removed.")]),t._v(" "),s("li",[t._v("You can generate a SHA256 hash of a plaintext password "),s("a",{attrs:{href:"https://passwordsgenerator.net/sha256-hash-generator/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("p",[s("strong",[t._v("Condition")]),t._v(" : If authentication was successful and token was generated.")]),t._v(" "),s("p",[s("strong",[t._v("Code")]),t._v(" : "),s("code",[t._v("200 SUCCESS")])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4RoC_BqVns0p7guzWe-Ah4C6SiVmNcBO0KnFNLtGCxuPZbfF9QJnGc5zbrhM-EQ8c_fajWk076pyI-bjaUPsfyd_c2u5XLCANc4khfpTmq87ksvjDpMI87NVIWOCy1QAUTQoszf-CSkweyw-At31UjBUBTQ6iuidQcG-eZqdnecjKDWQ5vOBZpjI-Xlz7m8UZBjuEWf4sFIqbAnIQl54F8VSIr26QtcUROkUWepLFPqSa8ZO110vg5xefTy-wJmEwbn1zOAuSMR6yKah39GBU_xtkuHw1WaiJ_iSQLRiF7z-v0Ct1DYbMrmqaVdFI1xUwsrFN3WWgwpxxsXEBajcFkL9Ou7MSQBwWlI5sU4WlYJbKAGlaMJU9sohK5I3Q3B34UTub0xNdiyhqzn9E0HIep_RUzzE1YZhGmV3bBoV-cYTxSTfpTXIFuH9f8tbv-FPhylWY__hqndUKVpq4ez2n9HqfCdDi6HdYd1mcTyDTABdy248VeMPqiwKUl-95w87"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bearer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("299")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"efd947fe-a874-4259-9b06-41a8a9505e35"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('".issued"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mon, 29 Jul 2019 19:52:04 GMT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('".expires"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mon, 29 Jul 2019 19:57:04 GMT"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),s("ul",[s("li",[t._v("The refresh_token is the token's id, it is used to refresh or delete the token using the routes below.")]),t._v(" "),s("li",[t._v("For all requests that require authentication you will need to supply the access token within the request header. The proper format can found below.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Header")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("authorization")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Bearer [access_token]")])])])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("authorization: Bearer 4RoC_BqVns0p7guzWe-Ah4C6SiVmNcBO0KnFNLtGCxuPZbfF9QJnGc5zbrhM-EQ8c_fajWk076pyI-bjaUPsfyd_c2u5XLCANc4khfpTmq87ksvjDpMI87NVIWOCy1QAUTQoszf-CSkweyw-At31UjBUBTQ6iuidQcG-eZqdnecjKDWQ5vOBZpjI-Xlz7m8UZBjuEWf4sFIqbAnIQl54F8VSIr26QtcUROkUWepLFPqSa8ZO110vg5xefTy-wJmEwbn1zOAuSMR6yKah39GBU_xtkuHw1WaiJ_iSQLRiF7z-v0Ct1DYbMrmqaVdFI1xUwsrFN3WWgwpxxsXEBajcFkL9Ou7MSQBwWlI5sU4WlYJbKAGlaMJU9sohK5I3Q3B34UTub0xNdiyhqzn9E0HIep_RUzzE1YZhGmV3bBoV-cYTxSTfpTXIFuH9f8tbv-FPhylWY__hqndUKVpq4ez2n9HqfCdDi6HdYd1mcTyDTABdy248VeMPqiwKUl-95w87\n")])])]),s("h2",{attrs:{id:"refresh-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refresh-token"}},[t._v("#")]),t._v(" Refresh Token")]),t._v(" "),s("p",[t._v("Refreshes an existing token delaying it's expiration.")]),t._v(" "),s("h3",{attrs:{id:"request-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("p",[s("strong",[t._v("URL")]),t._v(" : "),s("code",[t._v("/api/oauth/token")])]),t._v(" "),s("p",[s("strong",[t._v("Method")]),t._v(" : "),s("code",[t._v("POST")])]),t._v(" "),s("p",[s("strong",[t._v("Authorization Required")]),t._v(" : "),s("code",[t._v("Yes")])]),t._v(" "),s("p",[s("strong",[t._v("Content Type")]),t._v(" : "),s("code",[t._v("application/json")])]),t._v(" "),s("p",[s("strong",[t._v("Body")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("grant_type")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Auth Type.")]),t._v(" "),s("td",[t._v("✔️")])]),t._v(" "),s("tr",[s("td",[t._v("refresh_token")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Refresh Token Id")]),t._v(" "),s("td",[t._v("✔️")])])])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"grant_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"refresh_token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"efd947fe-a874-4259-9b06-41a8a9505e35"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Notes")])]),t._v(" "),s("ul",[s("li",[t._v("The grant type should be 'refresh_token'.")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"response-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("p",[s("strong",[t._v("Condition")]),t._v(" : Token Refreshed")]),t._v(" "),s("p",[s("strong",[t._v("Code")]),t._v(" : "),s("code",[t._v("200 SUCCESS")])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3OSlfC8yg_fcSGdAGa9n63mDnvwfVhSOo1lgdj0-q4l2EsFvZ1nbZYVoqJd27TI4ksZALxJbzpwcvDHJwg8Frmvlvys-VHE0TLSNK-_o7YvgT2TA3BIASI2nQdA6dx_LIuB5LJhQpIWrlypCpEgP_FRtDfGevUEVpskTP7wB0VDw02RsVaNW19qKWMNwdqU07KxvtY-ghWquMVw1UQfR5LQTbt48b-e741CeFSa1zCD7Zt3UCjaG5NYt7YawOnS-qsA0dL3fCNhQbhjVVe2UZ613JledeiZowKmoIMPqxH9wuTbSvMOqx-YRH2GItVIzk5EfV-gnpZvFUlAtpZjmQqsxUlWX0CWpvpT6Vcr4NMnNCB8MhSuOjNBDQBkA5Z7QVxgEuywa3lyYDuWnD6OpystzuyTWnF3ETzgb8DfgmbGu_VxpdpBgufq9yeVE0KPh8XaIEVkICDIzJCArmPWgrgHr_AXnsl-OwBL-VoNgs7j6BlN_jHQ_Wd6A5LoJU_mv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bearer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("299")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e27a8020-f9bb-419b-8a06-5421a1452a78"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('".issued"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Thu, 01 Aug 2019 19:44:09 GMT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('".expires"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Thu, 01 Aug 2019 19:49:09 GMT"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"delete-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-token"}},[t._v("#")]),t._v(" Delete Token")]),t._v(" "),s("p",[t._v("Deletes the token associated with a given authorization header.")]),t._v(" "),s("h3",{attrs:{id:"request-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-3"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("p",[s("strong",[t._v("URL")]),t._v(" : "),s("code",[t._v("/api/oauth/token/[username]")])]),t._v(" "),s("p",[s("strong",[t._v("Method")]),t._v(" : "),s("code",[t._v("DELETE")])]),t._v(" "),s("p",[s("strong",[t._v("Authorization Required")]),t._v(" : "),s("code",[t._v("Yes")])]),t._v(" "),s("p",[s("strong",[t._v("Body")]),t._v(" : "),s("code",[t._v("None")])]),t._v(" "),s("p",[s("strong",[t._v("Notes")])]),t._v(" "),s("ul",[s("li",[t._v("The tokenId within the request url is returned as the 'refresh_token' in the Get Token and Refresh Token responses.")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"response-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("p",[s("strong",[t._v("Condition")]),t._v(" : Token Deleted")]),t._v(" "),s("p",[s("strong",[t._v("Code")]),t._v(" : "),s("code",[t._v("200 SUCCESS")])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jcsnider"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"delete-token-by-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-token-by-id"}},[t._v("#")]),t._v(" Delete Token By Id")]),t._v(" "),s("p",[t._v("Deletes an authorization token preventing further use.")]),t._v(" "),s("h3",{attrs:{id:"request-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-4"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("p",[s("strong",[t._v("URL")]),t._v(" : "),s("code",[t._v("/api/oauth/token/[username]/[tokenId]")])]),t._v(" "),s("p",[s("strong",[t._v("Method")]),t._v(" : "),s("code",[t._v("DELETE")])]),t._v(" "),s("p",[s("strong",[t._v("Authorization Required")]),t._v(" : "),s("code",[t._v("No")])]),t._v(" "),s("p",[s("strong",[t._v("Body")]),t._v(" : "),s("code",[t._v("None")])]),t._v(" "),s("p",[s("strong",[t._v("Notes")])]),t._v(" "),s("ul",[s("li",[t._v("The tokenId within the request url is returned as the 'refresh_token' in the Get Token and Refresh Token responses.")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"response-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("p",[s("strong",[t._v("Condition")]),t._v(" : Token Deleted")]),t._v(" "),s("p",[s("strong",[t._v("Code")]),t._v(" : "),s("code",[t._v("200 SUCCESS")])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jcsnider"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tokenId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c7edff1c-ef0a-47e5-ba5f-a08b169c411e"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);