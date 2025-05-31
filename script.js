let scene, camera, renderer, starGroup;

init();
animate();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 7;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  const directional = new THREE.DirectionalLight(0xffffff, 0.8);
  directional.position.set(2, 2, 5);
  scene.add(ambient, directional);

  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shininess: 200,
    specular: 0xffffff
  });

  const scaleFactor = 2.5;
  const tetra1 = new THREE.Mesh(new THREE.TetrahedronGeometry(scaleFactor), material);
  const tetra2 = new THREE.Mesh(new THREE.TetrahedronGeometry(scaleFactor), material);
  tetra2.rotation.y = Math.PI;
  tetra2.rotation.x = Math.PI;

  starGroup = new THREE.Group();
  starGroup.add(tetra1);
  starGroup.add(tetra2);
  scene.add(starGroup);
}

function animate() {
  requestAnimationFrame(animate);
  starGroup.rotation.y += 0.01;
  starGroup.rotation.x += 0.005;
  renderer.render(scene, camera);
}
