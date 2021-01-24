import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Info, Action } from './StylesProductCard';
import { Text } from '../ui/Text';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg'
import { ReactComponent as Cross } from '../../assets/icons/cross.svg'
import { deleteProductAction, getProductAction } from '../../actions/productActions';
import Modal from '../../components/modal/Modal';
import { ReactComponent as Exclamation } from '../../assets/icons/exclamation.svg';

const ProductCard = ({ product, setEditProduct }) => {

    const {name, price, id} = product;
    const [ showModal, setShowModal ] = useState(null);
    const dispatch = useDispatch();
    const deleteProduct = () => dispatch(deleteProductAction(id));
    
    const editProduct = () => {
        setEditProduct(true)
        dispatch(getProductAction(product));
    };

    return (
        <>
            {showModal && (
                <Modal
                    icon={Exclamation}
                    setShowModal={setShowModal}
                    confirm={deleteProduct}
                    message='¿Quieres eliminar el producto?'
                />
            )}

            <Col>
                <Info>
                    <Text>{name}</Text>
                    <Text>{price}</Text>
                </Info>

                <Action>
                    <Edit className='icon' onClick={editProduct}/>
                    <Cross className='icon' onClick={() => setShowModal(true)}/>
                </Action>
            </Col>
        </>
    )
}

export default ProductCard
