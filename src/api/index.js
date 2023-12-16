import axios from "axios";

// ISO - Your Country Code

const url_total = "https://covid-api.com/api/reports/total";
const url = "https://covid-api.com/api/reports";
const countriesUrl = "https://covid-api.com/api/regions";

// Fetch Total Stats of Country or Global
export const fetchData = async (iso) => {
  let changableUrl = url;

  try {
    if (iso) {
      changableUrl = `${url}/total?iso=${iso}`;
      let {
        data: { data },
      } = await axios.get(changableUrl);
      return data;
    } else {
      let {
        data: { data },
      } = await axios.get(url_total);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// Fetch Country or Global Data in Chart
export const fetchDailyData = async (iso) => {
  try {
    if (iso) {
      const {
        data: { data },
      } = await axios.get(`${url}?iso=${iso}`);
      return data.map(
        ({
          active: positive,
          recovered,
          deaths: death,
          last_update: date,
        }) => ({
          confirmed: positive,
          recovered,
          deaths: death,
          date,
        })
      );
    } else {
      const {
        data: { data },
      } = await axios.get(url);
      return data.map(
        ({
          active: positive,
          recovered,
          deaths: death,
          last_update: date,
        }) => ({
          confirmed: positive,
          recovered,
          deaths: death,
          date,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
};

// Fetch Countries List
export const fetchCountries = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(countriesUrl);
    return data.map((country) => ({ name: country.name, iso: country.iso }));
  } catch (error) {
    console.log(error);
  }
};
