
import './App.css';

function App() {
  const melhorDev =
  [
  {
    "nome": "Éric",
    "idade": 17,
    "jogoFavorito": "League of Legends",
    "tempoPuro": 101
  },
  {
    "jogoFavorito": "Maplestory",
    "nivelDeVicio": "Cocaina",
    "amorPeloJogo": 0,
    "tempoPuro": 200
  }
]

  return (
    <div className='mt-3'>
      <ul className='list-group'>
       {melhorDev.map(elementos => (
        <li className='list-group-item'>Tempo puro de {elementos.jogoFavorito}: {elementos.tempoPuro} dias</li>
       ))}
      </ul>
    </div>
  );




}

export default App;
