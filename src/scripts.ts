console.log('Ready for coding');

// Task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const sumNums = (a: number, b: number): number => a + b;

console.log('\n','Task1')
console.log(sumNums(1, 2)); //  3
console.log(sumNums(1, 10)); //  11
console.log(sumNums(99, 1)); //  100


// Task 2
// Write a function that takes a value as argument
// Return the type of the value

const getType = (value: any): string => typeof value;

console.log('\n','Task2')
console.log(getType(1)); //  number
console.log(getType(false)); //  boolean
console.log(getType({})); //  object
console.log(getType(null)); //  object
console.log(getType('string')); //  string
console.log(getType(['array'])); //  object


// Task 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const checkEquality = (a: number | string, b: number | string): boolean => a === b ? true : false;

console.log('\n','Task3')
console.log(checkEquality(2, 3)); // false
console.log(checkEquality(3, 3)); // true
console.log(checkEquality(1, '1')); // false
console.log(checkEquality('10', '10')); // true


// Task 4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const getNthChar = (str: string, num: number):string => str.charAt(num - 1);

console.log('\n','Task4')
console.log(getNthChar('abcd',1)) // 'a'
console.log(getNthChar('zyxbwpl',5)) // 'w'
console.log(getNthChar('gfedcba',3)) // 'e'


// Task 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const trimFirstChars = (str: string, num: number = 3): string => str.substring(num);

console.log('\n','Task5')
console.log(trimFirstChars('abcdefg')) // 'defg'
console.log(trimFirstChars('1234')) // '4'
console.log(trimFirstChars('fgedcba')) // 'dcba'





// Task 6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const getLastChars = (str: string, num: number = 3): string => str.substring(str.length - num);

console.log('\n','Task6')
console.log(getLastChars('abcdefg')) // 'efg'
console.log(getLastChars('1234')) // '234'
console.log(getLastChars('fgedcba')) // 'cba'





// Task 7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const getFirstChars = (str: string, num: number = 3): string => str.substring(0, num);

console.log('\n','Task7')
console.log(getFirstChars('abcdefg')) // 'abc'
console.log(getFirstChars('1234')) // '123'
console.log(getFirstChars('fgedcba')) // 'fge'





// Task 8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const getFirstHalf = (str: string): string => {
    const halfLen: number = str.length / 2;
    return str.substring(0, halfLen);
}

console.log('\n','Task8')
console.log(getFirstHalf('abcdefgh')) // 'abcd'
console.log(getFirstHalf('1234')) // '12'
console.log(getFirstHalf('gedcba')) // 'ged'






// Task 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const trimLastChars = (str: string, num: number = 3): string => {
    const strLen: number = str.length - num;
    return str.substring(0, strLen);
}

console.log('\n','Task9')
console.log(trimLastChars('abcdefg')) // 'abcd'
console.log(trimLastChars('1234')) // '1'
console.log(trimLastChars('fgedcba')) // 'fged'






// Task 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const getPrecentOf = (num: number, percents: number): number => num * percents / 100;

console.log('\n','Task10')
console.log(getPrecentOf(100,50)) // 50
console.log(getPrecentOf(10,1)) // 0.1
console.log(getPrecentOf(500,25)) // 125






// Task 11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

const calculateNumArray = (
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number
    ): number => Math.pow((a + b - c) * d / e, f);

console.log('\n','Task11')
console.log(calculateNumArray(6,5,4,3,2,1)) // 10.5
console.log(calculateNumArray(6,2,1,4,2,3)) // 2744
console.log(calculateNumArray(2,3,6,4,2,3)) // -8




// Task 12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

const isEven = (num: number): boolean => num % 2 == 0 ? true : false;

console.log('\n','Task12')
console.log(isEven(10)) // true
console.log(isEven(-4)) // true
console.log(isEven(5)) // false
console.log(isEven(-111)) // false





// Task 13
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const charOccurances = (search: string, string: string): number => string.split(search).length - 1;

