/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

const React = require('react-native')
const Route = require('./Route')

const {
	AppRegistry,
} = React

const MyFirstReactNative = React.createClass({
	render() {
		return (
			<Route />
		)
	}
})

AppRegistry.registerComponent('MyFirstReactNative', () => MyFirstReactNative)
