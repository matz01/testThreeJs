function Particle (msg) {
  this.msg = msg;
  this.doLog = function(){
    console.log(this.msg)
  }
}

