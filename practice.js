// Question 1
{
function toTwelveHourTime(hour) {
    if (hour >= 12) {
        return `${hour - 12} PM`;
    }
    else if (hour === 0) {
        return `${hour + 12} AM`;
    }
    else {
        return `${hour} AM`
    }
}

const days = [
    "Sunday", 
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

let today = new Date();
let day = today.getDay();
let hour = toTwelveHourTime(today.getHours());
let minutes = today.getMinutes();
let seconds = today.getSeconds()

let time = (`
Today is: ${days[day]}.
Current time is : ${hour} : ${minutes} : ${seconds}`)
}

// Question 2
{
    function printCurrentPage() {
        window.print()
    }
}

// Question 3
{
    let date = new Date().toLocaleDateString();
    let arr = date.split('/');
    
    if (arr[0].length === 1) {
        arr[0] = '0' + arr[0];
    }
    
    if (arr[1].length === 1) {
        arr[1] = '0' + arr[1];
    }
    
   let date_string = arr.join('-');
}

// Question 4
{
    let s1 = 5, s2 = 6, s3 = 7;
    let s = (s1 + s2 + s3) / 2;
    let a = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3))
    let answer = `${a.toFixed(3)} units squared`
}

// Question 5
{
    function rotateString(string) {
        const len = string.length - 1;
        arr = [];
        for (let i = 0; i < len; i++) {
            if (i === 0) {
                arr[0] = string[len];
            }
            arr[i + 1] = string[i];
        }
        return arr.join('');
    }
}

// Question 6
{
    function isLeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return true;
        }
        return false;
    }
}

// Question 7
{
    for (let i = 2014; i < 2051; i++) {
        const date = new Date(`January 1, ${i}`);
        if (date.getDay() === 0) {
            let answer = date.toDateString();
            break;
        }
    }
}

// Question 8
{
    document.addEventListener("DOMContentLoaded", () => {
        // Use math library to randomly generate answer
        let num = Math.ceil((Math.random() * 10))
        document.querySelector('form').onsubmit = function () {
            
            // Retrieve user's answer upon submit
            let guess = document.querySelector('#guess').value;
            let div = document.querySelector("#response")

            // Check to see if user's input matches answer
            if (guess == num) {
                div.innerHTML = "Your guess was correct!";
            }
            else {
                div.innerHTML = "Your guess was incorrect!;"
            }

            // prevent form from submitting
            return false;
        }
    })  
}

// Question 9
{
    let date = new Date()
    let christmas = new Date(`December 25, ${date.getFullYear()}`).getTime();
    let diff = christmas - date.getTime();;

    let answer = Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// Question 10
{
    function mult() {
        let arr = document.querySelectorAll('.num');
        let n1 = parseInt(arr[0].value), n2 = parseInt(arr[1].value);
        document.querySelector('#response').innerHTML = (n1 * n2);
    }

    function divide() {
        let arr = document.querySelectorAll('.num');
        let n1 = parseInt(arr[0].value), n2 = parseInt(arr[1].value);
        document.querySelector('#response').innerHTML = (n1 / n2).toFixed(3)
    }
}

// Question 11
{
    function tempConverter(temp, conversion="C") {
        if (conversion !== "C" && conversion !== "F") {
            throw 'Invalid Conversion';
        }
        if (conversion === "C") {
            newTemp = ((5/9) * (temp - 32));
        }
        else {
            newTemp = (temp * (9/5) + 32);
        }
        return newTemp.toFixed(3);
    }
}

// Question 12
{
    // let URL = window.location.href;
}

// Question 13
{
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector('form').onsubmit = function () {
            let name = document.querySelector('#name').value;
            let val = document.querySelector('#value').value;
            eval(`var ${name} = '${val}'`);
            console.log(name)
            // Prevent form from submitting
            return false;
        }
    });
}

// Question 14
{
    function getExtension(filename) {
        const found = filename.match(/\..+/);
        return found[0];
    }
    // console.log(getExtension('blah.pdf'));
}

// Question 16
{
    function sum(n1, n2) {
        if (n1 === n2) {
            return 3 * (n1 + n2);
        }
        return n1 + n2;
    }
}

// Question 17
{
    function tripleAbs(n1, n2) {
        if (n1 === n2) {
            return 3 * Math.abs(n1 - n2);
        }
        return Math.abs(n1 - n2);
    }
}

// Question 18
{
    function fiftyCheck(n1, n2) {
        return ((n1 === 50 || n2 === 50) || n1 + n2 === 50);
    }
}

