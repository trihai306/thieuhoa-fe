import { APP_API_URL } from '@/common/constants';
import { ApiResponse } from '@/types/common';

class LayoutService {
  async menu() {
    try {
      const response = await fetch(`${APP_API_URL}/menu`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data; // Assuming the server sends the data in the format you expect.
    } catch (error) {
      console.error("Failed to fetch menu:", error);
      throw error; // Re-throw to handle this error elsewhere
    }
  }
}

export const layoutService = new LayoutService();
