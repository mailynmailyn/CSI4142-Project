var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HumanWildlifeInteraction_1 = new ol.format.GeoJSON();
var features_HumanWildlifeInteraction_1 = format_HumanWildlifeInteraction_1.readFeatures(json_HumanWildlifeInteraction_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HumanWildlifeInteraction_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HumanWildlifeInteraction_1.addFeatures(features_HumanWildlifeInteraction_1);
var lyr_HumanWildlifeInteraction_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HumanWildlifeInteraction_1, 
                style: style_HumanWildlifeInteraction_1,
                interactive: true,
    title: 'Human Wildlife Interaction<br />\
    <img src="styles/legend/HumanWildlifeInteraction_1_0.png" /> Black Bear<br />\
    <img src="styles/legend/HumanWildlifeInteraction_1_1.png" /> Grizzly Bear<br />'
        });
var format_RRFW_2 = new ol.format.GeoJSON();
var features_RRFW_2 = format_RRFW_2.readFeatures(json_RRFW_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RRFW_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RRFW_2.addFeatures(features_RRFW_2);
var lyr_RRFW_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RRFW_2, 
                style: style_RRFW_2,
                interactive: true,
    title: 'RRFW<br />\
    <img src="styles/legend/RRFW_2_0.png" /> Black Bear<br />\
    <img src="styles/legend/RRFW_2_1.png" /> Grizzly Bear<br />'
        });
var format_ManagementIntervention_3 = new ol.format.GeoJSON();
var features_ManagementIntervention_3 = format_ManagementIntervention_3.readFeatures(json_ManagementIntervention_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManagementIntervention_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManagementIntervention_3.addFeatures(features_ManagementIntervention_3);
var lyr_ManagementIntervention_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ManagementIntervention_3, 
                style: style_ManagementIntervention_3,
                interactive: true,
    title: 'Management Intervention<br />\
    <img src="styles/legend/ManagementIntervention_3_0.png" /> Black Bear<br />\
    <img src="styles/legend/ManagementIntervention_3_1.png" /> Grizzly Bear<br />'
        });
var format_Harassment_4 = new ol.format.GeoJSON();
var features_Harassment_4 = format_Harassment_4.readFeatures(json_Harassment_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Harassment_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Harassment_4.addFeatures(features_Harassment_4);
var lyr_Harassment_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Harassment_4, 
                style: style_Harassment_4,
                interactive: true,
    title: 'Harassment<br />\
    <img src="styles/legend/Harassment_4_0.png" /> Black Bear<br />\
    <img src="styles/legend/Harassment_4_1.png" /> Grizzly Bear<br />'
        });
var format_Attractant_5 = new ol.format.GeoJSON();
var features_Attractant_5 = format_Attractant_5.readFeatures(json_Attractant_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Attractant_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Attractant_5.addFeatures(features_Attractant_5);
var lyr_Attractant_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Attractant_5, 
                style: style_Attractant_5,
                interactive: true,
                title: '<img src="styles/legend/Attractant_5.png" /> Attractant'
            });
