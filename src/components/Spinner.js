export default function Spinner({open}) {
  return (
    <div id="spinner" style={{display: open? 'none': 'block'}}>
        <img src="img/gifs-de-icone-carregando-5.gif" alt=""/>
    </div>
  );
}

