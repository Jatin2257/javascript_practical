// console.log("Hello how    jatin  ");
// document.getElementById('demo').innerHTML = 'This String testing purpose' 
// let text = "We are the so-called \" Vikings \" \r from the north.";
// console.log(text);

// let str = "Hello World";
// console.log(str.length);
// console.log(str.toUpperCase())
// console.log(str.at(4))
// console.log(str.charAt(9))
// console.log(str.charCodeAt(3))
// console.log(str[6]);
// console.log(str.slice(3,5))
// console.log("Substring of str is ",str.substring(3,5));
// console.log(str.substr(3,5))
// const d = new Date("2024-03-02");
// console.log(d.getFullYear());
// console.log(d.getDate());
// console.log(d.getMonth())

// const num = [1,2,3,4,5,6];

// for(let n of num){
//     console.log(n);
// }

// for(index in num){
//     console.log(index,num[index]);
// }


// destructuring array
// let arr = [12,13,14];

// let [a,b,c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// object destructuring

// const person = {
//     name:"Jatin",
//     age:29,
//     occupation:"Developer"
// }

// const {name,age,occupation} = person;

// const {name:fullName,age:year,occupation:job} = person;
// window.location.reload()
// console.log(name);
// console.log(age);
// console.log(occupation);

// console.log(fullName);
// console.log(year);
// console.log(job);


// assignment pattern

// const person1= {
//     id : 123,
//     fullName1 : "Manish Shah"
// };

// let id,fullName1 ;
// ({id,fullName1} = person1);

// console.log(id,fullName1)

// const arr = [10,20,30,40,50,60,70,80,90,100];

// const [a,...temp] = arr;

// console.log("a : ",a);
// console.log("Other values : ",temp);

// swapping two variable

// let c = 1 ;
// let d = 2;

// [c,d] = [d,c];

// console.log(c,d);

// const arr = [1,2,3];

// [arr[2],arr[1]] = [arr[1],arr[2]];

// console.log(arr);

// function f(){
//     return [1,2,3];
// }

// const [a,,c] = f();

// console.log(a,c)

// const arr1 = [1,2,3,4,5,6,7,8,9,10];

// const [e,...{length}] = arr1;

// console.log(e,length)

// const [x,y,...[w,p,,q,r]] = arr1;

// console.log(x,y,w,p,q,r);

// setTimeout(function() {
//     console.log("This execute a before");
// },2000);

// console.log("This is execute first");

// let promises = new Promise((resolve,reject) => {
//     let success = true;

//     if(success){
//         resolve("Operation Successs");
//     }else{
//         reject("Operation Failed")
//     }
// })


// async function task(){

//     let result = await new Promise(resolve => {
//         setTimeout(function(){
//             resolve("Coffee is Ready")
//         },5000)
//     });

//     console.log(result);

//     console.log("The first second statement executed")
// }

// task();
// console.log("This is after async function");

function task(a, b, ...Other) {
    console.log(a, b);
    console.log(Other);
}

task(1, 2, 3, 4, 56, 7, 8, 9, 5, 2, 4, 5, 5, 5, 5, 5, 5)