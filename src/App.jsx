import "./App.css";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  return (
    <div className="container mx-auto mt-5">
      <Header />

      <div className=" mt-12 flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
