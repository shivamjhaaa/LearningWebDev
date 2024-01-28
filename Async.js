//Async
//Your Javascript thread doesn't have access to everything immediately. There are tasks it need to wait for eg(reading a file , sending network request , deliberate timeout , etc)
// therefore js does next work and give the task to webapi or os to do and when the prev task is done it is added in callaback queue from where it goes to call stack when it id idle.
// Javascript is single threaded.

setTimeout(async () => await console.log("Hello"), 2000);

console.log("After the timeout");

for (let i = 0; i < 10; i++) console.log("World");
