function make_map (layerlist) {
  if (layerlist === undefined){
    layerlist = [ new ol.layer.Tile({
      source: new ol.source.OSM()
    })]
  }
  return new ol.Map({
  layers: layerlist,
    target: 'map',
    controls: ol.control.defaults({
      attributionOptions: {
        collapsible: false
      }
    }),
    view: new ol.View({
      center: [0, 0],
      zoom: 2
    })
  });
}

var map = make_map(); 

document.getElementById('zoom-out').onclick = function() {
  var view = map.getView();
  var zoom = view.getZoom();
  view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function() {
  var view = map.getView();
  var zoom = view.getZoom();
  view.setZoom(zoom + 1);
};
