//  Задача 1

function parseCount(number){
    let findNumber = parseFloat(number);
    if(Number.isNaN(findNumber)){
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
        if(sideOne + sideTwo < sideThree || sideOne + sideThree < sideTwo || sideTwo + sideThree < sideOne){
             throw new Error("Треугольник с такими сторонами не существует");
            };
        };
   

    get perimeter(){
            return this.sideOne + this.sideTwo + this.sideThree;
    };

    get area(){
        let trianglePer = this.sideOne + this.sideTwo + this.sideThree;
        let haifTrianglePer = trianglePer / 2;
        let triangleAreaCorn = Math.sqrt(haifTrianglePer * (haifTrianglePer - this.sideOne) * (haifTrianglePer - this.sideTwo) * (haifTrianglePer - this.sideThree));
        return parseFloat(triangleAreaCorn.toFixed(3));
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


