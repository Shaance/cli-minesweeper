var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function f(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function l(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function h(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function m(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}let $;function b(t){$=t}const y=[],v=[],E=[],N=[],A=Promise.resolve();let I=!1;function L(t){E.push(t)}let k=!1;const x=new Set;function w(){if(!k){k=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];b(n),O(n.$$)}for(b(null),y.length=0;v.length;)v.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];x.has(n)||(x.add(n),n())}E.length=0}while(y.length);for(;N.length;)N.pop()();I=!1,k=!1,x.clear()}}function O(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}const _=new Set;function T(t,n){t&&t.i&&(_.delete(t),t.i(n))}function M(t,e,c){const{fragment:u,on_mount:i,on_destroy:s,after_update:f}=t.$$;u&&u.m(e,c),L((()=>{const e=i.map(n).filter(o);s?s.push(...e):r(e),t.$$.on_mount=[]})),f.forEach(L)}function B(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function S(t,n){-1===t.$$.dirty[0]&&(y.push(t),I||(I=!0,A.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function P(n,o,c,u,i,f,l=[-1]){const a=$;b(n);const d=o.props||{},h=n.$$={fragment:null,ctx:null,props:f,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:e(),dirty:l,skip_bound:!1};let g=!1;if(h.ctx=c?c(n,d,((t,e,...r)=>{const o=r.length?r[0]:e;return h.ctx&&i(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),g&&S(n,t)),e})):[],h.update(),g=!0,r(h.before_update),h.fragment=!!u&&u(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(s)}else h.fragment&&h.fragment.c();o.intro&&T(n.$$.fragment),M(n,o.target,o.anchor),w()}b(a)}class j{$destroy(){B(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var Y;!function(t){t.REVEAL="REVEAL",t.FLAG="FLAG"}(Y||(Y={}));var V,G=Y;function R(t,n,e){return t>=0&&n>=0&&t<e.length&&n<e[t].length}function W(t,n){let e=0,r=0;const o=[];for(;e!==t;){for(o.push([]);r!==t;)n(o,e),r+=1;r=0,e+=1}return o}!function(t){t.INITIAL="INITIAL",t.PLAYING="PLAYING",t.WON="WON",t.LOST="LOST"}(V||(V={}));var C,F=V;!function(t){t[t.BOMB=-1]="BOMB",t[t.EMPTY=0]="EMPTY"}(C||(C={}));var z=C;class q{constructor(t,n){const e=t&&t>0?t:8,r=n&&n>0?n:8;this.content=function(t,n){const e=function(t,n){const e=new Set;for(;e.size!==n;){const n=D(t);e.add(String(n[0])+String(n[1]))}const r=Array.from(e).map((t=>[Number(t.charAt(0)),Number(t.charAt(1))]));return new Set(r)}(t,n);return function(t,n){const e=t,r=[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,-1],[1,-1],[-1,1]];return n.forEach((t=>{const[n,o]=[t[0],t[1]];r.forEach((t=>{const r=n+t[0],c=o+t[1];R(r,c,e)&&e[r][c]!==z.BOMB&&(e[r][c]+=1)}))})),e}(function(t,n){const e=t;return n.forEach((t=>{const[n,r]=[t[0],t[1]];e[n][r]=z.BOMB})),e}(function(t){return W(t,((t,n)=>t[n].push(0)))}(t),e),e)}(e,r),this.visited=J(e),this.flagged=J(e),this.size=e,this.bombsNumber=r,this.state=F.INITIAL,this.remainingNotVisited=e*e-r}withFlagged(t){return this.flagged=t,this}withState(t){return this.state=t,this}}function D(t){return[H(0,t),H(0,t)]}function H(t,n){return Math.floor(Math.random()*(n-t)+t)}function J(t){return W(t,((t,n)=>t[n].push(!1)))}function K(t,n){return new q(t,n)}function Q(t,n,e,r){return t===G.REVEAL?function(t,n,e){if(!R(n,e,t.content)||t.visited[n][e]||function(t){return t.state===F.LOST||t.state===F.WON}(t))return t;if(t.content[n][e]===z.BOMB)return function(t){const n=t;return n.content.forEach(((t,e)=>{t.forEach(((t,r)=>{t===z.BOMB&&(n.visited[e][r]=!0)}))})),n}(t).withState(F.LOST);const r=function(t,n,e){const r=t,o=[[0,1],[1,0],[0,-1],[-1,0]],{content:c,visited:u}=r,i=[[n,e]];let s=0;for(;i.length>0;){const[t,n]=i.pop();X(r,t,n)&&(u[t][n]=!0,s+=1,c[t][n]===z.EMPTY&&o.forEach((e=>{i.push([t+e[0],n+e[1]])})))}return r.remainingNotVisited-=s,r}(t,n,e);0===r.remainingNotVisited&&(r.state=F.WON);r.state===F.INITIAL&&(r.state=F.PLAYING);return r}(U(n,e,r),e,r):function(t,n,e){if(!R(n,e,t.content)||t.visited[n][e])return t;const r=t;return r.flagged[n][e]=!r.flagged[n][e],r}(n,e,r)}function U(t,n,e){if(t.state!==F.INITIAL||!R(n,e,t.content)||function(t,n,e){return R(n,e,t.content)&&t.content[n][e]===z.EMPTY}(t,n,e))return t;return U(K(t.size,t.bombsNumber).withFlagged(t.flagged),n,e)}function X(t,n,e){const{content:r,visited:o,flagged:c}=t;return R(n,e,r)&&!o[n][e]&&!c[n][e]}function Z(t,n,e){const r=t.slice();return r[15]=n[e],r[17]=e,r}function tt(t,n,e){const r=t.slice();return r[18]=n[e],r[20]=e,r}function nt(n){let e;return{c(){e=l("h2"),e.textContent="Avoid the 💣💥",g(e,"class","svelte-s9fjdk")},m(t,n){i(t,e,n)},p:t,d(t){t&&s(e)}}}function et(t){let n,e;return{c(){n=l("h2"),e=a(t[4]),g(n,"class","svelte-s9fjdk")},m(t,r){i(t,n,r),u(n,e)},p(t,n){16&n&&p(e,t[4])},d(t){t&&s(n)}}}function rt(t){let n,e,r,o,c,f,m,$,b=t[11](t[2],t[17],t[20])+"";function y(){return t[13](t[17],t[20])}return{c(){n=l("div"),e=l("button"),r=a(b),f=d(),g(e,"class","cell-button svelte-s9fjdk"),e.disabled=o=t[10](t[2],t[0],t[17],t[20]),g(e,"style",c="background-color:"+t[8](t[2],t[17],t[20])+";\n              color:"+ft(t[18])+";\n              "+t[9](t[2],t[0],t[17],t[20])),g(n,"class","column svelte-s9fjdk")},m(t,o){i(t,n,o),u(n,e),u(e,r),u(n,f),m||($=h(e,"click",y),m=!0)},p(n,u){t=n,4&u&&b!==(b=t[11](t[2],t[17],t[20])+"")&&p(r,b),5&u&&o!==(o=t[10](t[2],t[0],t[17],t[20]))&&(e.disabled=o),7&u&&c!==(c="background-color:"+t[8](t[2],t[17],t[20])+";\n              color:"+ft(t[18])+";\n              "+t[9](t[2],t[0],t[17],t[20]))&&g(e,"style",c)},d(t){t&&s(n),m=!1,$()}}}function ot(t){let n,e=t[15],r=[];for(let n=0;n<e.length;n+=1)r[n]=rt(tt(t,e,n));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();n=a("")},m(t,e){for(let n=0;n<r.length;n+=1)r[n].m(t,e);i(t,n,e)},p(t,o){if(3975&o){let c;for(e=t[15],c=0;c<e.length;c+=1){const u=tt(t,e,c);r[c]?r[c].p(u,o):(r[c]=rt(u),r[c].c(),r[c].m(n.parentNode,n))}for(;c<r.length;c+=1)r[c].d(1);r.length=e.length}},d(t){f(r,t),t&&s(n)}}}function ct(n){let e,r,o,c,$,b,y,v,E,N,A,I;function L(t,n){return(null==r||1&n)&&(r=!t[5](t[0])),r?et:nt}let k=L(n,-1),x=k(n),w=n[1],O=[];for(let t=0;t<w.length;t+=1)O[t]=ot(Z(n,w,t));return{c(){e=l("main"),x.c(),o=d(),c=l("button"),$=a(n[3]),b=d(),y=l("br"),v=l("br"),E=d(),N=l("div");for(let t=0;t<O.length;t+=1)O[t].c();g(c,"class","reset-btn svelte-s9fjdk"),g(N,"class","grid svelte-s9fjdk"),m(N,"width",it+"px"),m(N,"grid-template-columns",st(ut,it/ut,"px")),m(N,"grid-template-rows",st(ut,it/ut,"px"))},m(t,r){i(t,e,r),x.m(e,null),u(e,o),u(e,c),u(c,$),u(e,b),u(e,y),u(e,v),u(e,E),u(e,N);for(let t=0;t<O.length;t+=1)O[t].m(N,null);A||(I=h(c,"click",n[6]),A=!0)},p(t,[n]){if(k===(k=L(t,n))&&x?x.p(t,n):(x.d(1),x=k(t),x&&(x.c(),x.m(e,o))),8&n&&p($,t[3]),3975&n){let e;for(w=t[1],e=0;e<w.length;e+=1){const r=Z(t,w,e);O[e]?O[e].p(r,n):(O[e]=ot(r),O[e].c(),O[e].m(N,null))}for(;e<O.length;e+=1)O[e].d(1);O.length=w.length}},i:t,o:t,d(t){t&&s(e),x.d(),f(O,t),A=!1,I()}}}const ut=8,it=500;function st(t,n,e){if(t<0)return;let r="",o=0;for(;o!==t;)r+=`${n}${e} `,o++;return r}function ft(t){switch(t){case 1:return"blue";case 2:return"green";case 3:return"red";case 4:return"purple";case 5:return"maroon";case 6:return"turquoise";case 7:return"black";case 8:return"grey"}}function lt(t,n,e){let r,o,c,u,i,s=K(ut,7);function f(t){return t===F.INITIAL||t===F.PLAYING}function l(t,n,r){e(12,s=Q(t,s,n,r))}function a(t,n,e,r){return t[e][r]||!f(n)}return t.$$.update=()=>{4096&t.$$.dirty&&e(1,r=s.content),4096&t.$$.dirty&&e(2,o=s.visited),4096&t.$$.dirty&&s.flagged,4096&t.$$.dirty&&e(0,c=s.state),1&t.$$.dirty&&e(3,u=f(c)?"Reset":"Play again"),1&t.$$.dirty&&e(4,i=c===F.WON?"You won! 🙌":"You lost.. 😫")},[c,r,o,u,i,f,function(){e(12,s=K(ut,7))},l,function(t,n,e){const r=(n+e)%2==0;return t[n][e]?r?"#d4c18e":"#cfbb86":r?"#9cd14f":"#95c74c"},function(t,n,e,r){return a(t,n,e,r)?"":"cursor: pointer;"},a,function(t,n,e){const o=r[n][e];return t[n][e]&&o!==z.EMPTY?o===z.BOMB?"💣":o:""},s,(t,n)=>l(G.REVEAL,t,n)]}class at extends j{constructor(t){super(),P(this,t,lt,ct,c,{})}}function dt(n){let e,r,o,c,f;return c=new at({}),{c(){var t;e=l("main"),r=l("h1"),r.textContent="MineSweeper",o=d(),(t=c.$$.fragment)&&t.c(),g(r,"class","svelte-1tky8bj"),g(e,"class","svelte-1tky8bj")},m(t,n){i(t,e,n),u(e,r),u(e,o),M(c,e,null),f=!0},p:t,i(t){f||(T(c.$$.fragment,t),f=!0)},o(t){!function(t,n,e,r){if(t&&t.o){if(_.has(t))return;_.add(t),(void 0).c.push((()=>{_.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}(c.$$.fragment,t),f=!1},d(t){t&&s(e),B(c)}}}return new class extends j{constructor(t){super(),P(this,t,null,dt,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map