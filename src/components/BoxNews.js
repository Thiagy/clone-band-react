import React, { useState, useEffect } from "react";
import NewOne from "./NewOne";

export default function BoxNews({ title, news }) {
  const [sectionNews, setSectionNews] = useState([]);
  const [indexSlice, setIndexSlice] = useState(0);

  useEffect(() => {
    
    function getSectionNews() {
      setSectionNews(news.slice(indexSlice, indexSlice + 4));
    }

    const intervalId = setInterval(() => {
      if (indexSlice + 4 < news.length) {
        setIndexSlice(indexSlice + 4);
      } else {
        setIndexSlice(0);
      }
    }, 5000);

    getSectionNews();

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, [indexSlice, news]); // Adicionar indexSlice e news como dependências

  return (
    <div className="flex-news-box">
      <div className="div-linha-vermelha">
        <div className="linha-vermelha"></div>
        <h1>{title}</h1>
      </div>
      <div className="flex-bar">
        {sectionNews.map((nws) => (
          <NewOne newObjt={nws} key={nws._id} />
        ))}
      </div>
    </div>
  );
}
