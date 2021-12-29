import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/UserForm/Login';
import AuthProvider from './Components/Context/AuthProvider';
import Blog from './Pages/Blog/Blog';
import Event from './Pages/Event/Event';
import Donation from './Pages/Donation/Donation';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import Regester from './Components/UserForm/Regester';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
  <Router>
    <Header></Header>
  <Switch>
<Route exact path="/">
<Home></Home>
</Route>
<Route  path="/home">
<Home></Home>
</Route>
<PrivetRoute  path="/donate">
<Donation></Donation>
</PrivetRoute>
<PrivetRoute  path="/event">
<Event></Event>
</PrivetRoute>
<PrivetRoute  path="">
<Blog></Blog>
</PrivetRoute>
<Route path="/login">
  <Login></Login>
</Route>
<Route path="/register">
  <Regester></Regester>
</Route>
  </Switch>
  </Router>
  </AuthProvider>
    </div>
  );
}

export default App;
