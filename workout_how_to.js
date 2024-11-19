const backLP = document.querySelector('#backLP');


backLP.addEventListener("click", function (event) {
 event.preventDefault();

redirectPage('journal.html');

});


let redirectURL = '';

const redirectPage = function (url) {  
 redirectURL = url;
 location.assign(url);
}
