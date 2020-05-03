const axios = require('axios');
const backendURL = "https://iowvglieh8.execute-api.us-east-1.amazonaws.com/Prod";
//file will contain any API related to handling data from the swimmers table in DynamoDB

export async function getSwimmersForSeason(season_name, season_year){
    const result = await axios.get(backendURL + "/season/" + season_name + "/" + season_year);

    return result.data.Items;
}