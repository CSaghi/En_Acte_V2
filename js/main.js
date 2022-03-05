// const dropdown = document.getElementById("dropdown");
// const dropClick = document.querySelector(".drop");
const menuHeader = document.getElementById("headerNav");
const items = document.querySelectorAll(".nav-item");

function responsive() { 
  
    if (menuHeader.className === "headerNav") {
      menuHeader.className += " responsive";
      items.forEach(item => {
          item.className += " responsive"
      });
    } else {
      menuHeader.className = "headerNav";
      items.forEach(item => {
        item.className = "nav-item"
    });
      dropdown.classList.remove("click");
    }
  } 

 

  // dropClick.addEventListener("click", () => {
    
  //   if(dropdown.classList.contains("click") )
  //   {
  //     dropdown.classList.remove("click");
  //   } else {
  //     dropdown.classList.add("click");
  //   }
      
  // })