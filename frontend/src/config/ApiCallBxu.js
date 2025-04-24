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
    let obj={
      endpoint:endpoint,
      method:method,
      data:data
    }
    const response = await ApiCall("/api/v1/hemis", "POST", obj);
    console.log(response)
    return response;

  } catch (error) {
    console.error("API Error:", error);
    const message = error?.response?.data?.message || error?.message || "An error occurred";
    alert(`${message} Shu xatolik!!!`);
    return {
      status: error?.response?.status || 500,
      message,
    };
  }
};


export default ApiCallBuxpxti;
