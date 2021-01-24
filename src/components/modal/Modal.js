import { Layout, Modal as ModalUI, Message, Confirm, Cancel, Buttons } from '../ui/Modal';

const Modal = ({ icon, message, confirm, setShowModal }) => {

    const Icon = icon;

    const confirmHandler = () => {
        confirm();
        setShowModal(null);
    };

    const cancelHandler = () => setShowModal(null);

    return (
        <Layout>
            <ModalUI>
                {icon && <Icon className='icon'/>}
                <Message>{message}</Message>
                <Buttons>
                    <Confirm onClick={confirmHandler}>Confirmar</Confirm>
                    <Cancel onClick={cancelHandler}>Cancelar</Cancel>
                </Buttons>
            </ModalUI>
        </Layout>
    )
};

export default Modal;
