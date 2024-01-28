//Promises

// Just Syntactical sugar
// Just a more readable way of writing async functions

// Callback = >callback hell
//Promises => Promise chaining , async / await
// when callback calls another callback fn and that function calls another callback fn and so on

//in normal callback we have to give call
function myTimeout(callback, time) {
  setTimeout(callback,time);
}

//Returning a promise (Promise is a class)
//Promise will return call
//we dont need to pass callback
function promisifiedTimeout(time) {
  const p = new Promise(function(resolve){
    console.log('Inside PrmoisifiedTimeout')
    setTimeout(()=> resolve() , time);
  });
  return p;
}

const temp = promisifiedTimeout(5000)
console.log(temp) // Now it is promise pending we have to give callback
// this is the callback 
temp.then(()=>{
  console.log('Promise resolved'); 
})