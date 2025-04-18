var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_country_1 = new ol.format.GeoJSON();
var features_country_1 = format_country_1.readFeatures(json_country_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_country_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_country_1.addFeatures(features_country_1);
var lyr_country_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_country_1, 
                style: style_country_1,
                popuplayertitle: 'country',
                interactive: true,
                title: '<img src="styles/legend/country_1.png" /> country'
            });
var format_Nastscale_2 = new ol.format.GeoJSON();
var features_Nastscale_2 = format_Nastscale_2.readFeatures(json_Nastscale_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nastscale_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nastscale_2.addFeatures(features_Nastscale_2);
var lyr_Nastscale_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nastscale_2, 
                style: style_Nastscale_2,
                popuplayertitle: 'Nastscale',
                interactive: true,
    title: 'Nastscale<br />\
    <img src="styles/legend/Nastscale_2_0.png" /> 8,000<br />\
    <img src="styles/legend/Nastscale_2_1.png" /> 10,000<br />\
    <img src="styles/legend/Nastscale_2_2.png" /> 15,000<br />\
    <img src="styles/legend/Nastscale_2_3.png" /> 20,000<br />\
    <img src="styles/legend/Nastscale_2_4.png" /> 30,000<br />\
    <img src="styles/legend/Nastscale_2_5.png" /> 50,000<br />\
    <img src="styles/legend/Nastscale_2_6.png" /> 75,000<br />\
    <img src="styles/legend/Nastscale_2_7.png" /> 150,000<br />' });
var format_wdid_score_3 = new ol.format.GeoJSON();
var features_wdid_score_3 = format_wdid_score_3.readFeatures(json_wdid_score_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wdid_score_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wdid_score_3.addFeatures(features_wdid_score_3);
var lyr_wdid_score_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wdid_score_3, 
                style: style_wdid_score_3,
                popuplayertitle: 'wdid_score',
                interactive: true,
    title: 'wdid_score<br />\
    <img src="styles/legend/wdid_score_3_0.png" /> 0<br />\
    <img src="styles/legend/wdid_score_3_1.png" /> 2<br />\
    <img src="styles/legend/wdid_score_3_2.png" /> 4<br />\
    <img src="styles/legend/wdid_score_3_3.png" /> 5<br />' });
