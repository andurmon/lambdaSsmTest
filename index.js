const { getParameter } = require("./aws/Ssm");
const { putObject, putObjectLifeCycleConfiguration } = require("./aws/S3");
const { get } = require("./Fetching.js")

const ParamStoreName = "PokeUrl";
const params = {
    Name: ParamStoreName,
    WithDecryption: false
}


const fs = require("fs");

exports.handler = async (event) => {

    try {
        const cat = fs.readFileSync("./public/cat1.jpg",)
        console.log('cat: ', cat);

        await getParameter({
            Name: ParamStoreName, WithDecryption: false
        })

        let finalResponse = await getParameter(params)

        const responseGet = await get({
            'method': 'GET',
            'url': finalResponse.Parameter.Value,
            'headers': {}
        });
        console.log('responseGet: ', responseGet);


        await putObject({
            body: cat,
            key: event.key
        });

        return await putObjectLifeCycleConfiguration({
            prefix: event.key
        });

    } catch (e) {
        console.log("Catch", e)
        return {
            statusCode: 500,
            message: e.message
        }
    }
};
