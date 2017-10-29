import React from 'react';
import { View } from 'react-native';

//taking our props object from AlbumDetail
//             vv
const Card = (props) => {
	return(
	 <View style={styles.containerStyle}>
	 	{/*this is our props obj the album title from AlbumDetail component*/}
	 	{props.children}
	 </View>	
	);
 };

 //to style

const styles = {
	containerStyle: {
		borderWidth: 1,
		//round off corners
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginRight: 5,
		marginLeft: 5,
		marginTop: 10
	}
};


export default Card;

//the purpose of thise component is to make it look nice and wrap 
//existing component