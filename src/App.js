
import { useState } from 'react';
import './App.css';

let initialState =
  [
    {
      "id": 1,
      "jogoFavorito": "League of Legends",
      "addictionLevel": "1",

    },
    {
      "id": 2,
      "jogoFavorito": "Maplestory",
      "addictionLevel": "3",

    }
  ]


function App() {
  const [jogos, setJogos] = useState(initialState)


  function adicionaJogoNaLista(evento) {
    evento.preventDefault()

    const jogo = {
      id: document.getElementById('id').value,
      jogoFavorito: document.getElementById('gameName').value,
      addictionLevel: document.getElementById('addictionLevel').value
    }

    jogos.push(jogo)
    console.log(jogos)
    setJogos([...jogos])

  }

  

  return (
    <>
      <form className='row g-3 mt-3 '>
        <div className="row">
          <div className="col ">
            <label  className='form-label'>ID</label>
            <input id="id" type="text" class="form-control" placeholder="ID" aria-label="First name" />
          </div>
          <div className="col">
            <label  className='form-label'>Game</label>
            <input id="gameName" type="text" className="form-control" placeholder="Game" aria-label="Last name" />
          </div>

          <div class="col">
    <label  class="form-label">Addiction Level</label>
    <select id="addictionLevel" class="form-select">
      <option selected>Select</option>
      <option value={"0"}>0</option>
      <option value={"1"}>1</option>
      <option value={"2"}>2</option>
      <option value={"3"}>3</option>
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


          <div key={jogoAtual.id} className="card mb-2 shadow" >

            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 className='card-title'>

                  <span className="badge rounded-pill text-bg-primary me-2">{jogoAtual.id} </span>

                  -  {jogoAtual.jogoFavorito}

                </h5>
                <h6>
                  Addiction Level:
                  <span className='ms-1 text-black'>
                    {jogoAtual.addictionLevel}
                  </span>
                </h6>

              </div>


              <p className="card-text">{jogoAtual.id} - Jogo Favorito: {jogoAtual.jogoFavorito}</p>
              <div className='d-flex justify-content-end border-top pt-2 m-0'>
                <button className='me-1 btn btn-sm btn-outline-primary'><i class="fa-solid fa-pen"></i> Edit</button>
                <button className='ms-1 btn btn-sm btn-outline-danger'><i class="fa-solid fa-eraser"></i> Purify</button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
