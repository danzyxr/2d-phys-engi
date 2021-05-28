function userControl(event) {
  let keyCode;
  let objectNumber = 0;

  /*

  TODO:
    window.event is deprecated:
    if window.event then event.keycode -> keycode
    if event.which then event.which -> keycode

   */

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
    let rectangle = new Rectangle(
      new Vector2d(Math.random() * width * 0.8, Math.random() * height * 0.8),
      Math.random() * 30 + 10,
      Math.random() * 30 + 10
    );

    // context.strokeRect(
    //   Math.random() * width * 0.8,
    //   Math.random() * height * 0.8,
    //   Math.random() * 30 + 10,
    //   Math.random() * 30 + 10
    // );
  }

  // G key
  if (keyCode === 71) {
    let circle = new Circle(
      new Vector2d(Math.random() * width * 0.8, Math.random() * height * 0.8),
      Math.random() * 10 + 20
    );

    // context.beginPath();
    // context.arc(
    //   Math.random() * width * 0.8,
    //   Math.random() * height * 0.8,
    //   Math.random() * 30 + 10,
    //   0,
    //   Math.PI * 2,
    //   true
    // );
    // context.closePath();
    // context.stroke();
  }

  // Up arrow
  if (keyCode === 38) {
    if (objectNumber > 0) {
      objectNumber--;
    }
  }

  // Down arrow
  if (keyCode === 40) {
    if (objectNumber < engine.core.objs.length - 1) {
      objectNumber++;
    }
  }

  // Numbers 0-9
  if (keyCode >= 48 && keyCode <= 57) {
    if (keyCode - 48 < engine.core.objs.length) {
      objectNumber = keyCode - 48;
    }
  }
}
