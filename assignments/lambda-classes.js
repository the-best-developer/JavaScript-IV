// CODE here for your Lambda Classes

// ##################################################
// Person
// ##################################################

class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }

    speak () {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

// ##################################################
// Instructor
// ##################################################

class Instructor extends Person {
    constructor (obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }

    demo (subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade (student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }
}

// ##################################################
// Student
// ##################################################

class Student extends Person {
    constructor (obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.classThis;
        this.favSubjects = obj.favSubjects;
    }

    listsSubjects () {
        this.favSubjects.forEach(sub => console.log(sub));
    }

    PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge (subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

// ##################################################
// Project Manager
// ##################################################

class ProjectManager extends Instructor {
    constructor (obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }

    standUp (channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode (student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

// ##################################################
// Examples
// ##################################################

// Person class example
let mike = new Person({
    name: "Mike",
    age: 23,
    location: "New York",
    gender: "Male"
});

mike.speak();

// ##################################################

// Instructor class example
let jeff = new Instructor({
    name: "Jeff",
    age: 37,
    location: "Boston",
    gender: "Male",
    specialty: "Vue",
    favLanguage: "R, Go, C#",
    catchPhrase: "Everyday is a good day!"
});

jeff.speak();
jeff.demo("Javascript");
jeff.grade(mike, "React");

// ##################################################

// Student class example

let beth = new Student({
    name: "Beth",
    age: 27,
    location: "Canada",
    gender: "Female",
    className: "WEBPT5",
    favSubjects: ["CSS", "HTML", "PHP"],
    catchPhrase: "Be the change you want to see in the world"
});

beth.speak();
beth.listsSubjects();
beth.PRAssignment("CSS");
beth.sprintChallenge("HTML");

// ##################################################

// Project Manager class example

let sarah = new ProjectManager({
    name: "Sarah",
    age: 28,
    location: "Utah",
    gender: "Female",
    specialty: "Bootstrap",
    favLanguage: "Rust, Python, C",
    catchPhrase: "Carpe Diem",
    gradClassName: "CS89",
    favInstructor: "Mike"
});

sarah.speak();
sarah.demo("React");
sarah.standUp("CS89");
sarah.debugsCode(beth, "Javascript");

// ##################################################