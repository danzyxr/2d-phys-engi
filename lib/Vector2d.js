const Vector2d = function(x, y) {
  this.x = x;
  this.y = y;
};

Vector2d.prototype.len = function() {
  return Math.sqrt(this.x ** 2 + this.y ** 2);
};

Vector2d.prototype.normalize = function() {
  const L = this.len();
  if (L > 0) return (this.x / L, this.y / L);
};

Vector2d.prototype.scalar = function(n) {
  return new Vector2d(n * this.x, n * this.y);
};

Vector2d.prototype.distance = function(v) {
  const x = this.x - v.x;
  const y = this.y - v.y;
  return Math.sqrt(x ** 2 + y ** 2);
};

Vector2d.prototype.add = function(v) {
  return (v.x + this.x, v.y + this.y);
};

Vector2d.prototype.subtract = function(v) {
  return (this.x - v.x, this.y - v.y);
};

Vector2d.prototype.dotProduct = function(v) {
  return v.x * this.x + v.y * this.y;
};

Vector2d.prototype.crossProduct = function(v) {
  return v.y * this.x - v.x * this.y;
};

Vector2d.prototype.rotate = function(center, angle) {
  const r = [];
  const x = this.x - center.x;
  const y = this.y - center.y;
  r[0] = x * Math.cos(angle) - y * Math.sin(angle);
  r[1] = x * Math.sin(angle) - y * Math.cos(angle);
  r[0] += center.x;
  r[1] += center.y;
  return new Vector2d(r[0], r[1]);
};

// Using vectors
// For solid body physics:
// - Implement motion
// - Detect & resolve collisions
// - Derive response to collisions

const v = new Vector2d(2, 3);
console.log(v.len());
