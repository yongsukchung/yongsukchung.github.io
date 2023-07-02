const API_KEY = "AIzaSyAxOmuGx3b5PU514LzThHv6OhEEP5fX-sA";

function getFile(fileId) {
  return new Promise((resolve, reject) => {
    fetch(`https://www.googleapis.com/drive/v2/files?q='${fileId}'+in+parents&key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => reject('Error retrieving files:', error));
  });
}
function getFileDetails(fileId) {
  return new Promise((resolve, reject) => {
    fetch(`https://www.googleapis.com/drive/v2/files/${fileId}?key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => reject('Error retrieving files:', error));
  });
}
