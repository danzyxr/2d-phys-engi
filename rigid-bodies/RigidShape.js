class RigidShape {
  constructor(angle = 0, center = new Vector2d(0, 0)) {
    this.angle = angle;
    this.center = center;
    engine.core.objs.push(this);
  }
}
