import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';

const Blog = ({ name, body, id, dispatch }) => (
  <List.Item>
    {name}
    {body}
  </List.Item>
)

export default connect()(Blog);
