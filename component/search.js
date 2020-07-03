import SearchBar from 'react-native-searchbar';
 
const items = [
  {{key: this.props.payload[0]["name"]},
  {key: this.props.payload[1]["name"]},
  {key: this.props.payload[2]["name"]},
  {key: this.props.payload[3]["name"]},
  {key: this.props.payload[4]["name"]},
  {key: this.props.payload[5]["name"]},
  {key: this.props.payload[6]["name"]},
  {key: this.props.payload[7]["name"]},
  {key: this.props.payload[8]["name"]},
  {key: this.props.payload[9]["name"]},}
]
...
_handleResults(results) {
  this.setState({ results });
}
...
 
...
<SearchBar
  ref={(ref) => this.searchBar = ref}
  data={items}
  handleResults={this._handleResults}
  showOnLoad
/>
...