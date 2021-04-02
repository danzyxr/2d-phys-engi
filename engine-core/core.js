// Namespace engine
var engine = engine || {};

/*

TODO:
  Convert IIFE to ES6+

*/

engine.core = (function () {
  const objs = [];
  const canvas = document.getElementById('canvas');

  canvas.width = 800;
  canvas.height = 450;

  const public = {
    objs: objs,
    width: canvas.width,
    height: canvas.height,
    context: canvas.getContext('2d')
  };

  return public;
})();
