type User = {
    name: string,
    phone: string,
    email: string,
    animals?: string[], 
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean
}

const users: User[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

// Task 1 - Создать строку из имен пользователей через запятую
function getStringNames(array: User[]): string {
    return array.map((i: User) => {
        return i.name;
    }).join(', ');
}
console.log(getStringNames(users));


// Task 2 - Посчитать общее количество машин у пользователей
function getAmountCars(array: User[]): number {
    let amountCars = 0;
    array.forEach((i: User) => {
        if (i.cars) amountCars += i.cars.length;
    });
    return amountCars;
}
console.log(getAmountCars(users));


// Task 3 - Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
interface IHasEducation {
    hasEducation: boolean;
}
function filterUsersEducationTrue<T extends IHasEducation>(array: T[]): T[] {
    return array.filter((i: T) => i.hasEducation);
}
console.log(filterUsersEducationTrue(users));


// Task 4 - Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
interface IAnimals {
    animals?: string[];
}
function filterUsersAnimals<T extends IAnimals>(array: T[]): T[] {
    return array.filter((i: T) => i.animals);
}
console.log(filterUsersAnimals(users));


// Task 5 - Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
function getStringCars(array: User[]): string {
    return array.filter((i: User) => {
        return i.cars;
    }).map((i: User) => {
        return i.cars!.join(', ');
    }).join(', ');
}
console.log(getStringCars(users));