// JavaScript Document

var r = 7;
var PI = Math.PI;
function circle(radius){
    this.radius = radius;
}
circle.prototype.circumference = function(){
    return this.radius * 2 * PI;
};
circle.prototype.area = function(){
    return this.radius * this.radius * PI;
};

var circle = new circle(7);

console.log(circle.area());  


