

// reps - x amount of times
// set = how many done

const form = document.querySelector("#form");
const back = document.querySelector('#back');
const submitButton = document.querySelector("#submit");
const errorMsgDiv = document.querySelector("#errMsg");


const setsInput = document.querySelector('input[name="sets"]');
const repsInput = document.querySelector('input[name="reps"]');

function setitem() {


    setsInput.addEventListener("change", function (setevent) {
        const sets = Number(setevent.target.value);
        //console.log("set:" + sets);
        if (sets !== null && sets > 0 && sets !== undefined) {
            const setSets = localStorage.setItem('Objsets', JSON.stringify(sets));

            return setSets;
        }


    })
    repsInput.addEventListener("change", function (repevent) {
        const reps = Number(repevent.target.value);
        //console.log("rep:" + reps);
        if (reps !== null && reps > 0 && reps !== undefined) {
            const setReps = localStorage.setItem('Objreps', JSON.stringify(reps));

            return setReps;
        }
    



    })


    const Objsets = { setsInput };
    const Objreps = { repsInput };



    let array = [];

    array.push(Objreps);
    array.push(Objsets);



    return array;

}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
        console.log("event click" + event);
        errorMsgDiv.innerHTML = ""; //clear text.

      const objInfo = setitem();


    if (repsInput.value === '') {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = "reps cannot be empty";
        errorMsgDiv.appendChild(errorMsg);

        console.log("test1: "+errorMsg);


    }
    if (setsInput.value === '') {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = "sets cannot be empty";
        errorMsgDiv.appendChild(errorMsg);
        
        console.log("test2: "+errorMsg);


    }
    if (objInfo.repsInput !== null && objInfo.setsInput !== null && objInfo.setsInput !== undefined && objInfo.repsInput !== undefined)
    {
        const set = JSON.parse(localStorage.getItem("Objsets"));
        const rep = JSON.parse(localStorage.getItem("Objreps"));

        const objJounarl = { set, rep };
        storeLocalStorage(objJounarl)

    }

});

back.addEventListener("click", function (event) {
    event.preventDefault();

    redirectPage("index.html");

});



function storeLocalStorage(objJounarl) {

    localStorage.setItem('objJounarl', JSON.stringify(objJounarl));

}

function readLocalStorage() {
    let temp = [];
    const tempitem = JSON.parse(localStorage.getItem('objJounarl'));


    temp.push(tempitem);

    return temp;

}


function getLocalStorage() {
    localStorage.getItem("objJounarl");
}

function setLocalStorage() {
    localStorage.setItem("objJounarl", objJounarl);
}


let redirectURL = '';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
}


function renderJournal() {
    //    <table id="tbl"></table>
    //table headers: Day    Muscle Group    Exercise   Weight      Sets        Reps

    const journalEntry = document.querySelector('#tbl');
    const tblheaderrow = document.createElement("thead"); //1. table head element
    const tblrowEl = document.createElement("tr");  //2. table row element.

    const tblheaderDay = document.createElement("th"); //3. table header element
    const tblheaderMuscleGroup = document.createElement("th"); //3. table header element
    const tblheaderExercise = document.createElement("th"); //3. table header element
    const tblheaderWeight = document.createElement("th"); //3. table header element
    const tblheaderSets = document.createElement("th"); //3. table header element
    const tblheaderReps = document.createElement("th"); //3. table header element

    const tblbodyEl = document.createElement("tbody");  //4.  table body element containing data.
    const tbldatecellEl = document.createElement("td"); //5. table data cell element.

    //building headers of table
    tblheaderDay.textContent = "Day";
    tblrowEl.appendChild(tblheaderDay);
    tblheaderMuscleGroup.textContent = "Muscle Group";
    tblrowEl.appendChild(tblheaderMuscleGroup);
    tblheaderExercise.textContent = "Exercise";
    tblrowEl.appendChild(tblheaderMuscleGroup);
    tblheaderWeight.textContent = "Weight";
    tblrowEl.appendChild(tblheaderWeight);
    tblheaderSets.textContent = "Sets";
    tblrowEl.appendChild(tblheaderSets);
    tblheaderReps.textContent = "Reps";
    tblrowEl.appendChild(tblheaderReps);
    tblbodyEl.appendChild(tblrowEl);


    journalEntry.appendChild(tblbodyEl); //add table body to table.


}

renderJournal();