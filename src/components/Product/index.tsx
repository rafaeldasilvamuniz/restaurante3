import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos, TextoButtonMassa } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  button: string
  id: number
}

const Product = ({ title, description, infos, image, id, button }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 90) {
      return descricao.slice(0, 88) + '...'
    }
    return descricao
  }
  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Descricao>{getDescricao(description)}</Descricao>
      <div>
        <TextoButtonMassa>{button}</TextoButtonMassa>
      </div>
    </Card>
  )
}

export default Product

/*
<div>
      <TextoButtonMassa>{button}</TextoButtonMassa>
    </div>
    */
