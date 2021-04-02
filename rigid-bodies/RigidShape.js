class RigidShape {
  constructor(center = new Vector2d(0, 0)) {
    this.angle = 0;
    this.center = center;
    engine.core.objs.push(this);
  }
}
