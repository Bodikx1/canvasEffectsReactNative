'use strict';
import React from 'react-native';
var {
  View,
  Dimensions
} = React;

import Canvas from '../lib/v_2/Canvas';
import renderParticlesCanvas from './example_1/renderParticlesCanvas';

var DeviceDimensions = Dimensions.get('window');

var canvasApp = React.createClass({
  render: function() {
    return (
      <View>
        <Canvas
          context={{deviceDimensions: DeviceDimensions}}
          render={renderParticlesCanvas}
          style={{height: DeviceDimensions.height, width: DeviceDimensions.width}}
        />
      </View>
    );
  }
});

module.exports = canvasApp;
