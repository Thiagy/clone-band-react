import React, { useState, useEffect } from "react";

export default function Slide() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [count]);

  function nextImage() {
    setCount((prevCount) => {
      if (prevCount >= 4) {
        return 1;
      } else {
        return prevCount + 1;
      }
    });
  }

  return (
    <div className="slide-box">
      <div className="slide">
        <input type="radio" name="radio-btn" id="radio1" onChange={()=>console.log('')} checked={count === 1} />
        <input type="radio" name="radio-btn" id="radio2" onChange={()=>console.log('')} checked={count === 2} />
        <input type="radio" name="radio-btn" id="radio3" onChange={()=>console.log('')} checked={count === 3} />
        <input type="radio" name="radio-btn" id="radio4" onChange={()=>console.log('')} checked={count === 4} />

        

        <a
          style={{ backgroundImage: 'url("imgs-slide/masterchef-abre-inscricoes.png")' }}
          href=""
          className={`image-slide first slide${count === 1 ? " active" : ""}`}
        >
          <div className="div-imagem-text">
            <h6>TRÊS NOVAS EDIÇÕES</h6>
            <h2>MasterChef abre inscrições para novas temporadas em 2023;</h2>
          </div>
        </a>
        <a
          style={{ backgroundImage: 'url("imgs-slide/calcular-13.png")' }}
          href=""
          className={`image-slide slide2${count === 2 ? " active" : ""}`}
        >
          <div className="div-imagem-text">
            <h6>TRÊS NOVAS EDIÇÕES</h6>
            <h2>MasterChef abre inscrições para novas temporadas em 2023;</h2>
          </div>
        </a>
        <a
          style={{ backgroundImage: 'url("imgs-slide/participantes-master-chef.png")' }}
          href=""
          className={`image-slide slide3${count === 3 ? " active" : ""}`}
        >
          <div className="div-imagem-text">
            <h6>TRÊS NOVAS EDIÇÕES</h6>
            <h2>MasterChef abre inscrições para novas temporadas em 2023;</h2>
          </div>
        </a>
        <a
          style={{ backgroundImage: 'url("imgs-slide/premio-ta-no-zap.png")' }}
          href=""
          className={`image-slide slide4${count === 4 ? " active" : ""}`}
        >
          <div className="div-imagem-text">
            <h6>TRÊS NOVAS EDIÇÕES</h6>
            <h2>MasterChef abre inscrições para novas temporadas em 2023;</h2>
          </div>
        </a>
      </div>
      <div className="navigation-bar">
        <label htmlFor="radio1" className="navigation-btn1 navigation-btn"></label>
        <label htmlFor="radio2" className="navigation-btn2 navigation-btn"></label>
        <label htmlFor="radio3" className="navigation-btn3 navigation-btn"></label>
        <label htmlFor="radio4" className="navigation-btn4 navigation-btn"></label>
      </div>
    </div>
  );
}
