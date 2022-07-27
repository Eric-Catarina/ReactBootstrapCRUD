
import { useState } from 'react';
import './App.css';

let initialState =
  [
    {
      "id": 1,
      "jogoFavorito": "League of Legends",

    },
    {
      "id": 2,
      "jogoFavorito": "Maplestory",

    }
  ]


function App() {
  const [jogos, setJogos] = useState(initialState)


  function adicionaJogoNaLista(evento) {
    evento.preventDefault()

    const jogo = {
      id: document.getElementById('id').value,
      jogoFavorito: document.getElementById('descricao').value
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
            <label for="ID" className='form-label'>ID</label>
            <input id="id" type="text" class="form-control" placeholder="ID" aria-label="First name" />
          </div>
          <div className="col">
            <label for="Jogo Favorito" className='form-label'>Jogo Favorito</label>
            <input id="descricao" type="text" className="form-control" placeholder="jogo favorito" aria-label="Last name" />
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
            <p className="card-text">{jogoAtual.id} - Jogo Favorito: {jogoAtual.jogoFavorito}</p>
          </div>
        </div>
       ))}
      </div>
    </>
  );




}

export default App;
