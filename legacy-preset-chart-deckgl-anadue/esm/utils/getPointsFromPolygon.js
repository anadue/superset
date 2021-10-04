/** Format originally used by the Polygon plugin */

/**
 * Format that is geojson standard
 * https://geojson.org/geojson-spec.html
 */
export default function getPointsFromPolygon(feature) {
	console.log('Test by Ajay', feature)
  return 'geometry' in feature.polygon ? feature.polygon.geometry.coordinates[0] : feature.polygon;
}
