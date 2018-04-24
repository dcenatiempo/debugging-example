var table = [];
for (let i=0; i<95; i++) {
  table.push({
    number: `code: ${i+32}`,
    letter: String.fromCharCode(i+32)
  })
}

function funcOne () {
  funcTwo();
}

function funcTwo () {
  funcThree();
}

function funcThree () {
  console.trace();
}

console.time('Total Time to run console.logs');

  console.count('counter');
  console.groupCollapsed('Run in the mill');
    console.log('This is a regular old console.log');
    console.warn('This is a warning');
    console.error('This is an error'); 
    console.info('This is information');
  console.groupEnd();

  console.count('counter');
  console.groupCollapsed('console.table()');
    console.table(table);
  console.groupEnd();

  console.count('counter');
  console.dir(document.querySelector('body')); 

  console.assert(1===1, 'passed assertion');
  console.assert(1===2, 'falied assertion');

  console.count('counter');
  funcThree();

console.timeEnd('Total Time to run console.logs');
