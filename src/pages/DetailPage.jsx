import {useParams} from "react-router-dom";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
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

    const result = JSON.parse(history.result);
    return (
        <>
            <Navbar name='detail'/>
            <Wrapper>
                <img src={`${import.meta.env.VITE_API_ADDRESS}${history.path}`} alt="detail"/>


                {result.length > 0 &&
                    <>
                    <h2>检测到目标类别总数：{result.length}</h2>
                    <div className="resultTable">
                    <h3>元器件名称</h3> <h3>数量</h3>
                    {
                        result.map((r) => {
                            return (
                                <>
                                    <p>{r.name}</p>
                                    <p>{r.value}</p>
                                </>
                            )
                        })
                    }
                </div>
                    </>
                }
                { history.price > 0 &&
                    <h3 className="price">总价¥{history.price}</h3>}
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
    h2 {
        margin: 20px 0;
    }
    
    .resultTable {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: minmax(20px, auto);
        align-items: center;
        p {
            //padding: 8px;
            //border: 1px gray solid;
        }
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