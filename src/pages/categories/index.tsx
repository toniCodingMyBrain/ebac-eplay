import { ProductList } from '../../components/ProductList'

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
