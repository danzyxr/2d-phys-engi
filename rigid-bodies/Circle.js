class Circle {
  constructor(center = new Vector2d(0, 0), radius = 1) {
    this.type = 'Cicle';
    RigidShape.call(this, center);
    this.radius = radius;
    this.startPoint = new Vector2d(center.x, center.y - radius);

    // Ensure inheritance of RigidShape prototype
    const prototype = Object.create(RigidShape.prototype);

    prototype.constructor = Circle;
    Circle.prototype = prototype;
  }
}

Cicle.prototype.draw = function (context) {
  context.beginPath();
  context.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI, true);
  context.moveTo(this.startPoint.x, this.startPoint.y);
  context.lineTo(this.center.x, this.center.y);
  context.closePath();
  context.stroke();
};
