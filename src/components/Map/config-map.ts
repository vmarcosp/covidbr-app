import Leaftlet from 'leaflet'

// @ts-ignore
delete Leaftlet.Icon.Default.prototype._getIconUrl;

Leaftlet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('./pin-icon.svg'),
  iconUrl: require('./pin-icon.svg')
});
