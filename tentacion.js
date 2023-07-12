//////////////////////////////////////////////////////////
//                  tentacion.html                      //
//////////////////////////////////////////////////////////



// for the number icon in tentacion.html
function showNum() {
    alert("My Phone Number : 050-2643421")
};


// for facebook icon in tentacion.html
function faceBook() {
    let goToSource = "https://www.facebook.com/BadVibezForever/"
    window.open(goToSource, "_blank") // this code to open the source in new tab with out using <a src="#" target="_blank">
};


// for Instagram icon in tentacion.html
function Instagram() {
    let goToSource = "https://www.instagram.com/xxxtentacion/?hl=en"
    window.open(goToSource, "_blank")
};



// this function for the button who go to (about) page 
// about page : talking about the programmer not about xxxtentacion
function about() {
    window.location.href = "about.html"
};




//////////////////////////////////////////////////////////
//                  about.html                          //
//////////////////////////////////////////////////////////

// this to open my instagram acount source in (about.html)
var myInsta = document.getElementById('instaIcon');
myInsta.addEventListener("click", () => {
    let instaSource = "https://www.instagram.com/mostafa_abush"
    window.open(instaSource, "_blank")
});


// this to open my facebook acount source in (about.html)
var myFace = document.getElementById('faceIcon');
myFace.addEventListener("click", () => {
    var faceSource = "https://www.facebook.com/profile.php?id=100092355976522"
    window.open(faceSource, "_blank") 
});