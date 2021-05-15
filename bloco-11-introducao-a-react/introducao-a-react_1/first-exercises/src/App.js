import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrTasks = ['comprar doces', 'lavar carro', 'lavar tênis', 'ir no banco']

function App() {

  return (
   <div>
     {arrTasks.map((tasks) => task(tasks))}
   </div>
  );
}

export default App;
