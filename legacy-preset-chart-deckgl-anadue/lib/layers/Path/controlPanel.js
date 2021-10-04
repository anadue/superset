"use strict";

exports.__esModule = true;
exports.default = void 0;

var _chartControls = require("@superset-ui/chart-controls");

var _core = require("@superset-ui/core");

var _Shared_DeckGL = require("../../utilities/Shared_DeckGL");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  controlPanelSections: [_chartControls.sections.legacyRegularTime, {
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [[_Shared_DeckGL.lineColumn, _extends({}, _Shared_DeckGL.lineType, {
      choices: [['polyline', 'Polyline'], ['json', 'JSON']]
    })], ['row_limit', _Shared_DeckGL.filterNulls], ['adhoc_filters']]
  }, {
    label: (0, _core.t)('Map'),
    expanded: true,
    controlSetRows: [[_Shared_DeckGL.mapboxStyle, _Shared_DeckGL.viewport], ['color_picker', _Shared_DeckGL.lineWidth], [_Shared_DeckGL.reverseLongLat, _Shared_DeckGL.autozoom]]
  }, {
    label: (0, _core.t)('Advanced'),
    controlSetRows: [[_Shared_DeckGL.jsColumns], [_Shared_DeckGL.jsDataMutator], [_Shared_DeckGL.jsTooltip], [_Shared_DeckGL.jsOnclickHref]]
  }]
};
exports.default = _default;