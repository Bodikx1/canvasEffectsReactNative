'use strict';

var React = require('react-native');
var {
  View,
  WebView,
  Alert,
  Platform
} = React;

var Canvas = React.createClass({

  propTypes: {
    context: React.PropTypes.object,
    render: React.PropTypes.func.isRequired
  },

  render() {

    var contextString = JSON.stringify(this.props.context);
    var renderString = this.props.render.toString();

    var localPageUri = (Platform.OS === 'android' ? 'file:///android_asset/' : '/var/mobile/Applications/{GUID}/{appName}/www/' ) + 'index.html';

    return (
      <View>
        <WebView
          source={{uri: localPageUri}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={true}
          startInLoadingState={false}
          opaque={false}
          underlayColor={'transparent'}
          style={this.props.style}
        />
      </View>
    );
  }
});

module.exports = Canvas;
