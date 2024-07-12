import axios from "axios";

const token = localStorage.getItem("token");

const params = {
  headers: {
    Authorization: `Bearer ${token}`, // Include your API key in the Authorization header
    "Content-Type": "application/json", // Adjust the content type as needed
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_APP_API_URL + url,
      params
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postData = async (url, formData) => {
  try {
    const response = await fetch(import.meta.env.VITE_APP_API_URL + url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // Include your API key in the Authorization header
        "Content-Type": "application/json", // Adjust the content type as needed
      },

      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      //console.log(data)
      return data;
    } else {
      const errorData = await response.json();
      return errorData;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const editData = async (url, updatedData) => {
  const { res } = await axios.put(
    `${import.meta.env.VITE_APP_API_URL}${url}`,
    updatedData,
    params
  );
  return res;
};

export const deleteData = async (url) => {
  const { res } = await axios.delete(
    `${import.meta.env.VITE_APP_API_URL}${url}`,
    params
  );
  return res;
};

export const uploadImage = async (url, formData) => {
  const { res } = await axios.post(
    import.meta.env.VITE_APP_API_URL + url,
    formData
  );
  return res;
};

export const deleteImages = async (url, image) => {
  const { res } = await axios.delete(
    `${import.meta.env.VITE_APP_API_URL}${url}`,
    params,
    image
  );
  return res;
};