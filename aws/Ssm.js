const AWS = require("aws-sdk")
const ssm = new AWS.SSM();

AWS.config.update({ region: "us-east-1" });


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