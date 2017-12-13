const blogs = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [action.blog, ...state];
    case 'DELETE_BLOG':
      const blogId = action.data;
      return state.filter(blog => blog.id !== blog.id);
    case 'EDIT_BLOG':
      const { id, name, body } = action.data;
      return state.map(blog => {
        if (blog.id === id) {
          blog.name = name;
          blog.body = body;
        }
        return blog;
      })
    default:
      return state;
  }
}

export default blogs;
