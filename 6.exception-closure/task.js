//  Задача 1

function parseCount(number){
    let findNumber = parseFloat(number);
    if(Number.isNaN(findNumber) === true){
        throw new Error("Невалидное значение");
    }
    return findNumber;
};

function validateCount(number){
    try{
        return parseCount(number);
    }catch(error){
        return error
    };
};



// Задача 2

class Triangle{
    constructor(sideOne, sideTwo, sideThree){
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
        this.sideThree = sideThree;
        if(this.sideOne + this.sideTwo < this.sideThree || this.sideOne + this.sideThree < this.sideTwo || this.sideTwo + this.sideThree < this.sideOne){
             throw new Error("Треугольник с такими сторонами не существует");
            };
        };
   

    get perimeter(){
        this.trianglePer = this.sideOne + this.sideTwo + this.sideThree;
        return this.trianglePer;
    };

    get area(){
        this.haifTrianglePer = this.trianglePer / 2;
        this.triangleAreaCorn = Math.sqrt(this.haifTrianglePer * (this.haifTrianglePer - this.sideOne) * (this.haifTrianglePer - this.sideTwo) * (this.haifTrianglePer - this.sideThree));
        this.triangleArea = this.triangleAreaCorn.toFixed(3);
        return parseFloat(this.triangleArea);
    };
};

function getTriangle(sideOne, sideTwo, sideThree){
    try{
        return new Triangle(sideOne, sideTwo, sideThree)
    }catch(error){
        const errorObject = {
            get perimeter(){
                return "Ошибка! Треугольник не существует";
            },
            get area(){
                return "Ошибка! Треугольник не существует";  
            }
        };
        return errorObject;
    };
};


