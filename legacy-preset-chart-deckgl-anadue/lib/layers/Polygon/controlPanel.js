"use strict";

exports.__esModule = true;
exports.default = void 0;

var _chartControls = require("@superset-ui/chart-controls");

var _core = require("@superset-ui/core");

var _controls = _interopRequireDefault(require("../../utilities/controls"));

var _utils = require("../../utilities/utils");

var _Shared_DeckGL = require("../../utilities/Shared_DeckGL");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  controlPanelSections: [_chartControls.sections.legacyRegularTime, {
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [[_extends({}, _Shared_DeckGL.lineColumn, {
      label: (0, _core.t)('Polygon Column')
    }), _extends({}, _Shared_DeckGL.lineType, {
      label: (0, _core.t)('Polygon Encoding')
    })], ['adhoc_filters'], ['metric', _extends({}, _Shared_DeckGL.pointRadiusFixed, {
      label: (0, _core.t)('Elevation')
    })], ['row_limit', null], [_Shared_DeckGL.reverseLongLat, _Shared_DeckGL.filterNulls]]
  }, {
    label: (0, _core.t)('Map'),
    expanded: true,
    controlSetRows: [[_Shared_DeckGL.mapboxStyle, _Shared_DeckGL.viewport], [_Shared_DeckGL.autozoom, null]]
  }, {
    label: (0, _core.t)('Polygon Settings'),
    expanded: true,
    controlSetRows: [[_Shared_DeckGL.fillColorPicker, _Shared_DeckGL.strokeColorPicker], [_Shared_DeckGL.filled, _Shared_DeckGL.stroked], [_Shared_DeckGL.extruded, _Shared_DeckGL.multiplier], [_Shared_DeckGL.lineWidth, null], ['linear_color_scheme', {
      name: 'opacity',
      config: {
        type: 'SliderControl',
        label: (0, _core.t)('Opacity'),
        default: 80,
        step: 1,
        min: 0,
        max: 100,
        renderTrigger: true,
        description: (0, _core.t)('Opacity, expects values between 0 and 100')
      }
    }], [{
      name: 'num_buckets',
      config: {
        type: 'SelectControl',
        multi: false,
        freeForm: true,
        label: (0, _core.t)('Number of buckets to group data'),
        default: 5,
        choices: (0, _utils.formatSelectOptions)([2, 3, 5, 10]),
        description: (0, _core.t)('How many buckets should the data be grouped in.'),
        renderTrigger: true
      }
    }, {
      name: 'break_points',
      config: {
        type: 'SelectControl',
        multi: true,
        freeForm: true,
        label: (0, _core.t)('Bucket break points'),
        choices: (0, _utils.formatSelectOptions)([]),
        description: (0, _core.t)('List of n+1 values for bucketing metric into n buckets.'),
        renderTrigger: true
      }
    }], [{
      name: 'table_filter',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Emit Filter Events'),
        renderTrigger: true,
        default: false,
        description: (0, _core.t)('Whether to apply filter when items are clicked')
      }
    }, {
      name: 'toggle_polygons',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Multiple filtering'),
        renderTrigger: true,
        default: true,
        description: (0, _core.t)('Allow sending multiple polygons as a filter event')
      }
    }], [_Shared_DeckGL.legendPosition, _Shared_DeckGL.legendFormat]]
  }, {
    label: (0, _core.t)('Advanced'),
    controlSetRows: [[_Shared_DeckGL.jsColumns], [_Shared_DeckGL.jsDataMutator], [_Shared_DeckGL.jsTooltip], [_Shared_DeckGL.jsOnclickHref]]
  }],
  controlOverrides: {
    metric: {
      validators: []
    },
    time_grain_sqla: _controls.default
  }
};
exports.default = _default;