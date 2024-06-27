import styled from 'styled-components'

import { IoLanguage } from "react-icons/io5";


export const NavElement = styled.nav`
  width:90%;
  display:flex;
  flex-direction : row;
  align-items:center;
  justify-content:space-between;
  margin:20px 10px 20px 10px;
`

export const NetFlixLogo = styled.img`
  width:200px;
  background:transperent;
`

export const LanguageIcon = styled(IoLanguage)`
  font-size:16px;
`