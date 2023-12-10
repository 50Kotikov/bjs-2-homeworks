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
   Student.hasOwnProperty(marks);
   this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  
}

Student.prototype.exclude = function (reason) {
  
}
