//fetching the photos data
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((data) => displayPhotos(data))
  .catch((err) => console.log(err));
let container = document.querySelector("#container");
// let input = document.querySelector(".search");
// input.addEventListener("onchange", debounce())

//display photos
function displayPhotos(photos) {
  console.log(photos);
  container.innerHTML=null;
  photos.forEach((ele) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img class="img" src="${ele.url}" alt="">
        <p>${ele.title}</p>
        
        `;
    card.addEventListener("click",function(){
        window.location.href = `card.html?id=${ele.id}`
    })
    container.append(card);
  });
}

///infinite scrolling

let flag = false;
let page = 1;

window.addEventListener("scroll", () => {
  let clientHeight = document.documentElement.clientHeight;
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollTop = document.documentElement.scrollTop;

  if (scrollHeight - clientHeight <= Math.ceil(scrollTop) && flag) {
    page++;
    displayPhotos(page);
    flag = false;
  }
});

//to fetch a data
// async function fetchData(page = 1) {
//   try {
//     let res = await fetch(
//       `https://jsonplaceholder.typicode.com/photos?page=${page}&limit=20`
//     );
//     let data = await res.json();
//     displayPhotos(data);
//     flag = true;
//   } catch (err) {
//     console.log(err);
//   }
// }


//debouncing
function debounce(){
    console.log(this.value)
    let timer;
    return function(){
        if (timer){
            clearTimeout(timer);

        }
        timer = setTimeout(() => {
            displayPhotos()
        }, 300);
    }
}

