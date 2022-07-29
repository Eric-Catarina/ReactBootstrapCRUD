

export default function JogoForm(properties) {
  return (
    <form className='row g-3 mt-3'>
        <div className="row">
          <div className="col ">
            <label  className='form-label'>ID</label>
            <input id="id" type="text" className="form-control" placeholder={properties.jogos.length === 0 ? 0 : properties.jogos.length + 1 } aria-label="First name" disabled/>
          </div>
          <div className="col">
            <label  className='form-label'>Game</label>
            <input id="gameName" type="text" className="form-control" placeholder="Game" aria-label="Last name" />
          </div>

          <div className="col">
    <label  className="form-label">Addiction Level</label>
    <select id="addictionLevel" className="form-select">
      <option selected>Select</option>
      <option value={'0'}>None</option>
      <option value={'1'}>Low</option>
      <option value={'2'}>Medium</option>
      <option value={'3'}>Dangerous</option>
      <option value={'4'}>Deadly</option>
      <option value={'5'}><b>Soul Sucker</b></option>
    </select>
  </div>

        
          <hr className='mt-3'></hr>
          <div className="col-12">
            <button onClick={properties.adicionaJogoNaLista} type='button' className='btn btn-primary'>Enviar</button>
          </div>
        </div>
      </form>
  )
}
