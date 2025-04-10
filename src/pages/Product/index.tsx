import { useParams } from 'react-router-dom'
import { Hero } from '../../components/Hero'

export const Product = () => {
  /*
   * Este useParams retorna um objeto que pertence à essa rota
   * const teste = useParams()
   * console.log(teste)
   */

  return (
    <>
      <Hero />
    </>
  )
}
