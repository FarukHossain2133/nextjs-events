import React from 'react'
import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
    const router = useRouter();
    console.log(router.query);

    const loadProjectHandler = (e) => {
        router.push({
            pathname: '/clients/[id]/[clientPorjectId]',
            query: {
                id: "faruk",
                clientPorjectId: "proejctA"
            }
        })
    }
    return (
        <div>
            <h1>the proejcts of a given client</h1>
            <button onClick={loadProjectHandler}>Load project A</button>
        </div>
    )
}

export default ClientProjectsPage