// Question 19
{
    function equalityCheck(n1) {
        return ((n1 >= 80 && n1 <= 120) || n1 === 400);
    }
}

// Question 20
{
    function posNeg(n1, n2) {
        return ((n1 > 0 && n2 < 0) || (n2 > 0 && n1 < 0));
    }
}

// Question 21
{
    function pyPrepend(s1) {
        if (s1.startsWith('Py')) {
            return s1;
        }
        return "Py" + s1;
    }
}

// Question 22
{
    function removeChar(s1, n) {
        let newString = ''
        for (let i = 0; i < s1.length; i++) {
            if (i !== n) {
                newString += s1[i]
            }
        }
        return newString;
    } 
}

// Question 23
{
    function newString(s1) {
        let first = s1[0], last = s1[s1.length - 1];
        let arr = s1.split('');
        arr[0] = last, arr[s1.length - 1] = first;
        return arr.join('');
    }
}

// Question 24
{
    function newString(s1) {
        return s1[0] + s1 + s1[s1.length - 1];
    }
}

// Question 25
{
    function isMultiple(num) {
        return (num % 3 === 0 || num % 7 === 0) ;
    }
}

// Question 26
{
    function newString(s1) {
        return s1.slice(0,3) + s1 + s1.slice(s1.length - 3, s1.length);
    }
}

// Question 27
{
    function javaCheck(s1) {
        return s1.startsWith('Java');
    }
}

// Question 28
{
    function rangeCheck(num1, num2) {
        return (num1 >= 50 && num1 <= 90) && (num2 >= 50 && num2 <= 20);
    }
}

// Question 29
{
    function rangeCheck(n1, n2, n3) {
        let arr = [n1, n2, n3]
        for (let i = 0; i < 3; i++) {
            if (arr[i] < 50 || arr[i] > 99) {
                return false;
            }
        }
        return true;
    }
}

// Question 30
{
    function scriptCheck(s1) {
        return (s1.slice(0,5) === 'Script');
    }
}

// Question 31
{
    function getMax(n1, n2, n3) {
        return Math.max(n1, n2, n3);
    }
}

// Question 32
{
    function closestToHundred(n1, n2) {
        let dif1 = 100 - n1, dif2 = 100 - n2;
        if (dif1 > dif2) {
            return n2;
        }
        return n1;
    }
}

// Question 33
{
    function inRange(n1, n2) {
        if ((n1 >= 40 && n1 <= 60) && (n2 >= 40 && n2 <= 60)) {
            return true;
        } 
        else if ((n1 >= 70 && n1 <= 100) && (n2 >= 70 && n2 <= 100)) {
            return true;
        }
        return false;
    }
}

// Question 34
{
    function findMax(n1, n2) {
        return Math.max(n1, n2);
    }
}

// Question 35
{
    function charInString(s1, char) {
        return s1.slice(2,5).includes(char);
    }
}

// Question 36
{
   function lastThreeSame(n1, n2, n3) {
    let arr = [n1, n2, n3].map( (element) => {
        let string = element.toString();
        return string[string.length - 1];
    })
    return (arr[0] === arr[1] && arr[1] === arr[2]);
   }
}

// Question 37
{
    function threeString(s1) {
        let newString = ''
        for (var i = 0; i < s1.length; i++) {
            if (s1[i] === s1[i].toLowerCase()) {
                newString += s1[i];
            }
        }
        if (newString.length < 3) {
            return newString.toUpperCase();
        }
        return newString.slice(0,3);  
    }
}

// Question 38
{
    function gradeCheck(totalMarks, examination='Final-exam') {
        if (totalMarks >= 90 && examination === 'Final-exam') {
            return true;
        }
        else if (totalMarks >= 89) {
            return true;
        }
        return false;
    }
}

// Question 39
{
    function inRange(n1, n2) {
        let sum = n1 + n2
        if (sum >= 50 && sum <= 80) {
            return 65;
        }
        return 80;
    }
}

// Question 40 
{
    function checkDiff(n1, n2) {
        return ((n1 === 8 || n2 === 8) || Math.abs(n1 - n2) === 8);
    }
}

// Question 41
{
    function sameCheck(n1, n2, n3) {
        if (n1 === n2 && n2 === n3) {
            return 30
        }
        else if (n1 === n2 || n2 === n3 || n1 === n3) {
            return 40;
        }
        return 20;
    }
}

