import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import {clearData, fetchData, incrementId, decrementId, inputId} from './features/dataSlice.js'
import { useEffect } from 'react';

const mapStatetoProps = (state) => ({
  objectId: state.data.objectId
})

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  const renderImage = () => {
    if(data.apiData) {
      return <img style={{'width': '100vw'}} src={data.apiData.primaryImage}></img>
    } else {
      return <p>No image</p> 
    }
  }

  useEffect(() => {
    dispatch(fetchData())
  }), [props.objectId, dispatch]

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(fetchData())}>Trigger Thunk</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
      <input value={data.objectId} onChange={(e) => { 
        dispatch(inputId(Number(e.target.value)))
      }} />
      <div>
        <h1>{data.objectId}</h1>
        {renderImage()}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {{ objectId: state.data.objectId}}

export default App;
