//albumList will be all the albums in  list, fetch data and render each album
//albumDetail will be each individual album and its info

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
//when we write CLASS BASED COMPONENTS we MUST define exactly the render method
	//only thing it is required to do is return JSX (form of the js language that we use in react/RN)
	//class components alos do not require the ;

//'extends Component' we indicate that we want to borrow a bunch of funcionality from the base component class (App)
class AlbumList extends Component{
	//state starts out as an empty list when we load this component
	state = { albums: [] };

	//LIFECYCLE METHODS
		//functions that will be placed on our class that will be automatically called at some point

	//anytime our component is about to be rendered this will automatically be called for us
		//good3 location to load/fetch data for application
	componentWillMount(){
		//console.log("component will mount");

		//using axios to 'fetch' our data
		//we then use a promis (.then) so we know that we recived tha data
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			//response is what comes back from the 'fetch'
			//we pass an obj of albums to this function setState
				//b/c we want to update albums in our state 
			.then(response => this.setState({ albums: response.data }));
	}
	//helper method to generate the list of albums
	//.map() is an array helper
	//only can be called on arrays(album is an [])
	renderAlbums(){
		//map through albums array, for each album mapped over, call the function with it, and put the title in a text tag
			//this will create a new array		
		return this.state.albums.map(album =>// 
	  //we need to pass this album as a prop to AlbumDetail 
	  //the album in curly braces is the new array from line 39, the property name is what we refrence									
	  //									v v v v v v
	  		<AlbumDetail key={album.title} album={album} />

		//when we show components that are in an array(we are producing an array)
		//each compomemt must have a key property associated with it
			//*the reason for this is for performance concerns*
		);
	}
	//render method here
	render() {
		//state with the data
		//console.log(this.state)
	return (
			<ScrollView>
				{/*Making a reference to render.albums
				which will show album titles*/}
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;

//STATE OF COMPONENT- plain js obj used to record and respond to user-triggered events

	//rules:
	//-when we need to update what a component shows, call this.setState
	//-only change state with 'setState', do not do 'this.state'
	//-only can be used in class based components

	//state handles changing the content on the screen
	//two possible state for this component:
		//1.state ={albums:[]} - no data, empty state
		
		//2.state ={
			//albums: [
			//{name:'blahblah'},
			//{name: 'blah'}
			//]
		//}; - full list of albums, data is present

	//anytime the STATE is changed the component automatically re-renders itself to the screen


//APPLICATION TIME-LINE
	//application boots up
	//RN decides to render 'app' to the screen
	//app decides to render itself, Header,and AlbumList
	//AlbumList gets initial state (which is empty)
	//AlbumList realizes its about to be rendered, calls componentWillMount
	//AlbumList makes 'fetch'(get) request
	//AlbumList render method is called
	//App, AlbumList, Header appear
	//'fetch' returns data
	//request handler call setState
	//AlbumList render method is called