// Question 42
{
    function modeCheck(n1, n2, n3) {
        if (n1 < n2 && n2 < n3) {
            return 'strict mode';
        }
        else if (n2 < n3) {
            return 'soft mode';
        }
        return undefined;
    }
}

// Question 43
{
    function checkLastDigit(n1, n2, n3) {
        let arr = [n1, n2, n3].map( (elm) => {
            let str = elm.toString();
            return str[str.length - 1];
        })
        return (arr[0] === arr[1] && arr[1] === arr[2]);
    } 
}

// Question 44
{
    function numCheck(n1, n2, n3) {
        return (n1 >= 20 && (n1 < n2 || n1 < n3)) ||
        (n2 >= 20 && (n2 < n1 || n2 < n3)) ||
        (n3 >= 20 && (n3 < n1 || n3 < n2));
    }
}

// Question 45
{
    function fifteenCheck(n1, n2) {
        return ((n1 === 15 || n2 === 15)) || (n1 + n2 === 15 || Math.abs(n1 - n2) === 15);
    }
}

// Question 46
{
    function multipleCheck(n1, n2) {
        if (!((n1 % 7 === 0 || n1 % 11 === 0) && (n2 % 7 === 0 || n2 % 11 === 0))) {
            return ((n1 % 7 === 0 || n1 % 11 === 0) || (n2 % 7 === 0 || n2 % 11 === 0));
        }
        return false; 
    }
}

// Question 47
{
    function rangeCheck(x) {
        return (x >= 40 && x <= 4000);
    }
}

// Question 48
{
    function reverseString(s1) {
        let arr = [];
        for (var i = s1.length - 1; i > -1; i--) {
            arr.push(s1[i]);
        }
        return arr.join('');
    }
}

// Question 49
{
    function caesarCipher(str) {
        let newString = '';
        let lowerArr = 'abcdefghijklmnopqrstuvwxyz';
        let upperArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < str.length; i++) {
            if (!str[i].match(/[a-z]/i)) {
                newString += str[i];
            }
            else if (str[i] === str[i].toLowerCase()) {
                newString += lowerArr[(str[i].charCodeAt(0) - 97 + 1) % 26];
            }
            else if (str[i] === str[i].toUpperCase()) {
                newString += upperArr[(str[i].charCodeAt(0) - 65 + 1) % 26];
            }
        }
        return newString;
    }
}

// Question 50
{
    function wordCap(text) {
        let arr = text.split(' ');
        let newArr = arr.map((elm) => {
            return elm[0].toUpperCase() + elm.slice(1, elm.length);
        })
        return newArr.join(' ')
    }
}

// Question 51
{
    function toTime(minutes) {
        return `${Math.floor(minutes / 60)} hour(s) and ${minutes % 60} minute(s)`;
    }
}

// Question 52
{
    function sortString(text) {
        return text.split('').sort().join('');
    }
}

// Question 53 
{
    function threeSep(text) {
        return (/a...b/).test(text) || (/b...a/).test(text);
    }
}

// Question 54
{
    function vowelCount(text) {
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if ('aeiou'.includes(text[i].toLowerCase())) {
                count++;
            }
        }
        return count;
    }
}

// Question 55
{
    function ptCount(text) {
        let pcount = 0, tcount = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i].toLowerCase() === 'p') {
                pcount++;
            }
            else if (text[i].toLowerCase() === 't') {
                tcount++;
            }
        }
        return pcount === tcount;
    }
}

// Question 56
{
    function formatDivide(x, y) {
        return new Intl.NumberFormat().format((x / y));
    }
}

// Question 57 
{
    function replicateString(s1, n) {
        let newString = '';
        for (let i = 0; i < n; i++) {
            newString += s1;
        }
        return newString;
    }
}

// Question 58
{
    function lastThreeCopy(s1, n) {
        if (s1.length < 3) {
            return undefined
        }
        let slice = s1.slice(-3), newString = '';
        for (let i = 0; i < n; i++) {
            newString += slice;
        }
        return slice;
    }
}

// Question 59 
{
    function firstHalf(s1) {
        if (s1.length % 2 != 0) {
            return undefined;
        }
        return s1.slice(0, s1.length / 2)
    }
}

// Question 60 
{
    function newString(s1) {
        return s1[0] + s1[s1.length - 1];
    }
}

// Question 61
{
    function concatString(s1, s2) {
        return s1.slice(1) + s2.slice(1);
    }
}

// Question 62
{
    function moveThree(s1) {
        if (s1.length < 3) {
            return undefined;
        }
        let arr = s1.split('');
        let newArr = (arr.slice(-3).concat(arr.slice(0, arr.length - 3)));
        return newArr.join('')
    }
}

