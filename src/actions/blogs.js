


import { v4 as uuid } from 'uuid';






// ACTION CREATOR - addblog
export const addBlog = ({ title='',description='',dateAdded=0 }) => ({
  type: 'ADD_BLOG',
  blog: {
    id: uuid(),
    title: title,
    description: description,
    dateAdded: dateAdded
  }
});

// ACTION CREATOR - removeblog
export const removeBlog = ({ id }) => ({
  type: 'REMOVE_BLOG',
  id: id
});

// ACTION CREATOR - editblog
//id & updates obje olarak alınmıyor.
export const editBlog = ( id, updates) => ({
  type: 'EDIT_BLOG',
  id,
  updates
});
