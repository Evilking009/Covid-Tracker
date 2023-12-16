import { FormControl, NativeSelect } from "@mui/material";
import styles from './CountryPicker.module.css';
import { useEffect, useState } from "react";
import { fetchCountries } from "../../api";


const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map(({name, iso}, i) => <option key={i} value={iso}>{name}</option>)}
            </NativeSelect>
        </FormControl>
    );
}
 
export default CountryPicker;