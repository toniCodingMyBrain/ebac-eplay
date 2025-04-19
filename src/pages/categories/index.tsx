import { useEffect, useState } from 'react'
import { ProductList } from '../../components/ProductList'

import { Game } from '../Home'

export const Categories = () => {
  const [gamesAction, setGamesAction] = useState<Game[]>([])
  const [gamesSports, setGamesSports] = useState<Game[]>([])
  const [gamesSimulation, setGamesSimulation] = useState<Game[]>([])
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])
  const [gamesFight, setGamesFight] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAction(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesSports(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulation(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRpg(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesFight(res))
  }, [])

  return (
    <>
      <ProductList gameList={gamesAction} title="Ação" background="gray" />
      <ProductList gameList={gamesSports} title="Esportes" background="black" />
      <ProductList
        gameList={gamesSimulation}
        title="Simulação"
        background="gray"
      />
      <ProductList gameList={gamesRpg} title="RPG" background="black" />
      <ProductList gameList={gamesFight} title="Luta" background="gray" />
    </>
  )
}
