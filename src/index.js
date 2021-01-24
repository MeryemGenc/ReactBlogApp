import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux';
import { v4 as uuid } from 'uuid';






// ACTION CREATOR - addblog
const addBlog = ({ title='',description='',dateAdded=0 }) => ({
  type: 'ADD_BLOG',
  blog: {
    id: uuid(),
    title: title,
    description: description,
    dateAdded: dateAdded
  }
});

// ACTION CREATOR - removeblog
const removeBlog = ({ id }) => ({
  type: 'REMOVE_BLOG',
  id: id
});

// ACTION CREATOR - editblog
//id & updates obje olarak alınmıyor.
const editBlog = ( id, updates) => ({
  type: 'EDIT_BLOG',
  id,
  updates
});


const blogState = [];

const blogReducer = (state = blogState, action) => {
  switch(action.type){ 
    case 'ADD_BLOG':
      return [
        ...state,
        action.blog
      ]
    case 'REMOVE_BLOG':
      return state.filter(({id}) => {
        return id !== action.id;
      })
    case 'EDIT_BLOG':
      return state.map((blog) => {
        if (blog.id === action.id) {
          return {
            ...blog,
            ...action.updates
          }
        } else {
          return blog;
        }
      }) 

    default:
      return state;
  }
}

const authState = {};

const authReducer = (state = authState, action) => {
  switch(action.type){


    default: 
    return state;
  }
}

const store = createStore(
  //combineReducers store içerisine 2 reducer birden atanmasını sağlar.
  combineReducers({
    blogs: blogReducer,
    auth: authReducer
  })
);



store.subscribe(()=> {
  console.log(store.getState());
});


const blog1 = store.dispatch(addBlog({title:'BLOGGGG 11',description:'DESCRIPTION 111111111'}))
const blog2 = store.dispatch(addBlog({title:'BLOGGGG 222211',description:'DESCRIPTION 1111122221111'}))

store.dispatch(removeBlog({id: blog1.blog.id}));
store.dispatch(editBlog(blog2.blog.id , {title:'333333', description:'DESCRIPTION NEW'}));



ReactDOM.render(

  <AppRouter />,

  document.getElementById('root')
);



reportWebVitals();
