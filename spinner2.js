// process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner2 = function(howLong) {
  let timeVar = 0;
  for (let i = 0; i < howLong; i++) {
    setTimeout(() => {
      process.stdout.write('\r| ');
    }, timeVar);
    
    setTimeout(() => {
      process.stdout.write('\r/ ');
    }, timeVar + 200);
    
    setTimeout(() => {
      process.stdout.write('\r- ');
    }, timeVar + 400);
    
    setTimeout(() => {
      process.stdout.write('\r\\ ');
    }, timeVar + 600);
    timeVar += timeVar;
  }
  console.log("\n");
};

console.log(spinner2(6400));