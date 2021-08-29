import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const LastSales = (props) => {
    const [sales, setSales] = useState(props.sales);
    // const [loading, setloading] = useState(false);

    const { data, error } = useSWR("https://nextjs-course-b2897-default-rtdb.firebaseio.com/sales.json");


    useEffect(() => {
        if (data) {
            const transformSales = [];
            for (const key in data) {

                transformSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume
                })

            }
            setSales(transformSales);
            // setloading(false);
        }
    }, [data])


    // useEffect(() => {
    //     setloading(true);
    //     fetch("https://nextjs-course-b2897-default-rtdb.firebaseio.com/sales.json")
    //         .then(response => response.json())
    //         .then(data => {
    //             const transformSales = [];
    //             for (const key in data) {

    //                 transformSales.push({
    //                     id: key,
    //                     username: data[key].username,
    //                     volume: data[key].volume
    //                 })

    //             }
    //             setSales(transformSales);
    //             setloading(false);
    //         })

    // }, []);


    // if (error) return <p>Failed to load</p>
    if (!data && !sales) return <p>Loading...</p>

    return (
        <ul>
            {sales.map(el => (
                <li key={el.id}>{el.username} - {el.volume}</li>
            ))}
        </ul>
    )
}


export async function getStaticProps() {

    const response = await fetch("https://nextjs-course-b2897-default-rtdb.firebaseio.com/sales.json")
    const data = await response.json();

    const transformSales = [];
    for (const key in data) {
        transformSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume
        })

    }

    return {
        props: {
            sales: transformSales
        },
        // revalidate: 10
    }
}

export default LastSales;
