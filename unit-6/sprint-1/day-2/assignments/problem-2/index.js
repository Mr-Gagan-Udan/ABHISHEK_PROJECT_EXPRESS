const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const generateDirectoryListingHTML = (directoryPath, files) => {
  let html = `
    <h1>Directory Listing for ${directoryPath}</h1>
    <ul style="list-style-type:none;">
  `;

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      html += `<li>📁 <a href="${path.join(directoryPath, file)}">${file}</a></li>`;
    } else {
      html += `<li>📄 <a href="${path.join(directoryPath, file)}">${file}</a></li>`;
    }
  });

  html += '</ul>';
  return html;
};

app.get('*', (req, res) => {
  const requestedPath = path.join(__dirname, req.path); 
  if (fs.existsSync(requestedPath)) {
    const stats = fs.statSync(requestedPath);
    
    if (stats.isDirectory()) {
      const files = fs.readdirSync(requestedPath);
      const html = generateDirectoryListingHTML(req.path, files);
      res.send(html);
    } else if (stats.isFile()) {
      res.sendFile(requestedPath);
    }
  } else {
    res.status(404).send('<h1>404 Not Found</h1>');
  }
});

app.listen(port, () => {
  console.log(`File server running at http://localhost:${port}`);
});
