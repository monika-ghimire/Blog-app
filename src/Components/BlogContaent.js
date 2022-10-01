import React from "react";
import '../App.css';
import { useDispatch } from "react-redux";
import {addVlog} from '../reduxStore/reducer/vlogSlicer'
export default function BlogContaent() {
  const dispatch=useDispatch();

  const submitForm=(event)=>
  {
    event.preventDefault();
    let x=event.target;
    let newBlog={
      Title:x[0].value,
      Authorised:x[1].value,
      Date:x[2].value,
      Blog:x[3].value
    }
   
    console.log(newBlog)
    dispatch(addVlog(newBlog))
 
}
  return (
    <>
      <button
        type="button"
        class="btn CreatBlog"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
      >
        Created
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1>Make Your own Blog</h1>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form  onSubmit={submitForm}>
                <div class="mb-3">
                  <label for="title" class="col-form-label">
                  Title
                  </label>
                  <input type="text" class="form-control" id="title" />
                </div>
                <div class="mb-3">
                  <label for="Name" class="col-form-label">
                  Authorised:
                  </label>
                  <input type="text" class="form-control" id="Name" />
                </div> 
                <div class="mb-3">
                  <label for="Date" class="col-form-label">
                  Date:
                  </label>
                  <input type="Date" class="form-control" id="Date" />
                </div>
                <div class="mb-3">
                  <label for="Blog-text" class="col-form-label">
                    Blog :
                  </label>
                  <textarea class="form-control" id="Blog-text"></textarea>
                </div>
                <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Post blog
              </button>
            </div>
              </form>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
