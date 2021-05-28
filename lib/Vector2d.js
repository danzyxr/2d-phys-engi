/*

TODO:
  implement motion
  test vector functions
  detect & resolve collisions
  derive response to collisions

*/

class Vector2d {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  len() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  normalize() {
    const L = this.len();
    if (L > 0) return this.x / L, this.y / L;
  }

  scalar(n) {
    return new Vector2d(n * this.x, n * this.y);
  }

  distance(v) {
    const x = this.x - v.x;
    const y = this.y - v.y;
    return Math.sqrt(x ** 2 + y ** 2);
  }

  add(v) {
    return v.x + this.x, v.y + this.y;
  }

  subtract(v) {
    return this.x - v.x, this.y - v.y;
  }

  dotProduct(v) {
    return v.x * this.x + v.y * this.y;
  }

  crossProduct(v) {
    return v.y * this.x - v.x * this.y;
  }

  rotate(center, angle) {
    const r = [];
    const x = this.x - center.x;
    const y = this.y - center.y;
    r[0] = x * Math.cos(angle) - y * Math.sin(angle);
    r[1] = x * Math.sin(angle) - y * Math.cos(angle);
    r[0] += center.x;
    r[1] += center.y;
    return new Vector2d(r[0], r[1]);
  }
}

const v = new Vector2d(-3, 4);
console.log(v.len());
