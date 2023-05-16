import './RandomAnimals.css';

const animals = [
  {
      title: 'Bear',
      src: require('./Media/Bear.jpeg')
  },
  {
    title: 'Hourse',
    src: require('./Media/Hourse.jpeg')
},
{
  title: 'Fox',
  src: require('./Media/Fox.jpeg')
},
{
  title: 'Tiger',
  src: require('./Media/Tiger.jpeg')
},
{
  title: 'Wolf',
  src: require('./Media/Wolf.jpeg')
},
]

const RandomAnimals = () => {
  const randomIndex = Math.floor(Math.random() * animals.length);
    const randomAnimal = animals[randomIndex];

  
  return (
    <div className='cardAnimals'>
      <h1>{randomAnimal.title}</h1>
      <img id='imageAnimals' src={randomAnimal.src} alt={randomAnimal.title}/>
    </div>
  );
}

export default RandomAnimals;
