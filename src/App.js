
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


  function adicionaJogoNaLista(evento){
    evento.preventDefault()

    const jogo= {
      id: document.getElementById('id').value,
      jogoFavorito: document.getElementById('descricao').value
    }

    jogos.push(jogo)
    console.log(jogos)
   
  }


  return (
    <>
    <form className='mt-3'>
    <input id="id" type="text" placeholder='id'/>
    <input id="descricao" type="text" placeholder='descrição'/>
    <button onClick={adicionaJogoNaLista} type='button' className='btn btn-primary'>Enviar</button>

    </form>
    <div className='mt-3'>
      <ul className='list-group'>
       {jogos.map(jogoAtual => (
        <li key={jogoAtual.id} className='list-group-item'>{jogoAtual.id} -      Jogo Favorito: {jogoAtual.jogoFavorito}</li>
       ))}
      </ul>
    </div>
    </>
  );




}

export default App;
