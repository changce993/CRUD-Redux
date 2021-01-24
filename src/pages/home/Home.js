import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../../components/nav/Nav';
import NewProduct from '../../components/newProduct/NewProduct';
import EditProduct from '../../components/editProduct/EditProduct';
import ProductCard from '../../components/productCard/ProductCard';
import { Row } from '../../components/ui/Grid';
import { getProductsAction } from '../../actions/productActions';

const Home = () => {

    const [ createProduct, setCreateProduct ] = useState(false);
    const [ editProduct, setEditProduct ] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProducts = () => dispatch(getProductsAction());
        getProducts()
        // eslint-disable-next-line
    }, []);

    const { products, error, loading } = useSelector(state => state.products);

    return (
        <>
            <Nav setCreateProduct={setCreateProduct} createProduct={createProduct}/>
            {createProduct && <NewProduct setCreateProduct={setCreateProduct}/>}
            {editProduct && <EditProduct setEditProduct={setEditProduct}/>}

            <div className='container'>
                {error && <p>Hubo un error</p>}
                {loading && (<p>Cargando</p>)}
                {products.length <= 0 && <p>No hay productos</p>}

                <Row margin='2rem 0'>
                    {products.map((product, index) => (
                        <ProductCard
                            product={product}
                            key={index}
                            setEditProduct={setEditProduct}
                        />
                    ))}
                </Row>
            </div>
        </>
    )
}

export default Home
