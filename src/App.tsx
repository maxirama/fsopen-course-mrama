import Header from "./components/Header"
import Content from "./components/Content";
import Total from "./components/Total";


const App = () => {
  const mainTitle = 'Half Stack application development'
  const firstPart = {title: 'Fundamentals of React', exercises: 10};
  const secondPart = {title: 'Using props to pass data', exercises: 7};
  const thirdPart = {title: 'State of a component', exercises: 14};
  const parts = [firstPart, secondPart, thirdPart];
  
  const totalExercises = parts.reduce(
    (accumulator,currentValue)=> accumulator + currentValue.exercises,
    0
  );

  return (
    <div>
      <Header title={mainTitle}/>
      <Content content={parts} />
      <Total total={totalExercises}/>
    </div>
  )
}

export default App