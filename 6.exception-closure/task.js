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

