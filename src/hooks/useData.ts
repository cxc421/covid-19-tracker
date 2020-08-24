import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://covid19.mathdro.id/api";

type Info = {
  value: number;
  detail: string;
};

export interface Data {
  confirmed: Info;
  recovered: Info;
  deaths: Info;
  lastUpdate: string;
}

const useData = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      const data: Data = response.data;
      setData(data);
    };

    fetchData();
  }, []);

  return data;
};

export default useData;
