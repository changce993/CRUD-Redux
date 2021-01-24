import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../../pages/home/StylesHome';
import { Subtitle, Text } from '../ui/Text';
import { Layout, Input, Button, Label } from '../ui/Form';
import { Notification } from '../ui/Notification';
import { newProductAction } from '../../actions/productActions';
import { showAlertAction, hiddeAlertAction } from '../../actions/alertActions';

const NewProduct = ({ setCreateProduct }) => {

    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState();
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.products);
    const { alert } = useSelector(state => state.alerts);
    const newProduct = product => dispatch(newProductAction(product));
    const showAlert = alert => dispatch(showAlertAction(alert));
    const hiddeAlert = () => dispatch(hiddeAlertAction());

    const handleSubmit = e => {
        e.preventDefault();

        if(name.trim() === '' || price <= 0){
            showAlert({
                msg:'Todos los campos son obligatorios',
                type:'caution'
            });
            return;
        }

        hiddeAlert();

        newProduct({
            name,
            price:Number(price).toFixed(2),
        });
    }

    return (
        <Layout>
            <Form onSubmit={handleSubmit}>
                <Subtitle p='2rem'>Crear nuevo proucto</Subtitle>

                {alert && <p className={alert.type}>{alert.msg}</p>}

                <Input>
                    <Label>Nombre del producto</Label>
                    <input
                        autoFocus
                        name='name'
                        type='text'
                        placeholder='Silla gamer'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Input>
    
                <Input>
                    <Label>Precio del producto</Label>
                    <input
                        name='price'
                        type='number'
                        step='any'
                        placeholder='399.99'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </Input>
    
                <Button type='submit'>Crear producto</Button>
    
                <Text
                    textColor={props => props.theme.colors.info}
                    hoverColor={props => props.theme.colors.secondary100}
                    cursor='pointer'
                    onClick={() => setCreateProduct(false)}
                >
                    Cancelar
                </Text>
            </Form>

            {error && <Notification children='Error'/>}
            {error === false && <Notification success children='Exito'/>}
        </Layout>
    )
}

export default NewProduct