// Question 63
{
    function midThree(s1) {
        if (s1.length % 2 == 0 || s1.length < 3) {
            return undefined;
        }
        let start = Math.ceil(s1.length / 2 - 2);
        return s1.slice(start, start + 3)
    }
}

// Question 64
{
    function equalConcat(s1, s2) {
        if (s1.length == s2.length) {
            return s1 + s2;
        }
        if (s1.length > s2.length) {
            let dif = s1.length - s2.length;
            return s1.slice(0, s1.length - dif) + s2;
        }
        let dif = s2.length - s1.length;
        return s1 + s2.slice(0, s2.length - dif);
    }
}

// Question 65
{
    function endScript(s1) {
        if (s1.length < 6) {
            return undefined;
        }
        return s1.slice(-6) == 'Script';
    }
}

// Question 66
{
    function cityCheck(city) {
        let prefix = city.slice(0, 3);
        return (prefix == 'Los' || prefix == 'New')
    }
}

// Question 67
{
    function pCheck(s1) {
        let first = s1[0], last = s1[s1.length - 1];
        if (first == 'P' || last == 'P') {
            return s1.slice(1, s1.length - 1);
        }
        return s1;
    }
}

// Question 68 
{
    function nChars(s1, n) {
        if (s1.length < n) {
            return undefined;
        }
        return s1.slice(0, n) + s1.slice(-1 * n);
    }
}

// Question 69
{
    function arrSum(arr) {
        let total = 0;
        for (let i = 0; i < 3; i++) {
            total += arr[i];
        }
        return total;
    }
}

// Question 70 
{
    function rotateArray(arr) {
        return [arr[2], arr[1], arr[0]];
    }
}

// Question 71
{
    function oneArray(arr) {
        return (arr[0] === 1 || arr[arr.length - 1] === 1);
    }
}

// Question 72
{
    function threeCheck(arr) {
        return (arr[0] === 3 && arr[arr.length - 1] === 3);
    } 
}

// Question 73
{
    function reverseArray(arr) {
        return [arr[2], arr[1], arr[0]];
    }
}

// Question 74
{
    function maxSetter(arr) {
        let max = Math.max(arr[0], arr[arr.length - 1]);
        return arr.map( () => {
            return max;
        })
    }
}

// Question 75
{
    function arrayConcat(arr1, arr2) {
        return [arr1[1], arr2[1]]
    }
}

// Question 76
{
    function firstLast(arr) {
        if (arr.length == 0) {
            return undefined;
        }
        return [arr[0], arr[arr.length - 1]];
    }
}

// Question 77
{
    function oneThreeCheck(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 1 || arr[i] == 3) {
                return true;
            }
        }
        return false;
    } 
}

// Question 78
{
    function oneThreeCheck(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 1 || arr[i] == 3) {
                return false;
            }
        }
        return true;
    } 
}

// Question 79
{
    function thirtyFortyCheck(arr) {
        if (arr.length > 2) {
            return undefined;
        }
        return (arr.filter(x => x == 30).length == 2 || arr.filter(x => x == 40).length == 2)
    }
}

// Question 80
{
    function firstLastSwap(arr) {
        if (arr.length == 0) {
            return undefined;
        }
        let tmp1 = arr[0], tmp2 = arr[arr.length - 1];
        arr[0] = tmp2, arr[arr.length - 1] = tmp1;
        return arr;
    }
}

// Question 81
{
    function stringSum(num) {
        let s1 = num.toString()
        return parseInt(s1[0]) + parseInt(s1[1]); 
    }
}

// Question 82
{
    function noCarry(x, y) {
        let s1 = x.toString(), s2 = y.toString();
        let longestLength = Math.max(s1.length, s2.length);
        return parseInt((x + y).toString().slice(0, longestLength));
    }
}

// Question 83
{
    function longestString(arr) {
        let longestString = '';
        for (let i = 0; i < arr.length; i++) {
            longestString = arr[i].length > longestString.length ? arr[i] : longestString;
        }
        return longestString;
    }
}

// Question 84
{
    function shiftOne(str) {
        let newString = '';
        let lowerArr = 'abcdefghijklmnopqrstuvwxyz';
        let upperArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < str.length; i++) {
            if (!str[i].match(/[a-z]/i)) {
                newString += str[i];
            }
            else if (str[i] === str[i].toLowerCase()) {
                newString += lowerArr[(str[i].charCodeAt(0) - 97 + 1) % 26];
            }
            else if (str[i] === str[i].toUpperCase()) {
                newString += upperArr[(str[i].charCodeAt(0) - 65 + 1) % 26];
            }
        }
        return newString;
    }
}

