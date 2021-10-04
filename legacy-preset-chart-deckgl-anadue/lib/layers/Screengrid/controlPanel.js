"use strict";

exports.__esModule = true;
exports.default = void 0;

var _chartControls = require("@superset-ui/chart-controls");

var _core = require("@superset-ui/core");

var _controls = _interopRequireDefault(require("../../utilities/controls"));

var _Shared_DeckGL = require("../../utilities/Shared_DeckGL");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var _default = {
  controlPanelSections: [_chartControls.sections.legacyRegularTime, {
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [[_Shared_DeckGL.spatial, 'size'], ['row_limit', _Shared_DeckGL.filterNulls], ['adhoc_filters']]
  }, {
    label: (0, _core.t)('Map'),
    controlSetRows: [[_Shared_DeckGL.mapboxStyle, _Shared_DeckGL.viewport], [_Shared_DeckGL.autozoom, null]]
  }, {
    label: (0, _core.t)('Grid'),
    expanded: true,
    controlSetRows: [[_Shared_DeckGL.gridSize, 'color_picker']]
  }, {
    label: (0, _core.t)('Advanced'),
    controlSetRows: [[_Shared_DeckGL.jsColumns], [_Shared_DeckGL.jsDataMutator], [_Shared_DeckGL.jsTooltip], [_Shared_DeckGL.jsOnclickHref]]
  }],
  controlOverrides: {
    size: {
      label: (0, _core.t)('Weight'),
      description: (0, _core.t)("Metric used as a weight for the grid's coloring"),
      validators: [_core.validateNonEmpty]
    },
    time_grain_sqla: _controls.default
  }
};
exports.default = _default;