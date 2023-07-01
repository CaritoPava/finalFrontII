
import axios from 'axios';

export async function getDestinstDetail(idDentist) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${idDentist}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch dentists', error);
    throw error;
  }
}
