import { useState } from "react";
import uuid from "react-uuid";
import axios from "axios";

function useAxiosCard(baseUrl) {
  const [responses, setResponses] = useState([]);

  const addResponseData = async () => {
    const response = await axios.get(`${baseUrl}`);
    setResponses((data) => [
      ...data,
      { image: response.data.cards[0].image, id: uuid() },
    ]);
  };
  return [responses, addResponseData];
}
export default useAxiosCard;
