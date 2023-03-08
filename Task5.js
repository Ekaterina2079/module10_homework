let array = [3,4,null,2,0,''];
let check = true;
for(let i = 0; i < array.lengh -1; i++){
  if(array[i] !== array[i+1]){
    check = false;
    break;
  }
}
console.log(check);
