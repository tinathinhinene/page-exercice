"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["profile","ui_packages_fetch-utils_fetch-utils_ts"],{85768:(e,t,n)=>{n.d(t,{n:()=>s});var r=n(10686),o=n(29134),i=n(21403),a=n(69248);async function s(e){await o.K,l(e)}function l(e){let t=e.querySelectorAll(".js-responsive-underlinenav-item"),n=e.querySelector(".js-responsive-underlinenav-overflow"),r=(0,a.uw)(n,e);if(!r)return;let o=!1;for(let n of t){let t=(0,a.uw)(n,e);if(t){let e=t.left+n.offsetWidth>=r.left;!function(e,t){e.style.visibility=t?"hidden":"";let n=e.getAttribute("data-tab-item");if(n){let e=document.querySelector(`[data-menu-item=${n}]`);e instanceof HTMLElement&&(e.hidden=!t)}}(n,e),o=o||e}}n.style.visibility=o?"":"hidden"}(0,i.lB)(".js-responsive-underlinenav",{constructor:HTMLElement,subscribe:e=>(s(e),(0,r.Rt)(window,"resize",()=>l(e)))})},19340:(e,t,n)=>{var r=n(39595),o=n(90828);function i(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}let a=class WaitingFormElement extends HTMLElement{async submitPolitely(){this.submit.disabled=!0;try{this.prerequisites.length>0&&await Promise.all(this.prerequisites.map(e=>this.getPrerequisitePromise(e))),(0,o.k_)(this.form)}finally{this.submit.disabled=!1}}getPrerequisitePromise(e){let t=e.getAttribute("data-waiting-form-method")||"getPromise";return e[t]()}};i([r.aC],a.prototype,"form",void 0),i([r.zV],a.prototype,"prerequisites",void 0),i([r.aC],a.prototype,"submit",void 0),a=i([r.p_],a);let SocialAccountEditorElement=class SocialAccountEditorElement extends HTMLElement{recognizeUrl(){this.recognitionPromise=new Promise(async e=>{this.preprocessUrl();let t=await this.findMatchingSocialAccountIconOption(this.urlField.value);this.setChosenSocialIcon(t),e()})}resetToDefault(){this.urlField.value!==this.urlField.defaultValue&&(0,o.m$)(this.urlField,this.urlField.defaultValue)}waitForRecognition(){return this.recognitionPromise}preprocessUrl(){let e=this.urlField.value.trim();0===e.length||/^https?:\/\//.test(e)||(this.urlField.value=`https://${e}`)}setChosenSocialIcon(e){let t=e.getAttribute("data-provider-key")||"generic";for(let t of this.iconOptions)t.hidden=t!==e;this.iconSpinner.hidden=!0,this.iconField.value=t}async findMatchingSocialAccountIconOption(e){for(let t of this.iconOptions)for(let n of t.querySelectorAll("[data-provider-pattern]"))if(RegExp(n.getAttribute("data-provider-pattern"),"i").test(e))return t;return await this.findNodeInfoIconOption(e)||this.iconGeneric}async findNodeInfoIconOption(e){if(0===this.nodeinfoSoftwareUrl.trim().length)return null;let t=new Map;for(let n of this.iconOptions)for(let r of n.querySelectorAll("[data-try-nodeinfo-pattern]")){let o=RegExp(r.getAttribute("data-try-nodeinfo-pattern"),"i"),i=r.getAttribute("data-nodeinfo-software");e.match(o)&&i&&t.set(i,n)}if(0===t.size)return null;let n=null;try{n=new URL(e,window.location.origin)}catch(e){return null}this.showSpinner();let r=new URL(this.nodeinfoSoftwareUrl,window.location.origin);r.searchParams.set("host",n.host);let o=await fetch(r,{headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"}}),i=await o.json(),a=i?.software_name;return a&&t.get(a)||null}showSpinner(){for(let e of this.iconOptions)e.hidden=!0;this.iconSpinner.hidden=!1}constructor(...e){super(...e),this.nodeinfoSoftwareUrl="",this.recognitionPromise=Promise.resolve()}};i([r.aC],SocialAccountEditorElement.prototype,"urlField",void 0),i([r.aC],SocialAccountEditorElement.prototype,"iconField",void 0),i([r.zV],SocialAccountEditorElement.prototype,"iconOptions",void 0),i([r.aC],SocialAccountEditorElement.prototype,"iconGeneric",void 0),i([r.aC],SocialAccountEditorElement.prototype,"iconSpinner",void 0),i([r.CF],SocialAccountEditorElement.prototype,"nodeinfoSoftwareUrl",void 0),SocialAccountEditorElement=i([r.p_],SocialAccountEditorElement)},77064:(e,t,n)=>{var r=n(21403),o=n(97797),i=n(37522);let a=null,s=null;function l(e){let{item:t,oldIndex:n}=e,{parentNode:r}=t;s=r.children[n+1]}async function c(e){let{oldIndex:t,newIndex:n,item:r}=e;if(t===n)return;let o=r.closest(".js-pinned-items-reorder-form"),l=o.closest(".js-pinned-items-reorder-container"),c=l.querySelector(".js-pinned-items-spinner"),u=l.querySelector(".js-pinned-items-reorder-message"),d=c&&u;if(d&&(u.textContent="",c.style.display="inline-block"),a.option("disabled",!0),!(await fetch(o.action,{method:o.method,body:new FormData(o),headers:{"X-Requested-With":"XMLHttpRequest"}})).ok){d&&(u.textContent=u.getAttribute("data-error-text")||"",c.style.display="none");let e=r.parentNode;s?e.insertBefore(r,s):e.appendChild(r);return}d&&(u.textContent=u.getAttribute("data-success-text")||"",(0,i.i)(u.textContent),c.style.display="none"),a.option("disabled",!1)}(0,r.lB)(".js-pinned-items-reorder-list",{async add(e){let{Sortable:t}=await Promise.all([n.e("vendors-node_modules_github_sortablejs_Sortable_js"),n.e("app_assets_modules_github_sortable-behavior_ts")]).then(n.bind(n,3774));a=t.create(e,{animation:150,item:".js-pinned-item-list-item",handle:".js-pinned-item-reorder",onUpdate:c,onStart:l,chosenClass:"is-dragging"})}}),(0,o.on)("submit",".js-pinned-items-reorder-form",function(e){e.preventDefault()}),(0,o.on)("click",".js-pinned-item-list-item .js-sortable-button",async function({currentTarget:e}){let{moveWithButton:t}=await Promise.all([n.e("vendors-node_modules_github_sortablejs_Sortable_js"),n.e("app_assets_modules_github_sortable-behavior_ts")]).then(n.bind(n,3774));t(e,e.closest(".js-pinned-item-list-item"),c)})},81629:(e,t,n)=>{(0,n(97797).on)("change",".js-profile-editable-pronouns-select",function(){let e=document.querySelector(".js-profile-editable-pronouns-select"),t=document.querySelector(".js-profile-editable-pronouns-custom"),n=t.getAttribute("data-initial-value");"Custom"===e.value?([...e.options].find(e=>e.value===n)?t.value="":t.value=n,t.hidden=!1,t.focus()):(t.value=e.value,t.hidden=!0)})},85564:(e,t,n)=>{var r=n(39595),o=n(97797),i=n(46678);function a(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}(0,o.on)("toggle",".js-achievement-card-details",function(e){let t=e.currentTarget,n=t.getAttribute("data-achievement-slug"),r=new URL(window.location.href,window.location.origin),o=new URLSearchParams(r.search);t.hasAttribute("open")&&n?o.set("achievement",n):o.delete("achievement"),r.search=o.toString(),(0,i.c8)(null,"",r.toString())},{capture:!0});let s=class AchievementBadgeFlipElement extends HTMLElement{connectedCallback(){if(this.tierCount<=1||!this.animate)return;let e=this.animate([{transform:"rotateY(0deg)"},{transform:`rotateY(${this.maxRotation}deg)`}],{duration:this.duration,easing:"cubic-bezier(0, 0, 0.25, 1)"});this.animations.set(this,e),this.createTierAnimations()||new MutationObserver((e,t)=>{this.createTierAnimations()&&t.disconnect()}).observe(this,{childList:!0})}get duration(){return 500*this.tierCount}get maxRotation(){return 180*this.tierCount}createTierAnimations(){for(let e of this.tiers)this.ensureTierAnimation(e);return this.tiers.length>=this.tierCount}ensureTierAnimation(e){if(this.animations.has(e))return;let t=this.tiers.indexOf(e);if(t<0)return;let n=this.BADGE_SIDE_KEYFRAMES[this.tierCount];if(!n)return;let r=this.tierCount%2==1,o=n.map((e,o)=>{let i={offset:e,opacity:o===t||o===t+1||0===t&&o===this.tierCount?1:0,easing:"step-start"};if(r&&0===t){let e=o===n.length-1?180:0;i.transform=`rotateY(${e}deg)`}return i}),i=e.animate(o,{duration:this.duration});this.animations.set(e,i)}flip(){for(let e of this.animations.values())if("running"===e.playState)return;for(let e of this.animations.values())e.play()}constructor(...e){super(...e),this.tierCount=0,this.animations=new Map,this.BADGE_SIDE_KEYFRAMES=[[],[0,1],[0,.22,1],[0,.13,.34,1],[0,.09,.22,.42,1],[0,.07,.16,.29,.47,1]]}};s.attrPrefix="",a([r.CF],s.prototype,"tierCount",void 0),a([r.zV],s.prototype,"tiers",void 0),s=a([r.p_],s),(0,o.on)("click",".js-new-user-contrib-example",async function(e){let t=document.querySelector(".js-calendar-graph");if(t.classList.contains("sample-graph"))return;t.classList.add("sample-graph");let n=e.currentTarget.getAttribute("data-url"),r=await fetch(n,{headers:{"X-Requested-With":"XMLHttpRequest"}});if(!r.ok){t.classList.remove("sample-graph");return}let o=await r.text(),i=document.createElement("div");i.innerHTML=o;let a=t.querySelector(".js-calendar-graph-table");a?.replaceWith(i.children[0])});var l=n(60341),c=n(21403),u=n(13937),d=n(94120);let f=null,m=document.createElement("div");function p(){return new URL(document.querySelector(".js-calendar-graph").getAttribute("data-url"),window.location.origin)}function h(e){if("key"in e&&"Enter"!==e.key)return;let t=e.currentTarget;if(!((t instanceof HTMLElement||t instanceof SVGElement)&&t.matches("[data-level]")))return;let n=t.closest(".js-calendar-graph").getAttribute("data-org"),r=t.getAttribute("data-date"),o=t.classList.contains("active"),i="shiftKey"in e&&!0===e.shiftKey;o?q(j()):function(e,t,n){let r,o;if(f&&t){let t=f.getTime();[r,o]=e>f?[f,e]:[e,f],r=new Date(Math.max(r.getTime(),t-26784e5)),o=new Date(Math.min(o.getTime(),t+26784e5)),f=null}else f=o=r=e;v(r,o);let i=p(),a=w(i.search.slice(1),{from:r,to:o,org:n});a.append("tab","overview"),i.search=a.toString(),y(i.toString())}(_(r),i,n)}function g(e,t,{key:n,ctrlKey:r}){let o="[data-level]",i=e=>e instanceof HTMLTableCellElement&&e.matches(o)?e:void 0,a=(e,t)=>Array.from(e?.querySelectorAll(t)??[]).at(-1);if(t instanceof HTMLTableCellElement){let e=`[data-ix="${t.getAttribute("data-ix")}"]`,s=t.parentElement,l=s?.parentElement;switch(n){case"ArrowLeft":return i(t.previousElementSibling)??t;case"ArrowRight":return i(t.nextElementSibling)??t;case"ArrowDown":return i(s?.nextElementSibling?.querySelector(e))??t;case"ArrowUp":return i(s?.previousElementSibling?.querySelector(e))??t;case"Home":return i(r?l?.querySelector(o):s?.querySelector(o));case"End":return i(a(r?l:s,o));case"PageUp":return i(l?.querySelector(e));case"PageDown":return i(a(l,e))}}}async function y(e){let t=document.getElementById("js-contribution-activity");if(!t)return;t.classList.add("loading");let n=await (0,l.Ts)(document,e);t.classList.remove("loading"),t.textContent="",t.append(n)}function w(e,t){let n=new URLSearchParams(e);n.delete("from"),n.delete("to"),n.delete("org");let r=t.fromStr;t.from&&(r=T(t.from,!!t.forceLocalTime)),r&&n.append("from",r);let o=t.toStr;t.to&&(o=T(t.to,!!t.forceLocalTime)),o&&n.append("to",o);let i=t.org;return i&&n.append("org",i),n}async function b(e,t,n){let r=new URL(document.querySelector(".js-calendar-graph").getAttribute("data-graph-url"),window.location.origin),o=w(r.search.slice(1),{from:e,to:t,org:n,forceLocalTime:!0});r.search=o.toString();let i=await (0,l.Ts)(document,r.toString());document.querySelector(".js-yearly-contributions").replaceWith(i)}function v(e,t){let n=document.querySelector(".js-calendar-graph"),r=n.querySelectorAll("[data-level]");for(let e of r)e.classList.remove("active"),e.hasAttribute("aria-selected")&&e.setAttribute("aria-selected","false");if(n.classList.remove("days-selected"),e||t)for(let o of(n.classList.add("days-selected"),r))(function(n){let r=_(n.getAttribute("data-date")||"").getTime();return e&&t?e.getTime()<=r&&r<=t.getTime():e?r===e.getTime():void 0})(o)&&(o.classList.add("active"),o.hasAttribute("aria-selected")&&o.setAttribute("aria-selected","true"))}function S(){let e=document.querySelector(".js-calendar-graph").querySelectorAll(".active"),t=e[0],n=e[e.length-1],r=t&&t.getAttribute("data-date"),o=n&&n.getAttribute("data-date");return r&&o?{first:r,last:o}:null}function E(e){return`0${e}`.slice(-2)}function T(e,t){return t?`${e.getFullYear()}-${E(e.getMonth()+1)}-${E(e.getDate())}`:`${e.getUTCFullYear()}-${E(e.getUTCMonth()+1)}-${E(e.getUTCDate())}`}function _(e){let[t,n,r]=e.split("-").map(e=>parseInt(e,10));return new Date(Date.UTC(t,n-1,r))}async function L(e,t){let n=document.getElementById("year-list-container");if(!n)return;t.append("year_list","1"),e.search=t.toString();let r=await (0,l.Ts)(document,e.toString());n.textContent="",n.append(r)}async function A(e){let t=S(),n=function(){let e=document.querySelector(".js-calendar-graph");return{first:e.getAttribute("data-from"),last:e.getAttribute("data-to")}}(),r=new Date(n.first),o=new Date(n.last);await b(r,o,e),t&&v(new Date(t.first),new Date(t.last))}function j(){return document.querySelector(".js-profile-timeline-year-list .js-year-link.selected").href||""}function q(e){let t=new URLSearchParams(new URL(e,window.location.origin).search.slice(1)),n=t.get("org"),r=t.get("from"),o=t.get("to"),i=new Date(r),a=new Date(o);b(i,a,n);let s=p(),l=w(s.search.slice(1),{from:i,to:a,org:n});l.append("tab","overview"),s.search=l.toString(),y(s.toString())}function C(e){let t=e.closest(".js-details-container");t&&t.classList.add("open");let n=e.getBoundingClientRect(),r=window.scrollY+n.top-62-10;window.scrollTo(0,r)}async function R(e){let{initializeOverviewGraphContainer:t}=await n.e("app_assets_modules_github_profile_contributions-spider-graph_ts").then(n.bind(n,25294));t(e)}function P(e){if(document.querySelector(".js-profile-editable-area").hidden=e,document.querySelector(".js-profile-editable-names").hidden=e,document.querySelector(".js-profile-editable-form").hidden=!e,document.querySelector(".js-profile-editable-error").textContent="",e)document.querySelector('.js-profile-editable-form input:not([type="hidden"])').focus();else{let e=document.querySelector(".js-profile-editable-pronouns-select"),t=document.querySelector(".js-profile-editable-pronouns-custom");for(let n of(e&&t&&""===t.value&&(e.selectedIndex=0,t.hidden=!0),document.querySelectorAll("social-account-editor")))n.resetToDefault();document.querySelector(".js-profile-editable-edit-button").focus()}}m.classList.add("svg-tip","svg-tip-one-line"),m.style.pointerEvents="none",m.hidden=!0,document.body.appendChild(m),(0,c.lB)(".js-calendar-graph-table",function(e){let t=e.closest(".js-calendar-graph");for(let t of e.querySelectorAll("[data-level]"))t.addEventListener("click",h),t.hasAttribute("tabindex")&&t.addEventListener("keypress",h);let n=t.getAttribute("data-from");n&&(f=_(n)),e instanceof HTMLElement&&(0,d.zB)(e,{focusInStrategy:"previous",getNextFocusable:g,bindKeys:d.z0.ArrowAll|d.z0.HomeAndEnd|d.z0.PageUpDown,focusOutBehavior:"stop"})}),(0,o.on)("click",".js-org-filter-link",function(e){e.stopPropagation(),e.preventDefault();let t=e.currentTarget,n=t.closest(".js-org-filter-links-container").querySelector(".js-org-filter-link.selected"),r=new URLSearchParams(new URL(t.href,window.location.origin).search.slice(1)),o=r.get("org"),a=S()||function(){let e=new URLSearchParams(window.location.search.slice(1)),t=e.get("from"),n=e.get("to");return t&&n?{first:t,last:n}:null}()||function(){let e=new URLSearchParams(new URL(j(),window.location.origin).search.slice(1)),t=e.get("from"),n=e.get("to");return t&&n?{first:t,last:n}:null}(),s=new Date(a.first),l=new Date(a.last);n&&n.classList.remove("selected"),t!==n&&t.classList.add("selected"),A(o);let c=p(),u={org:o,from:null,to:null};r.has("from")&&(u.from=s),r.has("to")&&(u.to=l);let d=w(c.search.slice(1),u);c.search=d.toString(),y(c.toString()),L(c,d),(0,i.c8)(null,"",c.toString())}),(0,o.on)("click",".js-year-link",function(e){e.stopPropagation(),e.preventDefault();let t=e.currentTarget;t.closest("ul").querySelector(".js-year-link.selected").classList.remove("selected"),t.classList.add("selected"),q(t.href),(0,i.c8)(null,"",t.href)}),function(){let e=window.location.hash;if(!e||0>e.indexOf("#event-"))return;let t=e.slice(1,e.length),n=document.getElementById(t);n&&C(n)}(),window.addEventListener("hashchange",function(e){let t=e.newURL||window.location.href,n=t.slice(t.indexOf("#")+1,t.length),r=document.getElementById(n);r&&(e.stopPropagation(),C(r))}),(0,u.JW)(".js-show-more-timeline-form",async function(e,t){await t.text();let n=document.querySelector(".js-show-more-timeline-form");if(n){let t=n.getAttribute("data-year"),r=document.querySelector(".js-year-link.selected"),o=document.querySelector(`#year-link-${t}`);r.classList.remove("selected"),o.classList.add("selected"),t!==e.getAttribute("data-year")&&b(new Date(n.getAttribute("data-from")),new Date(n.getAttribute("data-to")),n.getAttribute("data-org"))}let r=[...document.querySelectorAll("#js-contribution-activity [data-sr-feedback]")].pop();r.focus(),C(r),document.title=e.getAttribute("data-title")||"",(0,i.c8)(null,"",e.getAttribute("data-url")||"")}),(0,c.lB)(".js-activity-overview-graph-container",e=>{R(e)}),n(81629),(0,o.on)("click",".js-profile-editable-edit-button",function(){(function(){let e=document.querySelector(".js-user-profile-bio").getAttribute("data-bio-text");"string"==typeof e&&(document.querySelector(".js-user-profile-bio-edit").value=e)})(),P(!0)}),(0,o.on)("click",".js-profile-editable-cancel",function(){P(!1)}),(0,u.JW)(".js-profile-editable-form",async(e,t)=>{var n;let r;try{r=await t.html()}catch(e){422===e.response.status&&(document.querySelector(".js-profile-editable-error").textContent=e.response.json.message);return}n=r.html,document.querySelector(".js-profile-editable-replace").replaceWith(n),P(!1)}),n(19340),n(77064),(0,c.lB)(".js-user-profile-sticky-fields.is-stuck",function(){let e=document.querySelector(".js-user-profile-sticky-bar");return{add(){e&&e.classList.add("is-stuck")},remove(){e&&e.classList.remove("is-stuck")}}}),(0,c.lB)(".js-user-profile-follow-button.is-stuck",function(){let e=document.querySelector(".js-user-profile-sticky-bar");return{add(){e&&e.classList.add("is-follow-stuck")},remove(){e&&e.classList.remove("is-follow-stuck")}}});var x=n(37522);(0,c.lB)(".js-starred-repos-search-results",function(e){(0,x.C)(e)});var k=n(85768);function O(e,t){t>0?(e.textContent=t>999?`${(t/1e3).toFixed(1)}k`:t.toLocaleString(),e.hidden=!1):e.remove()}async function I(e){let t=new URL(e.getAttribute("data-url"),window.location.origin),n=new URLSearchParams(t.search.slice(1)),r=e.querySelector(".js-profile-repository-count"),o=e.querySelector(".js-profile-project-count"),i=e.querySelector(".js-profile-team-count"),a=e.querySelector(".js-profile-member-count");r&&n.append("repo","1"),o&&n.append("project","1"),i&&n.append("team","1"),a&&n.append("member","1"),t.search=n.toString();let s=await fetch(t.toString(),{headers:{"X-Requested-With":"XMLHttpRequest"}});if(!s.ok)return;let l=(await s.json()).data;r&&l.repositories&&O(r,l.repositories.totalCount),o&&l.projects&&O(o,l.projects.totalCount),i&&l.teams&&O(i,l.teams.totalCount),a&&l.members&&O(a,l.members.totalCount),e.classList.contains("js-responsive-underlinenav")&&(0,k.n)(e)}(0,c.lB)(".js-profile-tab-count-container",function(e){I(e)})},86654:(e,t,n)=>{function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){return`${window.location.protocol}//${window.location.host}${function(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=r("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}()}`}n.d(t,{M:()=>o})},37522:(e,t,n)=>{n.d(t,{C:()=>a,i:()=>s});var r=n(94686),o=n(2578),i=n(46493);function a(e,t){(0,o.G7)("primer_live_region_element")&&t?.element===void 0?(0,i.Cj)(e,{politeness:t?.assertive?"assertive":"polite"}):s((e.getAttribute("aria-label")||e.innerText||"").trim(),t)}function s(e,t){let{assertive:n,element:a}=t??{};(0,o.G7)("primer_live_region_element")&&void 0===a?(0,i.iP)(e,{politeness:n?"assertive":"polite"}):function(e,t,n){let o=n??r.XC?.querySelector(t?"#js-global-screen-reader-notice-assertive":"#js-global-screen-reader-notice");o&&(o.textContent===e?o.textContent=`${e}\u00A0`:o.textContent=e)}(e,n,a)}},46678:(e,t,n)=>{let r,o;n.d(t,{Gu:()=>l,c8:()=>f,g5:()=>m});var i=n(94686);let a=[],s=0;function l(){return r}function c(){try{return Math.min(Math.max(0,history.length)||0,9007199254740991)}catch(e){return 0}}function u(e){r=e;let t=location.href;a[c()-1+s]={url:t,state:r},a.length=c(),window.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}function d(){return new Date().getTime()}function f(e,t,n){s=0;let r={_id:d(),...e};history.pushState(r,t,n),u(r)}function m(e,t,n){let o={...r,...e};history.replaceState(o,t,n),u(o)}r=function(){let e={_id:new Date().getTime(),...history.state};return u(e),e}(),i.cg?.addEventListener("popstate",function(e){let t=e.state;if(!t||!t._id&&!t.turbo?.restorationIdentifier)return;let n=t.turbo?.restorationIdentifier;a[c()-1+s-1]?.state?.turbo?.restorationIdentifier===n?s--:s++,u(t)},!0),i.cg?.addEventListener("turbo:visit",e=>{e instanceof CustomEvent&&(o=e.detail.action)}),i.cg?.addEventListener("turbo:load",()=>{"restore"!==o&&(s=0,m(history.state,"",""))}),i.cg?.addEventListener("hashchange",function(){if(c()>a.length){let e={_id:d()};history.replaceState(e,"",location.href),u(e)}},!0),i.cg?.addEventListener("pageshow",()=>{a=[],s=0})},40122:(e,t,n)=>{let r;function o(){if(!r)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return r}function i(){return r?.locale??"en-US"}n.d(t,{JK:()=>i,_$:()=>o}),function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{r=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},29134:(e,t,n)=>{n.d(t,{G:()=>o,K:()=>i});var r=n(94686);let o=r.XC?.readyState==="interactive"||r.XC?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.XC?.addEventListener("DOMContentLoaded",()=>{e()})}),i=r.XC?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.cg?.addEventListener("load",e)})},61490:(e,t,n)=>{n.d(t,{N7:()=>g});var r=n(36301),o=n(54098),i=n(24212),a=n(86654),s=n(39794),l=n(94686),c=n(2578),u=n(93231);let d=!1,f=0,m=Date.now(),p=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function h(e){return!!("AbortError"===e.name||"TypeError"===e.name&&p.has(e.message)||e.name.startsWith("ApiError")&&p.has(e.message))}function g(e,t={}){if((0,c.G7)("FAILBOT_HANDLE_NON_ERRORS")){if(!(e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message)){if(function(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(T.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}(e))return;let n=Error(),r=function(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}(e);y(b({type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${r}`,stacktrace:v(n),catalogService:void 0},t));return}h(e)||y(b(w(e),t))}else h(e)||y(b(w(e),t))}async function y(e){if(!(!E&&!d&&f<10&&(0,o.TT)()))return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(e.error.stacktrace.some(e=>S.test(e.filename)||S.test(e.function))){d=!0;return}f++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function w(e){return{type:e.name,value:e.message,stacktrace:v(e),catalogService:e.catalogService}}function b(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,a.M)()||window.location.href,readyState:document.readyState,referrer:(0,u.dR)(),timeSinceLoad:Math.round(Date.now()-m),user:function(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.y)();return`anonymous-${t}`}()||void 0,bundler:s.v,ui:!!document.querySelector('meta[name="ui"]')},t)}function v(e){return(0,i.q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let S=/(chrome|moz|safari)-extension:\/\//,E=!1;l.cg?.addEventListener("pageshow",()=>E=!1),l.cg?.addEventListener("pagehide",()=>E=!0),"function"==typeof BroadcastChannel&&new BroadcastChannel("shared-worker-error").addEventListener("message",e=>{g(e.data.error)});let T=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"]},2578:(e,t,n)=>{n.d(t,{G7:()=>l,XY:()=>c,fQ:()=>s});var r=n(5225),o=n(40122);function i(){return new Set((0,o._$)().featureFlags.map(e=>e.toLowerCase()))}let a=n(94686).X3?i:(0,r.A)(i);function s(){return Array.from(a())}function l(e){return a().has(e.toLowerCase())}let c={isFeatureEnabled:l}},60341:(e,t,n)=>{n.d(t,{Ee:()=>u,b4:()=>d,Ts:()=>c});var r=n(49676);let o=class ResponseError extends Error{constructor(e,t){super(`${e} for HTTP ${t.status}`),this.response=t}};var i=n(95670),a=n(20742);let s="server-x-safe-html",l=i.wA.createPolicy(s,{createHTML:(e,t)=>a.b.apply({policy:()=>(!function(e,t,n=!1){let r=t.headers.get("content-type")||"";if(!n&&!r.startsWith("text/html"))throw new o(`expected response with text/html, but was ${r}`,t);if(n&&!(r.startsWith("text/html")||r.startsWith("application/json")))throw new o(`expected response with text/html or application/json, but was ${r}`,t);let i=t.headers.get("x-html-safe");if(i){if(!e.includes(i))throw new o("response X-HTML-Safe nonce did not match",t)}else throw new o("missing X-HTML-Safe nonce",t)}(function(e){let t=[...e.querySelectorAll("meta[name=html-safe-nonce]")].map(e=>e.content);if(t.length<1)throw Error("could not find html-safe-nonce on document");return t}(document),t),e),policyName:s,fallback:e,silenceErrorReporting:!0})});async function c(e,t,n){let o=new Request(t,n);o.headers.append("X-Requested-With","XMLHttpRequest");let i=await self.fetch(o);if(i.status<200||i.status>=300)throw Error(`HTTP ${i.status}${i.statusText||""}`);let a=l.createHTML(await i.text(),i);return(0,r.B)(e,a)}function u(e,t,n=1e3,r=[200],o=[202]){return async function n(i){let a=new Request(e,t);a.headers.append("X-Requested-With","XMLHttpRequest");let s=await self.fetch(a);if(o.includes(s.status))return await new Promise(e=>setTimeout(e,i)),n(1.5*i);if(r.includes(s.status))return s;if(s.status<200||s.status>=300)throw Error(`HTTP ${s.status}${s.statusText||""}`);throw Error(`Unexpected ${s.status} response status from poll endpoint`)}(n)}async function d(e,t,n){let{wait:r=500,acceptedStatusCodes:o=[200],max:i=3,attempt:a=0}=n||{},s=async()=>new Promise((n,s)=>{setTimeout(async()=>{try{let r=new Request(e,t);r.headers.append("X-Requested-With","XMLHttpRequest");let s=await self.fetch(r);if(o.includes(s.status)||a+1===i)return n(s);n("retry")}catch(e){s(e)}},r*a)}),l=await s();return"retry"!==l?l:d(e,t,{wait:r,acceptedStatusCodes:o,max:i,attempt:a+1})}},90828:(e,t,n)=>{n.d(t,{Cy:()=>s,K3:()=>u,Z8:()=>l,k_:()=>i,lK:()=>d,m$:()=>a});var r=n(51769);function o(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:n}))}function i(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,r.A)(t)),o(e,"submit",!0)&&e.submit()}function a(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}o(e,"change",!1)}function s(e,t){for(let n in t){let r=t[n],o=e.elements.namedItem(n);o instanceof HTMLInputElement?o.value=r:o instanceof HTMLTextAreaElement&&(o.value=r)}}function l(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n||e.isContentEditable}function c(e){return new URLSearchParams(e)}function u(e,t){let n=new URLSearchParams(e.search);for(let[e,r]of c(t))n.append(e,r);return n.toString()}function d(e){return c(new FormData(e)).toString()}},51769:(e,t,n)=>{function r(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let n=o(t);if(e.name){let r=e.matches("input[type=submit]")?"Submit":"",o=e.value||r;n||((n=document.createElement("input")).type="hidden",n.classList.add("js-submit-button-value"),t.prepend(n)),n.name=e.name,n.value=o}else n&&n.remove()}function o(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}n.d(t,{A:()=>r,C:()=>o})},502:(e,t,n)=>{let r;n.d(t,{BI:()=>m,Ti:()=>p,lA:()=>f});var o=n(70837),i=n(97524),a=n(55202),s=n(20454);let{getItem:l}=(0,a.A)("localStorage"),c="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.O)("octolytics");delete e.baseContext,r=new i.s(e)}catch(e){}function d(e){let t=(0,o.O)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");for(let[e,r]of(n&&Object.assign(t,JSON.parse(atob(n.content))),new URLSearchParams(window.location.search)))u.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,s.X)().toString(),Object.assign(t,e)}function f(e){r?.sendPageView(d(e))}function m(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(o[e]=`${n}`);r&&(d(o),r.sendEvent(e||"unknown",d(o)))}function p(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},49676:(e,t,n)=>{n.d(t,{B:()=>s});var r=n(95670),o=n(20742);let i="parse-html-no-op",a=r.wA.createPolicy(i,{createHTML:e=>o.b.apply({policy:()=>e,policyName:i,fallback:e,sanitize:!1,fallbackOnError:!0})});function s(e,t){let n=e.createElement("template");return n.innerHTML=a.createHTML(t),e.importNode(n.content,!0)}},39794:(e,t,n)=>{n.d(t,{k:()=>a,v:()=>s});var r=n(5225),o=n(94686);let i=(0,r.A)(function(){return o.XC?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),a=(0,r.A)(function(){return"enterprise"===i()}),s="webpack"},55202:(e,t,n)=>{n.d(t,{A:()=>a,D:()=>s});var r=n(94686),o=n(20454);let i=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function a(e,t={throwQuotaErrorsOnSet:!1},n=r.cg,a=e=>e,s=e=>e){let l;try{if(!n)throw Error();l=n[e]||new i}catch{l=new i}let{throwQuotaErrorsOnSet:c}=t;function u(e){t.sendCacheStats&&(0,o.i)({incrementKey:e})}function d(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let n=l.getItem(e);if(!n)return null;let r=`${e}:expiry`,o=Number(l.getItem(r));if(o&&t>o)return d(e),d(r),u("SAFE_STORAGE_VALUE_EXPIRED"),null;return u("SAFE_STORAGE_VALUE_WITHIN_TTL"),a(n)}catch(e){return null}},setItem:function(e,n,r=new Date().getTime()){try{if(l.setItem(e,s(n)),t.ttl){let n=`${e}:expiry`,o=r+t.ttl;l.setItem(n,o.toString())}}catch(e){if(c&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:d,clear:l.clear,key:l.key,get length(){return l.length}}}function s(e){return a(e,{throwQuotaErrorsOnSet:!1},r.cg,JSON.parse,JSON.stringify)}},29419:(e,t,n)=>{n.d(t,{Ai:()=>i,Gq:()=>r,SO:()=>o});let{getItem:r,setItem:o,removeItem:i}=(0,n(55202).A)("sessionStorage")},93231:(e,t,n)=>{n.d(t,{BW:()=>o,Ff:()=>m,HK:()=>b,JA:()=>_,LM:()=>p,Pv:()=>E,Vy:()=>f,ZW:()=>S,dR:()=>v,di:()=>h,fX:()=>T,k9:()=>w,my:()=>y,r7:()=>L,wG:()=>g,xT:()=>d});var r=n(29419);let o="reload",i="soft-nav:fail",a="soft-nav:fail-referrer",s="soft-nav:referrer",l="soft-nav:marker",c="soft-nav:react-app-name",u="soft-nav:latest-mechanism";function d(){(0,r.SO)(l,"0"),(0,r.Ai)(s),(0,r.Ai)(i),(0,r.Ai)(a),(0,r.Ai)(c),(0,r.Ai)(u)}function f(e){(0,r.SO)(l,e)}function m(){(0,r.SO)(l,"0")}function p(){let e=(0,r.Gq)(l);return e&&"0"!==e}function h(){return(0,r.Gq)(l)}function g(){return!!y()}function y(){return(0,r.Gq)(i)}function w(e){(0,r.SO)(i,e||o),(0,r.SO)(a,window.location.href)}function b(){(0,r.SO)(s,window.location.href)}function v(){return(0,r.Gq)(s)||document.referrer}function S(){let e=T();e?(0,r.SO)(c,e):(0,r.Ai)(c)}function E(){return(0,r.Gq)(c)}function T(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}function _(e){(0,r.SO)(u,e)}function L(){return(0,r.Gq)(u)}},94686:(e,t,n)=>{n.d(t,{KJ:()=>r.KJ,Kn:()=>o.Kn,X3:()=>r.X3,XC:()=>o.XC,cg:()=>o.cg,fV:()=>o.fV,g5:()=>r.g5});var r=n(54334),o=n(73239)},73239:(e,t,n)=>{n.d(t,{Kn:()=>i,XC:()=>r,cg:()=>o,fV:()=>a});let r="undefined"==typeof document?void 0:document,o="undefined"==typeof window?void 0:window,i="undefined"==typeof history?void 0:history,a="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},54334:(e,t,n)=>{n.d(t,{KJ:()=>i,X3:()=>o,g5:()=>a});var r=n(73239);let o=void 0===r.XC,i=!o;function a(){return!!o||!!r.XC.querySelector('react-app[data-ssr="true"]')}},20454:(e,t,n)=>{n.d(t,{X:()=>m,i:()=>c});var r=n(94686),o=n(29134),i=n(39794),a=n(2578),s=n(70170);let l=[];function c(e,t=!1,n=.5){if(!0!==(0,a.G7)("BROWSER_STATS_DISABLED")){if(n<0||n>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=!!r.XC?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=m(),e.bundler=i.v,Math.random()<n&&l.push(e),t?f():d()}}let u=null,d=(0,s.n)(async function(){await o.K,null==u&&(u=window.requestIdleCallback(f))},5e3);function f(){if(u=null,!l.length)return;let e=r.XC?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(e){for(let t of function(e){let t=[],n=e.map(e=>JSON.stringify(e));for(;n.length>0;)t.push(function(e){let t=e.shift(),n=[t],r=t.length;for(;e.length>0&&r<=65536;){let t=e[0].length;if(r+t<=65536){let o=e.shift();n.push(o),r+=t}else break}return n}(n));return t}(l))!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${t.join(",")}] }`);l=[]}}function m(){return!!r.XC?.head?.querySelector('meta[name="user-staff"]')?.content}r.XC?.addEventListener("pagehide",f),r.XC?.addEventListener("visibilitychange",f)},10686:(e,t,n)=>{n.d(t,{Rt:()=>r,Zz:()=>o,yU:()=>Subscription});let Subscription=class Subscription{constructor(e){this.closed=!1,this.unsubscribe=()=>{e(),this.closed=!0}}};function r(e,t,n,r={capture:!1}){return e.addEventListener(t,n,r),new Subscription(()=>{e.removeEventListener(t,n,r)})}function o(...e){return new Subscription(()=>{for(let t of e)t.unsubscribe()})}},20742:(e,t,n)=>{n.d(t,{b:()=>c,r:()=>TrustedTypesPolicyError});var r=n(2578),o=n(20454),i=n(61490),a=n(42838),s=n.n(a),l=n(502);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let c={apply:function({policy:e,policyName:t,fallback:n,fallbackOnError:a=!1,sanitize:c,silenceErrorReporting:u=!1}){try{if((0,r.G7)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return n;(0,o.i)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let i=e();return c&&new Promise(e=>{let n=window.performance.now(),r=s().sanitize(i,{FORBID_ATTR:[]}),o=window.performance.now();if(i.length!==r.length){let a=Error("Trusted Types policy output sanitized"),s=a.stack?.slice(0,1e3),c=i.slice(0,250);(0,l.BI)("trusted_types_policy.sanitize",{policyName:t,output:c,stack:s,outputLength:i.length,sanitizedLength:r.length,executionTime:o-n}),e(i)}}),i}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,i.N7)(e),(0,o.i)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!a))throw e}return n}}},95670:(e,t,n)=>{n.d(t,{wA:()=>u});var r,o=n(94686),i=n(20454);function a(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let s={createHTML:a("createHTML"),createScript:a("createScript"),createScriptURL:a("createScriptURL")},l=(r=globalThis).__TRUSTED_TYPE_POLICIES__??(r.__TRUSTED_TYPE_POLICIES__=new Map),c=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...s,...t})},u={createPolicy:(e,t)=>{if(l.has(e))return(0,i.i)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),l.get(e);{let n=Object.freeze(c.createPolicy(e,t));return l.set(e,n),n}}},d=!1;o.XC?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||d||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #prodsec-engineering if you have any additional questions about Trusted Types or CSP.`),d=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js","vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-1eda98","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_remote-form_dist_-347280"],()=>t(85564)),e.O()}]);
//# sourceMappingURL=profile-5233a82604bd.js.map