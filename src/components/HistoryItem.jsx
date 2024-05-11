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
                    <h3>{name.length>20?`${name.slice(0,28)}...`:name}</h3>
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
    padding: 16px 16px;
    border-radius: 17px;

    .left {
        display: flex;
        align-items: center;
        gap: 48px;
    }
    
    img {
        width: 64px;
        height: 64px;
        object-fit: cover;
        object-position: center;
    }

    svg {
        font-size: 30px;
        cursor: pointer;
        color: #c00303;
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