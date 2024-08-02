import server from "./api/server";
import { ENDPOINTS } from "./api/endpoints";

export const getUser = async (userId) => {
  try {
    const response = await server.get(`${ENDPOINTS.DOCTORS}/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Other user-related functions
