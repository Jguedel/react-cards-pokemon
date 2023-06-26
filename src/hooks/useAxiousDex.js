import { useState } from "react";
import uuid from "react-uuid";
import axios from "axios";

function useAxiosDex(name, baseUrl) {
  const [responses, setResponses] = useState([]);

  const addResponseData = async (restOfUrl = "") => {
    const response = await axios.get(`${baseUrl}${restOfUrl}/`);
    setResponses((data) => [
      ...data,
      {
        id: uuid(),
        front: response.data.sprites.front_default,
        back: response.data.sprites.back_default,
        name: response.data.name,
        stats: response.data.stats.map((stat) => ({
          value: stat.base_stat,
          name: stat.stat.name,
        })),
      },
    ]);
  };
  return [responses, addResponseData];
}
export default useAxiosDex;
