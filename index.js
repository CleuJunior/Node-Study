console.log(process.argv);

const NUMERORS = parseInt(process.argv[2]);
const MULTIPLOS = [];

for (let i = 3; i < NUMERORS; i++) {

    if((i % 3 === 0) || (i % 5 === 0))
        MULTIPLOS.push(i);
}

console.log(MULTIPLOS);