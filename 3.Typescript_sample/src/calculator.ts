export class Calculator{
    constructor(private x:number, private y:number){}
    add(){
        return this.x + this.y
    }
    substract(){
        return this.x - this.y
    }
    multiply(){
        return this.x * this.y
    }
    divide(){
        return this.x / this.y
    }
}