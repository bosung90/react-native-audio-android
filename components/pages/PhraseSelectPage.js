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
			<View style={[styles.container]}>
				<View style={[styles.phraseHeader, this.props.route.categoryColor]}>
					<Text style={[styles.white, {fontSize: 19}]}>{this.props.route.categoryFull}</Text>
				</View>
				<View style={[styles.sectionHeader]}>
					<Text style={{fontSize: 24, color: '#384C61'}}>Select a phrase:</Text>
				</View>
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
	},
	phraseHeader: {
		height: 100,
		justifyContent: 'flex-end',
		alignSelf: 'stretch',
		alignItems: 'center',
		paddingBottom: 8,
	},
	white: {
		color: 'white',
	},
	sectionHeader: {
		height: 60,
		backgroundColor: '#E7F8FA',
		justifyContent: 'center',
		alignSelf: 'stretch',
		alignItems: 'center',
		paddingBottom: 8,
		shadowOffset: {height: 2},
		shadowColor: 'black',
		shadowOpacity: 0.3,
	},
})

module.exports = PhraseSelectPage
