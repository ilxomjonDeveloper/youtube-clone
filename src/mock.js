fetch(
  "https://language.googleapis.com/v1/documents:analyzeEntities?key=AIzaSyARqizBhA16NXs1BX6Pe-3euXIt4QYoUgg"
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
