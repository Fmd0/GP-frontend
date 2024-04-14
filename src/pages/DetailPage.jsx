import {useParams} from "react-router-dom";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {formatPercent} from "../utils/utils.js";
import Navbar from "../components/Navbar.jsx";
import ErrorPage from "./ErrorPage.jsx";
import {useEffect} from "react";
import {clearStatus} from "../features/history/historySlice.js";


const DetailPage = () => {

    const param = useParams();
    const {histories} = useSelector(state => state.history);
    const dispatch = useDispatch();
    const history = histories.find(h => h.id === param.id);

    useEffect(() => {
        dispatch(clearStatus())
    }, []);

    if(history === undefined) {
        return <ErrorPage />
    }

    return (
        <>
            <Navbar name='detail'/>
            <Wrapper>
                <img src={`${import.meta.env.VITE_API_ADDRESS}${history.path}`} alt="detail"/>
                <h3>检测目标总数：{history.result.length}</h3>
                {
                    history.result.map((r, index) => {
                        return (
                            <p key={index}>{r.name} {formatPercent(r.confidence)}</p>
                        )
                    })
                }
                <h3 className="price">总价¥{0}</h3>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.main`
    margin: 20px auto;
    width: var(--section-normal-width);
    max-width: var(--section-max-width);
    padding: 24px;
    background-color: white;
    border-radius: 20px;
    img {
        display: block;
        width: 100%;
    }
    h3 {
        font-size: 20px;
        font-weight: 700;
        margin: 20px 0;
    }
    p {
        font-size: 16px;
        margin: 20px 0;
    }
    .price {
        text-align: end;
    }
`

export default DetailPage;