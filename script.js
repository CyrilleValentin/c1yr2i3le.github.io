const menuHamburger = document.getElementById("menu")
var show=false
const afficher=()=>{

if (!show){
   menuHamburger.style.display= "flex"
   show=true
   console.log("menu-afficher");
}
else{
   menuHamburger.style.display= "none"
   console.log("menu-caché");
   show=false
}

}