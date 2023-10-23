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


// works
// Selecting Works id
var workone = document.getElementById("workone")
var worktwo = document.getElementById("worktwo")
var workthree = document.getElementById("workthree")
var workfour = document.getElementById("workfour")
var workfive = document.getElementById("workfive")
var worksix = document.getElementById("worksix")


function alll() {
  workone.setAttribute("src","assets/Images/work1.jpg")
  worktwo.setAttribute("src","assets/Images/work2.jpg")
  workthree.setAttribute("src","assets/Images/work3.jpg")
  workfour.setAttribute("src","assets/Images/work4.jpg")
  workfive.setAttribute("src","assets/Images/work5.jpg")
  worksix.setAttribute("src","assets/Images/work6.jpg")
  workone.style.visibility="visible"
  worktwo.style.visibility="visible"
  workthree.style.visibility="visible"
  workfour.style.visibility="visible"
  workfive.style.visibility="visible"
  worksix.style.visibility="visible"
}
function com() {
  workone.setAttribute("src","assets/Images/work2.jpg")
  worktwo.setAttribute("src","assets/Images/work3.jpg")
  workthree.setAttribute("src","assets/Images/work6.jpg")
  workone.style.visibility="visible"
  worktwo.style.visibility="visible"
  workthree.style.visibility="visible"
  workfour.style.visibility="hidden"
  workfive.style.visibility="hidden"
  worksix.style.visibility="hidden"
}
function rep() {
  workone.setAttribute("src","assets/Images/work5.jpg")
  workone.style.visibility="visible"
  worktwo.style.visibility="hidden"
  workthree.style.visibility="hidden"
  workfour.style.visibility="hidden"
  workfive.style.visibility="hidden"
  worksix.style.visibility="hidden"
}
function res() {
  workone.setAttribute("src","assets/Images/work1.jpg")
  worktwo.setAttribute("src","assets/Images/work2.jpg")
  workthree.setAttribute("src","assets/Images/work4.jpg")
  workfour.setAttribute("src","assets/Images/work5.jpg")
  workfive.setAttribute("src","assets/Images/work6.jpg")
  workone.style.visibility="visible"
  worktwo.style.visibility="visible"
  workthree.style.visibility="visible"
  workfour.style.visibility="visible"
  workfive.style.visibility="visible"
  worksix.style.visibility="hidden"
}
