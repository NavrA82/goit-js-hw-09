const o={buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-stop]"),bodyView:document.querySelector("body")};let r=null;o.buttonStart.style.cssText="background-color: #08aa31c2; font-size: large; color: #f6c218; padding: 20px 40px; border: 2px solid #f6c218; border-radius: 8px; cursor: pointer;",o.buttonStop.style.cssText="background-color: rgba(239, 239, 239, 0.3); font-size: large; color:  rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3); padding: 20px 40px; border: 2px solid rgba(118, 118, 118, 0.3), rgba(195, 195, 195, 0.3);  border-radius: 8px;",o.buttonStop.disabled=!0,o.bodyView.style.cssText="background-color: #a9a8a8; display: flex; gap: 20px; align-items: center;\nflex-direction: column;",o.buttonStart.addEventListener("click",(()=>{r=setInterval((()=>{o.bodyView.style.cssText=`background-color: #${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}; display: flex; gap: 20px; align-items: center;\nflex-direction: column;`}),1e3),o.buttonStart.disabled=!0,o.buttonStop.disabled=!1,o.buttonStart.style.cssText="background-color: rgba(239, 239, 239, 0.3); font-size: large; color: rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3); padding: 20px 40px; border: 2px solid rgba(118, 118, 118, 0.3), rgba(195, 195, 195, 0.3); border-radius: 8px; ",o.buttonStop.style.cssText="background-color: #e42525cd; font-size: large; color: #f6c218; padding: 20px 40px; border: 2px solid #f6c218; border-radius: 8px; cursor: pointer;"})),o.buttonStop.addEventListener("click",(()=>{clearInterval(r),o.buttonStart.disabled=!1,o.buttonStop.disabled=!0,o.buttonStart.style.cssText="background-color: #08aa31c2; font-size: large; color: #f6c218; padding: 20px 40px; border: 2px solid #f6c218; border-radius: 8px; cursor: pointer;",o.buttonStop.style.cssText="background-color: rgba(239, 239, 239, 0.3); font-size: large; color:  rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3); padding: 20px 40px; border: 2px solid rgba(118, 118, 118, 0.3), rgba(195, 195, 195, 0.3);  border-radius: 8px;"}));
//# sourceMappingURL=01-color-switcher.2889eef2.js.map