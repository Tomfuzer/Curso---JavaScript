'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//Usando APIs
//Primeiro exemplo:
/*
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/usa`);
request.send();

request.addEventListener('load', function () {
  //   console.log(this.responseText);
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const html = `<article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${+(
        data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${getCurrencyName(data)}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});
*/
function getCurrencyName(obj) {
  for (let prop in obj.currencies) {
    if (obj.currencies[prop].hasOwnProperty('name')) {
      return obj.currencies[prop].name;
    }
  }
} // Deu um trabalho resolver este problema, só consegui com a ajuda do ChatGPT, pois eu precisava receber o conteúdo da propriedade name dentro de currencies que é um objeto(0)->objeto(1)->objeto(2)->propriedade, sendo que o objeto(2) varia de nome de acordo com o país... Então pra manter a função getCountryData funcionando pra qualquer country eu precisei criar essa função getCurrencyName...

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    const html = `<article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${+(
      data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${
      Object.values(data.languages)[0]
    }</p>
    <p class="country__row"><span>💰</span>${getCurrencyName(data)}</p>
  </div>
</article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
*/

// getCountryData('brazil');
// getCountryData('portugal');
// getCountryData('germany');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${+(
      data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${
      Object.values(data.languages)[0]
    }</p>
    <p class="country__row"><span>💰</span>${getCurrencyName(data)}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   //AJAX call 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     //Render Country 1
//     renderCountry(data);

//     const [neighbour] = data.borders;
//     console.log(neighbour);

//     if (!neighbour) return;

//     //AJAX call 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('brazil');

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch('https://restcountries.com/v3.1/name/brazil');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

//Aula 253/254

const getJSON = function (url, errorMsg = 'Algo deu errado') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   //Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`País não encontrado (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       //Country 2
//       return fetch(`https://restcountries.com/v3.1/name/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Algo deu errado... ${err.message}. Tente novamente!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }; //Fetch, trata o fetch com .json() then o retorno do json pode ser utilizado (data)

const getCountryData = function (country) {
  //Country 1
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'País não encontrado'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('Nenhum país vizinho foi encontrado!');

      //Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'País não encontrado'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Algo deu errado... ${err.message}. Tente novamente!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('italia');
// });

//Coding Challenge #1
/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will bee  donto a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
let userCoords = [];

const whereAmI = function (userCoords) {
  // console.log(userCoords[0], userCoords[1]);
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${userCoords[0]}&longitude=${userCoords[1]}&localityLanguage=en`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      // console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}`);
      getCountryData(data.countryName);
    })
    .catch(err => console.error(`${err.message}`));
};

const getLocal = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (userCoords) {
        const { latitude } = userCoords.coords;
        const { longitude } = userCoords.coords;
        userCoords = [latitude, longitude];
        whereAmI(userCoords);
      },
      function () {
        alert('Não foi possível acessar sua localização!');
      }
    );
  }
};

// getLocal();
// whereAmI([52.508, 13.381]);
// whereAmI([19.037, 72.873]);
// whereAmI([-33.933, 18.474]);
// btn.addEventListener('click', function () {
//   getCountryData('indonesia');
// });

// Aula 258 - Event loop in Practice

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(res);
// });

// console.log('Teste end');

//Aula 259 - Building a Simple Promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You Win 🤑');
//     } else {
//       reject(new Error('You lost you money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('Esperei 1 segundos');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('Esperei 2 segundos');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('Esperei 3 segundos');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('Esperei 4 segundo');
//   });

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problema!')).catch(x => console.error(x));

// Aula 260 - Promisifying the Geolocation API

// console.log('Recebendo posição');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI2 = function () {
//   getPosition()
//     .then(pos => {
//       // console.log(pos.coords);
//       const { latitude, longitude } = pos.coords;
//       userCoords = [latitude, longitude];

//       return fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${userCoords[0]}&longitude=${userCoords[1]}&localityLanguage=en`
//       );
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problema com o geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       // console.log(data);
//       console.log(`You are in ${data.city}, ${data.countryName}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`País não encontrado (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}`));
// };

// btn.addEventListener('click', whereAmI2);

//Coding Challenge #2
/*
let img;
const imgPlace = document.getElementsByClassName('images')[0]; //O método getElementsByClassName retorna uma coleção de elementos, mesmo que haja apenas um elemento com a classe especificada. Portanto, é necessário acessar o primeiro elemento da coleção (ou o elemento desejado) antes de chamar o método appendChild.
// console.log(imgPlace);

const imgPath1 = 'img/img-1.jpg';
const imgPath2 = 'img/img-2.jpg';
const imgPath3 = 'img/img-3.jpg';

const creatImage = function (input) {
  return new Promise(function (resolve, reject) {
    img = document.createElement('img');
    img.src = input;
    // img.onload = function () {
    //   resolve(img);
    img.addEventListener('load', function () {
      imgPlace.appendChild(img);
      resolve(img);
    });
    img.onerror = function () {
      reject(new Error('Imagem não encontrada'));
    };
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 2000);
  });
};

creatImage(imgPath1)
  .then(() => {
    console.log('Imagem 1 carregada');
    return wait(1);
  })
  .then(() => {
    img.setAttribute('style', 'display:none'); //retira a primeira imagem
    console.log('Passaram 2 segundos');
    return creatImage(imgPath2);
  })
  .then(() => {
    console.log('Imagem 2 carregada');
    return wait(1);
  })
  .then(() => {
    console.log('Passaram 2 segundos');
    img.setAttribute('style', 'display:none');
  });
*/

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI3 = async function () {
//   try {
//     //Geolocation
//     const pos = await getPosition();
//     const { latitude, longitude } = pos.coords;
//     userCoords = [latitude, longitude];
//     //Reverse Geocoding
//     const resGeo = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${userCoords[0]}&longitude=${userCoords[1]}&localityLanguage=en`
//     );
//     if (!resGeo.ok) throw new Error('Erro ao receber as informações de local');
//     const dataGeo = await resGeo.json();

//     //Country data
//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.countryName}`
//     );
//     const data = await res.json();

//     renderCountry(data[0]);
//     return `Você esta em ${dataGeo.city}, ${dataGeo.countryName}`;
//   } catch (err) {
//     console.error(err);
//     renderError(`Algo deu errado${err.message}`);
//   }
// };
// console.log('1: Receber localização');
// // const city = whereAmI3();
// // console.log(city);
// // whereAmI3()
// //   .then(city => console.log(`2: ${city}`))
// //   .catch(err => console.error(`2: ${err.message}`))
// //   .finally(() => console.log('3: Localização recebida'));

// (async function () {
//   try {
//     const city = await whereAmI3();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.log(`2: ${err.message}`);
//   }
//   console.log('3: Localização recebida');
// })();

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log(data1.capital, data2.capital, data3.capital);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {}
};

get3Countries('brazil', 'portugal', 'italia');
