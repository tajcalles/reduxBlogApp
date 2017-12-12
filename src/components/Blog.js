import React from 'react';
import { connect } from 'react-redux';
import { List, Button } from 'semantic-ui-react';
import { deleteBlog } from '../actions/deleteBlog';
import blogs from '../actions/addBlog';

class Blog extends React.Component {
  // state = ({ name, body, id, dispatch })

  deleteBlog = (e) => {

  }

  render() {
    const { id, name, body, dispatch} = this.props
    return (
      <List.Item>
          {name}
          {body}
          <Button onClick={()=>this.toggleEdit}>Edit</Button>
          <Button negative onClick={()=> dispatch(deleteBlog()) }>Delete</Button>
      </List.Item>
    );
  }
}
  const mapStateToProps = (state) => {
    return { blog: state }
  }

export default connect(mapStateToProps)(Blog);
