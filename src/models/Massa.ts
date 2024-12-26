class Massa {
  id: number
  description: string
  image: string
  infos: string[]
  title: string
  button: string
  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    title: string,
    button: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.button = button
  }
}

export default Massa
