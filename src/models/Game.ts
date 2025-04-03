// Modelo de games que intermediará as informações passadas aos componentes de Product Lists
export class Game {
  id: number
  gameName: string
  category: string
  description: string
  image: string
  infos: string[]
  system: string

  constructor(
    id: number,
    gameName: string,
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string
  ) {
    this.id = id
    this.gameName = gameName
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
  }
}
