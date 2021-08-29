import React from 'react'
import Link from 'next/link';

const ClientsPage = () => {

    const clientsArray = [
        {id: "faruk", name: "Faruk"},
        {id: "hossain", name: "Hossain"}
    ]
    return (
        <div>
            <h1>The clients page</h1>
            <ul>
                {clientsArray.map(el => (
                <li key={el.id}><Link href={{
                    pathname: `/clients/[id]`,
                    query: {
                        id: el.id
                    }

                }}>{el.name}</Link></li>
                ))}
                {/* <li><Link href="/clients/hossain">Hossain</Link></li> */}
            </ul>
        </div>
    )
}

export default ClientsPage
