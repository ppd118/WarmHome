import React, { useEffect, useState, useRef } from 'react'
import SearchListView from '../SearchListView'
import SearchHeader from '../SearchHeader'
import LoadMore from '../../../components/LoadMore'
import api from "../../../api"

const SearchList = (props) => {
    const [searchRes, setSearchRes] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const sList = useRef()
    console.log("new SearchList")
    useEffect(() => {
        let isMount = true
        console.log("SearchList init" + props.keywords)
        sList && reqSearchData(false)
        return () => {
            isMount = false
        }

    }, [props.keywords])

    function loadMoreHandle() {
        reqSearchData(true)
    }

    function reqSearchData(isConcat = false) {
        api.getSearchResult({
            keywords: props.keywords
        }).then(res => {
            console.log(res)
            if (res.data.status) {
                sList && setHasMore(res.data.result.hasMore)
                //合并数据
                if (isConcat) {
                    console.log("合并数据")
                    sList && setSearchRes([...searchRes, ...res.data.result.data])
                    console.log("searchRec_length:" + searchRes.length)
                } else {
                    sList && setSearchRes(res.data.result.data)
                }

            }

        })
    }

    return (
        <div>

            {
                searchRes.length > 0 ?
                    <div>
                        <SearchListView searchRes={searchRes}></SearchListView>
                        {
                            hasMore ?
                                <LoadMore onLoadMore={loadMoreHandle} />
                                : <div>到底啦</div>
                        }
                    </div>

                    : <div>数据加载中... </div>
            }

        </div>

    )
}

export default SearchList
