function userControl(event) {
  let keyCode = undefined;

  if (window.event) {
    keyCode = event.keyCode; // IE
  } else if (event.which) {
    keyCode = event.which; // FF
  }

  const width = engine.core.width;
  const height = engine.core.height;
  const context = engine.core.context;

  // F key
  if (keyCode === 70) {
    context.strokeRect(
      Math.random() * width * 0.8,
      Math.random() * height * 0.8,
      Math.random() * 30 + 10,
      Math.random() * 30 + 10
    );
  }

  // G key
  if (keyCode === 71) {
    context.beginPath();
    context.arc(
      Math.random() * width * 0.8,
      Math.random() * height * 0.8,
      Math.random() * 30 + 10,
      0,
      Math.PI * 2,
      true
    );
    context.closePath();
    context.stroke();
  }
}
