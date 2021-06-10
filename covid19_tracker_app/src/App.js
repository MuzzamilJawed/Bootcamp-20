import React, { useEffect,useState} from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
// import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css'
import axios from './axios';


function App() {
    const [totalConfimed, setTotalConfirmed] = useState(0);
    const [totalRecovered, setTotalRecovered] = useState(0);
    const [totalDeaths, setTotalDeaths] = useState(0);
    const [lastUpdated, setLastUpdated] = useState(0);
    const [loading, setLoading] = useState(0);

    //componentDidMount
    useEffect(() => {
        setLoading(true);
        axios.get('/summary')
        .then(res =>{
            setLoading(false);
          console.log(res);
          if(res.status === 200){
              setTotalConfirmed(res.data.Global.TotalConfirmed);
              setTotalRecovered(res.data.Global.TotalRecovered);
              setTotalDeaths(res.data.Global.TotalDeaths);
              setLastUpdated(res.data.Date);

          }
          console.log(totalRecovered);
      })
      .catch(error => {
          console.log(error);
      })
    }, []);

    if(loading){
        return <p>Fetching data from api..</p>
    }
    return (
        <div className ={styles.container}>
            <Cards 
                totalConfimed={totalConfimed}
                totalRecovered={totalRecovered}
                totalDeaths={totalDeaths}     
                lastUpdated={lastUpdated}
            />
            <CountryPicker/>
            <Chart/>
            
        </div>
    );
}

export default App;

