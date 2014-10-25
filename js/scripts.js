/**
 * Created by Ray on 04.10.2014.
 */

//window.onload = initPage;

function initPage(id){
    showContent(id);
}

// Externe Links XHTML 1.0 strict konform in neuem Tab anzeigen lassen
function newTab(trg){
    window.open(trg, '');
}

// XMLHttpRequest-Objekt erstellen
function createRequest(){
    try{
        request = new XMLHttpRequest();
    }catch(tryMS){
        try{
            request = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(otherMS){
            try{
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(failed){
                request = null;
            }
        }
    }
    return request;
}

// Anzeigen des Asynchron erhaltenen Inhaltes
function displayResult(){
    console.log(request.responseText);

    if(request.readyState == 4 && request.status == 200){
        $("#content").html(request.responseText);
    }
}


// Funktion um den Inhalt im Selector #content dynamisch und asynchron anzeigen zu lassen
function showContent(str, postVal){

    // XMLHttpRequest-Objekt anlegen und Callback-Funktion
    request = createRequest();
    request.onreadystatechange = displayResult;

    var data = '';
    var page = new String();

    // Home
    if(str == 'home' || str == 0){
        page = 'index.html';
    }


    // XHTML 1.0 strict
    if(str == 'xhtml'){
        page = 'xhtmlContent.html';
    }

    // Float-text Content
    if(str=='float'){
        page = 'float_text.html';
    }


     // Lists Content
    if(str=='lists') {
        page = 'lists.html';
    }

    // Float-text Content
    if(str=='tables'){
        page = 'tables.html';
    }

    // Graphic Content
    if(str=='graphic'){
        page = 'graphic.html';
    }

    request.open("POST", page, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(data);
}

function rotateImages(status) {

    var img1 = document.getElementById("imgNav");
    var img2 = document.getElementById("imgWoNav");

    if(status == 1) {
        img1.style.zIndex = "2";
        img1.style.top = "2cm";
        img1.style.left = "2cm";

        img2.style.zIndex = "1";
        img2.style.top = "1cm";
        img2.style.left = "1cm";
    }

    else{
        img2.style.zIndex = "2";
        img2.style.top = "2cm";
        img2.style.left = "2cm";

        img1.style.zIndex = "1";
        img1.style.top = "1cm";
        img1.style.left = "1cm";
    }

}
