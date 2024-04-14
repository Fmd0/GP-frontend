import styled from "styled-components";
import { TbFileUpload } from "react-icons/tb";
import {useRef, useState} from "react";
import {GrCircleQuestion} from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import {formatByte} from "../utils/utils.js";
import {useDispatch, useSelector} from "react-redux";
import {submitForm} from "../features/history/historySlice.js";
import {Navigate} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import {toast} from "react-toastify";



const HomePage = () => {

    const imgRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const dispatch = useDispatch();
    const {submitState, currentId} = useSelector(state => state.history);

    const handleClickRemove = () => {
        setSelectedFile(null)
        if(imgRef) {
            imgRef.current.value = "";
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedFile === null) {
            toast.error("请选择图片", {
                autoClose: 1000,

            });
            return;
        }
        dispatch(submitForm(new FormData(e.target)))
    }


    return (
        <>
            <Navbar name='home' />
            <Wrapper>
                <form encType='multipart/form-data' onSubmit={handleSubmit}>
                    <h3 className='header'>图像上传</h3>

                    <input type="file"
                           accept='image/*'
                           name='img'
                           ref={imgRef}
                           onChange={(e) => setSelectedFile(e.target.files[0])}
                    />

                    <div className='core' onClick={() => imgRef.current&&imgRef.current.click()}>
                        <TbFileUpload />
                        <h3>点击选择图片</h3>
                        <p>支持格式 .jpg .png 等</p>
                    </div>

                    {selectedFile && (
                        <div className="upload-item">
                            <img src={URL.createObjectURL(selectedFile)} alt="upload"/>
                            <div>
                                <h5>{selectedFile["name"]}</h5>
                                <p>{formatByte(selectedFile['size'])}</p>
                            </div>
                            <RxCross2 onClick={handleClickRemove} />
                        </div>
                        )
                    }

                    <div className='help-center'>
                        <GrCircleQuestion/>
                        <h3>帮助中心</h3>
                    </div>

                    <div className='button-container'>
                        <button type='submit'
                                className='right-button'
                                disabled={submitState === 'loading'}
                        >
                            上传
                        </button>
                    </div>
                </form>
                {
                    submitState === 'success'&&
                    <Navigate to={`/detail/${currentId}`} />
                }
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    background-color: #ffffff;
    margin: 20px auto;
    padding: 24px;
    width: var(--section-normal-width);
    max-width: var(--section-max-width);
    border-radius: 20px;
    .header {
        font-size: 18px;
        font-weight: 700;
    }
    form {
        input {
            display: none;
        }
    }

    .upload-item {
        margin: 20px 0;
        background-color: #F6F7F9;
        padding: 12px 16px;
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 8px;
        align-items: center;
        border-radius: 16px;
        img {
            width: 32px;
        }
        h5 {
            color: #282A37;
            font-size: 12px;
            font-weight: 600;
        }
        p {
            color: #667091;
            font-size: 11px;
        }
        svg {
            font-size: 24px;
            cursor: pointer;
        }
    }
    
    
    .help-center {
        display: flex;
        align-items: center;
        gap: 4px;
        svg {
        }
        h3 {
            font-size: 14px;
            font-weight: 700;
            color: #282A37;
        }
    }
    
    .core {
        margin: 20px 0;
        height: 170px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;
        border: #D5D8E2 dashed;
        cursor: pointer;
        svg {
            font-size: 32px;
        }
        h3 {
            font-size: 14px;
            font-weight: 700;
            color: #282A37;
            margin-top: 8px;
        }
        p {
            color: #515978;
            font-size: 14px;
        }
    }
    .button-container {
        margin: 20px 0;
        text-align: center;
        
        .right-button {
            padding: 12px 0;
            border: none;
            color: white;
            background-color: #156CF7;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            width: 100%;
        }
    }
`

export default HomePage;