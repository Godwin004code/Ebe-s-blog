
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import '../../styles/singlepost.scss';
import Disqus from "disqus-react"

const SinglePost = () => {
  const disqusShortname = "http-localhost-3000-jfhpzwvmsn"

    const disqusConfig = {
      url: "https://fillial.vercel.app/",
      identifier: "article-id",
      title: "Article title"
    }
    const params = useParams()
   
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([])
  // https://evening-coast-52521.herokuapp.com
    const url = "https://evening-coast-52521.herokuapp.com/api/blog/";

   

  const fetchPosts = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
        
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const temp = posts.filter((item) => item.slug === params.slug)
  return (
    <>
    
    {
        temp.map((item) => {
            const date = new Date(item.date_created).toLocaleDateString();
            return (
                <section key={item.id}>
                    <div className='post-header'>
                    <div className="header">
                  <div className="category">{item.category}</div>
                  <div className="dot"></div>
                  <div className="date">{date}</div>
                </div>
                <h2 className='title'>{item.title}</h2>
                <div>
                    <h2 className='author'>{item.author}</h2>
                </div>
                    </div>
                    <div className='post-img'>
                        <img src={item.thumbnail} alt={item.alt} />
                    </div>
                    <div className='content' style={{color: 'white'}}   dangerouslySetInnerHTML={{__html: item.content}} />
                       
                    
                </section>
            )
        })
    }
    <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
    </>
  )
}

export default SinglePost