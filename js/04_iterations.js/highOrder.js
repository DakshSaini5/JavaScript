/*for of

["","",""]  strings
[{},{}]  objects

const array = [1,2,3,4,5,6]
console.log(`The numbers are : `);
for (const arr in array) {
        console.log(`${arr}`);
    }
*/

const map = new Map()
map.set('Vegetables',"90 RUPEES")
map.set('Fruits',"100 RUPEES")
map.set('Oil',"500 RUPEES")

// console.log(map)

for (const [key,values] of map) {             // here the destructing is done for output
    console.log(key, ":-" ,values)
}