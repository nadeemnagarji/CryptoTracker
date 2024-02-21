export const convertNumbers = (number)=>{
    const numWithComma = number.toLocaleString();
    let arr = numWithComma.split(",")
    if(arr.length==5){

        //trillions
        return arr[0] + "." + arr[1].slice(0,2) +"T"
    }
    else if(arr.length ==4){
        //billions
        return arr[0] + "." + arr[1].slice(0,2) +"B"
    }
    else if(arr.length ==3){
        //millions
        return arr[0] + "." + arr[1].slice(0,2) +"M"
    }
    else if(arr.length ==2){
        //Thousands
        return arr[0] + "." + arr[1].slice(0,2) +"K"
    }else{
        return number.toLocaleString()
    }

}


/*

let num = 1234567
let str = num.toLocaleString()
let arr = str.split(",")
console.log(str)
if(arr.length==5){

        //trillions
        console.log(arr[0] + "." + arr[1].slice(0,2) +"T")
    }
    else if(arr.length ==4){
        //billions
    console.log(arr[0] + "." + arr[1].slice(0,2) +"B")
    }
    else if(arr.length ==3){
        //millions
    console.log(arr[0] + "." + arr[1].slice(0,2) +"M")
    }
    else if(arr.length ==2){
        //Thousands
        console.log(arr[0] + "." + arr[1].slice(0,2) +"K")
    }else{
        console.log(num.toLocaleString())
    }

*/