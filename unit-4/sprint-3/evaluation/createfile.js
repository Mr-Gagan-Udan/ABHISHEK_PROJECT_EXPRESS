const raw = JSON.stringify({
    "png": "https://via.placeholder.com/200?text=PNG"
  });
  
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  fetch("https://file-organiser-system-default-rtdb.firebaseio.com/pdf.json", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));