console.log('\n','Task13')
console.log(charOccurances('m', 'how many times does the character occur in this sentence?')) // 2
console.log(charOccurances('h', 'how many times does the character occur in this sentence?')) // 4
console.log(charOccurances('?', 'how many times does the character occur in this sentence?')) // 1
console.log(charOccurances('z', 'how many times does the character occur in this sentence?')) // 0




// Task 14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const checkWholeNum = (num: number): boolean => num % 1 == 0 ? true : false;

console.log('\n','Task14')
console.log(checkWholeNum(4)) // true 
console.log(checkWholeNum(1.123)) // false
console.log(checkWholeNum(1048)) // true 
console.log(checkWholeNum(10.48)) // false










// Task 15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const calcFunction = (a: number, b: number): number => {
    
    let result = 0;
    if(a < b) {
        result = a / b;
    } else {
        result = a * b;
    }

    return result;
}

console.log('\n','Task 15')
console.log(calcFunction(10, 100)) // 0.1
console.log(calcFunction(90, 45)) // 4050
console.log(calcFunction(8, 20)) // 0.4
console.log(calcFunction(2, 0.5)) // 1





// Task 16
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const concatStrings = (strA: string, strB: string): string => {
    
    if(strA.split(strB).length > 1) {
        return strB + '' + strA;
    } else {
        return strA + '' + strB;        
    }
}

console.log('\n','Task 16')
console.log(concatStrings('cheese', 'cake')) // 'cheesecake'
console.log(concatStrings('lips', 's')) // 'slips'
console.log(concatStrings('Java', 'script')) // 'Javascript'
console.log(concatStrings(' think, therefore I am', 'I')) // 'I think, therefore I am'







// Task 17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundNum = (num: number): number => Math.round(num * 100) / 100;

console.log('\n','Task 17')
console.log(roundNum(2.12397)) // 2.12
console.log(roundNum(3.136)) // 3.14
console.log(roundNum(1.12397)) // 1.12
console.log(roundNum(26.1379)) // 26.14





// Task 18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

const numToArray = (num: number): number[] => {
    return String(num).split('').map((num) => Number(num))
}

console.log('\n','Task 18')
console.log(numToArray(10)) // [1,0]
console.log(numToArray(931)) // [9,3,1]
console.log(numToArray(193278)) // [1,9,3,2,7,8]













// Task 19
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const mergeAndRepair = (start: string, end: string): string => {
    
    const capitalizedStart =  start.charAt(0).toUpperCase() + start.slice(1);

    const reversedEnding = end.split('').reverse().join('');
                    
    return (capitalizedStart + reversedEnding).replace('%', '');

}

console.log('\n','Task 19')
console.log(mergeAndRepair('java', 'tpi%rcs')) // 'Javascript'
console.log(mergeAndRepair('c%ountry', 'edis')) // 'Countryside'
console.log(mergeAndRepair('down', 'nw%ot')) // 'Downtown'




// Task 20
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const checkForPrime = (input: number): number => {
    
    if(input === 2 || input === 1) return 2;

    const sqrtNum = Math.floor(Math.sqrt(input));
    for(let i = 2; i < sqrtNum + 1; i++) {
        if(input % i === 0) {
            return checkForPrime(input + 1);
        }
    }
    
    return input;
}


console.log('\n','Task 20')
console.log(checkForPrime(38)) // 41
console.log(checkForPrime(7)) // 7
console.log(checkForPrime(115)) // 127
console.log(checkForPrime(2000)) // 2003








// Task 21
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const isDivisible = (dividend: number, divisor: number): number => {

    if(dividend % divisor === 0) {
        return dividend;
    } else {
        for(let i = dividend + 1; i < divisor + dividend; i++) {
            if(i % divisor === 0) {
                return i;
            }
        }
    }
}

console.log('\n','Task 21')
console.log(isDivisible(1, 23)) // 23
console.log(isDivisible(23, 23)) // 23
console.log(isDivisible(7, 3)) // 9
console.log(isDivisible(-5, 7)) // 0





// Task 22
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const func = (string: string, insert: string, n: number = 3): string => {

    let strReversed: string[] = string.split('').reverse();
    let result: string[] = []

    for(let i = 0; i <= strReversed.length - 1; i++) {
        if((i !== 0) && (i % n === 0)) {
            result.push(insert);
        }
        result.push(strReversed[i]);
    }
    return result.reverse().join('');
};

