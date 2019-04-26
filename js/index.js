/*for (let i = 100; i >= 0; i--) {
      if (i % 2 === 0) {
          continue;
      }
      console.log(i);
      
}
*/


//let i = 0;
//while (i <= 100) {
//    console.log(i);
//    i++;
//};

/*let i = 0;
do {
    console.log(i);
    i++;
} while (i > 100);
*/

// let num = parseInt(prompt('Please enter a number'));
// while(Number.isNaN(num)) {
//     alert('Please enter a number');
//     num = parseInt(prompt('Please enter a number'));
// }


// let num;
// do {
//     num = parseInt(prompt('Please enter a number'));
// } while(Number.isNaN(num));


let productName = ['Xiomy mi1', 'Chevrole', ,'Sony Bravia'];
productName.push('Tesla X');
productName.push('Iphone 8');
productName.push('banana');
productName.push('Toyota Corola');

console.log(productName[2]);
console.log(productName.length);

// for (let i =0; i < productName.length; i++) {
//     console.log(i, productName[i]);
// }

// productName.forEach(function (el) {
// console.log(el);
// });

productName.forEach( (el, idx) => {
    console.log(idx, el);
    document.write(idx + ' ' + el + '<br>' );
});