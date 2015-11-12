const React = require('react-native')

const {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TextInput,
} = React

let LoginPage = React.createClass({
	getInitialState() {
		return({
			ClientID: '',
			Username: '',
			Password: '',
		})
	},

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.welcome}>Log in to</Text>
				<Text style={styles.welcome}>your account</Text>
				<View>
					<TextInput style={styles.textInput}
						autoCorrect={false}
						placeholder='ClientID'
						onChangeText={(ClientID) => this.setState({ClientID})}
						value={this.state.ClientID} />
					<TextInput style={styles.textInput}
						autoCorrect={false}
						placeholder='Username'
						onChangeText={(Username) => this.setState({Username})}
						value={this.state.Username} />
					<TextInput style={styles.textInput}
						secureTextEntry={true}
						autoCorrect={false}
						placeholder='Password'
						onChangeText={(Password) => this.setState({Password})}
						value={this.state.Password} />
				</View>
				<TouchableHighlight underlayColor='clear' 
					onPress={this._onPressButton}>
					<View style={{backgroundColor: '#FEBD42', borderRadius: 25, width: 200 }}>
						<Text style={styles.loginText}>Log In</Text>
					</View>
				</TouchableHighlight>
				<TouchableHighlight underlayColor='clear' 
					onPress={this._onPressButton}>
					<View style={[{width: 200 }, styles.forgotPassword]}>
						<Text style={styles.forgotPassword}>Forgot password?</Text>
					</View>
				</TouchableHighlight>
			</View>
		)
	}
})

{/*<Image style={styles.button} 
							source={require('./img/login-button.png')} /> */}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#57BDCB',
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

module.exports = LoginPage
