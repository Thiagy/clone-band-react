import Slide from "./Slide";

export default function HightLight2() {


    return (
        <div className="container">
            <div className="featured-news">
                <a href="#">
                    <h5 style={{color:'#AE012B'}}>DISCURSO NO G20</h5>
                </a>
                <a href="#">
                    <h1>Zelensky diz a líderes que guerra na Ucrânia pode e deve parar</h1>
                </a>
                <a href="#">
                    <p>"Nós não vamos permitir que a Rússia recomponha suas forças", disse presidente</p>
                </a>
                <div className="flex-bar">
                    <div className="div-new-1">
                        <a href="">
                            <img src="img/noticias/jogador-alberto.png" alt=""/>
                        </a>
                        <a href="">
                            <h5>FUTEBOL</h5>
                        </a>
                        <a href="">
                            <h3>Neto e convidados destacam Copa do Mundo, mercado da bola e mais; assista ao vivo</h3>
                        </a>
                        <ul type="square">
                            <li>
                                <a href="">Veja como assistir na web</a>
                            </li>
                            <li>
                                <a href="">Por que Henrique Fogaça não participa da estreia?</a>
                            </li>
                        </ul>
                    </div>
                    <div className="div-new-1">
                        <a href="">
                            <img src="img/noticias/estreia-do-masterChef.png" alt=""/>
                        </a>
                        <a href="">
                            <h5>É HOJE</h5>
                        </a>
                        <a href="">
                            <h3>Veja como assistir à estreia do MasterChef+ pela internet</h3>
                        </a>
                        <ul type="square" style={{listStylePosition: 'outside'}}>
                            <li>
                                <a href="">Flamengo bate Inter e conquista Ladies Cup; veja os melhores momentos</a>
                            </li>
                            <li>
                                <a href="">Seleção Feminina vence Canadá no último amistoso do ano</a>
                            </li>
                        </ul>
                    </div>
                    <div className="div-new-1">
                        <a href="">
                            <img src="img/noticias/confira-receita.png" alt=""/>
                        </a>
                        <a href="">
                            <h5>CONTEÚDO PATROCINADO</h5>
                        </a>
                        <a href="">
                            <h3>Confira deliciosa receita de arroz com acém em cubos</h3>
                        </a>
                    </div>
                </div>
            </div>
            <Slide/>
        </div>
    );
  }
  
  