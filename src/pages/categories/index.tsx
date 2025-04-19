import { ProductList } from '../../components/ProductList'

import resident from '../../assets/images/resident.png'
import fifa22 from '../../assets/images/fifa22.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import { Game } from '../Home'

const Promocoes: Game[] = []

const emBreve: Game[] = []

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
