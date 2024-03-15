import { IoIosArrowBack } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import styled from "styled-components";
import navbarData from "../navbarData.js"
import {Link} from "react-router-dom";

const Navbar = ({name}) => {

    const data = navbarData[name];

    return (
        <Wrapper>
            {
                (!data.left)?<div></div>:(
                    <Link to='/'><IoIosArrowBack /></Link>
                )
            }
            <h3>{data.center}</h3>
            {
                (!data.right)?<div></div>:(
                    <Link to='/history'><LuHistory /></Link>
                )
            }
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    margin: 20px auto;
    width: var(--section-normal-width);
    max-width: var(--section-max-width);
    
    display: grid;
    align-items: center;
    grid-template-columns: 26px 1fr 26px;
    padding: 14px 12px;
    border-radius: 16px;
    background-color: #ffffff;
    text-align: center;
    svg {
        font-size: 26px;
    }
    
`

export default Navbar;