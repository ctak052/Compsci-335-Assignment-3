import { LoadingContainer, ProductText, ProductH4 } from "./styles"
import Button from "../../atoms/Button/Button"
const Product = (props) => {
    return <LoadingContainer>
        <img style={{width: "160px"}} src={`http://localhost:5000/api/GetItemPhoto/${props.product.id}`} alt="Product" />
        <ProductText>
            <h3>{props.product.name}</h3>
            <ProductH4>{props.product.price}</ProductH4>
            <ProductH4>{props.product.description}</ProductH4>
            <Button size="sm" text="Buy Now"></Button>
        </ProductText>

    </LoadingContainer>
}

export default Product