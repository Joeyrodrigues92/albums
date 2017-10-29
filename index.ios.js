//to place content on a screen you create a component
//component is an object that produces text or a shap that can be rendered onto the screen on mobile device
  
//import a library to help create a component
import React from 'react';
//when you import the react-native library, but dont want access to the whole library, i just want access to the AppRegistry property out of that library
	//destructured import is when you use the { } to grab something specific out of a library
import { AppRegistry, View } from 'react-native';
//we are importing our own file here, must provide file path in the string
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a component
  //define a component we write a js function
  //this is our App component 
const App = () => {
  //return renders text to the screen
  return (
  		//component nesting, when i want to place a component inside of another
  	//*PROP SYSTEM*
  		//headerText is a prop (property) .
  		//we use this system when we want to pass data from the parent component to child component 
  		//passing a prop allows the chil component to be reconfigured on the fly with new data
      //in order for us to scroll we need to add style flex 1, it makes the component fill the entire area of device
  <View style={{ flex: 1}}>{/*we use a view tag here, so we can have one top level tag. Example you cant do return 1;
                                                                                                            return 2; 
          they would have to be in the same return if you want to get 2, so to return everything we wrap it a top level tag to return evrything (View)*/}		    
          {/*propName={'Variable'}*/}
 	  <Header headerText={'Albums'} />
    <AlbumList />
  </View>  
    );
};

//render it to the device
	//only the 'root' component uses 'AppRegistry'
	//every react-native project atleast one component has to be registered to the application
	//this is aying react-native is about to render an application called albums
AppRegistry.registerComponent('albums', () => App);

//FUNCTIONAL COMPONENTS
  //-used for presenting static data(fixed data)
  //-cant handle fetching data
  //-easy to write
//*Example* const Header =() => {
//            return <Text>Hi you</Text>
//          };

//CLASS COMPONENTS
  //-Used for dynamic sources of data
  //-Handles any data that might change
  //-Knows when it get rendered to the device(useful for data fetching)
  //-more code to write 
  //*Example class Header extends Component{
  //          render(){
  //            return <Text>Hi there</Text>
  //            };
  //          };