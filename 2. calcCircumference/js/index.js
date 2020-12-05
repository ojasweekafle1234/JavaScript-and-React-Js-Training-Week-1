
function calcCircumference(radius) {
    this.radius = radius;
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var circumference = new calcCircumference(3);
console.log('The circumference is =', circumference.perimeter().toFixed(2));
    