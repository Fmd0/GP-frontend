import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";


const ErrorPage = () => {
    return (
        <>
            <Navbar name='error' />
            <Wrapper>
                <h1>404 Not Found</h1>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.main`
    text-align: center;
`

export default ErrorPage;