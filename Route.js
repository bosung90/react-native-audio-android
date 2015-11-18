/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

const React = require('react-native')
// const AudioAndroid = require('./custom_modules/android/AudioAndroid')
const LoginPage = require('./components/pages/LoginPage')
const CategoryPage = require('./components/pages/CategoryPage')
const PhraseSelectPage = require('./components/pages/PhraseSelectPage')
const RecordActivityPage = require('./components/pages/RecordActivityPage')

const {
	StyleSheet,
	Navigator,
} = React

const Route = React.createClass({
	// _record(){
	// 	AudioAndroid.record()
	// },
	// _stop(){
	// 	AudioAndroid.stop()
	// },
	// _play(){
	// 	AudioAndroid.play()
	// },
	renderPage(route, navigator) {
		switch (route.id) {
			case 'login':
				return <LoginPage navigator={navigator} />
			case 'category':
				return <CategoryPage navigator={navigator} />
			case 'phrase':
				return <PhraseSelectPage navigator={navigator} route={route} />
			case 'record':
				return <RecordActivityPage navigator={navigator}/>
			default:
				return <RecordActivityPage navigator={navigator} />
		}
	},

	render() {
		return (
			<Navigator initialRoute={{name: 'My First Scene', index: 0}}
				renderScene={this.renderPage}
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

module.exports = Route
