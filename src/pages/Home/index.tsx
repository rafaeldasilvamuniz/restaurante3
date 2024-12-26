import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useGetFeaturedGameQuery, useGetGameQuery } '../../services/api'
//import Massa from '../../models/Massa'

//import pizza from '../../assets/images/pizza.png'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Pizzas = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetFeaturedGameQuery()
  const { data: soonGames } = useGetGameQuery()

  if (onSaleGames && soonGames){
     return(
      <>
        <Banner />
        <ProductsList
          massas={onSaleGames}
          title="Espinafre"
          background="white"
          id="1"
        />
        <ProductsList
          massas={soonGames}
          title="Frango"
          background="black"
          id="2"
        />
      </>
     )
  }

  return <h4>Carregando...</h4>
}

export default Home

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
    title: 'Azeitona Mista',
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
    title: 'Aipim com Salada',
    infos: ['37,88'],
    image: pizza,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 8,
    description:
      'A clássica Dez Queijos: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Dez Queijos',
    infos: ['25,50'],
    image: pizza,
    button: 'Adicionar ao carrinho'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList massas={promocoes} title="Promoções" background="white" />
    <ProductsList massas={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
*/
