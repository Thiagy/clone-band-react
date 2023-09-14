export default function SubBarNav({openMenu}) {

  return (
    <div className="menu-sub">
            <div className="flex-bar-sub">
                <div className="div-menu">
                    <div id="nav_bar" onClick={openMenu}>
                        <div className="litle_bar"></div>
                        <div className="litle_bar"></div>
                        <div className="litle_bar"></div>
                    </div>
                    <a href="#" className="div-logo-sub">
                        <img src="img/logo/logo-menu-sub.png" alt=""/>
                    </a>
                </div>
                <nav className="list-menu-sub">
                    <a href="#" className="div-aovivo">
                        <img src="img/logo/ao-vivo.png" alt=""/>
                        <p>AO VIVO</p>
                    </a>
                    <a href="#" className="none">BANDPLAY</a>
                    <a href="#" className="none">JORNALISMO</a>
                    <a href="#" className="none">ESPORTES</a>
                    <a href="#" className="none">ENTRETENIMENTO</a>
                    <a href="#" className="none">RECEITAS</a>
                    <a href="#" className="none">PROGRAMAÇÃO</a>
                </nav>
            </div>
            <div className="div-log">
                <a href="#" className="div-shop">
                    <img src="img/icones/shop.png" alt=""/>
                    <p>SHOP</p>
                </a>
                <div className="div-talo-pequeno">
                    <div className="talo-pequeno"></div>
                    <div className="talo-pequeno"></div>
                    <div className="talo-pequeno"></div>
                    <div className="talo-pequeno"></div>
                    <div className="talo-pequeno"></div>
                    <div className="talo-pequeno"></div>
                    <div className="talo-pequeno"></div>
                </div>
                <button className="main-enter-button" >ENTRAR</button>
                <div className="logar">
                    <div className="up-arrow"></div>
                    <h3 style={{color: '#AE012B'}}>MINHA BAND</h3>
                    <p>Tudo em um só lugar para você personalizar seu acesso</p>
                    <a href="">
                        <button className="enter-button">ENTRAR</button>
                    </a>
                    <a href="">
                        <button className="registration-button">CADASTRAR</button>
                    </a>
                </div>
            </div>
        </div>
  );
}

