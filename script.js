
const cardContainer = document.getElementById('cardContainer')
const footer = document.getElementById('footer')

const card = document.getElementsByClassName('card')

function getInputValue(){
  var inputVal = document.getElementById("myInput").value;
  if(inputVal+1!=inputVal+2-1){
    alert(`${inputVal} is not a number`);
  }
  else{
    alert(`${inputVal} card pairs generated`);
    footer.style.display='none'
    generateCards(inputVal*1)
  }
}

let cardsArr=[]

let biggestNum=1

function generateCards(inputVal){
  console.log(inputVal);

  for(let i=0; i<inputVal; i++){
    cardsArr.push(biggestNum)
    cardsArr.push(biggestNum)
    biggestNum++
  }
  console.log(cardsArr);
  shuffleArray(cardsArr)
  console.log(cardsArr);


  for(let i=0; i<inputVal*2; i++){
    cardContainer.innerHTML+=`<div class="card" onclick="flip(${i});"></div>`
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

let cardPressed=false
let cardPressedNum=false
let whichCard2=false

function flip(whichCard) {
  whichCard2=whichCard
  if(!cardPressed){
    cardPressed=cardsArr[whichCard]
    cardPressedNum=whichCard
    console.log(cardPressedNum);
    card[whichCard].innerHTML=`${cardsArr[whichCard]}`
  }
  else{
    card[whichCard].innerHTML=`${cardsArr[whichCard]}`
    if(cardPressed===cardsArr[whichCard]){
      console.log('true');
    }
    else{
      console.log('false');
      curtain.style.display='block'
      setTimeout(flipDown, 3000)
    }
    cardPressed=false
  }
}

function flipDown(){
  curtain.style.display='none'
  card[cardPressedNum].innerHTML=''
  card[whichCard2].innerHTML=''
  cardPressedNum=false
}