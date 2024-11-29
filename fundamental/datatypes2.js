// let str = 'Hello';
// console.log(str.charAt(1)); // e
// console.log(str.charCodeAt(1)); // 101

// console.log(('$@=').codePointAt(1)); // 64

// let str = 'a'
// let str1 = 'b'
// console.log(str.localeCompare(str1)); // -1 a comes before b | 0 if both equals | 1 if str comes after str1

let str = 'hello world hello'
// console.log(str.includes('hellw')); // true and false if not found

// console.log(str.indexOf('world')); // 6
// console.log(str.lastIndexOf('hello')); // 12

// console.log(str.startsWith('hello')); // true
// console.log(str.endsWith('hellow')); // false

str = 'abc9'
// console.log(str.match(/\d+/)); // [9, more info] and null if not matches

// str = 'abc123def456'
// let matches = str.matchAll(/\d+/g);
// for (const match of matches) {
//     console.log(match[0]); // 123 , 456
// }

// str = 'we abc 123def456'
// console.log(str.search(/sabc/)); // 3 and -1 if not found

// str = '5';
// console.log(str.padStart(3, "0"));
// console.log(str.padEnd(3, "0"));

// str = 'hello world'
// console.log(str.slice(2, 4)); // start index, end index excluding
// console.log(str.substring(2, 4)); // start index, end index excluding
// console.log(str.substr(2, 4)); // start index, end index including

// str = 'apple, banana, mango'
// console.log(str.split(", ")); // [apple, banana, mango]

// str = 'hello', str2 = 'world'
// console.log(str.concat(' ', str2, ' !'));

// let city = 'Indore'
// console.log(city.toUpperCase(), city.toLowerCase());

// str = '  ranvir'
// console.log(str.trim()); // removes both side spaces
// console.log(str.trimStart()); // remove leading/left spaces

// str = '\u00F1'
// console.log(str.normalize('NFC')); // n acute

// str = '\u00F1'
// console.log(str.normalize('NFC')); // n acute

// str = new String("hello");
// console.log(str); // [String: 'hello']
// console.log(str.toString()); // hello

// str = new String("hello");
// console.log(str.valueOf()); // hello

// str = String.raw`Hello\nworld`;
// console.log(str);

