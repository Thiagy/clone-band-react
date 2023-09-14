export default function Header() {


    
  return (
    <header>
        <div className="menu-sup">
            <div className="flex-bar-sup">
                <a href="" className="div-logo-sup">
                    <img src="img/logo/logo-band.png" alt=""/>
                </a>
                <nav className="list-menu-sup">
                    <a href="#">INGRESSO.COM</a>
                    <a href="#">UOL HOST</a>
                    <a href="#">PAG BANK</a>
                    <a href="#" id="pagseguro">PAGSEGURO</a>
                    <a href="#">CURSOS</a>
                    <a href="#">UOL PLAY</a>
                </nav>
            </div>
            <div className="div-ico">
                <div className="ico">
                    <a href="#">
                        <img src="img/icones/lupa.png" alt=""/>
                    </a>
                    <a href="#">
                        <p>BUSCA</p>
                    </a>
                </div>
                <div className="ico">
                    <a href="">
                        <img src="img/icones/bate-papo.png" alt=""/>
                    </a>
                    <a href="">
                        <p>BATE-PAPO</p>
                    </a>
                </div>
                <div className="ico">
                    <a href="">
                        <img src="img/icones/email.png" alt=""/>
                    </a>
                    <a href="">
                        <p>EMAIL</p>
                    </a>
                </div>
            </div>
        </div>
    </header>
  );
}

