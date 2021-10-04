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
import { Preset } from '@superset-ui/core';
import ArcChartPluginAnadue from './layers/Arc';
import GeoJsonChartPluginAnadue from './layers/Geojson';
import GridChartPluginAnadue from './layers/Grid';
import HexChartPluginAnadue from './layers/Hex';
import MultiChartPluginAnadue from './Multi';
import PathChartPluginAnadue from './layers/Path';
import PolygonChartPluginAnadue from './layers/Polygon';
import ScatterChartPluginAnadue from './layers/Scatter';
import ScreengridChartPluginAnadue from './layers/Screengrid';

import ArcChartPlugin from '@superset-ui/legacy-preset-chart-deckgl/esm/layers/Arc';
import PolygonChartPlugin from '@superset-ui/legacy-preset-chart-deckgl/esm/layers/Polygon';
import GeoJsonChartPlugin from '@superset-ui/legacy-preset-chart-deckgl/esm/layers/Geojson';
import GridChartPlugin from '@superset-ui/legacy-preset-chart-deckgl/esm/layers/Grid';
import HexChartPlugin from '@superset-ui/legacy-preset-chart-deckgl/esm/layers/Hex';
import MultiChartPlugin from '@superset-ui/legacy-preset-chart-deckgl/esm/Multi';
import PathChartPlugin from '@superset-ui/legacy-preset-chart-deckgl/esm/layers/Path';
import ScatterChartPlugin from '@superset-ui/legacy-preset-chart-deckgl/esm/layers/Scatter';
import ScreengridChartPlugin from '@superset-ui/legacy-preset-chart-deckgl/esm/layers/Screengrid';




export default class DeckGLChartPresetAnadue extends Preset {
  constructor() {
    super({
      name: 'deck.gl charts',
      plugins: [
      
      new ArcChartPluginAnadue().configure({
        key: 'deck_arc_anadue'
      }),
      new PolygonChartPluginAnadue().configure({
        key: 'deck_polygon_anadue'
      }),
      new GeoJsonChartPluginAnadue().configure({
        key: 'deck_geojson_anadue'
      }), new GridChartPluginAnadue().configure({
        key: 'deck_grid_anadue'
      }), new HexChartPluginAnadue().configure({
        key: 'deck_hex_anadue'
      }), new MultiChartPluginAnadue().configure({
        key: 'deck_multi_anadue'
      }), new PathChartPluginAnadue().configure({
        key: 'deck_path_anadue'
      }), new ScatterChartPluginAnadue().configure({
        key: 'deck_scatter_anadue'
      }), new ScreengridChartPluginAnadue().configure({
        key: 'deck_screengrid_anadue'
      }),


	      
      new ArcChartPlugin().configure({
        key: 'deck_arc'
      }),	      
      new GeoJsonChartPlugin().configure({
        key: 'deck_geojson'
      }), new GridChartPlugin().configure({
        key: 'deck_grid'
      }), new HexChartPlugin().configure({
        key: 'deck_hex'
      }), new MultiChartPlugin().configure({
        key: 'deck_multi'
      }), new PathChartPlugin().configure({
        key: 'deck_path'
      }), new PolygonChartPlugin().configure({
        key: 'deck_polygon'
      }), new ScatterChartPlugin().configure({
        key: 'deck_scatter'
      }), new ScreengridChartPlugin().configure({
        key: 'deck_screengrid'
      })]
    });
  }

}
