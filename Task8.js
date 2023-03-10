let myMap = new Map();
myMap.set('Milan', 'moda');
myMap.set('Roma', 'number1');
myMap.set('Paris', 'love');
myMap.set('Ancona', 'home');
myMap.set('London','regina')

for(let city of myMap.keys()){
    
console.log(`Ключи:- ${city}, Значение:- ${myMap.get(city)}`);
}  
