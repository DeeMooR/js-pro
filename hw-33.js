const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

// Task 1 - Создать строку из названий предметов написаных через запятую 
function getStringSubjects(object) {
    let arraySubjects = [];
    for (let key in object) {
        arraySubjects.push(key);
    }
    return arraySubjects.join(',');
}
console.log(getStringSubjects(subjects));


// Task 2 - Посчитать общее количнство студентов и учителей на всех предметах
function getAmountStudentsTeachers(object) {
    let amountStudents = 0, amountTeachers = 0;
    for (let key in object) {
        amountStudents += object[key].students;
        amountTeachers += object[key].teachers;
    }
    return [amountStudents, amountTeachers];
}
let arrayAmountStudentsTeachers = getAmountStudentsTeachers(subjects);
console.log('студенты: ' + arrayAmountStudentsTeachers[0] + ', учителя: ' + arrayAmountStudentsTeachers[1]);


// Task 3 - Получить среднее количество студентов на всех пердметах
function getAverageStudents(object, amount) {
    return amount / Object.keys(object).length;
}
console.log(getAverageStudents(subjects, arrayAmountStudentsTeachers[0]));


// Task 4 - Создать массив из объектов предметов
function getArraySubjects(object) {
    let arraySubjects = [];
    for (let key in object) {
        arraySubjects.push(object[key]);
    }
    return arraySubjects;
}
console.log(getArraySubjects(subjects));

// Task 5 - Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшемув
function getArraySortSubjectsName(object) {
    let arraySortSubjects = [], arraySortSubjectsName = [];
    for (let key in object) {
        let clone = object[key];
        clone.subject = key;
        arraySortSubjects.push(clone);
    }
    arraySortSubjects.sort((left,right) => {
        return right.teachers - left.teachers;
    })
    for (let i of arraySortSubjects) {
        arraySortSubjectsName.push(i.subject);
    }
    return arraySortSubjectsName;
}
console.log(getArraySortSubjectsName(subjects));
