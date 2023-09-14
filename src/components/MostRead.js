export default function MostRead() {

    return (
        
        <div className="flex-bar">
            <div className="div-schedule-1">
                <div className="div-linha-vermelha">
                    <div className="linha-vermelha"></div>
                    <h1>MAIS LIDAS</h1>
                </div>
                <div className="flex-bar-schedule">
                    <div className="div-new-1">
                        <h3 className="titulo-mais-lidas">Notícias</h3>
                        <ol>
                            <li className="first-list">Infarto, cansaço ou calor: o que está por trás das mortes de operários no Catar?</li>
                            <li className="second-list">Obras da Copa 2022 no Catar deixam mais de 2 mil operários nepaleses mortos</li>
                            <li className="three-list">Limeira decreta estado de emergência na cidade</li>
                            <li className="four-list">Chuva deixa SP em estado de atenção</li>
                            <li className="five-list">Policial aposentado é morto a tiros dentro de barbearia em São Paulo</li>
                        </ol>
                    </div>
                    <div className="div-new-1">
                        <h3 className="titulo-mais-lidas">Esportes</h3>
                        <ol>
                            <li className="first-list">Fifa proíbe venda de cervejas com álcool dentro dos estádio da Copa do Mundo</li>
                            <li className="second-list">Pilotos F1 2023: Ricciardo será nosso terceiro piloto, afirma dirigente da Red Bull</li>
                            <li className="three-list">F1: como assistir ao GP de Abu Dhabi ao vivo</li>
                            <li className="four-list">Telstar, Jabulani e Brazuca: Conheça as bolas da Copas do Mundo e veja a evolução</li>
                            <li className="five-list">Confira quais são as seis etapas que devem receber Sprint na F1 em 2023</li>
                        </ol>
                    </div>
                    <div className="div-new-1">
                        <h3 className="titulo-mais-lidas">Entretenimento</h3>
                        <ol>
                            <li className="first-list">Patrícia Poeta "alfineta" estreia de Fátima Bernardes</li>
                            <li className="second-list">Matheus Ceará se emociona com mensagem de filha</li>
                            <li className="three-list">Simaria abre o jogo sobre polêmica</li>
                            <li className="four-list">Catia Fonseca dança ao som de Rei do Paredão</li>
                            <li className="five-list">Simaria acende rumores de parceria com Anitta</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="div-schedule-2">
                <div className="div-linha-vermelha">
                    <div className="linha-vermelha"></div>
                    <h1>PROGRAMAÇÃO</h1>
                </div>
                <hr/>
                <div className="schedule">
                    <p>04:00</p>
                    <div>
                        <img src="img/noticias/jornal-agora.png" alt=""/>
                    </div>
                    <h3 className="titulo-programacao">1° jornal</h3>
                </div>
                <hr/>
                <div className="schedule">
                    <p>06:00</p>
                    <div>
                        <img src="img/noticias/show-da-fe.png" alt=""/>
                    </div>
                    <h3 className="titulo-programacao">Show da Fé</h3>
                </div>
                <hr/>
                <div className="schedule">
                    <p>08:00</p>
                    <div>
                        <img src="img/noticias/bora-brasil-1.png" alt=""/>
                    </div>
                    <h3 className="titulo-programacao">Bora Brasil</h3>
                </div>
                <hr/>
                <div className="schedule">
                    <p>09:00</p>
                    <div>
                        <img src="img/noticias/bora-brasil-1.png" alt=""/>
                    </div>
                    <h3 className="titulo-programacao">Bora Brasil</h3>
                </div>
            </div>
        </div>
    );
  }
  
  