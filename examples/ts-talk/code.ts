class Bumblebee {
  wings = 2;

  fly = () => {
    console.log("zooom");
  };
}

let b = new Bumblebee();

b.fli();
b.wingz = 3;

console.log(b);

//
//
//
//
//

interface Named {
  name: string;
}

class Person {
  name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();

//
//
//
//
//

interface Named {
  name: string;
}

let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: "Alice", location: "Sønderborg" };
x = y;

function greet(n: Named) {
  console.log("Hello, " + n.name);
}
greet(y); // OK

//
//
//
//
//

let f1 = (a: number) => 0;
let f2 = (b: number, s: string) => 0;

f2 = f1; // OK
f1 = f2; // Error

//
//
//
//
//

let items = [1, 2, 3];

// Don't force these extra parameters
items.forEach((item, index, array) => console.log(item));

// Should be OK!
items.forEach((item) => console.log(item));

//
//
//
//
//

type Part<T> = {
  [P in keyof T]?: T[P];
};

type RO<T> = {
  readonly [P in keyof T]: T[P];
};

type Req<T> = {
  [P in keyof T]: T[P];
};

class Flea {
  name: string;
  size: number;

  constructor() {
    this.name = "";
    this.size = 1;
  }
}

let pf: Part<Flea> = { name: "yolo" };

let rof: RO<Flea> = new Flea();
rof.name = "johann";

class Bumblebee {
  wings = 2;

  fly = () => {
    console.log("zooom");
  };
}

let b = new Bumblebee();

b.fli;
b.wingz = 3;

console.log(b);

//
//
//
//
//

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview1 = Pick<Todo1, "title" | "completed">;

const todo: TodoPreview1 = {
  title: "Clean room",
  completed: false,
};

//
//
//
//
//

type Pik<T, Q> = {
  [P in keyof T & Q]: T[P];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pik<Todo, "title">;

const testPik = () => {
  let b: TodoPreview = { title: "yo" };

  type T2 = Required<Pick<Todo, "title">> & Partial<Todo>;

  let c: T2 = b;

  type PiqO<T, R extends keyof T> = Required<Pick<T, R>> & Partial<Omit<T, R>>;
  type T3 = PiqO<Todo, "title">;

  let d: T3 = b;

  type Exclud<T, U> = T extends U ? never : T;

  type Omt<T, K extends keyof T> = Pik<T, Exclud<keyof T, K>>;

  type A = Exclude<"id" | "name", "id">;
  /**
   * type A = 'name'
   * 'name' is not assignable to 'id', hence it is excluded
   **/
};
