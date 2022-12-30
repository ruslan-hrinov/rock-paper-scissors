(()=>{"use strict";const t=()=>{const t=new Audio("../src/sounds/switching.wav"),e=new Audio("../src/sounds/last-switch.wav"),s=document.querySelectorAll(".item"),r=document.querySelector(".game-table"),i=document.querySelector(".results-table"),n=document.querySelector(".first-score-table .score"),o=document.querySelector(".first-score-table");let l=+n.getAttribute("data-score");const c=document.querySelector(".second-score-table .score"),d=document.querySelector(".second-score-table");let m=+n.getAttribute("data-score");const g=g=>{new Promise((t=>{r.getAttribute("data-game-status")||(r.setAttribute("data-game-status","in-game"),s.forEach((e=>{e!=g&&e.animate([{filter:"brightness(100%)"},{filter:"brightness(30%)"}],{duration:1e3,iterations:1}).finished.then((()=>{e.style.filter="brightness(30%)",t()}))})))})).then((()=>{new Promise((t=>{if("item scissors"===g.className){const e=document.createElement("div");e.classList.add("item"),e.classList.add("scissors"),e.innerHTML='<img src="images/icon-scissors.svg">',e.setAttribute("data-clone",""),r.append(e),g.style.filter="brightness(30%)",e.style.boxShadow="none",g.style.boxShadow="0 8px rgb(180, 90, 174) , 0 6px rgb(113 113 113 / 42%) inset",e.style.transform="translate(-25%, -25%) rotate(0deg)",e.animate([{transform:"translate(-25%, -25%) rotate(0deg)"},{transform:"translate(-24%, -159%) rotate(-45deg)"}],{duration:750,iterations:1}).finished.then((()=>{e.style.transform="translate(-24%, -159%) rotate(-45deg)",e.style.zIndex="-1",t()}))}if("item paper"===g.className){const e=document.createElement("div");e.classList.add("item"),e.classList.add("paper"),e.innerHTML='<img src="images/icon-paper.svg">',e.setAttribute("data-clone",""),r.append(e),g.style.filter="brightness(30%)",e.style.boxShadow="none",g.style.boxShadow="0 8px rgb(12, 125, 98) , 0 6px rgb(113 113 113 / 42%) inset",e.style.transform="translate(-25%, -25%) rotate(0deg)",e.animate([{transform:"translate(-25%, -25%) rotate(0deg)"},{transform:"translate(-141%, 25%) rotate(-45deg)"}],{duration:750,iterations:1}).finished.then((()=>{e.style.transform="translate(-141%, 25%) rotate(-45deg)",e.style.zIndex="-1",t()}))}if("item rock"===g.className){const e=document.createElement("div");e.classList.add("item"),e.classList.add("rock"),e.innerHTML='<img src="images/icon-rock.svg">',e.setAttribute("data-clone",""),r.append(e),g.style.filter="brightness(30%)",e.style.boxShadow="none",g.style.boxShadow="0 8px rgb(211, 150, 15) , 0 6px rgb(113 113 113 / 42%) inset",e.style.transform="translate(-25%, -25%) rotate(0deg)",e.animate([{transform:"translate(-25%, -25%) rotate(0deg)"},{transform:"translate(83%, 25%) rotate(-45deg)"}],{duration:750,iterations:1}).finished.then((()=>{e.style.transform="translate(83%, 25%) rotate(-45deg)",e.style.zIndex="-1",t()}))}})).then((()=>{new Promise((a=>{let r=function(t,e){let s=10+6*Math.random();return Math.floor(s)}(),i=0;function n(t){return t<2?++i:i=0,i}function o(r,i){setTimeout((()=>{s[i].style.filter="brightness(70%)",t.play()}),120),setTimeout((()=>{s[i].style.filter="brightness(30%)"}),500),r-=1;let l=n(i);setTimeout((()=>{r>1?o(r,l):setTimeout((()=>{s[l].style.filter="brightness(100%)",s[l].style.boxShadow="none",s[l].style.transitionDuration="0.8s",s[l].style.transform="translate(-25%, -21%)",e.play(),a(l)}),100)}),320)}setTimeout((()=>{o(r,i)}),400)})).then((t=>{new Promise((e=>{setTimeout((()=>{"item rock"==g.className&&2==t?(i.innerHTML="YOU WON",i.classList.add("won"),l+=1,n.innerHTML=l,o.classList.add("active"),n.setAttribute("data-score",l)):"item rock"==g.className&&1==t?(i.innerHTML="YOU LOSE",i.classList.add("lose"),m+=1,c.innerHTML=m,d.classList.add("active"),c.setAttribute("data-score",m)):"item rock"==g.className&&(i.innerHTML="DRAW",i.classList.add("draw")),"item paper"==g.className&&0==t?(i.innerHTML="YOU WON",i.classList.add("won"),l+=1,n.innerHTML=l,o.classList.add("active"),n.setAttribute("data-score",l)):"item paper"==g.className&&2==t?(i.innerHTML="YOU LOSE",i.classList.add("lose"),m+=1,c.innerHTML=m,d.classList.add("active"),c.setAttribute("data-score",m)):"item paper"==g.className&&(i.innerHTML="DRAW",i.classList.add("draw")),"item scissors"==g.className&&1==t?(i.innerHTML="YOU WON",i.classList.add("won"),l+=1,n.innerHTML=l,o.classList.add("active"),n.setAttribute("data-score",l)):"item scissors"==g.className&&0==t?(i.innerHTML="YOU LOSE",i.classList.add("lose"),m+=1,c.innerHTML=m,d.classList.add("active"),c.setAttribute("data-score",m)):"item scissors"==g.className&&(i.innerHTML="DRAW",i.classList.add("draw")),e()}),1e3)}))})).then((()=>{new Promise((t=>{setTimeout((()=>{s.forEach((e=>{e.style.transitionDuration="unset","item scissors"===e.className&&e.animate([{transform:"translate(-25%, -25%) rotate(0deg)"},{transform:"translate(-24%, -159%) rotate(-45deg)",filter:"brightness(30%)"}],{duration:1700,easing:"cubic-bezier(0.5, 0.5, 0.4, 1)",iterations:1}).finished.then((()=>{e.style.transform="translate(-24%, -159%) rotate(-45deg)",e.style.filter="brightness(30%)",document.querySelector("[data-clone]").remove(),t()})),"item paper"===e.className&&e.animate([{transform:"translate(-25%, -25%) rotate(0deg)"},{transform:"translate(-141%, 25%) rotate(-45deg)",filter:"brightness(30%)"}],{duration:1700,easing:"cubic-bezier(0.5, 0.5, 0.4, 1)",iterations:1}).finished.then((()=>{e.style.transform="translate(-141%, 25%) rotate(-45deg)",e.style.filter="brightness(30%)"})),"item rock"===e.className&&e.animate([{transform:"translate(-25%, -25%) rotate(0deg)"},{transform:"translate(83%, 25%) rotate(-45deg)",filter:"brightness(30%)"}],{duration:1700,easing:"cubic-bezier(0.5, 0.5, 0.4, 1)",iterations:1}).finished.then((()=>{e.style.transform="translate(83%, 25%) rotate(-45deg)",e.style.filter="brightness(30%)"}))}))}),3e3)})).then((()=>{new Promise((t=>{i.innerHTML="",i.classList.contains("lose")&&(i.classList.remove("lose"),d.classList.remove("active")),i.classList.contains("won")&&(i.classList.remove("won"),o.classList.remove("active")),i.classList.contains("draw")&&i.classList.remove("draw"),s.forEach((t=>{"item scissors"===t.className&&(t.style.boxShadow="0 8px rgb(180, 90, 174) , 0 6px rgb(113 113 113 / 42%) inset"),"item paper"===t.className&&(t.style.boxShadow="0 8px rgb(12, 125, 98) , 0 6px rgb(113 113 113 / 42%) inset"),"item rock"===t.className&&(t.style.boxShadow="0 8px rgb(211, 150, 15) , 0 6px rgb(113 113 113 / 42%) inset")})),t()})).then((()=>{a()}))}))}))}))}))};s.forEach((t=>{t.addEventListener("click",(()=>{g(t)}),{once:!0})}))},e=document.querySelectorAll(".item"),s=document.querySelector(".game-table"),a=()=>{new Promise((t=>{e.forEach((e=>{"item scissors"===e.className&&e.animate([{transform:"translate(-24%, -159%) rotate(-45deg)",filter:"brightness(30%)"},{transform:"translate(-25%, -25%) rotate(0deg)",filter:"brightness(100%)"}],{duration:1500,easing:"cubic-bezier(0.5, 0.5, 0.4, 1)",iterations:1}).finished.then((()=>{e.style.transform="translate(-25%, -25%) rotate(0deg)",e.style.filter="brightness(100%)"})),"item paper"===e.className&&e.animate([{transform:"translate(-141%, 25%) rotate(-45deg)",filter:"brightness(30%)"},{transform:"translate(-25%, -25%) rotate(0deg)",filter:"brightness(100%)"}],{duration:1500,easing:"cubic-bezier(0.5, 0.5, 0.4, 1)",iterations:1}).finished.then((()=>{e.style.transform="translate(-25%, -25%) rotate(0deg)",e.style.filter="brightness(100%)"})),"item rock"===e.className&&e.animate([{transform:"translate(83%, 25%) rotate(-45deg)",filter:"brightness(30%)"},{transform:"translate(-25%, -25%) rotate(0deg)",filter:"brightness(100%)"}],{duration:1500,easing:"cubic-bezier(0.5, 0.5, 0.4, 1)",iterations:1}).finished.then((()=>{e.style.transform="translate(-25%, -25%) rotate(0deg)",e.style.filter="brightness(100%)",t()}))}))})).then((()=>{s.getAttribute("data-game-status","in-game")&&s.removeAttribute("data-game-status","in-game"),t()}))};setTimeout((()=>{const t=document.querySelectorAll(".item"),e=document.querySelector(".game-table"),s=(t,e)=>{"hide"===e?(t.style.boxShadow="none",t.style.transitionDuration="0.8s",t.style.transform="translate(-25%, -21%)"):("item scissors"===t.className&&(t.style.boxShadow="0 8px rgb(180, 90, 174) , 0 6px rgb(113 113 113 / 42%) inset",t.style.transitionDuration="0.6s",t.style.transform="translate(-25%, -25%)"),"item paper"===t.className&&(t.style.boxShadow="0 8px rgb(12, 125, 98) , 0 6px rgb(113 113 113 / 42%) inset",t.style.transitionDuration="0.6s",t.style.transform="translate(-25%, -25%)"),"item rock"===t.className&&(t.style.boxShadow="0 8px rgb(211, 150, 15) , 0 6px rgb(113 113 113 / 42%) inset",t.style.transitionDuration="0.6s",t.style.transform="translate(-25%, -25%)"))};t.forEach((t=>{t.addEventListener("mousemove",(()=>{e.getAttribute("data-game-status","in-game")||s(t,"hide")})),t.addEventListener("mouseout",(()=>{e.getAttribute("data-game-status","in-game")||s(t,"remove")}))}))}),1600),a()})();