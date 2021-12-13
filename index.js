const { getCode, getName } = require('country-list');
const axios = require("axios");

let country = process.argv.slice(2)[0];
let countryCode = getCode(country);
let date = new Date();
let currentYear = date.getFullYear();

console.log(`${country} : ${countryCode} (${currentYear})`);

axios.get(`https://date.nager.at/api/v3/PublicHolidays/${currentYear}/${countryCode}`)
    .then((response) => {
        response.data.forEach(element => console.log(`${element.date} - ${element.name}`));
    })
    .catch((error) => {
        // handle error
        console.log(error);
    })