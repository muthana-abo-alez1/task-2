document.getElementById('butt').value = "next";
//window.butt.value="next"





var name="muthana";
document.write(name);
document.write("<br>");
var v1=1;
var v2="mmm";
var v3=true;
var v4 ;
document.write(typeof v1);//number
document.write(typeof v2);//string
document.write(typeof v3);//boolean
document.write(typeof v4);//undefined
document.write("<br>");







var pp={num:1,name:"amr",salary:6000};
document.write(typeof pp);//object

document.write(pp.name+pp.salary);


 const p1 = 3.33;
 v1 =99;
 p1=44;//error








 const string1 = 'JavaScript Program';
 const string2 = 'javascript program';
 
 // compare both strings
 const result = string1.toUpperCase() === string2.toUpperCase();
 
 if(result) {
     console.log('The strings are similar.');
 } else {
     console.log('The strings are not similar.');
 }

 const person = {
    id: 1,
    name: 'John',
    age: 23
}






// check if key exists
const hasKey = 'name' in person;

if(hasKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}
let text = "";
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }

  const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, text;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}



const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 2;
let len = cars.length;
let text = "";

for (; i < len; i++) {
  text += cars[i] + "<br>";
}


 function say() {

 }
