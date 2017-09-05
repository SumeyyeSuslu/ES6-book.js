//Base Class: no 'extends'
class Point{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  toString(){
    return `(${this.x}, ${this.y})`;
  }
}

// This class is derived from 'Point'
class colorPoint extends Point{
  constructor(x,y,color){
    super(x,y);
    this.color = color;
  }
  toString(){
    return super.toString() + 'in' + this.color;
  }
}
