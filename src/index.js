import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './App.css';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';
import { addBlog, removeBlog, editBlog} from './actions/blogs';




const store = configureStore();


store.subscribe(()=> {
  console.log(store.getState());
});


const blog1 = store.dispatch(addBlog({title:'BLOGGGG 11',description:'DESCRIPTION 111111111'}))
const blog2 = store.dispatch(addBlog({title:'BLOGGGG 222211',description:'DESCRIPTION 1111122221111'}))
store.dispatch(addBlog({title:'BLOGGGG 555555511',description:'DESCRIPTION 11555551111'}))

store.dispatch(removeBlog({id: blog1.blog.id}));
store.dispatch(editBlog(blog2.blog.id , {title:'333333', description:'DESCRIPTION NEW'}));



ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,

  document.getElementById('root')
);



reportWebVitals();
