import { useParams } from "react-router-dom";


function dynamic(){
    const {id} = useParams();
    return(
        <div>
            <h1>This is dynamic page</h1>
            <h2>Product Collection id is {id}</h2>
        </div>
    )
}
export default dynamic;