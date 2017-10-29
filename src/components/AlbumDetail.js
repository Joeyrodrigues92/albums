import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//when you start to reference prop out of the prop obj more then once
//good convention to destructure that property of of our argument prop(album)

const AlbumDetail = ({ album }) => {
	//destructuring inside function body
	//since we also reference prop.album more then once we can desrcture that obj as well
	//let me get titile, artist, thumbnail_image from the album obj up above.
	const { title, artist, thumbnail_image, image, url } = album;
	
	//**line 16-18 notes before we deconstructered props obj**
	//				
	//				  
	//props are the props we want to recieve from AlbumList which we referenced as album
	return (
		<Card>
	{/*Card component will have 3  CardSections*/}
		{/* first section */}
			<CardSection> 
		{/*this will hold the images*/}
				<View style={styles.thumbnailContainerStyle}>
					{/* in order to render an image, we need a source prop (prop named source).
					an obj must be provided to the source prop, with a URI link to link to actual image*/}
					<Image
			//	in order for an image to be seen on screen must specify its width and height
						style={styles.thumbnailStyle}
						source={{ uri: thumbnail_image }} 
					/>	
				</View>

				<View style={styles.headerContentStyle}>
				{/*both text tags in THIS view tag will be passed to Card component as props.children*/}
				{/*this will hole the album title*/}
					<Text style={styles.headerTextStyle}>{title}</Text>
				{/*this will hole the artist name*/}
					<Text>{artist}</Text>
				</View>	
			</CardSection>

			{/*second section*/}	  
			<CardSection>
				<Image 
				style={styles.imageStyle}
				source={{ uri: image }} 
				/>
			</CardSection> 

		{/*third section*/}
			<CardSection>  
				{/*Button component*/}
				{/*we are passing a prop called on press.
					-you could change onPress to anything you want and it would still work
				 -Linking
				 	-Linking is a component imported from react-native
					-openURL() is a built in function
					-url is the url from the obj album*/}
				<Button onPress={() => Linking.openURL(url)}>
				 {/*now we can pass this text as props.children to the button component*/}
					Buy Now!
				</Button>
			</CardSection>
		</Card>
	);
};


const styles = {
	HeaderContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
	//flex and width it used so that the image can she stretched from left to right no matter the size of the screen
		flex: 1,
		width: null
	}
};

export default AlbumDetail; 