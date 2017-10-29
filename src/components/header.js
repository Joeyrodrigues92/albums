//import libraries for making component
import React from 'react';
import { Text, View } from 'react-native';

//make a component
	//always name function as the same as file name
	//props is bunch of data from parent component
	//we pass the props obj, creates reference from parent componenet
	//same thing as --> function Header(props){
	      //                 };
const  Header = (props) => {
	//destructoring 
	const { textStyle, viewStyle } = styles;

	return (
		//implement style to view tag
		<View style={viewStyle}>
		{/* USING A PROP 
			-first identify the var or value that we want to be provided by the parent component(we want the value for text tag)
			-second provide reference to the prop coming from parent component
			-third make sure parent component provides specific prop 
		    
		    parent component should be providing a header text prop
		    						      v      */}
			<Text style={textStyle}>{props.headerText}</Text>
		
		</View>
	);
};

//styling for component
const styles = {
	//will style view tags
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		//instead of a border we create a shadow of the border
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	//will style text tags
	textStyle: {
		fontSize: 20
	}
};



//make component avalible for other parts of the app
	//export lets componenets be usable in other components
	export default Header;


	//FLEXBOX -is a system of positioning elements within the container
		//JUSTIFYcontent- helps move something in the verticle direction
			//- 'flex-end'
			//- 'center'
			//- 'flex-start' (default)
		//ALIGNitems- helps move something left to right
			//- 'flex-end'
			//- 'center'
			//- 'flex-start' (default)