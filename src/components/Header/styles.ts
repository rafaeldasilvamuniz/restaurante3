import styled from 'styled-components'
import { cores } from '../../styles'

/*width: 1366px;
height: 298px;
top: 1326px;
left: -1px;
gap: 0px;
opacity: 0px;*/

export const HeaderBar = styled.header`
  background-color: ${cores.fundo};
  width: 1366px;
  height: 298px;
  top: 1326px;
  padding: 26px;
  border-radius: 30px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: -1px;
  gap: 0px;
  opacity: 0px;

  a {
    color: ${cores.salmao};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Imagem = styled.div`
  display: flex;
  justify-content: center;

  img {
    position: absolute;
    margin-left: 70%;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
