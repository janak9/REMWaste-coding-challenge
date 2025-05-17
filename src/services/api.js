import { API_ENDPOINTS, DEFAULT_POSTCODE, DEFAULT_AREA } from '../constants/api';

export const fetchSkips = async (postcode = DEFAULT_POSTCODE, area = DEFAULT_AREA) => {
  try {
    const response = await fetch(`${API_ENDPOINTS.SKIPS}?postcode=${postcode}&area=${area}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch skips:', error);
    throw error;
  }
}; 