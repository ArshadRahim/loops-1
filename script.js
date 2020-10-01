
// var yourNum=prompt("Enter any number");
// yourNum= Number(yourNum)
// for (i = 2; i <=20; i++) { 
// let result = i*yourNum;
// alert(yourNum+"*" + i + "=" + result);
// console.log(yourNum+"*" + i + "=" + result);
// }

let num = prompt("Enter any Number to create its table ");
num = Number(num);
for (f = 1; 
    f <=20; 
    f++){
        let result = f*num;
        alert(num + " * " + f + " = " + result);
        document.write(num + " * " + f + " = " + result);
        console.log(num + " * " + f + " = " + result);

    }