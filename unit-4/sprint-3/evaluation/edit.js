const raw = JSON.stringify({
    "png": "https://via.placeholder.com/200?text=PNG"
  });
  
const requestOptions = {
    method: "PUT",
    body: raw,
  };
  
fetch("https://file-organiser-system-default-rtdb.firebaseio.com/pdf.json", requestOptions)
    .then((response) => response.text())
    .then((result) => ()=>{
        console.log(result)
    })
    .catch((error) => console.error(error));


function editfile(){
    preventDefault();
    console.log("hello")
    
}