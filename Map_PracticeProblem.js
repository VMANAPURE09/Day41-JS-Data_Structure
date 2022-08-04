//Map Demonstration

let keyString='a string';
let keyObj={};
let keyFunc= function(){};

//settings the values

let myMap=new Map();
myMap.set("keyString","value associated with 'a string'");
myMap.set("keyObj","value associated with keyObj");
myMap.set("keyFunc","value associated with keyFunc");

//getting the values
let size=myMap.size;
let valStr=myMap.get(keyString);
let isKeyExist=myMap.has('a string');

for(let [key, value] of myMap) console.log("Loop1: "+key+' = '+value);
for(let [key, value] of myMap.entries()) console.log("Loop2: "+key+' = '+value);
for(let key of myMap.keys()) console.log("Loop3: "+key);
for(let value of myMap.values()) console.log("Loop4: "+value);
console.log("DT: "+typeof myMap.values());


//Merge two maps. The last repeated key wins.
//Spread operator essentially converts a Map to an Array

let first=new Map([[1, 'one'],[2, 'two'],[3,'three']])
let second=new Map([[1, 'uno'],[2, 'dos'],[3,'three']])
let merged=new Map([...first,...second,[1,'eins']])

let hasKey=merged.has(1)
let delKey=merged.delete(1);
if(merged.has(1)) console.log(merged.get(1))//uno
console.log("Pos2: "+merged.get(2)) //dos
merged.clear();
console.log(merged.size);

/*---------------------------------------------------------*/
// //Que-Die Roll Problem with Map------

// let counter1 =0,counter2 =0,counter3 =0,counter4 =0,counter5 =0,counter6 = 0;
// function RollDie(){
//     return dieNumber = Math.floor(Math.random() *6 ) + 1;
// }
// let dieRollMap = new Map();
// while(counter1 < 10 && counter2 < 10 && counter3 < 10 && counter4 <10 && counter5 <10 && counter6 <10 ){
//     let result = RollDie();
//     switch(result){
//         case 1:
//             counter1++;
//             dieRollMap.set(1,counter1);
//             break;
//         case 2:
//             counter2++;
//             dieRollMap.set(2,counter2);
//             break;
//         case 3:
//             counter3++;
//             dieRollMap.set(3,counter3);
//             break;
//         case 4:
//             counter4++;
//             dieRollMap.set(4,counter4);
//             break;
//         case 5:
//             counter5++;
//             dieRollMap.set(5,counter5);
//             break;
//         case 6:
//             counter6++;
//             dieRollMap.set(6,counter6);
//             break;
//     }
// }
// console.log(dieRollMap);
// let minTimes = Math.min(...dieRollMap.values());
// let maxTimes = Math.max(...dieRollMap.values());
// function getKey(value) {
//     return [...dieRollMap].find(([key, val]) => val == value)[0]
//   }
// console.log("Max times die Number is "+getKey(maxTimes));
// console.log("Min times die Number is "+getKey(minTimes));