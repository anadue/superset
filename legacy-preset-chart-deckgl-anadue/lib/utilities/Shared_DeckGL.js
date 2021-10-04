"use strict";

exports.__esModule = true;
exports.mapboxStyle = exports.reverseLongLat = exports.lineType = exports.multiplier = exports.pointRadiusFixed = exports.spatial = exports.viewport = exports.gridSize = exports.extruded = exports.stroked = exports.filled = exports.strokeColorPicker = exports.fillColorPicker = exports.lineWidth = exports.lineColumn = exports.legendPosition = exports.legendFormat = exports.jsOnclickHref = exports.jsTooltip = exports.jsDataMutator = exports.jsColumns = exports.dimension = exports.autozoom = exports.filterNulls = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@superset-ui/core");

var _chartControls = require("@superset-ui/chart-controls");

var _controls = require("./controls");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DEFAULT_VIEWPORT = {
  longitude: 6.85236157047845,
  latitude: 31.222656842808707,
  zoom: 1,
  bearing: 0,
  pitch: 0
};
const sandboxUrl = 'https://github.com/apache/incubator-superset/' + 'blob/master/superset-frontend/src/modules/sandbox.js';

const jsFunctionInfo = _react.default.createElement("div", null, (0, _core.t)('For more information about objects are in context in the scope of this function, refer to the'), _react.default.createElement("a", {
  href: sandboxUrl
}, (0, _core.t)(" source code of Superset's sandboxed parser"), "."), ".");

function jsFunctionControl(label, description, extraDescr, height, defaultText) {
  if (extraDescr === void 0) {
    extraDescr = null;
  }

  if (height === void 0) {
    height = 100;
  }

  if (defaultText === void 0) {
    defaultText = '';
  }

  return {
    type: 'TextAreaControl',
    language: 'javascript',
    label,
    description,
    height,
    default: defaultText,
    aboveEditorSection: _react.default.createElement("div", null, _react.default.createElement("p", null, description), _react.default.createElement("p", null, jsFunctionInfo), extraDescr),
    mapStateToProps: state => ({
      // eslint-disable-next-line no-negated-condition
      warning: !state.common.conf.ENABLE_JAVASCRIPT_CONTROLS ? (0, _core.t)('This functionality is disabled in your environment for security reasons.') : null,
      readOnly: !state.common.conf.ENABLE_JAVASCRIPT_CONTROLS
    })
  };
}

