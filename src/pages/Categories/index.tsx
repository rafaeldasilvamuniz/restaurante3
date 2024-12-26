import ProductsList from '../../components/ProductsList'
//import Massa from '../../models/Massa'
import pizza from '../../assets/images/pizza.png'
import { Pizzas } from '../Home'
import { useEffect, useState } from 'react'
import { cores } from '../../styles'
import { useGetFeaturedGameQuery, useGetGameQuery } '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetFeaturedGameQuery()
  const { data: fightGames } = useGetGameQuery()

  if (actionGames && fightGames) {
    return (
      <>
      <ProductsList
          massas={actionGames}
          title="Espinafre"
          background="white"
          id="1"
        />
        <ProductsList
          massas={fightGames}
          title="Frango"
          background="black"
          id="2"
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categories


/*const Categories = () => {
  const [massasAcao, setMassasAcao] = useState<Pizzas[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/acao')
      .then((res) => res.json())
      .then((res) => setMassasAcao(res))
  }, [])

  return (
    <>
      <ProductsList background="white" title="Ação" massas={massasAcao} />
    </>
  )
}

export default Categories*/

/*const promocoes: Massa[] = [
  {
    id: 1,
    description:
      'A clássica Real com Espinafre: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Real com Espinafre',
    infos: ['10%', 'R$ 65,00'],
    image: pizza,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 2,
    description:
      'A clássica Bauru: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Bauru',
    infos: ['5%', 'R$ 60,00'],
    image: pizza,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 3,
    description:
      'A clássica Azeitona Mista: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Azeitona',
    infos: ['10%', 'R$ 80,00'],
    image: pizza,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 4,
    description:
      'A clássica Aipim com tomate seco: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Aipim com Tomate Seco',
    infos: ['10%', 'R$ 35,00'],
    image: pizza,
    button: 'Adicionar ao carrinho'
  }
]

const emBreve: Massa[] = [
  {
    id: 5,
    description:
      'A clássica Frango com Catupiry: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Frango com Catupiry',
    infos: ['R$ 48,50'],
    image: pizza,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Marguerita',
    infos: ['R$ 45,00'],
    image: pizza,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 7,
    description:
      'A clássica Pizza de Aipim com salada: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Aipim com Salada Mista',
    infos: ['37,88'],
    image: pizza,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 8,
    description:
      'A clássica Quatro Dez: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Dez Queijos',
    infos: ['25,50'],
    image: pizza,
    button: 'Adicionar ao carrinho'
  }
]

const Categories = () => (
  <>
    <ProductsList massas={promocoes} title="RPG" background="white" />
    <ProductsList massas={emBreve} title="Ação" background="black" />
    <ProductsList massas={promocoes} title="Aventura" background="white" />
    <ProductsList massas={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
*/
