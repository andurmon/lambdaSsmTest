const { getParameters, getParameter } = require("./Ssm.js");
const { get } = require("./Fetching.js")

const ParamStoreName = "PokeUrl";
const params = {
    Name: ParamStoreName,
    WithDecryption: false
}

exports.handler = async (event) => {

    try {

        await getParameters({
            Names: [ParamStoreName], WithDecryption: false
        })

        let finalResponse = await getParameter(params)

        const responseGet = await get({
            'method': 'GET',
            'url': finalResponse.Parameter.Value,
            'headers': {}
        });
        console.log('responseGet: ', responseGet);

        return responseGet;

    } catch (e) {
        console.log("Catch", e)
        return {
            statusCode: 500,
            message: e.message
        }
    }
};
