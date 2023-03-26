/* 
    Parameters
    .reduce((acc,curr,index,array)=>
*/


// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// // const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue   for multiply just accumulator * currentValue 
// );

// console.log(sumWithInitial);


//                          find the average of an array ---- refer thecnical thapa -- https://www.youtube.com/watch?v=60eFraqGEv4 -- 7:00

let arr = [1,2,3,4,5,6,7]
let output = arr.reduce((acc,curr,index,array)=>{
    // return acc   --- 1
    // return curr ---- 7
    let total = acc +=curr       // 28  -   but when we divide it with curr it does not give ans ---4 instead it gives 1.3332 
                                //           the value of total updates after each iteration so wile iteraton the value becomes around 10 
                                //   that is why it gives ans as 1.33 instead of 4 - so to solve this we use the other teo parametr i.e index and arr
    if(index=== array.length-1){
        return total/array.length
    }
    return total
})
console.log(output);

