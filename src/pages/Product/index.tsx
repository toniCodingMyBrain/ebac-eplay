import { useParams } from 'react-router-dom'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Gallery } from '../../components/Gallery'

import residentEvil from '../../assets/images/resident.png'
import { useGetGameQuery } from '../../services/api'

export const Product = () => {
  /*
   * Este useParams retorna um objeto que pertence à essa rota
   * const teste = useParams()
   * console.log(teste)
   */

  const { id } = useParams()

  const { data: game } = useGetGameQuery(id!)

  if (!game) return <h4>Carregando...</h4>

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <strong>Plataforma</strong>: {game.details.system}.
          <br />
          <strong>Desenvolvedor</strong>: {game.details.developer}.
          <br />
          <strong>Editora</strong>: {game.details.publisher}.
          <br />
          <strong>Idiomas</strong>: O jogo oferece suporte a diversos idiomas,
          incluindo {game.details.languages.join(', ')}.
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}
