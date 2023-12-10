function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    return; 
}; 


new Student();


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  
}

Student.prototype.addMarks = function (...marks) {
   if (this.hasOwnProperty('marks') === true) {
   this.marks.push(...marks)
   };
}

Student.prototype.getAverage = function () {
    let avaregeMarks;
    if (this.hasOwnProperty('marks') === false || this.marks.length === 0) {
        avaregeMarks = 0}
        else {let sumMarks = this.marks.reduce((acc, number) => acc + number, 0);
            avaregeMarks = sumMarks / this.marks.length;
     }; 
    return avaregeMarks;  
  
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason; 

}
