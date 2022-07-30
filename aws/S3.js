const AWS = require("aws-sdk");
const s3 = new AWS.S3();
/**
 * 
 * @param {*} request 
 * @returns 
 */
exports.putObject = async (request) => {

    try {
        const putObjRequest = {
            Body: request.body,
            Bucket: "andurmon-dev-bucket0003",
            Key: request.key
        }

        const template = await s3.putObject(putObjRequest).promise();
        console.log("template", template)

        return {
            valid: true,
            code: 200,
            data: template.Body?.toString()
        }
    }
    catch (err) {
        console.log(err)
        return {
            valid: false,
            code: 503,
            message: err.message,
            data: {}
        }
    }
}

/**
 * 
 * @param {*} request 
 * @returns 
 */
exports.putObjectLifeCycleConfiguration = async (request) => {

    try {
        const putObjRequest = {
            Bucket: "andurmon-dev-bucket0003",
            LifecycleConfiguration: {
                Rules: [
                    {
                        Status: "Enabled",
                        Expiration: {
                            Date: '2014-07-30T00:00:00.000Z',
                        },
                        Filter: {
                            Prefix: request.prefix
                        }
                    }
                ]
            }
        }

        const responseLifeCycle = await s3.putBucketLifecycleConfiguration(putObjRequest).promise();
        console.log("responseLifeCycle", responseLifeCycle)

        return {
            valid: true,
            code: 200,
            data: responseLifeCycle
        }
    }
    catch (err) {
        console.log(err)
        return {
            valid: false,
            code: 503,
            message: err.message,
            data: {}
        }
    }
}
