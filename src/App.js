import { useState } from 'react';
import './App.css';
import JogoForm from './components/JogoForm';
import JogoCard from './components/JogoCard';

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
  const [jogos, setJogos] = useState(initialState)


  function adicionaJogoNaLista(evento) {
    evento.preventDefault()

    const jogo = {
      id: document.getElementById('id').value,
      nomeDoJogo: document.getElementById('gameName').value,
      addictionLevel: document.getElementById('addictionLevel').value
    }

    jogo.id = jogos.length + 1
    jogos.push(jogo)
    console.log(jogos)
    setJogos([...jogos])
    document.getElementById('id').placeholder = jogo.id + 1

  }



  
  
  return (
    <>
      <JogoForm 
      jogos={jogos}
      adicionaJogoNaLista = {adicionaJogoNaLista}
      />
      <div className='mt-3 '>
  
        {jogos.map(jogoAtual => (
          <JogoCard 
            jogoAtual = {jogoAtual}
            jogos = {jogos}
            setJogos = {setJogos}


          />

          
          
        ))}
      </div>
    </>
  );
}

export default App;