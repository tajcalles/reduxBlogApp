import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';

const App = () => (
  <Segment>
    <Navbar />
    <BlogForm />
    <Divider>
    </Divider>
    <BlogList />
  </Segment>
)

export default App;
