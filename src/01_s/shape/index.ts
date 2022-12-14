abstract class Shape {
  protected name!: string;
  protected area!: number;

  public abstract calcArea(): number;
}

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.name = 'circle';
    this.radius = radius;
  }

  public calcArea(): number {
    this.area = Math.PI * this.radius ** 2;
    return this.area;
  }
}

class CalculateAreas {
  shapes!: Shape[];
  sumTotal = 0;

  constructor(shapes: Shape[]) {
    this.shapes = shapes;
  }

  public sumAreas(): number {
    this.sumTotal = 0;
    for (const shape of this.shapes) {
      this.sumTotal += shape.calcArea();
    }
    return this.sumTotal;
  }
}

class OutputAreas {
  areasSum = 0;

  constructor(areas: number) {
    this.areasSum = areas;
  }

  public areaAsString(): string {
    return `Total of all areas: ${this.areasSum}`;
  }

  public areaAsHtml(): string {
    return '<div>\n' + `Total of all areas: <strong>${this.areasSum}</strong>\n` + '</div>';
  }
}

export class TestShape {
  public static main(): void {
    const circle = new Circle(3);
    const shapeArray: Shape[] = [];
    shapeArray.push(circle);

    const areas = new CalculateAreas(shapeArray);
    const sum = areas.sumAreas();

    const outputAreas = new OutputAreas(sum);
    console.log(outputAreas.areaAsString());
    console.log(outputAreas.areaAsHtml());
  }
}
