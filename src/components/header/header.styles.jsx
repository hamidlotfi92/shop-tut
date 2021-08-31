import styled,{css} from 'styled-components';

import { Link } from 'react-router-dom';
//this css allows us to have a variable of css codes to used in multiple components
const OptionContainerStyles = css`
    padding: 10px 15px;
      cursor: pointer;
`
export const HeaderContainer = styled.div`
    height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
// with using (someComponent) we can add imported component to styled like Link bellow
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;
export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    right: 40px;
    bottom: 42%; 
`

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
 `
export const OptionDiv = styled.div`
 ${OptionContainerStyles}

`