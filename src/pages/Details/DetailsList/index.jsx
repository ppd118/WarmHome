import React, { useEffect, useState } from "react";
import api from "../../../api";
import DetailsView from "../DetailsView";

const DetailsList = (props) => {
    const [details, setDetails] = useState({})
    useEffect(() => {
        api.getDetails({
            id: props.id
        }).then(res => {
            if (res.status === 200) {
                setDetails(res.data)
            }
        })
    }, [])

    return (
        <div>
            {
                details.imgs ?
                    <DetailsView data={details} id={props.id} /> :
                    <div>loading...</div>
            }
        </div>
    )
}

export default DetailsList