import { Pizzas } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import { formataPreco } from '../ProductsList'

import { Banner, Infos } from './styles'
//import { Dispatch } from 'react'

import { add, open } from '../../store/reducers/cart'
import { Dispatch } from '@reduxjs/toolkit'

type Props = {
  massa: Pizzas
}

const Hero = ({ massa }: Props) => {
  const dispatch = Dispatch()

  const addToCart = () => {
    dispatch(add(massa))
    dispatch(open())
  }

return (
  <Banner style={{ backgroundImage: `url(${massa.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{massa.details.category}</Tag>
        <Tag>{massa.details.system}</Tag>
      </div>

      <Infos>
        <h2>{massa.name}</h2>
        <p>
          {massa.prices.discount && (
            <span>De {formataPreco(massa.prices.old)}</span>
          )}
          {massa.prices.current && (
            <>Por {formataPreco(massa.prices.current)}</>
          )}
        </p>
        {massa.prices.current && (
          <Button
            type="button"
            title="Clique aqui para adicionar a pizza no carrinho"
            variant="primary"
            onClick={addToCart}
          >
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)
}
export default Hero
