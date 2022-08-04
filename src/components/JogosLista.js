import JogoCard from "./JogoCard"
export default function JogosLista(properties) {
  return (

    <div className='mt-3 '>
  
        {properties.jogos.map(jogoAtual => (
          <JogoCard 
            deletaJogoDaLista = {properties.deletaJogoDaLista}
            editarJogo = {properties.editarJogo}
            jogoAtual = {jogoAtual}
            jogos = {properties.jogos}
            setJogos = {properties.setJogos}
            setJogo = {properties.setJogo}
          />
        ))}
      </div>

  )
}
