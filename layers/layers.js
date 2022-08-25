var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_india_states_1 = new ol.format.GeoJSON();
var features_india_states_1 = format_india_states_1.readFeatures(json_india_states_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_india_states_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_india_states_1.addFeatures(features_india_states_1);
var lyr_india_states_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_india_states_1, 
                style: style_india_states_1,
                interactive: true,
                title: '<img src="styles/legend/india_states_1.png" /> india_states'
            });
var format_link_results_shapefile_2 = new ol.format.GeoJSON();
var features_link_results_shapefile_2 = format_link_results_shapefile_2.readFeatures(json_link_results_shapefile_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_link_results_shapefile_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_link_results_shapefile_2.addFeatures(features_link_results_shapefile_2);
var lyr_link_results_shapefile_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_link_results_shapefile_2, 
                style: style_link_results_shapefile_2,
                interactive: true,
                title: '<img src="styles/legend/link_results_shapefile_2.png" /> link_results_shapefile'
            });

lyr_OSMStandard_0.setVisible(true);lyr_india_states_1.setVisible(true);lyr_link_results_shapefile_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_india_states_1,lyr_link_results_shapefile_2];
lyr_india_states_1.set('fieldAliases', {'State': 'State', });
lyr_link_results_shapefile_2.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Reservoir': 'Reservoir', '100__Area': '100__Area', '75__Area__': '75__Area__', '50__Area__': '50__Area__', '25__Area__': '25__Area__', '10__Area__': '10__Area__', 'Solar_CF__': 'Solar_CF__', 'Solar_LCOE': 'Solar_LCOE', '100__Area_': '100__Area_', '75__Area_I': '75__Area_I', '50__Area_I': '50__Area_I', '25__Area_I': '25__Area_I', '10__Area_I': '10__Area_I', '100__Area1': '100__Area1', '75__Area_a': '75__Area_a', '50__Area_a': '50__Area_a', '25__Area_a': '25__Area_a', '10__Area_a': '10__Area_a', 'Reservoi_1': 'Reservoi_1', 'Score': 'Score', });
lyr_india_states_1.set('fieldImages', {'State': '', });
lyr_link_results_shapefile_2.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Reservoir': 'TextEdit', '100__Area': 'TextEdit', '75__Area__': 'TextEdit', '50__Area__': 'TextEdit', '25__Area__': 'TextEdit', '10__Area__': 'TextEdit', 'Solar_CF__': 'TextEdit', 'Solar_LCOE': 'TextEdit', '100__Area_': 'TextEdit', '75__Area_I': 'TextEdit', '50__Area_I': 'TextEdit', '25__Area_I': 'TextEdit', '10__Area_I': 'TextEdit', '100__Area1': 'TextEdit', '75__Area_a': 'TextEdit', '50__Area_a': 'TextEdit', '25__Area_a': 'TextEdit', '10__Area_a': 'TextEdit', 'Reservoi_1': 'TextEdit', 'Score': 'TextEdit', });
lyr_india_states_1.set('fieldLabels', {'State': 'no label', });
lyr_link_results_shapefile_2.set('fieldLabels', {'Latitude': 'no label', 'Longitude': 'no label', 'Reservoir': 'no label', '100__Area': 'no label', '75__Area__': 'no label', '50__Area__': 'no label', '25__Area__': 'no label', '10__Area__': 'no label', 'Solar_CF__': 'no label', 'Solar_LCOE': 'no label', '100__Area_': 'no label', '75__Area_I': 'no label', '50__Area_I': 'no label', '25__Area_I': 'no label', '10__Area_I': 'no label', '100__Area1': 'no label', '75__Area_a': 'no label', '50__Area_a': 'no label', '25__Area_a': 'no label', '10__Area_a': 'no label', 'Reservoi_1': 'no label', 'Score': 'no label', });
lyr_link_results_shapefile_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});