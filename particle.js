function Particle(startingPosition) {
  let geometry = new THREE.SphereBufferGeometry(10, 32, 32);
  let material = new THREE.MeshBasicMaterial({color: 0xffff00});
  this.sphere = new THREE.Mesh(geometry, material);
  this.velocity = new THREE.Vector3(0,0,0);
  this.accelleration = new THREE.Vector3(0,0,0);
  this.sphere.position.copy(startingPosition);

  this.display = function () {
    scene.add(this.sphere);
  };
  this.accellerate = function (accelleration) {
    this.accelleration.add(accelleration);
  }
  this.move = function () {
    this.velocity.add(this.accelleration);
    this.sphere.position.add(this.velocity);
    this.accelleration.set(0,0,0);
  }
}

