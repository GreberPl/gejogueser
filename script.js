document.getElementById("mama").addEventListener("click", function() {
    document.getElementById("jeden").style.display ="none";
    document.getElementById("dwa").style.display ="block";
});

let x = 0;
let y = 0;
let z = "";
let arr = new Array(6)
arr[0] = "cos/pierwszy.jpg";
arr[1] = "cos/drugi.jpg";
arr[2] = "cos/trzeci.jpg";
arr[3] = "cos/czwarty.jpg";
arr[4] = "cos/piaty.jpg";
arr[5] = "cos/szosty.jpg";

let tab = new Array(6)
tab[0] = 1;
tab[1] = 0;
tab[2] = 1;
tab[3] = 0;
tab[4] = 1;
tab[5] = 0;

document.getElementById("mama").addEventListener("click", function() {
    document.getElementById("jeden").style.display ="none";
    document.getElementById("dwa").style.display ="block";
    document.getElementById("obraz").src = arr[0];
});

document.getElementById("Tak").addEventListener("click", function() {
    y++;
    if (tab[x] == 1) {
    x++
    }
    document.getElementById("wynik").innerHTML= `twój wynik to ${x} z ${y}`;
    setTimeout(function(){
        z= `twój wynik to ${x} z ${y}`;
        if(y==6){
            document.getElementById("dwa").style.display ="none";
            document.getElementById("trzy").style.display ="block";
            document.getElementById("wynik2").innerHTML= z;
        }
        document.getElementById("obraz").src = arr[y];
        }, 750);
    })
document.getElementById("Nie").addEventListener("click", function() {
    y++;
    if (tab[x] == 0) {
    x++
    }
    document.getElementById("wynik").innerHTML= `twój wynik to ${x} z ${y}`;
    setTimeout(function(){
    z= `twój wynik to ${x} z ${y}`;
    if(y==6){
        document.getElementById("dwa").style.display ="none";
        document.getElementById("trzy").style.display ="block";
        document.getElementById("wynik2").innerHTML= z;
    }
    document.getElementById("obraz").src = arr[y];
    }, 750);
})

