import React from 'react';
import { connect } from 'react-redux';
import { List, Button } from 'semantic-ui-react';
import { deleteBlog } from '../actions/deleteBlog';
import { editBlog } from '../actions/addBlog';
import blogs from '../actions/addBlog';

class Blog extends React.Component {
  state = { editing: false, name: this.props.name , body: this.props.body }

  editBlog = (e) => {
    return (
      <div/>
    )
  }

  handleChange = (e) => {

  }

  handleSubmit = (e) => {
    e.preventDefault();

  }

  toggleForm = () => {
    this.setState({ editing: !this.state.editing})
  }

  render() {
    const { id, name, body, dispatch } = this.props
    if (this.state.editing) {
      return (
        <div>
          { this.editBlog() }
          <Button negative onClick={()=> this.toggleForm()}>Delete</Button>
        </div>
      )
    } else {
      return (
        <List.Item>
          {name}
          {body}
          <Button onClick={()=> dispatch(editBlog(id)) }>Edit</Button>
          <Button negative onClick={()=> dispatch(deleteBlog()) }>Delete</Button>
          <Button orange onClick={()=> this.toggleForm()}>Hide This Content</Button>
        </List.Item>
      )
    }
  }
}
  const mapStateToProps = (state) => {
    return { blog: state }
  }

export default connect(mapStateToProps)(Blog);
