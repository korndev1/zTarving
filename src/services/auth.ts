import { BASE_URL } from "../../appsetting";
import axios from "axios";
import { checkEmail, register } from "../type";

const API = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export const authService = {
    registerUser : async (body:register) => {
      try {
        const response = await API.post('/auth/register', body);
        return response
      } catch (error: any) {
        throw error.response?.data || { message: 'Something went wrong' };
      }
    },
    checkEmail :async (body:checkEmail) => {
      try {
        const response = await API.post('/auth/check-email', body);
        return response
      } catch (error: any) {
        throw error.response?.data || { message: 'Something went wrong' };
      }
  }


  };
  