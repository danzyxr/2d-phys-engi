class Rectangle {
  constructor(center = new Vector2d(0, 0), width = 1, height = 1) {
    RigidShape.call(this, center);
    this.type = 'Rectangle';
    this.width = width;
    this.height = height;

    this.vertices = [];

    this.vertices[0] = new Vector2d(center.x - width / 2, center.y - height / 2);
    this.vertices[1] = new Vector2d(center.x + width / 2, center.y - height / 2);
    this.vertices[2] = new Vector2d(center.x + width / 2, center.y + height / 2);
    this.vertices[3] = new Vector2d(center.x - width / 2, center.y + height / 2);

    this.normals = [];

    this.normals[0] = this.vertices[1].subtract(this.vertices[2]);
    this.normals[0] = this.normals[0].normalize();

    this.normals[1] = this.vertices[2].subtract(this.vertices[3]);
    this.normals[1] = this.normals[1].normalize();

    this.normals[2] = this.vertices[3].subtract(this.vertices[0]);
    this.normals[2] = this.normals[2].normalize();

    this.normals[3] = this.vertices[0].subtract(this.vertices[1]);
    this.normals[3] = this.normals[3].normalize();
  }
}

const prototype = Object.create(RigidShape.prototype);
prototype.constructor = Rectangle;
Rectangle.prototype = prototype;

Rectangle.prototype.draw = function(context) {
  context.save();
  context.translate(this.vertices[0].x, this.vertices[0].y);
  context.rotate(this.angle);
  context.strokeRect(0, 0, this.width, this.height);
  context.restore();
};
