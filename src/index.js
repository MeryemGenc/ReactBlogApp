import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux';
import { v4 as uuid } from 'uuid';


// const state = {

//   blog: [
//     {
//       id: 1,
//       title: 'blog1 title',
//       description: 'blog1 description',
//       dateAdded: 0
//     },
//     {
//       id: 2,
//       title: 'blog2 title',
//       description: 'blog2 description',
//       dateAdded: 0
//     }
//   ],
//   auth: {
//     userid: 1,
//     username: 'tonystark',
//     email: 'tonystark@gmail.com'
//   }
// }

// ACTION CREATOR



const addBlog = ({ title='',description='',dateAdded=0 }) => ({
  type: 'ADD_BLOG',
  blog: {
    id: uuid(),
    title: title,
    description: description,
    dateAdded: dateAdded
  }
});


const blogState = [];

const blogReducer = (state = blogState, action) => {
  switch(action.type){ 
    case 'ADD_BLOG':
      return [
        ...state,
        action.blog
      ]

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


store.dispatch(addBlog({title:'BLOGGGG 11',description:'DESCRIPTION 111111111'}))
store.dispatch(addBlog({title:'BLOGGGG 222211',description:'DESCRIPTION 1111122221111'}))




ReactDOM.render(

  <AppRouter />,

  document.getElementById('root')
);



reportWebVitals();
