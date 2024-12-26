import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart, Imagem } from './styles'

import logo from '../../assets/images/logo.png'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

/*const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <Imagem>
          <img src={logo} alt="EFOOD" />
        </Imagem>
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/Restaurantes">Restaurantes</Link>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s) no carrinho
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)*/

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
    <div>
      <Link to="/">
        <Imagem>
          <img src={logo} alt="EFOOD" />
        </Imagem>
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/Restaurantes">Restaurantes</Link>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart onClick={openCart}>
       {items.length} - produto(s) no carrinho
      <img src={carrinho} alt="Carrinho" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
