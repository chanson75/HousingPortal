import axios from 'axios';

const BASE_URL = 'https://realtor16.p.rapidapi.com/search/forsale';
const API_KEY = '4939c8c623msh9a56eceffae76f7p15eb04jsn0b1b62d030ce'; // Your key

export const fetchListings = async (location) => {
    const options = {
      method: 'GET',
      url: BASE_URL,
      params: {
        location: location,
        search_radius: '0',
      },
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'realtor16.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log('API Response:', response.data); // 🔍 Log here
      // Return the properties array from the response
      return response.data;
    } catch (error) {
      console.error('Error fetching listings:', error);
      return [];
    }
};