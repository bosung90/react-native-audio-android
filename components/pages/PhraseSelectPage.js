const React = require('react-native')

const {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TextInput,
	ToastAndroid,
	Platform,
} = React

const PhraseSelectPage = React.createClass({
	getInitialState() {
		return {
		}
	},

	componentDidMount() {
		switch(this.props.route.category) {
			case 'city':
				break
			case 'food':
				break
			case 'nature':
				break
			case 'market':
				break
			case 'landmark':
				break
			case 'celebrate':
				break
			default:
				alert('Cannot find category')
				break
		}
	},
	render() {
		return(
			<View style={[styles.container, this.props.route.categoryColor]}>
				<Text>{this.props.route.categoryFull}</Text>
			</View>
		)
	}
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInput: {
		marginTop: 4,
		marginBottom: 4,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		width: 200,
		borderRadius: 10,
		backgroundColor: 'white',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	loginText: {
		margin: 4,
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	forgotPassword: {
		color: 'black',
		fontSize: 14,
		textDecorationLine: 'underline',
		textAlign: 'center',
		margin: 10,
	}
})

module.exports = PhraseSelectPage
