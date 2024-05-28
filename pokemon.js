//* 서버 Url
let url = "http://localhost:3000";


// 포켓몬 이미지, 선택 버튼 요소
let root = document.getElementById('root')
let pokemonImage = new Image(200, 200);
root.appendChild(pokemonImage);
let pokemonText = document.createElement('h1')
root.appendChild(pokemonText)
let selecbutton = document.createElement('button')
root.appendChild(selecbutton)
let selecword = document.createTextNode('당신의 포켓몬은 뭘까~요? 피피카츄~!')
selecbutton.appendChild(selecword)

let string = "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/"
let png01 = "01.png"
let png03 = "03.png"

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function pokemonSelector(array) {
  const firstGetRandomIndex = getRandomInt(0, array.length);
  
  for(let i = 1; i < array.length; i++) {
    if(i === firstGetRandomIndex) {
      pokemonText.innerText = array[i-1]
      // * 이미지 인덱스와 배열의 인덱스가 다르기 떄문에 순서를 맞춰주기 위해 i-1을 해줘야 순서가 맞음.

      if(`${i}`[1] === undefined) { // * 직역하면 한자리수를 의미
        pokemonImage.src = string + `000${i}` + png01;
      } else if(`${i}`[2] === undefined) {
        if (i === 131) {
          pokemonImage.src = string + `00${i}` + png03;
        } else {
          pokemonImage.src = string + `00${i}` + png01;
        }
      } else if(`${i}`[3] === undefined) {
        pokemonImage.src = string + `0${i}` + png01;
      }else {
        pokemonImage.src = string + `${i}` + png01;
      }
    }
  }

  return firstGetRandomIndex;
}


selecbutton.addEventListener('click',function (){
  let requestL1 = fetch(url + "/data.json", {method : "GET"})
.then(res => res.json())
.then(data => {
  const getData = pokemonSelector(data);
}); 
});










// function pokemonSelector(data) {
  
//   function getRandomInt(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
//   }

//   const firstGetRandomIndex = getRandomInt(0, data.length);

//   for (let i = 0; i < data.length; i++) {
    
    
//     if (Array.isArray(data[firstGetRandomIndex]) === true) {
//       const randomIndex = getRandomInt(0, data[i].length);

//       for (let j = 0; j < data[i].length; j++) {
//         return data[firstGetRandomIndex][randomIndex];
//       }
//     }
//   }
//   return data[firstGetRandomIndex];
// }

// selecbutton.addEventListener("click",function(){})