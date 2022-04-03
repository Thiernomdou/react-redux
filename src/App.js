import Counter from "./components/Counter";

function App() {

  //le hook useSelector permet de se connecter au state
  //et pouvoir afficher les données
  
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
