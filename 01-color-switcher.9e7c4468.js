const t={startButEl:document.querySelector("button[data-start]"),stopButEl:document.querySelector("button[data-stop]"),bodyEl:document.body};let l=null;t.stopButEl.disabled=!0,t.startButEl.addEventListener("click",(()=>{t.startButEl.disabled=!0,t.stopButEl.disabled=!1,l=setInterval((()=>{t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.stopButEl.addEventListener("click",(()=>{clearInterval(l),t.startButEl.disabled=!1,t.stopButEl.disabled=!0}));
//# sourceMappingURL=01-color-switcher.9e7c4468.js.map