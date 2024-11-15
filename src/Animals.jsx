function ListItem(props) {
    return props.eachAnimal.startsWith('L') && <li>{props.eachAnimal}</li>;
}

function List(props) {
    return (
      <ul>
        {props.animalsList.map((animal) => {
          return <ListItem key={animal} eachAnimal={animal} />;
        })}
      </ul>
    );
}

function AnimalsList() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List animalsList={animals} />
      </div>
    );
}

export { AnimalsList };