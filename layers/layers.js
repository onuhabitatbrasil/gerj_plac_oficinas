var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_area_urb_1 = new ol.format.GeoJSON();
var features_area_urb_1 = format_area_urb_1.readFeatures(json_area_urb_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area_urb_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_urb_1.addFeatures(features_area_urb_1);
var lyr_area_urb_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_area_urb_1, 
                style: style_area_urb_1,
                popuplayertitle: 'area_urb',
                interactive: true,
                title: '<img src="styles/legend/area_urb_1.png" /> area_urb'
            });
var format_fcu_2 = new ol.format.GeoJSON();
var features_fcu_2 = format_fcu_2.readFeatures(json_fcu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fcu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fcu_2.addFeatures(features_fcu_2);
var lyr_fcu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fcu_2, 
                style: style_fcu_2,
                popuplayertitle: 'fcu',
                interactive: true,
                title: '<img src="styles/legend/fcu_2.png" /> fcu'
            });
var format_areas_quilombolas_3 = new ol.format.GeoJSON();
var features_areas_quilombolas_3 = format_areas_quilombolas_3.readFeatures(json_areas_quilombolas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areas_quilombolas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areas_quilombolas_3.addFeatures(features_areas_quilombolas_3);
var lyr_areas_quilombolas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areas_quilombolas_3, 
                style: style_areas_quilombolas_3,
                popuplayertitle: 'areas_quilombolas',
                interactive: true,
                title: '<img src="styles/legend/areas_quilombolas_3.png" /> areas_quilombolas'
            });
var format_bairros_4 = new ol.format.GeoJSON();
var features_bairros_4 = format_bairros_4.readFeatures(json_bairros_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bairros_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bairros_4.addFeatures(features_bairros_4);
var lyr_bairros_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bairros_4, 
                style: style_bairros_4,
                popuplayertitle: 'bairros',
                interactive: true,
                title: 'bairros'
            });
var format_hidrografia_5 = new ol.format.GeoJSON();
var features_hidrografia_5 = format_hidrografia_5.readFeatures(json_hidrografia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hidrografia_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrografia_5.addFeatures(features_hidrografia_5);
var lyr_hidrografia_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrografia_5, 
                style: style_hidrografia_5,
                popuplayertitle: 'hidrografia',
                interactive: true,
                title: '<img src="styles/legend/hidrografia_5.png" /> hidrografia'
            });
var format_saude_6 = new ol.format.GeoJSON();
var features_saude_6 = format_saude_6.readFeatures(json_saude_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saude_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saude_6.addFeatures(features_saude_6);
cluster_saude_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_saude_6
});
var lyr_saude_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_saude_6, 
                style: style_saude_6,
                popuplayertitle: 'saude',
                interactive: true,
                title: '<img src="styles/legend/saude_6.png" /> saude'
            });
var format_escolas_7 = new ol.format.GeoJSON();
var features_escolas_7 = format_escolas_7.readFeatures(json_escolas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_escolas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_escolas_7.addFeatures(features_escolas_7);
cluster_escolas_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_escolas_7
});
var lyr_escolas_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_escolas_7, 
                style: style_escolas_7,
                popuplayertitle: 'escolas',
                interactive: true,
                title: '<img src="styles/legend/escolas_7.png" /> escolas'
            });
var format_localidades_8 = new ol.format.GeoJSON();
var features_localidades_8 = format_localidades_8.readFeatures(json_localidades_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localidades_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localidades_8.addFeatures(features_localidades_8);
var lyr_localidades_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_localidades_8, 
                style: style_localidades_8,
                popuplayertitle: 'localidades',
                interactive: true,
                title: '<img src="styles/legend/localidades_8.png" /> localidades'
            });
var format_municipios_9 = new ol.format.GeoJSON();
var features_municipios_9 = format_municipios_9.readFeatures(json_municipios_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipios_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipios_9.addFeatures(features_municipios_9);
var lyr_municipios_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipios_9, 
                style: style_municipios_9,
                popuplayertitle: 'municipios',
                interactive: true,
                title: '<img src="styles/legend/municipios_9.png" /> municipios'
            });
var group_simple = new ol.layer.Group({
                                layers: [lyr_area_urb_1,lyr_fcu_2,lyr_areas_quilombolas_3,lyr_bairros_4,lyr_hidrografia_5,lyr_saude_6,lyr_escolas_7,lyr_localidades_8,lyr_municipios_9,],
                                fold: 'open',
                                title: 'simple'});
var group_original = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'original'});

