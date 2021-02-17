var engine = engine || {};

engine.core = (function () {
  let objs = [];

  const canvas = document.getElementById("canvas");

  canvas.width = 800;
  canvas.height = 450;

  const public = {
    objs: objs,
    width: canvas.width,
    height: canvas.height,
    context: canvas.getContext("2d")
  };

  return public;
})();