console.log('\n','Task 22')
console.log(func('1234567','.')) // '1.234.567'
console.log(func('abcde','$')) // 'ab$cde'
console.log(func('zxyzxyzxyzxyzxyz','w')) // 'zwxyzwxyzwxyzwxyzwxyz'









// Task 23
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const letterShift = (string: string): string => {

    let stringArray: string[] = string.split('');
    let newString: string = '';

    for(let i = 0; i < string.length; i++) {
        
        newString += String.fromCharCode(stringArray[i].charCodeAt(0) + 1);
    }

    return newString;
}

console.log('\n','Task 23')
console.log(letterShift('bnchmf')) // 'coding'
console.log(letterShift('bgddrd')) // 'cheese'
console.log(letterShift('sdrshmf')) // 'testing'




// Task 24
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const arrayVal = (array: number[], n: number): number => array[n - 1];

console.log('\n','Task 23')
console.log(arrayVal([1,2,3,4,5],3)) // 3
console.log(arrayVal([10,9,8,7,6],5)) // 6
console.log(arrayVal([7,2,1,6,3],1)) // 7




// Task 25
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const sliceFirstThree = (array: number[]): number[] => array.slice(3);

console.log('\n','Task 25')
console.log(sliceFirstThree([1,2,3,4])) // [4]
console.log(sliceFirstThree([5,4,3,2,1,0])) // [2,1,0]
console.log(sliceFirstThree([99,1,1])) // []




// Task 26
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const getLastThree = (array: number[]): number[] => {

    const arrLen = array.length;

    return array.slice(arrLen - 3);
}

console.log('\n','Task 26')
console.log(getLastThree([1,2,3,4])) // [2,3,4]
console.log(getLastThree([5,4,3,2,1,0])) // [2,1,0]
console.log(getLastThree([99,1,1])) // [99,1,1]




// Task 27
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const getFirstThree = (array: number[]): number[] => array.slice(0, 3);

console.log('\n','Task 27')
console.log(getFirstThree([1,2,3,4])) // [1,2,3]
console.log(getFirstThree([5,4,3,2,1,0])) // [5,4,3]
console.log(getFirstThree([99,1,1])) // [99,1,1]




// Task 28
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const getLastN = (array: number[], n: number): number[] => {

    const arrLen: number = array.length;

    return array.slice(arrLen - n);
}

console.log('\n','Task 28')
console.log(getLastN([1, 2, 3, 4, 5], 2)) // [ 4, 5 ]
console.log(getLastN([1, 2, 3], 6)) // [ 1, 2, 3 ]
console.log(getLastN([1, 2, 3, 4, 5, 6, 7, 8], 3)) // [ 6, 7, 8 ]





// Task 29
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

const filterArr = (array: (number | string | boolean)[], search: number | string | boolean): (number | string | boolean)[] => {

    return array.filter(el => el !== search);
}

console.log('\n','Task 29')
console.log(filterArr([1,2,3], 2)) // [1, 3]
console.log(filterArr([1,2,'2'], '2')) // [1, 2]
console.log(filterArr([false,'2',1], false)) // ['2', 1]
console.log(filterArr([1,2,'2',1], 1)) // [2, '2']





// Task 30
// Write a function that takes an array (a) as argument
// Return the number of elements in a

const count = (array: number[]): number => array.length;

console.log('\n','Task 30')
console.log(count([1,2,2,4])) // 4
console.log(count([9,9,9])) // 3
console.log(count([4,3,2,1,0])) // 5







// Task 31
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const countNetagives = (array: number[]): number => array.filter(el => el < 0).length;

console.log('\n','Task 31')
console.log(countNetagives([1,-2,2,-4])) // 2
console.log(countNetagives([0,9,1])) // 0
console.log(countNetagives([4,-3,2,1,0])) // 1




// Task 32
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const arraySortDESC = (array: number[]): number[] => array.sort().reverse();

