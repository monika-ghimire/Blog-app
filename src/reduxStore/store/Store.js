import { configureStore } from "@reduxjs/toolkit";
import vlogReducer from "../reducer/vlogSlicer";

export default configureStore({
  reducer: {
    Vlog: vlogReducer
  }
});
