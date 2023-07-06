const cons = require("./urls.js");
const request = require("./requestHandler.js");

// fetch count api
function getCatCount() {
  return request.httprequest(cons.url.HOST, cons.url.CAT_COUNT).then((data) => {
          return data;
  });
}

// fetch cat
function getRandomCat(){
  return request.httprequest(cons.url.HOST, cons.url.CAT_RANDOM).then((data) => {
          return data;
  });
}

// fetch duck
function getRandomDuck(){
  return request.httprequest(cons.url.HOST_DUCK, cons.url.DUCK_RANDOM).then((data) => {
          return data;
  });
}

// fetch quokka
function getRandomQuokka(){
  return request.httprequest(cons.url.HOST_QUOKKA, cons.url.QUOKKA_RANDOM).then((data) => {
          return data;
  });
}


// fetch fox
function getRandomFox(){
  return request.httprequest(cons.url.HOST_FOX, cons.url.FOX_RANDOM).then((data) => {
          return data;
  });
}

// fetch dog
function getRandomDog(){
  return request.httprequest(cons.url.HOST_DOG, cons.url.DOG_RANDOM).then((data) => {
          return data;
  });
}

// fetch doggo
function getRandomDoggo(){
  return request.httprequest(cons.url.HOST_SHIBE, cons.url.DOGGO_RANDOM).then((data) => {
          return data;
  });
}

// fetch bird
function getRandomBird(){
  return request.httprequest(cons.url.HOST_SHIBE, cons.url.BIRD_RANDOM).then((data) => {
          return data;
  });
}

// fetch insult
function getRandomInsult(){
  return request.httprequest(cons.url.HOST_INSULT, cons.url.INSULT_RANDOM).then((data) => {
          return data;
  });
}

// fetch coffee
function getRandomCoffee(){
  return request.httprequest(cons.url.HOST_COFFEE, cons.url.COFFEE_RANDOM).then((data) => {
          return data;
  });
}

// export functions
module.exports = {getCatCount, getRandomCat, getRandomFox, getRandomDog,
  getRandomQuokka, getRandomDuck, getRandomInsult, getRandomDoggo,
  getRandomBird, getRandomCoffee};
