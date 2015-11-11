/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

const React = require('react-native')
const AudioAndroid = require('./custom_modules/android/AudioAndroid')
const {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
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
			<View style={styles.container}>
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
			</View>
		)
	}
})

const styles = StyleSheet.create({
		container: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#F5FCFF',
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
