const exerciseLists = document.querySelector('#exerciseLists');


exerciseLists.addEventListener("click", function (event) {
 event.preventDefault();

redirectPage('workout_how_to.html');

});


let redirectURL = '';

const redirectPage = function (url) {  
 redirectURL = url;
 location.assign(url);
}