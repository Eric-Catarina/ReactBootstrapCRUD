import { useState } from 'react';
import './App.css';
import JogoForm from './components/JogoForm';

import JogosLista from './components/JogosLista';

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
  let id=1
  for(let jogoAtual of initialState){
    jogoAtual.id = id
    id++
  }
  
function App() {
  const [jogos, setJogos] = useState(initialState);
  const [jogoAlvo, setJogo] = useState({});


  function deletaJogoDaLista(id) {
    const jogosFiltrados = jogos.filter(jogo => jogo.id !== id)
    
    setJogos([...jogosFiltrados])
  }

  function editarJogo(id){
    const jogoAlvo = jogos.filter(jogo => jogo.id === id)
    setJogo(jogoAlvo[0])

    console.log(jogoAlvo)
    
  }

  function adicionaJogoNaLista(evento) {
    evento.preventDefault()

    const jogo = {
      id: document.getElementById('id').value,
      nomeDoJogo: document.getElementById('gameName').value,
      addictionLevel: document.getElementById('addictionLevel').value
    }

    

    jogo.id = id
    id ++
    jogos.push(jogo)
    
    setJogos([...jogos])
    document.getElementById('id').placeholder = jogo.id + 1

  }

  return (
    <>
      <JogoForm 
      jogos={jogos}
      adicionaJogoNaLista = {adicionaJogoNaLista}
      id = {id}
      jogoAlvo = {jogoAlvo}
      />
      <JogosLista
          deletaJogoDaLista = {deletaJogoDaLista}
          editarJogo = {editarJogo}
          jogos = {jogos}
          setJogos={setJogos}
          setJogo={setJogo}
      />
    </>
  );
}

export default App;