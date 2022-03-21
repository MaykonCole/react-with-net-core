import { useState, useEffect } from 'react'

const atividadeInicial = {
  id: 0,
  titulo: '',
  prioridade: 0,
  frequencia: 0,
  descricao: '',
};
export default function AtividadeForm(props) {

  const [atividade, setAtividade] = useState(atividadeAtual());

  useEffect(() => {
    if (props.ativSelecionada.id !== 0)
      setAtividade(props.ativSelecionada);
  }, [props.ativSelecionada]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;
    setAtividade({ ...atividade, [name]: value });
  };

  function atividadeAtual() {
    if (props.ativSelecionada.id !== 0) {
      return props.ativSelecionada;
    } else {
      return atividadeInicial;
    }
  }

  function handleCancelar(e) {
    e.preventDefault();
    props.cancelarAtividade();
    setAtividade(atividadeInicial);
  }


  function handleSubmit(e) {
    e.preventDefault();

    if (props.ativSelecionada.id !== 0)
      props.atualizarAtividade(atividade);
    else {
      props.addAtividade(atividade);
    }

    setAtividade(atividadeInicial);
  }

  return (
    <>
      <h1>Atividade {atividade.id !== 0 ? atividade.id : ''}</h1>
      <form className='row g-3' onSubmit={handleSubmit}>
        <div className='col-md-3'>
          <label className='form-label'>Título</label>
          <input name='titulo'
            value={atividade.titulo}
            onChange={inputTextHandler}
            id='titulo'
            type='text'
            className='form-control' />
        </div>
        <div className='col-md-2'>
          <label className='form-label'>Frequência</label>
          <select name='frequencia' value={atividade.frequencia} onChange={inputTextHandler} id='frequencia' className='form-select'>
            <option defaultValue='0'>Selecionar ... </option>
            <option value='1'>Segunda a Sexta</option>
            <option value='2'>Sábado e Domingo</option>
            <option value='3'>Dias Úteis</option>
            <option value='4'>Todos dias</option>
            <option value='5'>Outro</option>
          </select>
        </div>
        <div className='col-md-2'>
          <label className='form-label'>Prioridade</label>
          <select name='prioridade' value={atividade.prioridade} onChange={inputTextHandler} id='prioridade' className='form-select'>
            <option defaultValue='0'>Selecionar ... </option>
            <option value='1'>Baixa</option>
            <option value='2'>Media</option>
            <option value='3'>Alta</option>
          </select>
        </div>
        <div className='col-md-7'>
          <label className='form-label'>Descrição</label>
          <textarea name='descricao' id='descricao' onChange={inputTextHandler} type='text' className='form-control' value={atividade.descricao} />
        </div>

        <div className='col-12'>
          {
            atividade.id === 0 ?
              <button className='btn btn-outline-success' type='submit'>
                <i className='fas fa-plus me-2'></i>
                + Ativade +{' '}
              </button>
              :
              <>
                <button className='btn btn-outline-info' type='submit'>
                  Atualizar {' '}
                </button>
                <button className='btn btn-outline-danger' onClick={handleCancelar}>
                  Cancelar{' '}
                </button>
              </>
          }
        </div>
      </form>
    </>
  )
}
