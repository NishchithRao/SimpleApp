import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import actions from './store/actions';

function App({history}) {
  const dispatch = useDispatch();
  const {loading,error} = useSelector(state => state);
  const start = () => {
    dispatch(actions.LOADING());
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      dispatch(actions.SET_DATA(data));
      dispatch(actions.LOADING());
      history.push("/users");
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
        <button onClick={start}>Start</button>
      </header>
    </div>
  );
}

export default App;
