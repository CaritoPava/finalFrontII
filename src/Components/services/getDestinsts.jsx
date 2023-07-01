
import axios from 'axios';

export async function getDentists() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch dentists', error);
    throw error;
  }
}
