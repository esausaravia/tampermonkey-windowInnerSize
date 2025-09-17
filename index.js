// ==UserScript==
// @name         windowInnerSize
// @namespace    exablack/windowInnerSize
// @version      2025-07-02
// @description  try to take over the world!
// @author       ExaBlack
// @match        *
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let element = document.createElement('div');
    element.id = 'exaWindowInnerSize';
    element.setAttribute('style','position:fixed; bottom:0; left:0; z-index:9999; background-color:rgba(0,0,0,.6); color:#fafaff; padding:0 4px; font-size: 12px; line-height:1.2;');
    document.body.append(element);

    function displayWindowInnerSize(){
        element.textContent = window.innerWidth + 'x' + window.innerHeight;
    }
    displayWindowInnerSize();
    window.addEventListener('resize', displayWindowInnerSize);
})();