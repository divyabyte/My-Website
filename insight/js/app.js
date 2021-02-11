function myFunction() {
    var element = document.getElementById("demo");
    var element1 = document.getElementById("demo-blur");
    var element2 = document.getElementById("demo1");
    var newElement = document.getElementById("wrapper");

    if(element.classList.contains("blur-filter"))   
    {
      element.classList.remove("blur-filter");
      newElement.classList.remove("stop-scroll");
      
    } 
    else{
      element.classList.add("blur-filter");
      newElement.classList.add("stop-scroll");
    }

    if(element1.classList.contains("blur-filter"))   
    {
      element1.classList.remove("blur-filter");
    } 
    else{
      element1.classList.add("blur-filter");
    } 

    if(element2.classList.contains("blur-filter"))   
    {
      element2.classList.remove("blur-filter");
    } 
    else{
      element2.classList.add("blur-filter");
    }   


  }




