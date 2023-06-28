import '../index.css'
import NavBar from '../components/NavBar'
import Information from '../components/Information'
import Skills from '../components/Skills'

function Home() {


  return (
    <>
<div className="seccion1">

<NavBar/>
<Information/>
</div>
<div className="seccion2">

  <Skills/>
</div>
    </>
  )
}

export default Home
