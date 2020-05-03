const axios = require('axios');
const backendURL = "https://xygwbmimx2.execute-api.us-east-1.amazonaws.com/Prod";
//file will contain any API related to handling data from the seasons table in DynamoDB

export async function getSeasons(){
    const result = await axios.get(backendURL);
    return result.data.Items;
}