// Question 85
{
    function twoParts(arr) {
        let arr1 = [], arr2 = [];
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 == 0) {
                arr1.push(arr[i])
            }
            else {
                arr2.push(arr[i])
            }
        }
        let sum1 = arr1.reduce((accumulation1, x) => accumulation1 + x, 0);
        let sum2 = arr2.reduce((accumulation2, y) => accumulation2 + y, 0);
        return [sum1, sum2];
    }
}

// Question 86
{
    function angleType(deg) {
        if (deg > 0 && deg < 90) {
            return 'acute';
        }
        else if (deg == 90) {
            return 'right';
        }
        else if (deg > 90 && deg < 180) {
            return 'obtuse';
        }
        else if (deg == 180) {
            return 'straight angle';
        }
        return undefined;
    }
}

// Question 87
{
    function swapCheck(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                const copy = Array.from(arr2)
                copy[j] = arr1[i];
                if (JSON.stringify(copy) === JSON.stringify(arr1)) {
                    return true;
                }
            }
        }
        return false;
    }
}

// Question 88
{
    function numCheck(n1, n2, div) {
        return (
            (n1 % div === 0 && n2 % div === 0) ||
            (n1 % div !== 0 && n2 % div !== 0)
        );
    }
}

// Question 89
{
    function arithmeticCheck(x, y, z) {
        let operatorArr = ['+', '-', '*', '/'];
        for (let i = 0; i < 4; i++) {
            if (eval(`${x} ${operatorArr[i]} ${y} === ${z}`)) {
                return true;
            }
        }
        return false;
    }
}

// Question 90
{
    function nthMax(arr, k) {
        arr = arr.sort((a, b) => (a - b)).reverse();
        return arr[k - 1];
    }
}

// Question 91
{
    function consecutiveSum(arr) {
        let newArr = [];
        for (let i = 1; i < arr.length; i++) {
            newArr.push((arr[i - 1] + arr[i]))
        }
        return Math.max(...newArr);
    }
}

// Question 92
{
    function maxDifference(arr) {
        let newArr = [];
        for (let i = 1; i < arr.length; i++) {
            newArr.push(Math.abs(arr[i] - arr[i - 1]));
        }
        return Math.max(...newArr);
    }
}

// Question 93
{
    function maxDifference(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j != i && j < arr.length; j++) {
                newArr.push(Math.abs(arr[i] - arr[j]));
            }
        }
        return Math.max(...newArr);
    }
}

// Question 94
{
    function maxInstances(arr) {
        let dict = {};
        for (let i = 0; i < arr.length; i++) {
            if (!(arr[i] in dict)) {
                dict[arr[i]] = 1;
            }
            else {
                dict[arr[i]]++;
            }
        }
        return Object.keys(dict).reduce((a, b) => dict[a] > dict[b] ? a : b);
    }   
}

// Question 95
{
    function replaceNum(arr, x) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                arr[i] = x;
            }
        }
        return arr;
    }
}

// Question 96
{
    function consecutiveDifferenceSum(arr) {
        let total = 0;
        for (let i = 1; i < arr.length; i++) {
            total += Math.abs(arr[i] - arr[i - 1]);
        }
        return total;
    }
}

// Question 97
{
    function minPalindrome(s1) {
        const result = [];
        for (let i = 0; i < s1.length; i++) {
            const step = [...s1.slice(i)];
            if (s1.slice(i) === step.reverse().join('')) {
                return `${s1}${result.reverse().join('')}`
            }
            else {
                result.push(s1[i]);
            }
        }
    }
}

// Question 98
{
    function minSwitch(s1) {
        let arr = s1.split('');
        for (let i = 0; i < s1.length; i++) {
            let asciiValue = arr[i].charCodeAt(0);
            if (!(asciiValue >= 65 && asciiValue <= 90)) {
                arr[i] = arr[i].toUpperCase()
            }
        }
        return arr.join('');
    }
}

// Question 99
{
    function stringRearrange(s1, s2) {
        if (s1.length != s2.length) {
            return false;
        }
        
        let dict1 = {}, dict2 = {};
        for (let i = 0; i < s1.length; i++) {
            if (!(s1[i] in dict1)) {
                dict1[s1[i]] = 1;
            }
            else {
                dict1[s1[i]]++;
            }
            if (!(s2[i] in dict2)) {
                dict2[s2[i]] = 1;
            }
            else {
                dict2[s2[i]]++;
            }
        }
        return Object.keys(dict1).every((key) => dict1[key] === dict2[key]);
    }
}

