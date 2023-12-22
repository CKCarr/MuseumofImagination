import*as THREE from"three";function createAmbientLight(){let t=new THREE.AmbientLight(0,1);return t.position.set(0,0,0),t}function createDirectionalLight(){let t=new THREE.DirectionalLight(16777215,1);return t.position.set(0,30,0),t}function createHemisphereLight(t){const e=new THREE.HemisphereLight(16777215,.5,100);return e.position.copy(t.position),e}export function lightingSetup(t,e){const i=createAmbientLight();t.add(i);const n=createDirectionalLight();t.add(n);const r=createHemisphereLight(e);return t.add(r),{ambientLight:i,directionalLight:n,hemisphereLight:r}}