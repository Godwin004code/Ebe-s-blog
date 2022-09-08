import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PostInt } from "../../types";
import "../../styles/post.scss";
import { Link } from "react-router-dom";
import PostSkeleton from "../Skeleton/PostSkeleton";
import HeroSkeleton from "../Skeleton/HeroSkeleton";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(2);

  const url = "https://evening-coast-52521.herokuapp.com/api/blog";

  const fetchPosts = () => {
    setIsLoading(true)
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
        setIsLoading(false)
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <section>
      <section>
        {isLoading === true ? Array(1).fill(<HeroSkeleton />) : posts.map((item) => {
          if (item.id === 1) {
            return (
              <div key={item.id} className="hero">
               <div className="hero-img">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="hero-txt">
                  <div>
                    <div className="heade">
                      <div className="category">{item.category}</div>
                      <div style={{display: isLoading === true ? 'none' : 'block'}} className="dot"></div>
                      <div className="date">{item.month} {item.day}</div>
                    </div>
                    <h2 className="title">
                      <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                    </h2>
                    <p className="excerpt">{item.excerpt}</p>
                  </div>
                  <div>
                    <div></div>
                    <div>
                      <h2 className="author">{item.author}</h2>
                    </div>
                  </div>
                </div>

               
              </div>
            );
          }
        })}
      </section>
      <section className="post">
        {isLoading === true ? Array(5).fill(<PostSkeleton />) : posts.reverse().map((post) => {
          const date = new Date(post.date_created).toLocaleDateString();

          return (
            <div key={post.id} className="each_post">
              <div>
                <img src={post.thumbnail} alt={post.title} />
              </div>
              <div>
                <div className="heade">
                  <div className="category">{post.category}</div>
                  <div style={{display: isLoading === true ? 'none' : 'block'}} className="dot"></div>
                  <div className="date">{date}</div>
                </div>
                <h2 className="title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="excerpt">{post.excerpt}</p>
              </div>
              <div>
                <div></div>
                <div>
                  <h2 className="author">{post.author}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default AllPost;
