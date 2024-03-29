import React from 'react'
import Item from "./Item"

const SearchListView = (props) => {
    return (
        <div>
            {
                props.searchRes.map((item, index) => {
                    return (
                        <Item data={item} key={item.id}></Item>
                    )
                })
            }
        </div>
    )
}

export default SearchListView
