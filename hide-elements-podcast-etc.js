// ==UserScript==
// @name         Hide Elements Podcast ETC.
// @namespace    https://example.com/
// @version      1
// @description  Hides elements that have a specific aria-label attribute
// @author       MOS
// @match        https://open.spotify.com/*
// @grant        GM_addStyle
// ==/UserScript==

// change Denemeye değer programlar in your language. line 19

(function() {
    'use strict';

    const observer = new MutationObserver(function(mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                const elementsToHide = document.querySelectorAll('[aria-label="Denemeye değer programlar"]');
                elementsToHide.forEach(function(element) {
                    element.style.display = 'none';
                });
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
