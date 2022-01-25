import { createSlice } from "@reduxjs/toolkit"
import { firebase } from "../firebase/firebase"

interface UserState {
    name:  (string  | any),
    isLog: (boolean | any)
}

 // initial the store 
const initialStateUser:UserState = { name: "", isLog:false}
 // in case the store has lost the data 
if(initialStateUser.name === "" || initialStateUser.isLog  === false){
     initialStateUser.isLog = localStorage.getItem('isLog')
     initialStateUser.name  = localStorage.getItem('userName')
}

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateUser },
  reducers: {
    login: (state, action) => {
      state.value = action.payload
       // put  the store  data  in localStorage as backup
      localStorage.setItem('isLog', state.value.isLog)
      localStorage.setItem('userName', state.value.name)
    
    },

    logout: (state) => {
      state.value = initialStateUser
      // signOut form firebase too
      firebase.auth().signOut()
      localStorage.clear()
   
    },
  },
});

export const { login, logout } = userSlice.actions

export default userSlice.reducer


