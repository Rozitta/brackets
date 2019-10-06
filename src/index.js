module.exports = function check(str, bracketsConfig) {
  
  

    let bracketsItemsObj = {};
    let arrayOfClosingBrackets = [];
    for(let i = 0; i < bracketsConfig.length; i++){
      bracketsItemsObj[bracketsConfig[i][0]] = bracketsConfig[i][1]
    }
    
    for(let i = 0; i < str.length; i++){
      if(str[i] in bracketsItemsObj && arrayOfClosingBrackets[0] !== str[i]){
        arrayOfClosingBrackets.unshift(bracketsItemsObj[str[i]])
        
      }else if(str[i] === arrayOfClosingBrackets[0]){
        arrayOfClosingBrackets.shift();
      }else{
        return false
      }
      if(i == str.length-1 && str[str.length-1] in bracketsItemsObj && arrayOfClosingBrackets.length !== 0){
        return false;
      }
      
    }
     return true;
  
  
  
}
