import { createSlice } from "@reduxjs/toolkit";

const vlogSlice = createSlice({
  name: "Vlog",
  initialState: {
    
    UservlogList: [
      {title:"food", date:"2072/34/5", name:"Monika",Blog:"very testy food ever"}
    ]
  },
  reducers: {

    addVlog:(state,actions)=>{
      state.UservlogList=[...state.UservlogList,actions.payload]
       },

},
});

export const {addVlog} = vlogSlice.actions;
export const SelectvlogSlice = (state) => state.Vlog.UservlogList;
export default vlogSlice.reducer;
