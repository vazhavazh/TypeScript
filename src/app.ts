// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//     return num1 + num2
// }

// button?.addEventListener("click", function () {
//     console.log(add(+input1.value, +input2.value));
// });

// let age:number;
// age = 50;
// let name1:string;
// name1 = 'Max';
// let toggle: boolean;
// toggle = true;
// let empty:null;
// empty = null;
// let notInitialize:undefined;
// notInitialize = undefined;
// let callback : (a: number) => number;
// callback = (a) => { return 100 + a };

// let anything: any;
// anything = -20;
// anything = "Text";
// anything = {};

// let some: unknown;
// some = 'Text';
// let str: string;

// if (typeof some === 'string') {
//     str = some
// }

// let person: [string, number]
// person = ['Max', 21]

// enum Load { LOADING, READY };

// const page = {
//     load: Load.READY
// }

// if (page.load === Load.LOADING) {
//     console.log('Page is loading');
// }

// if (page.load === Load.READY) {
//     console.log('Page is loaded');
// }

// let variable: string | number

// let literal: 'enable' | 'disable'

// function showMessage(message: string) : void {
//   console.log(message);
// }

// function calc(num1: number, num2: number) : number {
//   return num1 + num2;
// }

// function customError() :never {
//   throw new Error('Error');
// }

// type Page = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: 'open' | 'close';
//   details?: {
//     createAt: Date;
//     updateAt: Date;
//   }
// }

// const myPage: Page = {
//     title: 'Good page',
//     likes: 2000,
//     accounts: ['acc1', 'acc2'],
//     status: 'open',

// }

// class Person {

// }

// const some = 'str'

// class House {
// 	private tenants: string[] = [];

// 	constructor(private readonly type: string, private street: string) {}

// 	public showAddress(this: House) {
// 		console.log("Address: " + this.street);
// 	}

// 	public showType(this: House) {
// 		console.log("House Type: " + this.type);
// 	}

// 	public addTenant(tenant: string) {
// 		this.tenants.push(tenant);
// 	}

// 	public showTenants() {
// 		console.log(this.tenants);
// 	}
// }

// class StoneHouse extends House {
// 	private chargeOfTheHouse: string; // Главный в доме

// 	constructor(street: string, generalTenant: string) {
// 		super("stone", street); // Вызов родительского конструктора

// 		// Добавляем владельца квартиры
// 		this.chargeOfTheHouse = generalTenant;
// 		this.addTenant(generalTenant);
// 	}

// 	public showTenants() {
// 		console.log("General: " + this.chargeOfTheHouse);

// 		// Запускаем родительский метод showTenants();
// 		super.showTenants();
// 	}
// }

// const stoneHouse = new StoneHouse("Stone-world", "Max");

// stoneHouse.addTenant("Anton");
// stoneHouse.addTenant("Nikita");

// stoneHouse.showTenants();
// stoneHouse.showType();
// stoneHouse.showAddress();

// Давайте построим дом.

// Создайте абстрактный класс House в нем должны быть следующая логика

// свойство door, она может быть либо закрыта, либо открыта.
// свойство key - объект класса Key.
// конструктор принимает аргумент класса Key и сохраняет его в свойство key.
// метод comeIn, который добавляет объект класса Person в свойство tenants и это срабатывает только если door открыта.
// абстрактный метод openDoor принимает аргумент класса Key
// Создайте класс MyHouse который реализует класс House

// создаем метод openDoor, так как он принимает ключ, сверяем сохраненный ключ в свойстве key равен ли он ключу из аргумента, если да, открываем дверь.
// Создайте объект Key

// есть только свойство signature
// во время создания объекта генерирует случайное число и сохраняет его в signature
// метод getSignature возвращает случайное число из signature
// Создайте объект Person

// конструктор принимает ключ класса Key и сохраняет его в свойство key
// метод getKey возвращает key
// Сделайте так, чтобы жилец попал домой.

// abstract class House {
// 	private tenants: string[] = [];
// 	protected door: "opened" | "closed" = "closed";
// 	protected key: Key;
// 	constructor(key: Key) {
// 		this.key = key;
// 	}

// 	comeIn(tenant: string) {
// 		if (this.door === "closed") {
// 			console.log("The door is closed");
// 		} else {
//             this.tenants.push(tenant);
//             console.log(`${tenant} entered the house`);
// 		}
// 	}

// 	abstract openDoor(key: Key): void;
// }

// class MyHouse extends House {
// 	openDoor(key: Key) {
// 		if (this.key.getSignature() === key.getSignature()) {
// 			this.door = "opened";
// 			console.log("The door is opened");
// 		}
// 	}
// }

// class Key {
// 	private signature: number;
// 	constructor() {
// 		this.signature = Math.random();
// 	}

// 	getSignature(): number {
// 		return this.signature;
// 	}
// }

// class Person {
//     private key: Key
//     constructor(key: Key) {
//         this.key = key
//     }

//     getKey(): Key {
//         return this.key
//     }
// }

// const key = new Key();
// const person = new Person(key);
// const myHouse = new MyHouse(key);
// myHouse.openDoor(person.getKey());
// myHouse.comeIn('Vazha');

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// class Key {
// 	private signature: number;

// 	constructor() {
// 		this.signature = Math.random();
// 	}

// 	getSignature(): number {
// 		return this.signature;
// 	}
// }

// class Person {
// 	constructor(private key: Key) {}
// 	getKey(): Key {
// 		return this.key;
// 	}
// }

// abstract class House {
// 	protected door = false;
// 	private tenants: Person[] = [];
// 	constructor(protected key: Key) {}

// 	comeIn(person: Person): void {
// 		if (!this.door) {
// 			throw new Error("Door is close");
// 		}

// 		this.tenants.push(person);
// 		console.log("Person inside");
// 	}

// 	abstract openDoor(key: Key): boolean;
// }

// class MyHouse extends House {
// 	openDoor(key: Key) {
// 		if (key.getSignature() !== this.key.getSignature()) {
// 			throw new Error("Key to another door");
// 		}

// 		return (this.door = true);
// 	}
// }

// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Есть функция которая возвращает Promise,
//     он возвращает массив строк и чисел,
//         опишите правильно тип.

function getPromise(): Promise<Array<string | number>> {
	return new Promise((resolve) => {
		resolve(["Text", 50]);
	});
}
getPromise().then((data) => {
	console.log(data);
});


type AllType = {
	name: string;
	position: number;
	color: string;
	weight: number;
};


function compare(top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight'>) : AllType  {
	return {
		name: top.name,
		color: top.color,
		position: bottom.position,
		weight: bottom.weight,
	};
}

function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}


class Component<T> {
	constructor(public props: T) {}
}

interface IProps {
    title: string;
}


class Page extends Component<IProps> {
	pageInfo() {
		console.log(this.props.title);
	}
}