let finalString = "";

let narcTranslator = function() {
  let string = document.getElementById("input").value.toLowerCase();
  let removePunctuation = string.replace(/[.,\/#!$%\^&\*;:{}=\?-_`~()]/g,"");
  let array = removePunctuation.replace(/\s{2,}/g," ").split(" ");
  let noResponse = "You forgot to put something in the Narcissist side, silly!"
  let meString = "but what about MEEEEE";

  if (document.getElementById("input").value == "") {
    document.getElementById("output").value = noResponse;
    return;
  } else if (document.getElementById("input").value == noResponse) {
    document.getElementById("output").value = "Okay, now you're just being a smartass."
    return;
  } else
  for (i = 0; i < array.length; i++) {
    let word = array[i];
    switch(word) {
        case "me":
        case "my":
        case "i":
        case "we":
        case "us":
        case "our":
            meString += "ME";
            break;
        case "you":
        case "child":
        case "children":
        case "daughter":
        case "son":
            ungratefulChild();
            break;
        case "family":
        case "families":
        case "mom":
        case "dad":
        case "mother":
        case "father":
            butFamily();
            break;
        case "remember":
        case "understand":
        case "know":
            faultyMemory();
            break;
        case "sorry":
        case "apologize":
        case "apologized":
        case "forgive":
        case "forgave":
            fakeApology();
            break;
        case "love":
        case "loved":
        case "hope":
        case "hoped":
        case "hug":
        case "hugs":
        case "kiss":
        case "kisses":
        case "warmth":
        case "warm":
           loveBomb();
            break;
        default:
            insertBlahs();
        }
    }
    document.getElementById("output").value = finalString + meString;
}

function rand(n) {
  return Math.floor(Math.random()*n)
}

let ungratefulChild = function() {
  let response =[
  "you WORTHLESS PEON ",
  "you UNGRATEFUL CHILD ",
  "you MONSTER "]
  finalString += response[rand(3)]
}

let faultyMemory = function() {
  let response =[
  "gaslight gaslight gaslight ",
  "your memories are incompatible with my self-image and therefore wrong ",
  "how DARE you try to hold me responsible for my actions ",
  "I haven't done a single thing wrong in my entire life "]
  finalString += response[rand(4)]
}

let butFamily= function() {
  let response =[
  "but FAAAAAAAAMILY ",
  "fAmIlYYYyyyyyYYYYy ",
  "but but but FAAAAAAMILYYYYYYY "]
  finalString += response[rand(3)]
}

let fakeApology = function() {
  let response =[
  "the word 'sorry' magically makes everything okay right ",
  "let me offer an apology you know I don't mean but please come back I need more puppets to manipulate ",
  "I have learned nothing but you're supposed to forgive me anyway because I'm the very definition of entitled "]
  finalString += response[rand(3)]
}

let loveBomb = function() {
  let response =[
  "if I lovebomb you enough will you give me access to that sweet sweet N-supply ",
  "maybe if I say the word 'love' enough you'll forget that I'm an abusive monster ",
  "combination lovebomb/guilt-trip "]
  finalString += response[rand(3)]
}

let insertBlahs = function() {
  let ranN = (rand(10) + 1);
  if (ranN === 10) {
    finalString += "harrumph ";
  } else if (ranN >= 5) {
    finalString += "blah ";
  } else {
// nothing
  }
}

let reset = function() {
  document.getElementById("input").value = ""
  document.getElementById("output").value = ""
  finalString = ""
}

// event listeners
const popup = document.querySelector(".popup");
const trigger = document.querySelector("#feedback-button");
const closeButton = document.querySelector("#close-button");

function togglePopup() {
    popup.classList.toggle("show-popup");
}

function windowOnClick(event) {
    if (event.target === popup) {
        togglePopup();
    }
}

trigger.addEventListener("click", togglePopup);
closeButton.addEventListener("click", togglePopup);
window.addEventListener("click", windowOnClick);


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'toddler');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'normal');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
document.getElementById("reset-button").addEventListener ("click", reset, false);
document.getElementById("translate-button").addEventListener ("click", narcTranslator, false);


