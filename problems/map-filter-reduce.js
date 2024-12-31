const arr = [1,2,3,4,5];

// const arrnew = arr.map((item)=> item+1);
// const arrnew = arr.map((item)=> item *2);
// console.log(arrnew);

// const arrnew = arr.filter((item)=> item>2);
// const arrnew = arr.filter((item)=> item > 0); // filters negetive values
// const arrnew = arr.filter((item)=> item %2 === 0); // filters negetive values
// console.log(arrnew);

// const arrsum = arr.reduce((accumulater, current)=> accumulater + current, 0);
// console.log(arrsum); // 15

const actors = [
    { fname: "Ranvir", lname: "singh", age:33 },
    { fname: "Deepika", lname: "P", age:40 },
    { fname: "Spider", lname: "man", age:33 },
    { fname: "Elon", lname: "musk", age:50 },
];
// const actorsnew = actors.reduce((acc, curr) => {
//     if(curr.age > 33) {
//         acc.push(curr);
//     }
    // if(curr.age===33) {
    //     acc.push(curr);
    // }
//     return acc;
// }, []);
// const actorsnew = actors.reduce((acc, curr)=> {
//     let newdata = {name: `${curr.fname} ${curr.lname}`, age : curr.age}
//     acc.push(newdata);
//     return acc;
// }, []); 
// console.log(actorsnew);

