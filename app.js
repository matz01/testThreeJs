var particle

function onLoadHandler () {
  setThreeScene()
  addParticle()
  animate()
}

function setThreeScene(){
  window.renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  window.camera = new THREE.PerspectiveCamera( 33, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.z = 1000;
  camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
  window.scene = new THREE.Scene();
}

function addParticle(){
  particle = new Particle(new THREE.Vector3( -150, -150, -150 ));
  particle.accellerate(new THREE.Vector3( 1, 2, 0 ));
  particle.display()
}

function animate(){
  particle.accellerate(gravity());
  particle.move();
  render();
  requestAnimationFrame(animate);
}

function gravity(){
  let distanceFromCenter = particle.sphere.position.distanceTo( new THREE.Vector3(0,0,0) );
  let spaceBetween = new THREE.Vector3(0,0,0).sub( particle.sphere.position );
  return spaceBetween.divideScalar(Math.pow(distanceFromCenter,2)).multiplyScalar(10)
}

function render () {
  renderer.render(scene, camera);
}

window.onload = onLoadHandler;