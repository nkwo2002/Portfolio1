import React, { useEffect, useState} from 'react';
import axios from 'axios';
import "./portfolio.css";

const Portfolio = () => {

    const [data, setData] = useState([]);
    useEffect(()=> {
        axios.get("https://tame-pear-mackerel-ring.cyclic.app/api/portfolio").then(response => {
          const formttedData = response.data.data.map(item => ({
            id:item._id,
            image: item.image,
            title: item.title,
            github: item.github,
            demo: item.demo
          }));
          setData(formttedData)
        }).catch(error => {
          console.log("Error fetching portfolio data:", error);
    })
  }, [])
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;