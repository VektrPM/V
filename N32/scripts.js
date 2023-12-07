// function sum13(a) {
//     let result = 0;
//     for (let i = 0; i<a.length; i++){
//         if (a[i] === 13){
//             a[i] = 0;
//             a[i + 1] = 0;
//         }
            
//         result += a[i];
//     }


//     return result


    
// }

// console.log(sum13([1,2,2,1]));
// console.log(sum13([1,2]));
// console.log(sum13([1,2,2,1,13]));



// // function sum67(d) {
// //     let result8 = 0;
// //     for (let i =  0; i<d.length; i++){
// //         if (d[i] === 6 && d[i] === 7){
// //             d[i] = d.splice(i,i+1)
// // //         }

// // //         result8 += d[i];
// // //     }

// // //     return result8
// // // }


// // // console.log(sum67([1,2,2]));
// // // console.log(sum67([1,2,2,6,99,99,7]));



// // function has23(arr) {
// //     for (let i = 0; i<arr.length; i++){
// //         if (arr[i] === 2 && arr[i+1] === 2){
// //             return true
// //         }
// //     }

// //     return false
// // }

// // console.log(has23([1,2,2]));
// // console.log(has23([1,2,1,2]));
// // console.log(has23([2,1,2]));


// //l lucky114

// function lucky114(k) {
//     for(let i = 0; i<k.length; i++){
//         if (k[i] === 1 || k[i] === 3){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(lucky114([0, 2, 4]));
// console.log(lucky114([1, 2, 3]));
// console.log(lucky114([1, 2, 4]));

// // no14

// function no14(l) {
//     for(let i = 0; i<l.length; i++){
//         if (l[i] === 1 && l[l.length-1] === 4){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(no14([1, 2, 3]));
// console.log(no14([1, 2, 3, 4]));
// console.log(no14([2, 3, 4]));


// function fizzarray(number) {
//     let result = "";
//     for (let i = 0; i<number; i++){
//         result+= i
//     }

//     return result.split("")
// }

// console.log(fizzarray(4));
// console.log(fizzarray(10));
// console.log(fizzarray(2));


// // isEwerywhere 

// function isEwerywhere(p,s) {
//     let ret = true;
//     for(let i = 0; i<p.length-2; i++){
//         if (p[i] !== s && p[i+1] !== s){
//             ret = false;
//         }
//     }   
//     return ret;
// }

// console.log(isEwerywhere([1, 2, 1, 3], 1));
// console.log(isEwerywhere([1, 2, 1, 3], 2));
// console.log(isEwerywhere([1, 2, 1, 3,4], 1));

// ether24 

function ether24(j) {
    let j22 = false;
    let j44 = false;
    for (let i = 0; i<j.length-1; i++){
        if ((j[i] === 2 && j[i + 1] === 2) || (j[i] === 4 && j[i + 1] === 4)) {
            j22 = true
            j44 = true
        }
    }
    
    return (j22 || j44) && !(j22 && j44);
}

console.log(ether24([1, 2, 2]));
console.log(ether24([4, 4, 1]));
console.log(ether24([4, 4, 1, 2, 2]));