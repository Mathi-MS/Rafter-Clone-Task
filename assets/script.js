//nav two-----------------------
// Selecting icon
var navtwoicon = document.getElementById("navtwoicon")
var navcloseicon = document.getElementById("navcloseicon")
var sidenav = document.getElementById("sidenav")

navtwoicon.addEventListener("click",function(){
    sidenav.style.visibility="visible "
  })
  navcloseicon.addEventListener("click",function(){
    sidenav.style.visibility="hidden"
  })


