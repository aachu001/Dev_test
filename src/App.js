import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';

/**
 * This component is main App component where we load content of the Application and 
 * include navigation to all other pages i.e, handle route to other pages
 * */ 

function App() {

  const [data, setData] = useState([]);
  
  // This fuction to get data from json file.
  const getData = () => {
    fetch('content.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson.pages)
      });
  }

  // call function to getData after component is mounted DOM
  useEffect(() => {
    getData()
  }, [])

  console.log(data);
  //console.log(data.pages[0]);
  return (
        // <div className="">
        //   {
        //     data.map((item)=><p>{item.title}</p>)
        //   }
        // </div>

    <BrowserRouter>
      <div className="background text-color " id="image">
        <Navbar />
        <Switch>
          
          {/* <Route exact path='/industries' component={() => <Marquee leaders={this.props.leaders} />} />} />
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
          <Route exact path='/contactus' component={() => <Contact resetFeedback={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
          <Redirect to="/home" /> */}
          
          {/* <Route exact path ='/industries' component={() => <Marquee type={data[0].title} blocks={data[0].blocks}/>} /> */}
          {["/", "/industries"].map((path) => (
            <Route key={path} exact path={path}>
              {data.length ? (
                <Marquee
                  type={data[0].title}
                  blocks={data[0].blocks}
                />
              ) : (
                <Marquee />
              )}
            </Route>
          ))}
          <Route exact path ='/services' component={() => <Marquee type={data[1].title} blocks={data[1].blocks}/>} />
          <Route exact path ='/about' component={() => <Marquee type={data[2].title} blocks={data[2].blocks}/>} />
          <Redirect to="/industries" /> 
        </Switch>
       
        
      </div>
    </BrowserRouter>
  );
}

export default App;
