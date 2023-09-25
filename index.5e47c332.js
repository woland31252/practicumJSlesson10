const e={headers:{"x-api-key":"live_eFQNzE6t9Yns8DpBqOnhUKvvvHPrVTd4nqMp4HJQUHmfMUGURXupaEMIop0eMOzH"}};document.querySelector(".breed-select");fetch("https://api.thecatapi.com/v1/breeds",e).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>console.log(e)));
//# sourceMappingURL=index.5e47c332.js.map
