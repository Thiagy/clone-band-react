export default function Footer({open}) {
  return (
    <footer style={{display: open? 'flex': 'none'}}>
        <div className="div-bandeirante">
            <a href="">
                <h2>BANDEIRANTES</h2>
            </a>
            <div className="div-programacao-politica-de-provacidade">
                <a href="">
                    <p>PROGRAMAÇÃO</p>
                </a>
                <ul style={{listStylePosition: 'inside'}}>
                    <li>
                        <a href="" style={{color: 'white'}}>POLÍTICA DE PRIVACIDADE</a>
                    </li>
                </ul>
            </div>
            <hr className="linha-footer" />
            <div className="redes-sociais">
                <a href="">
                    <img src="img/icones/twitter.png" alt=""/>
                </a>
                <a href="">
                    <img src="img/icones/facebook.png" alt=""/>
                </a>
                <a href="">
                    <img src="img/icones/instagram.png" alt=""/>
                </a>
                <a href="">
                    <img src="img/icones/you-tube.png" alt=""/>
                </a>
            </div>
            <p>Clone da band jornalismo feito por Thiago Rodrigues</p>
        </div>
          
    </footer>
  );
}

