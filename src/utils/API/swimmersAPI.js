const axios = require('axios');
const backendURL = "https://iowvglieh8.execute-api.us-east-1.amazonaws.com/Prod";
//file will contain any API related to handling data from the swimmers table in DynamoDB

export async function getSwimmersForSeason(season_name, season_year){
    const result = await axios.get(backendURL + "/season/" + season_name + "/" + season_year);

    return result.data.Items;
}

export async function setSwimmer(name, email, dues_paid, shirt_size, received_cap, received_shirt, season_name, season_year){
    const swimmer = {
        email: email,
        dues_paid: dues_paid,
        shirt_size: shirt_size,
        received_cap: received_cap,
        received_shirt: received_shirt,
        season_name: season_name,
        season_year: season_year
    }
    await axios.put(backendURL + "/" + name, swimmer);
}