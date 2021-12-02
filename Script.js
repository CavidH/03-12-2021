
arry=[4,5,45,6,5,8,9,4,36,1,4,5,8,65,6,54,21,2]
//task 1
Array.prototype.MyIndexOf=function(element){
    for(let i = 0; i<this.length;i++){
        if(this[i]===element){
            return i;
        }
    }
    return -1;
};
console.log(arry.MyIndexOf(6))

//task 1 with start element
Array.prototype.MyIndexOf=function(element,start){
    for(let i = start; i<this.length;i++){
        if(this[i]===element){
            return i;
        }
    }
    return -1;
};

console.log(arry.MyIndexOf(6,7))

//task-2
Array.prototype.MyFilter=function(func){
    let arr = [];
  for(let i = 0;i<this.length;i++){
      if(func(this[i])){
          arr.push(this[i]);
      }
  }
  return arr;
};
console.log(arry.MyFilter(x=>x%2!==0));
console.log(arry.MyFilter(x=>x>45));


