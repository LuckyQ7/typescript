type chart_params = {
  width: number;
  height: number;
};

class Graph {
  public width: number;
  public height: number;

  constructor(width_: number, height: number);
  constructor(params: chart_params);
  constructor(payload: number | chart_params, height_: number = 0) {
    if (typeof payload == "object") {
      this.width = payload.width;
      this.height = payload.height;
    } else {
      this.width = payload;
      this.height = height_;
    }
  }

  getArea() {
    return this.width * this.height;
  }
}

const g1 = new Graph(100, 50);
const g2 = new Graph({ width: 200, height: 300 });

console.info("g1", g1.getArea());
console.info("g2", g2.getArea());