// Question 100
{
    function sharedElm(arr1, arr2) {
        let longestArr, shortestArr;
        if (arr1.length > arr2.length) {
            longestArr =  arr1, shortestArr = arr2;
        }
        else {
            longestArr = arr2, shortestArr = arr1;
        }

        for (let i = 0; i < longestArr.length; i++) {
            if (shortestArr.includes(longestArr[i])) {
                return true;
            }
        }
        return false;
    }
}

// Question 101
{
    function isUppercase(char) {
        return (char >= 'A' && char <= 'Z');
    }

    function isLowercase(char) {
        return (char >= 'a' && char <= 'z')
    }

    function latinCheck(s1) {
        if (!(isUppercase(s1[0]) || isLowercase(s1[0]))) {
            return false;
        }
        for (let i = 1; i < s1.length; i++) {
            if (!(isUppercase(s1[i]) || isLowercase(s1[i]))) {
                return false;
            }
            if (isUppercase(s1[i]) && isUppercase(s1[i - 1])) {
                return false;
            }
            if (isLowercase(s1[i]) && isLowercase(s1[i - 1])) {
                return false;
            }
        }
        return true;
    }
} 

// Question 102
{
    function inversionCheck(arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    count++;
                }
            }
        }
        return count;
    }
}

// Question 103
{
    function maximumNumber(n1) {
        let substrings = [], s1 = n1.toString();

        for (let i = 0; i < s1.length; i++) {
            let substr = '';
            for (let j = 0; j < s1.length; j++) {
                if (!(i == j)) {
                    substr += s1[j];
                }
            }
            substrings.push(parseInt(substr));
        }
        return Math.max(...substrings);
    }
}

// Question 104
{
    function closestPair(arr, n) {
        let closestDif = 0;
        let pair = [null, null];
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                const dif = Math.abs(arr[i] - arr[j]);
                if (dif < n && dif > closestDif) {
                    closestDif = dif;
                    pair[0] = arr[i], pair[1] = arr[j];
                }

            }
        }
        return pair;
    }
}

// Question 105
{
    function toNumArr(num) {
        return num.split('').map((elm) => parseInt(elm))
    }

    function reduceNum(num) {
        let count = 1;
        num = num.toString();
        
        while (true) {
            let sum = toNumArr(num).reduce((partialSum, a) => partialSum + a, 0).toString();
            if (sum.length === 1) {
                return count;
            }
            num = sum;
            count++;
        }
    }
}

// Question 106
{
    function divideInt(x, y) {
        while (true) {
            const quotient = x / y;
            if (!(Number.isInteger(quotient))) {
                return x;
            }
            x = quotient;
        }
    }
}

// Question 107
{   
    function divArr(arr) {
        let count = 0, pairs = [];
        arr.sort((a, b) => a - b)
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] % arr[i] === 0) {
                    pairs.push([arr[i], arr[j]])
                    count++;
                }
            }
        }
        return count;
    }
}

// Question 108
{
    function dotProduct(arr1, arr2) {
        let total = 0;
        for (let i = 0; i < 3; i++) {
            total += arr1[i] * arr2[i];
        }
        return total;
    }
}

// Question 109
{
    function isPrime(num) { 
        if (num === 1) {
            return false;
        }
        if (num === 2) {
            return true;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    function sortPrimes(num) {
        let arr = []
        for (let i = 2; i < num + 1; i++) {
            if (isPrime(i)) {
                arr.push(i)
            }
        }
        return arr;
    }
}

// Question 110
{
    function evenCount(arr, num) {
        let count = 0;
        if (!(arr.includes(num))) {
            return undefined;
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                return count;
            }
            if (arr[i] % 2 === 0) {
                count++;
            }
        }
    }
}

// Question 111
{
    function equalNums(arr) {
        let foo = arr[0], bar = arr[1], baz = arr[2];   
        if (foo !== bar && bar !== baz) {
            return 'The three numbers are unequal';
        }
        if (foo === bar && bar === baz) {
            return 'The three numbers are equal';
        }
        if (foo === bar) {
            return baz;
        }
        if (bar === baz) {
            return foo;
        }
        return bar;
    }
}

// Question 112
{
    function factorialize(num) {
        let total = num;
        num--;
        do {
            num--;
            total += (total * num)
        } while (num > 1);
        
        return total;
    } 

    function trailingZeroCount(num) {
        let string = factorialize(num).toString(), count = 0;
        console.log(string);
        for (let i = string.length - 1; i > -1; i--) {
            if (string[i] !== '0') {
                return count;
            }
            count++;
        }
    }
}

// Question 113
{
    function repeatedDivision(num) {
        let order = 0, sum = 0;
        while (true) {
            const quotient = Math.floor(num / 2 ** order);
            if (quotient === 0) {
                return sum;
            }
            sum += quotient;
            order++;
        }
    }
}

// Question 114
{
    function sentenceCheck(text) {
        return ((text[0] >= 'A' && text[0] <= 'Z') && text[text.length - 1] === '.');
    }
}

// Question 115
{
    function lrDiagonalCheck(arr) {
        if (!(arr.every((elm) => elm.length === arr.length))) {
            return undefined;
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if ((i === j && arr[i][j] === 0) || (i !== j && arr[i][j] !== 0)) {
                    return false
                }
            }
        }
        return true;
    }  
}