console.log('\n','Task 32')
console.log(arraySortDESC([1,3,2])) // [3,2,1]
console.log(arraySortDESC([4,2,3,1])) // [4,3,2,1]





// Task 33
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const arraySortASC = (array: string[]): string[] => array.sort();

console.log('\n','Task 33')
console.log(arraySortASC(['b', 'c', 'd', 'a'])) // ['a', 'b', 'c', 'd']
console.log(arraySortASC(['z', 'c', 'd', 'a', 'y', 'a', 'w'])) // ['a', 'a', 'c', 'd', 'w', 'y', 'z']





// Task 34
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const arrayAverage = (array: number[]): number => {

    const sum: number = array.reduce((acc, curr) => acc + curr, 0);

    return sum / array.length;
}

console.log('\n','Task 34')
console.log(arrayAverage([10,100,40])) // 50
console.log(arrayAverage([10,100,1000])) // 370
console.log(arrayAverage([-50,0,50,200])) // 50




// Task 35
// Write a function that takes an array of strings as argument
// Return the longest string

const longestStr = (array: string[]): string => {
    const result: string = array.reduce((acc, curr) => {
        return curr.length > acc.length ? curr : acc;

        /* if(curr.length > acc.length) {
            return curr;
        } else {
            return acc;
        } */
    }, '');

    return result;
}

console.log('\n','Task 35')
console.log(longestStr(['help', 'me']))// 'help'
console.log(longestStr(['I', 'need', 'candy'])) // 'candy'




// Task 36
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const isEqual = (array: (number | string | boolean)[]): boolean => array.every(val => val === array[0]);

console.log('\n','Task 36')
console.log(isEqual([true, true, true, true])) // true 
console.log(isEqual(['test', 'test', 'test'])) // true 
console.log(isEqual([1,1,1,2])) // false
console.log(isEqual(['10',10,10,10])) // false





// Task 37
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const arrayMerge = (...arrays: any): (number | string | boolean)[] => arrays.flat();

console.log('\n','Task 37')
console.log(arrayMerge([1, 2, 3], [4, 5, 6])) // [1, 2, 3, 4, 5, 6]
console.log(arrayMerge(['a', 'b', 'c'], [4, 5, 6])) // ['a', 'b', 'c', 4, 5, 6]
console.log(arrayMerge([true, true], [1, 2], ['a', 'b'])) // [true, true, 1, 2, 'a', 'b']





// Task 38
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

const arraySort = (array: any): any => array.sort((a: any, b: any) => a.b > b.b ? 1 : -1);

console.log('\n','Task 38')
console.log(arraySort([{a:1,b:2},{a:5,b:4}])) // [{a:1,b:2},{a:5,b:4}]
console.log(arraySort([{a:2,b:10},{a:5,b:4}])) // [{a:5,b:4},{a:2,b:10}]
console.log(arraySort([{a:1,b:7},{a:2,b:1}])) // [{a:2,b:1},{a:1,b:7}]

// myFunction([{a:1,b:2},{a:5,b:4}])
// Expected
// [{a:1,b:2},{a:5,b:4}]

// myFunction([{a:2,b:10},{a:5,b:4}])
// Expected
// [{a:5,b:4},{a:2,b:10}]

// myFunction([{a:1,b:7},{a:2,b:1}])
// Expected
// [{a:2,b:1},{a:1,b:7}]




// Task 39
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const arrayMergeUnique = (arr1: number[], arr2: number[]): number[] => {
    const mergedArray = [...arr1, ...arr2];

    mergedArray.filter((item, index) => mergedArray.indexOf(item) === index);

    return mergedArray.sort((a, b) => a - b);
}

console.log('\n','Task 39')
console.log(arrayMergeUnique([1, 2, 3], [3, 4, 5])) // [ 1, 2, 3, 4, 5 ]
console.log(arrayMergeUnique([-10, 22, 333, 42], [-11, 5, 22, 41, 42])) // [ -11, -10, 5, 22, 41,  42, 333]





// Task 40
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const sumGraterThanN = (array: number[], n: number): number => {
    
    return array.filter((val) => val > n)
                .reduce((sum, val) => sum + val);
            
}

