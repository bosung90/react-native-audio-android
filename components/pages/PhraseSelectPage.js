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
	componentDidMount() {
		switch(this.props.category) {
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
			<View>
				<Text>PhraseSelectPage</Text>
			</View>
		)
	}
})

module.exports = PhraseSelectPage
