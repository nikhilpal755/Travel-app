
import { useState ,useEffect} from "react";
import Loading from "./loading";
import Items from "./items";
// Api
const url = "https://course-api.com/react-tours-project";

const App = () =>{

  // hooks
  const [loading, setLoading] = useState(true);
  const [items,setitems] = useState([]);

  //jaise hi app component mount hoga dom pe tb fetchingdata ko call kro
  useEffect(() => {
    fetchingData();
  }, [])

  // fetching data
  const fetchingData = async() =>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const data =await response.json();
      console.log(data);
      setLoading(false);
      setitems(data);
  
    }catch(err){
      console.log(err);
    }

  }
 
  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }

  // remove item
  const removeitem = (id) =>{
    const newitem = items.filter(tour => tour.id !== id);
    setitems(newitem);
  }

  // if list is empty
  if(items.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>no items left</h2>
          <button className='btn' onClick={() => fetchingData()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  
  return(
    <main>
      <Items items={items} removeitem={removeitem}/>
    </main>
  )
}

export default App;
