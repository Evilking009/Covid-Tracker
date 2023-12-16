import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import { useEffect, useState } from "react";
import coronaImage from "./images/logo.webp";

const App = () => {
  const [data, setData] = useState();
  const [country_iso, set_country_iso] = useState("");

  // Run & fetch Data for first time
  useEffect(() => {
    const getData = async () => {
      const apiData = await fetchData();
      setData(apiData);
    };
    getData();
  }, []);

  const handleCountryChange = async (iso) => {
    set_country_iso(iso);
    const fetchedData = await fetchData(country_iso);
    setData(fetchedData);
  };

  return (
    <div className={styles.container}>
      <img src={coronaImage} className={styles.image} alt="COVID-19" />
      {data && <Cards data={data} />}
      <CountryPicker handleCountryChange={handleCountryChange}></CountryPicker>
      {data && <Chart data={data} country_iso={country_iso}></Chart>}
    </div>
  );
};

export default App;
