let arr = [null, 0, 2, 4, 3, 6, 7, 9, 'kk'];
let contPos = 0;
let contNeg = 0;
let contOther = 0;

for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        contOther++;
    } else {
        if (arr[i] % 2 === 0) {
            contPos++;
        } else {
            contNeg++;
        }
    }
}

console.log("Pos is " + contPos);
console.log("Neg is " + contNeg);
console.log("Other is " + contOther);
