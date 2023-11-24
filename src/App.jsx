
import Nav from './nav'
import data from "./data"
import Body from "./body"

function App() {

  const body = data.map((item) => {
    return(
      <Body
        key = {item.id}
        item = {item}
      />
    )
  })
  

  return (
    <div>
      <Nav/>
      {body}
    </div>
    
  )
}

export default App
