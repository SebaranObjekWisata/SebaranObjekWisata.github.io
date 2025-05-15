var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIStandard_2 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRINatGeo_3 = new ol.layer.Tile({
            'title': 'ESRI NatGeo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Batas_4 = new ol.format.GeoJSON();
var features_Batas_4 = format_Batas_4.readFeatures(json_Batas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_4.addFeatures(features_Batas_4);
var lyr_Batas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_4, 
                style: style_Batas_4,
                popuplayertitle: 'Batas',
                interactive: true,
                title: '<img src="styles/legend/Batas_4.png" /> Batas'
            });
var format_Jalan_1_5 = new ol.format.GeoJSON();
var features_Jalan_1_5 = format_Jalan_1_5.readFeatures(json_Jalan_1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_1_5.addFeatures(features_Jalan_1_5);
var lyr_Jalan_1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_1_5, 
                style: style_Jalan_1_5,
                popuplayertitle: 'Jalan_1',
                interactive: false,
                title: '<img src="styles/legend/Jalan_1_5.png" /> Jalan_1'
            });
var format_SEBARAN_OBJEK_2_6 = new ol.format.GeoJSON();
var features_SEBARAN_OBJEK_2_6 = format_SEBARAN_OBJEK_2_6.readFeatures(json_SEBARAN_OBJEK_2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEBARAN_OBJEK_2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEBARAN_OBJEK_2_6.addFeatures(features_SEBARAN_OBJEK_2_6);
var lyr_SEBARAN_OBJEK_2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEBARAN_OBJEK_2_6, 
                style: style_SEBARAN_OBJEK_2_6,
                popuplayertitle: 'SEBARAN_OBJEK_2',
                interactive: true,
                title: '<img src="styles/legend/SEBARAN_OBJEK_2_6.png" /> SEBARAN_OBJEK_2'
            });
var format_SEBARAN_OBJEK_7 = new ol.format.GeoJSON();
var features_SEBARAN_OBJEK_7 = format_SEBARAN_OBJEK_7.readFeatures(json_SEBARAN_OBJEK_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEBARAN_OBJEK_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEBARAN_OBJEK_7.addFeatures(features_SEBARAN_OBJEK_7);
var lyr_SEBARAN_OBJEK_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEBARAN_OBJEK_7, 
                style: style_SEBARAN_OBJEK_7,
                popuplayertitle: 'SEBARAN_OBJEK',
                interactive: true,
                title: '<img src="styles/legend/SEBARAN_OBJEK_7.png" /> SEBARAN_OBJEK'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(false);lyr_ESRIStandard_2.setVisible(false);lyr_ESRINatGeo_3.setVisible(true);lyr_Batas_4.setVisible(true);lyr_Jalan_1_5.setVisible(true);lyr_SEBARAN_OBJEK_2_6.setVisible(true);lyr_SEBARAN_OBJEK_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_ESRIStandard_2,lyr_ESRINatGeo_3,lyr_Batas_4,lyr_Jalan_1_5,lyr_SEBARAN_OBJEK_2_6,lyr_SEBARAN_OBJEK_7];
lyr_Batas_4.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'HEKTAR': 'HEKTAR', 'Batas_Admi': 'Batas_Admi', });
lyr_Jalan_1_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_SEBARAN_OBJEK_2_6.set('fieldAliases', {'Name': 'Name', 'Nama_Objek': 'Nama_Objek', 'Attraction': 'Attraction', 'Amenity': 'Amenity', 'Accesibili': 'Accesibili', 'Ancillary': 'Ancillary', 'Foto Objek': 'Foto Objek', 'Alamat': 'Alamat', });
lyr_SEBARAN_OBJEK_7.set('fieldAliases', {'Name': 'Name', 'Nama_Objek': 'Nama_Objek', 'Attraction': 'Attraction', 'Amenity': 'Amenity', 'Accesibi': 'Accesibi', 'Ancillary': 'Ancillary', 'Foto Objek': 'Foto Objek', 'Alamat': 'Alamat', });
lyr_Batas_4.set('fieldImages', {'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'HEKTAR': 'TextEdit', 'Batas_Admi': 'TextEdit', });
lyr_Jalan_1_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_SEBARAN_OBJEK_2_6.set('fieldImages', {'Name': 'TextEdit', 'Nama_Objek': 'TextEdit', 'Attraction': 'TextEdit', 'Amenity': 'TextEdit', 'Accesibili': 'TextEdit', 'Ancillary': 'TextEdit', 'Foto Objek': 'ExternalResource', 'Alamat': '', });
lyr_SEBARAN_OBJEK_7.set('fieldImages', {'Name': 'TextEdit', 'Nama_Objek': 'TextEdit', 'Attraction': 'TextEdit', 'Amenity': 'TextEdit', 'Accesibi': 'TextEdit', 'Ancillary': 'TextEdit', 'Foto Objek': 'ExternalResource', 'Alamat': '', });
lyr_Batas_4.set('fieldLabels', {'KECAMATAN': 'inline label - always visible', 'DESA': 'inline label - always visible', 'HEKTAR': 'inline label - always visible', 'Batas_Admi': 'inline label - always visible', });
lyr_Jalan_1_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_SEBARAN_OBJEK_2_6.set('fieldLabels', {'Name': 'inline label - always visible', 'Nama_Objek': 'inline label - always visible', 'Attraction': 'inline label - always visible', 'Amenity': 'inline label - always visible', 'Accesibili': 'inline label - always visible', 'Ancillary': 'inline label - always visible', 'Foto Objek': 'inline label - always visible', 'Alamat': 'inline label - always visible', });
lyr_SEBARAN_OBJEK_7.set('fieldLabels', {'Name': 'inline label - always visible', 'Nama_Objek': 'inline label - always visible', 'Attraction': 'inline label - always visible', 'Amenity': 'inline label - always visible', 'Accesibi': 'inline label - always visible', 'Ancillary': 'inline label - always visible', 'Foto Objek': 'inline label - always visible', 'Alamat': 'inline label - always visible', });
lyr_SEBARAN_OBJEK_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});