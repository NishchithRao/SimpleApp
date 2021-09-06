import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import actions from './store/actions';
import { Link } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const {loading,error,evenData,oddData} = useSelector(state => state);

  const start = () => {
    dispatch(actions.LOADING());
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      dispatch(actions.LOADING());
      console.log(data)
      let currentEvenData = data.filter(item => item.userId%2===0);
      let currentOddData = data.filter(item => item.userId%2!==0);
      dispatch(actions.SET_EVEN_DATA(currentEvenData));
      dispatch(actions.SET_ODD_DATA(currentOddData));
    })
    .catch(err => {
      dispatch(actions.LOADING());
      dispatch(actions.ERROR(JSON.stringify(err)));
    })
  }
  useEffect(()=> {
    dispatch(actions.ERROR(""));
  },[dispatch])
  if(loading) {
    return <div className="Loading">Loading...</div>
  }
  else
  if(error) {
    return <div className="Loading">{error}</div>
  }
  else
  return (
    <div className="App">
      <header className="App-header">
        <h1>API Fetch</h1>
        {(!evenData[0] || !oddData[0]) && <button onClick={start}>Fetch</button>}
        {(evenData[0] || oddData[0]) && 
        <div className="links">
        <Link to="/even">Even Users</Link>
        <Link to="/odd">Odd Users</Link>
        </div>
        }
      </header>
    </div>
  );
}

export default App;
