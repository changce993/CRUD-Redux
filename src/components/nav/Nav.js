import { Nav as Navbar, AddProduct } from './StylesNav';

const Nav = ({ createProduct, setCreateProduct }) => {
    return (
        <Navbar> 
            <AddProduct onClick={() => setCreateProduct(!createProduct)}>
                Agregar producto
            </AddProduct>
        </Navbar>
    )
}

export default Nav
