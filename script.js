const btn = document.querySelector(".btn");

btn.addEventListener('click',() =>{
  document.getElementById("form").style.display = "block";
  btn.style.display = "none"
})

const dltsp = document.getElementById("dltsp");

dltsp.addEventListener('click',()=>{
  document.getElementById("form").style.display = "none";
  btn.style.display = "block";
})