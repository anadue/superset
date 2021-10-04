"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

var _thumbnail = _interopRequireDefault(require("./images/thumbnail.png"));

var _transformProps = _interopRequireDefault(require("../../transformProps"));

var _controlPanel = _interopRequireDefault(require("./controlPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const metadata = new _core.ChartMetadata({
  credits: ['https://uber.github.io/deck.gl'],
  description: '',
  name: (0, _core.t)('deck.glAnadue Arc'),
  thumbnail: _thumbnail.default,
  useLegacyApi: true
});

class ArcChartPluginAnadue extends _core.ChartPlugin {
  constructor() {
    super({
      loadChart: () => Promise.resolve().then(() => _interopRequireWildcard(require('./Arc'))),
      controlPanel: _controlPanel.default,
      metadata,
      transformProps: _transformProps.default
    });
  }

}

exports.default = ArcChartPluginAnadue;
