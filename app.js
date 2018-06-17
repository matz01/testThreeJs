
function onLoadHandler () {
  console.log('zz')
  setThreeScene()
  addParticle()
  animate()
}

function setThreeScene(){
  window.renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  window.camera = new THREE.PerspectiveCamera( 33, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.z = 1000;
  camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
  window.scene = new THREE.Scene();
}

function addParticle(){
  const particle = new Particle('cc')
  particle.display()
}

function animate(){
  render();
  requestAnimationFrame(animate);
}

function render () {
  renderer.render(scene, camera);
}

window.onload = onLoadHandler;