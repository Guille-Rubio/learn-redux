import { createSlice } from '@reduxjs/toolkit';

//Estado inicial
const initialState = { //Initial state is an object
    lightSwitch: 'off',
    lightColor: 'White',
    bulbList: []
};

//Slice with reducers
export const lightSwitchSlice = createSlice({
    name: 'light',//Reducer name
    initialState,//Initial state is loaded in the slice
    reducers: {
        toggle: (state) => {
            const newValue = state.lightSwitch === 'on' ? 'off' : 'on'
            return { ...state, lightSwitch: newValue } //This line copies the previous state, without modifying it and replaces just the ligthSwitch property

        },
        changeLightColor: (state, action) => {
            return { ...state, lightColor: action.payload };//se copia todo el estado y se añade la nueva propiedad

        },
        addBulb: (state, action) => {
            return { ...state, bulbList: [...state.bulbList, action.payload] };
        },
        deleteBulbList:(state)=>{
            return {...state,bulbList:[]}
        }
    }
});

//
export const { toggle, changeLightColor, addBulb, deleteBulbList } = lightSwitchSlice.actions;

//exports reducer to import to the store
export default lightSwitchSlice.reducer