import axios from "axios";

export const customAxios = async (
  url: string,
  method: string = "GET",
  payload?: object
) => {
  try {
    const response = await axios.request({
      data: payload,
      method,
      url,
    });

    return response.data;
  } catch (error) {
    return error;
  }
};
