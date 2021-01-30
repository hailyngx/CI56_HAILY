class Person {
  name;
  age;
  sex;
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}

class Relationship {
  a;
  b;
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Group {
  people;
  relationships;
  constructor() {
    this.people = [];
    this.relationships = [];
  }
  addPerson(person) {
    if (person instanceof Person) {
      this.people.push(person);
    }
  }
  addRelationships(a, b) {
    if (a instanceof Person && b instanceof Person && a !== b) {
      let foundRelationship = this.relationships.find((relationship) => {
        return (
          (relationship.a === a && relationship.b === b) ||
          (relationship.a === b && relationship.b === a)
        );
      });

      if (!foundRelationship) {
        let newRelationship = new Relationship(a, b);
        this.relationships.push(newRelationship);
      }
    }
  }

searchAllFriends(person) {
    let listFriends = [];
    for (let i = 0; i < this.relationships.length; i++) {
      if (person.name === this.relationships[i].a.name) {
        listFriends.push(this.relationships[i].b);
      }
      if (person.name === this.relationships[i].b.name) {
        listFriends.push(this.relationships[i].a);
      }
    }
    return listFriends;
  }
}

let A = new Person("A", 16, "female");
let B = new Person("B", 17, "male");
let C = new Person("C", 18, "male");
let D = new Person("D", 19, "female");
let E = new Person("E", 20, "male");

let people = new Group("Friends", "Relationships");

people.addPerson(A);
people.addPerson(B);
people.addPerson(C);
people.addPerson(D);
people.addPerson(E);

people.addRelationships(A, B);
people.addRelationships(A, C);
people.addRelationships(A, D);
people.addRelationships(C, B);
people.addRelationships(C, D);
people.addRelationships(D, B);
people.addRelationships(A, C);
people.addRelationships(A, E);

console.log(people);

console.log(people.searchAllFriends(A));
console.log(people.searchAllFriends(B));
console.log(people.searchAllFriends(C));
console.log(people.searchAllFriends(D));
console.log(people.searchAllFriends(E));

let personInput = prompt("Enter a person's name: ");
console.log(people.searchAllFriends(eval(personInput)));