lyr_ESRISatellite_0.setVisible(true);lyr_area_urb_1.setVisible(true);lyr_fcu_2.setVisible(true);lyr_areas_quilombolas_3.setVisible(true);lyr_bairros_4.setVisible(true);lyr_hidrografia_5.setVisible(true);lyr_saude_6.setVisible(true);lyr_escolas_7.setVisible(true);lyr_localidades_8.setVisible(true);lyr_municipios_9.setVisible(true);
var layersList = [lyr_ESRISatellite_0,group_simple];
lyr_area_urb_1.set('fieldAliases', {'Densidade': 'Densidade', 'Tipo': 'Tipo', 'Comparacao': 'Comparacao', 'NM_UF': 'NM_UF', 'CD_UF': 'CD_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', 'AREA_KM2': 'AREA_KM2', });
lyr_fcu_2.set('fieldAliases', {'cd_fcu': 'cd_fcu', 'nm_fcu': 'nm_fcu', 'cd_mun': 'cd_mun', 'nm_mun': 'nm_mun', 'sigla_uf': 'sigla_uf', });
lyr_areas_quilombolas_3.set('fieldAliases', {'nm_comunid': 'nm_comunid', 'nm_municip': 'nm_municip', 'fase': 'fase', 'responsave': 'responsave', });
lyr_bairros_4.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'NM_UF': 'NM_UF', 'NM_BAIRRO': 'NM_BAIRRO', });
lyr_hidrografia_5.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'layer': 'layer', 'nome': 'nome', });
lyr_saude_6.set('fieldAliases', {'nome': 'nome', });
lyr_escolas_7.set('fieldAliases', {'no_entidad': 'no_entidad', });
lyr_localidades_8.set('fieldAliases', {'fid': 'fid', 'municipio_codigo': 'municipio_codigo', 'municipio': 'municipio', 'uf': 'uf', 'nm_categor': 'nm_categor', 'valor': 'valor', });
lyr_municipios_9.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', });
lyr_area_urb_1.set('fieldImages', {'Densidade': '', 'Tipo': '', 'Comparacao': '', 'NM_UF': '', 'CD_UF': '', 'SIGLA_UF': '', 'NM_REGIAO': '', 'AREA_KM2': '', });
lyr_fcu_2.set('fieldImages', {'cd_fcu': '', 'nm_fcu': '', 'cd_mun': '', 'nm_mun': '', 'sigla_uf': '', });
lyr_areas_quilombolas_3.set('fieldImages', {'nm_comunid': '', 'nm_municip': '', 'fase': '', 'responsave': '', });
lyr_bairros_4.set('fieldImages', {'CD_MUN': '', 'NM_MUN': '', 'NM_UF': '', 'NM_BAIRRO': '', });
lyr_hidrografia_5.set('fieldImages', {'ogc_fid': '', 'layer': '', 'nome': '', });
lyr_saude_6.set('fieldImages', {'nome': '', });
lyr_escolas_7.set('fieldImages', {'no_entidad': '', });
lyr_localidades_8.set('fieldImages', {'fid': '', 'municipio_codigo': '', 'municipio': '', 'uf': '', 'nm_categor': '', 'valor': '', });
lyr_municipios_9.set('fieldImages', {'CD_MUN': '', 'NM_MUN': '', 'SIGLA_UF': '', });
lyr_area_urb_1.set('fieldLabels', {'Densidade': 'no label', 'Tipo': 'no label', 'Comparacao': 'no label', 'NM_UF': 'no label', 'CD_UF': 'no label', 'SIGLA_UF': 'no label', 'NM_REGIAO': 'no label', 'AREA_KM2': 'no label', });
lyr_fcu_2.set('fieldLabels', {'cd_fcu': 'no label', 'nm_fcu': 'no label', 'cd_mun': 'no label', 'nm_mun': 'no label', 'sigla_uf': 'no label', });
lyr_areas_quilombolas_3.set('fieldLabels', {'nm_comunid': 'no label', 'nm_municip': 'no label', 'fase': 'no label', 'responsave': 'no label', });
lyr_bairros_4.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'NM_UF': 'no label', 'NM_BAIRRO': 'no label', });
lyr_hidrografia_5.set('fieldLabels', {'ogc_fid': 'no label', 'layer': 'no label', 'nome': 'no label', });
lyr_saude_6.set('fieldLabels', {'nome': 'no label', });
lyr_escolas_7.set('fieldLabels', {'no_entidad': 'no label', });
lyr_localidades_8.set('fieldLabels', {'fid': 'no label', 'municipio_codigo': 'no label', 'municipio': 'no label', 'uf': 'no label', 'nm_categor': 'no label', 'valor': 'no label', });
lyr_municipios_9.set('fieldLabels', {'CD_MUN': 'hidden field', 'NM_MUN': 'no label', 'SIGLA_UF': 'hidden field', });
lyr_municipios_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});