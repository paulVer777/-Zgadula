

var tablica=[];
var haslo="";
var odpowiedz=[];
var flaga=0;
var licznik=0;
var secure=false;

document.getElementById("licznik").innerHTML=licznik;

var losowanie=function(){


    $("h2").slideUp(1000);
    secure=true;
    if(flaga==1) return;


    tablica=["kot","pies","panda","lew","tygrys","paw","tapir","papuga","czapla","koala",
        "pantera","goryl","kogut","kurczak","koliberek","pawlak","pawelina","kokodj"];
    haslo=tablica[Math.floor(Math.random()*tablica.length)];


    for(var i=0;i<haslo.length;i++)
    {


        odpowiedz.push("-");


    }

    document.getElementById("haslo").innerHTML=odpowiedz.join("");
    flaga++;

};

$("#klik").click(losowanie);

var rel=function(){



    location.reload();

};
$("#reload").click(rel);


function litera(x){


    if(secure==false) return;

    licznik++;
    document.getElementById("licznik").innerHTML=licznik;

    for(i=0;i<haslo.length;i++)
    {

        if(haslo[i]==x)
        {

            odpowiedz[i]=x;
            document.getElementById("haslo").innerHTML=odpowiedz.join("");

        }


    }

    if((odpowiedz.join("")==haslo)&&(secure==true))
    {

        $("h1").text("Wygrałeś!!!");
        $("#alfabet").slideUp(200);
        $("#klik").slideUp(200);

        exit();
    }

    if(licznik>haslo.length*2-1)
    {

        $("h1").text("Przegrana");
        $("#alfabet").slideUp(200);
        $("#klik").slideUp(200);

    }


}


