import useQueryObj from "../../hooks/useQueryObj";
import ListComponent from "../../components/products/ListComponent";


const ListPage = () => {

    const movePage = (num) => {

        console.log("NUM ------------" + num)
        queryObj.page = num
        setSearch({...queryObj})
    }

    const {queryObj, setSearch, moveRead, moveList} = useQueryObj()

    return (
        <div className="text-3xl">
            <ListComponent
                queryObj={queryObj}
                movePage = {movePage}
                moveRead = {moveRead}
            ></ListComponent>
        </div>
    );
}

 
export default ListPage;