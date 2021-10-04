"use strict";

exports.__esModule = true;
exports.default = void 0;

var _chartControls = require("@superset-ui/chart-controls");

var _core = require("@superset-ui/core");

var _controls = _interopRequireWildcard(require("../../utilities/controls"));

var _utils = require("../../utilities/utils");

var _Shared_DeckGL = require("../../utilities/Shared_DeckGL");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  controlPanelSections: [_chartControls.sections.legacyRegularTime, {
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [[{
      name: 'start_spatial',
      config: {
        type: 'SpatialControl',
        label: (0, _core.t)('Start Longitude & Latitude'),
        validators: [_core.validateNonEmpty],
        description: (0, _core.t)('Point to your spatial columns'),
        mapStateToProps: state => ({
          choices: (0, _controls.columnChoices)(state.datasource)
        })
      }
    }, {
      name: 'end_spatial',
      config: {
        type: 'SpatialControl',
        label: (0, _core.t)('End Longitude & Latitude'),
        validators: [_core.validateNonEmpty],
        description: (0, _core.t)('Point to your spatial columns'),
        mapStateToProps: state => ({
          choices: (0, _controls.columnChoices)(state.datasource)
        })
      }
    }], ['row_limit', _Shared_DeckGL.filterNulls], ['adhoc_filters']]
  }, {
    label: (0, _core.t)('Map'),
    controlSetRows: [[_Shared_DeckGL.mapboxStyle, _Shared_DeckGL.viewport], [_Shared_DeckGL.autozoom, null]]
  }, {
    label: (0, _core.t)('Arc'),
    controlSetRows: [['color_picker', {
      name: 'target_color_picker',
      config: {
        label: (0, _core.t)('Target Color'),
        description: (0, _core.t)('Color of the target location'),
        type: 'ColorPickerControl',
        default: _controls.PRIMARY_COLOR,
        renderTrigger: true
      }
    }], [_extends({}, _Shared_DeckGL.dimension, {
      label: (0, _core.t)('Categorical Color'),
      description: (0, _core.t)('Pick a dimension from which categorical colors are defined')
    }), 'color_scheme', 'label_colors'], [{
      name: 'stroke_width',
      color: {
        type: 'SelectControl',
        freeForm: true,
        label: (0, _core.t)('Stroke Width'),
        validators: [_core.legacyValidateInteger],
        default: null,
        renderTrigger: true,
        choices: (0, _utils.formatSelectOptions)([1, 2, 3, 4, 5])
      }
    }, _Shared_DeckGL.legendPosition], [_Shared_DeckGL.legendFormat, null]]
  }, {
    label: (0, _core.t)('Advanced'),
    controlSetRows: [[_Shared_DeckGL.jsColumns], [_Shared_DeckGL.jsDataMutator], [_Shared_DeckGL.jsTooltip], [_Shared_DeckGL.jsOnclickHref]]
  }],
  controlOverrides: {
    size: {
      validators: []
    },
    time_grain_sqla: _controls.default
  }
};
exports.default = _default;
