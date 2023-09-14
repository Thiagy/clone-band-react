import React, { useState } from "react";

export default function BoxJournalists(){

    const[countTag, setCountTag]=useState(1)

    function showMore(){

        const profile_box = document.querySelectorAll('.profile-box')
        const btn_show_more = document.querySelector('#btn_show_more')

        profile_box[countTag].style.display='flex'

        if( countTag < profile_box.length ){
            setCountTag(countTag + 1)
        }else{
            setCountTag(0)

        }
        if(countTag>1){
            btn_show_more.style.display='none'
        }

    }

    return (
      <>
        <div className="flex-news-box">
            <div className="div-linha-vermelha">
                <div className="linha-vermelha"></div>
                <h1>MAIS LIDAS</h1>
            </div>
            <div className="journalist-profile-box-1 profile-box">
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/reinaldo-azevedo.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>REINALDO AZEVEDO</h4>
                        <a href="">
                            <p>Reinaldo Azevedo, jornalista, escreve o que quer ainda que não queiram. No ar</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/monica-bergano.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>MÔNICA BERGAMO</h4>
                        <a href="">
                            <p>Conta em 1ª mão quais são as notícias mais recentes e importantes do dia nas mais...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/jamil-chade.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>JAMIL CHADE</h4>
                        <a href="">
                            <p>Chade é correspondente na Europa há duas décadas e tem seu escritório na sede da...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/fernando-mitre.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>FERNANDO MITRE</h4>
                        <a href="">
                            <p>Começou a carreira em Minas Gerais, onde passou por vários jornais, como “Correio de Minas” e “Diário de...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/blog-do-denilson.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>BLOG DO DENÍLSON SHOW</h4>
                        <a href="">
                            <p>Denílson trocou as chuteiras e a bola pelo microfone e pela câmera, começando mais uma...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/juliana-rosa.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>JULIANA ROSA - DESENROLA ECONOMIA</h4>
                        <a href="">
                            <p>Economia de forma simples para você; todos os dias nas TVs Band e BandNews e nas rádios BandNews FM e...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/carole-crema.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>CAROLE CREMA</h4>
                        <a href="">
                            <p>Dicas gastronômicas simples, do dia-a-dia, sem complicação, que todo mundo pode</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/andre-matovanni.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>ANDRÉ MANTOVANNI</h4>
                        <a href="">
                            <p>Análises de comportamento sobre como os signos se comportam na cozinha e universo da gastronomia...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="journalist-profile-box-2 profile-box">
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/jose-simao.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>JOSÉ SIMÃO (BUEMBA!, BUEMBA!)</h4>
                        <a href="">
                            <p>José Simão ingressou na Faculdade de Direito do Largo de São Francisco em 1969, curso do qual...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/ricardo-freire.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>RICARDO FREIRE (SUA VIAGEM)</h4>
                        <a href="">
                            <p>Publicitário, Freire publicou sete livros – cinco deles sobre viajar: “Viaje na Viagem”,...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/alvaro-furtado.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>ÁLVARO FURTADO (OLHAR CLÍNICO)</h4>
                        <a href="">
                            <p>Álvaro Furtado é médico infectologista do Hospital das Clínicas, da Faculdade de Medicina da USP, e sub-...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/grid.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>GRID</h4>
                        <a href="">
                            <p>Emanuel Colombari é jornalista com experiência em redações desde 2006, com...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/dora.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>DORA KRAMER (POLÍTICA)</h4>
                        <a href="">
                            <p>Dora Kramer, jornalista especialista em política. Passou pelo “Diário Popular”, pela Agência...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/felipe-kieling.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>FELIPE KIELING</h4>
                        <a href="">
                            <p>Felipe Kieling começou a carreira no Grupo Bandeirantes aos 18 anos, no departamento...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/rosely-sayaao.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>ROSELY SAYÃO E THAIS DIAS (SEUS FILHOS)</h4>
                        <a href="">
                            <p>Rosely Sayão e Thais Dias conversam sobre educação dos filhos em todas as faixas etárias.</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/fernando-schuler.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>FERNANDO SCHÜLER (PENSA BRASIL)</h4>
                        <a href="">
                            <p> FERNANDO SCHÜLER (PENSA BRASIL)
                                Fernando Schüler é cientista político e Professor do Insper. Doutor em Filosofia, com...
                            </p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="journalist-profile-box-3 profile-box">
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/eduardo-barao.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>EDUARDO BARÃO (BARÃO DA AMÉRICA)</h4>
                        <a href="">
                            <p>Eduardo Barão está na BandNews FM desde a estreia da emissora e atualmente é correspondente do...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/wharrys-lacerda.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>WHARRYSSON LACERDA E EDUARDO...</h4>
                        <a href="">
                            <p>Wharrysson Lacerda é jornalista, formado pela ECA/USP. Ao longo de mais de vinte anos de...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/rodrigo-haidar.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>RODRIGO HAIDAR (PENSA BRASIL)</h4>
                        <a href="">
                            <p>Rodrigo Haidar é jornalista há 20 anos e especialista na cobertura do Poder Judiciário...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/rodrigo-orengo.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>RODRIGO ORENGO</h4>
                        <a href="">
                            <p>Diretor de jornalismo da Band em Brasília. Formado em Jornalismo pela PUCRS, com MBA em Gestão Empresarial pela...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/victor-magnani.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>VITOR MAGNANI E ALEXANDRE BENTIVOGLIO</h4>
                        <a href="">
                            <p>Alexandre Bentivoglio é jornalista e âncora da BandNews FM. Vitor Magnani, presidente da...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/milton-neves.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>MILTON NEVES (FUTEBOL)</h4>
                        <a href="">
                            <p>Milton Neves é um dos maiores nomes do jornalismo esportivo no rádio e na televisão. Além...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/manu-karsten.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>MANU KARSTEN (É O BICHO)</h4>
                        <a href="">
                            <p>Formada em Medicina Veterinária, pela Universidade Paulista, Manu trabalhou...</p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="journalist-profile">
                    <a href="" className="journalist-profile-picture">
                        <img src="img/noticias/alana-freire.png" alt=""/>
                    </a>
                    <div className="journalist-description">
                        <h4>AIANA FREITAS (MERCADO & CONSUMO)</h4>
                        <a href="">
                            <p>As principais notícias sobre varejo, consumo, franquias, shopping center e foodservice,...
                            </p>
                        </a>
                        <a href="" className="image-compart">
                            <img src="img/icones/compartilhar-img.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="btn_show_more" onClick={showMore}>carregar mais...</div>
      </>
    );
  }
  
  