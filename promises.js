let promiseToCleanDB = new Promise(function(resolve, reject) {
  //cleaning
  let isClean = true;
  if (isClean) {
    resolve('clean');
  } else {
    reject('not clean');
  }
});

let msg = 'DB is ';
promiseToCleanDB
.then(fromResolve => {
  console.log(msg + fromResolve);
})
.catch(fromRejected => {
  console.log(msg + fromRejected);
});

/*******************/
let deleteData = function(dataName) {
  return new Promise((resolve, reject) => {
    resolve(dataName);
  });
}

let cleanDB = function(msg){
  return new Promise((resolve, reject) => {
    resolve(msg + ' cleaned from DB');
  });
}

let removeGarbage = function(msg) {
  return new Promise((resolve, reject) => {
    resolve(msg + ' and removed from Garbage');
  });
}

deleteData('file1').then(response => {
  return cleanDB(response);
}).then(response => {
  return removeGarbage(response);
}).then(response => {
  console.log('Chaining promises:')
  console.log('RESULT: ' + response);
}).catch(() => {
  console.log('There was an error :(');
});

Promise.all([deleteData('file1'), cleanDB(''), removeGarbage('')]).then(response => {
  console.log('Promise.all');
  console.log('RESULT: ' + response);
});

Promise.race([deleteData('file1'), cleanDB(''), removeGarbage('')]).then(response => {
  console.log('Promise.race');
  console.log('RESULT: ' + response);
});