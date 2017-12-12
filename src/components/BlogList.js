import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';
import { List } from 'semantic-ui-react';

const BlogList = ({ blogs }) => (
  <List>
    {blogs.map(t => <Blog key={t.id} {...t} /> )}
  </List>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs }
}

export default connect(mapStateToProps)(BlogList);
