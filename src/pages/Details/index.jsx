import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailsList from "./DetailsList";

const Details = () => {
    const params = useParams()


    return (
        <DetailsList id={params.id} />
    )
}

export default Details