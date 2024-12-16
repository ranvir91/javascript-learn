// let p = document.querySelectorAll('p');
// console.log(p);

// let para = document.getElementById('idone');
// para.setAttribute('title', 'paragraph one title');
// console.log(para);

// let para = document.getElementsByClassName('para');
// console.log(para);
// for(let i = 0; i<para.length; i++) {
//     para[i].innerHTML = `ranvir iteration ${i}`;
// }

// let para = document.getElementsByTagName('p');
// let para1 = document.querySelectorAll('p');
// console.log(para, para1);
// for(let i = 0; i<para1.length; i++) {
//     para[i].innerHTML = `ranvir iteration ${i}, <i>yes</i>`;
// }

// let para = document.querySelector('.para3.para');
// console.log(para);

// const firstChild = document.querySelector('div.box > :first-child');
// console.log(firstChild);

// task : 
// Selects an element with the ID title.
// Selects all elements with the class description.
// Selects the first <button> element in the document.
// Changes their styles to have a red background.
// solution : 
// let para1 = document.getElementById('idone');
// let allclass = document.getElementsByClassName('para');
// let firstChild = document.querySelector('div.box > :first-child');
// para1.style.background = 'red';
// firstChild.setAttribute('style', 'background:red; font-size:20px')

// let buttonelem = document.getElementById('buttonid');
// buttonelem.addEventListener('click', ()=>{
//     console.log(`button clicked first event called`);
// }, {once: true});
// let clickhandler = buttonelem.addEventListener('click', ()=>{
//     console.log(`button clicked second event called`);
//     alert(22)
// });

// let body = document.querySelector('body');
// let buttonelem = document.getElementById('buttonid');
// function fillYellow() {
//     body.style.background = 'yellow';
// }
// buttonelem.addEventListener('click', fillYellow );
// buttonelem.removeEventListener('click', fillYellow);
// buttonelem.addEventListener('mouseover', fillYellow);

// const divElement = document.getElementById('buttonid');
// divElement.addEventListener('mouseover', (event) => {
//     console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
// });

// let buttonelem = document.getElementById('buttonid');
// function handleClick(event, arg1, arg2) {
//     console.log(event.target, arg1, arg2);
// }
// buttonelem.addEventListener('click', (event) => handleClick(event, 'arg1', 'arg2'));

// const parentElement = document.getElementById('ulid');
// parentElement.addEventListener('click', (event) => {
//     if (event.target.tagName === 'LI') {
//         console.log('Clicked on a list item:', event.target.textContent);
//     }
// });


// let parentElement = document.getElementById('ulid');
// let buttonelem = document.getElementById('buttonid');
// buttonelem.addEventListener('click', ()=> {
//     let li = document.createElement("li");
//     li.innerText = `List ` + ( parseInt(parentElement.getElementsByTagName('li').length) + 1);
//     parentElement.appendChild(li);
// });
// parentElement.addEventListener('click', (event) => {
//     if(event.target.tagName === 'LI') {
//         console.log(event.target.innerText);
//     }
// });