console.log('\n','Task 40')
console.log(sumGraterThanN([1, 2, 3, 4, 5, 6, 7], 2)) // 25
console.log(sumGraterThanN([-10, -11, -3, 1, -4], -3)) // 1
console.log(sumGraterThanN([78, 99, 100, 101, 401], 99)) // 602





// Task 41
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const range = (min: number, max: number): number[] => {
    
    const result: number[] = [];

    for(let i = min; i <= max; i++) {
        result.push(i);
    }

    return result;
}

console.log('\n','Task 41')
console.log(range(2, 10)) // [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 3)) // [1, 2, 3]
console.log(range(-5, 5)) // [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(range(2, 7)) // [2, 3, 4, 5, 6, 7]







// Task 42
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

type NamesGroup = {
    [key: string] : string[]
}

const groupNameObject = (names: string[]): NamesGroup => {
    
    const namesGroup: NamesGroup = {};

    names.forEach((name) => {
        let firstLet = name.substring(0, 1).toLocaleLowerCase();

        if(!(firstLet in namesGroup)) {
            namesGroup[firstLet] = [];
        }
        
        namesGroup[firstLet].push(name);
    });

    return namesGroup;
}

console.log('\n','Task 42')
console.log(groupNameObject(['Alf', 'Alice', 'Ben'])) // { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(groupNameObject(['Ant', 'Bear', 'Bird'])) // { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(groupNameObject(['Berlin', 'Paris', 'Prague'])) // { b: ['Berlin'], p: ['Paris', 'Prague']}




// Task 43
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

type Task43 = (number | string | boolean | null)[];

const unshiftSix = (array: Task43, num: number): Task43 => {
    
    const arrayCopy = [...array];

    if(num < 6) {
        num = 0;
    }

    arrayCopy.unshift(num);

    return arrayCopy;
}

console.log('\n','Task 43')
console.log(unshiftSix([1,2,3], 6)) // [6,1,2,3]
console.log(unshiftSix(['a','b'], 2)) // [0,'a','b']
console.log(unshiftSix([null,false], 11)) // [11,null,false]






// Task 44
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const getNthElement = (array: number[], num: number): number[] => {
    
    const result: number[] = [];
    for(let i = num - 1; i < array.length; i = i + num) {
        result.push(array[i]);
    }

    return result;
}

console.log('\n','Task 44')
console.log(getNthElement([1,2,3,4,5,6,7,8,9,10],3)) // [3,6,9]
console.log(getNthElement([10,9,8,7,6,5,4,3,2,1],5)) // [6,1]
console.log(getNthElement([7,2,1,6,3,4,5,8,9,10],2)) // [2,6,4,8,10]





// Task 45
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

const getCountry = (obj: { [key: string]: string}): string => obj.country;

console.log('\n','Task 45')
console.log(getCountry({  continent: 'Asia',  country: 'Japan'})) // 'Japan'
console.log(getCountry({  country: 'Sweden',  continent: 'Europe'})) // 'Sweden'





// Task 46
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

const getProp = (obj: { [key: string | number]: number | string}): number | string => obj['prop-2'];

console.log('\n','Task 46')
console.log(getProp({  one: 1,  'prop-2': 2})) // 2
console.log(getProp({  'prop-2': 'two',  prop: 'test'})) // 'two'






// Task 47
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

type Continents = {
    [key: string]: string
}

const getByKey = (obj: Continents, key: string): string => obj[key];

console.log('\n','Task 47')
console.log(getByKey({  continent: 'Asia',  country: 'Japan'}, 'continent')) // 'Asia'
console.log(getByKey({  country: 'Sweden',  continent: 'Europe'}, 'country')) // 'Sweden'





// Task 48
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

type Task48 = {
    [key: string]: string | number
}

const hasKey = (obj: Task48, key: string): boolean => {
    
    if((key in obj)) {
        return true;
    } else {
        return false;
    }
}

console.log('\n','Task 48')
console.log(hasKey({a:1,b:2,c:3},'b')) // true
console.log(hasKey({x:'a',y:'b',z:'c'},'a')) // false
console.log(hasKey({x:'a',y:'b',z:'c'},'z')) // true





