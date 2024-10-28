let fileIcons = {
  ".txt": "https://via.placeholder.com/200?text=TXT",
  ".pdf": "https://via.placeholder.com/200?text=PDF",
  ".mp3": "https://via.placeholder.com/200?text=MP3",
  ".exe": "https://via.placeholder.com/200?text=EXE",
  ".rar": "https://via.placeholder.com/200?text=RAR",
  ".docx": "https://via.placeholder.com/200?text=DOCX",
  ".jpg": "https://via.placeholder.com/200?text=JPG",
  ".png": "https://via.placeholder.com/200?text=PNG",
  ".gif": "https://via.placeholder.com/200?text=GIF",
  ".zip": "https://via.placeholder.com/200?text=ZIP",
};

let file = Object.entries(fileIcons);
console.log(file)

//displaying the folder on the home page
function displayFolder(file){

    file.map((ele) => {
      let ext = ele[0].split(".")[1];
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
          <i class="fa-solid fa-folder folder"></i>
          <p>${ele[0].split(".")[1]}</p>
          <button class="btn" onclick = "movetobin(ext)">Move to bin</button>
      
      `;
    card.addEventListener("click", () => {
      window.location.href = `file.html?ext=${ext}`;
    });

    
    document.querySelector("#container").append(card);

  });
}

displayFolder(file);

//sorting
function filter(){
  //  document.querySelector("#container") = ""

  let value = document.querySelector("#category").value;

  let filterData= file.filter((ele) =>{
    return ele[0] === value;
  })
  let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
          <i class="fa-solid fa-folder folder"></i>
          <p>${filterData[0][0].split(".")[1]}</p>
      
      `;
    card.addEventListener("click", () => {
      window.location.href = `file.html?ext=${ext}`;
    });
    document.querySelector("#container").append(card);

  console.log(filterData[0])

}

function movetobin(ele){
  console.log(ele)
}

function search(){
  let ser = document.querySelector("#search").value
  console.log(ser)

  let filterData= file.filter((ele) =>{
    return ele[0] === ser;
  })
  console.log(filterData)
  document.querySelector("#container")= "";
  let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
          <i class="fa-solid fa-folder folder"></i>
          <p>${filterData[0][0].split(".")[1]}</p>
      
      `;
    card.addEventListener("click", () => {
      window.location.href = `file.html?ext=${ext}`;
    });
    document.querySelector("#container").append(card);
}

