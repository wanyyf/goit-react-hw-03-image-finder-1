import axios from 'axios';
const API_KEY = '28591679-2423d3506d277a146306c6fa4';
export const getDataApi = async params => {
  try {
    const response = await axios.get(`https://pixabay.com/api/`, {
      params: {
        orientation: 'horizontal',
        image_type: 'photo',
        key: API_KEY,
        ...params,
      },
    });

    return response.data;
  } catch {
    throw new Error('Failed to fetch data from API');
  }
};
