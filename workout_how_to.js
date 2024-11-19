const backLP = document.querySelector('#backLP');


backLP.addEventListener("click", function (event) {
 event.preventDefault();

redirectPage('index.html');

});


let redirectURL = '';

const redirectPage = function (url) {  
 redirectURL = url;
 location.assign(url);
}




// ---------MODAL FUNCTIONALITY----------
let workoutImages = {
    //Chest images
    'pushUp': './assets/Images/Chest_Exercise/Push_Up.jpg',
    'DumbbellPress': './assets/Images/Chest_Exercise/Dumbbell_Bench_Press.jpg',
    'BenchPress': './assets/Images/Chest_Exercise/Bench_Press.jpg',
    'Butterfly': './assets/Images/Chest_Exercise/Butterfly_Chest_Press.jpg',
    'DeclineBenchPress': './assets/Images/Chest_Exercise/Decline_Bench_Press.jpg',
    'InclineBenchPress': './assets/Images/Chest_Exercise/Incline_Bench_Press.jpg',
    'CableSeatedChestFly': './assets/Images/Chest_Exercise/Cable_Seated_Chest_Fly.jpg',
    'ChestPress': './assets/Images/Chest_Exercise/Chest Press.jpg',
    //Back images
    'Deadlift': './assets/Images/Back_Exercise/Deadlift.jpg',
    'LateralPulldown': './assets/Images/Back_Exercise/Lateral_Pulldown.jpg',
    'CableSeatedRow': 'assets/Images/Back_Exercise/Cabled_Seated_Row.jpg',
    'OneArmDumbbellRow': './assets/Images/Back_Exercise/One_Arm_Dumbbell_Row.jpg',
    'BarbellRow': './assets/Images/Back_Exercise/Barbell_Row.jpg',
    'ReverseMachineFly': './assets/Images/Back_Exercise/Reverse Machine Fly.jpg',
    'BackExtension': './assets/Images/Back_Exercise/Back_Extensions.jpg',
    //Arms images
    'BicepCurl': './assets/Images/Arm_Exercise/Bicep_Curls.jpg',
    'DumbbellTricepExtension': './assets/Images/Arm_Exercise/Dumbbell_Tricep_Extension.jpg',
    'HammerCurl': './assets/Images/Arm_Exercise/Hammer_Curl.jpg',
    'TricepDip': './assets/Images/Arm_Exercise/Tricep_Dips.jpg',
    'TricepKickback': './assets/Images/Arm_Exercise/Dumbbell_Tricep_Kickback.jpg',
    'BarbellSkullCrusher': './assets/Images/Arm_Exercise/Barbell_Skull_Crusher.jpg',
    'EZBarbellPreacherCurl': './assets/Images/Arm_Exercise/EZ_Barbell_Preacher_Curl.jpg',
    'TricepPushdown': './assets/Images/Arm_Exercise/Triceps_Pushdown.jpg',
    //Legs images
    'Squat': './assets/Images/Leg_Exercise/Squats.jpg',
    'BarbellSquat': './assets/Images/Leg_Exercise/Barbell_Squats.jpg',
    'Deadlift': './assets/Images/Leg_Exercise/Deadlift.jpg',
    'Lunges': './assets/Images/Leg_Exercise/Lunges.jpg',
    'LegPress': './assets/Images/Leg_Exercise/Leg_Press.jpg',
    'SeatedLegCurl': './assets/Images/Leg_Exercise/Seated_Leg_Curl.jpg',
    'LegExtension': './assets/Images/Leg_Exercise/Leg_Extensions.jpg',
    'CalfRaise': './assets/Images/Leg_Exercise/Calf_Raises.jpg',
    'BarbellHipThrust': './assets/Images/Leg_Exercise/Barbell_Hip_Thrusts.jpg',
    //Shoulder images
    'DubbellShoulderPress': './assets/Images/Shoulder_Exercise/Dumbbell_Shoulder_Press.jpg',
    'SeatedDumbbellLateralRaise': './assets/Images/Shoulder_Exercise/Seated_Dumbbell_Lateral_Raises.jpg',
    'FrontRaise': './assets/Images/Shoulder_Exercise/Front_Raises.jpg',
    'ReverseFly': './assets/Images/Shoulder_Exercise/Reverse_Flys.jpg',
    'BarbellShrug': './assets/Images/Shoulder_Exercise/Barbell_Shrug.jpg',
    'KettlebellUprightRow': './assets/Images/Shoulder_Exercise/Kettlebell_Upright_Row.jpg',
    'ArnoldPress': './assets/Images/Shoulder_Exercise/Arnold_Press.jpg',
    'CabledShoulderPull': './assets/Images/Shoulder_Exercise/Cabled_Shoulder_Pull.jpg',
    //Core images
    'Plank': './assets/Images/Core_Exercise/Plank.jpg',
    'RussianTwist': './assets/Images/Core_Exercise/Russian_Twists.jpg',
    'LegRaise': './assets/Images/Core_Exercise/Leg_Raises.jpg',
    'DumbbellStraightArmCrunch': './assets/Images/Core_Exercise/Dumbell_Straight_Arm_Crunch.jpg',
    'BicycleCrunch': './assets/Images/Core_Exercise/Bicycle_Crunch.jpg',
    'MountainClimber': './assets/Images/Core_Exercise/Mountain_Climber.jpg',
    'VUp': './assets/Images/Core_Exercise/V_Ups.jpg',
    'SitUp': './assets/Images/Core_Exercise/Sit_Up.jpg'   
}

function showModal(modalName) {
  let imageUrlToShow = workoutImages[modalName]
  console.log(imageUrlToShow)
  
  // TODO Get Image Element
let imageElement = document.querySelector('#workoutImage');
imageElement.src = imageUrlToShow;
  
  // Change Source of image Element
}


// Create Object of all workouts with images attached to them 
