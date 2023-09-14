import React from 'react';

export default function Menu({closeMenu}){

  return (
    <aside id="menu-slide" style={{left: closeMenu ? '0': '-100%'}}>
      <div className="menu-logar">
        <h3 style={{ color: '#AE012B' }}>MINHA BAND</h3>
        <p>Tudo em um só lugar para você personalizar seu acesso</p>
        <a href="#">
          <button className="enter-button">ENTRAR</button>
        </a>
        <a href="#">
          <button className="registration-button">CADASTRAR</button>
        </a>
      </div>
      <a href="#" style={{ color: 'black', fontWeight: 'bolder', padding: '1vh 0' }}>
        Band.com.br
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        Band ao vivo
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        BandPlay
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        Shop
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        Band pelo Brasil
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        Rádios
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        Jornalismo
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        Esportes
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        Entretenimento
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        Receitas
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        Agroband
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        Vídeos
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        Podcasts
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        Newsletters
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        Canais Band
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        Programação Band TV
      </a>
      <a style={{ color: 'black', display: 'block', margin: 'auto', padding: '1vh 0' }} href="#">
        Show da Fé
      </a>
    </aside>
  );
}


