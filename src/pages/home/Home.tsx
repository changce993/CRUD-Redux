import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../../components/nav/Nav';
import NewProduct from '../../components/newProduct/NewProduct';
import EditProduct from '../../components/editProduct/EditProduct';
import ProductCard from '../../components/productCard/ProductCard';
import { Row } from '../../components/ui/Grid';
import { getProductsAction } from '../../actions/productActions';
import { Iproduct, IinitialState } from '../../types';

const Home = () => {

    const [ createProduct, setCreateProduct ] = useState(false);
    const [ editProduct, setEditProduct ] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProducts = () => dispatch(getProductsAction());
        getProducts()
        // eslint-disable-next-line
    }, []);

    const products = useSelector((state:IinitialState) => state.products);
    const loading = useSelector<IinitialState>(state => state.loading);
    const error = useSelector<IinitialState>(state => state.error);
    console.log(products)

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
                    {products.map((product: Iproduct, index: number) => (
                        <ProductCard
                            product={product}
                            key={product.id}
                            setEditProduct={setEditProduct}
                        />
                    ))}
                </Row>
            </div>
        </>
    )
}

export default Home
