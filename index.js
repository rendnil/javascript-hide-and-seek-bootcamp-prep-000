function getFirstSelector(selector){
  
  return document.querySelector(selector)
  
  
}

function nestedTarget(){
  
  return document.getElementById('nested').querySelector('div.target')
  
  
  
}

function increaseRankBy(n){
  
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (var i = 0; i<list.length; i++){
    
    list[i].innerHTML = (n + parseInt(list[i].innerHTML)).toString()
    
  }
  
  
}


function deepestChild(){
  
 // return document.getElementById('grand-node').querySelector('div div div div div')
  
  //return document.getElementById('grand-node').querySelectorAll('div')
  var nodes = document.getElementById('grand-node').querySelectorAll('div')
  
  var current = nodes
  var next 
  
  
  while (current.length > 0 ){
    
    for(var i = 0; i<current.length - 1; i++){
      
      next = current[i].querySelector('div')
      //console.log(current)
      
    }
   
   //current = next.shift()
  
    
  }
  
  return next
  
  //return nodes[nodes.length - 1]
  

 /* var current = nodes
  var next = []
  
  while(Array.isArray(current)){
      
      for (let i = 0; i < current.length; i++){
        
        next.push(current[i])
        
      }
    current = next.shift()
    
    
  }
  
*/    
    
    
    
  
  
  
  
}


