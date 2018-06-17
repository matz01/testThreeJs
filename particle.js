function Particle(msg) {
  this.msg = msg;
  let geometry = new THREE.SphereBufferGeometry(10, 32, 32);
  let material = new THREE.MeshBasicMaterial({color: 0xffff00});
  this.sphere = new THREE.Mesh(geometry, material);
  this.doLog = function () {
    console.log(this.msg)
  }
  this.display = function () {
    scene.add(this.sphere);
  }
}

