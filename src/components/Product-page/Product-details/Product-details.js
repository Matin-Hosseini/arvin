import Comments from '../Comments/Comments'
import Questions from '../Questions/Questions'
import './Prodcut-details.css'
import ProductFeatures from './Product-features/Product-features'
import ProductInDepthDetails from './Product-in-depth-details/Product-in-depth-details'
import ProductIntroduction from './Product-introduction/Product-introduction'

const ProductDetails = ()=> {
    return(
        <div className='container-fluid p-4 product-details'>
            <ProductIntroduction/>
            <ProductInDepthDetails/>
            <ProductFeatures/>
            <Comments/>
            <Questions/>
        </div>
    )
}

export default ProductDetails