// Task 49
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

type Task49 = {
    [key: string]: string
}

const toObject = (value: string): Task49 => {

    return {key: value};
}

console.log('\n','Task 49')
console.log(toObject('a')) // {key:'a'}
console.log(toObject('z')) // {key:'z'}
console.log(toObject('b')) // {key:'b'}





// Task 50
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

type Task50 = {
    [key: string]: string
}

const toObjectKeyVal = (key: string, value: string): Task50 => {

    return {[key]: value};
}

console.log('\n','Task 50')
console.log(toObjectKeyVal('a','b')) // {a:'b'}
console.log(toObjectKeyVal('z','x')) // {z:'x'}
console.log(toObjectKeyVal('b','w')) // {b:'w'}





// Task 51
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

type Task51 = {
    [key: string | number]: number | string
}

const arrayCombine = (keys: (string | number)[], values: (string | number)[]): Task51 => {

    const obj: Task51 = {};

    keys.forEach((key, index) => {
        obj[key] = values[index];
    });

    return obj;
}

console.log('\n','Task 51')
console.log(arrayCombine(['a','b','c'],[1,2,3])) // {a:1,b:2,c:3}
console.log(arrayCombine(['w','x','y','z'],[10,9,5,2])) // {w:10,x:9,y:5,z:2}
console.log(arrayCombine([1,'b'],['a',2])) // {1:'a',b:2}




// Task 52
// Write a function that takes an object (a) as argument
// Return an array with all object keys

type Task52 = {
    [key: string]: number
}

const objKeys = (obj: Task52): string[] => Object.keys(obj);

console.log('\n','Task 52')
console.log(objKeys({a:1,b:2,c:3})) // ['a','b','c']
console.log(objKeys({j:9,i:2,x:3,z:4})) // ['j','i','x','z']
console.log(objKeys({w:15,x:22,y:13})) // ['w','x','y']





// Task 53
// Write a function that takes an object (a) as argument
// Return the sum of all object values

type Task53 = {
    [key: string]: number
}

const sumValues = (obj: Task53): number => {

    const values = Object.values(obj);

    return values.reduce((acc, val) => acc + val);
}

console.log('\n','Task 53')
console.log(sumValues({a:1,b:2,c:3})) // 6
console.log(sumValues({j:9,i:2,x:3,z:4})) // 18
console.log(sumValues({w:15,x:22,y:13})) // 50





// Task 54
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

type Task54 = {
    [key: string]: number
}

const removeKeyB = (obj: Task54): Task54 => {

    delete obj.b;

    return obj;
}

console.log('\n','Task 54')
console.log(removeKeyB({ a: 1, b: 7, c: 3 })) // { a: 1, c: 3 }
console.log(removeKeyB({ b: 0, a: 7, d: 8 })) // { a: 7, d: 8 }
console.log(removeKeyB({ e: 6, f: 4, b: 5, a: 3 })) // { e: 6, f: 4, a: 3 }





// Task 55
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

type Task55 = {
    [key: string]: number
}

const objecUpdateKeyMerge = (obj1: Task55, obj2: Task55): Task55 => {

    obj2['d'] = obj2.b;
    delete obj2.b;

    return {...obj1, ...obj2};
}

console.log('\n\r','Task 55')
console.log(objecUpdateKeyMerge({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })) // { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(objecUpdateKeyMerge({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })) // { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(objecUpdateKeyMerge({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })) // { a: 5, b: 4, c: 3, e: 2, d: 1}




// Task 56
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

/* type Task56 = {
    [key: string]: number
}

const multiplyBy = (obj: Task56, num: number): Task56 => {

    
}

console.log('\n\r','Task 55')
console.log(multiplyBy({a:1,b:2,c:3},3)) // {a:3,b:6,c:9}
console.log(multiplyBy({j:9,i:2,x:3,z:4},10)) // {j:90,i:20,x:30,z:40}
console.log(multiplyBy({w:15,x:22,y:13},6)) // {w:90,x:132,y:78} */

