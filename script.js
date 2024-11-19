//lbs Enter weight 
// reps - x amount of times
// set = how many done

function setitem(){
const usernameInput = document.querySelector('#weight');
const titleInput = document.querySelector('#reps');
const contentInput = document.querySelector('#sets');
const submitForm = document.querySelector("form");

weight_in = usernameInput;
rep_in = titleInput;
set_in = contentInput;

lbs = weight_in.value;
reps = rep_in.value;
set = set_in.value;

let array = [];


const ObjJounalnote= {
lbs,
reps,
sets, 

};


array.push(ObjJounalnote);

return array;
}


submitForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const objInfo = setitem();

    if(objInfo.array.lbs==='')
    {
        alert("lbs cannot be empty");

    }
    else if(objInfo.array.reps==='')
    {
        alert("reps cannot be empty");

    }
    else if(objInfo.array.sets==='')
    {
        alert("sets cannot be empty");

    }
    else if(objInfo.array.lbs!==''&&objInfo.array.reps!==''&&objInfo.array.sets!=='')
    {
        storeLocalStorage(objformInfo);
        redirectPage("journal.html");

    }

});

back.addEventListener('back', function (event) {
 event.preventDefault();

 const backEl = document.querySelector('#back');

 redirectPage("index.html")

});

function storeLocalStorage(ObjJounalnote) {
 
localStorage.setItem('ObjJounalnote', JSON.stringify(ObjJounalnote));

}

function readLocalStorage() { 
    let temp = [];
     const tempitem = JSON.parse(localStorage.getItem('ObjJounalnote'));
  
   
      temp.push(tempitem);
  
    return temp;
  
}

//no parsing or stringify done////////////////////////////
function getLocalStorage()
{
    localStorage.getItem("ObjJounalnote");
}

function setLocalStorage()
{
    localStorage.setItem("ObjJounalnote",ObjJounalnote);
}
////////////////////////////////////////////////////////

  let redirectURL = '';

const redirectPage = function (url) {  
  redirectURL = url;
  location.assign(url);
}
