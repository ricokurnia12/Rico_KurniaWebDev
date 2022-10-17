const Db = require('./src/Db/AnimeDb.json');

for (let index = 0; index <= Db.length; index++) {
  if (index >= 49 && index < 60) {
    console.log(Db[index].Id);
  }
}
// Db.forEach((el) => {
//   console.log(el);
// });

// let arrayBaru = Db.map((el) => {
//   return element
// });

// array.forEach(element => {
//     console.log(element)
// });

// Db.forEach((element) => {
//   console.log(element);
// });

// Db.forEach((element) => {
//   console.log(element);
// });
