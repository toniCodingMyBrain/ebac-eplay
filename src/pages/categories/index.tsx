import { ProductList } from '../../components/ProductList'
import { Game } from '../../models/Game'

import resident from '../../assets/images/resident.png'
import fifa22 from '../../assets/images/fifa22.webp'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const Promocoes: Game[] = [
  {
    id: 1,
    gameName: 'Resident Evil 4',
    category: 'Survival Horror',
    description:
      'Resident Evil 4, conhecido como Biohazard 4 no Japão, jogo Survival Horror de Zumbis, Compre agora e ganhe um presente.',
    image: resident,
    system: 'Pc, Xbox e Playstation.',
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 2,
    gameName: 'Resident Evil 4',
    category: 'Survival Horror',
    description:
      'Resident Evil 4, conhecido como Biohazard 4 no Japão, jogo Survival Horror de Zumbis, Compre agora e ganhe um presente.',
    image: resident,
    system: 'Pc, Xbox e Playstation.',
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 3,
    gameName: 'Fifa 22',
    category: 'Esportes',
    description:
      'Fifa 22, o jogo de futebol mais conhecido do mundo, Compre agora e ganhe um presente.',
    image: fifa22,
    system: 'Pc, Xbox e Playstation.',
    infos: ['15%', 'R$ 250,00']
  },
  {
    id: 4,
    gameName: 'Fifa 22',
    category: 'Esportes',
    description:
      'Fifa 22, o jogo de futebol mais conhecido do mundo, Compre agora e ganhe um presente.',
    image: fifa22,
    system: 'Pc, Xbox e Playstation.',
    infos: ['12%', 'R$ 250,00']
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    gameName: 'Diablo',
    category: 'RPG',
    description: 'Diablo é um jogo de RPG, Compre agora e ganhe um presente.',
    image: diablo,
    system: 'Pc, Xbox e Playstation.',
    infos: ['17/05']
  },
  {
    id: 6,
    gameName: 'Zelda',
    category: 'Aventura',
    description:
      'Zelda é um jogo de Aventura, Compre agora e ganhe um presente.',
    image: zelda,
    system: 'Pc, Xbox e Playstation.',
    infos: ['20/05']
  },
  {
    id: 7,
    gameName: 'Star Wars',
    category: 'Aventura/Ação',
    description:
      'Star Wars é a franquia de jogos de aventura e ação da maior saga do espaço, Compre agora e ganhe um presente.',
    image: starWars,
    system: 'Pc, Xbox e Playstation.',
    infos: ['05/06']
  },
  {
    id: 8,
    gameName: 'Diablo',
    category: 'RPG',
    description: 'Diablo é um jogo de RPG, Compre agora e ganhe um presente.',
    image: diablo,
    system: 'Pc, Switch.',
    infos: ['10%', 'R$ 250,00']
  }
]

export const Categories = () => (
  <>
    <ProductList gameList={Promocoes} title="RPG" background="gray" />
    <ProductList gameList={emBreve} title="Ação" background="black" />
    <ProductList gameList={Promocoes} title="Aventura" background="gray" />
    <ProductList
      gameList={emBreve}
      title="Survival Horror"
      background="black"
    />
  </>
)
