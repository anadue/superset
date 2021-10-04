"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMapGl = require("react-map-gl");

var _deck = _interopRequireDefault(require("deck.gl"));

var _core = require("@superset-ui/core");

var _Tooltip = _interopRequireDefault(require("./components/Tooltip"));

require("mapbox-gl/dist/mapbox-gl.css");

require("./css/deckgl.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  const data = _taggedTemplateLiteralLoose(["\n  .deckgl-tooltip > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const TICK = 250; // milliseconds

const propTypes = {
  viewport: _propTypes.default.object.isRequired,
  layers: _propTypes.default.array.isRequired,
  setControlValue: _propTypes.default.func,
  mapStyle: _propTypes.default.string,
  mapboxApiAccessToken: _propTypes.default.string.isRequired,
  children: _propTypes.default.node,
  bottomMargin: _propTypes.default.number,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired
};
const defaultProps = {
  mapStyle: 'light',
  setControlValue: () => {},
  children: null,
  bottomMargin: 0
};

class DeckGLContainer extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setTooltip", tooltip => {
      this.setState({
        tooltip
      });
    });

    this.tick = this.tick.bind(this);
    this.onViewStateChange = this.onViewStateChange.bind(this); // This has to be placed after this.tick is bound to this

    this.state = {
      timer: setInterval(this.tick, TICK),
      tooltip: null,
      viewState: props.viewport
    };
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  onViewStateChange(_ref) {
    let {
      viewState
    } = _ref;
    this.setState({
      viewState,
      lastUpdate: Date.now()
    });
  }

  tick() {
    // Rate limiting updating viewport controls as it triggers lotsa renders
    const {
      lastUpdate
    } = this.state;

    if (lastUpdate && Date.now() - lastUpdate > TICK) {
      const setCV = this.props.setControlValue;

      if (setCV) {
        setCV('viewport', this.state.viewState);
      }

      this.setState({
        lastUpdate: null
      });
    }
  }

  layers() {
    // Support for layer factory
    if (this.props.layers.some(l => typeof l === 'function')) {
      return this.props.layers.map(l => typeof l === 'function' ? l() : l);
    }

    return this.props.layers;
  }

  render() {
    const {
      children,
      bottomMargin,
      height,
      width
    } = this.props;
    const {
      viewState,
      tooltip
    } = this.state;
    const adjustedHeight = height - bottomMargin;
    const layers = this.layers();
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
      style: {
        position: 'relative',
        width,
        height: adjustedHeight
      }
    }, _react.default.createElement(_deck.default, {
      initWebGLParameters: true,
      controller: true,
      width: width,
      height: adjustedHeight,
      layers: layers,
      viewState: viewState,
      onViewStateChange: this.onViewStateChange
    }, _react.default.createElement(_reactMapGl.StaticMap, {
      mapStyle: this.props.mapStyle,
      mapboxApiAccessToken: this.props.mapboxApiAccessToken
    })), children), _react.default.createElement(_Tooltip.default, {
      tooltip: tooltip
    }));
  }

}

DeckGLContainer.propTypes = propTypes;
DeckGLContainer.defaultProps = defaultProps;

var _default = (0, _core.styled)(DeckGLContainer)(_templateObject());

exports.default = _default;