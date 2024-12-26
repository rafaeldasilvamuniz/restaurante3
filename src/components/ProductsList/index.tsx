//import Massa from '../../models/Massa'
import { Pizzas } from '../../pages/Home'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'white' | 'black'
  massas: Pizzas[]
  id?: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ background, title, massas, id }: Props) => {
  const getGameTags = (massa: Pizzas) => {
    const tags = []

    if (massa.release_date) {
      tags.push(massa.release_date)
    }

    if (massa.prices.discount) {
      tags.push(`${massa.prices.discount}%`)
    }

    if (massa.prices.current) {
      tags.push(formataPreco(massa.prices.current))
    }

    return tags
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {massas.map((massa) => (
            <li key={massa.id}>
              <Product
                id={massa.id}
                description={massa.description}
                image={massa.media.thumbnail}
                infos={getGameTags(massa)}
                title={massa.name}
                button={massa.name}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
