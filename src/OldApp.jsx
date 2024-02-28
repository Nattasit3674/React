import Contact from "./assets/Contact"
import Hello from "./assets/Hello"
import Counter from "./assets/Counter";

function App() {
  const helloData = [
    {name: 'Natthasit', message: 'Hi there'},
    {name: 'Tom', message: 'Hello..'}
  ];

  return (
    <div className="App">
      < Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="Nattasit3674@gmail.com" phone ="0936051584" />
    </div>
  );
}

export default App