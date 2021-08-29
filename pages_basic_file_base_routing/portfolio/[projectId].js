import React from 'react'
import {useRouter} from "next/router";

const SingleProject = () => {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);
    return (
        <div>
            Single porject
        </div>
    )
}

export default SingleProject
