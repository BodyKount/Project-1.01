
//lbs Enter weight 
// reps - x amount of times
// set = how many done
const usernameInput = document.querySelector('#weight');
const titleInput = document.querySelector('#reps');
const contentInput = document.querySelector('#sets');

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
