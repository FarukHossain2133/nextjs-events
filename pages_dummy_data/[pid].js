import React, { Fragment } from 'react';
import path from 'path';
import fs from 'fs/promises';

const ProductDetail = (props) => {
    const { loadedProduct } = props;

    if(!loadedProduct) return <p>Loading...</p>
    // console.log(props);
    return (
        <Fragment>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </Fragment>
    )
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy_data.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    return data;
}

export async function getStaticProps(context) {

    const { params } = context;
    const productId = params.pid;

    const data = await getData();
    const product = data.products.find(el => el.id === productId);
    return {
        props: {
            loadedProduct: product
        }
    }
}


export async function getStaticPaths() {
    const data = await getData();
    const productsId = data.products.map(el =>({params: {pid: el.id}}));
    return {
        paths: productsId,
        fallback: true
    }
}

export default ProductDetail
