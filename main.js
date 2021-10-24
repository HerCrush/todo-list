(()=>{"use strict";var t={917:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([t.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const i=c},426:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([t.id,'body {\n    display: grid;\n    grid-template-areas: \n        "a a"\n        "b c";\n    grid-template-columns: 10vw 1fr;\n}\n\n#title {\n    grid-area: a;\n    margin: auto;\n}\n\nnav {\n    grid-area: b;\n    background-color: rgb(255, 149, 149);\n}\n\nmain {\n    grid-area: c;\n    background-color: rgb(145, 145, 255);\n    padding: 20px;\n}\n\n.task {\n    display: flex;\n    background-color: rgb(255, 215, 142);\n    width: 80vw;\n    padding: 20px;\n}\n\n.task-card {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    background-color: rgb(206, 206, 206);\n    width: 60vw;\n    height: 1em;\n    padding: 20px;\n    overflow: hidden;\n}\n\n.task button {\n    height: 2em;\n}\n\n.task-card p {\n    width: 60vw;\n    margin-top: 1.5em;\n}\n\n.task-card[data-done="true"] {\n    background-color: rgb(140, 255, 140);\n}\n\n.expanded {\n    height: auto;\n}\n\n.not-important {\n    background-color: rgb(79, 170, 255);\n}\n\n.important {\n    background-color: hsl(60, 100%, 67%);\n}\n\n.very-important {\n    background-color: rgb(255, 83, 83);\n}\n\n.hidden {\n    display: none;\n}',""]);const i=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},c=[],i=0;i<t.length;i++){var d=t[i],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=i,e.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var c=0;c<a.length;c++){var i=n(a[c]);e[i].references--}for(var d=o(t,r),s=0;s<a.length;s++){var l=n(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),o=n(795),r=n.n(o),a=n(569),c=n.n(a),i=n(565),d=n.n(i),s=n(216),l=n.n(s),u=n(589),p=n.n(u),m=n(917),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var v=n(426),b={};b.styleTagTransform=p(),b.setAttributes=d(),b.insert=c().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=l(),e()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;const h={projectInput:(()=>{const t=document.createElement("input"),e=document.createElement("button");return{input:t,button:e,load:()=>{t.placeholder="New Project",t.id="project-input",e.textContent="+",e.id="new-project",document.querySelector("main").append(t,e)}}})(),project:function(t,e){const n=document.createElement("div"),o=document.createElement("h3"),r=document.createElement("button"),a=document.createElement("div"),c=document.createElement("button"),i=document.createElement("button");return{container:n,deleteBtn:r,todosContainer:a,addTodoBtn:c,navBtn:i,load:function(){o.textContent=t,r.textContent="X",c.textContent="New Task",i.textContent=t,n.classList.add("project"),r.classList.add("delete-project"),a.dataset.project=e,a.classList.add("todos-container"),c.classList.add("new-todo"),n.append(o,r,a,c),document.querySelector("#projects-container").appendChild(n),document.querySelector("nav").appendChild(i)}}},todoInput:function(){const t=document.createElement("div"),e=document.createElement("input"),n=document.createElement("input"),o=document.createElement("input"),r=(()=>{const t=document.createElement("input"),e=document.createElement("input"),n=document.createElement("input");return t.setAttribute("type","radio"),t.setAttribute("name","priority"),e.setAttribute("type","radio"),e.setAttribute("name","priority"),n.setAttribute("type","radio"),n.setAttribute("name","priority"),{notImportant:t,important:e,veryImportant:n,getInput:function(){switch(!0){case t.checked:return t.value;case e.checked:return e.value;case n.checked:return n.value}}}})(),a=document.createElement("button"),c=document.createElement("button"),i=document.createElement("button");return{container:t,title:e,date:n,description:o,priority:r,acceptBtn:a,cancelBtn:c,deleteBtn:i,load:d=>{e.placeholder="Title...",n.placeholder="dd/mm/yyyy",o.placeholder="Description...",a.textContent="✓",c.textContent="cancel",i.textContent="X",r.notImportant.value="not-important",r.important.value="important",r.veryImportant.value="very-important",e.classList.add("todo-title"),n.classList.add("todo-date"),o.classList.add("todo-description"),r.notImportant.classList.add("priority"),r.important.classList.add("priority"),r.veryImportant.classList.add("priority"),t.append(e,n,o,r.notImportant,r.important,r.veryImportant,a,c,i),d.appendChild(t)}}},todo:function(t,e,n,o,r){const a=document.createElement("div"),c=document.createElement("div"),i=document.createElement("h4"),d=document.createElement("h4"),s=document.createElement("p"),l=document.createElement("button"),u=document.createElement("button"),p=document.createElement("button");return{bigContainer:a,container:c,doneBtn:l,editBtn:u,deleteBtn:p,load:function(){i.textContent=t,d.textContent=e,s.textContent=n,l.textContent="DONE",u.textContent="EDIT",p.textContent="DELETE",a.classList.add("task"),c.classList.add("task-card"),l.classList.add("task-done"),l.dataset.done=!1,u.classList.add("task-edit"),p.classList.add("task-delete"),c.classList.add(o),c.append(i,d,s),a.append(c,l,u,p),document.querySelector(`div[data-project="${r}"]`).appendChild(a)}}}};let g=0;function y(t){const e=function(t){const e=g,n=h.project(t,e);function o(){n.container.remove(),n.navBtn.remove()}return{load:function(){n.load(),n.deleteBtn.addEventListener("click",o),n.addTodoBtn.addEventListener("click",(()=>{!function(t,e,n){e.classList.add("hidden");const o=h.todoInput();function r(){o.container.remove(),e.classList.remove("hidden")}o.load(t),o.acceptBtn.addEventListener("click",(()=>{!function(t,e,n,o,r){(function(t,e,n,o,r){const a=h.todo(t,e,n,o,r);let c=!1;function i(){c=!c,a.container.dataset.done=c}function d(){}function s(){a.bigContainer.remove()}return{load:function(){a.load(),a.doneBtn.addEventListener("click",i),a.editBtn.addEventListener("click",d),a.deleteBtn.addEventListener("click",s)},toggleDone:i,getIsDone:function(){return c}}})(t,e,n,o,r).load()}(o.title.value,o.date.value,o.description.value,o.priority.getInput(),n),r()})),o.cancelBtn.addEventListener("click",r),o.deleteBtn.addEventListener("click",r)}(n.todosContainer,n.addTodoBtn,e)}))},getKey:function(){return e}}}(t);e.load(),g+=1}h.projectInput.load(),h.projectInput.button.addEventListener("click",(()=>{y(h.projectInput.input.value||h.projectInput.input.placeholder),h.projectInput.input.value=""}))})()})();