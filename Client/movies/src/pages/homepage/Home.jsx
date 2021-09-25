import Navbar from '../../components/topbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import { useState, useEffect } from 'react'
import './home.scss'
import axios from 'axios' 


const Home = ({type})  => {
    //states
   const [list, setList] = useState([])
   const [genre, setGenre] = useState(null)

   // get list of random movies from the API
    useEffect(() => {
       const getRandomMovieList = async() => {
            try{
               const res = await axios.get(
                `list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
                    headers: {
                        token: " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDQ5M2QwMzU3YmU3MTNlOGRkYmYzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjQ3NjQ5NywiZXhwIjoxNjMzMDgxMjk3fQ.u3AIUVnYm4uYvZEJ5_Q62GDts8EhYpTV2f7xq455uSU"
                    }
                }
              );
              setList(res.data)
            } catch(err) {
               console.log(err)
           }
       };
       getRandomMovieList();
   }, [type, genre]);
    return (
        <div className='home'>
             <Navbar />
             <Featured type={type} />
             {list.map((list) => (
                 <List list={list} />
             ))}
        </div>
    );
};
 
export default Home
