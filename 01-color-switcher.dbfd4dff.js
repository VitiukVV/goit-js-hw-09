!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body");e.disabled=!0,t.addEventListener("click",(function(n){setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(a){clearInterval(changeColor),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.dbfd4dff.js.map
