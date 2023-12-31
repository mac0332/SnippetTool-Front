import styled from "styled-components";
import { grey } from "../../utils/constants/constants";

export const HeaderContainer = styled.div`
  background-color: ${grey};
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0px;
  height: 60px;
  border-bottom: 1px solid #666;
  z-index: 1000;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: left;
  width: 85%;
  align-items: center;
`;
  
export const RightContainer = styled.div`
display: flex;
justify-content: space-evenly;
width: 15%;
`;

export const IconMenu = styled.img`
  cursor: pointer;
  height: 25px;
  outline: none;
`;

export const Logo = styled.img`
  margin: 0 40px;
  width: 90px;
  height: auto;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background-color: #464646;
  border-radius: 5px;
  border: none;
  margin: 0 10px;
  width: 80%;
  height: 30px;
  font-size: 1.0em;
  color: white;
  `;
  
  export const LupinhaIcon = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 10px; // Adjust margin as needed
  `;
  
  export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  `;
  
export const SignIn = styled.div`
  padding: 10px;
  color: #ddd;
  transition: 0.25s;
  &:hover {
      color: #999;
    }
    `;
    
    export const SignUp = styled.div`
    background-color: #ddd;
    padding: 10px;
    border-radius: 5px;
    color: ${grey};
    transition: 0.25s;
    &:hover {
        background-color: #999;
    }
    `;
    
export const FlexButtons = styled.div`
display: flex;
justify-content: space-between;
width: 160px;
`;
    
export const InsideSearchBar = styled.input`
  background-color: #464646;
  width: 100%;
  height: 20px;
  border: none;
  font-size: 1em;
  color: white;
  outline: none;
  opacity: 1;
`