var format_WildlifeSighting_6 = new ol.format.GeoJSON();
var features_WildlifeSighting_6 = format_WildlifeSighting_6.readFeatures(json_WildlifeSighting_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WildlifeSighting_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildlifeSighting_6.addFeatures(features_WildlifeSighting_6);
var lyr_WildlifeSighting_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WildlifeSighting_6, 
                style: style_WildlifeSighting_6,
                interactive: true,
    title: 'Wildlife Sighting<br />\
    <img src="styles/legend/WildlifeSighting_6_0.png" /> Grizzly Bear<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_HumanWildlifeInteraction_1.setVisible(true);lyr_RRFW_2.setVisible(true);lyr_ManagementIntervention_3.setVisible(true);lyr_Harassment_4.setVisible(true);lyr_Attractant_5.setVisible(true);lyr_WildlifeSighting_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_HumanWildlifeInteraction_1,lyr_RRFW_2,lyr_ManagementIntervention_3,lyr_Harassment_4,lyr_Attractant_5,lyr_WildlifeSighting_6];
lyr_HumanWildlifeInteraction_1.set('fieldAliases', {'incident_n': 'incident_n', 'incident_t': 'incident_t', 'common_nam': 'common_nam', 'animal_beh': 'animal_beh', 'animal_att': 'animal_att', 'animal_hea': 'animal_hea', });
lyr_RRFW_2.set('fieldAliases', {'incident_n': 'incident_n', 'incident_t': 'incident_t', 'common_nam': 'common_nam', 'animal_beh': 'animal_beh', 'animal_att': 'animal_att', 'animal_hea': 'animal_hea', });
lyr_ManagementIntervention_3.set('fieldAliases', {'incident_n': 'incident_n', 'incident_t': 'incident_t', 'common_nam': 'common_nam', 'animal_beh': 'animal_beh', 'animal_att': 'animal_att', 'animal_hea': 'animal_hea', });
lyr_Harassment_4.set('fieldAliases', {'incident_n': 'incident_n', 'incident_t': 'incident_t', 'common_nam': 'common_nam', 'animal_beh': 'animal_beh', 'animal_att': 'animal_att', 'animal_hea': 'animal_hea', });
lyr_Attractant_5.set('fieldAliases', {'incident_n': 'incident_n', 'incident_t': 'incident_t', 'common_nam': 'common_nam', 'animal_beh': 'animal_beh', 'animal_att': 'animal_att', 'animal_hea': 'animal_hea', });
lyr_WildlifeSighting_6.set('fieldAliases', {'incident_n': 'incident_n', 'incident_t': 'incident_t', 'common_nam': 'common_nam', 'animal_beh': 'animal_beh', 'animal_att': 'animal_att', 'animal_hea': 'animal_hea', });
lyr_HumanWildlifeInteraction_1.set('fieldImages', {'incident_n': 'TextEdit', 'incident_t': 'TextEdit', 'common_nam': 'TextEdit', 'animal_beh': 'TextEdit', 'animal_att': 'TextEdit', 'animal_hea': 'TextEdit', });
lyr_RRFW_2.set('fieldImages', {'incident_n': 'TextEdit', 'incident_t': 'TextEdit', 'common_nam': 'TextEdit', 'animal_beh': 'TextEdit', 'animal_att': 'TextEdit', 'animal_hea': 'TextEdit', });
lyr_ManagementIntervention_3.set('fieldImages', {'incident_n': 'TextEdit', 'incident_t': 'TextEdit', 'common_nam': 'TextEdit', 'animal_beh': 'TextEdit', 'animal_att': 'TextEdit', 'animal_hea': 'TextEdit', });
lyr_Harassment_4.set('fieldImages', {'incident_n': 'TextEdit', 'incident_t': 'TextEdit', 'common_nam': 'TextEdit', 'animal_beh': 'TextEdit', 'animal_att': 'TextEdit', 'animal_hea': 'TextEdit', });
lyr_Attractant_5.set('fieldImages', {'incident_n': '', 'incident_t': '', 'common_nam': '', 'animal_beh': '', 'animal_att': '', 'animal_hea': '', });
lyr_WildlifeSighting_6.set('fieldImages', {'incident_n': 'TextEdit', 'incident_t': 'TextEdit', 'common_nam': 'TextEdit', 'animal_beh': 'TextEdit', 'animal_att': 'TextEdit', 'animal_hea': 'TextEdit', });
lyr_HumanWildlifeInteraction_1.set('fieldLabels', {'incident_n': 'inline label', 'incident_t': 'inline label', 'common_nam': 'inline label', 'animal_beh': 'inline label', 'animal_att': 'inline label', 'animal_hea': 'inline label', });
lyr_RRFW_2.set('fieldLabels', {'incident_n': 'inline label', 'incident_t': 'inline label', 'common_nam': 'inline label', 'animal_beh': 'inline label', 'animal_att': 'inline label', 'animal_hea': 'inline label', });
lyr_ManagementIntervention_3.set('fieldLabels', {'incident_n': 'inline label', 'incident_t': 'inline label', 'common_nam': 'inline label', 'animal_beh': 'inline label', 'animal_att': 'inline label', 'animal_hea': 'inline label', });
lyr_Harassment_4.set('fieldLabels', {'incident_n': 'inline label', 'incident_t': 'inline label', 'common_nam': 'inline label', 'animal_beh': 'inline label', 'animal_att': 'inline label', 'animal_hea': 'inline label', });
lyr_Attractant_5.set('fieldLabels', {'incident_n': 'inline label', 'incident_t': 'inline label', 'common_nam': 'inline label', 'animal_beh': 'inline label', 'animal_att': 'inline label', 'animal_hea': 'inline label', });
lyr_WildlifeSighting_6.set('fieldLabels', {'incident_n': 'inline label', 'incident_t': 'inline label', 'common_nam': 'inline label', 'animal_beh': 'inline label', 'animal_att': 'inline label', 'animal_hea': 'inline label', });
lyr_WildlifeSighting_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});