// process.stdout.write('hello from spinner1.js... \rheyyy\n');

//could also set an array of objects with their timer and character to print at each stage of the loop. Hmm...

const spinner2 = function(howLong) {
  const arrOfObj = ['\r| ', '\r/ ', '\r- ', '\r\\ '];
  let timeVar = 0;
  while (timeVar < howLong) {
    for (let i = 0; i < arrOfObj.length; i++) {
      setTimeout(() => {
        process.stdout.write(arrOfObj[i]);
      }, timeVar);
      timeVar += 200;
    }
  }
  console.log("\n");
};

// console.log(spinner2(6400));