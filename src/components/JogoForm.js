import { useState } from "react"

export default function JogoForm(properties) {
  const [jogo, setJogo] = useState({});

  const inputTextHandler = (e) => {
    const { nome, valor } = e.target;

    setJogo({ ...jogo, [nome]: valor });

  }

  return (
    <form className='row g-3 mt-3'>
      <div className="row">
        <div className="col ">
          <label className='form-label'>ID</label>
          <input
            name="id"
            value={jogo.id}
            id="id"
            type="text"
            className="form-control"
            placeholder={properties.id} aria-label="First name" disabled />
        </div>
        <div className="col">
          <label className='form-label'>Game</label>
          <input id="gameName" type="text" className="form-control" placeholder="Game" aria-label="Last name" />
        </div>

        <div className="col">
          <label className="form-label">Addiction Level</label>
          <select
            name="addictionLevel"
            value={jogo.addictionLevel}
            onChange={inputTextHandler}
            id="addictionLevel"
            className="form-select">
            <option selected>Select</option>
            <option value={'0'}>None</option>
            <option value={'1'}>Low</option>
            <option value={'2'}>Medium</option>
            <option value={'3'}>Dangerous</option>
            <option value={'4'}>Deadly</option>
            <option value={'5'}>Soul Sucker</option>
          </select>
        </div>


        <hr className='mt-3'></hr>
        <div className="col-12">
          <button onClick={properties.adicionaJogoNaLista} type='button' className='btn btn-primary'> Corrupt</button>
        </div>
      </div>
    </form>
  )
}
