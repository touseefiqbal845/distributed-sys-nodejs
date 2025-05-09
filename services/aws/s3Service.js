const s3 = require("../config/awsConfig");
const BUCKET_NAME = process.env.S3_BUCKET_NAME;

const uploadUserData = async (user_id, userData) => {
    const params = {
        Bucket: BUCKET_NAME,
        Key: `${user_id}.json`,
        Body: JSON.stringify(userData, null, 2),
        ContentType: 'application/json',
        ACL: 'public-read',
    };

    try {
        const data = await s3.upload(params).promise();
        return data.Location; 
    } catch (error) {
        throw new Error("Failed to upload JSON: " + error.message);
    }
};

const getSignedUrl = async (user_id) => {
    const params = {
        Bucket: BUCKET_NAME,
        Key: `${user_id}.json`,
        Expires: 60 * 5, 
    };

    try {
        return s3.getSignedUrl('getObject', params);
    } catch (error) {
        throw new Error("Failed to generate signed URL: " + error.message);
    }
};

module.exports = { uploadUserData, getSignedUrl };


// const url = await uploadUserData(user_id, userData); 
// const url = await getSignedUrl(user_id);