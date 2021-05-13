import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MessengerCustomerChat from 'react-messenger-customer-chat';
// import WhatsAppWidget from 'react-whatsapp-widget';
import Navigation from './Components/Navigation/Navigation';
// import 'react-whatsapp-widget/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Admin from './Components/Admin/Admin';
import { useEffect } from 'react';
import Client from './Components/Client/Client';
// import MyNav from './Components/MyNav/MyNav';
AOS.init();
export const UserContext = createContext();
function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [allProjects, setAllProjects] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [clients, setClients] = useState([]);
    useEffect(() =>{
      fetch("https://my-all-works-server.herokuapp.com/all-projects")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        const curData = data.filter(d => d.projectType !== "Ongoing");
        const onGoingData = data.filter(d => d.projectType === "Ongoing");
        let stack = [];
        curData.map(cd => stack.unshift(cd));
        onGoingData.map(od => stack.unshift(od));
        setAllProjects(stack);
        // setAllProjects(data);
      })

      fetch(`https://my-all-works-server.herokuapp.com/admins`)
      .then(res => res.json())
      .then(data => {
        //    console.log(data);
         setAdmins(data);
      })
      
      fetch(`https://my-all-works-server.herokuapp.com/all-blogs`)
      .then(res => res.json())
      .then(data => {
        //    console.log(data);
         setBlogs(data);
      })

    }, []);
    // console.log(allProjects);
    return (
    <div className="App text-light">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser, allProjects, setAllProjects, blogs, setBlogs, admins, setAdmins, clients, setClients]}>
        <Router>
          <Switch>
            <Route exact path="/">
              {/* <MyNav/> */}
              <Navigation/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute path="/admin">
              <Admin/>
            </PrivateRoute>
            <PrivateRoute path="/client">
              <Client/>
            </PrivateRoute>
            <Route path='*/:page'>
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
      <div className="bg-warning">
        <MessengerCustomerChat pageId="109101847984556" appId="481173423298646" />
      </div>
      {/* <WhatsAppWidget textReplyTime='Typically replies within a day' phoneNumber='+8801521108858' companyName="Md. Mehedi Hasan Khan" message="Hello! 👋🏼 What can I do for you?" sendButton="Send" /> */}
    </div>
  );
}

export default App;
