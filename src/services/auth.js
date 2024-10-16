import server from "./api/server";
import { ENDPOINTS } from "./api/endpoints";

export const login = async (credentials) => {
  try {
    const response = await server.post(ENDPOINTS.LOGIN, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Other authentication-related functions
