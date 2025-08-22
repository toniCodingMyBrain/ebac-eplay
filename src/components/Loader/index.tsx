import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners'
import * as S from './styles'
import { colors } from '../../styles'

export const Loader = () => {
  return (
    <S.LoaderContainer>
      <ClimbingBoxLoader color={colors.white} />
    </S.LoaderContainer>
  )
}
