import * as THREE from "three";

// كل كودك هنا 👇
const container = document.getElementById("globe-bg");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 8;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(2, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: 0xb388ff,
  wireframe: true,
  transparent: true,
  opacity: 0.4
});

const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

const light = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  globe.rotation.y += 0.003;
  renderer.render(scene, camera);
}

animate();