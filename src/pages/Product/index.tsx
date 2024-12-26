import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import Gallery from '../../components/Gallery'

//import residentEvil from '../../assets/images/resident.png'
import { useEffect, useState } from 'react'
import { Pizzas } from '../Home'

const Product = () => {
  const { id } = useParams()

  const [massa, setMassa] = useState<Pizzas>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMassa(res))
  }, [id])

  if (!massa) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero massa={massa} />
      <Section title="Pizza Marguerita" background="black">
        <p>{massa.description}</p>
      </Section>
      <Section title="Mais detalhes" background="black">
        <p>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
          {massa.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={massa.name}
        defaultCover={massa.media.cover}
        items={massa.media.gallery}
      />
    </>
  )
}

export default Product
