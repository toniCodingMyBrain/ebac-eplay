import { ProductList } from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

export const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRPGGamesQuery()

  return (
    <>
      <ProductList
        gameList={actionGames}
        id="action"
        title="Ação"
        background="gray"
        isLoading={isLoadingAction}
      />
      <ProductList
        gameList={sportsGames}
        id="sports"
        title="Esportes"
        background="black"
        isLoading={isLoadingSports}
      />
      <ProductList
        gameList={simulationGames}
        id="simulation"
        title="Simulação"
        background="gray"
        isLoading={isLoadingSimulation}
      />
      <ProductList
        gameList={rpgGames}
        id="rpg"
        title="RPG"
        background="black"
        isLoading={isLoadingFight}
      />
      <ProductList
        gameList={fightGames}
        id="fight"
        title="Luta"
        background="gray"
        isLoading={isLoadingRPG}
      />
    </>
  )
}
