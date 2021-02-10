'use strict';




let userName=prompt('Enter your username');
console.log(userName);
alert('welcome to the website:' + '  ' + userName);
alert('YOUR USERNAME IS : ' + '  ' +userName);
let correctAns=0;
function tlabtob() {
  if(typeLaptop.toLowerCase() === 'yes' ||typeLaptop.toLowerCase() === 'y' ){
    alert('you hp is fav laptop');
    correctAns+=1;
    console.log(typeLaptop);
  }else {
    alert('you hp is not fav laptop');
  }

}
function tvga(){

  if(typeVga.toLowerCase() === 'yes' ||typeVga.toLowerCase() === 'y' ){
    alert('you hp is fav vga card');
    console.log(typeVga);
    correctAns+=1;
  
  }else {
    alert('you hp is not fav vga');
  }
}
function tmouse(){
  if(typeMouse.toLowerCase() === 'yes' ||typeMouse.toLowerCase() === 'y' ){
    alert('you hp is fav Mouse');
    console.log(typeMouse);
    correctAns+=1;
  
  }else {
    alert('you hp is not fav Mouse');
  }

}

function tkeybourd(){
  if(typeKeyboard.toLowerCase() === 'yes' ||typeKeyboard.toLowerCase() === 'y' ){
    alert('you hp is fav Keyboard');
    console.log(typeKeyboard);
    correctAns+=1;
  
  }else {
    alert('you hp is not fav Keyboard');
  }

}
function headset(){
  if(typeHeadset.toLowerCase() === 'yes' ||typeHeadset.toLowerCase() === 'y' ){
    alert('you hp is fav headset');
    console.log(typeHeadset);
    correctAns+=1;
  
  }else {
    alert('you hp is not fav headset');
  }

}

function gNumber(){
  while( tryn){
    if(guessNumber === correctNumber.toString()){
      alert('your answer is correct');
      console.log(correctNumber);
      correctAns+=1;
      console.log(correctAns);
      break;
    }
  
    else if(guessNumber < correctNumber){
      alert('its is low');
      console.log(guessNumber);
    } else if (guessNumber > correctNumber) {
      alert('its high');
      console.log(guessNumber);
    }
    tryn-=1;
    guessNumber=prompt('please try again');
    
    if(tryn===1){
      alert('the correct answer is :' + correctNumber);
      break;
    }
  }
  

}

function gPlaces(){
  for(let b=0;b<7;b++){
    for(let i=0;i<placesList.length;i++){
      if(userGuess === placesList[i]){
        alert('right answer');
        correctAns+=1;
        flag=true;
        break;
  
      }
    }
    
    if(flag){
      break;
    }
    alert('its wrong');
    userGuess=prompt('ask again ' );
  
  }

}

let typeLaptop=prompt('it is hp your favorite laptop yes/no');
tlabtob();  

// 2d Q
let typeVga=prompt(' it is nividea your favorite vga card yes/no');
tvga();
let typeMouse=prompt('it is Microsoft your favorite mouse yes/no');
tmouse();
let typeKeyboard=prompt('it is microsoft your favorite keyboard yes/no');
tkeybourd();
let typeHeadset=prompt(' it is hyberx your favourite headset yes/no');
headset();

let guessNumber=prompt('guess number ');
let correctNumber=10;
let tryn=4;
gNumber();

let placesList=['goa','london','rome','petra','cairo','moscow','madrid','dubai','beirut','baghdad'];
console.log(placesList);
console.log(placesList.length);

//  let attempt=6;
 let userGuess=prompt('please guess one of the top ten places' );
// let correct=false;
// while(attempt && !correct){
//   for (let i=0;i<placesList.length;i++){
//     if(userGuess === placesList[i]){
//       alert('your choice is coreect');
//       correct=true;
//       console.log(userGuess);
//       correctAns+=1;
//       console.log(correctAns);
//       alert('you got a ' + correctAns + ' correct answers');
//       break;
//     }
//     attempt-=1;
//     userGuess=prompt('please try again you have' + attempt + 'remaining');
//     console.log(correctAns);
//     break;
//   }
//   if (correct ){
//     break;
//   }

// }
let flag=false;
gPlaces();
alert('you got a ' + correctAns + ' correct answers');


















