import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.fundo : cores.branca)};
  color: ${cores.salmao};
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.fundo : 'transparent'};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;

  width: 304px;
  height: 24px;
  gap: 0px;
  opacity: 0px;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`

/*export const ButtonMassa = styled.button`
width: 304px;
height: 24px;
gap: 0px;
opacity: 0px;

background-color: ${cores.salmao};`*/

/*export const TextoButtonMassa = styled.h3`
width: 136px;
height: 16px;
top: 4px;
left: 83.24px;
gap: 0px;
opacity: 0px;

font-family: Roboto;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;

color: ${cores.preta};
`
*/
