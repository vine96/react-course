import Title from "./Title";

function App(){
  return (
    <div>
    <Title name="Vinicius" paragraph={false} />
    <Title name="Godofredo" paragraph={true} />
    <Title/>
    </div>
  )
  
}

export default App