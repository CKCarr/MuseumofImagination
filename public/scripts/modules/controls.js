import{PointerLockControls}from"three/examples/jsm/controls/PointerLockControls";import{showMenu,hideMenu}from"./menu.js";export function initControls(e,o){const n=new PointerLockControls(e,o.domElement);return o.domElement.addEventListener("click",(function(){!0===n.isLocked?(n.unlock(),n.addEventListener("unlock",(()=>console.log("Pointer Unlocked."))),showMenu()):(n.lock(),n.addEventListener("lock",(()=>console.log("Pointer Locked."))),hideMenu())})),document.addEventListener("keydown",(function(o){let n=o.which;console.log(n),(39===n||68===n)&&e.translateX(.15),37!==n&&65!==n||e.translateX(-.15),38!==n&&87!==n||(o.preventDefault(),e.translateZ(-.15)),81===n&&e.rotateY(.15),69===n&&e.rotateY(-.15),40!==n&&83!==n||e.translateZ(.15),27===n&&showMenu()}),!1),n}