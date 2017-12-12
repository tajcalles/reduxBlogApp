const blogs = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [action.blog, ...state];
    case 'DELETE_BLOG':
      const blogId = action.data;
      return state.filter(blog => blog.id !== blog.id);
    default:
      return state;
  }
}

export default blogs;
