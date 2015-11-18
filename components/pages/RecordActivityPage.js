const React = require('react-native')
const CharacterImage = require('./record_page_character.png')

const {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TextInput,
	ListView,
	ToastAndroid,
	Platform,
	Image,
} = React

const RecordActivityPage = React.createClass({
	render() {
		return(
			<View style={[styles.container]}>
				<View style={styles.phraseContainer}>
					<Text style={{color: '#6CC2C9', fontSize: 18}}>Record the following phrase:</Text>
					{/*<Image source={CharacterImage} style={{height: 100}} />*/}
				</View>
				<TouchableHighlight underlayColor='clear' style={{alignSelf: 'stretch',}}>
					<View style={styles.recoredButtonView}>
						<Text style={styles.buttonText}>M </Text>
						<Text style={styles.buttonText}>Tap this bar to record</Text>
					</View>
				</TouchableHighlight>
			</View>
		)
	}
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: '#E5F7F8',
	},
	phraseContainer: {
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: '#E5F7F8',
		height: 150,
	},
	recoredButtonView: {
		backgroundColor: '#F17443',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		height: 50,
	},
	buttonText: {
		color: 'white',
		fontSize: 18,
	},
})

module.exports = RecordActivityPage
