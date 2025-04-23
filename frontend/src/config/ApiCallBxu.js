import axios from "axios";
import ApiCall from "./index";
export const BASE_URL_BUXPXTI = "https://student.buxpxti.uz/rest";
const getMyCommands = async () => {
  try {
    const response = await ApiCall("/api/v1/app/admin/hemis/token/last", "GET");

    if (response?.data) {
      return response.data.name;
    } else {
      alert("Failed to fetch commands."); // Use browser alert for React (Web)
      return null;
    }
  } catch (error) {
    alert("An unexpected error occurred.");
    console.error("Error fetching commands:", error); // Log the error for debugging
    return null;
  }
};

// Generic API call function
const ApiCallBuxpxti = async (
  endpoint,
  method = "GET",
  data = null,
  additionalHeaders = {}
) => {
  try {
    const token = await getMyCommands(); // Await token

    // Handle case where no token is retrieved
    if (!token) {
      alert("No token found, authorization failed.");
      return;
    }
    console.log("Token:", token); // Log the token for debugging

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Add Bearer token to header
    };
    console.log(`${BASE_URL_BUXPXTI}${endpoint}`);

    const config = {
      url: `${BASE_URL_BUXPXTI}${endpoint}`,
      method,
      headers,
    };

    // Handle different HTTP methods (POST, GET, etc.)
    if (["POST", "PUT", "PATCH", "DELETE"].includes(method.toUpperCase())) {
      config.data = data;
    } else if (method.toUpperCase() === "GET" && data) {
      config.params = data;
    }
   

    const response = await axios(config);
    console.log("API Response:", response.data); // Log the response for debugging
    
    return response;
  } catch (error) {
    // Handle error with better logging and user-friendly message
    console.error("API Error:", error); // Log error for debugging

    const message =
      error?.response?.data?.message || error?.message || "An error occurred";
    
    alert(`${message} Shu xatolik!!!`);

    return {
      status: error?.response?.status || 500,
      message,
    };
  }
};

export default ApiCallBuxpxti;
