const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//Seu código aqui.
const sortOddsAndEvens = array => {
  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index2+index] < array[index]) {
        let number = array[index]
        array[index] = array[index2+index];
        array[index2+index] = number;      
      }
    }  
  }
  return `Os números ${array} se encontram ordenados de forma crescente!` 
}

console.log(sortOddsAndEvens(oddsAndEvens))
console.log(sortOddsAndEvens([3, 6, 12, 8, 9, 10, 11, 1, 4]))
console.log(sortOddsAndEvens([4, 6, 1, 3, 7, 2]))

// oddsAndEvens.sort((a, b) => a - b)
// console.log(`Os Números ${oddsAndEvens} se encontram ordenados de forma crescente!`)
//console.log(`Os números ${oddsAndEvens.sort((a, b) => a -b)} se encontram ordenados de forma crescente`)