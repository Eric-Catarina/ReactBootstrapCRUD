
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
      <form className='row g-3 mt-3'>
        <div className="row">
          <div className="col-md-6">
            <label for="ID" className='form-label'>ID</label>
            <input id="id" type="text" class="form-control" placeholder="id" aria-label="First name" />
          </div>
          <div className="col-md-6">
            <label for="Jogo Favorito" className='form-label'>Jogo Favorito</label>
            <input id="descricao" type="text" className="form-control" placeholder="jogo favorito" aria-label="Last name" />
          </div>

          <hr></hr>
          <div className="col-12">
            <button onClick={adicionaJogoNaLista} type='button' className='btn btn-primary'>Enviar</button>
          </div>
        </div>
      </form>



      <div className='mt-3'>
       
          {jogos.map(jogoAtual => (
            <li key={jogoAtual.id} className='list-group-item'>{jogoAtual.id} -      Jogo Favorito: {jogoAtual.jogoFavorito}</li>
          ))}
          
        
      </div>
    </>
  );




}

export default App;
