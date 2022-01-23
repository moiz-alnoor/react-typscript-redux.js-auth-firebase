import { createSlice } from '@reduxjs/toolkit'


interface UserState {
    name:  (string  | any),
    isLog: (boolean | any)
  }
 
const initialStateUser:UserState = { name: "", isLog:false}



if(initialStateUser.name === "" || initialStateUser .isLog  === false){

     initialStateUser.isLog = localStorage.getItem('isLog')
     initialStateUser.name  = localStorage.getItem('userName')

  }

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateUser },
  reducers: {
    login: (state, action) => {
      state.value = action.payload
      localStorage.setItem('isLog', state.value.isLog)
      localStorage.setItem('userName', state.value.name)
    },

    logout: (state) => {
      state.value = initialStateUser;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;


