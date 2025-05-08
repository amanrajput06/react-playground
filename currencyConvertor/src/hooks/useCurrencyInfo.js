import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
    const[data, setData]=useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json}`)
            .then((res) => response.json())
            .then((res) => setdata(res[currency]))
            console.log(data);
            }, [currency])
}