// myFunction({a:1,b:2,c:3},3)
// Expected
// {a:3,b:6,c:9}

// myFunction({j:9,i:2,x:3,z:4},10)
// Expected
// {j:90,i:20,x:30,z:40}

// myFunction({w:15,x:22,y:13},6)
// Expected
// {w:90,x:132,y:78}




// Task 57
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

// myFunction({z:'a',y:'b',x:'c',w:'d'})
// Expected
// {a:'z',b:'y',c:'x',d:'w'}

// myFunction({2:'a',4:'b',6:'c',8:'d'})
// Expected
// {a:'2',b:'4',c:'6',d:'8'}

// myFunction({a:1,z:24})
// Expected
// {1:'a',24:'z'}




// Task 58
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

// myFunction({ a: 'a', b: 'b', c: '' })
// Expected
// { a: 'a', b: 'b', c: null }

// myFunction({ a: '', b: 'b', c: ' ', d: 'd' })
// Expected
// { a: null, b: 'b', c: null, d: 'd' }

// myFunction({ a: 'a', b: 'b ', c: ' ', d: '' })
// Expected
// { a: 'a', b: 'b ', c: null, d: null }




// Task 59
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

// myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})
// Expected
// {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}

// myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
// Expected
// {fn: 'Martin', ln: 'Harper', weight: '102kg'}

// myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})
// Expected
// {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}

// myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})
// Expected
// {fn: 'Matthew', ln: 'Müller'}




// Task 60
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

// myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')
// Expected
// [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

// myFunction([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')
// Expected
// [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]








// Task 61
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

// myFunction([1,2,2,3])
// Expected
// {1:1,2:2,3:1}

// myFunction([9,9,9,99])
// Expected
// {9:3,99:1}

// myFunction([4,3,2,1])
// Expected
// {1:1,2:1,3:1,4:1}



// Task 62
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
// Expected
// false

// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
// Expected
// true

// myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
// Expected
// false




// Task 63
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

// myFunction(new Date('2020-06-11'), new Date('2020-06-01'))
// Expected
// 10

// myFunction(new Date('2000-01-01'), new Date('2020-06-01'))
// Expected
// 7457




// Task 64
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

// myFunction(new Date('2000/01/01'), new Date('2000/01/01'))
// Expected
// true 

// myFunction(new Date('2000/01/01'), new Date('2000/01/02'))
// Expected
// false 

// myFunction(new Date('2001/01/01'), new Date('2000/01/01'))
// Expected
// false 

// myFunction(new Date('2000/11/01'), new Date('2000/01/01'))
// Expected
// false





// SPREAD OPERATOR 
// Use spread operator in all tasks

// Task 65
// Write a function that takes two number arrays as parameters 
// and return an array which contains elements from both 
// arrays

// myFunction([1, 2], [3, 4]) 
// Expected
// [1, 2, 3, 4]

// myFunction([1, 2], [3, 4, 5, 6]) 
// Expected
// [1, 2, 3, 4, 5, 6]



// Task 66
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the last element

// myFunction(['Apple', 'Orange', 'Banana'], 'Kiwi'); 
// Expected
// ['Apple', 'Orange', 'Banana', 'Kiwi']




// Task 67
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the first element

// myFunction(['Apple', 'Orange', 'Banana'], 'Kiwi'); 
// Expected
// ['Kiwi', 'Apple', 'Orange', 'Banana']




// Task 68
// Write a function that takes two objects as parameters 
// and return an object which contains properties from both 
// objects

// myFunction({ a:1, b:2 }, { c:3, d:4 }) 
// Expected
// { a:1, b:2, c:3, d:4 }

// myFunction({ a:1, b:2 }, { c:3, d:4, e:5, f:6 }) 
// Expected
// { a:1, b:2, c:3, d:4, e:5, f:6 }





// Task 69
// Write a function that takes an object and a string as parameters 
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

// myFunction({ eyeColor: 'green', age: 10 }, 'Garfield') 
// Expected
// { eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }

// myFunction({ eyeColor: 'blue', age: 15 }, 'Twilight') 
// Expected
// { eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }
