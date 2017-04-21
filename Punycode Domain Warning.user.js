// ==UserScript==
// @name         Punycode Domain Warning
// @namespace    http://taskinoz.com
// @version      1.0
// @description  Alerts you to sites using punycode URL's
// @author       Taskinoz
// @match        *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
   //Punycode Alert
   if (window.location.hostname.includes("xn--"))alert("This domain contains unicode characters which may be used to look like another websites. \n\n Read more about the vulnerability here http://thehackernews.com/2017/04/unicode-Punycode-phishing-attack.html");
})();
