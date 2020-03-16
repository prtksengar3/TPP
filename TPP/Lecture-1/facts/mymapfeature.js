let arr=[17,2,3,28,31,46,68];
Array.prototype.myfilter=function (cb){
    let newArr=[];
    for(let i=0;i<this.length;i++) {
    let ans1 = cb(this[i]);
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
    return newArr;
}
function squarer(x){
    x=x*x;
    return x;
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
}
    let sqarr=arr.mymap(squarer)
    let priime=arr.myfilter(primecheck)
    console.log(priime);
    console.log(sqarr);