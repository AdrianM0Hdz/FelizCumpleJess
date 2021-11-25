import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#canvas'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const geometry1 = new THREE.TorusGeometry(20, 0.5, 5, 100);
const material1 = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const torus1 = new THREE.Mesh(geometry1, material1);
scene.add(torus1);

const geometry2 = new THREE.TorusGeometry(20, 0.5, 5, 100);
const material2 = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const torus2 = new THREE.Mesh(geometry2, material2);
scene.add(torus2);

const geometry3 = new THREE.TorusGeometry(20, 0.5, 5, 100);
const material3 = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const torus3 = new THREE.Mesh(geometry3, material3);
scene.add(torus3);

const jessicaTexture = new THREE.TextureLoader().load('jess-1.png');

const jessica = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10), 
  new THREE.MeshBasicMaterial( {map: jessicaTexture} )  
);

scene.add(jessica);

const havenTexture = new THREE.TextureLoader().load('haven.jpg');

scene.background = havenTexture;

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 0, 50);

scene.add(pointLight)

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame( animate );
  
  torus1.rotation.x += 0.1;
  torus1.rotation.y += 0.01;
  torus1.rotation.z += 0.01;

  torus2.rotation.x += 0.001;
  torus2.rotation.y += 0.1;
  torus2.rotation.z += 0.01;
  
  torus3.rotation.x += 0.01;
  torus3.rotation.y += 0.001;
  torus3.rotation.z += 0.01;
  
  jessica.rotation.y += 0.01;   
  controls.update();

  renderer.render(scene, camera);
}

animate();