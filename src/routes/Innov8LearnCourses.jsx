import React from 'react'
import {useParams} from "react-router-dom";

function Innov8LearnCourses() {
    const {id} = useParams();
    return (
        <div>
        {console.log(id)}{id}</div>
    )
}

export default Innov8LearnCourses