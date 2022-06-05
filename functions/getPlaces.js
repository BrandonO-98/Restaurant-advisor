/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const axios = require('axios').default;

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const getPlaces = async (ne, sw) => {
  try {
    const neObj = JSON.parse(ne);
    const swObj = JSON.parse(sw);
    const { data: { data } } = await axios.get(URL, {
      params: {
        bl_latitude: swObj.lat,
        tr_latitude: neObj.lat,
        bl_longitude: swObj.lng,
        tr_longitude: neObj.lng,
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_API_KEY,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

exports.handler = async (e, context) => {
  const data = await getPlaces(e.queryStringParameters.ne, e.queryStringParameters.sw);
  const response = {
    statusCode: 200,
    body: JSON.stringify(data),
  };
  return response;
};
