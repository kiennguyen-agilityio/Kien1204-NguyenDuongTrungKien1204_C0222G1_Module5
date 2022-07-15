import {Shape} from "./Shape";
export class Rectangle extends Shape implements IArea{
    constructor(x:number,y:number,private _width:number,private _height:number) {
        super(x,y);
    }

    area(): number {
        return this._width*this._height;
    }
    get width(){
        return this._width;
    }
    set width(width){
        this._width=width ;
    }
    get height(){
        return this._height ;
    }
    set height(height){
        this._height=height;
    }
}