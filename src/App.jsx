import Ability from './components/Ability'
import Companions from './components/Companions'
import Protagonist from './components/Protagonist'
import Historic from './components/historic'
import Projects from './components/projects'
import Store from './components/store'
export default function App(){
  return(
    <div id="Corpo">
      <div id='Header'>
      <Protagonist/>
      <Companions/>
      </div>
      <Ability/>
      <Historic/>
      <Projects/>
      <Store/>
    </div>
  )
}