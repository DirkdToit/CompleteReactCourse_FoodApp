import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchNewTerm) => {
        console.log('Searched API');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchNewTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage("");
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    }   

    //Never call an api in here 
    //Api gets called > state gets updated > Rerender component > api gets called => Infinite loop
    //That is why useEffect is used, and not just "searchApi('Pasta')"

    useEffect(() => {
        searchApi('Pasta');
    }, []
    );

    return [searchApi, results, errorMessage];

};
 
