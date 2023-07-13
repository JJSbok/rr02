import {useEffect, useState} from "react";

import {getList} from "../../api/productAPI";
import ListPageComponent from "../common/ListPageComponent";


const initState = {
    dtoList: [],
    end: 0,
    start: 0,
    next: false,
    prev: false,
    pageNums: [],
    page: 0,
    size: 0,
    requestDTO: null
}


const ListComponent = ({queryObj, movePage, moveRead}) => {

    const [listData, setListData] = useState(initState)


    useEffect(() => {

        getList(queryObj).then(data => {
            console.log(data)
            setListData(data)
        })

    }, [queryObj])


    return (
        <div className="m-2 p-2 border-2 bg-blue-400">
            <div> ListComponent</div>

            <div>
                <ul className="flex flex-wrap container justify-center">
                    {listData.dtoList.map(dto =>
                        <li className="w-2/5 h-[300px] bg-white m-2 p-2 rounded-b-lg shadow-lg"
                            key={dto.bno}
                            onClick={() => moveRead(dto.pno)}
                        >
                            <div>
                                <div className="font-extrabold">{dto.pno}</div>
                                <div>
                                    <img src={`http://localhost/s_${dto.fname}`}></img>
                                </div>
                                <div className="text-center">{dto.pname} {dto.price}</div>
                                <div>{dto.reviewCnt} {dto.reviewAvg}</div>
                            </div>
                        </li>)}
                </ul>
            </div>

            <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>

        </div>
    );
}

export default ListComponent;