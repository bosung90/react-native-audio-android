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

const CategoryPage = React.createClass({
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.welcome}>Log in to</Text>
				<Text style={styles.welcome}>your account</Text>
			</View>
		)
	}
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#57BDCB',
	},
})

module.exports = CategoryPage
