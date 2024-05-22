import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "TzgAfXB-cV1aSwGxJJg2RXUeUVh9VuNO_22Yb2vWPzo";

const fetchData = async (searchQuery, page) => {
  const data = await axios.get("/search/photos", {
    params: {
      client_id: API_KEY,
      query: searchQuery,
      per_page: 12,
      page,
    },
  });
  return data;
};
export default fetchData;