var format_scalerank_4 = new ol.format.GeoJSON();
var features_scalerank_4 = format_scalerank_4.readFeatures(json_scalerank_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_scalerank_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_scalerank_4.addFeatures(features_scalerank_4);
var lyr_scalerank_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_scalerank_4, 
                style: style_scalerank_4,
                popuplayertitle: 'scalerank',
                interactive: true,
    title: 'scalerank<br />\
    <img src="styles/legend/scalerank_4_0.png" /> 2<br />\
    <img src="styles/legend/scalerank_4_1.png" /> 3<br />\
    <img src="styles/legend/scalerank_4_2.png" /> 4<br />\
    <img src="styles/legend/scalerank_4_3.png" /> 5<br />\
    <img src="styles/legend/scalerank_4_4.png" /> 6<br />\
    <img src="styles/legend/scalerank_4_5.png" /> 7<br />\
    <img src="styles/legend/scalerank_4_6.png" /> 8<br />\
    <img src="styles/legend/scalerank_4_7.png" /> 9<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_country_1.setVisible(true);lyr_Nastscale_2.setVisible(true);lyr_wdid_score_3.setVisible(true);lyr_scalerank_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_country_1,lyr_Nastscale_2,lyr_wdid_score_3,lyr_scalerank_4];
lyr_country_1.set('fieldAliases', {'FIPS_CNTRY': 'FIPS_CNTRY', 'GMI_CNTRY': 'GMI_CNTRY', 'CNTRY_NAME': 'CNTRY_NAME', 'SOVEREIGN': 'SOVEREIGN', 'POP_CNTRY': 'POP_CNTRY', 'SQKM_CNTRY': 'SQKM_CNTRY', 'SQMI_CNTRY': 'SQMI_CNTRY', 'CURR_TYPE': 'CURR_TYPE', 'CURR_CODE': 'CURR_CODE', 'LANDLOCKED': 'LANDLOCKED', 'COLOR_MAP': 'COLOR_MAP', });
lyr_Nastscale_2.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'comments': 'comments', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'wdid_score': 'wdid_score', 'ne_id': 'ne_id', 'name_fa': 'name_fa', 'name_he': 'name_he', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_zht': 'name_zht', });
lyr_wdid_score_3.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'comments': 'comments', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'wdid_score': 'wdid_score', 'ne_id': 'ne_id', 'name_fa': 'name_fa', 'name_he': 'name_he', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_zht': 'name_zht', });
lyr_scalerank_4.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'comments': 'comments', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'wdid_score': 'wdid_score', 'ne_id': 'ne_id', 'name_fa': 'name_fa', 'name_he': 'name_he', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_zht': 'name_zht', });
lyr_country_1.set('fieldImages', {'FIPS_CNTRY': 'TextEdit', 'GMI_CNTRY': 'TextEdit', 'CNTRY_NAME': 'TextEdit', 'SOVEREIGN': 'TextEdit', 'POP_CNTRY': 'TextEdit', 'SQKM_CNTRY': 'TextEdit', 'SQMI_CNTRY': 'TextEdit', 'CURR_TYPE': 'TextEdit', 'CURR_CODE': 'TextEdit', 'LANDLOCKED': 'TextEdit', 'COLOR_MAP': 'TextEdit', });
lyr_Nastscale_2.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'abbrev': 'TextEdit', 'location': 'TextEdit', 'gps_code': 'TextEdit', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'TextEdit', 'comments': 'TextEdit', 'wikidataid': 'TextEdit', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_de': 'TextEdit', 'name_en': 'TextEdit', 'name_es': 'TextEdit', 'name_fr': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'name_hu': 'TextEdit', 'name_id': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_ru': 'TextEdit', 'name_sv': 'TextEdit', 'name_tr': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'wdid_score': 'Range', 'ne_id': 'TextEdit', 'name_fa': 'TextEdit', 'name_he': 'TextEdit', 'name_uk': 'TextEdit', 'name_ur': 'TextEdit', 'name_zht': 'TextEdit', });
lyr_wdid_score_3.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'abbrev': 'TextEdit', 'location': 'TextEdit', 'gps_code': 'TextEdit', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'TextEdit', 'comments': 'TextEdit', 'wikidataid': 'TextEdit', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_de': 'TextEdit', 'name_en': 'TextEdit', 'name_es': 'TextEdit', 'name_fr': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'name_hu': 'TextEdit', 'name_id': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_ru': 'TextEdit', 'name_sv': 'TextEdit', 'name_tr': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'wdid_score': 'Range', 'ne_id': 'TextEdit', 'name_fa': 'TextEdit', 'name_he': 'TextEdit', 'name_uk': 'TextEdit', 'name_ur': 'TextEdit', 'name_zht': 'TextEdit', });
lyr_scalerank_4.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'abbrev': 'TextEdit', 'location': 'TextEdit', 'gps_code': 'TextEdit', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'TextEdit', 'comments': 'TextEdit', 'wikidataid': 'TextEdit', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_de': 'TextEdit', 'name_en': 'TextEdit', 'name_es': 'TextEdit', 'name_fr': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'name_hu': 'TextEdit', 'name_id': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_ru': 'TextEdit', 'name_sv': 'TextEdit', 'name_tr': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'wdid_score': 'Range', 'ne_id': 'TextEdit', 'name_fa': 'TextEdit', 'name_he': 'TextEdit', 'name_uk': 'TextEdit', 'name_ur': 'TextEdit', 'name_zht': 'TextEdit', });
lyr_country_1.set('fieldLabels', {'FIPS_CNTRY': 'inline label - always visible', 'GMI_CNTRY': 'inline label - always visible', 'CNTRY_NAME': 'inline label - always visible', 'SOVEREIGN': 'inline label - always visible', 'POP_CNTRY': 'inline label - always visible', 'SQKM_CNTRY': 'inline label - always visible', 'SQMI_CNTRY': 'inline label - always visible', 'CURR_TYPE': 'inline label - always visible', 'CURR_CODE': 'inline label - always visible', 'LANDLOCKED': 'inline label - always visible', 'COLOR_MAP': 'inline label - always visible', });
lyr_Nastscale_2.set('fieldLabels', {'scalerank': 'inline label - always visible', 'featurecla': 'inline label - always visible', 'type': 'inline label - always visible', 'name': 'inline label - always visible', 'abbrev': 'inline label - always visible', 'location': 'inline label - always visible', 'gps_code': 'inline label - always visible', 'iata_code': 'inline label - always visible', 'wikipedia': 'inline label - always visible', 'natlscale': 'inline label - always visible', 'comments': 'inline label - always visible', 'wikidataid': 'inline label - always visible', 'name_ar': 'inline label - always visible', 'name_bn': 'inline label - always visible', 'name_de': 'inline label - always visible', 'name_en': 'inline label - always visible', 'name_es': 'inline label - always visible', 'name_fr': 'inline label - always visible', 'name_el': 'inline label - always visible', 'name_hi': 'inline label - always visible', 'name_hu': 'inline label - always visible', 'name_id': 'inline label - always visible', 'name_it': 'inline label - always visible', 'name_ja': 'inline label - always visible', 'name_ko': 'inline label - always visible', 'name_nl': 'inline label - always visible', 'name_pl': 'inline label - always visible', 'name_pt': 'inline label - always visible', 'name_ru': 'inline label - always visible', 'name_sv': 'inline label - always visible', 'name_tr': 'inline label - always visible', 'name_vi': 'inline label - always visible', 'name_zh': 'inline label - always visible', 'wdid_score': 'inline label - always visible', 'ne_id': 'inline label - always visible', 'name_fa': 'inline label - always visible', 'name_he': 'inline label - always visible', 'name_uk': 'inline label - always visible', 'name_ur': 'inline label - always visible', 'name_zht': 'inline label - always visible', });
lyr_wdid_score_3.set('fieldLabels', {'scalerank': 'no label', 'featurecla': 'no label', 'type': 'no label', 'name': 'no label', 'abbrev': 'no label', 'location': 'no label', 'gps_code': 'no label', 'iata_code': 'no label', 'wikipedia': 'no label', 'natlscale': 'no label', 'comments': 'no label', 'wikidataid': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_de': 'no label', 'name_en': 'no label', 'name_es': 'no label', 'name_fr': 'no label', 'name_el': 'no label', 'name_hi': 'no label', 'name_hu': 'no label', 'name_id': 'no label', 'name_it': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', 'name_nl': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_ru': 'no label', 'name_sv': 'no label', 'name_tr': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'wdid_score': 'no label', 'ne_id': 'no label', 'name_fa': 'no label', 'name_he': 'no label', 'name_uk': 'no label', 'name_ur': 'no label', 'name_zht': 'no label', });
lyr_scalerank_4.set('fieldLabels', {'scalerank': 'inline label - always visible', 'featurecla': 'inline label - always visible', 'type': 'inline label - always visible', 'name': 'inline label - always visible', 'abbrev': 'inline label - always visible', 'location': 'inline label - always visible', 'gps_code': 'inline label - always visible', 'iata_code': 'inline label - always visible', 'wikipedia': 'inline label - always visible', 'natlscale': 'inline label - always visible', 'comments': 'inline label - always visible', 'wikidataid': 'inline label - always visible', 'name_ar': 'inline label - always visible', 'name_bn': 'inline label - always visible', 'name_de': 'inline label - always visible', 'name_en': 'inline label - always visible', 'name_es': 'inline label - always visible', 'name_fr': 'inline label - always visible', 'name_el': 'inline label - always visible', 'name_hi': 'inline label - always visible', 'name_hu': 'inline label - always visible', 'name_id': 'inline label - always visible', 'name_it': 'inline label - always visible', 'name_ja': 'inline label - always visible', 'name_ko': 'inline label - always visible', 'name_nl': 'inline label - always visible', 'name_pl': 'inline label - always visible', 'name_pt': 'inline label - always visible', 'name_ru': 'inline label - always visible', 'name_sv': 'inline label - always visible', 'name_tr': 'inline label - always visible', 'name_vi': 'inline label - always visible', 'name_zh': 'inline label - always visible', 'wdid_score': 'inline label - always visible', 'ne_id': 'inline label - always visible', 'name_fa': 'inline label - always visible', 'name_he': 'inline label - always visible', 'name_uk': 'inline label - always visible', 'name_ur': 'inline label - always visible', 'name_zht': 'inline label - always visible', });
lyr_scalerank_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});