
export default function Atividade(props) {

  function prioridadeLabel(param) {
    switch (param) {
      case "1":
        return "Baixa";
      case "2":
        return "Média";
      case "3":
        return "Alta";
      default:
        return "Não definido";
    }
  }

  function frequenciaLabel(param) {
    switch (param) {
      case "1":
        return "Segunda a Sexta";
      case "2":
        return "Sábado e Domingo";
      case "3":
        return "Dias Úteis";
      case "4":
        return "Todos os dias";
      default:
        return "Outro";
    }
  }

  function prioridadeIcone(param, icone) {
    switch (param) {
      case "1":
        return icone ? "smile" : "secondary";
      case "2":
        return icone ? "meh" : "info";
      case "3":
        return icone ? "frown" : "warning";
      default:
        return "";
    }
  }

  return (
    <div

      className={
        "card mb-2 shadow-sm border-" + prioridadeIcone(props.ativ.prioridade)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4 className="card-title">
            <span className="badge bg-secondary me-1">{props.ativ.id}</span>-{" "}
            {props.ativ.titulo}
          </h4>
          <h5>
            Prioridade:
            <span
              className={"ms-1 text-" + prioridadeIcone(props.ativ.prioridade)}
            >
              <i
                className={
                  "me-1 far fa-" + prioridadeIcone(props.ativ.prioridade, true)
                }
              ></i>
              {prioridadeLabel(props.ativ.prioridade)}
            </span>
          </h5>
        </div>
        <p className="card-text">
          {props.ativ.descricao} - <b>{frequenciaLabel(props.ativ.frequencia)}</b>
        </p>
        <div className='d-flex justify-content-end pt-2 m-0 border-top'>
          <button
            className='btn btn-sm btn-outline-primary me-2'
            onClick={() => props.pegarAtividade(props.ativ.id)}
          >
            <i className='fas fa-pen me-2'></i>
            Editar
          </button>
          <button
            className='btn btn-sm btn-outline-danger'
            onClick={() => props.removeAtividade(props.ativ.id)}
          >
            <i className='fas fa-trash me-2'></i>
            Deletar
          </button>
        </div>
      </div>
    </div>
  )
}
