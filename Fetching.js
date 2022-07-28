
const request = require("request")

exports.get = async (options) => {
    return new Promise((resolve, reject) => {

        request(options, (error, response) => {
            if (error) {
                reject(error);
                return
            }
            resolve(response.body);
            return
        });

    })
}
