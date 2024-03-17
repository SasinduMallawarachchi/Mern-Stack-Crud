import React,{ Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PostDetails from './components/PostDetails';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';


export default class App extends Component {
  
  render() {
    return (
      <BrowserRouter>  
      <AdminPanel/>
      <NavBar/>
      <div className="containerApp">
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" component={CreatePost}></Route>
        <Route path="/edit/:id" component={EditPost}></Route>
        <Route path="/post/:id" component={PostDetails}></Route>
      </div>
     <Footer/>
      </BrowserRouter>
    )
  }
}