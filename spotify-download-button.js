// ==UserScript==
// @name         Hide Spotify Web-App Download Button
// @namespace    https://example.com/
// @version      1
// @description  Hides the download button on the Spotify web app
// @author       MOS
// @match        https://open.spotify.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('a[href="/download"] { display: none !important; }');
})();
