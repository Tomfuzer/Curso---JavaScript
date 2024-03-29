'use strict';

// Aula 207 - OOP in JavaScript

// Aula 208 - Constructor Functions and the new Operator  - Pratica

// Constructor function
const Person = function (firstName, birthYear) {
  //Propriedades instanciadas
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Não criar metódos dentro de construtores
  //   this.calcAge = function(){
  //     console.log(2023 - this.birthYear);
  //   }
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const tom = new Person('Tom', 1995);
// console.log(tom);

// 1. Novo objeto vazio é criado {}
// 2. Função é criada, this = {}
// 3. {} linkado ao prototype
// 4. A função retorna automaticamente o objeto vazio {}

const rafaela = new Person('Rafaela', 1997);
// console.log(rafaela);

// console.log(tom instanceof Person);

// Aula 209 - Prototypes

// console.log(Person.prototype);

// tom.calcAge();
// rafaela.calcAge();

//Object.prototype - topo da cadeia
// console.log(tom.__proto__.__proto__);

const arr = [1, 2, 3, 4, 4, 5];
// console.log(arr.__proto__);

// Aula 211 - Prototypal Inheritance on Built-In Objects

Array.prototype.unique = function () {
  return [...new Set(this)];
}; //retorna um novo array sem elementos repetidos

const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// 212 - Coding Challenge #1
/*
const Car = function (maker, speed) {
  this.maker = maker;
  this.speed = speed;
};

const bmw = new Car('BMW', 90);
const mercedes = new Car('Mercedes', 80);

console.log(bmw, mercedes);

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

while (bmw.speed < 120) {
  bmw.accelerate();
}

while (mercedes.speed < 95) {
  mercedes.accelerate();
  if (mercedes.speed > 95) {
    mercedes.brake();
  }
}*/

// Aula 213 - ES6 Classes

// class expression
// const PersonCl = class {}

// class declaration
/*
class PerosnCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Métodos serão adicionados em .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  //Rever aula 214
  set fullName(name) {
    if (name.includes('')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there!');
  }
}

const arthur = new PerosnCl('Arthur Cecchetti', 2002);
// console.log(arthur);
// arthur.calcAge();
// console.log(arthur.age);

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode
*/
// Aula 214 - Setters and Getters

const account = {
  owner: 'Tom',
  mov: [200, 300, 530, 1000, -650],

  get latest() {
    return this.mov.slice(-1).pop();
  },

  set latest(mov) {
    this.mov.push(mov);
  },
};

// console.log(account.latest);

account.latest = 50;
// console.log(account.mov);
// PerosnCl.hey();

// Aula 216 - Object.create
/*
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1999);
sarah.calcAge();
*/

// Aula 217 - Coding Challenge #2
/*
class Car {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }

  accelerate = function () {
    this.speed = this.speed + 10;
    console.log(this.speed);
  };

  brake = function () {
    this.speed = this.speed - 5;
    console.log(this.speed);
  };

  get speedUS() {
    return console.log(`Speed in mi/h is ${this.speed / 1.6}`);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(this.speed);
  }
}
*/

// const ford = new Car('Ford', 120);

//
// Aula 218 - Inheritance Between "Classes": Constructor Functions
/*
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2000, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

Student.prototype.constructor = Student;

console.log(mike.__proto__);
console.dir(Student.prototype.constructor);
*/

// Aula 219 - Coding Challenge #3
/*
const Car = function (maker, speed) {
  this.maker = maker;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

const EV = function (maker, speed, bCharge) {
  Car.call(this, maker, speed);
  this.bCharge = bCharge;
};

EV.prototype = Object.create(Car.prototype);

const tesla = new EV('Tesla', 120, 23);

EV.prototype.chargeBattery = function (chargeTo) {
  this.bCharge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.bCharge--;
  console.log(
    `${this.maker} is going at ${this.speed} km/h, with a charge of ${this.bCharge}`
  );
};

console.log(tesla);
tesla.chargeBattery(100);
tesla.accelerate();
*/

// Aula 220 -  Inheritance Between "Classes": ES6 Classes
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Métodos serão adicionados em .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  //Rever aula 214
  set fullName(name) {
    if (name.includes('')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there!');
  }
}

const arthur = new PersonCl('Arthur Cecchetti', 2002);

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Função super que cria o referencial do this, essa função tem que ver sempre antes
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2023 - this.birthYear} years old`);
  }
}

const denise = new StudentCl('Denise Fuzer', 1974, 'Matemática');
denise.introduce();
denise.calcAge();
*/

// Aula 221 - Inheritance Between "Classes": Object.create
/*
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const robson = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'Nutrição');
jay.introduce();
jay.calcAge();
*/

// Aula 222 - Another Class Example
// Aula 223 - Encapsulation: Protected Properties and Methods
// Aula 224 - Encapsulation: Private Class Fields and Methods
/*
//Public field
//Private fields
//Public methods
//Private methods

class Account {
  //1. Public fields (instances)
  locale = navigator.language;

  //2. Private fields - # for privates
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Obrigado por abrir uma conta, ${owner}`);
  }
  //3. Public methods
  //Public interface  (API)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Empréstimo aprovado');
      return this;
    }
  }

  //4. Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }

  static helper() {
    console.log(
      'Funções estáticas funcionam apenas dentro da classe em si e não em outras instâncias'
    );
  }
}

const acc1 = new Account('Tom', 'BRL', '1111');

// acc1.movements.push(500); Neste exemplo seria possível interagir com movements dessa forma, mas essa não é uma boa prática

acc1.deposit(250);
acc1.withdraw(150);
acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.getMovements());

// console.log(acc1.#movements);
// console.log(acc1.#pin);

Account.helper();

// Aula 225 -

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
*/

// Aula 227 - Coding Challenge #4

class Car {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }

  accelerate = function () {
    this.speed = this.speed + 10;
    console.log(this.speed);
  };

  brake = function () {
    this.speed = this.speed - 5;
    console.log(this.speed);
  };

  get speedUS() {
    return console.log(`Speed in mi/h is ${this.speed / 1.6}`);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(this.speed);
  }
}

class EV extends Car {
  #charge;
  constructor(maker, speed, bCharge) {
    super(maker, speed);
    this.#charge = bCharge;
  }
  accelerate = function () {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.maker} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  };

  brake = function () {
    this.speed = this.speed - 5;
    console.log(`${this.maker} is going at ${this.speed} km/h`);
    return this;
  };

  chargeBattery = function (chargeTo) {
    this.#charge = chargeTo;
    console.log(`Nível de bateria em ${chargeTo}`);
    return this;
  };
}

const rivian = new EV('Rivian', 120, 23);

rivian.accelerate().accelerate().chargeBattery(30).brake().brake();
