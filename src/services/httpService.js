import axios from "axios";
import { toast } from "react-toastify";

// Handling unexpected error globally
axios.interceptors.response.use(null, error => {
  const expecteError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expecteError) {
    console.log("Logging the error", error);
    toast.error("An unexpected error occurred.");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete
};
