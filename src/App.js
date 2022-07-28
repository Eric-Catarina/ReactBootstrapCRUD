import { useState } from 'react';
import './App.css';

let initialState =
  [
    {
      
      "nomeDoJogo": "Maplestory",
      "addictionLevel": '5',

    },
    {
      
      "nomeDoJogo": "League of Legends",
      "addictionLevel": '4',

    },
    {
      
      "nomeDoJogo": "Rimworld",
      "addictionLevel": '3',

    },
    
    {
      
      "nomeDoJogo": "Dead Cells",
      "addictionLevel": '2',

    },
    {
      
      "nomeDoJogo": "Adofai",
      "addictionLevel": '1',

    },
    {
      
      "nomeDoJogo": "Undertale",
      "addictionLevel": '0',

    }
  ]
  let id=0
  for(let jogoAtual of initialState){
    jogoAtual.id = id
    id++
  }
  


function App() {
  const [jogos, setJogos] = useState(initialState)


  function adicionaJogoNaLista(evento) {
    evento.preventDefault()

    const jogo = {
      id: document.getElementById('id').value,
      nomeDoJogo: document.getElementById('gameName').value,
      addictionLevel: document.getElementById('addictionLevel').value
    }

    jogo.id = jogos[jogos.length -1].id +1
    jogos.push(jogo)
    console.log(jogos)
    setJogos([...jogos])
    document.getElementById('id').placeholder = jogo.id + 1

  }

  function converteVicioNumeroEmNome(valorVicio){
    switch (valorVicio){
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
  function insereEmojiVicio(valorVicio){
    switch (valorVicio){
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
  function corBordaAtual(valorVicio){
    switch (valorVicio){
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
  function corTextoAtual(valorVicio){
    switch (valorVicio){
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
    <>
      <form className='row g-3 mt-3'>
        <div className="row">
          <div className="col ">
            <label  className='form-label'>ID</label>
            <input id="id" type="text" className="form-control" placeholder={jogos[jogos.length-1].id + 1} aria-label="First name" disabled/>
          </div>
          <div className="col">
            <label  className='form-label'>Game</label>
            <input id="gameName" type="text" className="form-control" placeholder="Game" aria-label="Last name" />
          </div>

          <div className="col">
    <label  className="form-label">Addiction Level</label>
    <select id="addictionLevel" className="form-select">
      <option selected>Select</option>
      <option value={'0'}>0</option>
      <option value={'1'}>1</option>
      <option value={'2'}>2</option>
      <option value={'3'}>3</option>
      <option value={'4'}>4</option>
    </select>
  </div>

        
          <hr className='mt-3'></hr>
          <div className="col-12">
            <button onClick={adicionaJogoNaLista} type='button' className='btn btn-primary'>Enviar</button>
          </div>
        </div>
      </form>

      <div className='mt-3 '>

        {jogos.map(jogoAtual => (

          
          <div key={jogoAtual.id} className={"card mb-2 shadow border " + corBordaAtual(jogoAtual.addictionLevel)} >

            <div className="card-body ">
              <div className='d-flex justify-content-between'>
                <h5 className='card-title'>

                  <span className="badge rounded-pill text-bg-primary me-2">{jogoAtual.id} </span>

                  -  {jogoAtual.nomeDoJogo}

                </h5>
                <h6>
                  Addiction Level:
                  <span className={'ms-1 '+corTextoAtual(jogoAtual.addictionLevel)}>
                    {insereEmojiVicio(jogoAtual.addictionLevel)}
                    {converteVicioNumeroEmNome(jogoAtual.addictionLevel)}
                  </span>
                </h6>

              </div>


              
              <div className='d-flex justify-content-end border-top pt-2 m-0'>
                <button className='me-1 btn btn-sm btn-outline-primary'><i className="fa-solid fa-pen"></i> Edit</button>
                <button className='ms-1 btn btn-sm btn-outline-danger'><i className="fa-solid fa-eraser"></i> Purify</button>
              </div>

            </div>
          </div>
          
        ))}
      </div>
    </>
  );
}

export default App;