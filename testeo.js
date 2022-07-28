const { get } = require("./Fetching.js");

(async function () {

    const responseGet = await get({
        'method': 'GET',
        'url': "https://pokeapi.co/api/v2/",
        'headers': {}
    });
    console.log('responseGet: ', responseGet);
})()

