import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import RegistrationForm from './components/Main/RegistrationForm'
import RegistrationCompleting from './components/Main/RegistrationCompleting' 
import RegistrationFormName from './components/Main/RegistrationFormName'
import AuthorizationForm from './components/Main/AuthorizationForm'

import Main from './containers/Main'
import MainContent from './components/Main/MainContent'

import Persons from './components/Main/Persons'
import Albums from './components/Main/Albums/Albums'
import Stories from './components/Main/Stories/Stories'
import Services from './components/Main/Services'
import Learn from './components/Main/Learn'
import DownloadPhoto from './components/Main/Albums/DownloadPhoto'
import Detail from './components/Main/Stories/Detail'
import AddStory from './components/Main/Stories/AddStory'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path='/main' component={ Main } />
        <Route exact path='/form-name' component={ RegistrationFormName } />
        {/* <Route exact path='/main' component={ MainContent } /> */}
        <Route exact path='/persons' component={ Persons } />
        <Route exact path='/albums' component={ Albums } />
        <Route exact path='/albums/add' component={ DownloadPhoto } />
        <Route exact path='/stories' component={ Stories } />
        {/* There should be no exact path leading to the specific endpoint:
          '/storied:id' instead of '/stories/1') */}
        {/* <Route path='/stories/:id' component={ Detail } /> */}
        <Route exact path='/stories/1' component={ Detail } />
        <Route exact path='/stories/add' component={ AddStory } />
        <Route exact path='/services' component={ Services } />
        <Route exact path='/learn' component={ Learn } />
        
        <Redirect to='/main'/>
      </Switch>
    )
    
  } else {
    return (
      <Switch>
        <Route exact path='/register' component={ RegistrationForm } />
        <Route exact path='/check/auth-email' component={ RegistrationCompleting } />
        <Route exact path='/auth' component={ AuthorizationForm } />
  
        <Redirect to='/auth'/>
      </Switch>
    )
  }
}

// export default class Router extends Component {
//   // if (isAuthenticated) {
//     render() {
//       return (
//         <Switch>
//           <Route exact path='/main' component={ Main } />
//           <Route exact path='/form-name' component={ RegistrationFormName } />
//           {/* <Route exact path='/main' component={ MainContent } /> */}
//           <Route exact path='/persons' component={ Persons } />
//           <Route exact path='/albums' component={ Albums } />
//           <Route exact path='/albums/add' component={ DownloadPhoto } />
//           <Route exact path='/stories' component={ Stories } />
//           {/* There should be no exact path leading to the specific endpoint:
//             '/storied:id' instead of '/stories/1') */}
//           {/* <Route path='/stories/:id' component={ Detail } /> */}
//           <Route exact path='/stories/1' component={ Detail } />
//           <Route exact path='/stories/add' component={ AddStory } />
//           <Route exact path='/services' component={ Services } />
//           <Route exact path='/learn' component={ Learn } />
          
//           <Redirect to='/main'/>
//         </Switch>
//       )
//     }
    
  // } else {
  //   return (
  //     <Switch>
  //       <Route exact path='/register' component={ RegistrationForm } />
  //       <Route exact path='/check/auth-email' component={ RegistrationCompleting } />
  //       <Route exact path='/auth' component={ AuthorizationForm } />
  
  //       <Redirect to='/auth'/>
  //     </Switch>
  //   )
  // }
// }
