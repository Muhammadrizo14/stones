import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import Header from "../layouts/Header/Header";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import Empty from "../components/Empty/Empty";
import serviceImg from '../assets/img/statics-img.png'
import axios from "axios";
import {HOST_URL} from "../assets/consts";
import ProductSlider from "./ProductPage/ProductSlider/ProductSlider";

const PortfolioPage = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [blog, setBlog] = useState<{title: string, info: string, id: number, uploadedFile: {id: number}[]} | null>(null)

    useEffect(() => {
        setLoading(true)
        axios.get(`${HOST_URL}profile/${id}`)
            .then((res: any) => {
                setLoading(false);
                setError(false);
                setBlog(res.data);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            })
    }, [id])

    return (
        <div>
            <Header/>
            <div className="container">
                {loading && <Loading/>}
                {error && <Error/>}
                {!error && !loading ?
                    blog ?
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20, padding: '20px 0'}} className='blog-inner'>
                            <h1 className="blog__title title">{blog.title}</h1>
                            <div className='blog__wrap' style={{display: 'flex'}}>
                                <ProductSlider images={blog.uploadedFile} />
                                <p className='text' style={{overflowWrap: 'break-word'}}>{blog.info}</p>
                            </div>
                        </div>
                        : <Empty/>
                    : null}
            </div>
        </div>
    );
};

export default PortfolioPage;