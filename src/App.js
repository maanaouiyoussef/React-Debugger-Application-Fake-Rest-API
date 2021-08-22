import Header from "./components/Header";
import {useState,useEffect} from "react"
import Bugs from "./components/Bugs";
import AddBug from "./components/AddBug";

function App() {

  const [bugs, setBugs] = useState([])


  // API json server 
  const getBugs = useEffect(async () => {
    const data = await fetchBugs(); 
    setBugs(data)
  }, [])


  // GET All
  const fetchBugs = async () => {
    const res = await fetch('http://localhost:8355/bugs')
    const data = await res.json()

    return data;
  }

  // GET by id 
  const fetchBug = async (id) => {
    const res = await fetch(`http://localhost:8355/bugs/${id}`)
    const data = await res.json()

    return data;
  }


  // HTTP - POST 
  // Add Bug 
  const addBug = async (bug) => {
    const randomId = Math.floor(Math.random()* 1000) + 1; 
    const newObject = {id: randomId, ...bug}; 

    await fetch('http://localhost:8355/bugs',{
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      }, 
      body: JSON.stringify(newObject)
    })
    setBugs([...bugs, newObject])
  }

  // HTTP - DELETE 
  // Delete Bug 
  const deleteBug = async (id) => {

    await fetch(`http://localhost:8355/bugs/${id}`,{
      method: 'DELETE', 
    })

    setBugs(bugs.filter(bug => {
      if(bug.id !== id) {
        return bug;
      }
    }))
  }

  // HTTP - PUT 
  // Toggle Reminder 
  const toggleReminder = async (id) => {

    const singleBug =  await fetchBug(id); 
    const updatedBug = {...singleBug, reminder: !singleBug.reminder}

    await fetch(`http://localhost:8355/bugs/${id}`,{
      method: 'PUT', 
      headers: {
        'content-type': 'application/json'
      }, 
      body: JSON.stringify(updatedBug)
    })

    setBugs(bugs.map(bug => (
      bug.id === id ? {...bug, reminder: !bug.reminder} : bug
    )))
  }

  // Toggle ADD BUG Form
  const [show, setShow] = useState(false)

  const showForm = () => {
    console.log(show)
    setShow(!show)
  } 

  // Toggle Background 
  const [back,setBack] = useState(false)
  
  function ToggleBackVariable(booling) {
    setBack(booling)
  }

  return (
    <div className="container" style={{backgroundColor: back ? 'black':'white',
    color: back ? 'white':'black'}}>
      <Header appTitle='DebuGR' onAdd={showForm} onChangeBgColor={ToggleBackVariable} show={show}  />

      {
        show && <AddBug onInsert={addBug} />
      }
      
      <Bugs back={back} bugs={bugs} onDelete={deleteBug} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
