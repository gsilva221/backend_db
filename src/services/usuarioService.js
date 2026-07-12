import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api/usuarios";

export const usuarioService = {
  login: async (formData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default usuarioService;
