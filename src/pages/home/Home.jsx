import Navbar from "../../components/Navbar/Navbar"
import "./Home.scss"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
const Home = () => {
  return (
    <div className='Home'>
        <Navbar/>
        <Featured /> 
        <List/>   
        <List/> 
        <List/> 
        <List/> 
    </div>
  )
}

export default Home