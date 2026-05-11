import { useQuery } from "@tanstack/react-query";

const API_URL = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/honda/modelyear/2015?format=json";


/**
 * fetch 
 * axios
 * ky
 * 
 * /////
 */


const getCarsPromiseFn = async (signal: AbortSignal) => {
    try {
        const response = await fetch(API_URL, {
            signal
        });


        if(!response.ok) {
            throw new Error("Failed to fetch cars");
        }


        const data = await response.json();

        return data.Results;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

 
export const useGetCars = () => {
    const {data, isLoading, error,  } = useQuery({
        queryKey: ["cars"],
        queryFn: ({ signal }) => getCarsPromiseFn(signal),
        enabled: true,
        // retry: 1
    })


    return {data, isLoading, error};

}




/**
 * 
 * 
 * 
 * {
 * cars: 
 * /// 
 * ////
 * 
 * }
 */

// redux

// useEffect(() => {
// - fetch cars
// - set cars to state
// },[])