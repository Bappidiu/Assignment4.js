//problem-1:
function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = callback(array[i]);
    }
    return result;
}

console.log(customMap([1, 2, 3], (num) => num * 2)); 

//problem-2:
function findDuplicates(array) {
    const seen = new Set();
    const duplicates = new Set();

    for (const item of array) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    return Array.from(duplicates);
}

console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5])); 

//problem-3:
function queryStringToObject(query) {
    return Object.fromEntries(
        query.slice(1).split('&').map(pair => pair.split('='))
    );
}


console.log(queryStringToObject('?name=Hasib&age=23')); 

//problem-4:
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

console.log(reverseWords('Hello World'));

//problem-5:
function findMissingNumber(arr) {

    const numSet = new Set(arr);

    for (let i = 0; i <= arr.length; i++) {
        if (!numSet.has(i)) {
            return i; 
        }
    }
}

console.log(findMissingNumber([0, 1, 2, 3, 5])); 

//problem-6:





//problem-7:
function generateGreeting(name, timeOfDay, language) {
    let greeting;

    if (language === 'English') {
        if (timeOfDay === 'morning') {
            greeting = `Good morning, ${name}!`;
        } else if (timeOfDay === 'afternoon') {
            greeting = `Good afternoon, ${name}!`;
        } else if (timeOfDay === 'evening') {
            greeting = `Good evening, ${name}!`;
        } else {
            greeting = `Hello, ${name}!`;
        }
    } else if (language === 'Spanish') {
        if (timeOfDay === 'morning') {
            greeting = `¡Buenos días, ${name}!`;
        } else if (timeOfDay === 'afternoon') {
            greeting = `¡Buenas tardes, ${name}!`;
        } else if (timeOfDay === 'evening') {
            greeting = `¡Buenas noches, ${name}!`;
        } else {
            greeting = `¡Hola, ${name}!`;
        }
    } else {
        greeting = `Hello, ${name}!`;
    }

    return greeting;
}

console.log(generateGreeting('Badhon', 'morning', 'English')); 
console.log(generateGreeting('Bappi', 'evening', 'Spanish')); 

//problem-8:
function formatFullName(person) {
    const { firstName, lastName, middleName, title } = person;

    let fullName = `${firstName}`;

    if (middleName) {
        fullName += ` ${middleName}`;
    }

    fullName += ` ${lastName}`;

    return title ? `${title} ${fullName}` : fullName;
}


console.log(formatFullName({ firstName: 'Badhon', lastName: 'Bappi', middleName: 'Shom', title: 'Mr.' })); 
console.log(formatFullName({ firstName: 'Badhon', lastName: 'Bappi' }));

//problem-9:
function mergeAndSortArrays(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2]; 
    const uniqueArray = [...new Set(mergedArray)]; 
    return uniqueArray.sort((a, b) => a - b); 
}

console.log(mergeAndSortArrays([3, 1, 4], [2, 4, 5])); 

//problem-10:
function mergeObjects(obj1, obj2) {
    const result = { ...obj1 };

    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (key in result) {
                if (typeof result[key] === 'object' && result[key] !== null && typeof obj2[key] === 'object' && obj2[key] !== null) {
                    result[key] = mergeObjects(result[key], obj2[key]);
                } else {
                    result[key] = [result[key], obj2[key]];
                }
            } else {
                result[key] = obj2[key];
            }
        }
    }

    return result;
}


const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, a: 4 };
console.log(mergeObjects(obj1, obj2)); 
