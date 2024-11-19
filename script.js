//lbs Enter weight 
// reps - x amount of times
// set = how many done

function setitem(){
const weightInput = document.querySelector('#weight');
const repsInput = document.querySelector('#reps');
const setInput = document.querySelector('#sets');
const form = document.querySelector("form");
const back = document.querySelector('#back');

weight_in = weightInput;
rep_in = repsInput;
set_in = setInput;

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


form.addEventListener('click', function (event) {
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
        storeLocalStorage(ObjJounalnote);
        redirectPage("journal.html");

    }

});

back.addEventListener("click", function (event) {
 event.preventDefault();

 redirectPage("index.html");

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
