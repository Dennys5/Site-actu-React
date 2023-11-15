import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './news.css'


function News() {
  const [news, setNews] = useState([]);
  const apiKey = '12951ce26c4c4552b097951e0b958d31';
  
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'ok') {
          setNews(data.articles);
        } else {
          console.error('Erreur lors de la récupération des articles.');
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);

  return (
    <div>
      <div>
            <nav>
                <Link to="/">Acceuil</Link>
                <Link to="/News">News</Link>
            </nav>
      </div>
      <h1>News</h1>
      <div className='letter'>
      <h2>Articles sur Bitcoin</h2>
      <div className='clac'>
        {news.map((article, index) => (
          <div className='flop'>
          <div className='plop' key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Lire l'article complet
            </a>
          </div>
          </div>
        ))}
      </div>
    </div>
    <div className='foot'>
      <footer>
            <p>&copy; 2023 Actualités</p>
      </footer>
    </div>
      
    </div>
  );
}

export default News;
