"use strict";

exports.__esModule = true;
exports.default = void 0;

var _chartControls = require("@superset-ui/chart-controls");

var _core = require("@superset-ui/core");

var _utils = require("../../utilities/utils");

var _controls = require("../../utilities/controls");

var _Shared_DeckGL = require("../../utilities/Shared_DeckGL");

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
    controlSetRows: [[{
      name: 'geojson',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('GeoJson Column'),
        validators: [_core.validateNonEmpty],
        description: (0, _core.t)('Select the geojson column'),
        mapStateToProps: state => ({
          choices: (0, _controls.columnChoices)(state.datasource)
        })
      }
    }, null], ['row_limit', _Shared_DeckGL.filterNulls], ['adhoc_filters']]
  }, {
    label: (0, _core.t)('Map'),
    controlSetRows: [[_Shared_DeckGL.mapboxStyle, _Shared_DeckGL.viewport] // TODO [autozoom, null], // import { autozoom } from './Shared_DeckGL'
    ]
  }, {
    label: (0, _core.t)('GeoJson Settings'),
    controlSetRows: [[_Shared_DeckGL.fillColorPicker, _Shared_DeckGL.strokeColorPicker], [_Shared_DeckGL.filled, _Shared_DeckGL.stroked], [_Shared_DeckGL.extruded, null], [{
      name: 'point_radius_scale',
      config: {
        type: 'SelectControl',
        freeForm: true,
        label: (0, _core.t)('Point Radius Scale'),
        validators: [_core.legacyValidateInteger],
        default: null,
        choices: (0, _utils.formatSelectOptions)([0, 100, 200, 300, 500])
      }
    }, null]]
  }, {
    label: (0, _core.t)('Advanced'),
    controlSetRows: [[_Shared_DeckGL.jsColumns], [_Shared_DeckGL.jsDataMutator], [_Shared_DeckGL.jsTooltip], [_Shared_DeckGL.jsOnclickHref]]
  }]
};
exports.default = _default;