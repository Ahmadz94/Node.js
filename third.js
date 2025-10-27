let array = [1,2,3,5,57,8,0,54,23,5,67,89,90,34,22,11,0,0,0,1,2,3,4,5,6,7,8,9,10,0,0,0];

let zeros = 0;  
array.forEach((num) => {
    (num === 0)&&(zeros++);
});

console.log("Number of zeros in the array: " + zeros);