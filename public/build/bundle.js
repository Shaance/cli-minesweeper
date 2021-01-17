var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function l(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function f(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function h(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function p(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}let $;function b(t){$=t}const v=[],y=[],w=[],E=[],N=Promise.resolve();let A=!1;function x(t){w.push(t)}let L=!1;const I=new Set;function O(){if(!L){L=!0;do{for(let t=0;t<v.length;t+=1){const n=v[t];b(n),T(n.$$)}for(b(null),v.length=0;y.length;)y.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];I.has(n)||(I.add(n),n())}w.length=0}while(v.length);for(;E.length;)E.pop()();A=!1,L=!1,I.clear()}}function T(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const _=new Set;function M(t,n){t&&t.i&&(_.delete(t),t.i(n))}function k(t,n,e,r){if(t&&t.o){if(_.has(t))return;_.add(t),undefined.c.push((()=>{_.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function B(t){t&&t.c()}function S(t,e,c){const{fragment:u,on_mount:i,on_destroy:s,after_update:l}=t.$$;u&&u.m(e,c),x((()=>{const e=i.map(n).filter(o);s?s.push(...e):r(e),t.$$.on_mount=[]})),l.forEach(x)}function P(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Y(t,n){-1===t.$$.dirty[0]&&(v.push(t),A||(A=!0,N.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function G(n,o,c,u,i,l,f=[-1]){const a=$;b(n);const d=o.props||{},h=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:e(),dirty:f,skip_bound:!1};let g=!1;if(h.ctx=c?c(n,d,((t,e,...r)=>{const o=r.length?r[0]:e;return h.ctx&&i(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),g&&Y(n,t)),e})):[],h.update(),g=!0,r(h.before_update),h.fragment=!!u&&u(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(s)}else h.fragment&&h.fragment.c();o.intro&&M(n.$$.fragment),S(n,o.target,o.anchor),O()}b(a)}class V{$destroy(){P(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var j;!function(t){t.REVEAL="REVEAL",t.FLAG="FLAG"}(j||(j={}));var F,R=j;function W(t,n,e){return t>=0&&n>=0&&t<e.length&&n<e[t].length}function C(t,n){let e=0,r=0;const o=[];for(;e!==t;){for(o.push([]);r!==t;)n(o,e),r+=1;r=0,e+=1}return o}!function(t){t.INITIAL="INITIAL",t.PLAYING="PLAYING",t.WON="WON",t.LOST="LOST"}(F||(F={}));var z,q=F;!function(t){t[t.BOMB=-1]="BOMB",t[t.EMPTY=0]="EMPTY"}(z||(z={}));var D=z;class H{constructor(t,n){const e=t&&t>0?t:8,r=n&&n>0?n:8;this.content=function(t,n){const e=function(t,n){const e=new Set;for(;e.size!==n;){const n=U(t);e.add(String(n[0])+String(n[1]))}const r=Array.from(e).map((t=>[Number(t.charAt(0)),Number(t.charAt(1))]));return new Set(r)}(t,n);return function(t,n){const e=t,r=[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,-1],[1,-1],[-1,1]];return n.forEach((t=>{const[n,o]=[t[0],t[1]];r.forEach((t=>{const r=n+t[0],c=o+t[1];W(r,c,e)&&e[r][c]!==D.BOMB&&(e[r][c]+=1)}))})),e}(function(t,n){const e=t;return n.forEach((t=>{const[n,r]=[t[0],t[1]];e[n][r]=D.BOMB})),e}(function(t){return C(t,((t,n)=>t[n].push(0)))}(t),e),e)}(e,r),this.visited=K(e),this.flagged=K(e),this.size=e,this.bombsNumber=r,this.state=q.INITIAL,this.remainingNotVisited=e*e-r}withFlagged(t){return this.flagged=t,this}withState(t){return this.state=t,this}}function U(t){return[J(0,t),J(0,t)]}function J(t,n){return Math.floor(Math.random()*(n-t)+t)}function K(t){return C(t,((t,n)=>t[n].push(!1)))}function Q(t,n){return new H(t,n)}function X(t,n,e,r){return t===R.REVEAL?function(t,n,e){if(!W(n,e,t.content))return t;if(t.visited[n][e]||t.flagged[n][e]||function(t){return t.state===q.LOST||t.state===q.WON}(t))return t;if(t.content[n][e]===D.BOMB)return function(t){const n=t;return n.content.forEach(((t,e)=>{t.forEach(((t,r)=>{t===D.BOMB&&(n.visited[e][r]=!0)}))})),n}(t).withState(q.LOST);const r=function(t,n,e){const r=t,o=[[0,1],[1,0],[0,-1],[-1,0]],{content:c,visited:u}=r,i=[[n,e]];let s=0;for(;i.length>0;){const[t,n]=i.pop();tt(r,t,n)&&(u[t][n]=!0,s+=1,c[t][n]===D.EMPTY&&o.forEach((e=>{i.push([t+e[0],n+e[1]])})))}return r.remainingNotVisited-=s,r}(t,n,e);0===r.remainingNotVisited&&(r.state=q.WON);r.state===q.INITIAL&&(r.state=q.PLAYING);return r}(Z(n,e,r),e,r):function(t,n,e){if(!W(n,e,t.content)||t.visited[n][e])return t;const r=t;return r.flagged[n][e]=!r.flagged[n][e],r}(n,e,r)}function Z(t,n,e){if(t.state!==q.INITIAL||!W(n,e,t.content)||function(t,n,e){return W(n,e,t.content)&&t.content[n][e]===D.EMPTY}(t,n,e))return t;return Z(Q(t.size,t.bombsNumber).withFlagged(t.flagged),n,e)}function tt(t,n,e){const{content:r,visited:o,flagged:c}=t;return W(n,e,r)&&!o[n][e]&&!c[n][e]}function nt(t,n,e){const r=t.slice();return r[16]=n[e],r[18]=e,r}function et(t,n,e){const r=t.slice();return r[19]=n[e],r[21]=e,r}function rt(n){let e;return{c(){e=f("h2"),e.textContent="Avoid the 💣💥",g(e,"class","svelte-vtmw7m")},m(t,n){i(t,e,n)},p:t,d(t){t&&s(e)}}}function ot(t){let n,e;return{c(){n=f("h2"),e=a(t[5]),g(n,"class","svelte-vtmw7m")},m(t,r){i(t,n,r),u(n,e)},p(t,n){32&n&&m(e,t[5])},d(t){t&&s(n)}}}function ct(t){let n,e,o,c,l,p,$,b,v=t[12](t[2],t[3],t[18],t[21])+"";function y(){return t[14](t[18],t[21])}function w(){return t[15](t[18],t[21])}return{c(){n=f("div"),e=f("button"),o=a(v),p=d(),g(e,"class","cell-button svelte-vtmw7m"),e.disabled=c=t[11](t[2],t[0],t[18],t[21]),g(e,"style",l="background-color:"+t[9](t[2],t[18],t[21])+";\n              color:"+at(t[19])+";\n              "+t[10](t[2],t[3],t[0],t[18],t[21])),g(n,"class","column svelte-vtmw7m")},m(t,r){var c;i(t,n,r),u(n,e),u(e,o),u(n,p),$||(b=[h(e,"click",y),h(e,"contextmenu",(c=w,function(t){return t.preventDefault(),c.call(this,t)}))],$=!0)},p(n,r){t=n,12&r&&v!==(v=t[12](t[2],t[3],t[18],t[21])+"")&&m(o,v),5&r&&c!==(c=t[11](t[2],t[0],t[18],t[21]))&&(e.disabled=c),15&r&&l!==(l="background-color:"+t[9](t[2],t[18],t[21])+";\n              color:"+at(t[19])+";\n              "+t[10](t[2],t[3],t[0],t[18],t[21]))&&g(e,"style",l)},d(t){t&&s(n),$=!1,r(b)}}}function ut(t){let n,e=t[16],r=[];for(let n=0;n<e.length;n+=1)r[n]=ct(et(t,e,n));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();n=a("")},m(t,e){for(let n=0;n<r.length;n+=1)r[n].m(t,e);i(t,n,e)},p(t,o){if(7951&o){let c;for(e=t[16],c=0;c<e.length;c+=1){const u=et(t,e,c);r[c]?r[c].p(u,o):(r[c]=ct(u),r[c].c(),r[c].m(n.parentNode,n))}for(;c<r.length;c+=1)r[c].d(1);r.length=e.length}},d(t){l(r,t),t&&s(n)}}}function it(n){let e,r,o,c,$,b,v,y,w,E,N,A;function x(t,n){return(null==r||1&n)&&(r=!t[6](t[0])),r?ot:rt}let L=x(n,-1),I=L(n),O=n[1],T=[];for(let t=0;t<O.length;t+=1)T[t]=ut(nt(n,O,t));return{c(){e=f("main"),I.c(),o=d(),c=f("button"),$=a(n[4]),b=d(),v=f("br"),y=f("br"),w=d(),E=f("div");for(let t=0;t<T.length;t+=1)T[t].c();g(c,"class","reset-btn svelte-vtmw7m"),g(E,"class","grid svelte-vtmw7m"),p(E,"width",lt+"px"),p(E,"grid-template-columns",ft(st,lt/st,"px")),p(E,"grid-template-rows",ft(st,lt/st,"px"))},m(t,r){i(t,e,r),I.m(e,null),u(e,o),u(e,c),u(c,$),u(e,b),u(e,v),u(e,y),u(e,w),u(e,E);for(let t=0;t<T.length;t+=1)T[t].m(E,null);N||(A=h(c,"click",n[7]),N=!0)},p(t,[n]){if(L===(L=x(t,n))&&I?I.p(t,n):(I.d(1),I=L(t),I&&(I.c(),I.m(e,o))),16&n&&m($,t[4]),7951&n){let e;for(O=t[1],e=0;e<O.length;e+=1){const r=nt(t,O,e);T[e]?T[e].p(r,n):(T[e]=ut(r),T[e].c(),T[e].m(E,null))}for(;e<T.length;e+=1)T[e].d(1);T.length=O.length}},i:t,o:t,d(t){t&&s(e),I.d(),l(T,t),N=!1,A()}}}const st=8,lt=400;function ft(t,n,e){if(t<0)return;let r="",o=0;for(;o!==t;)r+=`${n}${e} `,o++;return r}function at(t){switch(t){case 1:return"blue";case 2:return"green";case 3:return"red";case 4:return"purple";case 5:return"maroon";case 6:return"turquoise";case 7:return"black";case 8:return"grey"}}function dt(t,n,e){let r,o,c,u,i,s,l=Q(st,11);function f(t){return t===q.INITIAL||t===q.PLAYING}function a(t,n,r){e(13,l=X(t,l,n,r))}function d(t,n,e,r){return t[e][r]||!f(n)}return t.$$.update=()=>{8192&t.$$.dirty&&e(1,r=l.content),8192&t.$$.dirty&&e(2,o=l.visited),8192&t.$$.dirty&&e(3,c=l.flagged),8192&t.$$.dirty&&e(0,u=l.state),1&t.$$.dirty&&e(4,i=f(u)?"Reset":"Play again"),1&t.$$.dirty&&e(5,s=u===q.WON?"You won! 🙌":"You lost.. 😫")},[u,r,o,c,i,s,f,function(){e(13,l=Q(st,11))},a,function(t,n,e){const r=(n+e)%2==0;return t[n][e]?r?"#d4c18e":"#cfbb86":r?"#9cd14f":"#95c74c"},function(t,n,e,r,o){return d(t,e,r,o)||n[r][o]?"":"cursor: pointer;"},d,function(t,n,e,o){const c=r[e][o];return t[e][o]&&c!==D.EMPTY?c===D.BOMB?"💣":c:n[e][o]?"⛳️":""},l,(t,n)=>a(R.REVEAL,t,n),(t,n)=>a(R.FLAG,t,n)]}class ht extends V{constructor(t){super(),G(this,t,dt,it,c,{})}}function gt(n){let e;return{c(){e=f("main"),e.innerHTML='<h3 class="svelte-h71jex">Use left click to reveal cell content or right click to flag/unflag</h3>',g(e,"class","svelte-h71jex")},m(t,n){i(t,e,n)},p:t,i:t,o:t,d(t){t&&s(e)}}}class mt extends V{constructor(t){super(),G(this,t,null,gt,c,{})}}function pt(n){let e,r,o,c,l,a,h;return c=new ht({}),a=new mt({}),{c(){e=f("main"),r=f("h1"),r.textContent="MineSweeper",o=d(),B(c.$$.fragment),l=d(),B(a.$$.fragment),g(r,"class","svelte-5dcg2d"),g(e,"class","svelte-5dcg2d")},m(t,n){i(t,e,n),u(e,r),u(e,o),S(c,e,null),u(e,l),S(a,e,null),h=!0},p:t,i(t){h||(M(c.$$.fragment,t),M(a.$$.fragment,t),h=!0)},o(t){k(c.$$.fragment,t),k(a.$$.fragment,t),h=!1},d(t){t&&s(e),P(c),P(a)}}}return new class extends V{constructor(t){super(),G(this,t,null,pt,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
