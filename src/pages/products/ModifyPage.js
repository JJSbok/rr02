import useQueryObj from "../../hooks/useQueryObj";
import {useParams} from "react-router-dom";
import ModifyComponent from "../../components/products/ModifyComponent";

const ModifyPage = () => {

    const {queryObj, setSearch,moveRead, moveList} = useQueryObj()
    const {pno} = useParams()

    return(
        <div>
            <div>Modify Page {pno}</div>
            <ModifyComponent
                pno={pno} moveList={moveList} moveRead={moveRead}>
            </ModifyComponent>
        </div>
    );

}

export default ModifyPage;