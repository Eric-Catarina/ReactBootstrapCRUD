
export default function JogoCard(properties) {



function converteVicioNumeroEmNome(valorVicio) {
  switch (valorVicio) {
    case '0':
      return 'None';
    case '1':
      return 'Low';
    case '2':
      return 'Medium';
    case '3':
      return 'Dangerous';
    case '4':
      return 'Deadly';
    case '5':
      return 'Soul Sucker';
    default:
      return 'Unknown';
  }
}
function insereEmojiVicio(valorVicio) {
  switch (valorVicio) {
    case '0':
      return <i className="me-1 ms-1 fa-solid fa-hand-peace"></i>;
    case '1':
      return <i className="me-1 ms-1 fa-solid fa-heart-circle-check"></i>;
    case '2':
      return <i className="me-1 ms-1 fa-solid fa-head-side-virus"></i>;
    case '3':
      return <i className="me-1 ms-1 fa-solid fa-biohazard"></i>;
    case '4':
      return <i className="me-1 ms-1 fa-solid fa-skull"></i>;
    case '5':
      return <i className="me-1 ms-1 fa-solid fa-ghost"></i>;
    default:
      return <i className="me-1 ms-1 fa-solid fa-question"></i>;
  }
}
function corBordaAtual(valorVicio) {
  switch (valorVicio) {
    case '0':
      return 'border-success border-2';
    case '1':
      return 'border-info border-2';
    case '2':
      return 'border-primary border-2';
    case '3':
      return 'border-warning border-3';
    case '4':
      return 'border-danger border-3';
    case '5':
      return 'border-dark border-4';
    default:
      return 'border-secondary';
  }
}
function corTextoAtual(valorVicio) {
  switch (valorVicio) {
    case '0':
      return 'text-success';
    case '1':
      return 'text-info';
    case '2':
      return 'text-primary';
    case '3':
      return 'text-warning';
    case '4':
      return 'text-danger';
    case '5':
      return 'text-dark';
    default:
      return 'text-secondary';
  }
}


  return (

  <div key={properties.jogoAtual.id} className={"card mb-2 shadow border " + corBordaAtual(properties.jogoAtual.addictionLevel)} >

    <div className="card-body ">
      <div className='d-flex justify-content-between'>
        <h5 className='card-title'>

          <span className="badge rounded-pill text-bg-primary me-2">{properties.jogoAtual.id} </span>

          -  {properties.jogoAtual.nomeDoJogo}

        </h5>
        <h6>
          Addiction Level:
          <span className={'ms-1 ' + corTextoAtual(properties.jogoAtual.addictionLevel)}>
            {insereEmojiVicio(properties.jogoAtual.addictionLevel)}
            {converteVicioNumeroEmNome(properties.jogoAtual.addictionLevel)}
          </span>
        </h6>

      </div>
      <div className='d-flex justify-content-end border-top pt-2 m-0'>
        <button onClick={() => properties.editarJogo(properties.jogoAtual.id)} className='me-1 btn btn-sm btn-outline-primary'><i className="fa-solid fa-pen"></i> Edit</button>
        <button onClick={() => properties.deletaJogoDaLista(properties.jogoAtual.id)} className='ms-1 btn btn-sm btn-outline-danger'><i className="fa-solid fa-hand-holding-medical"></i> Purify</button>
      </div>

    </div>
  </div>


  )
}