const filterNulls = {
  name: 'filter_nulls',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Ignore null locations'),
    default: true,
    description: (0, _core.t)('Whether to ignore locations that are null')
  }
};
exports.filterNulls = filterNulls;
const autozoom = {
  name: 'autozoom',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Auto Zoom'),
    default: true,
    renderTrigger: true,
    description: (0, _core.t)('When checked, the map will zoom to your data after each query')
  }
};
exports.autozoom = autozoom;
const dimension = {
  name: 'dimension',
  config: _extends({}, _chartControls.sharedControls.groupby, {
    label: (0, _core.t)('Dimension'),
    description: (0, _core.t)('Select a dimension'),
    multi: false,
    default: null
  })
};
exports.dimension = dimension;
const jsColumns = {
  name: 'js_columns',
  config: _extends({}, _chartControls.sharedControls.groupby, {
    label: (0, _core.t)('Extra data for JS'),
    default: [],
    description: (0, _core.t)('List of extra columns made available in Javascript functions')
  })
};
exports.jsColumns = jsColumns;
const jsDataMutator = {
  name: 'js_data_mutator',
  config: jsFunctionControl((0, _core.t)('Javascript data interceptor'), (0, _core.t)('Define a javascript function that receives the data array used in the visualization ' + 'and is expected to return a modified version of that array. This can be used ' + 'to alter properties of the data, filter, or enrich the array.'))
};
exports.jsDataMutator = jsDataMutator;
const jsTooltip = {
  name: 'js_tooltip',
  config: jsFunctionControl((0, _core.t)('Javascript tooltip generator'), (0, _core.t)('Define a function that receives the input and outputs the content for a tooltip'))
};
exports.jsTooltip = jsTooltip;
const jsOnclickHref = {
  name: 'js_onclick_href',
  config: jsFunctionControl((0, _core.t)('Javascript onClick href'), (0, _core.t)('Define a function that returns a URL to navigate to when user clicks'))
};
exports.jsOnclickHref = jsOnclickHref;
const legendFormat = {
  name: 'legend_format',
  config: {
    label: (0, _core.t)('Legend Format'),
    description: (0, _core.t)('Choose the format for legend values'),
    type: 'SelectControl',
    clearable: false,
    default: _controls.D3_FORMAT_OPTIONS[0],
    choices: _controls.D3_FORMAT_OPTIONS,
    renderTrigger: true
  }
};
exports.legendFormat = legendFormat;
const legendPosition = {
  name: 'legend_position',
  config: {
    label: (0, _core.t)('Legend Position'),
    description: (0, _core.t)('Choose the position of the legend'),
    type: 'SelectControl',
    clearable: false,
    default: 'tr',
    choices: [[null, 'None'], ['tl', 'Top left'], ['tr', 'Top right'], ['bl', 'Bottom left'], ['br', 'Bottom right']],
    renderTrigger: true
  }
};
exports.legendPosition = legendPosition;
const lineColumn = {
  name: 'line_column',
  config: {
    type: 'SelectControl',
    label: (0, _core.t)('Lines column'),
    default: null,
    description: (0, _core.t)('The database columns that contains lines information'),
    mapStateToProps: state => ({
      choices: (0, _controls.columnChoices)(state.datasource)
    }),
    validators: [_core.validateNonEmpty]
  }
};
exports.lineColumn = lineColumn;
const lineWidth = {
  name: 'line_width',
  config: {
    type: 'TextControl',
    label: (0, _core.t)('Line width'),
    renderTrigger: true,
    isInt: true,
    default: 10,
    description: (0, _core.t)('The width of the lines')
  }
};
exports.lineWidth = lineWidth;
const fillColorPicker = {
  name: 'fill_color_picker',
  config: {
    label: (0, _core.t)('Fill Color'),
    description: (0, _core.t)(' Set the opacity to 0 if you do not want to override the color specified in the GeoJSON'),
    type: 'ColorPickerControl',
    default: _controls.PRIMARY_COLOR,
    renderTrigger: true
  }
};
exports.fillColorPicker = fillColorPicker;
const strokeColorPicker = {
  name: 'stroke_color_picker',
  config: {
    label: (0, _core.t)('Stroke Color'),
    description: (0, _core.t)(' Set the opacity to 0 if you do not want to override the color specified in the GeoJSON'),
    type: 'ColorPickerControl',
    default: _controls.PRIMARY_COLOR,
    renderTrigger: true
  }
};
exports.strokeColorPicker = strokeColorPicker;
const filled = {
  name: 'filled',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Filled'),
    renderTrigger: true,
    description: (0, _core.t)('Whether to fill the objects'),
    default: true
  }
};
exports.filled = filled;
const stroked = {
  name: 'stroked',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Stroked'),
    renderTrigger: true,
    description: (0, _core.t)('Whether to display the stroke'),
    default: false
  }
};
exports.stroked = stroked;
const extruded = {
  name: 'extruded',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Extruded'),
    renderTrigger: true,
    default: true,
    description: 'Whether to make the grid 3D'
  }
};
exports.extruded = extruded;
const gridSize = {
  name: 'grid_size',
  config: {
    type: 'TextControl',
    label: (0, _core.t)('Grid Size'),
    renderTrigger: true,
    default: 20,
    isInt: true,
    description: (0, _core.t)('Defines the grid size in pixels')
  }
};
exports.gridSize = gridSize;
const viewport = {
  name: 'viewport',
  config: {
    type: 'ViewportControl',
    label: (0, _core.t)('Viewport'),
    renderTrigger: false,
    description: (0, _core.t)('Parameters related to the view and perspective on the map'),
    // default is whole world mostly centered
    default: DEFAULT_VIEWPORT,
    // Viewport changes shouldn't prompt user to re-run query
    dontRefreshOnChange: true
  }
};
exports.viewport = viewport;
const spatial = {
  name: 'spatial',
  config: {
    type: 'SpatialControl',
    label: (0, _core.t)('Longitude & Latitude'),
    validators: [_core.validateNonEmpty],
    description: (0, _core.t)('Point to your spatial columns'),
    mapStateToProps: state => ({
      choices: (0, _controls.columnChoices)(state.datasource)
    })
  }
};
exports.spatial = spatial;
const pointRadiusFixed = {
  name: 'point_radius_fixed',
  config: {
    type: 'FixedOrMetricControl',
    label: (0, _core.t)('Point Size'),
    default: {
      type: 'fix',
      value: 1000
    },
    description: (0, _core.t)('Fixed point radius'),
    mapStateToProps: state => ({
      datasource: state.datasource
    })
  }
};
exports.pointRadiusFixed = pointRadiusFixed;
const multiplier = {
  name: 'multiplier',
  config: {
    type: 'TextControl',
    label: (0, _core.t)('Multiplier'),
    isFloat: true,
    renderTrigger: true,
    default: 1,
    description: (0, _core.t)('Factor to multiply the metric by')
  }
};
exports.multiplier = multiplier;
const lineType = {
  name: 'line_type',
  config: {
    type: 'SelectControl',
    label: (0, _core.t)('Lines encoding'),
    clearable: false,
    default: 'json',
    description: (0, _core.t)('The encoding format of the lines'),
    choices: [['polyline', 'Polyline'], ['json', 'JSON'], ['geohash', 'geohash (square)']]
  }
};
exports.lineType = lineType;
const reverseLongLat = {
  name: 'reverse_long_lat',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Reverse Lat & Long'),
    default: false
  }
};
exports.reverseLongLat = reverseLongLat;
const mapboxStyle = {
  name: 'mapbox_style',
  config: {
    type: 'SelectControl',
    label: (0, _core.t)('Map Style'),
    clearable: false,
    renderTrigger: true,
    choices: [['mapbox://styles/mapbox/streets-v9', 'Streets'], ['mapbox://styles/mapbox/dark-v9', 'Dark'], ['mapbox://styles/mapbox/light-v9', 'Light'], ['mapbox://styles/mapbox/satellite-streets-v9', 'Satellite Streets'], ['mapbox://styles/mapbox/satellite-v9', 'Satellite'], ['mapbox://styles/mapbox/outdoors-v9', 'Outdoors']],
    default: 'mapbox://styles/mapbox/light-v9',
    description: (0, _core.t)('Base layer map style')
  }
};
exports.mapboxStyle = mapboxStyle;