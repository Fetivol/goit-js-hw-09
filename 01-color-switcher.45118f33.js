!function(){var t={startButEl:document.querySelector("button[data-start]"),stopButEl:document.querySelector("button[data-stop]"),bodyEl:document.body},l=null;t.stopButEl.disabled=!0,t.startButEl.addEventListener("click",(function(){t.startButEl.disabled=!0,t.stopButEl.disabled=!1,l=setInterval((function(){t.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.stopButEl.addEventListener("click",(function(){clearInterval(l),t.startButEl.disabled=!1,t.stopButEl.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.45118f33.js.map
