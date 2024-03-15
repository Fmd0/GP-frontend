import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteHistory} from "../features/history/historySlice.js";



const HistoryItem = ({id, date, name, path}) => {

    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Link to={`/detail/${id}`} className='left'>
                <img src={import.meta.env.VITE_API_ADDRESS+path} alt="uploadfile"/>
                <div className='info'>
                    <h3>{name.length>20?`${name.slice(0,20)}...`:name}</h3>
                    <p>{date}</p>
                </div>
            </Link>
            <MdDeleteForever onClick={() => dispatch(deleteHistory(id))}/>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color: white;
    margin: 20px auto;
    width: var(--section-normal-width);
    max-width: var(--section-max-width);
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 8px;
    padding: 12px 14px;
    border-radius: 17px;

    img {
        width: 64px;
    }

    svg {
        font-size: 24px;
        cursor: pointer;
        color: #c00303;
    }

    .left {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        justify-items: center;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h3 {
            font-weight: 700;
            font-size: 20px;
        }

        p {
            font-weight: 300;
            font-size: 13px;
        }
    }
`

export default HistoryItem;