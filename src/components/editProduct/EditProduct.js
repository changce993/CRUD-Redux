import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../../pages/home/StylesHome';
import { Subtitle, Text } from '../ui/Text';
import { Layout, Input, Button, Label } from '../ui/Form';
import { editProductAction } from '../../actions/productActions';

const EditProduct = ({ setEditProduct }) => {

    const dispatch = useDispatch();
    const editProduct = product => dispatch(editProductAction(product));
    const { product: productSelector } = useSelector(state => state.products);
    const [ product, setProduct ] = useState(productSelector);
    const { name, price } = product;
    const handleProduct = e => setProduct({
        ...product,
        [e.target.name]: e.target.value
    });
    
    useEffect(() => {
        setProduct(productSelector);
    }, [productSelector]); 

    const handleSubmit = e => {
        e.preventDefault();
        editProduct(product);
        window.location.href = '/';
    }

    return (
        <Layout>
            <Form onSubmit={handleSubmit}>
                <Subtitle p='2rem'>Editar proucto</Subtitle>
                <Input>
                    <Label>Nombre del producto</Label>
                    <input
                        autoFocus
                        name='name'
                        type='text'
                        placeholder='Silla gamer'
                        value={name}
                        onChange={handleProduct}
                    />
                </Input>
    
                <Input>
                    <Label>Precio del producto</Label>
                    <input
                        name='price'
                        type='number'
                        placeholder='399.99'
                        step='any'
                        value={price}
                        onChange={handleProduct}
                    />
                </Input>
    
                <Button type='submit'>Guardar cambios</Button>
    
                <Text
                    textColor={props => props.theme.colors.info}
                    hoverColor={props => props.theme.colors.secondary100}
                    cursor='pointer'
                    onClick={() => setEditProduct(false)}
                >
                    Cancelar
                </Text>
            </Form>
        </Layout>
    )
}

export default EditProduct
