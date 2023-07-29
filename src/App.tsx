import Alerts from "./components/Alerts";
import ListGroup from "./components/ListGroup";

function App() {
  let superHeroes = [
    "Superman",
    "Spiderman",
    "Iron Man",
    "Batman",
    "Flash",
    "Wonder Woman",
  ];

  const onSelectSuperhero = (superhero: string) => {
    console.log(superhero);
  };

  return (
    <div>
      <ListGroup
        items={superHeroes}
        heading="List of Superheroes"
        onSelectItem={onSelectSuperhero}
      />
    </div>
  );
}

export default App;
