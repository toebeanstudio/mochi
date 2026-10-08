import{i as e,n as t,r as n}from"./base-DVwZQ6Zq.js";import{a as r,i,n as a,r as o,t as s}from"./index-DOu2PWLC.js";import{a as c,c as l,d as u,i as d,l as f,n as p,o as m,r as h,s as g,t as ee,u as _}from"./three-C5cGnPxo.js";var v=[`#ffe08a`,`#ffb823`,`#e0841a`],te=[`#d8f1ff`,`#79bdf2`,`#3b7fcc`],y=[`#fff2a8`,`#ffc93c`,`#e0901c`],ne={ginger:{base:`#f5a35c`,shade:`#de8640`,light:`#fff1df`,line:`#5c3324`,paw:`#fff1df`,earInner:`#f7a9bb`,earFar:`#f5a35c`,earNear:`#f5a35c`,face:`#f5a35c`,muzzle:`#fff1df`,muzzleAlpha:1,chestAlpha:1,stripes:`#dc7a32`,tailTip:null,patches:[],whisker:`#5c3324`,iris:v},tuxedo:{base:`#37324d`,shade:`#26223a`,light:`#fbfaff`,line:`#191627`,paw:`#fbfaff`,earInner:`#e98fa9`,earFar:`#37324d`,earNear:`#37324d`,face:`#37324d`,muzzle:`#fbfaff`,muzzleAlpha:1,chestAlpha:1,stripes:null,tailTip:`#fbfaff`,patches:[],whisker:`#fbfaff`,iris:v},calico:{base:`#fdfaf6`,shade:`#e9e1db`,light:`#ffffff`,line:`#56434d`,paw:`#fdfaf6`,earInner:`#f7a9bb`,earFar:`#f2a35a`,earNear:`#3d3647`,face:`#fdfaf6`,muzzle:`#ffffff`,muzzleAlpha:0,chestAlpha:0,stripes:null,tailTip:`#3d3647`,patches:[{color:`#f2a35a`,at:`hip`},{color:`#3d3647`,at:`shoulder`},{color:`#f2a35a`,at:`headFar`},{color:`#3d3647`,at:`headNear`}],whisker:`#56434d`,iris:v},grey:{base:`#a3acc0`,shade:`#858ea5`,light:`#eef0f6`,line:`#353a52`,paw:`#eef0f6`,earInner:`#f2a9bd`,earFar:`#a3acc0`,earNear:`#a3acc0`,face:`#a3acc0`,muzzle:`#eef0f6`,muzzleAlpha:.95,chestAlpha:.9,stripes:`#7f889f`,tailTip:null,patches:[],whisker:`#353a52`,iris:v},cream:{base:`#f8e7cc`,shade:`#e9cfaa`,light:`#fff8ee`,line:`#73533e`,paw:`#fff8ee`,earInner:`#f6a3b8`,earFar:`#d9b48c`,earNear:`#d9b48c`,face:`#f8e7cc`,muzzle:`#fff8ee`,muzzleAlpha:1,chestAlpha:1,stripes:null,tailTip:`#d9b48c`,patches:[],whisker:`#73533e`,iris:v},black:{base:`#2e2a3d`,shade:`#1f1c2b`,light:`#3d3852`,line:`#110f19`,paw:`#2e2a3d`,earInner:`#7d5469`,earFar:`#2e2a3d`,earNear:`#2e2a3d`,face:`#2e2a3d`,muzzle:`#3d3852`,muzzleAlpha:.9,chestAlpha:.6,stripes:null,tailTip:null,patches:[],whisker:`#cfc9e6`,iris:[`#fff0a0`,`#ffc93c`,`#e8941e`]},mocha:{base:`#f7ecdc`,shade:`#e6d3b8`,light:`#fffaf2`,line:`#5a3e34`,paw:`#6e4d42`,earInner:`#9a6a64`,earFar:`#6e4d42`,earNear:`#6e4d42`,face:`#8a6758`,muzzle:`#6e4d42`,muzzleAlpha:0,chestAlpha:.7,stripes:null,tailTip:null,patches:[],whisker:`#fffaf2`,iris:te,nose:`#8f5f5a`,points:`#6e4d42`,socks:`#6e4d42`},snowball:{base:`#fdfcff`,shade:`#e9e6f3`,light:`#ffffff`,line:`#6c6482`,paw:`#fdfcff`,earInner:`#ffb6c8`,earFar:`#fdfcff`,earNear:`#fdfcff`,face:`#fdfcff`,muzzle:`#ffffff`,muzzleAlpha:0,chestAlpha:0,stripes:null,tailTip:null,patches:[],whisker:`#b2abc6`,iris:te,irisAlt:y,nose:`#ffa2bb`},smokey:{base:`#cdd1da`,shade:`#aab0bf`,light:`#f5f6fa`,line:`#383b48`,paw:`#f5f6fa`,earInner:`#f1aebe`,earFar:`#cdd1da`,earNear:`#cdd1da`,face:`#cdd1da`,muzzle:`#f5f6fa`,muzzleAlpha:1,chestAlpha:1,stripes:`#5a5e6e`,tailTip:`#5a5e6e`,patches:[],whisker:`#383b48`,iris:[`#effab8`,`#aed66c`,`#5e9a3c`]},peach:{base:`#f7a866`,shade:`#e28b4a`,light:`#fffaf3`,line:`#5e3424`,paw:`#fffaf3`,earInner:`#f7a9bb`,earFar:`#f7a866`,earNear:`#f7a866`,face:`#f7a866`,muzzle:`#fffaf3`,muzzleAlpha:1,chestAlpha:1,stripes:null,tailTip:null,patches:[],whisker:`#5e3424`,iris:y,socks:`#fffaf3`,bicolor:!0},lilac:{base:`#cfc0cc`,shade:`#b5a4b3`,light:`#e9dfe8`,line:`#4f4255`,paw:`#cfc0cc`,earInner:`#eaaabd`,earFar:`#c3b2c1`,earNear:`#c3b2c1`,face:`#cfc0cc`,muzzle:`#ddd1db`,muzzleAlpha:.9,chestAlpha:.55,stripes:null,tailTip:null,patches:[],whisker:`#6c5f70`,iris:[`#ffe0a6`,`#f6a64c`,`#cf6e2a`],nose:`#d58aa2`}};function b(e){"@babel/helpers - typeof";return b=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},b(e)}function x(e,t){if(b(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(b(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function re(e){var t=x(e,`string`);return b(t)==`symbol`?t:t+``}function S(e,t,n){return(t=re(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=class{constructor(e,t=180,n=.75){S(this,`x`,void 0),S(this,`v`,0),S(this,`target`,void 0),S(this,`k`,void 0),S(this,`zeta`,void 0),this.x=e,this.target=e,this.k=t,this.zeta=n}step(e){let t=2*this.zeta*Math.sqrt(this.k),n=-this.k*(this.x-this.target)-t*this.v;this.v+=n*e,this.x+=this.v*e}snap(e=this.target){this.x=e,this.target=e,this.v=0}};function ie(e,t){return!t||e===`neck`||e===`eyes`&&t!==`nightcap`}var w=`min-width:46px;padding:6px 8px;border-radius:9px;background:#fffdf7;border:1.6px solid #2a2440;font:700 15px 'Bagel Fat One',ui-rounded,sans-serif;color:#2a2440;text-align:center;box-shadow:0 3px 0 rgba(42,36,64,.18)`,T=`position:relative;min-width:62px;max-width:140px;padding:9px 11px 8px 15px;border-radius:3px;border:1.6px solid #2a2440;color:#3a2f5c;text-align:left;
  background:linear-gradient(90deg,transparent 9px,#ffb0c4 9px,#ffb0c4 10px,transparent 10px),repeating-linear-gradient(180deg,#fffaf0 0 16px,#a9cdf2 16px 17px) 0 6px/100% 100% no-repeat,#fffaf0;
  font:900 14.5px/17px 'Nunito Variable','Nunito',ui-rounded,sans-serif;box-shadow:0 3px 0 rgba(42,36,64,.16);rotate:-2.5deg`;function ae(e,t,n=`board`){let a=e;if(a.style.cssText=n===`note`?T:w,n===`note`){a.textContent=``;let e=document.createElement(`i`);e.style.cssText=`position:absolute;left:50%;top:-7px;width:30px;height:11px;translate:-50% 0;rotate:-5deg;background:rgba(255,158,192,.88);border-radius:2px;background-image:repeating-linear-gradient(90deg,transparent 0 3px,rgba(255,255,255,.55) 3px 5px)`;let n=document.createElement(`div`);n.style.cssText=`white-space:pre;`,n.textContent=i(t).join(`
`);let r=document.createElement(`i`);r.innerHTML=`<svg width="9" height="8" viewBox="0 0 9 8" style="display:block"><path d="M4.5 7.4C1.3 5.4.4 3.6.8 2.2 1.2.8 3.1.5 4.5 2.1 5.9.5 7.8.8 8.2 2.2c.4 1.4-.5 3.2-3.7 5.2z" fill="#ee7099"/></svg>`,r.style.cssText=`position:absolute;right:4px;bottom:3px`,a.append(e,n,r);return}let o=r(t,26),s=o?[]:t.split(`
`).slice(0,2);if(s.length===2){a.textContent=``,a.style.display=``,a.style.padding=`7px 10px 6px`,a.style.rotate=`-2deg`;let e=document.createElement(`div`);e.textContent=s[0],e.style.cssText=`font:900 14px/1.15 'Nunito Variable','Nunito',ui-rounded,sans-serif;white-space:nowrap;max-width:150px;overflow:hidden;text-overflow:ellipsis;margin-bottom:2px;color:#3a2f5c`;let t=document.createElement(`div`);t.textContent=s[1],t.style.cssText=`font-size:16px;line-height:1.1;white-space:nowrap`,a.append(e,t);return}o?(e.innerHTML=o,e.style.display=`grid`,e.style.placeItems=`center`):(e.textContent=t,e.style.display=``)}var E=(e,t,n,r=e/2,i=t)=>`<svg width="${e}" height="${t}" viewBox="0 0 ${e} ${t}" style="position:absolute;left:${-r}px;top:${-i}px;overflow:visible">${n}</svg>`,D=`#2a2440`,oe={bolt:E(28,30,`<path d="M15.6 1.6 4.4 17h6.8l-3.2 12.6L19.8 13.6H13L15.6 1.6z" fill="#ffc533" stroke="${D}" stroke-width="1.6" stroke-linejoin="round"/><path d="M13.6 6.4 9.2 12.6" stroke="#fff6c8" stroke-width="1.7" stroke-linecap="round"/><path d="M24 3.4c.4 1.6 1.2 2.4 2.8 2.8-1.6.4-2.4 1.2-2.8 2.8-.4-1.6-1.2-2.4-2.8-2.8 1.6-.4 2.4-1.2 2.8-2.8z" fill="#ffd36b" stroke="${D}" stroke-width=".9" stroke-linejoin="round"/>`),ring:E(34,26,`<g fill="none" stroke="#ffb823" stroke-width="2.6" stroke-linecap="round"><path d="M9 6c-3 2.5-4.5 5-4.5 8s1.5 5.5 4.5 8"/><path d="M25 6c3 2.5 4.5 5 4.5 8s-1.5 5.5-4.5 8"/></g><g fill="none" stroke="#ffd36b" stroke-width="2.2" stroke-linecap="round"><path d="M4.5 2C0 6 -1 10 -1 14s1 8 5.5 12"/><path d="M29.5 2C34 6 35 10 35 14s-1 8-5.5 12"/></g>`),idea:E(24,32,`<path d="M12 2a9 9 0 0 0-5.4 16.2c1 .8 1.6 2 1.6 3.3V23h7.6v-1.5c0-1.3.6-2.5 1.6-3.3A9 9 0 0 0 12 2z" fill="#ffe08a" stroke="${D}" stroke-width="1.5" stroke-linejoin="round"/><path d="M8.2 26h7.6M9.2 29h5.6" stroke="${D}" stroke-width="1.6" stroke-linecap="round"/><path d="M9.5 9.5a3.5 3.5 0 0 1 3-2.5" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round"/><g stroke="#ffb823" stroke-width="1.6" stroke-linecap="round"><path d="M12-3v-2.5M2-.5 0.5-2.2M22-.5l1.5-1.7"/></g>`),heart:E(26,24,`<path d="M13 22C4 15 1.5 11 1.5 7.2 1.5 4 4 1.8 7 1.8c2.6 0 4.6 1.6 6 3.8 1.4-2.2 3.4-3.8 6-3.8 3 0 5.5 2.2 5.5 5.4 0 3.8-2.5 7.8-11.5 14.8z" fill="#ee7099" stroke="${D}" stroke-width="1.6" stroke-linejoin="round"/><path d="M6 6.5c.8-1.4 2.4-1.8 3.4-1.2" stroke="#fff" stroke-opacity=".8" stroke-width="1.6" fill="none" stroke-linecap="round"/>`),sparkle:E(28,28,`<path d="M14 1.5c1 6.5 3 9.5 12.5 12.5C17 17 15 20 14 26.5 13 20 11 17 1.5 14 11 11 13 8 14 1.5z" fill="#ffd36b" stroke="${D}" stroke-width="1.5" stroke-linejoin="round"/><circle cx="24" cy="4" r="2" fill="#ffd36b"/>`),zzz:E(30,30,`<g font-family="Bagel Fat One, ui-rounded, sans-serif" fill="#8f86b8" stroke="${D}" stroke-width=".8"><text x="2" y="28" font-size="13">z</text><text x="11" y="18" font-size="10">z</text><text x="19" y="9" font-size="8">z</text></g>`),anger:E(24,24,`<g stroke="#e0476b" stroke-width="3" stroke-linecap="round" fill="none"><path d="M3 9c3 0 6-1 6-6M15 3c0 5 3 6 6 6M21 15c-3 0-6 1-6 6M9 21c0-5-3-6-6-6"/></g>`),sweat:E(16,22,`<path d="M8 1.5C5 7 2 10 2 14a6 6 0 0 0 12 0c0-4-3-7-6-12.5z" fill="#9ad0f5" stroke="${D}" stroke-width="1.4"/><path d="M5.5 14.5a2.5 2.5 0 0 0 2.5 2.5" stroke="#fff" stroke-width="1.4" fill="none" stroke-linecap="round"/>`),exclaim:E(14,30,`<rect x="3" y="1.5" width="8" height="18" rx="4" fill="#ffb823" stroke="${D}" stroke-width="1.5"/><circle cx="7" cy="25.5" r="3.6" fill="#ffb823" stroke="${D}" stroke-width="1.5"/>`),question:E(22,30,`<path d="M4 9a7 7 0 1 1 10.5 6c-2.5 1.4-3.5 2.6-3.5 5" fill="none" stroke="#8f86b8" stroke-width="4.5" stroke-linecap="round"/><circle cx="11" cy="26" r="2.8" fill="#8f86b8"/>`),music:E(26,28,`<path d="M9 22V5l14-3v16" fill="none" stroke="${D}" stroke-width="2.2" stroke-linejoin="round"/><ellipse cx="5.5" cy="22" rx="4.5" ry="3.6" fill="#5aa7e8" stroke="${D}" stroke-width="1.5"/><ellipse cx="19.5" cy="18.5" rx="4.5" ry="3.6" fill="#5aa7e8" stroke="${D}" stroke-width="1.5"/>`),water:E(18,24,`<path d="M9 1.5C6 7 2.5 11 2.5 15.5a6.5 6.5 0 0 0 13 0C15.5 11 12 7 9 1.5z" fill="#5aa7e8" stroke="${D}" stroke-width="1.5"/><path d="M6 15.5a3 3 0 0 0 3 3" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round"/>`)},se={glass:E(22,30,`<path d="M2.5 2h17l-2.4 25.5c-.1 1.4-1.3 2.5-2.7 2.5H7.6c-1.4 0-2.6-1.1-2.7-2.5z" fill="#eaf4fd" fill-opacity=".85" stroke="${D}" stroke-width="1.5" stroke-linejoin="round"/><path d="M4 11h14l-1.5 16.2c-.1.9-.8 1.6-1.7 1.6H7.2c-.9 0-1.6-.7-1.7-1.6z" fill="#5aa7e8"/><path d="M6 14v10" stroke="#fff" stroke-opacity=".7" stroke-width="1.6" stroke-linecap="round"/>`),bowl:E(40,18,`<path d="M2 4h36l-3.5 11c-.4 1.2-1.5 2-2.8 2H8.3c-1.3 0-2.4-.8-2.8-2z" fill="#5aa7e8" stroke="${D}" stroke-width="1.5" stroke-linejoin="round"/><ellipse cx="20" cy="4" rx="18" ry="3" fill="#c9824a" stroke="${D}" stroke-width="1.5"/>`),ball:E(22,22,`<circle cx="11" cy="11" r="9.5" fill="#ffb823" stroke="${D}" stroke-width="1.5"/><path d="M3 8c5 2 11 2 16 0M3 14c5-2 11-2 16 0" stroke="${D}" stroke-width="1.2" fill="none"/>`),yarn:E(24,24,`<circle cx="12" cy="12" r="10.5" fill="#ee7099" stroke="${D}" stroke-width="1.5"/><path d="M4 8c5 1 11 6 14 13M3.5 13c5 0 9 3 11 8.5M7 3.5c5 3 9 9 10 16M12 1.8c4 4 7 9 8.5 13.5" fill="none" stroke="#c94f78" stroke-width="1.2" stroke-linecap="round"/>`),pencil:E(40,9,`<path d="M5 1h26v7H5z" fill="#ffb823" stroke="${D}" stroke-width="1.4"/><path d="M31 1l8 3.5-8 3.5z" fill="#f6dcb5" stroke="${D}" stroke-width="1.4" stroke-linejoin="round"/><path d="M1 1h4v7H1z" fill="#ee7099" stroke="${D}" stroke-width="1.4"/>`,6,5),mouse:o(a.mouse,...a.mouse.grip),fish:o(a.fish,...a.fish.grip),yarnball:o(a.yarn,...a.yarn.grip),plug:o(s.plug,...s.plug.grip),get blanket(){return o(s.blanket,...s.blanket.grip)},note:o(s.note,...s.note.grip),tab:E(34,22,`<path d="M2 21V6c0-2.2 1.8-4 4-4h22c2.2 0 4 1.8 4 4v15z" fill="#fff" stroke="${D}" stroke-width="1.5"/><rect x="7" y="8" width="16" height="3" rx="1.5" fill="#ee7099"/><rect x="7" y="13.5" width="11" height="2.5" rx="1.25" fill="#d6d2e6"/>`,6,12),laptop:E(46,30,`<path d="M8 2h30c1.1 0 2 .9 2 2v19H6V4c0-1.1.9-2 2-2z" fill="#dcd9e8" stroke="${D}" stroke-width="1.5"/><rect x="9" y="5" width="28" height="15" rx="1.5" fill="#1d1a2e"/><path d="M12 9h10M12 12h16M14 15h8" stroke="#8ccfff" stroke-width="1.4" stroke-linecap="round"/><path d="M1.5 23h43l-2 4.5c-.3.6-.9 1-1.6 1H5.1c-.7 0-1.3-.4-1.6-1z" fill="#c9c5d8" stroke="${D}" stroke-width="1.5" stroke-linejoin="round"/>`,23,28),bell:`<div data-bell style="position:absolute;left:0;top:0;transform-origin:0 -26px">${E(26,30,`<path d="M13 3.5c-5 0-8.5 4-8.5 9.5v5.5L1.8 23h22.4l-2.7-4.5V13c0-5.5-3.5-9.5-8.5-9.5z" fill="#ffb823" stroke="${D}" stroke-width="1.6" stroke-linejoin="round"/><circle cx="13" cy="25.8" r="2.8" fill="#e0841a" stroke="${D}" stroke-width="1.4"/><path d="M8.5 11c.5-2.5 2-4 4-4.5" stroke="#fff" stroke-opacity=".8" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M13 3.5V1" stroke="${D}" stroke-width="2" stroke-linecap="round"/>`,13,4)}</div>`,heart:E(22,20,`<path d="M11 18.5C3.5 12.5 1.5 9.3 1.5 6 1.5 3.4 3.5 1.5 6 1.5c2.2 0 3.8 1.3 5 3.1 1.2-1.8 2.8-3.1 5-3.1 2.5 0 4.5 1.9 4.5 4.5 0 3.3-2 6.5-9.5 12.5z" fill="#ee7099" stroke="${D}" stroke-width="1.5"/>`),sign:`<svg data-stick width="1" height="1" style="position:absolute;left:0;top:0;overflow:visible"><line x1="0" y1="0" x2="0" y2="-22" stroke="${D}" stroke-width="5" stroke-linecap="round"/><line x1="0" y1="0" x2="0" y2="-22" stroke="#c9824a" stroke-width="2.6" stroke-linecap="round"/></svg>
    <div data-board style="position:absolute;left:0;top:0;transform:translate(-50%,-100%)"><div data-sign style="min-width:46px;padding:6px 8px;border-radius:9px;background:#fffdf7;border:1.6px solid ${D};font:700 15px 'Bagel Fat One',ui-rounded,sans-serif;color:${D};text-align:center;box-shadow:0 3px 0 rgba(42,36,64,.18)"></div></div>`},O=`
uniform vec4 uQuad;
out vec2 vUv;
void main() {
  vec2 ndc = mix(uQuad.xy, uQuad.zw, position.xy * 0.5 + 0.5);
  vUv = ndc * 0.5 + 0.5;
  gl_Position = vec4(ndc, 0.0, 1.0);
}
`,ce=`
precision highp float;
in vec2 vUv;
out vec4 outColor;

#define NC 20
#define TAIL0 13
#define TAILN 7

uniform vec2 uRes;        // canvas size in device px
uniform vec2 uAnchor;     // feet position in device px (from top-left)
uniform float uPxPerUnit; // device px per cat unit
uniform mat3 uView;       // camera space → cat space
uniform vec3 uLight;      // key light dir, cat space
uniform vec3 uFill;       // fill light dir, cat space
uniform vec3 uCamDir;     // direction toward the camera, cat space

uniform vec4 uA[NC];
uniform vec4 uB[NC];
uniform vec4 uPaw[4];
uniform vec4 uHead;       // center, unused
uniform vec3 uHeadR;      // radii along forward / up / side
uniform vec3 uHeadF;
uniform vec3 uHeadU;
uniform vec3 uHeadS;
uniform vec4 uEarA[2];
uniform vec4 uEarB[2];
uniform vec3 uEarN[2];    // ear front normal (flattening axis)
uniform vec4 uCheek[2];
uniform vec4 uNose;
uniform vec4 uEye[2];
uniform vec4 uLid;        // upper L, upper R, lower L, lower R (in eye radii; 1 = fully open)
uniform vec3 uGaze[2];    // pupil direction per eye, cat space
uniform float uPupil;     // 0 slit … 1 round & dilated
uniform vec4 uMouth;      // cavity sphere (r = 0 → closed)
uniform float uSmile;
uniform float uBlush;
uniform vec4 uBBody;
uniform vec4 uBHead;
uniform vec4 uBTail;
uniform vec4 uBAll;
uniform float uClipY;     // discard below this y (peek); -1e4 = off
uniform vec4 uLap;        // laptop base center xyz, w = on
uniform mat3 uLapRot;     // cat space → laptop local rotation
uniform vec4 uLapBound;   // bounding sphere (cat space)
uniform float uLidA;      // lid tilt (rad, back from vertical; ≈ -π/2 = closed)
uniform vec3 uScreenC;    // screen center (glow source)
uniform float uScreenB;   // screen brightness
uniform vec4 uHatA[6];
uniform vec4 uHatB[6];
uniform vec4 uHatPom;
uniform float uHatOn;
uniform float uHatKind;   // 0 nightcap, 1 party, 2 headphones
uniform vec4 uBHat;
uniform vec3 cHat;
uniform float uShadow;
// worn accessories, slots x = head, y = eyes, z = neck (kind 0 = none; see ACC_KIND in rig3d.ts)
uniform vec3 uAccKind;
uniform vec3 uAccK;       // pop scale 0..1 per slot
uniform vec4 uAA[18];     // round cones, 6 per slot
uniform vec4 uAB[18];
uniform vec4 uAT[6];      // tori, 2 per slot: center, major radius
uniform vec4 uATN[6];     //                   axis, minor radius
uniform vec3 uAFw[3];     // a slot's "front" direction (neck: front of the neck)
uniform vec4 uABound[3];

// coat
uniform vec3 cBase;
uniform vec3 cShade;
uniform vec3 cLight;
uniform vec3 cPaw;
uniform vec3 cInnerEar;
uniform vec3 cNose;
uniform vec4 cStripe;     // rgb, a = on
uniform vec4 cTailTip;    // rgb, a = on
uniform vec4 cPatchA;     // rgb, a = on (calico orange)
uniform vec4 cPatchB;     // rgb, a = on (calico dark)
uniform vec3 cIris0;
uniform vec3 cIris1;
uniform vec3 cIris2;
uniform float uMuzzleLight;
uniform float uChestLight;
uniform vec4 cPoints;     // rgb, a = on (Siamese mask, ears, tail, socks)
uniform vec4 cSocks;      // rgb, a = on (lower legs + paws)
uniform float uBicolor;   // 1 = white underside
uniform vec3 cIrisB0;     // odd eyes: eye 1's iris
uniform vec3 cIrisB1;
uniform vec3 cIrisB2;

// ───────────────────────── primitives ─────────────────────────

float smin(float a, float b, float k) {
  float h = max(k - abs(a - b), 0.0) / k;
  return min(a, b) - h * h * k * 0.25;
}
float smax(float a, float b, float k) { return -smin(-a, -b, k); }

// iq's round cone between a (radius r1) and b (radius r2)
float sdRoundCone(vec3 p, vec3 a, vec3 b, float r1, float r2) {
  vec3 ba = b - a;
  float l2 = dot(ba, ba);
  if (l2 < 0.01) return length(p - a) - max(r1, r2);
  float rr = r1 - r2;
  float a2 = l2 - rr * rr;
  float il2 = 1.0 / max(l2, 1e-4);
  vec3 pa = p - a;
  float y = dot(pa, ba);
  float z = y - l2;
  vec3 xv = pa * l2 - ba * y;
  float x2 = dot(xv, xv);
  float y2 = y * y * l2;
  float z2 = z * z * l2;
  float k = sign(rr) * rr * rr * x2;
  if (sign(z) * a2 * z2 > k) return sqrt(x2 + z2) * il2 - r2;
  if (sign(y) * a2 * y2 < k) return sqrt(x2 + y2) * il2 - r1;
  return (sqrt(x2 * a2 * il2) + y * rr) * il2 - r1;
}

float cone(vec3 p, int i) { return sdRoundCone(p, uA[i].xyz, uB[i].xyz, uA[i].w, uB[i].w); }

float sdEllipsoid(vec3 p, vec3 r) {
  float k0 = length(p / r);
  float k1 = length(p / (r * r));
  return k0 * (k0 - 1.0) / max(k1, 1e-5);
}

float bound(vec3 p, vec4 s) { return length(p - s.xyz) - s.w; }

float sdRoundBox(vec3 p, vec3 b, float r) {
  vec3 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - r;
}

// Laptop in cat space: base slab + lid hinged at the far edge, screen facing the cat.
// Returns distance; part: 0 base, 1 lid back, 2 screen, 3 keyboard
float laptop(vec3 p, out float part) {
  p = uLapRot * (p - uLap.xyz);   // laptop-local
  vec3 c = vec3(0.0);
  float base = sdRoundBox(p - (c + vec3(0.0, 2.2, 0.0)), vec3(19.0, 2.1, 21.0), 1.8);
  vec3 h = p - (c + vec3(19.0, 4.2, 0.0));
  float ca = cos(uLidA), sa = sin(uLidA);
  vec3 q = vec3(ca * h.x - sa * h.y, sa * h.x + ca * h.y, h.z); // rotate into lid frame
  float lid = sdRoundBox(q - vec3(0.0, 21.0, 0.0), vec3(1.1, 21.0, 21.0), 1.4);
  part = 0.0;
  if (lid < base) {
    part = (q.x < -0.6 && abs(q.z) < 19.0 && q.y > 2.4 && q.y < 39.6) ? 2.0 : 1.0;
    return lid;
  }
  vec3 b = p - c;
  if (b.y > 3.6 && b.x > -16.5 && b.x < 14.0 && abs(b.z) < 19.0) part = 3.0;
  return base;
}

float hatCone(vec3 p, int i) { return sdRoundCone(p, uHatA[i].xyz, uHatB[i].xyz, uHatA[i].w, uHatB[i].w); }

float nightcap(vec3 p, out float white) {
  if (uHatKind > 1.5) {
    // headphones: slim band over the head (between/in front of the ears) + two cushioned cups
    float band = smin(smin(hatCone(p, 2), hatCone(p, 3), 1.5), smin(hatCone(p, 4), hatCone(p, 5), 1.5), 1.5);
    float cups = min(hatCone(p, 0), hatCone(p, 1));
    white = cups < band ? 1.0 : 0.0;
    return smin(band, cups, 1.2);
  }
  float h = sdRoundCone(p, uHatA[1].xyz, uHatB[1].xyz, uHatA[1].w, uHatB[1].w);
  if (uHatKind > 0.5) {
    float pom = length(p - uHatPom.xyz) - uHatPom.w;
    white = pom < h ? 1.0 : 0.0;
    return smin(h, pom, 0.8);
  }
  h = smin(h, sdRoundCone(p, uHatA[2].xyz, uHatB[2].xyz, uHatA[2].w, uHatB[2].w), 3.0);
  h = smin(h, sdRoundCone(p, uHatA[3].xyz, uHatB[3].xyz, uHatA[3].w, uHatB[3].w), 2.0);
  float brim = sdRoundCone(p, uHatA[0].xyz, uHatB[0].xyz, uHatA[0].w, uHatB[0].w);
  float pom = length(p - uHatPom.xyz) - uHatPom.w;
  float w = min(brim, pom);
  white = w < h ? 1.0 : 0.0;
  return min(h, w);
}

// Ears are round cones squashed along their front normal so they read as thin, flat ears.
float ear(vec3 p, int i) {
  vec3 n = uEarN[i];
  vec3 c = uEarA[i].xyz;
  vec3 q = p - c;
  float t = dot(q, n);
  q += n * t * 0.8; // thinner along n (space stretched → scale the distance back down)
  return sdRoundCone(c + q, uEarA[i].xyz, uEarB[i].xyz, uEarA[i].w, uEarB[i].w) * 0.55;
}

// ── worn accessories: slot 0 head, 1 eyes, 2 neck; 6 round cones + 2 tori per slot
float aCone(vec3 p, int s, int i) { int j = s * 6 + i; return sdRoundCone(p, uAA[j].xyz, uAB[j].xyz, uAA[j].w, uAB[j].w); }
float aTorus(vec3 p, int s, int i) {
  int j = s * 2 + i;
  vec3 q = p - uAT[j].xyz;
  vec3 n = uATN[j].xyz;
  float h = dot(q, n);
  return length(vec2(length(q - n * h) - uAT[j].w, h)) - uATN[j].w;
}
float dot2(vec2 v) { return dot(v, v); }
// iq's 2D heart (point at the origin, lobes up to y ≈ 1)
float sdHeart2(vec2 p) {
  p.x = abs(p.x);
  if (p.y + p.x > 1.0) return sqrt(dot2(p - vec2(0.25, 0.75))) - 0.35355;
  return sqrt(min(dot2(p - vec2(0.0, 1.0)), dot2(p - 0.5 * max(p.x + p.y, 0.0)))) * sign(p.x - p.y);
}
// A flat flower of N rounded petals around c, facing outw; ref picks the petal phase.
float sdFlower(vec3 p, vec3 c, vec3 outw, vec3 ref, float r, float thick, float N) {
  vec3 fq = p - c;
  float h = dot(fq, outw);
  vec3 pl = fq - outw * h;
  float ang = atan(dot(pl, cross(outw, ref)), dot(pl, ref));
  float rr = r * (0.72 + 0.28 * cos(ang * N));
  return length(vec2(max(length(pl) - rr, 0.0), h)) - thick;
}
// head frame coordinates (forward, up, side)
vec3 headLocal(vec3 p) { vec3 q = p - uHead.xyz; return vec3(dot(q, uHeadF), dot(q, uHeadU), dot(q, uHeadS)); }
// a flat round brim in the head frame (straw / witch hat), centre height y, radius r
float brimDisc(vec3 hl, float y, float r, float k) {
  vec3 d = hl - vec3(-1.5, y, 0.0);
  d.y += d.x * 0.08;                                   // tipped back a touch
  return length(vec2(max(length(d.xz) - (r - 1.2) * k, 0.0), d.y)) - 1.3 * k;
}

// Head slot. part: 0 main colour, 1 second colour, 2 detail
float headAcc(vec3 p, out float part) {
  part = 0.0;
  float kind = uAccKind.x;
  float k = max(uAccK.x, 0.05);
  if (kind < 1.5) {
    // bow: two lobes + knot + ribbon ends
    float b = smin(aCone(p, 0, 0), aCone(p, 0, 1), 1.0);
    b = smin(b, aCone(p, 0, 2), 0.8);
    return min(b, min(aCone(p, 0, 3), aCone(p, 0, 4)));
  }
  if (kind < 2.5) {
    // flower crown: vine ring + 9 flowers spaced around it (polar repetition in the ring frame)
    float vine = aTorus(p, 0, 0);
    vec3 n = uATN[0].xyz;
    vec3 q = p - uAT[0].xyz;
    vec3 ref = normalize(uHeadF - n * dot(uHeadF, n));
    vec3 ref2 = cross(n, ref);
    float a = atan(dot(q, ref2), dot(q, ref));
    float ac = floor(a / (6.2831853 / 9.0) + 0.5) * 6.2831853 / 9.0;
    vec3 dir = ref * cos(ac) + ref2 * sin(ac);
    vec3 c = uAT[0].xyz + dir * (uAT[0].w + 1.2 * k) + n * 0.8 * k;
    float fl = sdFlower(p, c, normalize(dir + n * 0.9), n, 4.6 * k, 1.5 * k, 5.0);
    if (fl < vine) part = 2.0;
    return min(vine, fl);
  }
  vec3 hl = headLocal(p);
  if (kind < 3.5) {
    // strawberry beanie: a knit dome over the crown with a rolled brim, leafy stalk on top
    vec3 dc = hl - vec3(-1.5, 2.0, 0.0);
    float dome = sdEllipsoid(dc, vec3(27.8, 27.0, 32.2) * k);
    dome = smax(dome, 9.5 - dc.y, 1.5);
    vec3 bq = dc - vec3(0.0, 10.2, 0.0);
    float brim = length(vec2(length(bq.xz / vec2(24.8, 28.8)) * 28.0 - 28.0 * k, bq.y)) - 3.0 * k;
    float hat = smin(dome, brim, 1.5);
    if (brim < dome) part = 1.0;
    float stalk = min(min(aCone(p, 0, 0), aCone(p, 0, 1)), min(min(aCone(p, 0, 2), aCone(p, 0, 3)), aCone(p, 0, 4)));
    if (stalk < hat) { part = 2.0; return stalk; }
    return hat;
  }
  if (kind < 4.5) {
    // Santa hat: soft red cone + white trim + pom-pom
    float cap = smin(smin(aCone(p, 0, 0), aCone(p, 0, 1), 3.0), aCone(p, 0, 2), 2.0);
    float white = min(aTorus(p, 0, 0), aCone(p, 0, 3));
    if (white < cap) part = 1.0;
    return min(cap, white);
  }
  if (kind < 5.5) {
    // heart headband: the band over the crown (its lower half is inside her head anyway, cut it)
    vec3 c = uAT[0].xyz;
    float band = smax(aTorus(p, 0, 0), -dot(p - c, uHeadU) - 2.0, 1.0);
    float stalks = min(aCone(p, 0, 0), aCone(p, 0, 2));
    part = 1.0;
    float d = min(band, stalks);
    for (int i = 1; i <= 3; i += 2) {
      vec3 hc = (uAA[i].xyz + uAB[i].xyz) * 0.5;
      float heart = smin(aCone(p, 0, i), sdRoundCone(p, hc - uHeadU * 1.0 * k, hc - uHeadU * 7.8 * k, 4.0 * k, 0.9 * k), 2.0);
      if (heart < d) { d = heart; part = 0.0; }
    }
    return d;
  }
  if (kind < 6.5) {
    // daisy behind the ear: white petals, a yellow middle, a leaf
    vec3 c = uAT[0].xyz;
    vec3 n = uATN[0].xyz;
    vec3 ref = normalize(uHeadU - n * dot(uHeadU, n));
    float petals = sdFlower(p, c, n, ref, uAT[0].w, uATN[0].w, 10.0);
    float mid = length(p - c - n * 0.9 * k) - 2.6 * k;
    float leaf = aCone(p, 0, 0);
    float d = petals;
    if (mid < d) { d = mid; part = 2.0; }
    if (leaf < d) { d = leaf; part = 1.0; }
    return d;
  }
  if (kind < 7.5) {
    // straw sun hat: a wide brim, a soft crown, a pink ribbon
    float brim = brimDisc(hl, 15.0, 40.0, k);
    vec3 cq = hl - vec3(-1.5, 16.0, 0.0);
    float crown = smax(sdEllipsoid(cq, vec3(21.0, 15.0, 24.5) * k), -cq.y, 1.0);
    float ribbon = length(vec2(length(cq.xz / vec2(21.0, 24.5)) * 22.5 - 22.8 * k, cq.y - 2.8 * k)) - 1.9 * k;
    float d = smin(brim, crown, 2.0);
    if (ribbon < d) { part = 1.0; return ribbon; }
    return d;
  }
  // witch hat: brim + crooked cone + orange band
  float brim = brimDisc(hl, 17.0, 31.0, k);
  float cone2 = smin(aCone(p, 0, 0), aCone(p, 0, 1), 2.0);
  float band = aTorus(p, 0, 0);
  float d = smin(brim, cone2, 2.0);
  if (band < d) { part = 1.0; return band; }
  return d;
}

// Eyes slot: round rims (glasses) or heart lenses (sunglasses), bridge + arms.
float eyesAcc(vec3 p, out float part) {
  part = 0.0;
  float bars = min(min(aCone(p, 1, 0), aCone(p, 1, 1)), min(aCone(p, 1, 2), aCone(p, 1, 3)));
  if (uAccKind.y < 1.5) return min(min(aTorus(p, 1, 0), aTorus(p, 1, 1)), bars);
  part = 1.0;
  float d = bars;
  for (int i = 0; i < 2; i++) {
    int j = 2 + i;
    vec3 n = uATN[j].xyz;
    vec3 up = normalize(uHeadU - n * dot(uHeadU, n));
    vec3 side = cross(n, up);
    vec3 q = p - uAT[j].xyz;
    float s = uAT[j].w;                                   // lens size
    vec2 uv = vec2(dot(q, side), dot(q, up)) / s;
    float h2 = sdHeart2(vec2(uv.x * 0.92, uv.y + 0.55)) * s;
    float lens = length(vec2(max(h2, 0.0), dot(q, n))) - uATN[j].w;
    if (lens < d) { d = lens; part = h2 > -1.6 ? 1.0 : 0.0; }
  }
  return d;
}

// Neck slot: ring + bell (collar) / hanging end (scarves) / kerchief point (bandana).
float neckAcc(vec3 p, out float part) {
  part = 0.0;
  float ring = aTorus(p, 2, 0);
  float kind = uAccKind.z;
  if (kind < 1.5) {
    float bell = aCone(p, 2, 0);
    if (bell < ring) part = 2.0;
    return min(ring, bell);
  }
  if (kind < 3.5) return smin(ring, smin(aCone(p, 2, 0), aCone(p, 2, 1), 1.5), 2.5);
  // bandana: the point is a round cone flattened against her chest
  vec3 fw = uAFw[2];
  vec3 a = uAA[12].xyz;
  vec3 q = p - a;
  q += fw * dot(q, fw) * 1.6;
  float kerchief = sdRoundCone(a + q, uAA[12].xyz, uAB[12].xyz, uAA[12].w, uAB[12].w) * 0.45;
  return smin(ring, kerchief, 2.0);
}

// ───────────────────────── scene ─────────────────────────

// Returns distance; mat: 0 fur, 1 eye, 2 nose, 3 mouth
float mapM(vec3 p, out float mat) {
  mat = 0.0;
  float d = 1e5;

  // body + legs (far away: the bound itself is a safe distance)
  float bb = bound(p, uBBody);
  if (bb > 10.0) d = bb;
  else {
    float b = smin(cone(p, 0), cone(p, 1), 14.0);
    b = smin(b, cone(p, 2), 9.0);
    // front legs
    for (int i = 3; i <= 6; i++) b = smin(b, cone(p, i), i == 3 || i == 5 ? 6.0 : 3.0);
    // hind legs (thigh blends wide into the rump = haunch)
    for (int i = 7; i <= 12; i++) {
      int j = i - 7;
      float k = (j == 0 || j == 3) ? 9.0 : 3.0;
      b = smin(b, cone(p, i), k);
    }
    for (int i = 0; i < 4; i++) b = smin(b, length(p - uPaw[i].xyz) - uPaw[i].w, 2.2);
    d = b;
  }

  // head
  float bh = bound(p, uBHead);
  if (bh > 8.0) d = min(d, bh);
  else {
    vec3 q = p - uHead.xyz;
    vec3 hl = vec3(dot(q, uHeadF), dot(q, uHeadU), dot(q, uHeadS));
    float h = sdEllipsoid(hl, uHeadR);
    h = smin(h, length(p - uCheek[0].xyz) - uCheek[0].w, 5.0);
    h = smin(h, length(p - uCheek[1].xyz) - uCheek[1].w, 5.0);
    h = smin(h, ear(p, 0), 4.0);
    h = smin(h, ear(p, 1), 4.0);
    // eyelids: fur shells around the eyes, cut by the lid planes
    for (int i = 0; i < 2; i++) {
      vec3 e = p - uEye[i].xyz;
      float r = uEye[i].w;
      float shell = length(e) - (r + 0.7);
      float up = dot(e, uHeadU) + dot(e, uHeadF) * 0.15;
      float upper = max(shell, r * (i == 0 ? uLid.x : uLid.y) - up);
      float lower = max(shell, up + r * (i == 0 ? uLid.z : uLid.w));
      h = min(h, min(upper, lower));
    }
    // mouth cavity
    if (uMouth.w > 0.3) h = smax(h, -(length(p - uMouth.xyz) - uMouth.w), 2.0);
    // neck join
    d = smin(d, h, 8.0);

    float eyes = min(length(p - uEye[0].xyz) - uEye[0].w, length(p - uEye[1].xyz) - uEye[1].w);
    if (eyes < d) { d = eyes; mat = 1.0; }
    float nose = length(p - uNose.xyz) - uNose.w;
    if (nose < d) { d = nose; mat = 2.0; }
    if (uMouth.w > 0.3) {
      float inside = length(p - uMouth.xyz) - uMouth.w;
      if (mat == 0.0 && inside > -0.8 && inside < 0.6) mat = 3.0;
    }
  }

  // tail
  float bt = bound(p, uBTail);
  if (bt > 8.0) d = min(d, bt);
  else {
    float t = cone(p, TAIL0);
    for (int i = TAIL0 + 1; i < TAIL0 + TAILN; i++) t = smin(t, cone(p, i), 2.5);
    if (t < d + 6.0 && mat == 0.0) d = smin(d, t, 6.0);
    else d = min(d, t);
  }

  // nightcap
  if (uHatOn > 0.5) {
    float bc = bound(p, uBHat);
    if (bc > 6.0) d = min(d, bc);
    else {
      float white;
      float hc = nightcap(p, white);
      if (hc < d) { d = hc; mat = white > 0.5 ? 7.0 : 6.0; }
    }
  }

  // worn accessories (head, eyes, neck), each behind its own bound
  for (int s = 0; s < 3; s++) {
    float kind = s == 0 ? uAccKind.x : s == 1 ? uAccKind.y : uAccKind.z;
    if (kind < 0.5) continue;
    float ba = bound(p, uABound[s]);
    if (ba > 6.0) { d = min(d, ba); continue; }
    float part;
    float ad = s == 0 ? headAcc(p, part) : s == 1 ? eyesAcc(p, part) : neckAcc(p, part);
    if (ad < d) { d = ad; mat = 10.0 + float(s) * 3.0 + part; }
  }

  if (p.y < uClipY) d = max(d, uClipY - p.y);

  // laptop (never clipped)
  if (uLap.w > 0.5) {
    float bl = length(p - uLapBound.xyz) - uLapBound.w;
    if (bl > 6.0) d = min(d, bl);
    else {
      float part;
      float lp = laptop(p, part);
      if (lp < d) { d = lp; mat = 4.0 + part * 0.1; }
    }
  }
  return d;
}

float map(vec3 p) { float m; return mapM(p, m); }

vec3 calcNormal(vec3 p) {
  const vec2 k = vec2(1.0, -1.0);
  const float h = 0.08;
  return normalize(
    k.xyy * map(p + k.xyy * h) + k.yyx * map(p + k.yyx * h) +
    k.yxy * map(p + k.yxy * h) + k.xxx * map(p + k.xxx * h));
}

// 2-tap AO: enough for the soft creases where legs/neck meet the body.
float calcAO(vec3 p, vec3 n) {
  float d1 = map(p + n * 4.0);
  float d2 = map(p + n * 10.0);
  float occ = (4.0 - d1) + (10.0 - d2) * 0.6;
  return clamp(1.0 - occ * 0.035, 0.0, 1.0);
}

// ───────────────────────── coat ─────────────────────────

float hash3(vec3 p) { return fract(sin(dot(p, vec3(17.1, 113.7, 51.3))) * 43758.5453); }
float noise3(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash3(i), hash3(i + vec3(1,0,0)), f.x), mix(hash3(i + vec3(0,1,0)), hash3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash3(i + vec3(0,0,1)), hash3(i + vec3(1,0,1)), f.x), mix(hash3(i + vec3(0,1,1)), hash3(i + vec3(1,1,1)), f.x), f.y), f.z);
}

// Parameter along a cone (0 at a, 1 at b) and distance from its axis.
vec2 coneParam(vec3 p, int i) {
  vec3 a = uA[i].xyz, b = uB[i].xyz;
  vec3 ba = b - a;
  float t = clamp(dot(p - a, ba) / max(dot(ba, ba), 1e-4), 0.0, 1.0);
  return vec2(t, length(p - (a + ba * t)));
}

vec3 furColor(vec3 p, vec3 n) {
  vec3 col = cBase;
  float lightMask = 0.0;

  // head-local coordinates
  vec3 q = p - uHead.xyz;
  vec3 hl = vec3(dot(q, uHeadF), dot(q, uHeadU), dot(q, uHeadS));
  float onHead = step(sdEllipsoid(hl, uHeadR * 1.12), 0.0);

  // muzzle
  float muz = min(length(p - uCheek[0].xyz) - uCheek[0].w, length(p - uCheek[1].xyz) - uCheek[1].w);
  float nearEye = min(length(p - uEye[0].xyz) - uEye[0].w, length(p - uEye[1].xyz) - uEye[1].w);
  lightMask = max(lightMask, (1.0 - smoothstep(-0.5, 2.5, muz)) * smoothstep(1.2, 3.5, nearEye) * uMuzzleLight);

  // chest bib: front-low part of the chest sphere
  vec3 chest = uA[0].xyz;
  vec3 fwd = normalize(uA[0].xyz - uB[0].xyz);
  vec3 cq = p - chest;
  float bib = smoothstep(0.35, 0.8, dot(normalize(cq + vec3(0.0, 6.0, 0.0)), normalize(fwd + vec3(0.0, -0.35, 0.0)))) * (1.0 - onHead);
  bib *= 0.6 + 0.4 * noise3(p * 0.35);
  lightMask = max(lightMask, bib * 0.9 * uChestLight);

  // paws (+ socks: the lower legs in the sock colour, soft edge)
  for (int i = 0; i < 4; i++) {
    float pd = length(p - uPaw[i].xyz) - uPaw[i].w;
    float m = 1.0 - smoothstep(0.0, 3.0, pd);
    if (cSocks.a > 0.5) {
      float reach = i < 2 ? 13.0 : 4.5;  // front socks to the wrist, hind ones just the feet
      col = mix(col, cSocks.rgb, (1.0 - smoothstep(reach - 6.0, reach, pd)) * (1.0 - onHead) * (1.0 - smoothstep(10.0, 18.0, p.y - uPaw[i].y)));
    }
    col = mix(col, cPaw, m);
  }
  // bicolour: white underside (belly, chest, inner legs)
  if (uBicolor > 0.5) lightMask = max(lightMask, smoothstep(-0.05, -0.55, n.y) * (1.0 - onHead) * (0.75 + 0.25 * noise3(p * 0.3)));

  // tabby stripes: across the back, rings on the tail, forehead marks
  if (cStripe.a > 0.5) {
    vec2 sp = coneParam(p, 0);
    float top = smoothstep(-0.1, 0.5, n.y);
    float s = smoothstep(0.62, 0.78, sin(sp.x * 24.0 + noise3(p * 0.12) * 1.8)) * top * (1.0 - onHead) * 0.9;
    for (int i = TAIL0; i < TAIL0 + TAILN; i++) {
      vec2 tp = coneParam(p, i);
      if (tp.y < uA[i].w + 1.5) s = max(s, smoothstep(0.7, 0.92, sin((float(i - TAIL0) + tp.x) * 3.3)) * 0.7);
    }
    float fore = smoothstep(0.55, 0.8, sin(hl.z * 0.55) * 0.5 + 0.5) * smoothstep(0.35, 0.75, hl.y / uHeadR.y) * smoothstep(-0.5, 0.2, hl.x / uHeadR.x) * onHead;
    float cheekLines = smoothstep(0.6, 0.9, sin(hl.y * 0.75 + 1.4)) * smoothstep(0.75, 0.95, abs(hl.z) / uHeadR.z) * onHead;
    s = max(s, max(fore, cheekLines) * 0.6);
    col = mix(col, cStripe.rgb * 0.88, s * 0.92 * (1.0 - lightMask));
  }

  // calico patches
  if (cPatchA.a > 0.5) {
    float nA = noise3(p * 0.055 + 3.1);
    float nB = noise3(p * 0.06 + 11.7);
    col = mix(col, cPatchA.rgb, smoothstep(0.58, 0.64, nA));
    col = mix(col, cPatchB.rgb, smoothstep(0.62, 0.68, nB));
  }

  // tail tip
  if (cTailTip.a > 0.5) {
    int last = TAIL0 + TAILN - 1;
    float tip = 1.0 - smoothstep(-1.0, 4.0, cone(p, last));
    col = mix(col, cTailTip.rgb, tip);
  }

  col = mix(col, cLight, lightMask);
  // Siamese points: face mask, ears and a tail that darkens toward the tip (soft falloff).
  // Applied after the lid / belly shading below, so the mask stays one clean gradient.
  float pm = 0.0;
  if (cPoints.a > 0.5) {
    vec3 mc = mix(uNose.xyz, (uEye[0].xyz + uEye[1].xyz) * 0.5, 0.4) - uHeadU * 1.5;
    float mask = 1.0 - smoothstep(7.0, 24.0, length(p - mc));
    mask = mask * mask * (3.0 - 2.0 * mask) * step(sdEllipsoid(hl, uHeadR * 1.35), 0.0);
    float ears = 0.0;
    for (int i = 0; i < 2; i++) {
      vec3 a = uEarA[i].xyz, ba = uEarB[i].xyz - a;
      float t = clamp(dot(p - a, ba) / dot(ba, ba), 0.0, 1.0);
      float rad = mix(uEarA[i].w, uEarB[i].w, t);
      ears = max(ears, (1.0 - smoothstep(rad + 1.0, rad + 4.0, length(p - (a + ba * t)))) * smoothstep(0.0, 0.25, t));
    }
    float tail = 0.0;
    for (int i = TAIL0; i < TAIL0 + TAILN; i++) {
      vec2 tp = coneParam(p, i);
      float w = smoothstep(0.0, 3.0, float(i - TAIL0) + tp.x);
      if (tp.y < uA[i].w + 2.0) tail = max(tail, w);
    }
    pm = max(max(mask, ears * 0.92), tail);
  }
  // eyelids a touch darker so closed eyes read as lids, not patches
  float lidZone = 1.0 - smoothstep(0.4, 1.6, min(length(p - uEye[0].xyz) - uEye[0].w, length(p - uEye[1].xyz) - uEye[1].w));
  col = mix(col, mix(cBase, cShade, 0.5), lidZone * 0.8);
  for (int i = 0; i < 2; i++) {
    vec3 e = p - uEye[i].xyz;
    float rim = length(e) - uEye[i].w;
    float above = smoothstep(-0.2, 0.5, dot(normalize(e), uHeadU));
    col *= 1.0 - 0.32 * (1.0 - smoothstep(0.0, 2.2, rim)) * above * onHead;
  }

  // belly shading: darker underneath
  col = mix(col, cShade, smoothstep(0.1, -0.9, n.y) * 0.45);
  if (pm > 0.0) col = mix(col, cPoints.rgb * (1.0 - 0.18 * smoothstep(0.1, -0.9, n.y)), pm);

  // inner ears
  for (int i = 0; i < 2; i++) {
    vec3 a = uEarA[i].xyz, b = uEarB[i].xyz;
    vec3 ba = b - a;
    float t = clamp(dot(p - a, ba) / dot(ba, ba), 0.0, 1.0);
    vec3 axisP = a + ba * t;
    float front = dot(p - axisP, uEarN[i]);
    float rad = mix(uEarA[i].w, uEarB[i].w, t);
    float lateral = length((p - axisP) - uEarN[i] * front);
    float inner = step(0.0, front) * (1.0 - smoothstep(rad * 0.45, rad * 0.75, lateral)) * smoothstep(0.08, 0.2, t) * (1.0 - smoothstep(0.82, 0.95, t));
    if (length(p - axisP) < rad * 1.4 + 2.0) col = mix(col, cInnerEar, inner);
  }

  // mouth line "ω" and blush on the face
  if (onHead > 0.5) {
    float fx = hl.x / uHeadR.x;
    if (fx > 0.55) {
      float y0 = -uHeadR.y * 0.42;
      float sx = abs(hl.z);
      float curve = y0 - (sx - 3.0) * (sx - 3.0) * 0.12 * uSmile + 1.2 * uSmile;
      float line = (1.0 - smoothstep(0.35, 0.9, abs(hl.y - curve))) * (1.0 - smoothstep(5.5, 7.0, sx));
      float philtrum = (1.0 - smoothstep(0.3, 0.8, abs(hl.z))) * step(y0 + 1.0, hl.y) * step(hl.y, y0 + 4.5);
      col = mix(col, vec3(0.42, 0.24, 0.22), max(line, philtrum) * 0.5 * step(uMouth.w, 0.3));
    }
    float bl = (1.0 - smoothstep(2.0, 6.0, length(vec2(hl.y + uHeadR.y * 0.18, abs(hl.z) - uHeadR.z * 0.62)))) * step(0.3, fx);
    col = mix(col, vec3(0.98, 0.55, 0.62), bl * 0.45 * uBlush * (1.0 - pm));
  }
  return col;
}

vec3 eyeColor(vec3 p, vec3 n, int i) {
  vec3 i0 = i == 0 ? cIris0 : cIrisB0;
  vec3 i1 = i == 0 ? cIris1 : cIrisB1;
  vec3 i2 = i == 0 ? cIris2 : cIrisB2;
  vec3 g = normalize(uGaze[i]);
  float c = dot(n, g);
  vec3 up = normalize(uHeadU - g * dot(uHeadU, g));
  vec3 side = cross(g, up);
  vec3 d = n - g * c;               // offset from the gaze axis (|d| = sin of angle)
  float r = length(d);
  float ang = atan(dot(d, up), dot(d, side));
  // iris covers the visible eye; dark rim at the edge
  float iris = smoothstep(0.02, 0.08, c);
  float ir = clamp(r / 0.92, 0.0, 1.0);
  vec3 irisCol = mix(i0, i1, smoothstep(0.25, 0.7, ir));
  irisCol = mix(irisCol, i2, smoothstep(0.7, 0.95, ir));
  // radial fibres
  float fib = 0.5 + 0.5 * sin(ang * 26.0 + noise3(n * 9.0 + float(i)) * 4.0);
  irisCol *= 0.86 + 0.22 * fib * smoothstep(0.2, 0.6, ir);
  vec3 col = mix(vec3(0.16, 0.12, 0.16), irisCol, iris);
  col = mix(col, i2 * 0.32, smoothstep(0.8, 0.96, ir) * 0.85); // limbal ring
  // pupil: big + round when calm/happy, huge when playful, vertical slit only when annoyed
  float roundness = smoothstep(0.16, 0.34, uPupil);
  float pr = mix(0.5, 0.74, clamp((uPupil - 0.3) / 0.7, 0.0, 1.0));
  float pw = mix(0.1, pr, roundness);
  float ph = mix(0.62, pr, roundness);
  float pd = length(vec2(dot(d, side) / pw, dot(d, up) / ph));
  float pupil = 1.0 - smoothstep(0.9, 1.0, pd);
  col = mix(col, vec3(0.05, 0.04, 0.08), pupil);
  return col;
}

// ───────────────────────── main ─────────────────────────

vec2 sphereHit(vec3 ro, vec3 rd, vec4 s) {
  vec3 oc = ro - s.xyz;
  float b = dot(oc, rd);
  float c = dot(oc, oc) - s.w * s.w;
  float h = b * b - c;
  if (h < 0.0) return vec2(-1.0);
  h = sqrt(h);
  return vec2(-b - h, -b + h);
}

void main() {
  vec2 frag = vec2(vUv.x * uRes.x, (1.0 - vUv.y) * uRes.y);
  vec2 cam = vec2(frag.x - uAnchor.x, uAnchor.y - frag.y) / uPxPerUnit;
  vec3 ro = uView * vec3(cam, 600.0);
  vec3 rd = normalize(uView * vec3(0.0, 0.0, -1.0));
  float pix = 1.0 / uPxPerUnit;

  vec4 result = vec4(0.0);
  vec2 bb = sphereHit(ro, rd, uBAll);
  float t = max(bb.x, 0.0);
  float tEnd = bb.y;
  float minD = 1e5;
  float tMin = 0.0;
  bool hit = false;
  if (bb.y > 0.0) {
    for (int i = 0; i < 56; i++) {
      float d = map(ro + rd * t);
      if (d < minD) { minD = d; tMin = t; }
      if (d < 0.06) { hit = true; break; }
      t += max(d * 0.95, 0.12);
      if (t > tEnd) break;
    }
  }

  // plush fuzz: rays that just miss the fur still pick up a soft, noisy fringe
  float fuzz = 0.0;
  if (!hit) {
    vec3 pm = ro + rd * tMin;
    fuzz = (0.3 + 0.7 * noise3(pm * 1.1)) * 0.7;
  }
  float alpha = hit ? 1.0 : clamp(1.0 - (minD - fuzz) / (pix * 1.4 + fuzz), 0.0, 1.0);
  if (!hit) alpha *= alpha;
  if (alpha > 0.0) {
    vec3 p = ro + rd * (hit ? t : tMin);
    float mat;
    mapM(p, mat);
    vec3 n = calcNormal(p);
    // fur breakup: a cheap two-octave noise tilt of the shading normal on fur only, plus fine
    // "strand" streaks along the body, so the surface reads as soft fur instead of smooth vinyl
    vec3 nGeo = n;
    if (mat == 0.0) {
      vec3 q = p * 0.55;
      vec3 jit = vec3(noise3(q), noise3(q + 17.3), noise3(q + 41.7)) - 0.5;
      jit += (vec3(noise3(q * 3.1 + 5.0), noise3(q * 3.1 + 23.0), noise3(q * 3.1 + 61.0)) - 0.5) * 0.5;
      n = normalize(n + jit * 0.22);
    }
    vec3 v = -rd;
    vec3 alb;
    float gloss = 0.0;
    if (mat == 1.0) {
      int ei = length(p - uEye[0].xyz) < length(p - uEye[1].xyz) ? 0 : 1;
      alb = eyeColor(p, normalize(p - uEye[ei].xyz), ei);
      gloss = 1.0;
    } else if (mat == 2.0) {
      alb = cNose;
      gloss = 0.4;
    } else if (mat == 3.0) {
      alb = vec3(0.55, 0.16, 0.22);
      vec3 tongue = uMouth.xyz - uHeadU * uMouth.w * 0.55 + uHeadF * uMouth.w * 0.2;
      alb = mix(alb, vec3(0.95, 0.48, 0.55), 1.0 - smoothstep(uMouth.w * 0.35, uMouth.w * 0.6, length(p - tongue)));
    } else if (mat >= 3.95 && mat < 4.5) {
      float part = floor((mat - 4.0) * 10.0 + 0.5);
      alb = vec3(0.36, 0.33, 0.45);                    // space-plum aluminium
      gloss = 0.35;
      if (part == 1.0) {                                 // lid back: tiny sakura logo
        vec3 h = uLapRot * (p - uLap.xyz) - vec3(19.0, 4.2, 0.0);
        float ca = cos(uLidA), sa = sin(uLidA);
        vec3 q = vec3(ca * h.x - sa * h.y, sa * h.x + ca * h.y, h.z);
        float logo = 1.0 - smoothstep(3.0, 3.8, length(q.yz - vec2(21.0, 0.0)));
        alb = mix(alb, vec3(0.93, 0.44, 0.6), logo * step(0.0, q.x));
        gloss = 0.5;
      } else if (part == 2.0) {                          // screen: dark IDE with glowing code lines
        vec3 h = uLapRot * (p - uLap.xyz) - vec3(19.0, 4.2, 0.0);
        float ca = cos(uLidA), sa = sin(uLidA);
        vec3 q = vec3(ca * h.x - sa * h.y, sa * h.x + ca * h.y, h.z);
        float row = floor(q.y / 3.0);
        float inRow = step(0.45, fract(q.y / 3.0));
        float len = 8.0 + 22.0 * fract(sin(row * 12.9898) * 43758.5);
        float indent = mod(row, 3.0) * 3.0;
        float line = inRow * step(-17.0 + indent, -q.z) * step(-q.z, -17.0 + indent + len);
        vec3 code = mix(vec3(0.55, 0.82, 1.0), vec3(1.0, 0.78, 0.35), step(0.5, fract(row * 0.37)));
        alb = mix(vec3(0.1, 0.09, 0.17), code, line * 0.85);
        // premium glass: a soft vertical falloff, a thin bezel, and a diagonal reflection streak
        float vy = clamp(q.y / 40.0, 0.0, 1.0);
        alb *= 0.85 + 0.25 * vy;
        float bez = max(smoothstep(17.0, 18.6, abs(q.z)), max(1.0 - smoothstep(2.6, 4.0, q.y), smoothstep(37.8, 39.4, q.y)));
        alb = mix(alb, vec3(0.03, 0.03, 0.05), bez);
        float streak = smoothstep(0.0, 1.2, 1.2 - abs(q.y * 0.55 + q.z * 0.8 - 9.0)) * (1.0 - bez);
        alb += vec3(0.12, 0.13, 0.16) * streak;
        mat = 9.0;                                       // emissive: skip lighting below
      } else if (part == 3.0) {                          // keyboard keys
        vec3 b = uLapRot * (p - uLap.xyz);
        vec2 k = fract(vec2(b.x, b.z) / 3.8);
        float key = step(0.14, k.x) * step(k.x, 0.86) * step(0.14, k.y) * step(k.y, 0.86);
        alb = mix(vec3(0.3, 0.28, 0.38), vec3(0.14, 0.13, 0.2), key);
        // keys catch the screen's blue glow (stronger near the screen)
        alb += vec3(0.05, 0.08, 0.14) * smoothstep(-16.0, 14.0, b.x) * uScreenB;
      }
    } else if (mat == 6.0 && uHatKind > 1.5) {
      alb = vec3(0.24, 0.2, 0.33); // muted plum-ink band
      gloss = 0.45;
    } else if (mat == 7.0 && uHatKind > 1.5) {
      // amber shell, cream cushion ring facing the head
      vec3 c0 = (length(p - uHatA[0].xyz) < length(p - uHatA[1].xyz)) ? uHatA[0].xyz : uHatA[1].xyz;
      vec3 c1 = (length(p - uHatA[0].xyz) < length(p - uHatA[1].xyz)) ? uHatB[0].xyz : uHatB[1].xyz;
      vec3 ax = normalize(c1 - c0);
      float along = dot(p - c0, ax);
      alb = mix(vec3(0.99, 0.93, 0.82), vec3(1.0, 0.7, 0.16), smoothstep(-0.5, 1.5, along));
      float rim = smoothstep(0.6, 0.0, abs(length((p - c0) - ax * along) - uHatA[0].w * 0.62)) * step(1.0, along);
      alb = mix(alb, vec3(0.86, 0.5, 0.08), rim * 0.5);
      gloss = 0.35;
    } else if (mat == 6.0 && uHatKind > 0.5) {
      // party hat: amber with pink diagonal stripes and a few sparkles
      vec3 ax = normalize(uHatB[1].xyz - uHatA[1].xyz);
      float h = dot(p - uHatA[1].xyz, ax);
      float ang = atan(dot(p - uHatA[1].xyz, uHeadS), dot(p - uHatA[1].xyz, uHeadF));
      float pink = smoothstep(0.36, 0.41, abs(fract(h * 0.12 + ang * 0.16) - 0.5));
      alb = mix(vec3(1.0, 0.72, 0.14), vec3(0.93, 0.44, 0.6), pink);
      gloss = 0.3;
    } else if (mat == 7.0 && uHatKind > 0.5) {
      alb = vec3(1.0, 0.86, 0.9);
    } else if (mat == 6.0) {
      alb = cHat;
      // soft velvet stripes along the cap
      alb = mix(alb, alb * 1.18, smoothstep(0.6, 0.9, sin(dot(p - uHatA[1].xyz, uHeadU) * 0.9)) * 0.6);
    } else if (mat == 7.0) {
      alb = vec3(0.98, 0.97, 1.0);
    } else if (mat >= 9.95) {
      float slot = floor((mat - 10.0) / 3.0 + 0.01);
      float part = mat - 10.0 - slot * 3.0;
      gloss = 0.25;
      if (slot < 0.5) {
        float kind = uAccKind.x;
        float k = max(uAccK.x, 0.05);
        if (kind < 1.5) {                                // bow: pink satin
          alb = vec3(1.0, 0.56, 0.69);
          gloss = 0.5;
        } else if (kind < 2.5) {                         // flower crown
          if (part > 1.5) {
            vec3 q = p - uAT[0].xyz;
            vec3 n0 = uATN[0].xyz;
            vec3 ref = normalize(uHeadF - n0 * dot(uHeadF, n0));
            float a = atan(dot(q, cross(n0, ref)), dot(q, ref));
            float si = floor(a / (6.2831853 / 9.0) + 0.5);
            float sec = mod(si + 9.0, 4.0);
            alb = sec < 0.5 ? vec3(1.0, 0.7, 0.78) : sec < 1.5 ? vec3(1.0, 0.97, 0.9) : sec < 2.5 ? vec3(0.79, 0.71, 1.0) : vec3(1.0, 0.9, 0.55);
            float ac = si * 6.2831853 / 9.0;
            vec3 c = uAT[0].xyz + (ref * cos(ac) + cross(n0, ref) * sin(ac)) * (uAT[0].w + 1.2 * k) + n0 * 0.8 * k;
            alb = mix(alb, sec > 2.5 ? vec3(1.0, 0.62, 0.3) : vec3(1.0, 0.86, 0.4), 1.0 - smoothstep(1.0, 1.7, length(p - c) / k));
          } else alb = vec3(0.5, 0.78, 0.43);
        } else if (kind < 3.5) {                         // strawberry beanie
          if (part > 1.5) alb = vec3(0.5, 0.78, 0.43);
          else {
            alb = part > 0.5 ? vec3(0.86, 0.26, 0.36) : vec3(0.96, 0.36, 0.45);
            alb *= 0.92 + 0.08 * sin(dot(p, uHeadS) * 1.8);    // knit ribs
            if (part < 0.5) {
              vec3 g = p * 0.32;
              vec3 cell = floor(g);
              vec3 f = fract(g) - 0.5 - (vec3(hash3(cell), hash3(cell + 7.1), hash3(cell + 3.3)) - 0.5) * 0.5;
              alb = mix(alb, vec3(1.0, 0.93, 0.6), (1.0 - smoothstep(0.1, 0.16, length(f))) * step(0.55, hash3(cell + 1.9)));
            }
          }
        } else if (kind < 4.5) {                         // Santa: red velvet, fluffy white
          alb = part > 0.5 ? vec3(0.99, 0.97, 0.96) * (0.9 + 0.12 * noise3(p * 0.9)) : vec3(0.88, 0.2, 0.25);
          gloss = part > 0.5 ? 0.02 : 0.15;
        } else if (kind < 5.5) {                         // heart headband
          alb = part > 0.5 ? vec3(0.93, 0.42, 0.58) : vec3(1.0, 0.33, 0.5);
          gloss = part > 0.5 ? 0.3 : 0.7;
        } else if (kind < 6.5) {                         // daisy
          alb = part > 1.5 ? vec3(1.0, 0.8, 0.22) : part > 0.5 ? vec3(0.5, 0.78, 0.43) : vec3(1.0, 0.99, 0.97);
        } else if (kind < 7.5) {                         // straw hat: woven straw, pink ribbon
          if (part > 0.5) { alb = vec3(1.0, 0.56, 0.69); gloss = 0.4; }
          else {
            vec3 hl = headLocal(p);
            float ang = atan(hl.z, hl.x);
            float weave = step(0.5, fract(length(hl.xz) * 0.45 + step(0.5, fract(ang * 9.0)) * 0.5));
            alb = mix(vec3(0.97, 0.85, 0.57), vec3(0.88, 0.72, 0.42), weave * 0.6);
          }
        } else {                                         // witch: plum felt, orange band
          alb = part > 0.5 ? vec3(1.0, 0.6, 0.24) : vec3(0.42, 0.31, 0.63);
          gloss = 0.12;
        }
      } else if (slot < 1.5) {
        if (uAccKind.y < 1.5) { alb = vec3(0.93, 0.56, 0.66); gloss = 0.85; }      // rose-gold rims
        else if (part > 0.5) { alb = vec3(1.0, 0.56, 0.69); gloss = 0.6; }         // pink frame
        else { alb = vec3(0.62, 0.12, 0.3); gloss = 1.0; }                          // tinted heart lens
      } else {
        float kind = uAccKind.z;
        if (kind < 1.5) {                                // collar: candy pink, gold bell
          alb = part > 1.5 ? vec3(1.0, 0.8, 0.3) : vec3(1.0, 0.55, 0.68);
          gloss = part > 1.5 ? 0.9 : 0.35;
          if (part > 1.5) {
            vec3 b = p - uAA[12].xyz;
            alb = mix(alb, vec3(0.75, 0.5, 0.12), (1.0 - smoothstep(0.25, 0.5, abs(b.y + 1.2))) * step(0.0, dot(b, uCamDir)) * 0.8);
          }
        } else if (kind < 3.5) {                         // knit scarves: stripes + V-stitch ribbing
          vec3 q = p - uAT[4].xyz;
          vec3 n0 = uATN[4].xyz;
          vec3 ref = normalize(uHeadF - n0 * dot(uHeadF, n0));
          float around = atan(dot(q, cross(n0, ref)), dot(q, ref)) * uAT[4].w;   // arc length round the neck
          bool onTail = aTorus(p, 2, 0) > min(aCone(p, 2, 0), aCone(p, 2, 1)) + 0.2;
          float along = onTail ? p.y : around;
          float st = fract(along * 0.062);
          if (kind < 2.5) alb = mix(vec3(0.98, 0.52, 0.64), vec3(1.0, 0.95, 0.88), step(0.68, st));
          else alb = st < 0.5 ? vec3(0.86, 0.17, 0.22) : st < 0.68 ? vec3(1.0, 0.95, 0.88) : st < 0.86 ? vec3(0.22, 0.6, 0.33) : vec3(1.0, 0.95, 0.88);
          float row = fract(along * 0.42);
          float col = fract((onTail ? dot(p, uHeadS) : dot(q, n0)) * 0.55);
          float v = abs(fract(col * 2.0) - 0.5) * 2.0;
          alb *= 0.84 + 0.2 * smoothstep(0.15, 0.55, abs(row - v * 0.5 - 0.25));
          gloss = 0.08;
        } else {                                         // Halloween bandana: orange with tiny dark dots
          alb = vec3(1.0, 0.58, 0.2);
          vec3 g = p * 0.42;
          vec3 f = fract(g) - 0.5;
          alb = mix(alb, vec3(0.25, 0.17, 0.3), (1.0 - smoothstep(0.12, 0.17, length(f))) * step(0.5, hash3(floor(g))));
          gloss = 0.1;
        }
      }
    } else {
      alb = furColor(p, n);
    }
    alb = pow(alb, vec3(2.2));

    float ao = hit ? calcAO(p, n) : 1.0; // fringe: no AO (it would read as a grey halo)
    float key = clamp((dot(n, uLight) + 0.3) / 1.3, 0.0, 1.0);
    float fill = clamp(dot(n, uFill) * 0.5 + 0.5, 0.0, 1.0);
    float fres = pow(1.0 - clamp(dot(n, v), 0.0, 1.0), 3.0);
    vec3 col = alb * (0.16 + 0.5 * fill * vec3(0.92, 0.95, 1.1) + 0.95 * key * vec3(1.03, 1.0, 0.97)) * mix(0.62, 1.0, ao);
    // fur sheen (velvety rim) and a hint of warm subsurface in the terminator
    col += mix(alb, vec3(0.92, 0.9, 1.0), 0.3) * fres * (hit ? 0.24 : 0.08) * (0.4 + 0.6 * ao);
    col += alb * vec3(0.9, 0.4, 0.3) * 0.05 * (1.0 - key) * key * 4.0;
    // specular: glossy eyes + nose, faint on fur
    vec3 hv = normalize(uLight + v);
    float spec = pow(clamp(dot(n, hv), 0.0, 1.0), mix(18.0, 140.0, gloss)) * mix(0.05, 1.4, gloss);
    col += vec3(spec);
    if (mat == 1.0) {
      // catchlights: two fixed sparkles that make the eyes alive
      int ei = length(p - uEye[0].xyz) < length(p - uEye[1].xyz) ? 0 : 1;
      vec3 en = normalize(p - uEye[ei].xyz);
      vec3 s1 = normalize(uLight + uCamDir);             // big highlight: reflection of the key light
      vec3 s2 = normalize(-uLight * 0.5 + uCamDir * 1.4); // small kicker on the opposite side
      col += vec3(1.25) * smoothstep(0.95, 0.966, dot(en, s1));
      col += vec3(0.95) * smoothstep(0.991, 0.996, dot(en, s2));
      col += vec3(0.6, 0.7, 0.8) * pow(1.0 - clamp(dot(en, v), 0.0, 1.0), 4.0) * 0.25; // wet sheen
    }
    // laptop screen glow on her face / chest
    if (uLap.w > 0.5 && mat < 3.95) {
      vec3 toS = uScreenC - p;
      float dist = length(toS);
      float facing = max(0.0, dot(n, toS / dist));
      col += alb * vec3(0.45, 0.66, 1.0) * facing * uScreenB * 1.1 * (1.0 - smoothstep(18.0, 80.0, dist));
    }
    if (mat >= 3.95 && mat < 4.5) col += vec3(0.75, 0.72, 0.9) * fres * 0.35; // light edge highlight on the aluminium
    if (mat == 9.0) col = alb * (0.75 + 0.5 * uScreenB); // emissive (alb already linear)
    col = pow(col, vec3(1.0 / 2.2));
    result = vec4(col * alpha, alpha);
  }

  // contact shadow on the ground under the cat
  if (uShadow > 0.5 && result.a < 1.0 && rd.y < -1e-3) {
    float tg = -ro.y / rd.y;
    vec3 g = ro + rd * tg;
    float sh = 0.0;
    vec3 c0 = (uA[0].xyz + uB[0].xyz) * 0.5;
    vec3 ax = normalize(vec3(uA[0].x - uB[0].x, 0.0, uA[0].z - uB[0].z) + 1e-4);
    vec2 rel = vec2(dot(g.xz - c0.xz, ax.xz), dot(g.xz - c0.xz, vec2(-ax.z, ax.x)));
    float height = clamp(1.0 - min(uA[0].y, uB[0].y) / 120.0, 0.25, 1.0);
    sh += exp(-dot(rel / vec2(44.0, 20.0), rel / vec2(44.0, 20.0)) * 1.6) * 0.42 * height;
    for (int i = 0; i < 4; i++) {
      vec3 pw = uPaw[i].xyz;
      float lift = clamp(1.0 - pw.y / 18.0, 0.0, 1.0);
      vec2 dd = (g.xz - pw.xz) / 7.5;
      sh += exp(-dot(dd, dd) * 1.6) * 0.5 * lift; // tight contact shadow under each paw
    }
    sh = clamp(sh, 0.0, 0.62);
    vec3 shCol = vec3(0.16, 0.12, 0.25);
    result = result + vec4(shCol * sh, sh) * (1.0 - result.a);
  }
  outColor = result;
}
`,k=(e=0,t=0,n=0)=>[e,t,n],A=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],j=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],M=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],le=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],ue=e=>Math.hypot(e[0],e[1],e[2]),N=e=>{let t=ue(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},P=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],F=(e,t,n)=>e+(t-e)*n,de=(e,t,n)=>Math.max(t,Math.min(n,e)),fe=Math.PI/180;function I(e,t,n){let r=Math.cos(n),i=Math.sin(n),a=P(t,e),o=le(t,e)*(1-r);return[e[0]*r+a[0]*i+t[0]*o,e[1]*r+a[1]*i+t[1]*o,e[2]*r+a[2]*i+t[2]*o]}var L=`pX.pY.cX.cY.arch.rC.rP.neck.hX.hY.hPitch.hRoll.fnX.fnY.fnZ.ffX.ffY.ffZ.hnX.hnY.hnZ.hfX.hfY.hfZ.hockN.hockF.rootRoll.rootY.headCounter`.split(`.`),R={pX:-13,pY:25,cX:5,cY:60,arch:4,rC:18.5,rP:24,neck:12.5,hX:13,hY:103,hPitch:0,hRoll:0,fnX:22,fnY:6,fnZ:11,ffX:17,ffY:6,ffZ:10.5,hnX:9,hnY:6,hnZ:15,hfX:7,hfY:6,hfZ:15,hockN:172,hockF:172,rootRoll:0,rootY:0,headCounter:0},z={...R,pX:-30,pY:47,cX:22,cY:51,arch:4,rC:18.5,rP:18,neck:12,hX:43,hY:81,hPitch:-4,fnX:26,fnY:6,fnZ:9,ffX:21,ffY:6,ffZ:9,hnX:-30,hnY:6,hnZ:11,hfX:-35,hfY:6,hfZ:11,hockN:100,hockF:100},pe={sit:{},stand:z,walk:z,trot:{...z,hPitch:-6,hX:45,hY:79},loaf:{pX:-16,pY:19,cX:13,cY:21,arch:7,rC:21,rP:22,neck:13,hX:31,hY:48,hPitch:-2,fnX:29,fnY:5,fnZ:7,ffX:27,ffY:5,ffZ:7,hnX:-8,hnY:6,hnZ:13,hfX:-10,hfY:6,hfZ:13,hockN:176,hockF:176},sleep:{pX:-14,pY:17,cX:9,cY:17,arch:9,rC:20,rP:22,neck:13,hX:27,hY:22,hPitch:-34,hRoll:14,fnX:28,fnY:5,fnZ:9,ffX:25,ffY:5,ffZ:7,hnX:-6,hnY:6,hnZ:13,hfX:-8,hfY:6,hfZ:13,hockN:176,hockF:176},stretch:{...z,pX:-24,pY:60,cX:30,cY:16,arch:-7,rC:17.5,rP:18,hX:52,hY:25,hPitch:14,fnX:74,fnY:5,fnZ:8,ffX:70,ffY:5,ffZ:8,hnX:-26,hnY:6,hnZ:11,hfX:-31,hfY:6,hfZ:11,hockN:92,hockF:92},groom:{hPitch:-24,hRoll:10,hX:15,hY:100,fnX:31,fnY:82,fnZ:5},crouch:{...z,pX:-22,pY:27,cX:18,cY:22,arch:2,rC:18,rP:19,hX:40,hY:41,hPitch:4,fnX:30,fnY:6,fnZ:9,ffX:24,ffY:6,ffZ:9,hnX:-16,hnY:6,hnZ:12,hfX:-20,hfY:6,hfZ:12,hockN:165,hockF:165},pounce:{...z,pX:-32,pY:40,cX:26,cY:46,arch:2,hX:50,hY:64,hPitch:4,fnX:58,fnY:34,fnZ:8,ffX:54,ffY:28,ffZ:8,hnX:-64,hnY:30,hnZ:11,hfX:-68,hfY:24,hfZ:11,hockN:175,hockF:175},swipe:{},hang:{pX:0,pY:44,cX:2,cY:87,arch:-2,rC:17.5,rP:18.5,neck:12,hX:6,hY:122,hPitch:8,fnX:12,fnY:52,fnZ:8,ffX:6,ffY:54,ffZ:8,hnX:7,hnY:-2,hnZ:11,hfX:1,hfY:0,hfZ:11,hockN:92,hockF:92},fall:{...z,pX:-26,pY:56,cX:22,cY:60,hX:42,hY:88,hPitch:10,fnX:42,fnY:36,fnZ:14,ffX:38,ffY:32,ffZ:13,hnX:-48,hnY:32,hnZ:16,hfX:-52,hfY:28,hfZ:15,hockN:140,hockF:140},land:z,beg:{pX:-6,pY:24,cX:1,cY:73,arch:0,rC:18,rP:22,neck:12,hX:5,hY:111,hPitch:6,fnX:15,fnY:66,fnZ:6,ffX:13,ffY:64,ffZ:6,hnX:11,hnY:6,hnZ:15,hfX:9,hfY:6,hfZ:15},highfive:{},drink:{...z,pX:-28,pY:45,cX:18,cY:33,arch:6,hX:38,hY:26,hPitch:-40,fnX:23,fnY:6,fnZ:9,ffX:19,ffY:6,ffZ:9},yawn:{hPitch:22,hY:104},type:{pX:-18,pY:21,cX:11,cY:34,arch:6,rC:19.5,rP:22,neck:13,hX:29,hY:62,hPitch:-26,fnX:47,fnY:10.5,fnZ:10,ffX:46,ffY:10.5,ffZ:10,hnX:-8,hnY:6,hnZ:13,hfX:-10,hfY:6,hfZ:13,hockN:176,hockF:176},present:{pX:-12,pY:27,cX:27,cY:12,arch:9,rC:18.5,rP:24,neck:14,hX:44,hY:50,hPitch:-10,hRoll:-8,fnX:44,fnY:-38,fnZ:16,ffX:22,ffY:6,ffZ:8,hnX:9,hnY:6,hnZ:15,hfX:7,hfY:6,hfZ:15},ledge:{pX:-15,pY:-72,cX:-6,cY:-34,arch:3,rC:18,rP:19,neck:12,hX:2,hY:-33,hPitch:30,hRoll:0,fnX:5,fnY:2.5,fnZ:10,ffX:3,ffY:2.5,ffZ:10,hnX:-11,hnY:-108,hnZ:11,hfX:-16,hfY:-104,hfZ:11,hockN:95,hockF:95,rootRoll:0,rootY:0,headCounter:0},cling:{pX:-30,pY:-80,cX:-12,cY:-37,arch:6,rC:18,rP:19,neck:12,hX:-25,hY:-22,hPitch:32,hRoll:0,fnX:6,fnY:10,fnZ:14,ffX:6,ffY:-28,ffZ:11,hnX:1,hnY:-100,hnZ:14,hfX:-2,hfY:-91,hfZ:12,hockN:264,hockF:256,rootRoll:0,rootY:0,headCounter:0},lie:{pX:-25,pY:0,cX:20,cY:0,arch:2,rC:18.5,rP:20,neck:12,hX:40,hY:13,hPitch:4,fnX:55,fnY:-14,fnZ:8,ffX:50,ffY:-19,ffZ:6,hnX:-57,hnY:-13,hnZ:10,hfX:-52,hfY:-19,hfZ:8,hockN:182,hockF:182,rootRoll:-62,rootY:18,headCounter:52},peek:{hPitch:4,hY:100,fnX:40,fnY:92,fnZ:12,ffX:38,ffY:92,ffZ:12,rootY:-89}},B=Object.fromEntries(Object.keys(pe).map(e=>[e,{...R,...pe[e]}])),me={pX:`hind`,pY:`hind`,hnX:`hind`,hnY:`hind`,hnZ:`hind`,hfX:`hind`,hfY:`hind`,hfZ:`hind`,hockN:`hind`,hockF:`hind`,cX:`body`,cY:`body`,arch:`body`,rC:`body`,rP:`body`,rootRoll:`body`,rootY:`body`,fnX:`front`,fnY:`front`,fnZ:`front`,ffX:`front`,ffY:`front`,ffZ:`front`,hX:`head`,hY:`head`,hPitch:`head`,hRoll:`head`,neck:`head`,headCounter:`head`},he={hind:[120,.86],body:[135,.84],front:[165,.8],head:[185,.74]},ge=new Set([`stand`,`walk`,`trot`,`crouch`,`drink`]),_e=new Set([`loaf`,`sleep`,`type`]);function ve(e,t){return e===`sit`&&ge.has(t)?{d:{hind:0,body:.06,front:.12,head:.16},tail:.12}:ge.has(e)&&t===`sit`?{d:{front:0,head:.04,body:.1,hind:.16},tail:.24}:t===`loaf`||t===`type`?{d:{front:0,body:.06,hind:.1,head:.12},tail:.16}:t===`sleep`?{d:{head:0,body:.1,front:.12,hind:.14},tail:.24}:_e.has(e)&&(t===`sit`||ge.has(t))?{d:{head:0,front:.06,body:.1,hind:.14},tail:.12}:{d:{body:0,hind:.04,head:.06,front:.08},tail:.1}}var ye={stretch:2.3,pounce:.95,swipe:1.05,land:.5,highfive:1.45,yawn:1.9},be=new Set([`fall`,`hang`,`pounce`,`land`]),xe=new Set([`sit`,`beg`,`stand`,`loaf`]),Se={sit:`wrap`,stand:`calm`,walk:`happy`,trot:`happy`,loaf:`wrap`,sleep:`wrap`,stretch:`up`,groom:`wrap`,crouch:`low`,pounce:`low`,swipe:`wrap`,hang:`hang`,fall:`up`,land:`calm`,beg:`ground`,highfive:`wrap`,drink:`calm`,yawn:`wrap`,lie:`ground`,peek:`wrap`,type:`wrap`,ledge:`hang`,present:`question`,cling:`balance`},Ce=[`head`,`eyes`,`neck`],we=()=>({kind:0,k:0,A:new Float32Array(24),B:new Float32Array(24),TC:new Float32Array(8),TN:new Float32Array(8),fw:[1,0,0],bound:new Float32Array(4)}),Te=11.5,V=22,Ee=21,De=21,Oe=17,ke=14,Ae=class{constructor(){S(this,`springs`,void 0),S(this,`pose`,`sit`),S(this,`side`,1),S(this,`sideS`,new C(1,120,.9)),S(this,`tailMode`,`calm`),S(this,`gaitSpeed`,0),S(this,`gaitPhase`,0),S(this,`gaitBlend`,new C(0,90,1)),S(this,`time`,0),S(this,`breath`,0),S(this,`inhale`,0),S(this,`purr`,!1),S(this,`squash`,new C(0,260,.35)),S(this,`hangAng`,new C(0,40,.18)),S(this,`reach`,new C(1,90,1)),S(this,`headYaw`,new C(0,110,.62)),S(this,`headPitchL`,new C(0,110,.62)),S(this,`earLagY`,new C(0,150,.42)),S(this,`earLagP`,new C(0,150,.42)),S(this,`gaitSpd`,new C(0,30,1)),S(this,`idleMode`,`full`),S(this,`turnLead`,0),S(this,`trans`,null),S(this,`transPose`,`sit`),S(this,`lastTail`,null),S(this,`landT`,-1),S(this,`pullSeq`,null),S(this,`presentT`,-1),S(this,`foot`,[0,1,2,3].map(()=>({x:0,from:0,swing:!1,settleT:0,from0:null}))),S(this,`settleLeg`,-1),S(this,`beat`,{nod:0,shimmy:0,sway:0,tail:0,hz:0,phase:0}),S(this,`idle`,{unwrap:0,scratch:0,hover:0,pawStretch:0}),S(this,`dbgDx`,[]),S(this,`presentSquint`,0),S(this,`presentTap`,0),S(this,`oneShot`,null),S(this,`overrides`,{}),S(this,`wiggle`,0),S(this,`effort`,0),S(this,`tilt`,0),S(this,`peekDepth`,0),S(this,`tailPts`,[]),S(this,`tailVel`,[]),S(this,`out`,void 0),S(this,`restPose`,`sit`),S(this,`signUp`,!1),S(this,`bellUp`,!1),S(this,`typing`,0),S(this,`laptop`,!1),S(this,`lapSeq`,null),S(this,`lapPlace`,0),S(this,`lapLid`,0),S(this,`lapSwing`,new C(0,55,.32)),S(this,`prevPose`,`sit`),S(this,`hatPop`,new C(0,160,.55)),S(this,`hatOn`,!1),S(this,`accKind`,{head:0,eyes:0,neck:0}),S(this,`accOn`,{head:!1,eyes:!1,neck:!1}),S(this,`accPop`,{head:new C(0,160,.55),eyes:new C(0,160,.55),neck:new C(0,160,.55)}),S(this,`hatKind`,0),S(this,`sleepy`,0),S(this,`tailTargetCache`,null),S(this,`tailHoldUntil`,0),S(this,`tailInit`,!1),this.springs=Object.fromEntries(L.map(e=>{let[t,n]=he[me[e]];return[e,new C(R[e],t,n)]})),this.springs.rootY.k=680,this.springs.rootY.zeta=1;for(let e=0;e<=7;e++)this.tailPts.push(k()),this.tailVel.push(k());this.out={A:new Float32Array(80),B:new Float32Array(80),paw:new Float32Array(16),head:k(),headF:k(1),headU:k(0,1),headS:k(0,0,1),headR:k(27,25.5,31.5),earA:new Float32Array(8),earB:new Float32Array(8),earN:new Float32Array(6),cheek:new Float32Array(8),nose:new Float32Array(4),eye:new Float32Array(8),gaze:new Float32Array(6),mouth:new Float32Array(4),lid:new Float32Array(4),bBody:new Float32Array(4),bHead:new Float32Array(4),bTail:new Float32Array(4),bHat:new Float32Array(4),bAll:new Float32Array(4),clipY:-1e4,lap:new Float32Array(4),lapRot:new Float32Array([1,0,0,0,1,0,0,0,1]),lapBound:new Float32Array(4),lidTilt:.22,lapOpen:0,screen:k(),hatA:new Float32Array(24),hatB:new Float32Array(24),hatPom:new Float32Array(4),hatOn:0,hatKind:0,elastic:[k(),k(),k(),k(),k()],acc:{head:we(),eyes:we(),neck:we()},mouthPt:k(),whisker:[k(),k(),k(),k()],pawNear:k(),headTop:k(),scruff:k()}}tailShape(){let e=Se[this.pose];if(e===`wrap`&&this.idle.unwrap>0&&(e=`calm`),e===`wrap`||e===`hang`||e===`ground`||e===`balance`)return e;switch(this.tailMode){case`happy`:return`happy`;case`question`:return`question`;case`swish`:return`swish`;case`puffed`:return`puffed`;case`wrap`:return e===`low`?`low`:`calm`;default:return e}}targets(){let e={...B[this.pose]},t=this.oneShot;if(t){let n=t.t,r=(e,t,r,i)=>n<e?0:n<t?(n-e)/(t-e):n<r?1:n<i?1-(n-r)/(i-r):0,i=e=>e*e*(3-2*e),a=(e,t,n)=>{for(let r of Object.keys(t))e[r]=F(e[r],t[r],i(n))};switch(t.pose){case`stretch`:{let t={...B[this.restPose]};Object.assign(e,t),a(e,pe.stretch,r(.05,.55,1.4,1.9)),n>.55&&n<1.4&&(e.cY+=Math.sin(this.time*23)*.7,e.fnX+=Math.sin(this.time*19)*.5,e.hPitch+=Math.sin(this.time*21)*.6);let i=r(1.3,1.6,1.85,2.2);i>0&&a(e,{...z,hnX:-62,hnY:16,hockN:168,pY:50,cY:42,hX:46,hY:72,hPitch:6},i);break}case`swipe`:{Object.assign(e,B.sit);let t={fnX:17,fnY:50,fnZ:9},r={fnX:54,fnY:36,fnZ:11};n<.25?a(e,t,n/.25):n<.37?(Object.assign(e,t),a(e,r,(n-.25)/.12)):n<.6?Object.assign(e,r):(Object.assign(e,r),a(e,B.sit,(n-.6)/.45));break}case`highfive`:Object.assign(e,B.sit),a(e,{fnX:8,fnY:132,fnZ:38,hRoll:-10},r(0,.42,1,1.4));break;case`yawn`:Object.assign(e,B.sit),a(e,{hPitch:24,hY:105},r(.1,.45,1.3,1.85));break;case`pounce`:if(Object.assign(e,B.crouch),e.pY-=4*Math.min(1,n/.22),e.cY-=3*Math.min(1,n/.22),n>=.24&&n<.66){Object.assign(e,B.pounce);let t=(n-.24)/.42;e.arch=F(-6,5,t),e.hPitch+=F(10,-10,t),e.hY+=F(4,-3,t)}else n>=.66&&n<.8?(Object.assign(e,B.pounce),e.fnX=e.cX+30,e.fnY=2,e.ffX=e.cX+26,e.ffY=2,e.pY+=8,e.hPitch-=8):n>=.8&&(Object.assign(e,B.stand),e.cY-=9,e.pY-=6,e.hY-=9,e.arch+=5);e.rootY=58*(n>=.28&&n<.78?Math.sin(Math.PI*(n-.28)/.5):0);break;case`land`:Object.assign(e,B.stand),n<.1?(e.pY+=8,e.fnY=3,e.ffY=3):n<.3&&(e.cY-=10,e.pY-=7,e.hY-=10,e.arch+=6,e.hPitch-=6),n<.38&&(e.fnZ+=6,e.ffZ+=6,e.fnX+=5,e.ffX+=3,e.hnZ+=4,e.hfZ+=4)}}if(this.signUp&&xe.has(this.pose)&&!t&&(e.fnX=e.cX+50,e.fnY=e.cY+6,e.fnZ=18),this.pullSeq){let t=this.pullSeq.t;t<.35?Object.assign(e,{pX:-16,pY:-24,cX:6,cY:16,arch:-4,rC:18,rP:18,hX:26,hY:40,hPitch:4,fnX:14,fnY:3,fnZ:9,ffX:11,ffY:3,ffZ:9,hnX:-12,hnY:-50,hfX:-17,hfY:-46,hockN:120,hockF:120}):t<.6&&(e.hnY+=6,e.hfY+=6,e.pY+=4)}if(this.pose===`present`&&!this.oneShot&&this.presentT>=0){let t=this.presentT,n=(e,n)=>t>e&&t<e+n?Math.sin((t-e)/n*Math.PI):0,r=n(.36,.18)+n(.56,.18);e.fnY-=r*13,e.fnX+=r*5,e.hPitch-=r*7,e.hY-=r*2;let i=n(.46,.09)+n(.66,.09);e.fnY+=i*6;let a=n(.82,.62);if(e.fnY+=a*46,e.fnX+=a*14,e.fnZ+=a*10,e.hRoll-=a*14,e.hY+=a*5,e.cY+=a*4,this.presentSquint=a,this.presentTap=r,t>1.45&&this.idleMode===`full`){let n=Math.sin((t-1.45)*Math.PI*2);e.fnY+=n*2.4,e.fnX+=n*1.2}}let n=this.idle;if(n.scratch>0&&(this.pose===`type`||this.pose===`sit`||this.pose===`loaf`)&&(e.fnX=e.hX+10+Math.sin(this.time*18)*2,e.fnY=e.hY-20+Math.sin(this.time*18)*3,e.fnZ=12,e.hPitch+=10,e.hRoll-=8),n.hover>0&&this.pose===`type`&&(e.fnY+=5,e.ffY+=5,e.hPitch+=4),n.pawStretch>0&&this.pose===`lie`&&(e.fnX+=14,e.ffX+=10,e.fnY+=2),this.pose===`ledge`){let t=Math.max(0,this.gaitSpeed);if(t>.5){let n=(2.2+t/45)*Math.PI*2,r=e=>Math.max(0,Math.sin(this.time*n+e));e.hnX+=r(0)*20,e.hnY+=r(0)*26,e.hfX+=r(Math.PI)*20,e.hfY+=r(Math.PI)*26,e.pY+=Math.sin(this.time*n*2)*1.5,e.hPitch+=Math.sin(this.time*n)*3}}let r=this.lapSeq,i={hX:46,hY:26,hPitch:-42};if(r&&this.laptop){if(r.kind===`down`)r.t<.45&&Object.assign(e,B.stand,i);else if(r.t<.35)Object.assign(e,B.type);else if(r.t<.55)Object.assign(e,B.stand,i);else if(r.t<1){let t=(r.t-.55)/.45;e.hY+=Math.sin(Math.min(1,t)*Math.PI*2)*-2.5*(1-t)+3,e.hPitch+=8}}else this.laptop&&this.pose!==`type`&&!this.oneShot&&(e.hY+=4,e.hX+=2,e.hPitch+=9);Object.assign(e,this.overrides);let a=this.trans;if(a){let t=this.time-a.start,n=!1;for(let r of L)t<a.d[me[r]]&&(e[r]=a.from[r],n=!0);!n&&t>a.tail&&(this.trans=null)}return e}step(e,t,n,r){if(this.time+=e,this.pose!==this.transPose){let e=Object.fromEntries(L.map(e=>[e,this.springs[e].target])),t=ve(this.transPose,this.pose),n=this.oneShot!==null;this.transPose===`ledge`&&this.pose===`crouch`?(this.pullSeq={t:0},this.trans=null):n||(this.trans={from:e,start:this.time,d:t.d,tail:t.tail,fromPose:this.transPose}),this.pose!==`crouch`&&(this.pullSeq=null),this.presentT=this.pose===`present`?0:-1,this.presentSquint=0,this.presentTap=0,this.lastTail=this.tailTargetCache?this.tailTargetCache.map(e=>[...e]):null,this.tailHoldUntil=this.time+t.tail,this.pose===`land`&&(this.landT=this.time),this.transPose=this.pose}let i=this.targets(),a=r?.4:1,o=this.idleMode===`full`;if(this.breath=o?Math.sin(this.time*(this.pose===`sleep`?1.6:2.6))*a:0,this.pose===`crouch`&&(this.wiggle=Math.sin(this.time*14)*2.2*a,i.pX+=this.wiggle*.3,i.pY+=Math.abs(this.wiggle)*.6),this.pose===`groom`){let e=Math.sin(this.time*7);i.fnY+=e*3,i.fnX+=e*1.5,i.hPitch+=e*3}if(this.pose===`drink`&&(i.hPitch+=Math.sin(this.time*9)*3),this.pose===`type`){let e=this.idle.hover>0||this.idle.scratch>0?0:Math.max(0,Math.min(1,this.typing));if(e>.01){let t=this.beat.hz>0,n=t?this.beat.hz*2*Math.PI*2:(2+7*e)*Math.PI*2,r=t?this.beat.phase/(this.beat.hz*2):this.time,a=e=>Math.max(0,Math.sin(r*n+e))*3.2;i.fnY+=a(0),i.ffY+=a(Math.PI),i.fnX+=Math.sin(this.time*n*.23)*2.2,i.ffX+=Math.sin(this.time*n*.19+1)*2.2,i.hY+=Math.sin(this.time*n*.5)*.7*e,i.hPitch+=Math.sin(this.time*1.3)*2}}if(this.pose===`peek`&&this.peekDepth>0&&(i.rootY-=this.peekDepth*70),this.pose===`cling`){let e=Math.max(0,this.gaitSpeed);if(e>.5){let t=(1.8+e/70)*Math.PI*2,n=Math.sin(this.time*t);i.fnY+=n*9,i.ffY-=n*9,i.fnX+=Math.max(0,n)*1.5,i.ffX+=Math.max(0,-n)*1.5;let r=e=>Math.max(0,Math.sin(this.time*t+e));i.hnY+=r(Math.PI*.5)*12,i.hnX-=r(Math.PI*.5)*6,i.hfY+=r(Math.PI*1.5)*12,i.hfX-=r(Math.PI*1.5)*6,i.cY+=Math.abs(n)*2,i.pY+=Math.abs(n)*3,i.hPitch+=n*3}else o&&(i.cX+=Math.sin(this.time*1.3)*.8*a)}if(this.effort!==0&&!this.oneShot&&this.pose===`cling`){let e=Math.abs(this.effort),t=Math.sin(this.time*47)*.7*e*a;this.effort<0?(i.cX+=7*e+t,i.cY-=4*e,i.pX+=6*e,i.pY+=2*e,i.hX+=4*e,i.hPitch-=6*e,i.fnY-=3*e,i.ffY-=2*e,i.hnY+=7*e,i.hfY+=7*e,i.hnX-=2*e,i.hfX-=2*e):(i.cX-=8*e+t,i.cY-=2*e,i.pX-=7*e,i.hX-=7*e,i.hPitch+=8*e,i.fnX-=1*e,i.ffX-=1*e,i.hnY+=4*e,i.hfY+=4*e)}else if(this.effort!==0&&!this.oneShot){let e=Math.abs(this.effort),t=Math.sin(this.time*47)*.8*e*a;this.effort>0?(i.pX-=9*e-t,i.pY-=3*e,i.cX-=11*e-t,i.cY-=4*e,i.arch+=4*e,i.hX-=12*e,i.hY-=5*e,i.hPitch+=8*e,i.fnX+=12*e,i.ffX+=10*e,i.hnX-=5*e,i.hfX-=5*e):(i.pX+=4*e+t,i.cX+=10*e+t,i.cY-=8*e,i.hX+=11*e,i.hY-=10*e,i.hPitch-=6*e,i.fnX+=16*e,i.fnY+=12*e,i.ffX+=13*e,i.ffY+=8*e,i.hnX-=9*e,i.hfX-=9*e)}this.tilt!==0&&(i.hRoll+=this.tilt),this.bellUp&&!this.oneShot&&this.pose!==`type`&&(i.fnX=i.cX+30,i.fnY=i.cY+10,i.fnZ=16);for(let e of L){let t=this.springs[e];t.target=i[e]}{let e=this.pose===`present`;for(let t of[`fnX`,`fnY`,`fnZ`])this.springs[t].k=e?260:he.front[0],this.springs[t].zeta=e?.58:he.front[1]}this.sideS.target=this.side,this.hatPop.target=+!!this.hatOn;for(let e of Ce)this.accPop[e].target=this.accOn[e]&&this.accKind[e]>0?1:0;let s=this.prevPose===`type`,c=this.pose===`type`;if(this.laptop&&c!==s&&(this.lapSeq={kind:c?`down`:`up`,t:0}),this.prevPose=this.pose,!this.laptop)this.lapSeq=null,this.lapPlace=+!!c,this.lapLid=+!!c;else if(this.lapSeq){let t=this.lapSeq;t.t+=e;let n=(e,n)=>{let r=Math.max(0,Math.min(1,(t.t-e)/(n-e)));return r*r*(3-2*r)};t.kind===`down`?(this.lapPlace=n(.05,.45),this.lapLid=n(.6,1),t.t>=1&&(this.lapSeq=null)):(this.lapLid=1-n(0,.32),this.lapPlace=1-n(.55,.95),t.t>=1&&(this.lapSeq=null))}else this.lapPlace=+!!c,this.lapLid=+!!c;this.lapSwing.target=Math.sin(this.gaitPhase*Math.PI*2-.6)*.16*this.gaitBlend.x,this.presentT>=0&&(this.presentT+=e);for(let t of Object.keys(this.idle))this.idle[t]=Math.max(0,this.idle[t]-e);if(this.pullSeq&&(this.pullSeq.t+=e,this.pullSeq.t>.9&&(this.pullSeq=null)),this.pose===`ledge`){let e=this.gaitSpeed>.5,t=(o?Math.sin(this.time*1.1)*2.2:0)+(e?Math.sin(this.time*9)*2.5:0);this.hangAng.target=t}let l=this.pose===`walk`||this.pose===`trot`;this.gaitSpd.target=l?this.gaitSpeed:0,this.earLagY.target=this.headYaw.x,this.earLagP.target=this.headPitchL.x+this.springs.hPitch.x*fe,this.reach.target=this.pose===`cling`?1.26:1;let u=[...Object.values(this.springs),this.hatPop,this.accPop.head,this.accPop.eyes,this.accPop.neck,this.lapSwing,this.sideS,this.gaitBlend,this.squash,this.hangAng,this.headYaw,this.headPitchL,this.earLagY,this.earLagP,this.gaitSpd,this.reach],d=e;for(;d>1e-6;){let e=Math.min(1/240,d);for(let t of u)t.step(e);d-=e}this.headYaw.target=n.yaw,this.headPitchL.target=n.pitch;let f=l?Math.max(0,this.gaitSpeed):0;this.gaitBlend.target=+!!l;let p=this.pose===`trot`,m=p?52:36,h=p?.4:.62;if(f>.5)this.gaitPhase+=e*f/(m/h);else if(this.gaitBlend.x>.01){let t=this.gaitPhase%.5;this.gaitPhase+=Math.min(e*1.2,t>.25?.5-t:0)}this.build(t,p,m,h,e,a)}isTransitioning(){return this.trans!==null}kickTail(e,t=0){let n=this.tailVel.length;for(let r=Math.max(1,n-4);r<n;r++){let i=(r-(n-5))/4;this.tailVel[r][1]+=e*i,this.tailVel[r][2]+=t*i}}pawReadjust(e){this.springs[e?`fnY`:`ffY`].v+=70,this.springs[e?`fnX`:`ffX`].v+=25}headTilt(e){this.springs.hRoll.v+=120*e}breathAccent(e=1){this.springs.rC.v+=9*e,this.springs.cY.v+=10*e}pawTwitch(){this.springs.fnY.v+=35,this.springs.fnX.v+=20}curlAdjust(){this.springs.hPitch.v+=40,this.springs.pX.v+=12,this.springs.cX.v-=8,this.kickTail(25,12*this.side)}tailThump(){this.kickTail(70,0)}shiftWeight(e){this.springs.cX.v+=9*e,this.springs.pX.v+=5*e,this.springs.hRoll.v+=30*e}isSettled(){let e=(e,t,n)=>Math.abs(e.x-e.target)<t&&Math.abs(e.v)<n,t=!0;for(let n of L){let r=this.springs[n];e(r,.5,1.5)?r.snap(r.target):t=!1}let n=[[this.headYaw,.009],[this.headPitchL,.009],[this.earLagY,.009],[this.earLagP,.009],[this.sideS,.01],[this.gaitBlend,.01],[this.squash,.006],[this.hatPop,.006],[this.accPop.head,.006],[this.accPop.eyes,.006],[this.accPop.neck,.006],[this.lapSwing,.006],[this.hangAng,.5],[this.gaitSpd,.5],[this.reach,.004]];for(let[r,i]of n)e(r,i,i*4)?r.snap(r.target):t=!1;(this.trans||this.oneShot||this.lapSeq||this.pullSeq)&&(t=!1),this.pose===`present`&&this.presentT>=0&&this.presentT<1.45&&(t=!1),(this.pose===`ledge`||this.pose===`cling`)&&this.gaitSpeed>.5&&(t=!1),(this.gaitBlend.x>.01||this.gaitSpd.x>.5)&&(t=!1),(this.purr||this.effort!==0)&&(t=!1),Object.values(this.idle).some(e=>e>0)&&(t=!1),this.foot.some(e=>Math.abs(e.x)>.01)&&(t=!1),(this.pose===`crouch`||this.pose===`groom`||this.pose===`drink`)&&(t=!1),this.pose===`type`&&this.typing>.01&&(t=!1);for(let e=1;e<this.tailVel.length;e++){let n=this.tailVel[e];Math.abs(n[0])+Math.abs(n[1])+Math.abs(n[2])>1.2&&(t=!1)}return this.idleMode===`full`&&(t=!1),t}s(e){return this.springs[e].x}build(e,t,n,r,i,a){let o=this.out,s=de(this.sideS.x,-1,1)>=0?1:-1,c=this.gaitBlend.x,l=this.gaitPhase,u=t?[0,.5,.5,0]:[.25,.75,0,.5],d=this.pose===`walk`||this.pose===`trot`?Math.max(0,this.gaitSpeed):0,f=u.map((e,a)=>{let o=((l+e)%1+1)%1,s=this.foot[a];if(c>.02&&d>.5){this.settleLeg===a&&(this.settleLeg=-1,s.settleT=0,s.from0=null);let e=o>=r;if(e&&!s.swing&&(s.swing=!0,s.from=s.x),!e&&s.swing&&(s.swing=!1),!e)return s.x-=d*i,{dx:s.x,dy:0};let c=(o-r)/(1-r),l=c*c*(3-2*c),u=n*.5;s.x=s.from+(u-s.from)*l;let f=Math.sin(Math.PI*c);return{dx:s.x+f*n*.06,dy:(t?14:9)*f**.85}}if(s.swing=!1,Math.abs(s.x)>1.2){if(this.settleLeg===-1||this.settleLeg===a){this.settleLeg=a,s.settleT=Math.min(1,s.settleT+i/.16);let e=s.settleT*s.settleT*(3-2*s.settleT);return s.x=(s.from0===null?s.from0=s.x:s.from0)*(1-e),s.settleT>=1&&(s.x=0,s.settleT=0,s.from0=null,this.settleLeg=-1),{dx:s.x,dy:5*Math.sin(Math.PI*e)}}return{dx:s.x,dy:0}}return s.x=0,this.settleLeg===a&&(this.settleLeg=-1,s.settleT=0,s.from0=null),{dx:0,dy:0}}),p=t?c*5*Math.max(0,Math.cos((l-.45)*Math.PI*4)):0,m=c*(t?2.2:3)*Math.cos(l*Math.PI*4)+p,h=c*(t?2:2.6)*Math.cos((l+.125)*Math.PI*4)+p,g=c*(t?1:1.8)*Math.sin(l*Math.PI*2),ee=e=>((l+e)%1+1)%1,_=this.squash.x,v=1-_*.12,te=1+_*.08,y=this.breath*(this.pose===`sleep`?1.1:.6),ne=this.purr?Math.sin(this.time*160)*.25*a:0,b=[this.s(`cX`),this.s(`cY`)+m+ne-this.beat.nod*.12,g+this.beat.shimmy],x=[this.s(`pX`),this.s(`pY`)+h,-g*.7],re=de(this.turnLead,-1.4,1.4),S=-re*.4,C=(e,t)=>t?A(I(j(e,b),[0,1,0],t),b):e;x=C(x,S);let ie=this.inhale,w=this.s(`rC`)+y*.45+ie*2.4,T=this.s(`rP`)+ie*.8,ae=N(j(b,x)),E=N([-ae[1],ae[0],0]),D=E[1]<0?M(E,-1):E,oe=t?c*6*Math.sin(l*Math.PI*4):0,se=A(M(A(b,x),.5),M(D,this.s(`arch`)+oe)),O=(w+T)*.47+ie*3.2,ce=[this.s(`hX`)+c*(t?2:1)*Math.sin(l*Math.PI*4),this.s(`hY`)-m*(t?.7:.45)+ne,g*.4],k=(this.s(`hPitch`)+this.headPitchL.x/fe-this.beat.nod)*fe,L=[Math.cos(k),Math.sin(k),0],R=[-Math.sin(k),Math.cos(k),0],z=this.headYaw.x+de(re*.55,-1,1);L=I(L,[0,1,0],z),R=I(R,[0,1,0],z);let pe=this.idleMode===`full`&&this.pose!==`sleep`?Math.sin(this.time*.7)*1.5*a:0,B=de(-this.headYaw.v*2.2,-4,4),me=(this.s(`hRoll`)+pe+B+this.beat.sway)*fe*s;R=I(R,L,me);let he=this.s(`rootRoll`)*fe*s,ge=this.s(`rootY`),_e=this.pose===`hang`||this.pose===`ledge`?this.hangAng.x*fe:0,ve=this.pose===`ledge`?[0,0,0]:[0,116,0],ye=[1,0,0],be=[0,0,1],xe=e=>{let t=e;return he&&(t=I(t,ye,he)),_e&&(t=A(I(j(t,ve),be,_e),ve)),t=[t[0]*te,t[1]*v,t[2]*te],[t[0],t[1]+ge,t[2]]},Se=e=>{let t=e;return he&&(t=I(t,ye,he)),_e&&(t=I(t,be,_e)),t},we=this.s(`headCounter`)*fe*s;we&&(L=I(L,ye,we),R=I(R,ye,we));let Te=0,Ae=(e,t,n,r)=>{let i=xe(e),a=xe(n);o.A.set([i[0],i[1],i[2],t],Te*4),o.B.set([a[0],a[1],a[2],r],Te*4),Te++};Ae(b,w,x,T),Ae(se,O,se,O);let je=j(j(ce,M(L,9)),M(R,7));Ae(A(b,M(ae,3)),this.s(`neck`)*1.3,je,this.s(`neck`)*1.2);let Me=(e,t)=>(t?e:-e)*s,Ne=[],Pe=(e,t,n,r,i)=>{let a=j(t,e),o=ue(a),s=M(a,1/(o||1)),c=(n+r)*.995;o>c&&(o=c),o=Math.max(o,Math.abs(n-r)+.5);let l=(n*n-r*r+o*o)/(2*o),u=Math.sqrt(Math.max(n*n-l*l,0)),d=N(j(i,M(s,le(i,s))));return{knee:A(A(e,M(s,l)),M(d,u)),end:A(e,M(s,o))}},Fe=(e,n)=>{let i=e?`fn`:`ff`,a=Me(this.s(`${i}Z`),e),o=[this.s(`${i}X`)+f[n].dx*c,this.s(`${i}Y`)+f[n].dy*c,a],s=ee(t?e?0:.5:e?.25:.75),l=c*2.6*(s<r?(s/r)**2:1-(s-r)/(1-r)),u=[b[0]+2,b[1]-6+l,a*.95],{knee:d,end:p}=Pe(u,o,V*this.reach.x,Ee*this.reach.x,[-1,.1,0]);Ae(u,7.4,d,5.8),Ae(d,5.5,p,4.8),Ne.push(p)},Ie=(e,n)=>{let i=e?`hn`:`hf`,a=Me(this.s(`${i}Z`),e),o=C([this.s(`${i}X`)+f[n].dx,this.s(`${i}Y`)+f[n].dy,a],S),s=this.s(e?`hockN`:`hockF`)*fe,l=[o[0]+Math.cos(s)*ke,o[1]+Math.sin(s)*ke,a],u=ee(t?e?.5:0:e?0:.5),d=c*2.4*(u<r?(u/r)**2:1-(u-r)/(1-r)),p=[x[0]-1,x[1]-2+d,a*.92],{knee:m,end:h}=Pe(p,l,De,Oe,[1,.25,0]);Ae(p,12.5,m,7.6),Ae(m,6,h,4.7),Ae(h,4.6,o,5),Ne.push(o)};this.dbgDx=f.map(e=>e.dx),Fe(!0,0),Fe(!1,1),Ie(!0,2),Ie(!1,3);let Le=[6.3*(this.pose===`present`?1+this.presentTap*.2:1),6,6.1,5.8];Ne.forEach((e,t)=>{let n=xe(e);o.paw.set([n[0],n[1],n[2],Le[t]],t*4)});let Re=A(A(x,M(ae,-T*.72)),M(D,T*.25)),H=this.tailTargets(Re,x,b,Ne,s);if(this.time<this.tailHoldUntil&&this.lastTail&&this.lastTail.length===H.length){let e=j(H[0],this.lastTail[0]);H=this.lastTail.map((t,n)=>n===0?H[0]:A(t,e))}this.tailTargetCache=H,this.landT>=0&&this.time-this.landT<.02&&this.kickTail(-140,30*s),this.stepTail(H,i);let ze=this.tailMode===`puffed`?1.5:1;for(let e=0;e<7;e++){let t=F(7.4,4.6,e/6)*ze,n=F(7.4,4.6,(e+1)/6)*ze;Ae(this.tailPts[e],t,this.tailPts[e+1],Math.max(3.4,n))}let Be=xe(ce),U=N(Se(L)),W=N(Se(R)),G=N(P(U,W));o.head=Be,o.headF=U,o.headU=W,o.headS=G;let K=o.headR,q=(e,t,n)=>A(A(A(Be,M(U,e)),M(W,t)),M(G,n)),J=e.earFlat,Ve=e.earUp;for(let t=0;t<2;t++){let n=t===0?1:-1,r=q(-3,K[1]*.68,n*K[2]*.56),i=[F(-5,-14,J)+Ve*1.5,F(22,13,J)+Ve*2,n*F(9,17,J)],a=A(A(A(r,M(U,i[0])),M(W,i[1])),M(G,i[2])),s=de(this.earLagY.x-this.headYaw.x,-.6,.6),c=de(this.earLagP.x-(this.headPitchL.x+this.springs.hPitch.x*fe),-.6,.6);a=A(A(a,M(G,s*14)),M(U,-c*10)),a=A(a,M(U,this.beat.nod*.35));let l=t===0?e.earTwitchL??0:e.earTwitchR??0;l&&(a=A(A(a,M(G,n*l*7)),A(M(U,-l*6),M(W,-l*3))));let u=(e.earSwivel??0)*(t===0?1:.4);u&&(a=A(a,A(M(G,n*u*9),M(U,-u*3))));let d=N(A(U,M(G,n*.35)));o.earA.set([r[0],r[1],r[2],10],t*4),o.earB.set([a[0],a[1],a[2],1.6],t*4),o.earN.set(d,t*3)}for(let e=0;e<2;e++){let t=e===0?1:-1,n=q(20.2,-9.2,t*7.2);o.cheek.set([n[0],n[1],n[2],8.8],e*4);let r=q(18.6,1.6,t*13.6);o.eye.set([r[0],r[1],r[2],9.4],e*4)}let He=e.noseTwitch??0,Y=q(27.4+He*.7,-4.2+He*1,0);o.nose.set([Y[0],Y[1],Y[2],2.2]);let X=q(23.5,-11.5-e.mouth*.25,0);o.mouth.set([X[0],X[1],X[2],e.mouth]),o.mouthPt=q(27,-10,0),o.whisker=[q(24,-8,9),N(A(M(G,1),M(U,.45))),q(24,-8,-9),N(A(M(G,-1),M(U,.45)))],o.lid.set([e.lidUpper,e.lidUpper,e.lidLower,e.lidLower]),o.headTop=q(0,K[1]+18+this.hatPop.x*16,0);{let e=Math.max(0,this.hatPop.x);o.hatOn=+(e>.02);let t=Math.min(1,.35+this.sleepy*.65),n=Math.max(.01,e),r=q(-3,K[1]*.74,0),i=e=>M(W,e*n),a=e=>M(U,-e*n),s=M(G,(this.idleMode===`full`?Math.sin(this.time*.8)*.8:0)*n),c=e=>[0,0,e*n*this.side],l=A(A(A(r,i(16)),a(2)),c(2)),u=A(A(A(A(l,i(9-t*8)),a(3+t*2)),c(12)),s),d=A(A(A(A(u,i(-6-t*11)),a(1)),c(9)),M(s,2)),f=[[A(r,i(-1.5)),15.2,A(r,i(2.5)),14.8],[r,14,l,9.6],[l,9.6,u,5.6],[u,5.6,d,2.8]];if(this.hatKind===1){let e=q(-1,K[1]*.78,0),t=N(A(W,[0,0,Math.tan(12*fe)*this.side])),r=A(e,M(t,30*n));f[1]=[e,11.5,r,1.2],o.hatPom.set([r[0]+t[0]*2*n,r[1]+t[1]*2*n,r[2]+t[2]*2*n,3.8*n]),o.elastic=[A(e,M(G,10.5*n)),q(-2,-K[1]*.35,K[2]*1.02),A(e,M(G,-10.5*n)),q(-2,-K[1]*.35,-K[2]*1.02),q(12,-K[1]*.86,0)]}if(this.hatKind===2){let e=e=>q(-1,-1,e*(K[2]*.96)),t=e=>q(-1,-1,e*(K[2]*.96+5)),n=q(4,K[1]+4.5,0),r=e=>q(3,K[1]*.78,e*K[2]*.72),i=e=>q(0,7,e*(K[2]*.98+2.5));f.length=0,f.push([e(1),9.2,t(1),8.4],[e(-1),9.2,t(-1),8.4],[i(1),2.6,r(1),2.6],[r(1),2.6,n,2.6],[i(-1),2.6,r(-1),2.6],[r(-1),2.6,n,2.6]),o.hatPom.set([0,-1e4,0,0])}o.hatKind=this.hatKind,f.forEach(([e,t,r,i],a)=>{o.hatA.set([e[0],e[1],e[2],t*n],a*4),o.hatB.set([r[0],r[1],r[2],i*n],a*4)}),this.hatKind===0&&o.hatPom.set([d[0],d[1],d[2],5.4*n])}for(let e of Ce){let t=o.acc[e],n=Math.max(0,this.accPop[e].x),r=n>.02?this.accKind[e]:0;t.kind=r,t.k=n,t.A.fill(0),t.B.fill(0),t.TC.fill(0),t.TN.fill(0);for(let e=0;e<6;e++)t.A[e*4+1]=-1e4,t.B[e*4+1]=-1e4;for(let e=0;e<2;e++)t.TC[e*4+1]=-1e4;let i=0,a=0,s=[],c=(e,r,a,o)=>{t.A.set([e[0],e[1],e[2],r*n],i*4),t.B.set([a[0],a[1],a[2],o*n],i*4),s.push({p:e,r:r*n},{p:a,r:o*n}),i++},l=(e,r,i,o)=>{t.TC.set([e[0],e[1],e[2],r*n],a*4),t.TN.set([i[0],i[1],i[2],o*n],a*4),s.push({p:e,r:(r+o)*n}),a++},u=this.gaitBlend.x,d=u>.01?Math.sin(this.gaitPhase*Math.PI*4)*(this.pose===`trot`?.5:.3)*u:0;if(e===`neck`&&r){let e=[o.A[8],o.A[9],o.A[10]],i=[o.B[8],o.B[9],o.B[10]],a=N(j(i,e)),s=r===2||r===3,u=K[1]*(s?.98:.92),f=.62;for(;f>.12&&ue(j(A(e,M(j(i,e),f)),Be))<u;)f-=.04;let p=r===1?6.6:s?7.4:6.2,m=A(e,M(j(i,e),f)),h=F(o.A[11],o.B[11],f);l(m,h+p,a,s?5.6:r===4?2.4:3);let g=j(U,M(a,le(U,a)));if(g=ue(g)>.001?N(g):[1,0,0],t.fw=g,r===1){let e=A(A(m,M(g,h+p+2.2)),M(N(A(N(A([0,-1,0],M(g,.25))),M(N(P(g,[0,1,0])),d))),4.6*n));c(e,4.6,e,4.6)}else if(s){let e=N(P(a,g)),t=e[2]*this.side>=0?1:-1,r=A(A(m,M(g,(h+p+3)*.8)),M(e,t*(h+p+3)*.55)),i=A(A(r,[0,-11*n,0]),A(M(g,3.2),M(e,t*d*3))),o=A(A(i,[0,-10*n,0]),A(M(g,.8),M(e,t*d*5)));if(o[1]<3){let e=3-o[1];o[1]+=e,i[1]+=e*.5}c(r,5.4,i,5),c(i,5,o,4.8)}else{let e=A(A(m,M(g,h+p-2)),[0,-4*n,0]),t=N(P(g,[0,1,0])),r=A(A(e,A(M([0,-1,0],12*n),M(g,2*n))),M(t,d*4*n));r[1]<3&&(r[1]=3),c(e,8,r,1.4)}}else if(e===`eyes`&&r){let e=[],t=[];for(let i=0;i<2;i++){let a=i===0?1:-1,s=[o.eye[i*4],o.eye[i*4+1],o.eye[i*4+2]],c=N(A(A(M(U,.9),M(G,a*.42)),M(W,.04))),u=A(s,M(c,r===1?6.2:10.4));l(u,r===1?8.8:17,c,r===1?1.15:1.3);let d=N(j(M(G,-a),M(c,le(M(G,-a),c))));e.push(A(u,M(d,8.8*n))),t.push(A(u,M(d,-8.8*n)))}let i=A(M(A(e[0],e[1]),.5),M(W,1.6*n));c(e[0],.95,i,.95),c(i,.95,e[1],.95);for(let e=0;e<2;e++){let n=e===0?1:-1;c(t[e],.9,q(-4,5,n*K[2]*.98),.9)}}else if(e===`head`&&r){let e=de(this.sideS.x,-1,1),i=e>=0?0:1,a=Math.min(1,Math.abs(e)*2.2),u=[o.earA[i*4],o.earA[i*4+1],o.earA[i*4+2]],f=[o.earB[i*4],o.earB[i*4+1],o.earB[i*4+2]],p=[o.earN[i*3],o.earN[i*3+1],o.earN[i*3+2]],m=N(j(f,u)),h=N(P(m,p));if(r===1){let e=A(A(u,M(m,6)),M(p,3.2)),t=8*a;c(e,1.8*a,A(e,A(M(h,t),M(m,1.6*a))),5.2*a),c(e,1.8*a,A(e,A(M(h,-t),M(m,-1.4*a))),5.2*a),c(e,3*a,e,3*a);let n=M(m,-1);c(e,1.2*a,A(A(e,M(n,6.5*a)),M(h,2.6*a)),1*a),c(e,1.2*a,A(A(e,M(n,6.5*a)),M(h,-2.2*a)),1*a)}else if(r===2)l(q(-1.5,K[1]*.58,0),24.5,N(A(W,M(U,-.18))),1.5),s.push({p:Be,r:40});else if(r===3){let e=q(-1.5,K[1]+4.5*n,0);for(let t=0;t<4;t++){let r=t/4*Math.PI*2+.4;c(e,1.6,A(A(e,M(A(M(U,Math.cos(r)),M(G,Math.sin(r))),6.2*n)),M(W,1.2*n)),2.1)}c(e,1.3,A(e,M(W,4.5*n)),1),s.push({p:Be,r:40})}else if(r===4){let e=q(-2,K[1]*.62,0),t=e=>[0,0,e*n*this.side],r=A(A(e,M(W,14*n)),M(U,-3*n)),i=A(A(A(r,M(W,7*n)),M(U,-7*n)),t(6)),a=A(A(A(i,M(W,-9*n)),M(U,-6*n)),t(8));c(e,19.5,r,12.5),c(r,12.5,i,6.5),c(i,6.5,a,3),c(a,5.2,a,5.2),l(q(-2.5,K[1]*.6,0),21.5,N(A(W,M(U,-.12))),4.4)}else if(r===5){l(q(1,1,0),K[1]+3,N(A(U,M(W,.25))),1.5);let e=(this.idleMode===`full`?Math.sin(this.time*2.2)*.12:0)+d*.6;for(let t of[1,-1]){let r=q(1,K[1]*.92,t*9),i=A(r,A(M(W,15*n),A(M(G,t*(5+e*8)*n),M(U,1.5*n))));c(r,.8,i,.8);let a=A(i,M(G,-3.2*n)),o=A(i,M(G,3.2*n));c(A(a,M(W,2.6*n)),4.2,A(o,M(W,2.6*n)),4.2)}t.fw=U,s.push({p:Be,r:52})}else if(r===6){let e=N(j(u,Be)),t=A(A(A(u,M(e,6)),M(m,1)),M(p,2));l(t,9*a,N(A(A(M(p,.7),M(e,.7)),M(W,.2))),1.3*a),c(A(t,M(W,-3*n)),1.4*a,A(A(t,M(W,-8*n)),M(U,-6*n)),2.6*a)}else if(r===7||r===8){if(r===8){let e=q(-1,K[1]*.7,0),t=A(A(e,M(W,18*n)),M(U,-3*n)),r=A(A(A(t,M(W,12*n)),M(U,-9*n)),[0,0,3*n*this.side]);c(e,14,t,6.5),c(t,6.5,r,1.2),l(q(-1,K[1]*.74,0),12.4,N(A(W,M(U,-.1))),2.2)}s.push({p:Be,r:58})}}if(r&&s.length){let e=0,n=0,r=0;for(let t of s)e+=t.p[0],n+=t.p[1],r+=t.p[2];e/=s.length,n/=s.length,r/=s.length;let i=0;for(let t of s)i=Math.max(i,Math.hypot(t.p[0]-e,t.p[1]-n,t.p[2]-r)+t.r);t.bound.set([e,n,r,i+2])}else t.bound.set([0,-1e4,0,0])}{let e=this.lapPlace,t=e*e*(3-2*e),n=1-t,r=o.mouthPt,i=this.lapSwing.x+(this.idleMode===`full`?Math.sin(this.time*1.7)*.025:0),a=(Math.PI/2+i)*n,s=Math.max(-.35,Math.min(.35,this.sideS.v*.05))*n,c=this.headYaw.x*.35*n,l=Math.cos(a),u=Math.sin(a),d=Math.cos(s),f=Math.sin(s),p=Math.cos(c),m=Math.sin(c),h=[l,-u,0,u,l,0,0,0,1],g=[1,0,0,0,d,-f,0,f,d],ee=[p,0,m,0,1,0,-m,0,p],_=(e,t)=>{let n=Array(9).fill(0);for(let r=0;r<3;r++)for(let i=0;i<3;i++)for(let a=0;a<3;a++)n[r*3+i]+=e[r*3+a]*t[a*3+i];return n},v=_(ee,_(g,h)),te=e=>[v[0]*e[0]+v[1]*e[1]+v[2]*e[2],v[3]*e[0]+v[4]*e[1]+v[5]*e[2],v[6]*e[0]+v[7]*e[1]+v[8]*e[2]],y=te([19,4.2,0]),ne=[r[0]-y[0],r[1]-y[1]+1,r[2]-y[2]],b=Math.max(Ne[0][0],Ne[1][0])+9,x=A(ne,te([-19,0,0]));n>.5&&x[0]<b&&(ne=[ne[0]+(b-x[0]),ne[1],ne[2]]);let re=[62,0,0],S=Math.sin(Math.PI*t)*6,C=[F(ne[0],re[0],t),F(ne[1],re[1],t)+S,F(ne[2],re[2],t)];o.lap.set([C[0],C[1],C[2],+!!this.laptop]),o.lapRot.set(v),o.lapOpen=this.lapLid,o.lidTilt=F(-Math.PI/2+.03,.27,this.lapLid);let ie=Math.cos(o.lidTilt),w=te([19+Math.sin(o.lidTilt)*21,4.2+ie*21,0]);o.screen=[C[0]+w[0],C[1]+w[1],C[2]+w[2]];let T=te([6,18,0]),ae=[C[0]+T[0],C[1]+T[1],C[2]+T[2]];o.lapBound.set([ae[0],ae[1],ae[2],44])}o.scruff=q(-K[0]*.9,K[1]*.2,0),o.pawNear=xe(Ne[0]),o.clipY=this.pose===`peek`||this.oneShot===null&&this.springs.rootY.x<-40?0:-1e4;let Ue=(e,t)=>{let n=0,r=0,i=0;for(let e of t)n+=e.p[0],r+=e.p[1],i+=e.p[2];n/=t.length,r/=t.length,i/=t.length;let a=0;for(let e of t)a=Math.max(a,Math.hypot(e.p[0]-n,e.p[1]-r,e.p[2]-i)+e.r);e.set([n,r,i,a+2])},We=(e,t)=>{let n=[];for(let r=e;r<t;r++)n.push({p:[o.A[r*4],o.A[r*4+1],o.A[r*4+2]],r:o.A[r*4+3]}),n.push({p:[o.B[r*4],o.B[r*4+1],o.B[r*4+2]],r:o.B[r*4+3]});return n},Ge=We(0,13);for(let e=0;e<4;e++)Ge.push({p:[o.paw[e*4],o.paw[e*4+1],o.paw[e*4+2]],r:o.paw[e*4+3]});Ue(o.bBody,Ge);let Ke=[{p:Be,r:Math.max(K[0],K[1],K[2])+2},{p:[o.earB[0],o.earB[1],o.earB[2]],r:3},{p:[o.earB[4],o.earB[5],o.earB[6]],r:3}];Ue(o.bHead,Ke),Ue(o.bTail,We(13,20));let qe=[];if(o.hatOn){for(let e=0;e<(o.hatKind===2?6:4);e++)qe.push({p:[o.hatA[e*4],o.hatA[e*4+1],o.hatA[e*4+2]],r:o.hatA[e*4+3]}),qe.push({p:[o.hatB[e*4],o.hatB[e*4+1],o.hatB[e*4+2]],r:o.hatB[e*4+3]});qe.push({p:[o.hatPom[0],o.hatPom[1],o.hatPom[2]],r:o.hatPom[3]}),Ue(o.bHat,qe)}o.lap[3]>.5&&qe.push({p:[o.lapBound[0],o.lapBound[1],o.lapBound[2]],r:o.lapBound[3]});for(let e of Ce)if(o.acc[e].kind){let t=o.acc[e].bound;qe.push({p:[t[0],t[1],t[2]],r:t[3]})}Ue(o.bAll,[...Ge,...Ke,...We(13,20),...qe])}tailTargets(e,t,n,r,i){let a=this.tailShape(),o=[e],s=this.time;if(a===`wrap`){let n=Math.max(r[0][0],r[1][0])+8,a=17*i,o=this.pose===`sleep`;return[e,[t[0]-20,Math.max(5,e[1]-10),2*i],[t[0]-18,4.5,11*i],[t[0]-6,4.5,a*1.05],[F(t[0],n,.45),4.5,a*1.15],[F(t[0],n,.8),4.5,a*1.05],[n,4.5+(o?3:0),a*.75],[n+4,5+(o?5:0)+(this.idleMode===`full`?Math.max(0,Math.sin(s*1.3))*2.5:0),a*.35]]}let c={calm:{a0:205,a1:125,pow:1.4,sway:3,wave:6},happy:{a0:128,a1:72,pow:1.9,sway:2,wave:5},question:{a0:112,a1:10,pow:3.2,sway:1.5,wave:4},swish:{a0:176,a1:150,pow:1.2,sway:20,wave:4},puffed:{a0:104,a1:92,pow:1,sway:1,wave:2},low:{a0:183,a1:176,pow:1,sway:2,wave:9},up:{a0:112,a1:70,pow:1.5,sway:1,wave:4},hang:{a0:266,a1:175,pow:2.2,sway:4,wave:3},balance:{a0:232,a1:128,pow:1.6,sway:7,wave:7},ground:{a0:196,a1:181,pow:1,sway:2,wave:3}}[a],l=e,u=this.tailMode===`flick`,d=this.idleMode===`full`||u||a===`swish`||a===`balance`,f=this.gaitBlend.x,p=this.gaitPhase*Math.PI*2;for(let e=1;e<=7;e++){let t=e/7,n=d?Math.sin(s*(u?9:1.6)-e*.6)*c.wave*(u?2*t*t:t)*.7:0;n+=Math.sin(p*2-1.1-e*.55)*(this.pose===`trot`?14:9)*t*f;let r=(c.a0+(c.a1-c.a0)*t**+c.pow+n)*fe,i=d?Math.sin(s*(a===`swish`?3.2:.9)-e*.5)*c.sway*t:0;i+=Math.sin(p-1.4-e*.5)*(this.pose===`trot`?10:7)*t*f,i+=this.beat.tail*t,l=A(l,[Math.cos(r)*Te,Math.sin(r)*Te,0]);let m=[l[0],this.floorTail()?Math.max(4.5,l[1]):l[1],i];o.push(m)}return o}floorTail(){return this.pose!==`hang`&&this.pose!==`lie`&&this.pose!==`fall`&&this.pose!==`pounce`&&this.pose!==`ledge`&&this.pose!==`cling`&&!this.pullSeq}stepTail(e,t){let n=this.tailPts;if(!this.tailInit){for(let t=0;t<n.length;t++)n[t]=[...e[t]];this.tailInit=!0;return}n[0]=[...e[0]];for(let r=t;r>1e-6;r-=1/120){let t=Math.min(1/120,r);for(let r=1;r<n.length;r++){let i=F(220,70,r/(n.length-1)),a=1.24*Math.sqrt(i),o=this.tailVel[r];for(let s=0;s<3;s++){let c=-i*(n[r][s]-e[r][s])-a*o[s];o[s]+=c*t,n[r][s]+=o[s]*t}}}for(let t=1;t<n.length;t++){let r=this.tailVel[t];Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<.3&&ue(j(n[t],e[t]))<.3&&(n[t]=[...e[t]],r[0]=r[1]=r[2]=0)}for(let t=1;t<n.length;t++){let r=j(n[t],n[t-1]),i=ue(r)||1,a=ue(j(e[t],e[t-1]))||Te;n[t]=A(n[t-1],M(r,a/i)),this.floorTail()&&n[t][1]<4&&(n[t][1]=4)}}},je=150,Me=250,Ne=Math.PI/180*13,Pe=Math.PI/180*-32,Fe=Math.PI/180*-148,Ie=Math.PI/180*-12,Le=Math.PI/180*-168,Re={neutral:{lid:.08,lower:0,pupil:.45,mouth:0,blush:.25,earFlat:0,earUp:.3,smile:.4},happy:{lid:.02,lower:.38,pupil:.62,mouth:0,blush:.6,earFlat:0,earUp:1,smile:1},annoyed:{lid:.45,lower:.12,pupil:.12,mouth:0,blush:0,earFlat:.65,earUp:0,smile:-.6},sleepy:{lid:.58,lower:.12,pupil:.5,mouth:0,blush:.3,earFlat:.3,earUp:0,smile:.2},surprised:{lid:0,lower:0,pupil:1,mouth:3.4,blush:.1,earFlat:0,earUp:1,smile:0},smug:{lid:.48,lower:.24,pupil:.32,mouth:0,blush:.35,earFlat:.1,earUp:.4,smile:.9},love:{lid:.1,lower:.9,pupil:.8,mouth:0,blush:1,earFlat:0,earUp:.8,smile:1},sad:{lid:.25,lower:0,pupil:.9,mouth:0,blush:.1,earFlat:.55,earUp:0,smile:-1}},H=e=>{let t=parseInt(e.replace(`#`,``),16);return new _((t>>16&255)/255,(t>>8&255)/255,(t&255)/255)},ze={head:{none:0,bow:1,crown:2,beanie:3,santa:4,hearts:5,daisy:6,straw:7,witch:8},eyes:{none:0,glasses:1,sunglasses:2},neck:{none:0,collar:1,scarf:2,holiday:3,bandana:4}};function Be(e){let t=e.scale||1,n=e.fur,r=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches,i=document.createElement(`div`);i.style.cssText=`position:absolute;left:0;top:0;width:0;height:0;pointer-events:none;`;let a=document.createElement(`canvas`);a.style.cssText=`position:absolute;display:block;pointer-events:none;`,i.appendChild(a);let o=document.createElement(`div`);o.style.cssText=`position:absolute;left:0;top:0;width:0;height:0;pointer-events:none;`,i.appendChild(o);let s=new ee({canvas:a,alpha:!0,antialias:!1,premultipliedAlpha:!0,powerPreference:`low-power`});s.setClearColor(0,0);let v=new g,te=new c(-1,1,1,-1,0,1),y=e=>Array.from({length:e},()=>new u),b=e=>Array.from({length:e},()=>new _),x={uQuad:{value:new u(-1,-1,1,1)},uRes:{value:new f},uAnchor:{value:new f},uPxPerUnit:{value:1},uView:{value:new h},uLight:{value:new _},uFill:{value:new _},uCamDir:{value:new _},uA:{value:y(20)},uB:{value:y(20)},uPaw:{value:y(4)},uHead:{value:new u},uHeadR:{value:new _},uHeadF:{value:new _},uHeadU:{value:new _},uHeadS:{value:new _},uEarA:{value:y(2)},uEarB:{value:y(2)},uEarN:{value:b(2)},uCheek:{value:y(2)},uNose:{value:new u},uEye:{value:y(2)},uLid:{value:new u},uGaze:{value:b(2)},uPupil:{value:.5},uMouth:{value:new u},uSmile:{value:.4},uBlush:{value:.3},uBBody:{value:new u},uBHead:{value:new u},uBTail:{value:new u},uBAll:{value:new u},uClipY:{value:-1e4},uLap:{value:new u},uLidA:{value:.24},uLapRot:{value:new h},uLapBound:{value:new u},uScreenC:{value:new _},uScreenB:{value:1},uHatA:{value:y(6)},uHatB:{value:y(6)},uHatPom:{value:new u},uHatOn:{value:0},uHatKind:{value:0},uBHat:{value:new u},cHat:{value:H(`#7f8fe0`)},uShadow:{value:1},uAccKind:{value:new _},uAccK:{value:new _},uAA:{value:y(18)},uAB:{value:y(18)},uAT:{value:y(6)},uATN:{value:y(6)},uAFw:{value:b(3)},uABound:{value:y(3)},cBase:{value:new _},cShade:{value:new _},cLight:{value:new _},cPaw:{value:new _},cInnerEar:{value:new _},cNose:{value:new _},cStripe:{value:new u},cTailTip:{value:new u},cPatchA:{value:new u},cPatchB:{value:new u},cIris0:{value:new _},cIris1:{value:new _},cIris2:{value:new _},uMuzzleLight:{value:1},uChestLight:{value:1},cPoints:{value:new u},cSocks:{value:new u},uBicolor:{value:0},cIrisB0:{value:new _},cIrisB1:{value:new _},cIrisB2:{value:new _}},re=new l({glslVersion:p,vertexShader:O,fragmentShader:ce,uniforms:x,transparent:!0,depthTest:!1,depthWrite:!1}),S=new d(new m(2,2),re);v.add(S);let w=new Ae,T=`sit`,E=`sit`,D=!1,k=`neutral`,A=`calm`,j=null,M=``,le=`board`,ue=`normal`,N=0,P=0,F=null,de=!1,fe=0,I=-1,L=.15,R=0,z=0,pe=new C(Pe,120,.86),B=`full`,me=1.5+Math.random()*2.5,he=0,ge=0,_e=`neutral`,ve={yaw:0,pitch:0},xe=null,Se=null,we=[new C(1,3200,1),new C(0,3200,1),new C(0,3200,1)],Te=-1,V=0,Ee=!1,De=0,Oe=0,ke=null,Be=32,U=10,W=0,G=!1,K=`none`,q=0,J=0,Ve=2.5+Math.random()*2.5,He=1,Y={lidUpper:1,lidLower:1,mouth:0,earFlat:0,earUp:.3},X={lid:new C(.08,160,.9),lower:new C(0,140,.9),pupil:new C(.45,80,.9),mouth:new C(0,260,.75),blush:new C(.25,60,1),earFlat:new C(0,160,.6),earUp:new C(.3,160,.6),smile:new C(.4,90,.9)},Ue={strike:new Set,done:new Set,landed:new Set},We=(e,t)=>Ue[e].forEach(e=>e(t)),Ge=new h,Ke=1,qe=0,Je=Math.cos(Ne),Ye=Math.sin(Ne),Z=e=>{let n=e[0]*Ke+e[2]*qe,r=-e[0]*qe+e[2]*Ke,i=e[1]*Je-r*Ye;return{x:n*t,y:-i*t}},Xe=(e,t,n)=>new _(e,t,n).applyMatrix3(Ge).normalize(),Ze={x:-50,y:-150,w:100,h:150},Qe={x:0,y:-100},Q=1,$e=1,et=()=>{Q=Math.min(window.devicePixelRatio||1,1.5)*$e;let e=Math.round(300*t),n=Math.round(420*t);a.style.width=`${e}px`,a.style.height=`${n}px`,a.style.left=`${-150*t}px`,a.style.top=`${-250*t}px`,s.setPixelRatio(Q),s.setSize(e,n,!1),x.uRes.value.set(e*Q,n*Q),x.uAnchor.value.set(je*t*Q,Me*t*Q),x.uPxPerUnit.value=t*Q},tt=()=>{let e=ne[n]??ne.ginger;x.cBase.value.copy(H(e.base)),x.cShade.value.copy(H(e.shade)),x.cLight.value.copy(H(e.light)),x.cPaw.value.copy(H(e.paw)),x.cInnerEar.value.copy(H(e.earInner)),x.cNose.value.copy(H(e.nose??`#f29ab2`));let t=e=>{if(!e)return new u(0,0,0,0);let t=H(e);return new u(t.x,t.y,t.z,1)};x.cPoints.value.copy(t(e.points)),x.cSocks.value.copy(t(e.socks??e.points)),x.uBicolor.value=+!!e.bicolor;let r=e.irisAlt??e.iris;if(x.cIrisB0.value.copy(H(r[0])),x.cIrisB1.value.copy(H(r[1])),x.cIrisB2.value.copy(H(r[2])),x.cStripe.value.set(0,0,0,0),e.stripes){let t=H(e.stripes);x.cStripe.value.set(t.x,t.y,t.z,1)}if(x.cTailTip.value.set(0,0,0,0),e.tailTip){let t=H(e.tailTip);x.cTailTip.value.set(t.x,t.y,t.z,1)}x.cPatchA.value.set(0,0,0,0),x.cPatchB.value.set(0,0,0,0);let i=[...new Set(e.patches.map(e=>e.color))];if(i[0]){let e=H(i[0]);x.cPatchA.value.set(e.x,e.y,e.z,1)}if(i[1]){let e=H(i[1]);x.cPatchB.value.set(e.x,e.y,e.z,1)}x.cIris0.value.copy(H(e.iris[0])),x.cIris1.value.copy(H(e.iris[1])),x.cIris2.value.copy(H(e.iris[2])),x.uMuzzleLight.value=e.muzzleAlpha,x.uChestLight.value=e.chestAlpha},nt=[],rt=e=>{nt.length>3&&nt.shift()?.node.remove();let t=document.createElement(`div`);t.style.cssText=`position:absolute;left:0;top:0;width:0;height:0;will-change:transform,opacity;`,t.innerHTML=oe[e],o.appendChild(t),nt.push({node:t,t:0,dur:e===`zzz`?2.4:1.5,dx:(Math.random()-.5)*22})},it=`http://www.w3.org/2000/svg`,at=document.createElementNS(it,`svg`);at.setAttribute(`width`,`1`),at.setAttribute(`height`,`1`),at.style.cssText=`position:absolute;left:0;top:0;overflow:visible`;let ot=[];for(let e=0;e<6;e++){let e=document.createElementNS(it,`path`);e.setAttribute(`fill`,`none`),e.setAttribute(`stroke-linecap`,`round`),at.appendChild(e),ot.push(e)}let st=[0,1].map(()=>{let e=document.createElementNS(it,`path`);return e.setAttribute(`fill`,`none`),e.setAttribute(`stroke-linecap`,`round`),at.appendChild(e),e}),ct=document.createElementNS(it,`path`);ct.setAttribute(`fill`,`none`),ct.setAttribute(`stroke`,`rgba(238,112,153,0.85)`),ct.setAttribute(`stroke-linecap`,`round`),at.appendChild(ct),o.appendChild(at);let lt=document.createElement(`div`);lt.style.cssText=`position:absolute;left:0;top:0;width:0;height:0;`,o.appendChild(lt);let ut=null,dt={head:`none`,eyes:`none`,neck:`none`},ft=0,pt=0,mt=()=>{if(lt.innerHTML=j&&j!==`laptop`?se[j]:``,w.laptop=j===`laptop`,w.bellUp=j===`bell`,j===`sign`){let e=lt.querySelector(`[data-sign]`);e&&ae(e,M,le)}w.signUp=j===`sign`},ht=e=>{if(e===T&&!w.oneShot)return;let t=T;T=e,D=!1,ye[e]===void 0?(w.oneShot=null,be.has(e)||(E=e)):(w.oneShot={pose:e,t:0},t!==e&&ye[t]===void 0&&!be.has(t)&&(E=t)),w.restPose=E,w.pose=e,e===`land`&&(w.squash.v+=3.4,We(`landed`,e)),e===`hang`&&w.hangAng.snap(0)},gt=()=>{let e=T;w.oneShot=null,T=be.has(E)?`sit`:E,w.pose=T,We(`done`,e)},_t=-10,$={earL:0,earR:0,swivel:0,nose:0,relax:0},vt={earL:4.5,earR:4.5,swivel:1.4,nose:6,relax:.9},yt=null,bt=``,xt=6+Math.random()*4,St=30+Math.random()*30,Ct=()=>Math.random()<.5?-1:1,wt=(e,t,n,r)=>{yt={dir:Xe(e,t,n).normalize(),until:V+r}},Tt=()=>!F&&!At(),Et=[0,0],Dt=()=>{let e=[[`earStepL`,1.6,()=>{Et[0]=Et[0]?0:Math.random()<.5?.35:-.25}],[`earStepR`,1.6,()=>{Et[1]=Et[1]?0:Math.random()<.5?.35:-.25}],[`blink`,2.2,()=>Ot(.12)],[`earL`,.6,()=>$.earL=1],[`earR`,.6,()=>$.earR=1],[`swivel`,.5,()=>$.swivel=1],[`relax`,.3,()=>$.relax=1],[`double`,.6,()=>{Ot(.12),jt=.24}],[`slow`,.5,()=>Ot(.55)],[`kiss`,Tt()?.4:0,()=>Ot(1,.5)],[`tailCurl`,.9,()=>w.kickTail(26,0)],[`tailFlick`,.9,()=>w.kickTail(10,26*Ct())],[`tailSweep`,.35,()=>w.kickTail(4,60*Ct())],[`unwrap`,T===`sit`||T===`loaf`?.35:0,()=>w.idle.unwrap=2.2],[`shift`,.7,()=>w.shiftWeight(Ct())],[`paw`,.7,()=>w.pawReadjust(Math.random()<.6)],[`tilt`,.5,()=>w.headTilt(Ct())],[`glanceSide`,.5,()=>wt(Ct()*.9,.05,.45,.9)],[`glanceUp`,.3,()=>wt(.2*Ct(),.75,.6,.8)],[`glanceViewer`,.4,()=>wt(0,0,1,1)],[`nose`,.6,()=>$.nose=1],[`whisker`,.6,()=>he=1]],t;t=T===`sleep`?[[`earL`,1,()=>$.earL=1],[`earR`,1,()=>$.earR=1],[`dreamPaw`,1,()=>w.pawTwitch()],[`tailTip`,.8,()=>w.kickTail(14,8*Ct())],[`whisker`,.6,()=>he=1],[`nose`,.5,()=>$.nose=1]]:T===`lie`?[...e.filter(([e])=>![`unwrap`,`paw`,`tailSweep`].includes(e)),[`pawStretch`,.9,()=>w.idle.pawStretch=1.3],[`bellyBreath`,B===`full`?.7:0,()=>w.breathAccent(1.6)],[`thump`,.9,()=>w.tailThump()]]:T===`type`?[...e.filter(([e])=>![`unwrap`,`paw`,`glanceViewer`,`kiss`].includes(e)),[`lookUp`,1,()=>{wt(0,.1,1,1.3),w.idle.hover=1.1}],[`scratch`,.6,()=>w.idle.scratch=1],[`hover`,.7,()=>w.idle.hover=.9]]:At()?e.filter(([e])=>[`earL`,`earR`,`swivel`,`tailFlick`,`nose`,`whisker`].includes(e)):e,t=t.filter(([e,t])=>t>0&&e!==bt);let n=Math.random()*t.reduce((e,t)=>e+t[1],0);for(let[e,r,i]of t)if(n-=r,n<=0){i(),bt=e;return}},Ot=(e,t=1.5)=>{I>=0||V-_t<t||(I=0,L=e,_t=V)},kt=new Set([`walk`,`trot`,`pounce`,`fall`,`land`,`crouch`,`ledge`,`cling`]),At=()=>kt.has(T)||j===`laptop`&&T!==`type`,jt=0,Mt=e=>{let i=Math.min(.05,Math.max(0,e)),a=Math.min(1,Math.max(0,e));V+=a,pe.target=T===`cling`?He===1?Ie:Le:He===1?Pe:Fe;for(let e=i;e>1e-6;e-=1/240)pe.step(Math.min(1/240,e));let o=pe.x;Ke=Math.cos(o),qe=Math.sin(o);let c=new h().set(Ke,0,qe,0,1,0,-qe,0,Ke),l=new h().set(1,0,0,0,Je,-Ye,0,Ye,Je);Ge.copy(l.multiply(c)).transpose(),x.uView.value.copy(Ge);let u=Xe(0,0,1);if(x.uCamDir.value.copy(u),x.uLight.value.copy(Xe(-.5,.78,.62)),x.uFill.value.copy(Xe(.75,-.1,.55)),w.side=u.z>=0?1:-1,w.gaitSpeed=q/(t*Math.max(.35,Math.abs(Ke))),w.turnLead=-(pe.target-pe.x),w.oneShot){w.oneShot.t+=i;let e=w.oneShot.t;T===`swipe`&&!D&&e>=.37&&(D=!0,We(`strike`,T)),T===`highfive`&&!D&&e>=.42&&(D=!0,We(`strike`,T)),T===`pounce`&&!D&&e>=.78&&(D=!0,w.squash.v+=3,w.kickTail(-140,30*w.side),We(`landed`,T)),e>=(ye[T]??0)&&gt()}let d=Re[k],f=T===`yawn`&&w.oneShot?Math.max(0,Math.min(1,(w.oneShot.t-.15)/.25))*Math.max(0,Math.min(1,(1.75-w.oneShot.t)/.35)):0;X.lid.k=T===`sleep`?34:160,X.lid.zeta=T===`sleep`?1:.9;let p=de&&k===`love`&&T!==`sleep`;if(X.lid.target=T===`sleep`||T===`groom`||f>.2||p?1.02:de?Math.max(d.lid,.55):d.lid,X.lower.target=de?Math.max(d.lower,.5):d.lower,X.pupil.target=T===`crouch`||T===`ledge`||T===`cling`?Math.max(.95,d.pupil):d.pupil,X.mouth.target=Math.max(d.mouth,f*9.5,T===`drink`?2.5+Math.sin(w.time*9)*1.2:0),X.blush.target=de?1:d.blush,X.earFlat.target=Math.max(d.earFlat,f*.7,T===`hang`?.5:0,T===`ledge`?.6:0,T===`cling`?.25:0),X.earUp.target=d.earUp,X.smile.target=T===`ledge`?Math.min(d.smile,-.3):de?Math.max(d.smile,.9):d.smile,w.effort!==0){let e=Math.abs(w.effort);X.lid.target=Math.max(X.lid.target,.5*e),X.lower.target=Math.max(X.lower.target,.35*e),X.earFlat.target=Math.max(X.earFlat.target,.65*e),X.smile.target=Math.min(X.smile.target,-.5*e),X.pupil.target=Math.min(X.pupil.target,.7)}T===`present`&&(X.lid.target=Math.min(X.lid.target,.06),X.lower.target=Math.max(X.lower.target,.3),X.pupil.target=Math.max(X.pupil.target,.82),X.smile.target=Math.max(X.smile.target,.95),X.blush.target=Math.max(X.blush.target,.6),X.earUp.target=1,X.lower.target=Math.max(X.lower.target,.3+w.presentSquint*.6),X.lid.target=Math.max(X.lid.target,w.presentSquint*.35)),K===`content`?(X.lid.target=Math.max(X.lid.target,.42),X.lower.target=Math.max(X.lower.target,.35),X.smile.target=Math.max(X.smile.target,.7)):K===`closed`?(X.lid.target=1.02,X.smile.target=Math.max(X.smile.target,.8)):K===`open`&&(X.smile.target=Math.max(X.smile.target,.7)),R>0&&(X.mouth.target=Math.max(X.mouth.target,4.2),R-=i),k!==_e&&(k===`surprised`&&(ge=1),_e=k),ge=Math.max(0,ge-i*2.6),X.earFlat.target=Math.max(X.earFlat.target,ge*.75),T===`walk`||T===`trot`?J>0?J-=a:(Ve-=a)<=0&&(J=.9,Ve=2.5+Math.random()*3):J=0,me-=a,me<=0&&(Dt(),me=T===`sleep`?5+Math.random()*6:2.5+Math.random()*2.5,De>0&&(me*=2),r&&(me*=1.6)),xt-=a,xt<=0&&!At()&&B===`full`&&(w.breathAccent(T===`lie`?1.4:T===`sleep`?1.2:.8),xt=6+Math.random()*4),T===`sleep`&&(St-=a,St<=0&&(w.curlAdjust(),St=30+Math.random()*30));for(let e of Object.keys($))$[e]=Math.max(0,$[e]-a*vt[e]);yt&&V>yt.until&&(yt=null),jt>0&&(jt-=i,jt<=0&&Ot(.12,0));let m=0;if(I>=0){I+=i;let e=Math.min(1,I/L);m=e<.4?Math.sin(e/.4*Math.PI*.5):Math.cos((e-.4)/.6*Math.PI*.5),L>.4&&(m=e<.25?e/.25:e<.6?1:1-(e-.6)/.4),I>=L&&(I=-1)}z=Math.max(0,z-i*5),he=Math.max(0,he-i*4);for(let e of Object.values(X))for(let t=i;t>1e-6;t-=1/240)e.step(Math.min(1/240,t));let g=Math.min(1.05,X.lid.x+m*(1.05-X.lid.x));Y.lidUpper=1-g*2.05,Y.lidLower=1-X.lower.x*.85,Y.mouth=Math.max(0,X.mouth.x),Y.earFlat=Math.max(0,X.earFlat.x+z*.4+Math.sin(Math.min(1,$.relax)*Math.PI)*.25);let ee=e=>e>0?Math.sin(e*Math.PI):0;Y.earTwitchL=ee($.earL)+Et[0],Y.earTwitchR=ee($.earR)+Et[1],Y.earSwivel=Math.sin(Math.min(1,$.swivel)*Math.PI),Y.noseTwitch=$.nose>0?Math.sin($.nose*Math.PI*3)*$.nose:0,Y.earUp=X.earUp.x;let y,ne=()=>w.out.screen;if(!F&&T===`type`&&j===`laptop`){let e=Z(ne()),n=Qe;y=Xe(e.x-n.x,-(e.y-n.y),60*t)}else if(!F&&yt)y=yt.dir.clone();else if(!F&&T===`cling`)y=new _(1,.35,0).lerp(u,.1).normalize();else if(!F&&(T===`walk`||T===`trot`)&&J<=0)y=new _(1,-.12,0).lerp(u,.22).normalize();else if(F){let e=Qe,n=F.x-e.x,r=F.y-e.y;y=Xe(n,-r,90*t)}else y=u.clone();let b=Math.atan2(-y.z,y.x)-0;for(;b>Math.PI;)b-=2*Math.PI;for(;b<-Math.PI;)b+=2*Math.PI;let re=T===`sleep`||T===`lie`&&!F,S=re?0:Math.max(-1.15,Math.min(1.15,b*.8)),C=re?0:Math.max(-.45,Math.min(.45,Math.asin(Math.max(-1,Math.min(1,y.y)))*.6)),ae=y.clone().normalize(),E=!!F;if(E&&Se){let e=Math.acos(Math.max(-1,Math.min(1,ae.dot(Se))));e>.6&&!re&&!At()&&V-_t>2.5&&(Te=V+.06),e>.05?(xe={yaw:S,pitch:C,at:V+.12+Math.min(.06,e*.06)},me=Math.max(me,1),jt=0):xe||(ve={yaw:S,pitch:C})}else ve={yaw:S,pitch:C},xe=null;Se=E?ae:null,Te>=0&&V>=Te&&(At()||Ot(.12,2.5),Te=-1),xe&&V>=xe.at&&(ve={yaw:xe.yaw,pitch:xe.pitch},xe=null);let oe=ve.yaw,se=ve.pitch;{let e=w.beat,t=Math.exp(-i*10);if(e.nod*=t,e.shimmy*=t,e.sway*=t,e.tail*=t,e.hz=0,G=Math.abs(e.nod)+Math.abs(e.shimmy)+Math.abs(e.sway)+Math.abs(e.tail)>.05,G||(e.nod=e.shimmy=e.sway=e.tail=0),De===0&&(K=`none`),De>0){let t=De/60,n=(V-Oe)*t,r=Math.floor(n),i=n-r;e.hz=t,K=`none`,e.phase=n;let a=e=>e<.08?Math.sin(e/.08*Math.PI*.5):e<.34?Math.cos((e-.08)/.26*Math.PI*.5)**2:0,o=At(),s=ue===`calm`,c=(o?2:5)*(s?.6:ue===`party`?1.2:1);r>=Be&&!ke&&!o&&!s&&(ke={kind:(ue===`party`?[`shimmy`,`bang`,`shimmy`]:[`bang`,`shimmy`,`sway`])[Math.floor(Math.random()*3)],beat:r},Be=r+(ue===`party`?16:32));let l=n/2%1,d=s?c*Math.sin(l*Math.PI):c*a(i);if(ke){let t=n-ke.beat;ke.kind===`bang`&&t<2?d=10*a(t*2%1):ke.kind===`shimmy`&&t<2?e.shimmy=Math.sin(t*Math.PI*4)*3.5*Math.sin(t/2*Math.PI):ke.kind===`sway`&&t<4&&(e.sway=Math.sin(t/4*Math.PI*2)*9,d*=.4),t>=(ke.kind===`sway`?4:2)&&(ke=null)}if(e.nod=d,B===`full`&&!o&&(e.tail=s?Math.sin(n*Math.PI/2)*7:Math.sin(n*Math.PI)*9),!o){r>=U&&(W=V+1.4,U=r+8+Math.floor(Math.random()*6));let e=V<W;K=ke?.kind===`sway`?`closed`:e?`open`:`content`,e&&!yt&&(yt={dir:u.clone(),until:W})}G=s||i<.36||ke!==null||B===`full`&&!o}}w.tailMode=A,w.typing=T===`type`?ft:0,w.hatOn=ut!==null,ut&&(w.hatKind=ut===`party`?1:ut===`headphones`?2:0);for(let e of Ce){let t=ze[e][dt[e]]??0;w.accOn[e]=t>0&&ie(e,ut),w.accOn[e]?w.accKind[e]=t:t===0&&w.accPop[e].x<.02&&(w.accKind[e]=0)}if(w.sleepy=+(T===`sleep`||T===`loaf`||k===`sleepy`),w.purr=de,P!==N){let e=i/3.6;P=N>P?Math.min(N,P+e):Math.max(N,P-e)}w.inhale=P*P*(3-2*P),w.idleMode=B,T===`hang`?w.hangAng.target=Math.max(-42,Math.min(42,-fe*.045)):w.hangAng.target=0,w.step(i,Y,{yaw:oe,pitch:se},r);let O=w.out,ce=y.clone().normalize();we[0].target=ce.x,we[1].target=ce.y,we[2].target=ce.z;for(let e of we)for(let t=i;t>1e-6;t-=1/480)e.step(Math.min(1/480,t));let M=new _(we[0].x,we[1].x,we[2].x).normalize(),be=new _(...O.headF).clone().lerp(M,.9).normalize();x.uGaze.value[0].copy(be),x.uGaze.value[1].copy(be),x.uPupil.value=X.pupil.x,x.uSmile.value=X.smile.x,x.uBlush.value=X.blush.x;for(let e=0;e<20;e++)x.uA.value[e].fromArray(O.A,e*4),x.uB.value[e].fromArray(O.B,e*4);for(let e=0;e<4;e++)x.uPaw.value[e].fromArray(O.paw,e*4);x.uHead.value.set(O.head[0],O.head[1],O.head[2],0),x.uHeadR.value.set(...O.headR),x.uHeadF.value.set(...O.headF),x.uHeadU.value.set(...O.headU),x.uHeadS.value.set(...O.headS);for(let e=0;e<2;e++)x.uEarA.value[e].fromArray(O.earA,e*4),x.uEarB.value[e].fromArray(O.earB,e*4),x.uEarN.value[e].fromArray(O.earN,e*3),x.uCheek.value[e].fromArray(O.cheek,e*4),x.uEye.value[e].fromArray(O.eye,e*4);x.uNose.value.fromArray(O.nose),x.uMouth.value.fromArray(O.mouth),x.uLid.value.fromArray(O.lid),x.uBBody.value.fromArray(O.bBody),x.uBHead.value.fromArray(O.bHead),x.uBTail.value.fromArray(O.bTail),x.uBAll.value.fromArray(O.bAll),x.uClipY.value=O.clipY,x.uLap.value.fromArray(O.lap),x.uLidA.value=O.lidTilt,x.uLapRot.value.fromArray(O.lapRot),x.uLapBound.value.fromArray(O.lapBound),x.uScreenC.value.set(...O.screen);let Ae=T===`type`&&ft>.01&&w.idle.hover<=0&&w.idle.scratch<=0;x.uScreenB.value=(Ae?.88+.08*Math.sin(w.time*7.3)+.05*Math.sin(w.time*13.1):.9)*O.lapOpen;for(let e=0;e<6;e++)x.uHatA.value[e].fromArray(O.hatA,e*4),x.uHatB.value[e].fromArray(O.hatB,e*4);x.uHatPom.value.fromArray(O.hatPom),x.uHatOn.value=O.hatOn,x.uHatKind.value=O.hatKind,x.uBHat.value.fromArray(O.bHat),x.uAccKind.value.set(O.acc.head.kind,O.acc.eyes.kind,O.acc.neck.kind),x.uAccK.value.set(O.acc.head.k,O.acc.eyes.k,O.acc.neck.k),Ce.forEach((e,t)=>{let n=O.acc[e];for(let e=0;e<6;e++)x.uAA.value[t*6+e].fromArray(n.A,e*4),x.uAB.value[t*6+e].fromArray(n.B,e*4);for(let e=0;e<2;e++)x.uAT.value[t*2+e].fromArray(n.TC,e*4),x.uATN.value[t*2+e].fromArray(n.TN,e*4);x.uAFw.value[t].set(...n.fw),x.uABound.value[t].fromArray(n.bound)}),x.uShadow.value=T===`hang`||T===`peek`||T===`ledge`||T===`cling`?0:1;let Ne=1/0,H=-1/0,Ue=1/0,Q=-1/0,tt=(e,n)=>{let r=Z(e),i=n*t;Ne=Math.min(Ne,r.x-i),H=Math.max(H,r.x+i),Ue=Math.min(Ue,r.y-i),Q=Math.max(Q,r.y+i)};for(let e=0;e<20;e++)tt([O.A[e*4],O.A[e*4+1],O.A[e*4+2]],O.A[e*4+3]),tt([O.B[e*4],O.B[e*4+1],O.B[e*4+2]],O.B[e*4+3]);tt(O.head,28),tt([O.earB[0],O.earB[1],O.earB[2]],2),tt([O.earB[4],O.earB[5],O.earB[6]],2),O.clipY>-1e3&&(Q=Math.min(Q,0)),Ze={x:Ne,y:Ue,w:H-Ne,h:Q-Ue},Qe=Z(O.head);{let e=n===`black`||n===`tuxedo`?`rgba(255,255,255,0.75)`:`rgba(255,255,255,0.85)`;for(let n=0;n<2;n++){let r=O.whisker[n*2],i=O.whisker[n*2+1],a=i[0]*u.x+i[1]*u.y+i[2]*u.z;for(let o=0;o<3;o++){let s=ot[n*3+o];if(a<-.25||T===`sleep`){s.setAttribute(`d`,``);continue}let c=(o-1)*4.5+Math.sin(he*Math.PI*3)*3*he,l=[r[0],r[1]+(o-1)*1.6,r[2]],u=[l[0]+i[0]*20,l[1]+i[1]*20+c-1.5,l[2]+i[2]*20],d=[l[0]+i[0]*11,l[1]+i[1]*11+c*.4+1,l[2]+i[2]*11],f=Z(l),p=Z(d),m=Z(u);s.setAttribute(`d`,`M${f.x.toFixed(1)} ${f.y.toFixed(1)}Q${p.x.toFixed(1)} ${p.y.toFixed(1)} ${m.x.toFixed(1)} ${m.y.toFixed(1)}`),s.setAttribute(`stroke`,e),s.setAttribute(`stroke-width`,String(.9*t)),s.setAttribute(`opacity`,String(Math.min(1,.4+a)))}}}{let e=n===`black`||n===`tuxedo`||n===`smokey`,r=de&&k===`love`&&T!==`sleep`&&X.lid.x>.9;for(let n=0;n<2;n++){let i=st[n];if(!r){i.getAttribute(`d`)&&i.setAttribute(`d`,``);continue}let a=[O.eye[n*4],O.eye[n*4+1],O.eye[n*4+2]],o=O.eye[n*4+3],s=[a[0]-O.head[0],a[1]-O.head[1],a[2]-O.head[2]],c=Math.hypot(s[0],s[1],s[2])||1,l=(s[0]*u.x+s[1]*u.y+s[2]*u.z)/c;if(l<-.15){i.setAttribute(`d`,``);continue}let d=Z(a),f=o*t*(.55+.4*Math.max(0,l)),p=o*t*.62,m=d.y+o*t*.06;i.setAttribute(`d`,`M${(d.x-f).toFixed(1)} ${(m+p*.35).toFixed(1)}Q${d.x.toFixed(1)} ${(m-p*.95).toFixed(1)} ${(d.x+f).toFixed(1)} ${(m+p*.35).toFixed(1)}`),i.setAttribute(`stroke`,e?`rgba(255,243,250,0.92)`:`#3a2a34`),i.setAttribute(`stroke-width`,String((1.7*t).toFixed(2))),i.setAttribute(`opacity`,String(Math.min(1,.35+l)))}}if(O.hatKind===1&&O.hatOn&&w.hatPop.x>.6){let[e,n,r,i,a]=O.elastic,o=O.headS,s=o[0]*u.x+o[1]*u.y+o[2]*u.z>0,c=Z(s?e:r),l=Z(s?n:i),d=Z(a);ct.setAttribute(`d`,`M${c.x.toFixed(1)} ${c.y.toFixed(1)}Q${l.x.toFixed(1)} ${l.y.toFixed(1)} ${d.x.toFixed(1)} ${d.y.toFixed(1)}`),ct.setAttribute(`stroke-width`,String(1.1*t))}else ct.setAttribute(`d`,``);let it=Z(O.headTop);for(let e=nt.length-1;e>=0;e--){let n=nt[e];n.t+=i;let r=n.t/n.dur,a=Math.min(1,n.t/.18),o=(.4+.6*a+(a<1?0:Math.sin(Math.min(1,(n.t-.18)/.2)*Math.PI)*.12))*t,s=r<.7?1:1-(r-.7)/.3;n.node.style.transform=`translate(${(it.x+n.dx*r).toFixed(1)}px, ${(it.y-34*r*t).toFixed(1)}px) scale(${o.toFixed(3)})`,n.node.style.opacity=String(Math.max(0,s)),n.t>=n.dur&&(n.node.remove(),nt.splice(e,1))}if(T===`sleep`&&(Nt-=i,Nt<=0&&(rt(`zzz`),Nt=B===`compositor`?6:3.2)),j&&j!==`laptop`){let e,n=j===`plug`||j===`blanket`||j===`note`;if(j===`mouse`||j===`fish`||j===`yarnball`||j===`pencil`||j===`tab`||n)e=Z(O.mouthPt);else if(j===`bell`)e=Z([O.pawNear[0]+2,O.pawNear[1]+4,O.pawNear[2]]);else if(j===`sign`)e=Z([O.pawNear[0]+4,O.pawNear[1]+4,O.pawNear[2]]);else{let t=O.pawNear;e=Z([t[0]+18,0,t[2]])}let r=n&&Math.cos(o)<0?-1:1;if(lt.style.transform=`translate(${e.x.toFixed(1)}px, ${e.y.toFixed(1)}px) scale(${(t*r).toFixed(3)}, ${t})`,j===`bell`){pt=Math.max(0,pt-i);let e=lt.querySelector(`[data-bell]`);e&&(e.style.transform=`rotate(${(Math.sin(pt*48)*28*pt).toFixed(1)}deg)`)}if(j===`sign`){let e=le===`note`,t=Math.cos(o)*(e?12:40),n=e?-2:-30,r=lt.querySelector(`[data-board]`);r&&(r.style.left=`${t}px`,r.style.top=`${n}px`,r.style.transform=e?Math.cos(o)>=0?`translate(-10px,-100%)`:`translate(calc(-100% + 10px),-100%)`:`translate(-50%,-100%)`);let i=lt.querySelector(`[data-stick]`);i&&(i.style.display=e?`none`:``),lt.querySelectorAll(`[data-stick] line`).forEach(e=>{e.setAttribute(`x2`,t.toFixed(1)),e.setAttribute(`y2`,String(n+2))})}}let at=V*1e3,mt=0,ht=(e,t)=>{for(let n=0;n<e.length;n++)mt+=Math.abs(e[n]-Pt[t+n]),Ft[t+n]=e[n];return t+e.length},bt=ht(O.A,0);bt=ht(O.B,bt),bt=ht(O.paw,bt),bt=ht(O.eye,bt),bt=ht(O.earB,bt),bt=ht(O.lid,bt),bt=ht(O.mouth,bt),ht(new Float32Array([o,x.uGaze.value[0].x,x.uGaze.value[0].y,x.uGaze.value[0].z,x.uPupil.value,x.uBlush.value,x.uSmile.value,t,...Ce.flatMap(e=>[O.acc[e].kind,O.acc[e].k*40,O.acc[e].bound[0],O.acc[e].bound[1],O.acc[e].bound[2]])]),bt),mt/Math.max(i,.001)>25&&(It=at);let Ct=at-It>600,wt=Ct?.75:1;wt!==$e&&(wt===1||at-Lt>1e3)&&($e=wt,Lt=at,et(),zt=!0);let Tt=At()||w.oneShot!==null||T===`hang`||T===`fall`||w.lapSeq!==null||w.pullSeq!==null||T===`type`&&ft>.01||w.isTransitioning(),kt=Ct||!Tt?1e3/11:0,Mt=Object.values(X).every(e=>{let t=Math.abs(e.x-e.target)<.01&&Math.abs(e.v)<.05;return t&&e.snap(e.target),t}),Vt=Math.abs(pe.x-pe.target)<.005&&Math.abs(pe.v)<.02;Vt&&pe.snap(pe.target);let Ht=we.every(e=>Math.abs(e.x-e.target)<.002&&Math.abs(e.v)<.02);if(Ht&&we.forEach(e=>e.snap(e.target)),Ee=w.isSettled()&&Mt&&Vt&&Ht&&Te<0&&I<0&&jt<=0&&z===0&&he===0&&ge===0&&pt===0&&R<=0&&nt.length===0&&!xe&&Object.values($).every(e=>e===0)&&!yt&&!G&&P===N,!zt&&(mt<.004||!Ee&&at-Rt<kt))return;zt=!1,Pt.set(Ft),Rt=at;{let e=8*t,n=Ze.x-e-30*t,r=Ze.x+Ze.w+e+30*t,i=Ze.y-e,a=Math.max(Ze.y+Ze.h,14*t)+e,o=300*t,s=420*t,c=e=>Math.max(-1,Math.min(1,(e+je*t)/o*2-1)),l=e=>Math.max(-1,Math.min(1,1-(e+Me*t)/s*2));x.uQuad.value.set(c(n),l(a),c(r),l(i))}let Ut=performance.now();s.render(v,te),Bt.draws++,Bt.renderMs=performance.now()-Ut,Bt.renderScale=$e,Bt.lidUpper=Y.lidUpper,Bt.rootY=w.springs.rootY.x;for(let e=0;e<4;e++){let t=[O.paw[e*4],O.paw[e*4+1],O.paw[e*4+2]];Bt.pawX[e]=Z(t).x,Bt.pawY[e]=t[1]}Bt.quadFrac=(x.uQuad.value.z-x.uQuad.value.x)*(x.uQuad.value.w-x.uQuad.value.y)/4},Nt=1.5,Pt=new Float32Array(223),Ft=new Float32Array(223),It=0,Lt=0,Rt=0,zt=!0,Bt={draws:0,renderMs:0,renderScale:1,quadFrac:1,lidUpper:1,rootY:0,pawX:[0,0,0,0],pawY:[0,0,0,0]},Vt={stats:Bt,el:i,get pose(){return T},setPose:ht,setFacing(e){He=e},setGait(e){q=Math.abs(e)},lookAt(e){F=e?{x:e.x,y:e.y}:null},setExpression(e){k=e},setTail(e){A=e},setProp(e){j=e,mt()},setHat(e){e!==ut&&(w.squash.v+=1.4,$.earL=1,$.earR=1),ut=e,zt=!0},setAccessories(e){for(let t of Ce){let n=e?.[t]??`none`;n!==dt[t]&&(n!==`none`&&dt[t]!==`none`&&w.accPop[t].snap(0),n!==`none`&&(w.accPop[t].v+=3),dt[t]=n)}zt=!0},setBeat(e){let t=Math.max(0,e||0);if(t>0&&De===0)Oe=V,ke=null,Be=32,U=8+Math.floor(Math.random()*5);else if(t>0){let e=(V-Oe)*(De/60);Oe=V-e/(t/60)}De=t,t===0&&(K=`none`)},setIdleMotion(e){B=e,zt=!0},get settled(){return Ee},get nextEventIn(){let e=Math.min(me,B===`full`?xt:1/0,T===`sleep`?Math.min(Nt,St):1/0);if(De>0){let t=De/60,n=(V-Oe)*t;e=Math.min(e,(Math.ceil(n)-n)/t)}return Math.max(0,e)},setTyping(e){ft=Math.max(0,Math.min(1,e))},ring(){pt=.9,w.squash.v+=.8,rt(`ring`)},setSignText(e){M=e;let t=lt.querySelector(`[data-sign]`);t&&ae(t,e,le)},setSignStyle(e){if(e===le)return;le=e;let t=lt.querySelector(`[data-sign]`);t&&ae(t,M,le),zt=!0},setBreath(e){N=Math.max(0,Math.min(1,e))},setBeatStyle(e){ue=e},meow(){R=.42,w.squash.v+=.6,z=1},blink(e){Ot(e?.6:.12,e?0:.4)},earFlick(){Math.random()<.5?$.earL=1:$.earR=1},setEffort(e){let t=Math.max(-1,Math.min(1,e));w.effort=Math.abs(t)<.01?0:t},setHeadTilt(e){w.tilt=e},glanceAtViewer(e){wt(0,0,1,e)},setPeekDepth(e){w.peekDepth=Math.max(0,Math.min(1,e))},setPurring(e){de=e},emote:rt,squash(e){w.squash.v+=e*8},setHangVelocity(e){fe=e},update:Mt,hitBox(){return{...Ze}},headPoint(){return{...Qe}},on(e,t){return Ue[e].add(t),()=>Ue[e].delete(t)},setOptions(e){e.fur&&(n=e.fur,tt()),e.scale!==void 0&&(t=e.scale,et()),zt=!0},destroy(){re.dispose(),S.geometry.dispose(),s.dispose(),i.remove();for(let e of Object.keys(Ue))Ue[e].clear()}},Ht=`setPose.setFacing.setGait.lookAt.setExpression.setTail.setProp.setSignText.setHat.setAccessories.setTyping.setBeat.ring.meow.blink.setPurring.emote.squash.setHangVelocity.setOptions.setIdleMotion.setEffort.setHeadTilt.setPeekDepth.glanceAtViewer.setSignStyle.setBreath.setBeatStyle`.split(`.`),Ut=Vt;Ut.__sk=w;for(let e of Ht){let t=Ut[e];Ut[e]=(...e)=>(Ee=!1,t.apply(Ut,e))}return et(),tt(),Mt(1/60),Ut}var U=[{id:`winter`,name:`Winter`,from:[12,1],to:[1,6],back:`Back in December`,month:`Dec`,items:{head:`santa`,neck:`holiday`}},{id:`valentine`,name:`Valentine's`,from:[2,7],to:[2,14],back:`Back in February`,month:`Feb`,items:{head:`hearts`}},{id:`spring`,name:`Spring`,from:[3,20],to:[4,30],back:`Back in March`,month:`Mar`,items:{head:`daisy`}},{id:`summer`,name:`Summer`,from:[6,21],to:[8,31],back:`Back in June`,month:`Jun`,items:{head:`straw`,eyes:`sunglasses`}},{id:`halloween`,name:`Halloween`,from:[10,15],to:[10,31],back:`Back in October`,month:`Oct`,items:{head:`witch`,neck:`bandana`}}],W=(e,t)=>e.querySelector(t),G=(e,t)=>W(e,`[data-perch="${t}"]`),K=e=>W(e,`.mac`),q=(e,t)=>e+Math.random()*(t-e);function*J(e,t){e.pose(`sit`),yield t}var Ve={hero:{big:!0,fx:.66,*run(e){for(e.pose(`sit`),e.cat.setTail(`happy`),e.gaze=`viewer`,yield .5,e.cat.setExpression(`happy`),e.say(`Hi! I'm Mochi.`,2.8),e.pose(`highfive`),yield 1.4,e.pose(`sit`),e.gaze=null;;){yield q(3.5,6);let t=Math.random();t<.45?(yield*e.walkTo(q(.2,.85)),e.pose(`sit`)):t<.65?(e.pose(`groom`),yield 3,e.pose(`sit`)):t<.8?(e.pose(`loaf`),yield q(3,5),e.pose(`sit`)):(e.cat.blink(),e.cat.emote(`sparkle`))}}},desktop:{perch:`[data-perch="a"]`,fx:.2,*run(e,t){let n=G(t,`a`),r=G(t,`b`);for(e.say(`I live up here.`,2.2),yield 1.2;;)yield*e.walkTo(.92),yield*e.jumpTo(r,.3),yield*e.walkTo(.55),e.pose(`loaf`),yield 1,e.cat.setHat(`nightcap`),e.pose(`sleep`),yield 3.6,e.cat.setHat(null),e.pose(`yawn`),yield 1.4,e.pose(`stand`),yield*e.walkTo(.08),yield*e.jumpTo(n,.8),yield*J(e,1.2),yield*e.walkTo(.2),yield*J(e,.8)},key(e,t){e.place(G(t,`b`),.55),e.cat.setHat(`nightcap`),e.pose(`sleep`)}},mission:{perch:`[data-perch="dock"]`,fx:.5,*run(e,t){let n=K(t),r=G(t,`dock`);for(;;)yield*J(e,1),n.classList.add(`is-spread`),e.cat.emote(`exclaim`),yield .8,yield*e.jumpTo(G(t,`t1`),.5),e.say(`Wheee!`,1.2),yield .3,yield*e.jumpTo(G(t,`t2`),.4),yield .3,yield*e.jumpTo(G(t,`t3`),.6),e.pose(`sit`),yield .8,yield*e.jumpTo(r,.5),n.classList.remove(`is-spread`),yield*J(e,1.6)},cleanup(e,t){K(t).classList.remove(`is-spread`)},key(e,t){K(t).classList.add(`is-spread`),e.place(G(t,`t2`),.4)}},care:{fx:.78,*run(e,t){let n=K(t);for(;;)yield*J(e,1.2),n.classList.remove(`is-done`),n.classList.add(`is-remind`),e.say(`Sip with me?`,2,`water`),e.cat.setExpression(`happy`),yield 1.4,e.cat.setProp(`glass`),e.pose(`drink`),yield 2.6,e.cat.emote(`water`),n.classList.add(`is-done`),e.pose(`sit`),yield .6,e.cat.setProp(null),e.cat.setExpression(`love`),e.cat.emote(`heart`),yield 1.4,n.classList.remove(`is-remind`,`is-done`),e.cat.setExpression(`neutral`),yield 2.2},cleanup(e,t){K(t).classList.remove(`is-remind`,`is-done`)},key(e,t){K(t).classList.add(`is-remind`),e.cat.setProp(`glass`),e.pose(`drink`)}},limits:{fx:.08,*run(e,t){let n=K(t),r=G(t,`w`),i=W(t,`[data-tab]`),a=W(t,`[data-box]`);for(;;){n.classList.remove(`is-closed`),e.pose(`sit`),e.cat.setProp(`sign`);for(let t=5;t>0;t--)e.cat.setSignText(`0:0${t}`),yield .8;e.cat.setSignText(`0:00`),e.cat.setExpression(`annoyed`),e.say(`Time's up!`,1.6,`guard`),yield .9,e.cat.setProp(null);let t=r.getBoundingClientRect(),o=(i.getBoundingClientRect().right-t.left-14)/t.width;yield*e.walkTo(o-.06),e.face(1),e.pose(`crouch`),yield .3,e.pose(`present`),yield .35,He(n,i,a),n.classList.add(`is-closed`),yield .9,e.pose(`sit`),e.cat.setExpression(`smug`),e.cat.emote(`sparkle`),yield 2.2,e.cat.setExpression(`neutral`),yield*e.walkTo(.08),yield*J(e,.6)}},cleanup(e,t){K(t).classList.remove(`is-closed`)},key(e,t){K(t).classList.add(`is-closed`),e.cat.setProp(`sign`),e.cat.setSignText(`0:00`)}},music:{fx:.55,*run(e,t){let n=K(t);for(e.pose(`sit`),yield .6,n.classList.add(`is-playing`),e.cat.setHat(`headphones`),yield .4,e.cat.setBeat(96),e.cat.setExpression(`happy`),e.say(`This one's good.`,2.2);;)yield 2.5,e.cat.emote(`music`)},cleanup(e,t){K(t).classList.remove(`is-playing`)},key(e,t){K(t).classList.add(`is-playing`),e.cat.setHat(`headphones`)}},calls:{fx:.4,*run(e,t){let n=K(t);for(;;)yield*J(e,1.6),n.classList.add(`is-call`),yield .5,e.cat.setExpression(`surprised`),e.cat.emote(`exclaim`),yield .6,e.cat.setExpression(`neutral`),e.say(`Oh! I'll wait over here.`,2),yield*e.walkTo(.97,34),e.face(-1),e.pose(`loaf`),yield 3.4,n.classList.remove(`is-call`),yield .6,e.cat.setExpression(`happy`),yield*e.walkTo(.4)},cleanup(e,t){K(t).classList.remove(`is-call`)},key(e,t){K(t).classList.add(`is-call`),e.place(G(t,`w`),.97),e.pose(`loaf`)}},helper:{fx:.1,*run(e,t){let n=K(t),r=G(t,`w`),i=W(t,`[data-pick]`),a=W(t,`.ask`);for(;;){yield*J(e,1),n.classList.add(`is-ask`),yield .4;let t=a.getBoundingClientRect();e.gaze={x:t.left+scrollX+t.width/2,y:t.top+scrollY+t.height/2},yield 1.2,e.cat.emote(`idea`),e.gaze=null,yield .5;let o=r.getBoundingClientRect(),s=i.getBoundingClientRect(),c=(s.left+s.width/2-o.left)/o.width;yield*e.walkTo(c-.06),e.face(1),e.pose(`crouch`),yield .35,e.pose(`present`),yield .3,i.classList.add(`is-picked`),e.cat.setExpression(`smug`),e.say(`This one: warm, and 4.8★`,3.2),yield 3.4,i.classList.remove(`is-picked`),n.classList.remove(`is-ask`),e.cat.setExpression(`happy`),e.pose(`stand`),yield*e.walkTo(.1),yield 1}},cleanup(e,t){K(t).classList.remove(`is-ask`),W(t,`[data-pick]`).classList.remove(`is-picked`)},key(e,t){K(t).classList.add(`is-ask`),W(t,`[data-pick]`).classList.add(`is-picked`),e.place(G(t,`w`),.44),e.pose(`present`)}},typing:{fx:.72,*run(e,t){let n=K(t),r=W(t,`[data-field]`);for(;;){r.textContent=``,n.classList.remove(`is-ready`),e.pose(`sit`),yield .8,e.cat.setProp(`laptop`),e.pose(`type`),yield .9,n.classList.add(`is-typing`),e.cat.setTyping(.9);for(let e of Array.from(`Yes! See you at 7 🎉`))r.textContent+=e,yield e===` `?.12:.085;e.cat.setTyping(0),n.classList.remove(`is-typing`),n.classList.add(`is-ready`),yield .3,e.gaze=`viewer`,e.cat.setExpression(`happy`),e.say(`Send it?`,2.6),yield 3,e.gaze=null,yield .6}},cleanup(e,t){K(t).classList.remove(`is-ready`,`is-typing`),W(t,`[data-field]`).textContent=``},key(e,t){K(t).classList.add(`is-ready`),W(t,`[data-field]`).textContent=`Yes! See you at 7 🎉`,e.cat.setProp(`laptop`),e.pose(`type`)}},gremlin:{fx:.24,*run(e,t){let n=K(t),r=G(t,`w`),i=G(t,`edge`),a=W(t,`[data-knock]`),o=W(t,`[data-gift]`),s=W(t,`[data-undo]`);for(;;){n.classList.remove(`is-knocked`,`is-shoved`,`is-undo-on`),s.classList.remove(`is-press`),e.cat.setExpression(`neutral`),yield*J(e,1);let t=r.getBoundingClientRect(),c=a.getBoundingClientRect();yield*e.walkTo((c.left-t.left)/t.width-.07),e.face(1),e.pose(`sit`),e.cat.setExpression(`smug`),e.gaze=`viewer`,yield .9,e.gaze=null,e.pose(`swipe`),yield*e.strike(.8),n.classList.add(`is-knocked`),yield .7,e.pose(`sit`),e.say(`Oops.`,1.4),e.cat.emote(`sparkle`),yield 1.6,e.cat.setExpression(`neutral`),yield*e.walkTo(.97),yield*e.jumpTo(i,.5,`cling`),e.face(-1),yield .25,e.cat.setEffort?.(-1),e.cat.setExpression(`annoyed`),yield .3,n.classList.add(`is-shoved`),yield 1.1,e.cat.setEffort?.(0),e.cat.setExpression(`smug`),n.classList.add(`is-undo-on`),e.cat.glanceAtViewer?.(1.2),yield 1.3,yield*e.jumpTo(r,.72),e.pose(`sit`),yield .5,s.classList.add(`is-press`),yield .3,n.classList.remove(`is-shoved`,`is-undo-on`),e.cat.setExpression(`happy`),yield .9,s.classList.remove(`is-press`),e.cat.setProp(`mouse`),e.cat.setTail(`happy`),yield*e.walkTo(.3,60),e.face(1),e.pose(`crouch`),yield .3,e.cat.setProp(null),We(e,n,r,o),o.classList.add(`is-on`),e.pose(`sit`),e.cat.setExpression(`love`),e.gaze=`viewer`,e.say(`For you!`,2),e.cat.emote(`heart`),yield 2.6,o.classList.remove(`is-on`),e.gaze=null,e.cat.setTail(`calm`),n.classList.remove(`is-knocked`),n.classList.add(`is-back`),yield 1.2,n.classList.remove(`is-back`)}},cleanup(e,t){K(t).classList.remove(`is-knocked`,`is-shoved`,`is-undo-on`,`is-back`),W(t,`[data-gift]`).classList.remove(`is-on`),W(t,`[data-undo]`).classList.remove(`is-press`)},key(e,t){K(t).classList.add(`is-knocked`,`is-shoved`,`is-undo-on`),e.place(G(t,`w`),.4),e.cat.setExpression(`smug`)}},focus:{fx:.42,*run(e,t){let n=K(t),r=W(t,`[data-session]`),i=1500,a=i,o=function*(t,n){for(let r=0;r<t;r+=.25)a=Math.max(0,a-n*.25),e.pill(Y(a),`focus`,a/i),yield .25};for(;;)a=1499,n.classList.remove(`is-break`,`is-pop`,`is-swatted`),r.textContent=`Session 2 of 4`,e.pill(Y(a),`focus`,1),yield*e.walkTo(.42),e.face(1),e.pose(`loaf`),e.cat.setTail(`wrap`),yield*o(1.5,90),e.gaze=`viewer`,e.cat.blink(!0),yield*o(1.5,90),e.gaze=null,n.classList.add(`is-pop`),yield*o(.75,90),e.pose(`sit`),e.cat.setExpression(`annoyed`),e.cat.emote(`exclaim`),yield*o(.5,90),yield*e.walkTo(.98),e.face(1),e.pose(`swipe`),yield*e.strike(.8),n.classList.add(`is-swatted`),e.say(`Instagram can wait, I'm sitting right here.`,2.8,`guard`),yield .7,e.pose(`sit`),e.cat.setExpression(`smug`),yield*o(1.75,90),n.classList.remove(`is-pop`,`is-swatted`),e.cat.setExpression(`neutral`),yield*e.walkTo(.42),e.pose(`loaf`),yield*o(2.5,a/2.5),n.classList.add(`is-break`),r.textContent=`Break · 5 min`,e.pill(`5:00`,`break`,1),e.pose(`sit`),e.cat.setExpression(`happy`),e.cat.setTail(`happy`),e.say(`Break time! Stretch with me?`,2.4,`care`),yield 1.4,e.pose(`stretch`),yield 2.4,e.pose(`beg`),e.move(`up`,.8),e.cat.emote(`sparkle`),yield 1.4,e.move(`none`,.6),e.pose(`sit`),e.cat.emote(`heart`),e.pill(`4:52`,`break`,.97),yield 2.2,e.cat.setTail(`calm`)},cleanup(e,t){K(t).classList.remove(`is-break`,`is-pop`,`is-swatted`),W(t,`[data-session]`).textContent=`Session 2 of 4`},key(e){e.pose(`loaf`),e.pill(`18:42`,`focus`,.75)}},breathe:{perch:`[data-perch="seat"]`,fx:.5,*run(e,t){let n=K(t),r=W(t,`[data-cue]`),i=W(t,`[data-round]`),a=[[`Breathe in…`,`in`],[`Hold…`,`hold-in`],[`Breathe out…`,`out`],[`Hold…`,`hold-out`]];e.face(1),e.pose(`sit`),e.cat.setTail(`wrap`),e.cat.setExpression(`sleepy`),e.gaze=`viewer`,r.textContent=`Follow my belly`,i.textContent=`1/4`,e.say(`Let's breathe together.`,2.4,`care`),yield 2.6;for(let t=0;;t++){for(let[o,s]of a)r.textContent=o,i.textContent=`${t%4+1}/4`,n.dataset.breath=s,Ue(n),s===`in`&&e.move(`in`,4),s===`out`&&e.move(`out`,4),yield 4;t%4==3&&(e.move(`none`,1),delete n.dataset.breath,r.textContent=`Feel a little lighter?`,e.cat.setExpression(`love`),e.cat.emote(`heart`),yield 3,e.cat.setExpression(`sleepy`))}},cleanup(e,t){let n=K(t);delete n.dataset.breath,n.classList.remove(`is-arc`),W(t,`[data-cue]`).textContent=`Follow my belly`,W(t,`[data-round]`).textContent=`1/4`},key(e,t){K(t).dataset.breath=`in`,W(t,`[data-cue]`).textContent=`Breathe in…`,e.cat.setExpression(`sleepy`),e.move(`in`,0)}},kit:{perch:`[data-perch="stretch"]`,fx:.86,*run(e,t){let n={stretch:G(t,`stretch`),remind:G(t,`remind`),mood:G(t,`mood`)},r={stretch:.86,remind:.78,mood:.78},i=[`stretch`,`remind`,`mood`],a=e=>{let t=e.getBoundingClientRect();return t.top>70&&t.top<innerHeight-80},o=0;for(;;){let s=i[o%3];a(n[s])||(s=i.find(e=>a(n[e]))??s),o=i.indexOf(s)+1,e.perch!==n[s]&&(yield*e.goTo(n[s],r[s])),s===`stretch`?yield*Ge(e,t):s===`remind`?yield*Ke(e,t):yield*Je(e,t),yield .6}},cleanup(e,t){t.querySelectorAll(`.is-on, .is-done`).forEach(e=>e.classList.remove(`is-on`,`is-done`))},key(e,t){W(t,`[data-note]`).classList.add(`is-on`),t.querySelectorAll(`[data-moves] li`)[3]?.classList.add(`is-on`),t.querySelectorAll(`[data-faces] .mood-pick`)[4]?.classList.add(`is-on`),e.cat.setProp(`sign`),e.cat.setSignText(`💊`)}},wardrobe:{fx:.5,*run(e,t){let n=K(t),r=0,i=0;for(;;){if(e.now-e.pickedAt<7){Qe(e,n,{fur:e.fur,theme:`strawberry`,acc:e.acc}),yield .3;continue}for(let t=0;t<3;t++){let i=Ye[r++%Ye.length];if(Qe(e,n,i),e.pose(t===1?`beg`:`sit`),e.cat.setTail(`happy`),e.cat.emote(`sparkle`),e.cat.squash(.2),yield*X(e,2.4),e.now-e.pickedAt<7)break}if(e.now-e.pickedAt<7)continue;let t=Xe[i++%Xe.length];Qe(e,n,t),e.pose(`highfive`),e.cat.setExpression(`happy`),e.say(t.line,2.4),yield*X(e,1.5),e.pose(`sit`),yield*X(e,2.2),e.cat.setExpression(`neutral`)}},cleanup(e,t){let n=K(t);delete n.dataset.skin,delete n.dataset.season},key(e,t){Qe(e,K(t),Xe[0])}},room:{fx:.8,*run(e){for(e.pose(`sit`),yield .4,e.face(-1),e.pose(`crouch`),yield .3,e.pose(`present`),e.say(`This is my room.`,2.6),yield 3,e.pose(`sit`),e.gaze=`viewer`;;)yield q(4,7),e.pose(`groom`),yield 3,e.pose(`sit`)}},pricing:{perch:`[data-perch="pro"]`,fx:.1,*run(e){for(e.face(1),e.pose(`crouch`),yield .3,e.pose(`present`),e.cat.setExpression(`happy`),e.say(`Get Pro, and I can talk!`,3),yield 3.4;;)e.pose(`sit`),e.gaze=`viewer`,yield q(4,6),e.pose(`crouch`),yield .3,e.pose(`present`),e.cat.emote(`sparkle`),yield 2.4},key(e){e.pose(`present`)}},faq:{fx:.9,*run(e){for(e.pose(`sit`),e.cat.setTail(`question`),e.cat.emote(`question`),e.say(`Ask away.`,2.2);;)yield q(5,8),e.cat.emote(`question`)}},contact:{fx:.86,*run(e){for(e.cat.setProp(`heart`),e.pose(`beg`),e.cat.setExpression(`love`),e.cat.setTail(`happy`),e.say(`Write to us!`,2.6);;)yield 3.2,e.cat.emote(`heart`)},key(e){e.cat.setProp(`heart`),e.pose(`beg`)}},footer:{fx:.5,*run(e){for(e.pose(`loaf`),e.cat.setExpression(`sleepy`),yield 1.2,e.cat.setHat(`nightcap`),e.pose(`sleep`);;)yield 10},key(e){e.cat.setHat(`nightcap`),e.pose(`sleep`)}}};function He(e,t,n){let r=e.getBoundingClientRect(),i=t.getBoundingClientRect(),a=n.getBoundingClientRect(),o=t.cloneNode(!0);o.classList.add(`ghost-tab`),o.removeAttribute(`data-tab`),o.style.left=`${i.left-r.left}px`,o.style.top=`${i.top-r.top}px`,o.style.width=`${i.width}px`,o.style.height=`${i.height}px`,e.appendChild(o);let s=a.left+a.width/2-(i.left+i.width/2),c=a.top+a.height*.3-(i.top+i.height/2),l=o.animate([{transform:`translate(0, 0) rotate(0) scale(1)`,opacity:1},{transform:`translate(${s*.45}px, ${c*.05-24}px) rotate(-12deg) scale(0.9)`,opacity:1,offset:.35},{transform:`translate(${s}px, ${c}px) rotate(28deg) scale(0.45)`,opacity:.2}],{duration:820,easing:`cubic-bezier(.45,0,.7,1)`});l.onfinish=()=>{o.remove(),n.classList.remove(`is-bump`),n.offsetWidth,n.classList.add(`is-bump`)}}var Y=e=>{let t=Math.max(0,Math.round(e));return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`};function*X(e,t){let n=e.now;yield()=>e.now-n>=t||e.pickedAt>n}function Ue(e){e.classList.remove(`is-arc`),e.offsetWidth,e.classList.add(`is-arc`)}function We(e,t,n,r){if(!r.firstChild){let e=a.mouse;r.innerHTML=`<svg viewBox="0 0 ${e.w} ${e.h}" aria-hidden="true">${e.body}</svg>`}let i=t.getBoundingClientRect(),o=n.getBoundingClientRect(),s=e.x-scrollX-i.left+e.facing*34*e.scale;r.style.left=`${s/i.width*100}%`,r.style.top=`${(o.top-i.top)/i.height*100}%`}function*Ge(e,t){let n=[...t.querySelectorAll(`[data-moves] li`)],r=e=>n.forEach((t,n)=>t.classList.toggle(`is-on`,n===e));e.face(-1),e.pose(`sit`),e.cat.setExpression(`happy`),e.cat.setTail(`happy`),e.say(`Stretch with me! Five little moves.`,2.2,`care`),e.pose(`stretch`),yield 2.4,e.pose(`sit`),r(0);for(let t=0;t<3;t+=.05){let n=t/3*Math.PI*2;e.gaze={x:e.x+Math.cos(n)*220,y:e.y-90*e.scale+Math.sin(n)*160},yield .05}e.gaze=`viewer`,r(1);for(let t=0;t<2;t++)e.move(`shrug`,.5),e.cat.squash(-.3),yield .75,e.move(`none`,.35),e.cat.squash(.35),yield .6;r(2),e.pose(`beg`);for(let t=0;t<2;t++)e.move(`wl`,.45),yield .55,e.move(`wr`,.45),yield .55;r(3),e.move(`up`,.8),e.cat.emote(`sparkle`),yield 1.6,e.move(`none`,.5),e.pose(`sit`),yield .5,r(4),e.move(`l`,.9),yield 1.2,e.move(`r`,.9),yield 1.2,e.move(`none`,.7),yield .8,r(-1),e.cat.setExpression(`love`),e.cat.emote(`heart`),e.say(`Nice! All loose and warm.`,2,`care`),yield 2.4,e.gaze=null,e.cat.setExpression(`neutral`),e.cat.setTail(`calm`)}function*Ke(e,t){let n=W(t,`[data-note]`);e.face(-1),e.pose(`sit`),e.cat.setProp(`sign`),e.cat.setSignText(`💊`),n.classList.add(`is-on`),e.say(`Take your vitamins!`,2.6,`care`),yield 2.8,n.classList.add(`is-done`),yield .4,e.cat.setProp(null),e.cat.setExpression(`happy`),e.cat.emote(`sparkle`),yield 1.6,n.classList.remove(`is-on`,`is-done`),e.cat.setExpression(`neutral`)}var qe=[[4,`Yay! Me too.`],[3,`Good. I'm glad.`],[2,`Okay is okay. I'm right here.`]];function*Je(e,t){let n=[...t.querySelectorAll(`[data-faces] .mood-pick`)],[r,i]=qe[Math.floor(Math.random()*qe.length)];e.face(-1),e.pose(`sit`),e.cat.setTail(`question`),e.gaze=`viewer`,e.say(`How are you feeling today?`,2.2),yield 2.2,n[r].classList.add(`is-on`),e.cat.setExpression(r===2?`happy`:`love`),e.cat.emote(`heart`),e.cat.setTail(`happy`),e.say(i,2.2),yield 2.8,n[r].classList.remove(`is-on`),e.gaze=null,e.cat.setExpression(`neutral`),e.cat.setTail(`calm`)}var Ye=[{fur:`ginger`,theme:`strawberry`,acc:{head:`bow`}},{fur:`calico`,theme:`matcha`,acc:{head:`crown`,neck:`collar`}},{fur:`grey`,theme:`sky`,acc:{eyes:`glasses`,neck:`scarf`}},{fur:`cream`,theme:`peach`,acc:{head:`beanie`}},{fur:`black`,theme:`lavender`,acc:{head:`bow`,neck:`collar`}},{fur:`mocha`,theme:`strawberry`,acc:{head:`crown`,eyes:`glasses`}},{fur:`snowball`,theme:`sky`,acc:{head:`beanie`,neck:`scarf`}},{fur:`smokey`,theme:`matcha`,acc:{eyes:`glasses`,neck:`collar`}},{fur:`peach`,theme:`peach`,acc:{head:`crown`}},{fur:`lilac`,theme:`lavender`,acc:{head:`bow`,eyes:`glasses`}},{fur:`tuxedo`,theme:`midnight`,acc:{neck:`scarf`}}],Z={winter:{fur:`snowball`,theme:`sky`,line:`Ho ho ho!`},valentine:{fur:`ginger`,theme:`strawberry`,line:`Be mine?`},spring:{fur:`calico`,theme:`matcha`,line:`Smells like spring.`},summer:{fur:`peach`,theme:`peach`,line:`Sun's out!`},halloween:{fur:`black`,theme:`midnight`,line:`Boo!`}},Xe=U.map(e=>({...Z[e.id],acc:e.items,season:e.id})),Ze={winter:`Winter`,valentine:`Valentine's`,spring:`Spring`,summer:`Summer`,halloween:`Halloween`};function Qe(e,r,i){let a={head:`none`,eyes:`none`,neck:`none`,...i.acc};r.dataset.skin=i.theme;let o=e=>r.querySelector(`[data-slot="${e}"]`);o(`fur`).textContent=n.find(e=>e.id===i.fur)?.label??``;for(let e of[`head`,`eyes`,`neck`]){let n=o(e);n.textContent=t[a[e]]??`None`,n.classList.toggle(`is-none`,a[e]===`none`)}i.season?(r.dataset.season=i.season,r.querySelector(`[data-season-when]`).textContent=Ze[i.season],r.querySelector(`[data-season-what]`).textContent=Object.values(i.acc).map(e=>t[e]).join(` + `)):delete r.dataset.season,e.showFur(i.fur),e.wear(i.acc)}var Q=(e,t,n)=>e<t?t:e>n?n:e,$e=(e,t,n)=>e+(t-e)*n,et=class{constructor(e){S(this,`gen`,void 0),S(this,`wait`,0),S(this,`until`,null),S(this,`done`,!1),this.gen=e}step(e){if(this.done||this.wait>0&&(this.wait-=e,this.wait>0))return;if(this.until){if(!this.until())return;this.until=null}let t=this.gen.next();if(t.done){this.done=!0;return}typeof t.value==`number`?this.wait=t.value:this.until=t.value}cancel(){this.done=!0;try{this.gen.return()}catch{}}get nextIn(){return this.done?1/0:this.wait>0?this.wait:this.until?this.until()?0:.1:0}},tt=`setPose.setFacing.setGait.lookAt.setExpression.setTail.setProp.setSignText.setHat.setAccessories.setTyping.setBeat.ring.meow.blink.setPurring.emote.squash.setHangVelocity.setOptions.setIdleMotion.setEffort.setHeadTilt.setPeekDepth.glanceAtViewer.setSignStyle.setBreath.setBeatStyle`.split(`.`),nt={none:[1,1,0],in:[1.1,1.15,0],out:[.97,.92,0],shrug:[.97,1.07,0],up:[.95,1.12,0],l:[1,1,-9],r:[1,1,9],wl:[1,1,-3],wr:[1,1,3]},rt={head:`none`,eyes:`none`,neck:`none`},it=e=>e*e*(3-2*e),at=class{get scale(){return this.R*this.k}constructor(){S(this,`cat`,void 0),S(this,`R`,void 0),S(this,`small`,void 0),S(this,`k`,void 0),S(this,`kTarget`,void 0),S(this,`mobile`,void 0),S(this,`fur`,`ginger`),S(this,`acc`,{...rt}),S(this,`pickedAt`,-99),S(this,`x`,0),S(this,`y`,0),S(this,`facing`,1),S(this,`perch`,null),S(this,`dx`,0),S(this,`gaze`,null),S(this,`air`,null),S(this,`walk`,null),S(this,`layer`,void 0),S(this,`bubble`,void 0),S(this,`bubbleText`,void 0),S(this,`bubbleUntil`,0),S(this,`clock`,0),S(this,`mouse`,null),S(this,`hovering`,!1),S(this,`lastPet`,-9),S(this,`petUntil`,0),S(this,`task`,null),S(this,`stopName`,``),S(this,`stopEl`,null),S(this,`candidate`,``),S(this,`candidateSince`,0),S(this,`scrollV`,0),S(this,`lastScroll`,{y:scrollY,t:performance.now()}),S(this,`surprisedAt`,-9),S(this,`strikeHandlers`,new Set),S(this,`mv`,{from:[1,1,0],to:[1,1,0],t:1,T:1}),S(this,`pillEl`,null),S(this,`wakeFn`,()=>{}),S(this,`rigAcc`,0),S(this,`rigDirty`,!0),S(this,`motionUntil`,0),S(this,`lastRigUpdate`,0),S(this,`lastDrawAt`,0),S(this,`draws`,0),S(this,`lastLook`,``),S(this,`lastTf`,``),S(this,`lastBubbleTf`,``),S(this,`inView`,new Set),S(this,`ioReady`,!1),S(this,`pickCache`,{at:-1,el:null}),S(this,`furShown`,`ginger`);let e=innerWidth;this.mobile=e<720,this.R=e<480?.6:e<720?.66:e<1100?.82:1;let t=e<480?.44:e<720?.5:e<1100?.58:.66;this.small=t/this.R,this.k=this.kTarget=this.small,this.cat=Be({fur:this.fur,scale:this.R}),this.cat.el.style.transformOrigin=`0 0`,this.layer=document.getElementById(`cat-layer`),this.bubble=document.getElementById(`bubble`),this.bubbleText=this.bubble.querySelector(`.bubble__text`),this.layer.insertBefore(this.cat.el,this.bubble);let n=this.cat;for(let e of tt){let t=n[e];if(typeof t!=`function`)continue;let r=e!==`lookAt`;n[e]=(...e)=>(this.rigDirty=!0,r&&(this.motionUntil=performance.now()+1e3),this.wakeFn(),t.apply(this.cat,e))}this.cat.on(`done`,e=>{e===`land`&&this.cat.setPose(`stand`)})}point(e,t){let n=e.getBoundingClientRect();return{x:n.left+scrollX+Q(t,0,n.width),y:n.top+scrollY+1}}fx(e,t){let n=e.getBoundingClientRect().width,r=Math.min(n/2,34*this.scale*1.6);return Q(n*t,r,n-r)}get onScreen(){let e=this.y-scrollY;return e>-40&&e<innerHeight+160}face(e){let t=e<0?-1:1;t!==this.facing&&(this.facing=t,this.cat.setFacing(t))}pose(e){this.cat.setPose(e)}place(e,t){this.air=null,this.walk=null,this.perch=e,this.dx=this.fx(e,t);let n=this.point(e,this.dx);this.x=n.x,this.y=n.y,this.cat.setGait(0)}*walkTo(e,t=70){if(!this.perch)return;let n=this.fx(this.perch,e);Math.abs(n-this.dx)<4||(this.face(n-this.dx),this.walk={to:n,speed:t*this.scale*1.9},this.cat.setPose(`walk`),this.cat.setGait(this.walk.speed/this.k),yield()=>!this.walk,this.cat.setGait(0),this.cat.setPose(`stand`),yield .12)}*jumpTo(e,t,n=`land`){let r=this.fx(e,t),i=this.point(e,r);this.walk=null,this.face(i.x-this.x),this.cat.setPose(`crouch`),yield .22;let a=Math.hypot(i.x-this.x,i.y-this.y),o=Math.max(0,this.y-i.y);this.air={kind:`arc`,x0:this.x,y0:this.y,t:0,T:Q(.34+a/1500,.4,.85),h:30*this.scale+o+a*.12,to:e,dx:r,land:n},this.cat.setPose(`pounce`),yield()=>!this.air,yield .32}*dropTo(e,t){let n=this.fx(e,t),r=this.point(e,n);this.walk=null;let i=Math.min(r.y-60,scrollY-30);this.x=r.x,this.y=i,this.air={kind:`drop`,x0:r.x,y0:i,t:0,T:Q(Math.sqrt((r.y-i)/1400),.3,.7),h:0,to:e,dx:n,land:`land`},this.cat.setPose(`fall`),this.cat.setExpression(`surprised`),yield()=>!this.air,this.cat.setExpression(`happy`),yield .3}*goTo(t,n){if(e){this.place(t,n),this.cat.setPose(`sit`);return}if(this.perch===t&&!this.air){yield*this.walkTo(n);return}let r=this.point(t,this.fx(t,n)),i=Math.hypot(r.x-this.x,r.y-this.y),a=r.y-scrollY>0&&r.y-scrollY<innerHeight;!this.mobile&&this.perch&&this.onScreen&&a&&i<1e3?yield*this.jumpTo(t,n):yield*this.dropTo(t,n)}say(e,t=2.6,n=`say`){this.bubbleText.textContent=e,this.bubble.dataset.tone=n,this.bubble.classList.add(`is-on`),this.bubbleUntil=this.clock+t}hush(){this.bubble.classList.remove(`is-on`),this.bubbleUntil=0}get now(){return this.clock}move(t,n=.9){let r=this.moveNow();this.mv={from:r,to:[...nt[t]],t:0,T:Math.max(.01,e?.01:n)}}moveNow(){let{from:e,to:t,t:n,T:r}=this.mv,i=it(Q(n/r,0,1));return[$e(e[0],t[0],i),$e(e[1],t[1],i),$e(e[2],t[2],i)]}pill(e,t=`focus`,n=1){if(!this.pillEl){let e=document.createElement(`div`);e.className=`focus-pill`,e.innerHTML=`<svg viewBox="0 0 20 20" aria-hidden="true"><circle class="track" cx="10" cy="10" r="8"/><circle class="bar" cx="10" cy="10" r="8"/></svg><span></span>`,this.layer.appendChild(e),this.pillEl=e}let r=this.pillEl;if(e===null){r.classList.remove(`is-on`);return}r.dataset.phase=t,r.querySelector(`span`).textContent=e;let i=2*Math.PI*8,a=r.querySelector(`.bar`);a.style.strokeDasharray=`${i}`,a.style.strokeDashoffset=`${i*(1-Q(n,0,1))}`,r.classList.add(`is-on`)}wear(e){this.cat.setAccessories(e?{...rt,...e}:this.acc)}setAcc(e){this.acc={...e},this.cat.setAccessories(this.acc)}*strike(e=.7){let t=!1,n=()=>{t=!0};this.strikeHandlers.add(n);let r=this.clock;yield()=>t||this.clock-r>e,this.strikeHandlers.delete(n)}reset(){let e=this.cat;e.setHat(null),e.setProp(null),e.setBeat(0),e.setTyping(0),e.setPurring(!1),e.setExpression(`neutral`),e.setTail(`calm`),e.setGait(0),e.setEffort?.(0),e.setHeadTilt?.(0),e.setAccessories(this.acc),this.showFur(this.fur),this.move(`none`,.4),this.pill(null),e.pose!==`sit`&&e.pose!==`stand`&&e.setPose(e.pose===`cling`||e.pose===`ledge`?`fall`:`stand`),this.gaze=null,this.hush()}showFur(e){e!==this.furShown&&(this.furShown=e,this.cat.setOptions({fur:e}))}setFur(e){this.fur=e,this.showFur(e)}box(){let e=this.cat.hitBox(),t=this.k;return{x:e.x*t,y:e.y*t,w:e.w*t,h:e.h*t}}stops(){return[...document.querySelectorAll(`[data-stop]`)]}pickStop(){let e=performance.now();if(this.ioReady&&e-this.pickCache.at<100)return this.pickCache.el;let t=this.measureStop();return this.pickCache={at:e,el:t},t}measureStop(){let e=innerHeight,t=document.querySelector(`[data-stop="footer"]`);if(t&&t.getBoundingClientRect().bottom<=e+6)return t;let n=null,r=1/0;for(let t of this.ioReady?this.inView:this.stops()){if(t.dataset.stop===`footer`)continue;let i=t.getBoundingClientRect();if(i.bottom<90||i.top>e-90)continue;let a=ot(t).getBoundingClientRect(),o=Math.abs(a.top+Math.min(a.height,240)/2-e*.45);o<r&&(r=o,n=t)}return n}enter(t){let n=t.dataset.stop,r=Ve[n];if(!r)return;this.leave(),this.kTarget=r.big?1:this.small,this.stopName=n,this.stopEl=t,t.classList.add(`is-here`);let i=ot(t,r.perch),a=this;if(e){this.place(i,r.fx),this.cat.setPose(`sit`),r.key?.(this,t);return}this.task=new et((function*(){yield*a.goTo(i,r.fx),yield*r.run(a,t)})())}leave(){this.task?.cancel(),this.task=null,this.stopEl&&(Ve[this.stopName]?.cleanup?.(this,this.stopEl),this.stopEl.classList.remove(`is-here`)),this.stopEl=null,this.stopName=``,this.reset()}hit(e){let t=this.box();return e.x>=this.x+t.x-12&&e.x<=this.x+t.x+t.w+12&&e.y>=this.y+t.y-12&&e.y<=this.y+t.y+t.h+12}pet(e){if(this.clock-this.lastPet<(e?.5:1.6))return;this.lastPet=this.clock;let t=this.cat;t.setExpression(`love`),t.setPurring(!0),t.emote(`heart`),e&&(setTimeout(()=>t.emote(`heart`),260),t.meow(),t.squash(.25)),this.petUntil=this.clock+2.2}bindInput(){addEventListener(`pointermove`,e=>{if(e.pointerType!==`mouse`)return;this.mouse={x:e.pageX,y:e.pageY};let t=this.hit(this.mouse);t&&!this.hovering&&this.pet(!1),t!==this.hovering&&(this.hovering=t,document.body.classList.toggle(`paw-hover`,t)),this.wakeFn()},{passive:!0}),addEventListener(`pointerdown`,e=>{this.hit({x:e.pageX,y:e.pageY})&&this.pet(!0)},{passive:!0}),addEventListener(`scroll`,()=>{this.wakeFn();let t=performance.now(),n=Math.max(1,t-this.lastScroll.t),r=(scrollY-this.lastScroll.y)/n*1e3;this.scrollV=$e(this.scrollV,r,.5),this.lastScroll={y:scrollY,t},Math.abs(this.scrollV)>3600&&this.clock-this.surprisedAt>2.5&&this.onScreen&&!this.air&&!e&&(this.surprisedAt=this.clock,this.cat.setExpression(`surprised`),this.cat.setTail(`puffed`),this.cat.emote(`exclaim`),setTimeout(()=>{this.cat.setExpression(`neutral`),this.cat.setTail(`calm`)},900))},{passive:!0})}frame(t){let n=Math.min(.05,t);this.clock+=t,performance.now()-this.lastScroll.t>120&&(this.scrollV*=.8**(t*60),Math.abs(this.scrollV)<1&&(this.scrollV=0));let r=this.pickStop(),i=r?.dataset.stop??``;if(i!==this.candidate&&(this.candidate=i,this.candidateSince=this.clock),r&&i!==this.stopName&&this.clock-this.candidateSince>(e?.15:.28)&&Math.abs(this.scrollV)<2400&&!this.air&&this.enter(r),this.task?.step(t),this.air){let e=this.air;e.t+=n;let t=Math.min(1,e.t/e.T),r=this.point(e.to,e.dx);e.kind===`arc`?(this.x=$e(e.x0,r.x,t),this.y=$e(e.y0,r.y,t)-e.h*4*t*(1-t),t>.6&&this.cat.pose===`pounce`&&e.T>.6&&this.cat.setPose(`fall`)):(this.x=r.x,this.y=$e(e.y0,r.y,t*t)),t>=1&&(this.air=null,this.perch=e.to,this.dx=e.dx,this.cat.setPose(e.land),this.cat.squash(.3))}else if(this.perch){if(this.walk){let e=this.walk.speed*n,t=this.walk.to-this.dx;Math.abs(t)<=e?(this.dx=this.walk.to,this.walk=null):this.dx+=Math.sign(t)*e}let e=this.point(this.perch,this.dx);this.x=e.x,this.y=e.y}Math.abs(this.kTarget-this.k)>.001&&(this.k+=(this.kTarget-this.k)*(1-Math.exp(-n*(e?30:5)))),this.mv.t<this.mv.T&&(this.mv.t+=n);let[a,o,s]=this.moveNow(),c=`translate3d(${this.x.toFixed(1)}px, ${this.y.toFixed(1)}px, 0)${s?` rotate(${s.toFixed(2)}deg)`:``} scale(${(this.k*a).toFixed(4)}, ${(this.k*o).toFixed(4)})`;if(c!==this.lastTf&&(this.lastTf=c,this.cat.el.style.transform=c),this.pillEl?.classList.contains(`is-on`)){let e=this.box(),t=this.x+e.x+e.w+110<document.documentElement.clientWidth,n=t?this.x+e.x+e.w+4:this.x+e.x-4;this.pillEl.style.transform=`translate3d(${n.toFixed(1)}px, ${(this.y+e.y+e.h*.42).toFixed(1)}px, 0)${t?``:` translateX(-100%)`}`}let l=this.cat,u=this.gaze===`viewer`?null:this.gaze?{x:this.gaze.x-this.x,y:this.gaze.y-this.y}:this.mouse&&Math.hypot(this.mouse.x-this.x,this.mouse.y-this.y)<900?{x:this.mouse.x-this.x,y:this.mouse.y-this.y}:null,d=u?`${Math.round(u.x)},${Math.round(u.y)}`:``;if(d!==this.lastLook&&(this.lastLook=d,l.lookAt(u)),this.petUntil&&this.clock>this.petUntil&&(this.petUntil=0,l.setPurring(!1),l.setExpression(`happy`)),this.bubbleUntil&&this.clock>this.bubbleUntil&&this.hush(),this.bubble.classList.contains(`is-on`)){let e=this.box(),t=this.bubble.offsetWidth,n=this.bubble.offsetHeight,r=this.x+e.x+e.w/2,i=Q(r-t/2,8,document.documentElement.clientWidth-t-8),a=`translate3d(${i.toFixed(1)}px, ${(this.y+e.y-n-12).toFixed(1)}px, 0)|${Q(r-i,18,t-18)}`;a!==this.lastBubbleTf&&(this.lastBubbleTf=a,this.bubble.style.setProperty(`--tail-x`,`${Q(r-i,18,t-18)}px`),this.bubble.style.transform=a.split(`|`)[0])}if(this.rigAcc+=t,(this.onScreen||this.air)&&this.rigDue()<=.009){this.rigDirty=!1,l.update(Math.min(1,this.rigAcc)),this.rigAcc=0;let e=performance.now();this.lastRigUpdate=e;let t=l.stats?.draws??0;t!==this.draws&&(e-this.lastDrawAt<60&&(this.motionUntil=Math.max(this.motionUntil,e+300)),this.draws=t,this.lastDrawAt=e)}}rigDue(){if(this.rigDirty||this.air)return 0;let e=performance.now();return e<this.motionUntil?0:this.cat.settled?this.cat.nextEventIn-this.rigAcc:(this.lastRigUpdate+1e3/11-e)/1e3}sleepFor(){if(this.air||this.walk||Math.abs(this.kTarget-this.k)>.001||this.mv.t<this.mv.T||this.scrollV!==0||performance.now()-this.lastScroll.t<600||this.candidate&&this.candidate!==this.stopName)return 0;let e=this.task?this.task.nextIn:1/0;return this.onScreen&&(e=Math.min(e,Math.max(0,this.rigDue()-.009))),this.bubbleUntil&&(e=Math.min(e,this.bubbleUntil-this.clock)),this.petUntil&&(e=Math.min(e,this.petUntil-this.clock)),Math.max(0,e)}start(){this.bindInput(),this.cat.on(`strike`,()=>this.strikeHandlers.forEach(e=>e()));let e=this.pickStop()??document.querySelector(`[data-stop="hero"]`);e&&this.enter(e);let t=performance.now(),n=0,r=0,i=!1,a=e=>{n=0,i=!0,this.frame(Math.min(1,Math.max(0,(e-t)/1e3))),i=!1,t=e,o()},o=()=>{if(document.hidden||n||r)return;let e=this.sleepFor();e<=.017?n=requestAnimationFrame(a):e<1/0&&(r=window.setTimeout(()=>{r=0,n=requestAnimationFrame(a)},Math.min(e,30)*1e3-8))};this.wakeFn=()=>{i||n||document.hidden||(r&&(clearTimeout(r),r=0),n=requestAnimationFrame(a))},n=requestAnimationFrame(a),document.addEventListener(`visibilitychange`,()=>{document.hidden?(cancelAnimationFrame(n),clearTimeout(r),n=r=0):(t=performance.now(),this.wakeFn())});let s=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.inView.add(t.target):this.inView.delete(t.target);this.ioReady=!0,this.pickCache.at=-1,this.wakeFn()});for(let e of this.stops())s.observe(e);addEventListener(`resize`,()=>{this.perch&&!this.air&&(this.dx=Math.min(this.dx,this.perch.getBoundingClientRect().width-20)),this.pickCache.at=-1,this.wakeFn()},{passive:!0})}};function ot(e,t=`[data-perch]`){return e.matches(t)?e:e.querySelector(t)??e}function st(){let e;try{e=new at}catch(e){return console.warn(`[mochi] WebGL unavailable; the page works without her`,e),null}return e.start(),e}export{st as boot};