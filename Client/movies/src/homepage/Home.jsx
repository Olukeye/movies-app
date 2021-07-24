import Navbar from '../components/topbar/Navbar'
import Featured from '../components/featured/Featured'
import List from '../components/list/List'

import './home.scss'

const Home = ()  => {
    return (
        <div className='home'>
             <Navbar />
             <Featured  />
             <List />
        </div>
    )
}
 
export default Home
