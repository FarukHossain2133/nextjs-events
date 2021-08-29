// import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link';
// import dummyData from '../data/dummy_data.json';
import fs from 'fs/promises';
import path from 'path';

export default function Home(props) {
  const { products } = props;

  return (
    <ul>
      {products.map(product => (
       <li key={product.id}><Link href={product.id}>{product.title}</Link> </li>
      ))}
    </ul>
  )
}


export async function getStaticProps(context) {
  console.log("RE-Generating...");
  const pathFile = path.join(process.cwd(), 'data', 'dummy_data.json');

  const jsonData = await fs.readFile(pathFile);
  const data = JSON.parse(jsonData);

if(!data) return {redirect: { destination: "/no-data"}};

  if(data.products.length === 0){
    return {notFound: true}
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  }
}