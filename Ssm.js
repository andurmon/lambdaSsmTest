const AWS = require("aws-sdk")
const ssm = new AWS.SSM();

exports.getParameter = async (params,) => {
    return new Promise((resolve, reject) => {
        ssm.getParameter(params, (error, data) => {
            if (error) {
                console.log("Error getting parameters", error)
                reject(error)
                return
            }

            console.log("Parameter: ", data)
            resolve(data);
            return;

        });
    })
}