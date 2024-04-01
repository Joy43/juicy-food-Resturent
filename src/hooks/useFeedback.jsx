import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
const AxiosIssuFeedbck = axios.create({
  baseURL: "https://bistro-boss-server-with-cart-part-4.vercel.app",
});

const useFeedback = () => {
  return AxiosIssuFeedbck;
};

export default useFeedback;
