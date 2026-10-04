import Greeting from "./sampleComponent";
import Student from "./student";
import ClassComp from "./classComp";

 function App(){
  return(
    <>
    <h1>Functional Components</h1>
    <h1>Trails</h1>
    <h2>greeting person 1</h2>
    <Greeting />
    <br />
    <h2>greeting person 2</h2>
    <Greeting />

    <br />
    <br />

    <h1>Student details using components: </h1>
    <Student 
    name = "einstein"
    age = "999+"
    />

    <br />

    <Student 
    name = "newton"
    age = "888+"
    />

    <h1>Class Components</h1>
    <ClassComp />

    </>

  )
 }

 export default App