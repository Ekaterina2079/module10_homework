const fruits = ['apple','banana','mango','orange'];
function isFruit(nameFruit){
  if(fruits.indexOf(nameFruit) > -1){
    return true;
  }else {
    return false;
  }
}
console.log(isFruit('mango'));
console.log(isFruit('cane'));
              
