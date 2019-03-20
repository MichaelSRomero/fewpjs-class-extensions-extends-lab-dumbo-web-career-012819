// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get getCount() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((total, num) => total + num)
  }
}

class Triangle extends Polygon {

  get isValid() {
    if ( !Array.isArray( this.sides ) ) return;
    if ( this.sides.length !== 3 ) return;
    let side1 = this.sides[ 0 ]
    let side2 = this.sides[ 1 ]
    let side3 = this.sides[ 2 ]
    return ( ( side1 === side2 ) && ( side1 === side3 ) && ( side2 === side3 ) )
  }

}

class Square extends Polygon {
  get isValid() {
    if ( !Array.isArray( this.sides ) ) return;
    if ( this.sides.length !== 4 ) return;
    let side1 = this.sides[ 0 ]
    let side2 = this.sides[ 1 ]
    let side3 = this.sides[ 2 ]
    let side4 = this.sides[ 3 ]
    return ( ( side1 === side2 ) && ( side1 === side3 ) && ( side1 === side4 ) )
  }

  get area() {
    return this.sides[0] * this.sides[1];
  }

}
