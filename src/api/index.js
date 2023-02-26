import axios from 'axios';

export const getData = async (
  type = 'restaurants',
  bl_lat,
  bl_lng,
  tr_lat,
  tr_lng
) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : '39.73042105857623',
          tr_latitude: tr_lat ? tr_lat : '40.07633195201663',
          bl_longitude: bl_lng ? bl_lng: '32.51847347138715',
          tr_longitude: tr_lng ? tr_lng : '33.00705601280067',
          limit: '30',
          currency: 'USD',
          unit: 'km',
          lang: 'en_US',
        },
        headers: {
          'X-RapidAPI-Key':
            '998ab97f8amsh65ecc7c2f237492p1b505ejsn74f6247245ae',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
