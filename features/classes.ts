class Vehicle {
  //   color: string = "red";

  //   constructor(color: string) {
  //     this.color = color;
  //   }

  constructor(public color: string) {}

  public drive(): void {
    console.log("chugga chugga");
  }

  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log("vroom");
  }

  private test(): void {
    console.log("test");
  }

  startDrivingProcess(): void {
    this.test();
    this.honk();
  }
}

const vehicle = new Vehicle("blue");
vehicle.drive();

// vehicle.honk();

const car = new Car(4, "red");
car.startDrivingProcess();
