import React, { useState, useEffect } from "react";

export default function Adverts({ marketing }) {
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Gerar um número aleatório entre 0 e 4
      const newRandomIndex = Math.floor(Math.random() * 5);
      setRandomIndex(newRandomIndex);
    }, 5000);

    return () => {
      clearInterval(intervalId); // Limpar o intervalo quando o componente for desmontado
    };
  }, []); // Passar um array vazio para que o useEffect seja executado apenas uma vez

  // Verificar se marketing existe e tem pelo menos um elemento
  if (marketing && marketing.length > 0) {
    // Usar o número aleatório como índice para acessar os dados de marketing
    const randomMarketing = marketing[randomIndex];

    return (
      <a className="adverts" href="">
        <img className="img_adverts" src={randomMarketing.image} alt={randomMarketing.content} />
      </a>
    );
  } else {
    // Lida com o caso em que marketing não existe ou está vazio
    return null; // ou renderiza um componente de fallback, uma mensagem de erro, etc.
  }
}