// Question 116
{
    function modThreeArr(s1) {
        pieces = s1.split(''), hashLoc = s1.indexOf('*'), possibilities = [];
        for (let i = 0; i < 10; i++) {
            pieces[hashLoc] = i;
            let num = pieces.join('')
            if (eval(`${num} % 3`) === 0) {
                possibilities.push(num);
            }
        }
        return possibilities;
    }
}   

// Question 117
{
    function identityCheck(arr) {
        if (!(arr.every((elm) => elm.length === arr.length))) {
            return undefined;
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if ((i === j && arr[i][j] !== 1) || (i !== j && arr[i][j] !== 0)) {
                    return false
                }
            }
        }
        return true;
    }
}

// Question 118
{
    function inRange(foo, bar, baz) {
        return (bar >= foo && bar <= baz);
    }
}

// Question 119
{
    function isIncreasing(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }
}

// Question 120
{
    function pointCheck(center, r, point) {
        let x2 = center[0], y2 = center[1], x1 = point[0], y1 = point[1];
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) < r;
    }
}

// Question 121
{
    function triangularMatrix(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (!(arr[i].slice(i + 1).every((elm) => elm === 0))) {
                return false;
            }
        }
        return true;
    }
}

// Question 122
{
    function isIncreasingDecreasing(arr) {
        if ((new Set(arr)).size !== arr.length) {
            return false;
        }
        let increasingArr = arr.slice().sort((a, b) => a - b);
        let arrString = JSON.stringify(arr);

        if (arrString === JSON.stringify(increasingArr)) {
            return true;
        }

        if (arrString === JSON.stringify(increasingArr.reverse())) {
            return true;
        }
        return false;
    }
}

// Question 123
{
    function isPermutation(arr, n) {
        let range = Array.from(new Array(n), (x, i) => i + 1);
        return (new Set(arr).size === range.length);
    }
}

// Question 124
{
    function logicalNor(bool1, bool2) {
        return !(bool1 === true || bool2 === true);
    }
}

// Question 125
{
    function longestString(arr) {
        return arr.sort((a, b) => a.length - b.length)[arr.length - 1];
    } 
}

// Question 126
{
    function maxEven(arr) {
        let evens = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(arr[i]);
            }
        }
        return Math.max(...evens);
    }
}

// Question 127
{
    function reverseBinary(num) {
        let reversedBinary = ("00000000" + num.toString(2)).slice(-8).split('').reverse().join('');
        return parseInt(reversedBinary, 2);
    }
}

// Question 128
{
    function smallestRound(num) {
        while (true) {
            if (num % 10 === 0) {
                return num
            }
            num++;
        }
    }
}

