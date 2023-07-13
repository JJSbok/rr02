import {useEffect, useState} from "react";
import {getProduct} from "../../api/productAPI";

const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    images: []
}

const ReadComponent = ({pno, moveList, moveModify}) => {

    const [product, setProduct] = useState(initState)

    useEffect(() => {

        getProduct(pno).then(data => {
            setProduct(data)
        }).catch(e => {
            console.log(e)
            // alert("삭제 되었습니다.")
            moveList()
        })

    }, [pno])

    return (
        <div className="m-2 p-2">

            <div className="m-2 p-2 border-2">
                {product.pname}
            </div>
            <div className="m-2 p-2 border-2">
                {product.pdesc}
            </div>
            <div className="m-2 p-2 border-2">
                {product.price}
            </div>

            <div className="m-2 p-2 border-2">
                <ul className="list-none">
                    {product.images.map( (fname,idx) =>
                        <li key={idx}>
                            <img src={`http://localhost/${fname}`}></img>
                        </li>)}
                </ul>
            </div>
            <div>
                <button className="border-2 m-2 p-2 font-bold"
                        onClick={moveList}
                >LIST
                </button>
                <button className="border-2 m-2 p-2 font-bold"
                        onClick={() => moveModify(product.pno)}
                >MODIFY
                </button>
            </div>
        </div>
    );

}

export default ReadComponent;