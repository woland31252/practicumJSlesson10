const e={headers:{"x-api-key":"live_eFQNzE6t9Yns8DpBqOnhUKvvvHPrVTd4nqMp4HJQUHmfMUGURXupaEMIop0eMOzH"}};function t(t){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}`,e).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}const n=document.querySelector(".breed-select"),r=(document.querySelector(".cat-info"),document.querySelector(".loader")),o=document.querySelector(".error");function c(){o.classList.toggle("is-hidden")}r.classList.toggle("is-hidden"),fetch("https://api.thecatapi.com/v1/breeds",e).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{if(0===e.length)throw new Error("No data");return e.reduce(((e,t)=>function({id:e,name:t}){return`<option id="${e}">${t}</option>`}(t)+e),"")})).then((function(e){n.innerHTML=e,r.classList.toggle("is-hidden")})).catch(c),n.addEventListener("change",(function(e){t(e.currentTarget.value).then((e=>console.log(e))).catch(c)}));
//# sourceMappingURL=index.824df22e.js.map
