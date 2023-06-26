import ProductCard from '../../components/product-card/product-card'
import SHOP_DATA from '../../shop-data.json'
import './shop.scss'

const Shop = () => {
    return (
        <div className='products-container'>
            {SHOP_DATA.map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
    )
}


export default Shop