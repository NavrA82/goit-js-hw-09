!function(){var o={buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-stop]"),bodyView:document.querySelector("body")},t=null;o.buttonStart.style.cssText="background-color: #4d5ae5; font-size: large; color: #44cc1a; padding: 20px 40px; border: 2px solid #44cc1a; border-radius: 8px; cursor: pointer;",o.buttonStop.style.cssText="background-color: #4d5ae5; font-size: large; color: #f6c218; padding: 20px 40px; border: 2px solid #f6c218;  border-radius: 8px; cursor: pointer;",o.bodyView.style.cssText="background-color: #a9a8a8; display: flex; gap: 20px; align-items: center;\nflex-direction: column;",o.buttonStart.addEventListener("click",(function(){t=setInterval((function(){o.bodyView.style.cssText="background-color: ".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),"; display: flex; gap: 20px; align-items: center;\nflex-direction: column;")}),1e3),o.buttonStart.disabled=!0,o.buttonStop.disabled=!1,o.buttonStart.style.cssText="background-color: rgba(239, 239, 239, 0.3); font-size: large; color: rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3); padding: 20px 40px; border: 2px solid rgba(118, 118, 118, 0.3), rgba(195, 195, 195, 0.3); border-radius: 8px; ",o.buttonStop.style.cssText="background-color: #4d5ae5; font-size: large; color: #f6c218; padding: 20px 40px; border: 2px solid #f6c218; border-radius: 8px; cursor: pointer;"})),o.buttonStop.addEventListener("click",(function(){clearInterval(t),o.buttonStart.disabled=!1,o.buttonStop.disabled=!0,o.buttonStart.style.cssText="background-color: #4d5ae5; font-size: large; color: #44cc1a; padding: 20px 40px; border: 2px solid #44cc1a; border-radius: 8px; cursor: pointer;",o.buttonStop.style.cssText="background-color: rgba(239, 239, 239, 0.3); font-size: large; color:  rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3); padding: 20px 40px; border: 2px solid rgba(118, 118, 118, 0.3), rgba(195, 195, 195, 0.3);  border-radius: 8px;"}))}();
//# sourceMappingURL=01-color-switcher.30f5eae4.js.map
