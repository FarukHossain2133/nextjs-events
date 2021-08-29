import React from 'react';
import {useRouter} from 'next/router';


const SelectedclilentprojectPage = () => {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <h1>The project page for a specific  project for a specific client</h1>
        </div>
    )
}

export default SelectedclilentprojectPage
