let finalString = "";

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
let thickerThanWater = function() {
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

let narcTranslator = function() {
  let string = document.getElementById("input").value;
    string = string.toLowerCase();
    let removePunctuation = string.replace(/[.,\/#!$%\^&\*;:{}=\?-_`~()]/g,"");
    let array = removePunctuation.replace(/\s{2,}/g," ").split(" ");
    let meString = "it's all about MEEEEE";
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
            thickerThanWater();
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
    document.getElementById("translation").textContent = finalString + meString;
  }

  document.getElementById("button").addEventListener ("click", narcTranslator, false);