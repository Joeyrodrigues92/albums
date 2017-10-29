import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//we take in the onPress prop we created in AlbumDetail in out button tag
//also take in any children for the button, in this case it would be the 'buy now!' text
const Button = ({ onPress, children }) => {
	//we are taking in the onPress prop from parent component (AlbumDetail)
	return (

	//touchable opacity is just a fancy word for button, just fades the button when pressed 
	//to show user that the button pressed was registered

	//**to make sure button is pressed**
	//*running a faderal function passing to console.log('pressed!')
	//onPress={() => console.log('pressed')

//**this will not make our button reuable**
	//we can optonally add a prop to touchableOpacity, called onPress
	//expecting on onPress prop
	//when touchOpac pressed do 
	//this ..				vv	
	//						vv     
	//						vv	   
	//						vv
//************************* vv *********************************
//******this is the proper way to write a onPress function to mkae the component reusable********		 
	//when TouchOpa is pressed i want you run the function provided by the parent component 		
		<TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
			<Text style={styles.textStyle}>
			{/*this is where we use the button child*/}
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10

	},
	buttonStyle: {
//lets you fill up content as much as possible
		flex: 1,
//element positions itself
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
};

export default Button;