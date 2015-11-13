/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

const React = require('react-native')
const AudioAndroid = require('./custom_modules/android/AudioAndroid')
const LoginPage = require('./components/pages/LoginPage')

const {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Navigator,
} = React

const MyFirstReactNative = React.createClass({
	_record(){
		AudioAndroid.record()
	},
	_stop(){
		AudioAndroid.stop()
	},
	_play(){
		AudioAndroid.play()
	},
	render() {
		return (
			<Navigator initialRoute={{name: 'My First Scene', index: 0}} 
				renderScene={(route, navigator) => 
					<LoginPage name={route.name} 
						onForward={() => {
							var nextIndex = route.index + 1
							navigator.push({ name: 'Scene ' + nextIndex, index: nextIndex, })
						}}
						onBack={() => {
							if (route.index > 0) {
								navigator.pop()
							}
						}}
					/>
				}
			/>

		)
	}
})

{/*			<View style={styles.container}>
				<TouchableHighlight onPress={this._record}>
					<Text style={styles.welcome}>
						Record
					</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={this._stop}>
					<Text style={styles.welcome}>
						Stop
					</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={this._play}>
					<Text style={styles.welcome}>
						Play
					</Text>
				</TouchableHighlight>
			</View>*/}

const styles = StyleSheet.create({
		container: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#57BDCB',
		},
		welcome: {
				fontSize: 20,
				textAlign: 'center',
				margin: 10,
		},
		instructions: {
				textAlign: 'center',
				color: '#333333',
				marginBottom: 5,
		},
})

AppRegistry.registerComponent('MyFirstReactNative', () => MyFirstReactNative)
