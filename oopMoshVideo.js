// PROGRAMMING WITH MOSH VIDEO CODE ALONG//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


basic JS programming vs OOP/////////////////////////////////////////////////////////////////////////////////////

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate)
}

//is equal to the OOP manner of writing code below://////////////////////

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    /*this function below, like other functions in objects doesnt need parameters because the parameters are modeled after the properties within the object: baseSalary, overtime, and rate. The this keyword is tied to the object variable name: employee */
    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate)
    }
};
employee.getWage();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw')
        console.log(1 + 1)
    }
    //draw property is a method here since it is a function within an object.
    //an object with one or more methods has "behavior"
};

circle.draw();


FACTORY FUNCTION///////////////////////////////////////////
function createCircle(radius) {
    return {
        radius: radius, //can also be written as just radius, only works if parameter and property names are the same//
        draw: function () {
            console.log('draw this')
        }
    };
}

const circle = createCircle(1);
circle.draw();
console.log(circle.radius);

//CONSTRUCTOR FUNCTION/////////////////////////////////////
function MakeCircle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}


const anotherCircle = new MakeCircle(17);
console.log(anotherCircle)
//line above does the same thing as the
MakeCircle.call({}, 1)
MakeCircle.apply({}, [1, 2, 3])



