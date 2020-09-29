export class BreakpointsArray extends Array<number> {
  xs: number;
  sm: number;
  md: number;
  lg: number;

  constructor(items: Array<number>) {
    super(...items);
    this.xs = 0;
    this.sm = items[0];
    this.md = items[1];
    this.lg = items[2];
  }
}
