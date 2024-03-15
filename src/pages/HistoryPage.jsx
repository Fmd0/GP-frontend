import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import {useSelector} from "react-redux";
import HistoryItem from "../components/HistoryItem.jsx";


const HistoryPage = () => {

    const {histories} = useSelector(state => state.history)

    return (
        <>
            <Navbar name='history' />
            <Wrapper>
                {
                    histories.map((h, index) => {
                        return <HistoryItem key={index} {...h} />
                    })
                }
            </Wrapper>
        </>
    )
}


const Wrapper = styled.main`

`

export default HistoryPage;