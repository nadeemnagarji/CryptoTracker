export const convertDate = (number)=>{

    var myDate = new Date(number);
    return myDate.getDate() + "/" + (myDate.getMonth() + 1 ) // we added +1 in month because months in .getMonth function start from 0 till 11 


}