var React = require('react');
var ListItem = require('./ListItem.jsx');


var ingredients = [{ "id":1, "text":"hamburger"},{ "id":2, "text":"hamburger"},{ "id":3, "text":"hamburger"}]


var List = React.createClass({
    render: function() {
    	var ListItems = ingredients.map(function(item) {
    		return <ListItem key={item.id} ingredient={item.text} />;
    	});
    	return (<ul>{ListItems}</ul>);
    }
});

module.exports = List;