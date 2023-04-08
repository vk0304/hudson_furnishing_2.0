let stars = document.querySelectorAll(".ratings span");   // collecting all stars




for (let star of stars) {
    star.addEventListener("click", function () {
        this.setAttribute("data-clicked", "true");
      
    });

}

  



  





