import { Imagem, Titulo, Precos } from './styles'

//import bannerImg from '../../assets/images/apresentacao.png'
import Tag from '../Tag'
import Button from '../Button'
import { Pizzas } from '../../pages/Home'
import { useEffect, useState } from 'react'

import { formataPreco } from '../ProductsList'

const Banner = () => {
  const [massa, setMassa] = useState<Pizzas>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setMassa(res))
  }, [])

  if (!massa) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${massa.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{massa.name}</Titulo>
          <Precos>
            De <span>{formataPreco(massa.prices.old)}</span> <br />
            por apenas {formataPreco(massa.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${massa.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}
export default Banner
