import { Products } from "./Products"
export const ProductCard=({product})=>(
    <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image"/>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="actions">
            <button className="buy-now">Buy Now</button>
            <button className="buy-later">Buy Later</button>
        </div>
    </div>
)