// Question 129
{
    function isPrime(num) {
        if (num === 1) {
            return false;
        } 
        if (num === 2) {
            return true;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    function smallestGreaterPrime(num) {
        while (true) {
            if (isPrime(num)) {
                return num;
            }
            num++;
        }
    }
}

// Question 130
{
    function numEvenDigits(num) {
        return (
            num.toString().split('').filter(digit => parseInt(digit) % 2 === 0).length
        );
    }
}

// Question 131
{
    function prefixSums(arr) {
        let prefixArr = [arr[0]], accumulation = 0;
        for (let i = 1; i < arr.length; i++) {
            prefixArr.push(prefixArr[i - 1] + arr[i]);
        }
        return prefixArr;
    }
}

// Question 132
{
    function isPrime(num) {
        if (num === 1) {
            return false;
        } 
        if (num === 2) {
            return true;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    function getPrimeFactors(num) {
        let factorLst = [];
        for (let i = 1; i < num + 1; i++) {
            if (num % i === 0 && isPrime(i)) {
                factorLst.push(i);
            }
        }
        return factorLst;
    }
}

// Question 133
{
    function isProper(arr) {
        return arr[0] > arr[1] ? 'Improper Fraction' : 'Proper Fraction';
    }
}   

// Question 134
{
    function shiftOne(s1) {
        let newString = '', charArr = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < s1.length; i++) {
            newString += charArr[((s1[i].charCodeAt(0)) - 96) % 26];
        }
        return newString;
    }
}

// Question 135
{
    function uniqueLetters(s1) {
        let dict = {}, newString = '';
        
        for (let i = 0; i < s1.length; i++) {
            if (!(s1[i] in dict)) {
                dict[s1[i]] = 1;
            }
            else {
                dict[s1[i]]++;
            }
        }
        for ([key, val] of Object.entries(dict)) {
            if (val === 1) {
                newString += key;
            }
        }
        return newString;
    }
}

// Question 136
{
    function replaceDigit(s1) {
        let replaced = false, newString = '', digits = '0123456789';

        for (let i = 0; i < s1.length; i++) {
            if (!(replaced) && digits.includes(s1[i])) {
                newString += '$';
                replaced = true;
            }
            else {
                newString += s1[i];
            }
        }
        return newString
    }  
}

// Question 137
{
    function greaterThanFifteen(num) {
        return num > 15 ? num : 15;
    }
}

// Question 138
{
    function reverse16Bit(num) {
        let reversedBinary = ("0000000000000000" + num.toString(2)).slice(-16).split('').reverse().join('');
        return parseInt(reversedBinary, 2);
    }
}

// Question 139
{
    function rightmostRound(arr) {
        let round = 0;
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 10 === 0) {
                round = i;
            }
        }
        return round;
    }
}

// Question 140
{
    function digitsSame(arr) {
        return (new Set(arr).size === 1)
    }
}

// Question 141
{
    function numSameElements(arr1, arr2) {
        let intersectionSet = new Set(), set1 = new Set(arr1), set2 = new Set(arr2);

        for (let i of set2) {
            if (set1.has(i)) {
                intersectionSet.add(i)
            }
        }
        return intersectionSet.size;
    }
}

// Question 142
{
    function simplifyPath(path) {
        let arr = path.split('/'), output = [];
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '' || arr[i] === '.') {
                continue;
            }
            if (arr[i] === '..') {
                output.pop();
            }
            else {
                output.push(arr[i]);
            }
        }
        return '/' + output.join('/');
    }
}

// Question 143
{
    function longestString(arr) {
        return arr.sort((a, b) => a.length - b.length);
    }
}

// Question 144
{
    function urlSeparator(url) {
        return (url.match(/(https?):\/\/(.*?)\/(.*?)(?:\/|$)/)).slice(1).filter((match) => match !== '');
    }
}

// Question 145
{
    function maximumRange(n) {
        let largestRange = 1, range;
        
        while (true) {
            range = Array.from(new Array(largestRange), (x, i) => i + 1);
            if ((range.reduce((accumulation, x) => accumulation + x)) > n) {
                return largestRange - 1;
            }
            largestRange++;
        }
    }
}

// Question 146
{
    function sumCubes(n) {
        let range = Array.from(new Array(n), (x, i) => i+ 1);
        return (
            (range.map((x) => x ** 3)).reduce((accumulation, x) => accumulation + x)
        );
    }
}

// Question 147
{
    function digitSum(s1) {
        let digits = '0123456789', total = 0;

        for (let i = 0; i < s1.length; i++) {
            if (digits.includes(s1[i])) {
                total += parseInt(s1[i]);
            }
        }
        return total;
    }
}

// Question 148
{
    function swapHalves(arr) {
        return [...arr.slice(arr.length / 2), ...arr.slice(0, arr.length / 2)]
    }
}

// Question 149
{
    function swapCase(s1) {
        return (
            s1.split('').map((char) => char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase()).join('')
        );
    }
}

// Question 150
{
    function swapPairs(num) {
        let string = num.toString(), arr = [];

        if (string.length %2 !== 0) {
            return false;
        }

        for (let i = 1; i < string.length; i += 2) {
            arr.push(string.slice(i - 1, i + 1).split('').reverse().join(''));
        }
        return arr.join('');
    }
}