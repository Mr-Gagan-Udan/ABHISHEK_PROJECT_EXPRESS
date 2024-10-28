// let param = new URLSearchParams(window.location.search)
let extension = window.location.search
let param = extension.split("=")[1]
console.log(param)

//getting the data from server
const requestOptions = {
    method: "GET",
  };
  
  fetch(`https://file-organiser-system-default-rtdb.firebaseio.com/${param}.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => displayCard(result))
    .catch((error) => console.error(error));


//displaying the data in for of card
function displayCard(ele){
    if(ele){
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
                <img src=${ele} alt="img"></img>
                <p>${param}</p>
                <button class="btn" onclick = "deleteCard(${param})">Delete</button>
                <button id="ebtn" onclick = "editCard(${param}, ${ele})">Edit</button>
            
            `;
        
        document.querySelector("#container").append(card);

        document.querySelector("#ebtn").addEventListener("click", ()=>{
            console.log(`${param}`, `${ele}`)
            window.location.href = "edit.html"
        })
    }else{
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
                <h2>ITEM NOT FOUND</h2>
            
            `;
        
        document.querySelector("#container").append(card);

    }
    
}





//deleting the cards form server

function deleteCard(ext){
    console.log(ext)
    const requestOption = {
        method: "DELETE",
      };
      
      fetch(`https://file-organiser-system-default-rtdb.firebaseio.com/${ext}.json`, requestOption)
        .then((response) => response.json())
        .then((result) => ()=>{
            console.log("result")
            window.location.href = "index.html";
        })
        .catch((error) => console.error(error));
}



//editing the cards

function editCard(ext,link){
    console.log(ext,link)
    // window.location.href = `edit.html?ext=${ext}&link=${link}`
}