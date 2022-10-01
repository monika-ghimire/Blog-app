import { createSlice } from "@reduxjs/toolkit";

const vlogSlice = createSlice({
  name: "Vlog",
  initialState: {
    
    UservlogList: [
      {href:"blog-id", date:"2072/34/5", name:"Monika",Blog:"very testy food ever",id:0},
      {href:"blog-id", date:"2072/34/5", name:"Monika",Blog:"very testy food ever",id:1},
      {href:"blog-id", date:"2072/34/5", name:"Monika",Blog:"very testy food ever",id:2}
    ],
    blog:{href:"blog-id", date:"2072/34/5", name:"Monika",Blog:"very testy food ever",id:0},
  },

 

  reducers: {

    addVlog:(state,actions)=>{
      console.log("inside the action " )
      state.UservlogList=[...state.UservlogList,actions.payload]
       },

},
});

export const {addVlog} = vlogSlice.actions;
export const SelectvlogSlice = (state) => state.Vlog.UservlogList;
export const SelectSinglevlogSlice = (state) => state.Vlog.blog;
export default vlogSlice.reducer;
