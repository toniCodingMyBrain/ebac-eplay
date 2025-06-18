import { useEffect, useState } from 'react'
import { ProductList } from '../../components/ProductList'

import { Game } from '../Home'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

export const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()

  /* const [gamesAction, setGamesAction] = useState<Game[]>([])
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
  }, []) */

  if (actionGames && sportsGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductList
          gameList={actionGames}
          id="action"
          title="Ação"
          background="gray"
        />
        <ProductList
          gameList={sportsGames}
          id="sports"
          title="Esportes"
          background="black"
        />
        <ProductList
          gameList={simulationGames}
          id="simulation"
          title="Simulação"
          background="gray"
        />
        <ProductList
          gameList={rpgGames}
          id="rpg"
          title="RPG"
          background="black"
        />
        <ProductList
          gameList={fightGames}
          id="fight"
          title="Luta"
          background="gray"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
