function e(e){return e&&e.__esModule?e.default:e}var t={};t=function(){function e(){return Math.random().toString(36).substring(2,10)}function t(e,t){function s(e,s){return s&&e&&e.classList&&e.classList.contains(s)||s&&e&&e.dataset&&e.dataset.id&&e.dataset.id===t?e:null}function i(e,t){return e&&e!==document?s(e,t)?e:i(e.parentNode,t):null}return s(e,t)||i(e,t)}function s(e,t=50,s=!1){let i;return function(...n){const a=self,l=()=>{i=null,s||e.apply(a,n)},o=s&&!i;clearTimeout(i),i=setTimeout(l,t),o&&e.apply(a,n)}}function i(e,t){return JSON.stringify(e)===JSON.stringify(t)}function n(e){const t=e.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,(e=>"-"+e.toLowerCase()));return e[0]===e[0].toUpperCase()?t.substring(1):t}class a{constructor(t){this.id="",this.style="",this.class=[],this.isMultiple=!1,this.isOpen=!1,this.isFullOpen=!1,this.intervalMove=null,t||(t={}),this.id="ss-"+e(),this.style=t.style||"",this.class=t.class||[],this.disabled=void 0!==t.disabled&&t.disabled,this.alwaysOpen=void 0!==t.alwaysOpen&&t.alwaysOpen,this.showSearch=void 0===t.showSearch||t.showSearch,this.searchPlaceholder=t.searchPlaceholder||"Search",this.searchText=t.searchText||"No Results",this.searchingText=t.searchingText||"Searching...",this.searchHighlight=void 0!==t.searchHighlight&&t.searchHighlight,this.closeOnSelect=void 0===t.closeOnSelect||t.closeOnSelect,this.contentLocation=t.contentLocation||document.body,this.contentPosition=t.contentPosition||"absolute",this.openPosition=t.openPosition||"auto",this.placeholderText=void 0!==t.placeholderText?t.placeholderText:"Select Value",this.allowDeselect=void 0!==t.allowDeselect&&t.allowDeselect,this.hideSelected=void 0!==t.hideSelected&&t.hideSelected,this.showOptionTooltips=void 0!==t.showOptionTooltips&&t.showOptionTooltips,this.minSelected=t.minSelected||0,this.maxSelected=t.maxSelected||1e3,this.timeoutDelay=t.timeoutDelay||200,this.maxValuesShown=t.maxValuesShown||20,this.maxValuesMessage=t.maxValuesMessage||"{number} selected"}}class l{constructor(t){if(this.id=t.id&&""!==t.id?t.id:e(),this.label=t.label||"",this.selectAll=void 0!==t.selectAll&&t.selectAll,this.selectAllText=t.selectAllText||"Select All",this.closable=t.closable||"off",this.options=[],t.options)for(const e of t.options)this.options.push(new o(e))}}class o{constructor(t){this.id=t.id&&""!==t.id?t.id:e(),this.value=void 0===t.value?t.text:t.value,this.text=t.text||"",this.html=t.html||"",this.selected=void 0!==t.selected&&t.selected,this.display=void 0===t.display||t.display,this.disabled=void 0!==t.disabled&&t.disabled,this.mandatory=void 0!==t.mandatory&&t.mandatory,this.placeholder=void 0!==t.placeholder&&t.placeholder,this.class=t.class||"",this.style=t.style||"",this.data=t.data||{}}}class c{validateDataArray(e){if(!Array.isArray(e))return new Error("Data must be an array");for(let t of e){if(!(t instanceof l||"label"in t))return t instanceof o||"text"in t?this.validateOption(t):new Error("Data object must be a valid optgroup or option");if(!("label"in t))return new Error("Optgroup must have a label");if("options"in t&&t.options)for(let e of t.options)return this.validateOption(e)}return null}validateOption(e){return"text"in e?null:new Error("Option must have a text")}partialToFullData(e){let t=[];return e.forEach((e=>{if(e instanceof l||"label"in e){let s=[];"options"in e&&e.options&&e.options.forEach((e=>{s.push(new o(e))})),s.length>0&&t.push(new l(e))}(e instanceof o||"text"in e)&&t.push(new o(e))})),t}setData(e){this.data=this.partialToFullData(e),"single"===this.selectType&&this.setSelectedBy("value",this.getSelected())}getData(){return this.filter(null,!0)}getDataOptions(){return this.filter(null,!1)}addOption(e){this.setData(this.getData().concat(new o(e)))}setSelectedBy(e,t){let s=null,i=!1;for(let n of this.data){if(n instanceof l)for(let a of n.options)s||(s=a),a.selected=!i&&t.includes(a[e]),a.selected&&"single"===this.selectType&&(i=!0);n instanceof o&&(s||(s=n),n.selected=!i&&t.includes(n[e]),n.selected&&"single"===this.selectType&&(i=!0))}"single"===this.selectType&&s&&!i&&(s.selected=!0)}getSelected(){let e=this.getSelectedOptions(),t=[];return e.forEach((e=>{t.push(e.value)})),t}getSelectedOptions(){return this.filter((e=>e.selected),!1)}getSelectedIDs(){let e=this.getSelectedOptions(),t=[];return e.forEach((e=>{t.push(e.id)})),t}getOptgroupByID(e){for(let t of this.data)if(t instanceof l&&t.id===e)return t;return null}getOptionByID(e){let t=this.filter((t=>t.id===e),!1);return t.length?t[0]:null}search(e,t){return""===(e=e.trim())?this.getData():this.filter((s=>t(s,e)),!0)}filter(e,t){const s=[];return this.data.forEach((i=>{if(i instanceof l){let n=[];if(i.options.forEach((i=>{e&&!e(i)||(t?n.push(new o(i)):s.push(new o(i)))})),n.length>0){let e=new l(i);e.options=n,s.push(e)}}i instanceof o&&(e&&!e(i)||s.push(new o(i)))})),s}getSelectType(){return this.selectType}constructor(e,t){this.selectType="single",this.data=[],this.selectType=e,this.setData(t)}}class h{enable(){this.main.main.classList.remove(this.classes.disabled),this.content.search.input.disabled=!1}disable(){this.main.main.classList.add(this.classes.disabled),this.content.search.input.disabled=!0}open(){this.main.arrow.path.setAttribute("d",this.classes.arrowOpen),this.main.main.classList.add("up"===this.settings.openPosition?this.classes.openAbove:this.classes.openBelow),this.main.main.setAttribute("aria-expanded","true"),this.moveContent();const e=this.store.getSelectedOptions();if(e.length){const t=e[e.length-1].id,s=this.content.list.querySelector('[data-id="'+t+'"]');s&&this.ensureElementInView(this.content.list,s)}}close(){this.main.main.classList.remove(this.classes.openAbove),this.main.main.classList.remove(this.classes.openBelow),this.main.main.setAttribute("aria-expanded","false"),this.content.main.classList.remove(this.classes.openAbove),this.content.main.classList.remove(this.classes.openBelow),this.main.arrow.path.setAttribute("d",this.classes.arrowClose)}updateClassStyles(){if(this.main.main.className="",this.main.main.removeAttribute("style"),this.content.main.className="",this.content.main.removeAttribute("style"),this.main.main.classList.add(this.classes.main),this.content.main.classList.add(this.classes.content),""!==this.settings.style&&(this.main.main.style.cssText=this.settings.style,this.content.main.style.cssText=this.settings.style),this.settings.class.length)for(const e of this.settings.class)""!==e.trim()&&(this.main.main.classList.add(e.trim()),this.content.main.classList.add(e.trim()));"relative"===this.settings.contentPosition&&this.content.main.classList.add("ss-"+this.settings.contentPosition)}updateAriaAttributes(){this.main.main.role="combobox",this.main.main.setAttribute("aria-haspopup","listbox"),this.main.main.setAttribute("aria-controls",this.content.main.id),this.main.main.setAttribute("aria-expanded","false"),this.content.main.setAttribute("role","listbox")}mainDiv(){var e;const t=document.createElement("div");t.dataset.id=this.settings.id,t.id=this.settings.id,t.tabIndex=0,t.onkeydown=e=>{switch(e.key){case"ArrowUp":case"ArrowDown":return this.callbacks.open(),"ArrowDown"===e.key?this.highlight("down"):this.highlight("up"),!1;case"Tab":return this.callbacks.close(),!0;case"Enter":case" ":this.callbacks.open();const t=this.content.list.querySelector("."+this.classes.highlighted);return t&&t.click(),!1;case"Escape":return this.callbacks.close(),!1}},t.onclick=e=>{this.settings.disabled||(this.settings.isOpen?this.callbacks.close():this.callbacks.open())};const s=document.createElement("div");s.classList.add(this.classes.values),t.appendChild(s);const i=document.createElement("div");i.classList.add(this.classes.deselect);const n=null===(e=this.store)||void 0===e?void 0:e.getSelectedOptions();!this.settings.allowDeselect||this.settings.isMultiple&&n&&n.length<=0?i.classList.add(this.classes.hide):i.classList.remove(this.classes.hide),i.onclick=e=>{if(e.stopPropagation(),this.settings.disabled)return;let t=!0;const s=this.store.getSelectedOptions(),i=[];this.callbacks.beforeChange&&(t=!0===this.callbacks.beforeChange(i,s)),t&&(this.settings.isMultiple?(this.callbacks.setSelected([],!1),this.updateDeselectAll()):this.callbacks.setSelected([""],!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(i))};const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("viewBox","0 0 100 100");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d",this.classes.deselectPath),a.appendChild(l),i.appendChild(a),t.appendChild(i);const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.classList.add(this.classes.arrow),o.setAttribute("viewBox","0 0 100 100");const c=document.createElementNS("http://www.w3.org/2000/svg","path");return c.setAttribute("d",this.classes.arrowClose),this.settings.alwaysOpen&&o.classList.add(this.classes.hide),o.appendChild(c),t.appendChild(o),{main:t,values:s,deselect:{main:i,svg:a,path:l},arrow:{main:o,path:c}}}mainFocus(e){"click"!==e&&this.main.main.focus({preventScroll:!0})}placeholder(){const e=this.store.filter((e=>e.placeholder),!1);let t=this.settings.placeholderText;e.length&&(""!==e[0].html?t=e[0].html:""!==e[0].text&&(t=e[0].text));const s=document.createElement("div");return s.classList.add(this.classes.placeholder),s.innerHTML=t,s}renderValues(){this.settings.isMultiple?this.renderMultipleValues():this.renderSingleValue()}renderSingleValue(){const e=this.store.filter((e=>e.selected&&!e.placeholder),!1),t=e.length>0?e[0]:null;if(t){const e=document.createElement("div");e.classList.add(this.classes.single),t.html?e.innerHTML=t.html:e.innerText=t.text,this.main.values.innerHTML=e.outerHTML}else this.main.values.innerHTML=this.placeholder().outerHTML;this.settings.allowDeselect&&e.length?this.main.deselect.main.classList.remove(this.classes.hide):this.main.deselect.main.classList.add(this.classes.hide)}renderMultipleValues(){let e=this.main.values.childNodes,t=this.store.filter((e=>e.selected&&e.display),!1);if(0===t.length)return void(this.main.values.innerHTML=this.placeholder().outerHTML);{const e=this.main.values.querySelector("."+this.classes.placeholder);e&&e.remove()}if(t.length>this.settings.maxValuesShown){const e=document.createElement("div");return e.classList.add(this.classes.max),e.textContent=this.settings.maxValuesMessage.replace("{number}",t.length.toString()),void(this.main.values.innerHTML=e.outerHTML)}{const e=this.main.values.querySelector("."+this.classes.max);e&&e.remove()}let s=[];for(let i=0;i<e.length;i++){const n=e[i],a=n.getAttribute("data-id");a&&(t.filter((e=>e.id===a),!1).length||s.push(n))}for(const e of s)e.classList.add(this.classes.valueOut),setTimeout((()=>{this.main.values.hasChildNodes()&&this.main.values.contains(e)&&this.main.values.removeChild(e)}),100);e=this.main.values.childNodes;for(let s=0;s<t.length;s++){let i=!0;for(let n=0;n<e.length;n++)t[s].id===String(e[n].dataset.id)&&(i=!1);i&&(0===e.length?this.main.values.appendChild(this.multipleValue(t[s])):0===s?this.main.values.insertBefore(this.multipleValue(t[s]),e[s]):e[s-1].insertAdjacentElement("afterend",this.multipleValue(t[s])))}this.updateDeselectAll()}multipleValue(e){const t=document.createElement("div");t.classList.add(this.classes.value),t.dataset.id=e.id;const s=document.createElement("div");if(s.classList.add(this.classes.valueText),s.innerText=e.text,t.appendChild(s),!e.mandatory){const s=document.createElement("div");s.classList.add(this.classes.valueDelete),s.onclick=t=>{if(t.preventDefault(),t.stopPropagation(),this.settings.disabled)return;let s=!0;const i=this.store.getSelectedOptions(),n=i.filter((t=>t.selected&&t.id!==e.id),!0);if(!(this.settings.minSelected&&n.length<this.settings.minSelected)&&(this.callbacks.beforeChange&&(s=!0===this.callbacks.beforeChange(n,i)),s)){let e=[];for(const t of n){if(t instanceof l)for(const s of t.options)e.push(s.value);t instanceof o&&e.push(t.value)}this.callbacks.setSelected(e,!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(n),this.updateDeselectAll()}};const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox","0 0 100 100");const n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("d",this.classes.optionDelete),i.appendChild(n),s.appendChild(i),t.appendChild(s)}return t}contentDiv(){const e=document.createElement("div");e.dataset.id=this.settings.id,e.id=this.settings.id;const t=this.searchDiv();e.appendChild(t.main);const s=this.listDiv();return e.appendChild(s),{main:e,search:t,list:s}}moveContent(){"relative"!==this.settings.contentPosition&&"down"!==this.settings.openPosition?"up"!==this.settings.openPosition?"up"===this.putContent()?this.moveContentAbove():this.moveContentBelow():this.moveContentAbove():this.moveContentBelow()}searchDiv(){const e=document.createElement("div"),t=document.createElement("input"),i=document.createElement("div");e.classList.add(this.classes.search);const n={main:e,input:t};if(this.settings.showSearch||(e.classList.add(this.classes.hide),t.readOnly=!0),t.type="search",t.placeholder=this.settings.searchPlaceholder,t.tabIndex=-1,t.setAttribute("aria-label",this.settings.searchPlaceholder),t.setAttribute("autocapitalize","off"),t.setAttribute("autocomplete","off"),t.setAttribute("autocorrect","off"),t.oninput=s((e=>{this.callbacks.search(e.target.value)}),100),t.onkeydown=e=>{switch(e.key){case"ArrowUp":case"ArrowDown":return"ArrowDown"===e.key?this.highlight("down"):this.highlight("up"),!1;case"Tab":return this.callbacks.close(),!0;case"Escape":return this.callbacks.close(),!1;case"Enter":case" ":if(this.callbacks.addable&&e.ctrlKey)return i.click(),!1;{const e=this.content.list.querySelector("."+this.classes.highlighted);if(e)return e.click(),!1}return!0}},e.appendChild(t),this.callbacks.addable){i.classList.add(this.classes.addable);const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","0 0 100 100");const s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d",this.classes.addablePath),t.appendChild(s),i.appendChild(t),i.onclick=e=>{if(e.preventDefault(),e.stopPropagation(),!this.callbacks.addable)return;const t=this.content.search.input.value.trim();if(""===t)return void this.content.search.input.focus();const s=e=>{let t=new o(e);if(this.callbacks.addOption(t),this.settings.isMultiple){let e=this.store.getSelected();e.push(t.value),this.callbacks.setSelected(e,!0)}else this.callbacks.setSelected([t.value],!0);this.callbacks.search(""),this.settings.closeOnSelect&&setTimeout((()=>{this.callbacks.close()}),100)},i=this.callbacks.addable(t);!1!==i&&null!=i&&(i instanceof Promise?i.then((e=>{s("string"==typeof e?{text:e,value:e}:e)})):s("string"==typeof i?{text:i,value:i}:i))},e.appendChild(i),n.addable={main:i,svg:t,path:s}}return n}searchFocus(){this.content.search.input.focus()}getOptions(e=!1,t=!1,s=!1){let i="."+this.classes.option;return e&&(i+=":not(."+this.classes.placeholder+")"),t&&(i+=":not(."+this.classes.disabled+")"),s&&(i+=":not(."+this.classes.hide+")"),Array.from(this.content.list.querySelectorAll(i))}highlight(e){const t=this.getOptions(!0,!0,!0);if(0!==t.length)if(1!==t.length||t[0].classList.contains(this.classes.highlighted)){for(let s=0;s<t.length;s++)if(t[s].classList.contains(this.classes.highlighted)){const i=t[s];i.classList.remove(this.classes.highlighted);const n=i.parentElement;if(n&&n.classList.contains(this.classes.open)){const e=n.querySelector("."+this.classes.optgroupLabel);e&&e.click()}let a=t["down"===e?s+1<t.length?s+1:0:s-1>=0?s-1:t.length-1];a.classList.add(this.classes.highlighted),this.ensureElementInView(this.content.list,a);const l=a.parentElement;if(l&&l.classList.contains(this.classes.close)){const e=l.querySelector("."+this.classes.optgroupLabel);e&&e.click()}return}t["down"===e?0:t.length-1].classList.add(this.classes.highlighted),this.ensureElementInView(this.content.list,t["down"===e?0:t.length-1])}else t[0].classList.add(this.classes.highlighted)}listDiv(){const e=document.createElement("div");return e.classList.add(this.classes.list),e}renderError(e){this.content.list.innerHTML="";const t=document.createElement("div");t.classList.add(this.classes.error),t.textContent=e,this.content.list.appendChild(t)}renderSearching(){this.content.list.innerHTML="";const e=document.createElement("div");e.classList.add(this.classes.searching),e.textContent=this.settings.searchingText,this.content.list.appendChild(e)}renderOptions(e){if(this.content.list.innerHTML="",0===e.length){const e=document.createElement("div");return e.classList.add(this.classes.search),e.innerHTML=this.settings.searchText,void this.content.list.appendChild(e)}for(const t of e){if(t instanceof l){const e=document.createElement("div");e.classList.add(this.classes.optgroup);const s=document.createElement("div");s.classList.add(this.classes.optgroupLabel),e.appendChild(s);const i=document.createElement("div");i.classList.add(this.classes.optgroupLabelText),i.textContent=t.label,s.appendChild(i);const n=document.createElement("div");if(n.classList.add(this.classes.optgroupActions),s.appendChild(n),this.settings.isMultiple&&t.selectAll){const e=document.createElement("div");e.classList.add(this.classes.optgroupSelectAll);let s=!0;for(const e of t.options)if(!e.selected){s=!1;break}s&&e.classList.add(this.classes.selected);const i=document.createElement("span");i.textContent=t.selectAllText,e.appendChild(i);const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("viewBox","0 0 100 100"),e.appendChild(a);const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d",this.classes.optgroupSelectAllBox),a.appendChild(l);const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d",this.classes.optgroupSelectAllCheck),a.appendChild(o),e.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation();const i=this.store.getSelected();if(s){const e=i.filter((e=>{for(const s of t.options)if(e===s.value)return!1;return!0}));this.callbacks.setSelected(e,!0)}else{const e=i.concat(t.options.map((e=>e.value)));for(const e of t.options)this.store.getOptionByID(e.id)||this.callbacks.addOption(e);this.callbacks.setSelected(e,!0)}})),n.appendChild(e)}if("off"!==t.closable){const i=document.createElement("div");i.classList.add(this.classes.optgroupClosable);const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("viewBox","0 0 100 100"),a.classList.add(this.classes.arrow),i.appendChild(a);const l=document.createElementNS("http://www.w3.org/2000/svg","path");a.appendChild(l),t.options.some((e=>e.selected))||""!==this.content.search.input.value.trim()?(i.classList.add(this.classes.open),l.setAttribute("d",this.classes.arrowOpen)):"open"===t.closable?(e.classList.add(this.classes.open),l.setAttribute("d",this.classes.arrowOpen)):"close"===t.closable&&(e.classList.add(this.classes.close),l.setAttribute("d",this.classes.arrowClose)),s.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),e.classList.contains(this.classes.close)?(e.classList.remove(this.classes.close),e.classList.add(this.classes.open),l.setAttribute("d",this.classes.arrowOpen)):(e.classList.remove(this.classes.open),e.classList.add(this.classes.close),l.setAttribute("d",this.classes.arrowClose))})),n.appendChild(i)}e.appendChild(s);for(const s of t.options)e.appendChild(this.option(s));this.content.list.appendChild(e)}t instanceof o&&this.content.list.appendChild(this.option(t))}}option(e){if(e.placeholder){const e=document.createElement("div");return e.classList.add(this.classes.option),e.classList.add(this.classes.hide),e}const t=document.createElement("div");return t.dataset.id=e.id,t.id=e.id,t.classList.add(this.classes.option),t.setAttribute("role","option"),e.class&&e.class.split(" ").forEach((e=>{t.classList.add(e)})),e.style&&(t.style.cssText=e.style),this.settings.searchHighlight&&""!==this.content.search.input.value.trim()?t.innerHTML=this.highlightText(""!==e.html?e.html:e.text,this.content.search.input.value,this.classes.searchHighlighter):""!==e.html?t.innerHTML=e.html:t.textContent=e.text,this.settings.showOptionTooltips&&t.textContent&&t.setAttribute("title",t.textContent),e.display||t.classList.add(this.classes.hide),e.disabled&&t.classList.add(this.classes.disabled),e.selected&&this.settings.hideSelected&&t.classList.add(this.classes.hide),e.selected?(t.classList.add(this.classes.selected),t.setAttribute("aria-selected","true"),this.main.main.setAttribute("aria-activedescendant",t.id)):(t.classList.remove(this.classes.selected),t.setAttribute("aria-selected","false")),t.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation();const s=this.store.getSelected(),i=t.currentTarget,n=String(i.dataset.id);if(e.disabled||e.selected&&!this.settings.allowDeselect)return;if(this.settings.isMultiple&&this.settings.maxSelected<=s.length&&!e.selected||this.settings.isMultiple&&this.settings.minSelected>=s.length&&e.selected)return;let a=!1;const l=this.store.getSelectedOptions();let o=[];this.settings.isMultiple&&(o=e.selected?l.filter((e=>e.id!==n)):l.concat(e)),this.settings.isMultiple||(o=e.selected?[]:[e]),this.callbacks.beforeChange||(a=!0),this.callbacks.beforeChange&&(a=!1!==this.callbacks.beforeChange(o,l)),a&&(this.store.getOptionByID(n)||this.callbacks.addOption(e),this.callbacks.setSelected(o.map((e=>e.value)),!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(o))})),t}destroy(){this.main.main.remove(),this.content.main.remove()}highlightText(e,t,s){let i=e;const n=new RegExp("("+t.trim()+")(?![^<]*>[^<>]*</)","i");if(!e.match(n))return e;const a=e.match(n).index,l=a+e.match(n)[0].toString().length,o=e.substring(a,l);return i=i.replace(n,`<mark class="${s}">${o}</mark>`),i}moveContentAbove(){const e=this.main.main.offsetHeight,t=this.content.main.offsetHeight;this.main.main.classList.remove(this.classes.openBelow),this.main.main.classList.add(this.classes.openAbove),this.content.main.classList.remove(this.classes.openBelow),this.content.main.classList.add(this.classes.openAbove);const s=this.main.main.getBoundingClientRect();this.content.main.style.margin="-"+(e+t-1)+"px 0px 0px 0px",this.content.main.style.top=s.top+s.height+window.scrollY+"px",this.content.main.style.left=s.left+window.scrollX+"px",this.content.main.style.width=s.width+"px"}moveContentBelow(){this.main.main.classList.remove(this.classes.openAbove),this.main.main.classList.add(this.classes.openBelow),this.content.main.classList.remove(this.classes.openAbove),this.content.main.classList.add(this.classes.openBelow);const e=this.main.main.getBoundingClientRect();this.content.main.style.margin="-1px 0px 0px 0px","relative"!==this.settings.contentPosition&&(this.content.main.style.top=e.top+e.height+window.scrollY+"px",this.content.main.style.left=e.left+window.scrollX+"px",this.content.main.style.width=e.width+"px")}ensureElementInView(e,t){const s=e.scrollTop+e.offsetTop,i=s+e.clientHeight,n=t.offsetTop,a=n+t.clientHeight;n<s?e.scrollTop-=s-n:a>i&&(e.scrollTop+=a-i)}putContent(){const e=this.main.main.offsetHeight,t=this.main.main.getBoundingClientRect(),s=this.content.main.offsetHeight;return window.innerHeight-(t.top+e)<=s&&t.top>s?"up":"down"}updateDeselectAll(){if(!this.store||!this.settings)return;const e=this.store.getSelectedOptions(),t=e&&e.length>0,s=this.settings.isMultiple,i=this.settings.allowDeselect,n=this.main.deselect.main,a=this.classes.hide;!i||s&&!t?n.classList.add(a):n.classList.remove(a)}constructor(e,t,s){this.classes={main:"ss-main",placeholder:"ss-placeholder",values:"ss-values",single:"ss-single",max:"ss-max",value:"ss-value",valueText:"ss-value-text",valueDelete:"ss-value-delete",valueOut:"ss-value-out",deselect:"ss-deselect",deselectPath:"M10,10 L90,90 M10,90 L90,10",arrow:"ss-arrow",arrowClose:"M10,30 L50,70 L90,30",arrowOpen:"M10,70 L50,30 L90,70",content:"ss-content",openAbove:"ss-open-above",openBelow:"ss-open-below",search:"ss-search",searchHighlighter:"ss-search-highlight",searching:"ss-searching",addable:"ss-addable",addablePath:"M50,10 L50,90 M10,50 L90,50",list:"ss-list",optgroup:"ss-optgroup",optgroupLabel:"ss-optgroup-label",optgroupLabelText:"ss-optgroup-label-text",optgroupActions:"ss-optgroup-actions",optgroupSelectAll:"ss-selectall",optgroupSelectAllBox:"M60,10 L10,10 L10,90 L90,90 L90,50",optgroupSelectAllCheck:"M30,45 L50,70 L90,10",optgroupClosable:"ss-closable",option:"ss-option",optionDelete:"M10,10 L90,90 M10,90 L90,10",highlighted:"ss-highlighted",open:"ss-open",close:"ss-close",selected:"ss-selected",error:"ss-error",disabled:"ss-disabled",hide:"ss-hide"},this.store=t,this.settings=e,this.callbacks=s,this.main=this.mainDiv(),this.content=this.contentDiv(),this.updateClassStyles(),this.updateAriaAttributes(),this.settings.contentLocation.appendChild(this.content.main)}}class r{enable(){this.select.disabled=!1}disable(){this.select.disabled=!0}hideUI(){this.select.tabIndex=-1,this.select.style.display="none",this.select.setAttribute("aria-hidden","true")}showUI(){this.select.removeAttribute("tabindex"),this.select.style.display="",this.select.removeAttribute("aria-hidden")}changeListen(e){this.listen=e,e&&this.observer&&this.observer.observe(this.select,{subtree:!0,childList:!0,attributes:!0}),e||this.observer&&this.observer.disconnect()}valueChange(e){return this.listen&&this.onValueChange&&this.onValueChange(this.getSelectedValues()),!0}observeCall(e){if(!this.listen)return;let t=!1,s=!1,i=!1;for(const n of e)n.target===this.select&&("disabled"===n.attributeName&&(s=!0),"class"===n.attributeName&&(t=!0)),"OPTGROUP"!==n.target.nodeName&&"OPTION"!==n.target.nodeName||(i=!0);t&&this.onClassChange&&this.onClassChange(this.select.className.split(" ")),s&&this.onDisabledChange&&(this.changeListen(!1),this.onDisabledChange(this.select.disabled),this.changeListen(!0)),i&&this.onOptionsChange&&(this.changeListen(!1),this.onOptionsChange(this.getData()),this.changeListen(!0))}getData(){let e=[];const t=this.select.childNodes;for(const s of t)"OPTGROUP"===s.nodeName&&e.push(this.getDataFromOptgroup(s)),"OPTION"===s.nodeName&&e.push(this.getDataFromOption(s));return e}getDataFromOptgroup(e){let t={id:e.id,label:e.label,selectAll:!!e.dataset&&"true"===e.dataset.selectall,selectAllText:e.dataset?e.dataset.selectalltext:"Select all",closable:e.dataset?e.dataset.closable:"off",options:[]};const s=e.childNodes;for(const e of s)"OPTION"===e.nodeName&&t.options.push(this.getDataFromOption(e));return t}getDataFromOption(e){return{id:e.id,value:e.value,text:e.text,html:e.dataset&&e.dataset.html?e.dataset.html:"",selected:e.selected,display:"none"!==e.style.display,disabled:e.disabled,mandatory:!!e.dataset&&"true"===e.dataset.mandatory,placeholder:"true"===e.dataset.placeholder,class:e.className,style:e.style.cssText,data:e.dataset}}getSelectedValues(){let e=[];const t=this.select.childNodes;for(const s of t){if("OPTGROUP"===s.nodeName){const t=s.childNodes;for(const s of t)if("OPTION"===s.nodeName){const t=s;t.selected&&e.push(t.value)}}if("OPTION"===s.nodeName){const t=s;t.selected&&e.push(t.value)}}return e}setSelected(e){this.changeListen(!1);const t=this.select.childNodes;for(const s of t){if("OPTGROUP"===s.nodeName){const t=s.childNodes;for(const s of t)if("OPTION"===s.nodeName){const t=s;t.selected=e.includes(t.value)}}if("OPTION"===s.nodeName){const t=s;t.selected=e.includes(t.value)}}this.changeListen(!0)}updateSelect(e,t,s){this.changeListen(!1),e&&(this.select.dataset.id=e),t&&(this.select.style.cssText=t),s&&(this.select.className="",s.forEach((e=>{""!==e.trim()&&this.select.classList.add(e.trim())}))),this.changeListen(!0)}updateOptions(e){this.changeListen(!1),this.select.innerHTML="";for(const t of e)t instanceof l&&this.select.appendChild(this.createOptgroup(t)),t instanceof o&&this.select.appendChild(this.createOption(t));this.select.dispatchEvent(new Event("change")),this.changeListen(!0)}createOptgroup(e){const t=document.createElement("optgroup");if(t.id=e.id,t.label=e.label,e.selectAll&&(t.dataset.selectAll="true"),"off"!==e.closable&&(t.dataset.closable=e.closable),e.options)for(const s of e.options)t.appendChild(this.createOption(s));return t}createOption(e){const t=document.createElement("option");return t.id=e.id,t.value=e.value,t.innerHTML=e.text,""!==e.html&&t.setAttribute("data-html",e.html),e.selected&&(t.selected=e.selected),e.disabled&&(t.disabled=!0),!1===e.display&&(t.style.display="none"),e.placeholder&&t.setAttribute("data-placeholder","true"),e.mandatory&&t.setAttribute("data-mandatory","true"),e.class&&e.class.split(" ").forEach((e=>{t.classList.add(e)})),e.data&&"object"==typeof e.data&&Object.keys(e.data).forEach((s=>{t.setAttribute("data-"+n(s),e.data[s])})),t}destroy(){this.changeListen(!1),this.select.removeEventListener("change",this.valueChange.bind(this)),this.observer&&(this.observer.disconnect(),this.observer=null),delete this.select.dataset.id,this.showUI()}constructor(e){this.listen=!1,this.observer=null,this.select=e,this.select.addEventListener("change",this.valueChange.bind(this),{passive:!0}),this.observer=new MutationObserver(this.observeCall.bind(this)),this.changeListen(!0)}}class d{enable(){this.settings.disabled=!1,this.select.enable(),this.render.enable()}disable(){this.settings.disabled=!0,this.select.disable(),this.render.disable()}getData(){return this.store.getData()}setData(e){const t=this.store.getSelected(),s=this.store.validateDataArray(e);if(s)return void(this.events.error&&this.events.error(s));this.store.setData(e);const n=this.store.getData();this.select.updateOptions(n),this.render.renderValues(),this.render.renderOptions(n),this.events.afterChange&&!i(t,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}getSelected(){return this.store.getSelected()}setSelected(e,t=!0){const s=this.store.getSelected();this.store.setSelectedBy("value",Array.isArray(e)?e:[e]);const n=this.store.getData();this.select.updateOptions(n),this.render.renderValues(),""!==this.render.content.search.input.value?this.search(this.render.content.search.input.value):this.render.renderOptions(n),t&&this.events.afterChange&&!i(s,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}addOption(e){const t=this.store.getSelected();this.store.getDataOptions().some((t=>{var s;return t.value===(null!==(s=e.value)&&void 0!==s?s:e.text)}))||this.store.addOption(e);const s=this.store.getData();this.select.updateOptions(s),this.render.renderValues(),this.render.renderOptions(s),this.events.afterChange&&!i(t,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}open(){this.settings.disabled||this.settings.isOpen||(this.events.beforeOpen&&this.events.beforeOpen(),this.render.open(),this.settings.showSearch&&this.render.searchFocus(),this.settings.isOpen=!0,setTimeout((()=>{this.events.afterOpen&&this.events.afterOpen(),this.settings.isOpen&&(this.settings.isFullOpen=!0)}),this.settings.timeoutDelay),"absolute"===this.settings.contentPosition&&(this.settings.intervalMove&&clearInterval(this.settings.intervalMove),this.settings.intervalMove=setInterval(this.render.moveContent.bind(this.render),500)))}close(e=null){this.settings.isOpen&&!this.settings.alwaysOpen&&(this.events.beforeClose&&this.events.beforeClose(),this.render.close(),""!==this.render.content.search.input.value&&this.search(""),this.render.mainFocus(e),this.settings.isOpen=!1,this.settings.isFullOpen=!1,setTimeout((()=>{this.events.afterClose&&this.events.afterClose()}),this.settings.timeoutDelay),this.settings.intervalMove&&clearInterval(this.settings.intervalMove))}search(e){if(this.render.content.search.input.value!==e&&(this.render.content.search.input.value=e),!this.events.search)return void this.render.renderOptions(""===e?this.store.getData():this.store.search(e,this.events.searchFilter));this.render.renderSearching();const t=this.events.search(e,this.store.getSelectedOptions());t instanceof Promise?t.then((e=>{this.render.renderOptions(this.store.partialToFullData(e))})).catch((e=>{this.render.renderError("string"==typeof e?e:e.message)})):Array.isArray(t)?this.render.renderOptions(this.store.partialToFullData(t)):this.render.renderError("Search event must return a promise or an array of data")}destroy(){document.removeEventListener("click",this.documentClick),window.removeEventListener("resize",this.windowResize,!1),"auto"===this.settings.openPosition&&window.removeEventListener("scroll",this.windowScroll,!1),document.removeEventListener("visibilitychange",this.windowVisibilityChange),this.store.setData([]),this.render.destroy(),this.select.destroy()}constructor(e){var i;if(this.events={search:void 0,searchFilter:(e,t)=>-1!==e.text.toLowerCase().indexOf(t.toLowerCase()),addable:void 0,beforeChange:void 0,afterChange:void 0,beforeOpen:void 0,afterOpen:void 0,beforeClose:void 0,afterClose:void 0},this.windowResize=s((()=>{(this.settings.isOpen||this.settings.isFullOpen)&&this.render.moveContent()})),this.windowScroll=s((()=>{(this.settings.isOpen||this.settings.isFullOpen)&&this.render.moveContent()})),this.documentClick=e=>{this.settings.isOpen&&e.target&&!t(e.target,this.settings.id)&&this.close(e.type)},this.windowVisibilityChange=()=>{document.hidden&&this.close()},this.selectEl="string"==typeof e.select?document.querySelector(e.select):e.select,!this.selectEl)return void(e.events&&e.events.error&&e.events.error(new Error("Could not find select element")));if("SELECT"!==this.selectEl.tagName)return void(e.events&&e.events.error&&e.events.error(new Error("Element isnt of type select")));this.selectEl.dataset.ssid&&this.destroy(),this.settings=new a(e.settings);const n=["afterChange","beforeOpen","afterOpen","beforeClose","afterClose"];for(const t in e.events)e.events.hasOwnProperty(t)&&(-1!==n.indexOf(t)?this.events[t]=s(e.events[t],100):this.events[t]=e.events[t]);this.settings.disabled=(null===(i=e.settings)||void 0===i?void 0:i.disabled)?e.settings.disabled:this.selectEl.disabled,this.settings.isMultiple=this.selectEl.multiple,this.settings.style=this.selectEl.style.cssText,this.settings.class=this.selectEl.className.split(" "),this.select=new r(this.selectEl),this.select.updateSelect(this.settings.id,this.settings.style,this.settings.class),this.select.hideUI(),this.select.onValueChange=e=>{this.setSelected(e)},this.select.onClassChange=e=>{this.settings.class=e,this.render.updateClassStyles()},this.select.onDisabledChange=e=>{e?this.disable():this.enable()},this.select.onOptionsChange=e=>{this.setData(e)},this.store=new c(this.settings.isMultiple?"multiple":"single",e.data?e.data:this.select.getData()),e.data&&this.select.updateOptions(this.store.getData());const l={open:this.open.bind(this),close:this.close.bind(this),addable:this.events.addable?this.events.addable:void 0,setSelected:this.setSelected.bind(this),addOption:this.addOption.bind(this),search:this.search.bind(this),beforeChange:this.events.beforeChange,afterChange:this.events.afterChange};this.render=new h(this.settings,this.store,l),this.render.renderValues(),this.render.renderOptions(this.store.getData());const o=this.selectEl.getAttribute("aria-label"),d=this.selectEl.getAttribute("aria-labelledby");o?this.render.main.main.setAttribute("aria-label",o):d&&this.render.main.main.setAttribute("aria-labelledby",d),this.selectEl.parentNode&&this.selectEl.parentNode.insertBefore(this.render.main.main,this.selectEl.nextSibling),document.addEventListener("click",this.documentClick),window.addEventListener("resize",this.windowResize,!1),"auto"===this.settings.openPosition&&window.addEventListener("scroll",this.windowScroll,!1),document.addEventListener("visibilitychange",this.windowVisibilityChange),this.settings.disabled&&this.disable(),this.settings.alwaysOpen&&this.open(),this.selectEl.slim=this}}return d}();const s={headers:{"x-api-key":"live_eFQNzE6t9Yns8DpBqOnhUKvvvHPrVTd4nqMp4HJQUHmfMUGURXupaEMIop0eMOzH"}};function i(e){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}&${s}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}const n=document.querySelector(".breed-select"),a=(document.querySelector(".cat-info"),document.querySelector(".loader")),l=document.querySelector(".error");a.classList.toggle("is-hidden");let o=[];function c(){l.classList.toggle("is-hidden")}fetch("https://api.thecatapi.com/v1/breeds",s).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((s=>{s.forEach((s=>{o.push({text:s.name,value:s.id}),new(e(t))({select:n,data:o})}))})).catch(c),n.addEventListener("change",(function(e){i(e.currentTarget.value).then((e=>console.log(e))).catch(c)}));
//# sourceMappingURL=index.52340994.js.map
