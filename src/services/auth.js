import server from "./api/server";
import { ENDPOINTS } from "./api/endpoints";

export const login = async (credentials) => {
  try {
    const response = await server().post(ENDPOINTS.LOGIN, credentials);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const verifyAccount = async (credentials) => {
  try {
    const response = await server().post(ENDPOINTS.LOGIN, credentials);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const resetPassword = async (payload) => {
  try {
    const response = await server().post(ENDPOINTS.RESETPASSWORD, payload);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signUp = async (payload) => {
  try {
    const response = await server().post(ENDPOINTS.SIGNUP, payload);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Other authentication-related functions
