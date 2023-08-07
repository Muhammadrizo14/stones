import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import Header from "../layouts/Header/Header";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import Empty from "../components/Empty/Empty";
import serviceImg from '../assets/img/statics-img.png'
import axios from "axios";
import {HOST_URL} from "../assets/consts";

const BlogPage = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [blog, setBlog] = useState<{title: string, text: string, id: number, uploadedFile: {id: number}[]} | null>(null)

  useEffect(() => {
    setLoading(true)
    axios.get(`${HOST_URL}blog/${id}`)
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
              <h1 className="title">{blog.title}</h1>
              <img src={`${HOST_URL}upload/fayl/${blog.uploadedFile[0]?.id}`} style={{width: '90%', margin: '0 auto'}} alt=""/>
              <p className='text' style={{overflowWrap: 'break-word'}}>{blog.text}</p>
            </div>
            : <Empty/>
          : null}
      </div>
    </div>
  );
};

export default BlogPage;