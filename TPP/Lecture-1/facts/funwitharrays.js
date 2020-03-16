let arr=[17,2,3,28,31,46,68];
// let odd=arr.map()
let prime=arr.filter(primecheck)
let oddeven=arr.map(checkoddeven);
let square=arr.map(squarer)
function squarer(x){
    x=x*x;
    return x;
}

// function mymap(arr,primecheck){
//     let newarr=[];
//     for(let i=0;i<arr.length;i++){
//     let ans =squarer(arr[i]);
//     newarr.push(ans);}
//     return newarr;
// }
Array.prototype.myfilter=function (cb){
    let newArr=[];
    for(let i=0;i<this.length;i++) {
    let ans1 = primecheck(this[i]);
    if (ans1==true){
    newArr.push(arr[i]);
    }
}
    return newArr;
}
Array.prototype.mymap =function(cb){
    let newArr=[];
    for(let i=0;i<this.length;i++){
        let ans = cb(this[i]);
        newArr.push(ans);
    }
}
function checkoddeven(num){
    if(num%2==0){
        return num+1;
    }
    else{
        return num-1;
    }
}
function primecheck(digit){
for(let div=2;div<=digit;div++){
   
    if(digit%div==0){
        
        return false;
    }
    else{
        return true;
    }
}
// console.log("Number is prime");
}
let sqarr=arr.mymap(squarer)
let priime=arr.myfilter(primecheck)

console.log(prime);
console.log(oddeven);
console.log(square);
// console.log(sqarr);
console.log(priime)