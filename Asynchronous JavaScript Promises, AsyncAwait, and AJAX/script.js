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

getCountryData('brazil');
getCountryData('portugal');
// getCountryData('germany');
