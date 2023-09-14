export default function Backdrop({closeMenu, openMenu}) {

    return (
        <div id="backdrop" style={{display: closeMenu? 'block': 'none'}} onClick={openMenu}></div>
    );
  }
  
  