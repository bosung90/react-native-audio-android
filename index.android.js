/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

var React = require('react-native')
const AudioAndroid = require('./custom_modules/android/AudioAndroid')
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
} = React

var MyFirstReactNative = React.createClass({
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
					<Text style={styles.instructions}>
						Stop
					</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={this._play}>
					<Text style={styles.instructions}>
						Play
					</Text>
				</TouchableHighlight>
			</View>
		)
	}
})

var styles = StyleSheet.create({
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
