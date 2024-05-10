import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Contact from './components/Contact';
// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode ('black')
      document.body.style.backgroundColor = 'black';
      showAlert(" Dark Mode has been enabled", "success");
    }
    else {
      setMode ('light')
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has been enabled", "success");
    }
  }

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <><Navbar title = "TextOps" mode = {mode} toggleMode = {toggleMode} Home = "Home" AboutTextOps = "About" ContactInfo = "Contact" DropdownInfo = "Dropdown" SearchBar = "Search" /> <Alert alert={alert} /> <div className="container my-3">
  //     <TextForm showAlert={showAlert} heading="Enter the text to convert" mode={mode} />
  //     </div> </>
  //   },
  //   {
  //     path: "/home",
  //     element: <><Navbar title = "TextOps" mode = {mode} toggleMode = {toggleMode} Home = "Home" AboutTextOps = "About" ContactInfo = "Contact" DropdownInfo = "Dropdown" SearchBar = "Search" /> <Alert alert={alert} /> <div className="container my-3">
  //     <TextForm showAlert={showAlert} heading="Enter the text to convert" mode={mode} />
  //     </div> </>
  //   },
    // {
    //   path: "/about",
    //   element: <> <Navbar title = "TextOps" mode = {mode} toggleMode = {toggleMode} Home = "Home" AboutTextOps = "About" ContactInfo = "Contact" DropdownInfo = "Dropdown" SearchBar = "Search" /> <Alert alert={alert} /> <About /> </>
    // },
    // {
    //   path: "/contact",
    //   element: <> <Navbar title = "TextOps" mode = {mode} toggleMode = {toggleMode} Home = "Home" AboutTextOps = "About" ContactInfo = "Contact" DropdownInfo = "Dropdown" SearchBar = "Search" /> <Alert alert={alert} /> <Contact /> </>
    // }
  // ]);

  return (
    <>
    {/* <RouterProvider router={router} /> */}
    <Navbar title = "TextOps" mode = {mode} toggleMode = {toggleMode} Home = "Home" AboutTextOps = "About" ContactInfo = "Contact" DropdownInfo = "Dropdown" SearchBar = "Search" /> <Alert alert={alert} /> <div className="container my-3"></div>
    <TextForm showAlert={showAlert} heading="Enter the text to convert" mode={mode} />
    </>
  );
}

export default App;
