/* global THREE */
var registerComponent = require('../core/component').registerComponent;

module.exports.Component = registerComponent('semantics', {
    schema: {
    face: {type: 'array', default: []},
    interaction: {default: 'block'},
  },

  init: function () {
      console.log(this);
      console.log(this.el);
      console.log(this.el.object3D);
      cone = new THREE.Mesh(
              new THREE.ConeGeometry( 500, 10, 8),
              new THREE.MeshBasicMaterial({color: 0xffff00}));
      this.el.setObject3D('cone', cone);
    // Create geometry.
    geometry = new THREE.BoxBufferGeometry(10, 10, 10);

    // Create material.
    material = new THREE.MeshStandardMaterial({color: 0x642421});

    // Create mesh.
    mesh = new THREE.Mesh(this.geometry, this.material);

    // Set mesh on entity.
    this.el.setObject3D('mesh', this.mesh);
x = this;
  },
});
