import "./App.css";
import { useState } from "react";
import AtividadeForm from "./components/Atividade/AtividadeForm";
import AtividadeLista from "./components/Atividade/AtividadeLista";

let initialState = [
  {
    id: 1,
    titulo: "Estudar React",
    descricao: "Realizar curso React com ASP NET CORE na Udemy",
    prioridade: "2",
    frequencia: "4",
  },
];
function App() {
  const [atividades, setAtividades] = useState(initialState);
  const [atividade, setAtividade] = useState({id:0});
  const [countAtividades, setCountAtividades] = useState(initialState.length);

  function addAtividade(ativ) {
    setAtividades([...atividades, { ...ativ, id: countAtividades + 1}]);
    setCountAtividades(countAtividades + 1);
  }

  function removeAtividade(id) {
    const atividadeFiltrada = atividades.filter((x) => x.id !== id);
    setAtividades([...atividadeFiltrada]);
    setCountAtividades(countAtividades - 1);
  }

  function pegarAtividade(id) {
    const atividade = atividades.filter((atividade) => atividade.id === id);
    setAtividade(atividade[0]);
  }

  function atualizarAtividade(ativ) {
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item));
    setAtividade({ id: 0 });
  }

  function cancelarAtividade() {
    setAtividade({id:0});
  }

  return (
    <>
      <AtividadeForm addAtividade={addAtividade}
        atualizarAtividade={atualizarAtividade}
        cancelarAtividade={cancelarAtividade}
        atividades={atividades}
        ativSelecionada={atividade} />
      <AtividadeLista
        atividades={atividades}
        removeAtividade={removeAtividade}
        pegarAtividade={pegarAtividade}
      />
    </>
  );
}
export default App;
