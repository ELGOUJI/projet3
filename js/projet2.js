/*localStorage
ajouter : setItem(clé,value)
modifier : setItem(clé,value)
supp : romoveItem(clé)
supp tout : clear()
*/

afficher()
document.getElementById("add").addEventListener("click",ajouter)

function ajouter(){
    var contenu = document.getElementById("txt").textContent.trim()
    if (contenu!="") {
        window.localStorage.setItem(incrimentation(),contenu)
        window.location.href=""
    }
    else{
        alert("IMPOSSI !!!")
    }
    document.getElementById("txt").textContent=""
}
function incrimentation() {
    return localStorage.length+1
}
function afficher(){
    for (var i = 1; i <= localStorage.length; i++) {
           document.getElementsByTagName("tbody")[0].innerHTML+='<tr><th>'+i+'</th><td>'+localStorage.getItem(i)+'</td><td><i class="fas fa-trash" onclick="supp(this)"></i></td></tr>'
    }
}

/**********************supp */


function supp(el){
   var x = el.parentElement.parentElement.children[0].textContent
   if (confirm("are you sure !!!")) {
       localStorage.removeItem(x)
       window.location.href=""
   }
}
