export const addBlog = (blog) => {
  return { type: 'ADD_BLOG', blog }
}

export const editBlog = (blog) => {
  return { type: 'EDIT_BLOG', blog }
}
