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

/* eslint camelcase: 0 */
import { getLayer as deck_grid_anadue } from './Grid/Grid';
import { getLayer as deck_screengrid_anadue } from './Screengrid/Screengrid';
import { getLayer as deck_path_anadue } from './Path/Path';
import { getLayer as deck_hex_anadue } from './Hex/Hex';
import { getLayer as deck_scatter_anadue } from './Scatter/Scatter';
import { getLayer as deck_geojson_anadue } from './Geojson/Geojson';
import { getLayer as deck_arc_anadue } from './Arc/Arc'; //Ajay Anadue changes
import { getLayer as deck_polygon_anadue } from './Polygon/Polygon';
const layerGenerators = {
  deck_grid_anadue,
  deck_screengrid_anadue,
  deck_path_anadue,
  deck_hex_anadue,
  deck_scatter_anadue,
  deck_geojson_anadue,
  deck_arc_anadue,   // Ajay anadue changes
  deck_polygon_anadue
};
export default layerGenerators;
