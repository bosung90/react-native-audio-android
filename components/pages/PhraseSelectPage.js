const React = require('react-native')

const {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TextInput,
	ListView,
	ToastAndroid,
	Platform,
} = React

const samplePhrases = [
	'A mixture of spices.',
	'Many kinds of foods.',
	'World famous chocolates.',
	'My favorite drink',
	'A very good cook.',
	'Made with cream.',
	'Follow the recipe.',
	'My compliments to the chef',
	'The portions are generous',
]

const PhraseSelectPage = React.createClass({
	getInitialState() {
		const ds = new ListView.DataSource({ rowHasChanged(r1, r2){ r1 !== r2 } })
		return {
			dataSource: ds.cloneWithRows(samplePhrases),
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
	renderPhraseHeader() {
		return (
			<View style={[styles.phraseHeader, this.props.route.categoryColor]}>
				<Text style={[styles.white, {fontSize: 19}]}>{this.props.route.categoryFull}</Text>
			</View>
		)
	},
	renderSectionHeader() {
		return (
			<View style={styles.sectionHeader}>
				<Text style={{fontSize: 24, color: '#384C61'}}>Select a phrase:</Text>
			</View>
		)
	},
	renderPhraseRow(rowData) {
		return (
			<View style={styles.phraseRow}>
				<Text style={{color: '#7B7B7B'}}>{rowData}</Text>
				{/*<Text style={{color: '#7B7B7B'}}>{'>'}</Text>*/}
			</View>
		)
	},
	render() {
		return(
			<View style={[styles.container]}>
				{this.renderPhraseHeader()}
				{this.renderSectionHeader()}
				<View style={styles.listViewContainer}>
					<ListView dataSource={this.state.dataSource}
						renderRow={this.renderPhraseRow} />
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
	listViewContainer: {
		alignSelf: 'stretch',
		height: 440,
		backgroundColor: 'white',
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
	phraseRow: {
		height: 36,
		marginLeft: 12,
		justifyContent: 'center',
		// flexDirection: 'row',
		// alignItems: 'flex-start',
	},

})

module.exports = PhraseSelectPage
