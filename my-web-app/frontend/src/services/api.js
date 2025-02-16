import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api', // Adjust the base URL as needed
    headers: {
        'Content-Type': 'application/json',
    },
});

// Example function to get data from the backend
export const fetchData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// Example function to post data to the backend
export const postData = async (endpoint, data) => {
    try {
        const response = await apiClient.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

// Add more API functions as needed
