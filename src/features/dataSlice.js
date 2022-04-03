import { bindActionCreators, createSlice } from '@reduxjs/toolkit';

const initialState = {
    objectId: 555,
    apiData: {}
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            return { ...state, apiData: action.payload}
        },
        clearData: () => {
            return initialState;
        },
        inputId: (state, action) => {
            return { ...state, objectId: action.payload }
        },
        incrementId: (state) => {
            return { ...state, objectId: action.payload }
        },
        decrementId: (state) => {
            return { ...state, objectId: state.objectId }
        }
    }
});

export const {setData, clearData, inputId, incrementId, decrementId} = dataSlice.actions;

export const fetchData = () => {
    const fetchDataThunk = async (dispatch, getState) => {
        let state = getState();
        const response = await fetch(`https://colectionapi,metmuseum.org/public/collection/v1/objects/${state.data}`);
        const jsonData = await response.json;
        dispatch(setData(jsonData));
    }
}

export default dataSlice.reducer;