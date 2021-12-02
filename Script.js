/*
arr=[4,5,6,45,6,5,8,9,4,36,1,4,5,8,65,54,21,2]


Array.prototype.MylastIndexOf = function(element){
    for(let i = this.length - 1; i >= 0; i--){
        if(this[i] === element){
            return i;
        };
    };
    return -1;
};
console.log(arr.MylastIndexOf(4));
*/
arry=[4,5,6]


Array.prototype.MyIndexOf=function(element){
    for(let i = 0; i<this.length;i++){
        if(this[i]===element){
            return i;
        }
    }
    return -1;
};
Array.prototype.MyIndexOf=function(element,start){
    for(let i = start; i<this.length;i++){
        if(this[i]===element){
            return i;
        }
    }
    return -1;
};

console.log(arry.MyIndexOf(6))