ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-39.063993, -14.800901, -38.997988, -14.767359]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UnidadesdeConservao_1 = new ol.format.GeoJSON();
var features_UnidadesdeConservao_1 = format_UnidadesdeConservao_1.readFeatures(json_UnidadesdeConservao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UnidadesdeConservao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservao_1.addFeatures(features_UnidadesdeConservao_1);
var lyr_UnidadesdeConservao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservao_1, 
                style: style_UnidadesdeConservao_1,
                popuplayertitle: 'Unidades de Conservação ',
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservao_1.png" /> Unidades de Conservação '
            });
var format_reasUrbanaseRurais_2 = new ol.format.GeoJSON();
var features_reasUrbanaseRurais_2 = format_reasUrbanaseRurais_2.readFeatures(json_reasUrbanaseRurais_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasUrbanaseRurais_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasUrbanaseRurais_2.addFeatures(features_reasUrbanaseRurais_2);
var lyr_reasUrbanaseRurais_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasUrbanaseRurais_2, 
                style: style_reasUrbanaseRurais_2,
                popuplayertitle: 'Áreas Urbanas e Rurais ',
                interactive: true,
                title: '<img src="styles/legend/reasUrbanaseRurais_2.png" /> Áreas Urbanas e Rurais '
            });
var format_FundeadourosLongoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_3 = format_FundeadourosLongoPrazo_3.readFeatures(json_FundeadourosLongoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosLongoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_3.addFeatures(features_FundeadourosLongoPrazo_3);
var lyr_FundeadourosLongoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_3, 
                style: style_FundeadourosLongoPrazo_3,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_3.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_4 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_4 = format_FundeadourosMdioPrazo_4.readFeatures(json_FundeadourosMdioPrazo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosMdioPrazo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_4.addFeatures(features_FundeadourosMdioPrazo_4);
var lyr_FundeadourosMdioPrazo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_4, 
                style: style_FundeadourosMdioPrazo_4,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_4.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_5 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_5 = format_FundeadourosCurtoPrazo_5.readFeatures(json_FundeadourosCurtoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosCurtoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_5.addFeatures(features_FundeadourosCurtoPrazo_5);
var lyr_FundeadourosCurtoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_5, 
                style: style_FundeadourosCurtoPrazo_5,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_5.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_6 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_6 = format_FundeadourosSituaoAtual_6.readFeatures(json_FundeadourosSituaoAtual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosSituaoAtual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_6.addFeatures(features_FundeadourosSituaoAtual_6);
var lyr_FundeadourosSituaoAtual_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_6, 
                style: style_FundeadourosSituaoAtual_6,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_6.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_7 = format_BaciasdeEvoluoLongoPrazo_7.readFeatures(json_BaciasdeEvoluoLongoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoLongoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_7.addFeatures(features_BaciasdeEvoluoLongoPrazo_7);
var lyr_BaciasdeEvoluoLongoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_7, 
                style: style_BaciasdeEvoluoLongoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_7.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_8 = format_BaciasdeEvoluoMdioPrazo_8.readFeatures(json_BaciasdeEvoluoMdioPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoMdioPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_8.addFeatures(features_BaciasdeEvoluoMdioPrazo_8);
var lyr_BaciasdeEvoluoMdioPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_8, 
                style: style_BaciasdeEvoluoMdioPrazo_8,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_8.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_9 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_9 = format_BaciasdeEvoluoCurtoPrazo_9.readFeatures(json_BaciasdeEvoluoCurtoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_9.addFeatures(features_BaciasdeEvoluoCurtoPrazo_9);
var lyr_BaciasdeEvoluoCurtoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_9, 
                style: style_BaciasdeEvoluoCurtoPrazo_9,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_9.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_10 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_10 = format_BaciasdeEvoluoSituaoAtual_10.readFeatures(json_BaciasdeEvoluoSituaoAtual_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoSituaoAtual_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_10.addFeatures(features_BaciasdeEvoluoSituaoAtual_10);
var lyr_BaciasdeEvoluoSituaoAtual_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_10, 
                style: style_BaciasdeEvoluoSituaoAtual_10,
                popuplayertitle: 'Bacias de Evolução - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_10.png" /> Bacias de Evolução - Situação Atual'
            });
var format_CanaisdeAcessoLongoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_11 = format_CanaisdeAcessoLongoPrazo_11.readFeatures(json_CanaisdeAcessoLongoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoLongoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_11.addFeatures(features_CanaisdeAcessoLongoPrazo_11);
var lyr_CanaisdeAcessoLongoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_11, 
                style: style_CanaisdeAcessoLongoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_11.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_12 = format_CanaisdeAcessoMdioPrazo_12.readFeatures(json_CanaisdeAcessoMdioPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoMdioPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_12.addFeatures(features_CanaisdeAcessoMdioPrazo_12);
var lyr_CanaisdeAcessoMdioPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_12, 
                style: style_CanaisdeAcessoMdioPrazo_12,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_12.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_13 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_13 = format_CanaisdeAcessoCurtoPrazo_13.readFeatures(json_CanaisdeAcessoCurtoPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoCurtoPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_13.addFeatures(features_CanaisdeAcessoCurtoPrazo_13);
var lyr_CanaisdeAcessoCurtoPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_13, 
                style: style_CanaisdeAcessoCurtoPrazo_13,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_13.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_14 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_14 = format_CanaisdeAcessoSituaoAtual_14.readFeatures(json_CanaisdeAcessoSituaoAtual_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoSituaoAtual_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_14.addFeatures(features_CanaisdeAcessoSituaoAtual_14);
var lyr_CanaisdeAcessoSituaoAtual_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_14, 
                style: style_CanaisdeAcessoSituaoAtual_14,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_14.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosRodoviriosInternosLongoPrazo_15 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_15 = format_AcessosRodoviriosInternosLongoPrazo_15.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_15.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_15);
var lyr_AcessosRodoviriosInternosLongoPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_15, 
                style: style_AcessosRodoviriosInternosLongoPrazo_15,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_15.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_16 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_16 = format_AcessosRodoviriosInternosMdioPrazo_16.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_16.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_16);
var lyr_AcessosRodoviriosInternosMdioPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_16, 
                style: style_AcessosRodoviriosInternosMdioPrazo_16,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_16.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_17 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_17 = format_AcessosRodoviriosInternosCurtoPrazo_17.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_17.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_17);
var lyr_AcessosRodoviriosInternosCurtoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_17, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_17,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_17.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_18 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_18 = format_AcessosRodoviriosInternosSituaoAtual_18.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_18.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_18);
var lyr_AcessosRodoviriosInternosSituaoAtual_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_18, 
                style: style_AcessosRodoviriosInternosSituaoAtual_18,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_18.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_19 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_19 = format_AcessosRodoviriosExternos_19.readFeatures(json_AcessosRodoviriosExternos_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosExternos_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_19.addFeatures(features_AcessosRodoviriosExternos_19);
var lyr_AcessosRodoviriosExternos_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_19, 
                style: style_AcessosRodoviriosExternos_19,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_19.png" /> Acessos Rodoviários Externos '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo'
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_27 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_27 = format_reasNoAfetassOperaesPorturiasLongoPrazo_27.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_27.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_27);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_27, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_27,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_27.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_28 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_28 = format_reasNoAfetassOperaesPorturiasMdioPrazo_28.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_28.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_28);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_28, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_28,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_28.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo'
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_29 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_29 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_29.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_29.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_29);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_29, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_29,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_29.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo'
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_30 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_30 = format_reasNoAfetassOperaesPorturiasSituaoAtual_30.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_30.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_30);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_30, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_30,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_30.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_AcostagemLongoPrazo_31 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_31 = format_AcostagemLongoPrazo_31.readFeatures(json_AcostagemLongoPrazo_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_31.addFeatures(features_AcostagemLongoPrazo_31);
var lyr_AcostagemLongoPrazo_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_31, 
                style: style_AcostagemLongoPrazo_31,
                popuplayertitle: 'Acostagem - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_31.png" /> Acostagem - Longo Prazo'
            });
var format_AcostagemMdioPrazo_32 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_32 = format_AcostagemMdioPrazo_32.readFeatures(json_AcostagemMdioPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_32.addFeatures(features_AcostagemMdioPrazo_32);
var lyr_AcostagemMdioPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_32, 
                style: style_AcostagemMdioPrazo_32,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_32.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_33 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_33 = format_AcostagemCurtoPrazo_33.readFeatures(json_AcostagemCurtoPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_33.addFeatures(features_AcostagemCurtoPrazo_33);
var lyr_AcostagemCurtoPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_33, 
                style: style_AcostagemCurtoPrazo_33,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_33.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_34 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_34 = format_AcostagemSituaoAtual_34.readFeatures(json_AcostagemSituaoAtual_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_34.addFeatures(features_AcostagemSituaoAtual_34);
var lyr_AcostagemSituaoAtual_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_34, 
                style: style_AcostagemSituaoAtual_34,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_34.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_35 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_35 = format_ArmazenagemLongoPrazo_35.readFeatures(json_ArmazenagemLongoPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_35.addFeatures(features_ArmazenagemLongoPrazo_35);
var lyr_ArmazenagemLongoPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_35, 
                style: style_ArmazenagemLongoPrazo_35,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_35.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_36 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_36 = format_ArmazenagemMdioPrazo_36.readFeatures(json_ArmazenagemMdioPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_36.addFeatures(features_ArmazenagemMdioPrazo_36);
var lyr_ArmazenagemMdioPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_36, 
                style: style_ArmazenagemMdioPrazo_36,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_36.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_37 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_37 = format_ArmazenagemCurtoPrazo_37.readFeatures(json_ArmazenagemCurtoPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_37.addFeatures(features_ArmazenagemCurtoPrazo_37);
var lyr_ArmazenagemCurtoPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_37, 
                style: style_ArmazenagemCurtoPrazo_37,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_37.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_38 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_38 = format_ArmazenagemSituaoAtual_38.readFeatures(json_ArmazenagemSituaoAtual_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_38.addFeatures(features_ArmazenagemSituaoAtual_38);
var lyr_ArmazenagemSituaoAtual_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_38, 
                style: style_ArmazenagemSituaoAtual_38,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_38.png" /> Armazenagem - Situação Atual '
            });
var format_reaseInstalaesAlfandegadas_39 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_39 = format_reaseInstalaesAlfandegadas_39.readFeatures(json_reaseInstalaesAlfandegadas_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadas_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_39.addFeatures(features_reaseInstalaesAlfandegadas_39);
var lyr_reaseInstalaesAlfandegadas_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_39, 
                style: style_reaseInstalaesAlfandegadas_39,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_39.png" /> Áreas e Instalações Alfandegadas '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44 = new ol.format.GeoJSON();
var features_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44 = format_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44.readFeatures(json_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44.addFeatures(features_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44);
var lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44, 
                style: style_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44,
                popuplayertitle: 'Carga Geral/Carga Conteinerizada/Granel Sólido/Passageiros',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44.png" /> Carga Geral/Carga Conteinerizada/Granel Sólido/Passageiros'
            });
var format_CargaGeralCargaConteinerizadaGranelSlido_45 = new ol.format.GeoJSON();
var features_CargaGeralCargaConteinerizadaGranelSlido_45 = format_CargaGeralCargaConteinerizadaGranelSlido_45.readFeatures(json_CargaGeralCargaConteinerizadaGranelSlido_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralCargaConteinerizadaGranelSlido_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralCargaConteinerizadaGranelSlido_45.addFeatures(features_CargaGeralCargaConteinerizadaGranelSlido_45);
var lyr_CargaGeralCargaConteinerizadaGranelSlido_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralCargaConteinerizadaGranelSlido_45, 
                style: style_CargaGeralCargaConteinerizadaGranelSlido_45,
                popuplayertitle: 'Carga Geral/Carga Conteinerizada/Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralCargaConteinerizadaGranelSlido_45.png" /> Carga Geral/Carga Conteinerizada/Granel Sólido'
            });
var format_CargaGeralGranelSlido_46 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlido_46 = format_CargaGeralGranelSlido_46.readFeatures(json_CargaGeralGranelSlido_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlido_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlido_46.addFeatures(features_CargaGeralGranelSlido_46);
var lyr_CargaGeralGranelSlido_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlido_46, 
                style: style_CargaGeralGranelSlido_46,
                popuplayertitle: 'Carga Geral/Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlido_46.png" /> Carga Geral/Granel Sólido'
            });
var format_CargaGeral_47 = new ol.format.GeoJSON();
var features_CargaGeral_47 = format_CargaGeral_47.readFeatures(json_CargaGeral_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeral_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_47.addFeatures(features_CargaGeral_47);
var lyr_CargaGeral_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_47, 
                style: style_CargaGeral_47,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_47.png" /> Carga Geral'
            });
var format_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48 = new ol.format.GeoJSON();
var features_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48 = format_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48.readFeatures(json_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48.addFeatures(features_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48);
var lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48, 
                style: style_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48,
                popuplayertitle: 'Carga Geral/Carga Conteinerizada/Granel Sólido/Passageiros',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48.png" /> Carga Geral/Carga Conteinerizada/Granel Sólido/Passageiros'
            });
var format_CargaGeralCargaConteinerizadaGranelSlido_49 = new ol.format.GeoJSON();
var features_CargaGeralCargaConteinerizadaGranelSlido_49 = format_CargaGeralCargaConteinerizadaGranelSlido_49.readFeatures(json_CargaGeralCargaConteinerizadaGranelSlido_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralCargaConteinerizadaGranelSlido_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralCargaConteinerizadaGranelSlido_49.addFeatures(features_CargaGeralCargaConteinerizadaGranelSlido_49);
var lyr_CargaGeralCargaConteinerizadaGranelSlido_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralCargaConteinerizadaGranelSlido_49, 
                style: style_CargaGeralCargaConteinerizadaGranelSlido_49,
                popuplayertitle: 'Carga Geral/Carga Conteinerizada/Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralCargaConteinerizadaGranelSlido_49.png" /> Carga Geral/Carga Conteinerizada/Granel Sólido'
            });
var format_CargaGeralGranelSlido_50 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlido_50 = format_CargaGeralGranelSlido_50.readFeatures(json_CargaGeralGranelSlido_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlido_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlido_50.addFeatures(features_CargaGeralGranelSlido_50);
var lyr_CargaGeralGranelSlido_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlido_50, 
                style: style_CargaGeralGranelSlido_50,
                popuplayertitle: 'Carga Geral/Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlido_50.png" /> Carga Geral/Granel Sólido'
            });
var format_CargaGeral_51 = new ol.format.GeoJSON();
var features_CargaGeral_51 = format_CargaGeral_51.readFeatures(json_CargaGeral_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeral_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_51.addFeatures(features_CargaGeral_51);
var lyr_CargaGeral_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_51, 
                style: style_CargaGeral_51,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_51.png" /> Carga Geral'
            });
var format_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52 = new ol.format.GeoJSON();
var features_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52 = format_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52.readFeatures(json_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52.addFeatures(features_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52);
var lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52, 
                style: style_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52,
                popuplayertitle: 'Carga Geral/Carga Conteinerizada/Granel Sólido/Passageiros',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52.png" /> Carga Geral/Carga Conteinerizada/Granel Sólido/Passageiros'
            });
var format_CargaGeralCargaConteinerizadaGranelSlido_53 = new ol.format.GeoJSON();
var features_CargaGeralCargaConteinerizadaGranelSlido_53 = format_CargaGeralCargaConteinerizadaGranelSlido_53.readFeatures(json_CargaGeralCargaConteinerizadaGranelSlido_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralCargaConteinerizadaGranelSlido_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralCargaConteinerizadaGranelSlido_53.addFeatures(features_CargaGeralCargaConteinerizadaGranelSlido_53);
var lyr_CargaGeralCargaConteinerizadaGranelSlido_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralCargaConteinerizadaGranelSlido_53, 
                style: style_CargaGeralCargaConteinerizadaGranelSlido_53,
                popuplayertitle: 'Carga Geral/Carga Conteinerizada/Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralCargaConteinerizadaGranelSlido_53.png" /> Carga Geral/Carga Conteinerizada/Granel Sólido'
            });
var format_CargaGeralGranelSlido_54 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlido_54 = format_CargaGeralGranelSlido_54.readFeatures(json_CargaGeralGranelSlido_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlido_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlido_54.addFeatures(features_CargaGeralGranelSlido_54);
var lyr_CargaGeralGranelSlido_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlido_54, 
                style: style_CargaGeralGranelSlido_54,
                popuplayertitle: 'Carga Geral/Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlido_54.png" /> Carga Geral/Granel Sólido'
            });
var format_CargaGeral_55 = new ol.format.GeoJSON();
var features_CargaGeral_55 = format_CargaGeral_55.readFeatures(json_CargaGeral_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeral_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_55.addFeatures(features_CargaGeral_55);
var lyr_CargaGeral_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_55, 
                style: style_CargaGeral_55,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_55.png" /> Carga Geral'
            });
var format_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56 = new ol.format.GeoJSON();
var features_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56 = format_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56.readFeatures(json_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56.addFeatures(features_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56);
var lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56, 
                style: style_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56,
                popuplayertitle: 'Carga Geral/Carga Conteinerizada/Granel Sólido/Passageiros',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56.png" /> Carga Geral/Carga Conteinerizada/Granel Sólido/Passageiros'
            });
var format_CargaGeralCargaConteinerizadaGranelSlido_57 = new ol.format.GeoJSON();
var features_CargaGeralCargaConteinerizadaGranelSlido_57 = format_CargaGeralCargaConteinerizadaGranelSlido_57.readFeatures(json_CargaGeralCargaConteinerizadaGranelSlido_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralCargaConteinerizadaGranelSlido_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralCargaConteinerizadaGranelSlido_57.addFeatures(features_CargaGeralCargaConteinerizadaGranelSlido_57);
var lyr_CargaGeralCargaConteinerizadaGranelSlido_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralCargaConteinerizadaGranelSlido_57, 
                style: style_CargaGeralCargaConteinerizadaGranelSlido_57,
                popuplayertitle: 'Carga Geral/Carga Conteinerizada/Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralCargaConteinerizadaGranelSlido_57.png" /> Carga Geral/Carga Conteinerizada/Granel Sólido'
            });
var format_CargaGeralGranelSlido_58 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlido_58 = format_CargaGeralGranelSlido_58.readFeatures(json_CargaGeralGranelSlido_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlido_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlido_58.addFeatures(features_CargaGeralGranelSlido_58);
var lyr_CargaGeralGranelSlido_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlido_58, 
                style: style_CargaGeralGranelSlido_58,
                popuplayertitle: 'Carga Geral/Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlido_58.png" /> Carga Geral/Granel Sólido'
            });
var format_CargaGeral_59 = new ol.format.GeoJSON();
var features_CargaGeral_59 = format_CargaGeral_59.readFeatures(json_CargaGeral_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeral_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_59.addFeatures(features_CargaGeral_59);
var lyr_CargaGeral_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_59, 
                style: style_CargaGeral_59,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_59.png" /> Carga Geral'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_60 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_60 = format_reasAfetassOperaesPorturiasLongoPrazo_60.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_60.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_60);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_60, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_60,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_60.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_61 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_61 = format_reasAfetassOperaesPorturiasMdioPrazo_61.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_61.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_61);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_61, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_61,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_61.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_62 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_62 = format_reasAfetassOperaesPorturiasCurtoPrazo_62.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_62.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_62);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_62, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_62,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_62.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_63 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_63 = format_reasAfetassOperaesPorturiasSituaoAtual_63.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_63.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_63);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_63, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_63,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_63.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeIlhus_64 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeIlhus_64 = format_PoligonaldareadoPortoOrganizadodeIlhus_64.readFeatures(json_PoligonaldareadoPortoOrganizadodeIlhus_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodeIlhus_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeIlhus_64.addFeatures(features_PoligonaldareadoPortoOrganizadodeIlhus_64);
var lyr_PoligonaldareadoPortoOrganizadodeIlhus_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeIlhus_64, 
                style: style_PoligonaldareadoPortoOrganizadodeIlhus_64,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Ilhéus',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeIlhus_64.png" /> Poligonal da Área do Porto Organizado de Ilhéus'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeIlhus_64,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado'});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_60,lyr_reasAfetassOperaesPorturiasMdioPrazo_61,lyr_reasAfetassOperaesPorturiasCurtoPrazo_62,lyr_reasAfetassOperaesPorturiasSituaoAtual_63,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56,lyr_CargaGeralCargaConteinerizadaGranelSlido_57,lyr_CargaGeralGranelSlido_58,lyr_CargaGeral_59,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52,lyr_CargaGeralCargaConteinerizadaGranelSlido_53,lyr_CargaGeralGranelSlido_54,lyr_CargaGeral_55,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48,lyr_CargaGeralCargaConteinerizadaGranelSlido_49,lyr_CargaGeralGranelSlido_50,lyr_CargaGeral_51,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44,lyr_CargaGeralCargaConteinerizadaGranelSlido_45,lyr_CargaGeralGranelSlido_46,lyr_CargaGeral_47,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_39,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_35,lyr_ArmazenagemMdioPrazo_36,lyr_ArmazenagemCurtoPrazo_37,lyr_ArmazenagemSituaoAtual_38,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_31,lyr_AcostagemMdioPrazo_32,lyr_AcostagemCurtoPrazo_33,lyr_AcostagemSituaoAtual_34,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_27,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_28,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_29,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_30,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta '});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_19,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos'});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_15,lyr_AcessosRodoviriosInternosMdioPrazo_16,lyr_AcessosRodoviriosInternosCurtoPrazo_17,lyr_AcessosRodoviriosInternosSituaoAtual_18,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_11,lyr_CanaisdeAcessoMdioPrazo_12,lyr_CanaisdeAcessoCurtoPrazo_13,lyr_CanaisdeAcessoSituaoAtual_14,],
                                fold: 'open',
                                title: 'Canais de Acesso'});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_7,lyr_BaciasdeEvoluoMdioPrazo_8,lyr_BaciasdeEvoluoCurtoPrazo_9,lyr_BaciasdeEvoluoSituaoAtual_10,],
                                fold: 'open',
                                title: 'Bacias de Evolução'});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_3,lyr_FundeadourosMdioPrazo_4,lyr_FundeadourosCurtoPrazo_5,lyr_FundeadourosSituaoAtual_6,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_reasUrbanaseRurais = new ol.layer.Group({
                                layers: [lyr_reasUrbanaseRurais_2,],
                                fold: 'open',
                                title: 'Áreas Urbanas e Rurais '});
var group_UnidadesdeConservao = new ol.layer.Group({
                                layers: [lyr_UnidadesdeConservao_1,],
                                fold: 'open',
                                title: 'Unidades de Conservação'});

lyr_GoogleSatellite_0.setVisible(true);lyr_UnidadesdeConservao_1.setVisible(false);lyr_reasUrbanaseRurais_2.setVisible(false);lyr_FundeadourosLongoPrazo_3.setVisible(false);lyr_FundeadourosMdioPrazo_4.setVisible(false);lyr_FundeadourosCurtoPrazo_5.setVisible(false);lyr_FundeadourosSituaoAtual_6.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_8.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_9.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_10.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_11.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_12.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_13.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_14.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_15.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_16.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_17.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_18.setVisible(false);lyr_AcessosRodoviriosExternos_19.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_27.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_28.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_29.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_30.setVisible(false);lyr_AcostagemLongoPrazo_31.setVisible(false);lyr_AcostagemMdioPrazo_32.setVisible(false);lyr_AcostagemCurtoPrazo_33.setVisible(false);lyr_AcostagemSituaoAtual_34.setVisible(false);lyr_ArmazenagemLongoPrazo_35.setVisible(false);lyr_ArmazenagemMdioPrazo_36.setVisible(false);lyr_ArmazenagemCurtoPrazo_37.setVisible(false);lyr_ArmazenagemSituaoAtual_38.setVisible(false);lyr_reaseInstalaesAlfandegadas_39.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43.setVisible(false);lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44.setVisible(false);lyr_CargaGeralCargaConteinerizadaGranelSlido_45.setVisible(false);lyr_CargaGeralGranelSlido_46.setVisible(false);lyr_CargaGeral_47.setVisible(false);lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48.setVisible(false);lyr_CargaGeralCargaConteinerizadaGranelSlido_49.setVisible(false);lyr_CargaGeralGranelSlido_50.setVisible(false);lyr_CargaGeral_51.setVisible(false);lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52.setVisible(false);lyr_CargaGeralCargaConteinerizadaGranelSlido_53.setVisible(false);lyr_CargaGeralGranelSlido_54.setVisible(false);lyr_CargaGeral_55.setVisible(false);lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56.setVisible(false);lyr_CargaGeralCargaConteinerizadaGranelSlido_57.setVisible(false);lyr_CargaGeralGranelSlido_58.setVisible(false);lyr_CargaGeral_59.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_60.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_61.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_62.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_63.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeIlhus_64.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_UnidadesdeConservao,group_reasUrbanaseRurais,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_Acostagem,group_Armazenagem,group_reaseInstalaesAlfandegadas,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_UnidadesdeConservao_1.set('fieldAliases', {'Nome': 'Nome', 'Inst legal': 'Instrumento Legal ', 'Area': 'Área (m²) ', });
lyr_reasUrbanaseRurais_2.set('fieldAliases', {'INST.LEGAL': 'Instrumento Legal ', 'AREA': 'Área (m²) ', 'TIPO': 'Tipo de Área ', });
lyr_FundeadourosLongoPrazo_3.set('fieldAliases', {'FUNÇÃO': 'Função ', 'CALADO': 'Calado (m) ', 'N Ident': 'Número de Identificação ', });
lyr_FundeadourosMdioPrazo_4.set('fieldAliases', {'FUNÇÃO': 'Função ', 'CALADO': 'Calado (m) ', 'N Ident': 'Número de Identificação ', });
lyr_FundeadourosCurtoPrazo_5.set('fieldAliases', {'FUNÇÃO': 'Função ', 'CALADO': 'Calado (m) ', 'N Ident': 'Número de Identificação ', });
lyr_FundeadourosSituaoAtual_6.set('fieldAliases', {'FUNÇÃO': 'Função ', 'CALADO': 'Calado (m) ', 'N Ident': 'Número de Identificação ', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldAliases', {'CALADO': 'Calado (m) ', 'FUNÇÃO': 'Função ', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldAliases', {'CALADO': 'Calado (m) ', 'FUNÇÃO': 'Função ', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldAliases', {'CALADO': 'Calado (m) ', 'FUNÇÃO': 'Função ', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldAliases', {'CALADO': 'Calado (m) ', 'FUNÇÃO': 'Função ', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldAliases', {'CALADO': 'Calado (m) ', 'TRECHO': 'Trecho ', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldAliases', {'CALADO': 'Calado (m) ', 'TRECHO': 'Trecho ', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldAliases', {'CALADO': 'Calado (m) ', 'TRECHO': 'Trecho ', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldAliases', {'Calado': 'Calado (m) ', 'Trecho': 'Trecho', });
lyr_AcessosRodoviriosInternosLongoPrazo_15.set('fieldAliases', {'N.PISTA': 'Número de Pistas de Rolamento ', 'Nome': 'Identificação ', });
lyr_AcessosRodoviriosInternosMdioPrazo_16.set('fieldAliases', {'N.PISTA': 'Número de Pistas de Rolamento ', 'Nome': 'Identificação ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_17.set('fieldAliases', {'N.PISTA': 'Número de Pistas de Rolamento ', 'Nome': 'Identificação ', });
lyr_AcessosRodoviriosInternosSituaoAtual_18.set('fieldAliases', {'N.PISTA': 'Número de Pistas de Rolamento ', 'Nome': 'Identificação ', });
lyr_AcessosRodoviriosExternos_19.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'Jurisd': 'Jurisdição ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.set('fieldAliases', {'Nome': 'Nome', 'Area m²': 'Área (m²) ', 'Obs': 'Observação', 'Util área': 'Utilização Atual da Área ', 'T Explo': 'Tipo de Exploração ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.set('fieldAliases', {'Nome': 'Nome', 'Area m²': 'Área (m²)', 'Obs': 'Observação', 'Util área': 'Utilização Atual da Área ', 'T Explo': 'Tipo de Exploração ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.set('fieldAliases', {'Nome': 'Nome', 'Area m²': 'Área (m²) ', 'Obs': 'Observação', 'Util área': 'Utilização Atual da Área ', 'T Explo': 'Tipo de Exploração ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.set('fieldAliases', {'Nome': 'Nome', 'Area m²': 'Área (m²) ', 'Obs': 'Observação', 'Util área': 'Utilização Atual da Área ', 'T Explo': 'Tipo de Exploração', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24.set('fieldAliases', {'Nome': 'Nome', 'Area m²': 'Área (m²) ', 'T.CESSAO': 'Tipo de Cessão ', 'RESPONSAV': 'Responsável ', 'ATIVIDADE': 'Atividade Desenvolvida ', 'Obs': 'Observação', 'D. Inicio': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25.set('fieldAliases', {'Nome': 'Nome', 'Area m²': 'Área (m²) ', 'T.CESSAO': 'Tipo de Cessão ', 'RESPONSAV': 'Responsável ', 'ATIVIDADE': 'Atividade Desenvolvida ', 'Obs': 'Observação', 'D. Inicio': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26.set('fieldAliases', {'Nome': 'Nome', 'Area m²': 'Área (m²) ', 'T.CESSAO': 'Tipo de Cessão ', 'RESPONSAV': 'Responsável ', 'ATIVIDADE': 'Atividade Desenvolvida ', 'Obs': 'Observação', 'D. Inicio': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_27.set('fieldAliases', {'Nome': 'Nome', 'Area m²': 'Área (m²) ', 'Destinacao': 'Destinação ', 'Obs': 'Observação', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_28.set('fieldAliases', {'Nome': 'Nome', 'Area m²': 'Área (m²) ', 'Destinacao': 'Destinação ', 'Obs': 'Observação', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_29.set('fieldAliases', {'Nome': 'Nome', 'Area m²': 'Área (m²) ', 'Destinacao': 'Destinação ', 'Obs': 'Observação', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_30.set('fieldAliases', {'Nome': 'Nome', 'Area m²': 'Área (m²) ', 'Destinacao': 'Destinação ', 'Obs': 'Observação', });
lyr_AcostagemLongoPrazo_31.set('fieldAliases', {'ID_CAIS': 'Identificador do Cais ', 'COMP(M)': 'Comprimento (m) ', 'CALADO': 'Calado (m) ', 'ID_BERÇO': 'Identificador do Berço ', 'C_CONST': 'Características Construtivas ', 'Per. Carga': 'Perfil de Carga ', 'PROFUND': 'Profundidade (m) ', 'Obs': 'Observação', });
lyr_AcostagemMdioPrazo_32.set('fieldAliases', {'ID_CAIS': 'Identificador do Cais ', 'COMP(M)': 'Comprimento (m) ', 'CALADO': 'Calado (m) ', 'ID_BERÇO': 'Identificador do Berço ', 'C_CONST': 'Características Construtivas ', 'Per. Carga': 'Perfil de Carga ', 'PROFUND': 'Profundidade (m) ', 'Obs': 'Observação', });
lyr_AcostagemCurtoPrazo_33.set('fieldAliases', {'ID_CAIS': 'Identificador do Cais ', 'COMP(M)': 'Comprimento (m) ', 'CALADO': 'Calado (m) ', 'ID_BERÇO': 'Identificador do Berço ', 'C_CONST': 'Características Construtivas ', 'Per. Carga': 'Perfil de Carga ', 'PROFUND': 'Profundidade (m) ', 'Obs': 'Observação', });
lyr_AcostagemSituaoAtual_34.set('fieldAliases', {'ID_CAIS': 'Identificador do Cais ', 'COMP(M)': 'Comprimento (m) ', 'CALADO': 'Calado (m) ', 'ID_BERÇO': 'Identificador do Berço ', 'C_CONST': 'Características Construtivas ', 'Per. Carga': 'Perfil de Carga ', 'PROFUND': 'Profundidade (m) ', 'Obs': 'Observação', });
lyr_ArmazenagemLongoPrazo_35.set('fieldAliases', {'Área m²': 'Área (m²) ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'T. Instal.': 'Tipo da Instalação ', });
lyr_ArmazenagemMdioPrazo_36.set('fieldAliases', {'Área m²': 'Área (m²) ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'T. Instal.': 'Tipo da Instalação ', });
lyr_ArmazenagemCurtoPrazo_37.set('fieldAliases', {'Área m²': 'Área (m²) ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'T. Instal.': 'Tipo da Instalação ', });
lyr_ArmazenagemSituaoAtual_38.set('fieldAliases', {'Área m²': 'Área (m²) ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'T. Instal.': 'Tipo da Instalação ', });
lyr_reaseInstalaesAlfandegadas_39.set('fieldAliases', {'Inst Legal': 'Instrumento Legal', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'Obs': 'Observação', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'Obs': 'Observação', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'Obs': 'Observação', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'Obs': 'Observação', 'Nome': 'Nome', });
lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_CargaGeralCargaConteinerizadaGranelSlido_45.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_CargaGeralGranelSlido_46.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_CargaGeral_47.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_CargaGeralCargaConteinerizadaGranelSlido_49.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_CargaGeralGranelSlido_50.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_CargaGeral_51.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_CargaGeralCargaConteinerizadaGranelSlido_53.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_CargaGeralGranelSlido_54.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_CargaGeral_55.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_CargaGeralCargaConteinerizadaGranelSlido_57.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_CargaGeralGranelSlido_58.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_CargaGeral_59.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_60.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_61.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_62.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_63.set('fieldAliases', {'Per Carga': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação', 'Nome': 'Nome', });
lyr_PoligonaldareadoPortoOrganizadodeIlhus_64.set('fieldAliases', {'Name': 'Anexo ', 'ins. legal': 'Instrumento Legal ', });
lyr_UnidadesdeConservao_1.set('fieldImages', {'Nome': 'TextEdit', 'Inst legal': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasUrbanaseRurais_2.set('fieldImages', {'INST.LEGAL': 'TextEdit', 'AREA': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_FundeadourosLongoPrazo_3.set('fieldImages', {'FUNÇÃO': 'TextEdit', 'CALADO': 'TextEdit', 'N Ident': 'TextEdit', });
lyr_FundeadourosMdioPrazo_4.set('fieldImages', {'FUNÇÃO': 'TextEdit', 'CALADO': 'TextEdit', 'N Ident': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_5.set('fieldImages', {'FUNÇÃO': 'TextEdit', 'CALADO': 'TextEdit', 'N Ident': 'TextEdit', });
lyr_FundeadourosSituaoAtual_6.set('fieldImages', {'FUNÇÃO': 'TextEdit', 'CALADO': 'TextEdit', 'N Ident': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldImages', {'CALADO': 'TextEdit', 'FUNÇÃO': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldImages', {'CALADO': 'TextEdit', 'FUNÇÃO': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldImages', {'CALADO': 'TextEdit', 'FUNÇÃO': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldImages', {'CALADO': 'TextEdit', 'FUNÇÃO': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldImages', {'CALADO': 'TextEdit', 'TRECHO': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldImages', {'CALADO': 'TextEdit', 'TRECHO': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldImages', {'CALADO': 'TextEdit', 'TRECHO': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldImages', {'Calado': 'TextEdit', 'Trecho': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_15.set('fieldImages', {'N.PISTA': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcessosRodoviriosInternosMdioPrazo_16.set('fieldImages', {'N.PISTA': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcessosRodoviriosInternosCurtoPrazo_17.set('fieldImages', {'N.PISTA': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcessosRodoviriosInternosSituaoAtual_18.set('fieldImages', {'N.PISTA': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcessosRodoviriosExternos_19.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'Jurisd': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.set('fieldImages', {'Nome': 'TextEdit', 'Area m²': 'TextEdit', 'Obs': 'TextEdit', 'Util área': 'TextEdit', 'T Explo': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.set('fieldImages', {'Nome': 'TextEdit', 'Area m²': 'TextEdit', 'Obs': 'TextEdit', 'Util área': 'TextEdit', 'T Explo': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.set('fieldImages', {'Nome': 'TextEdit', 'Area m²': 'TextEdit', 'Obs': 'TextEdit', 'Util área': 'TextEdit', 'T Explo': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.set('fieldImages', {'Nome': 'TextEdit', 'Area m²': 'TextEdit', 'Obs': 'TextEdit', 'Util área': 'TextEdit', 'T Explo': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24.set('fieldImages', {'Nome': 'TextEdit', 'Area m²': 'TextEdit', 'T.CESSAO': 'TextEdit', 'RESPONSAV': 'TextEdit', 'ATIVIDADE': 'TextEdit', 'Obs': 'TextEdit', 'D. Inicio': 'TextEdit', 'D. Term.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25.set('fieldImages', {'Nome': 'TextEdit', 'Area m²': 'TextEdit', 'T.CESSAO': 'TextEdit', 'RESPONSAV': 'TextEdit', 'ATIVIDADE': 'TextEdit', 'Obs': 'TextEdit', 'D. Inicio': 'TextEdit', 'D. Term.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26.set('fieldImages', {'Nome': 'TextEdit', 'Area m²': 'TextEdit', 'T.CESSAO': 'TextEdit', 'RESPONSAV': 'TextEdit', 'ATIVIDADE': 'TextEdit', 'Obs': 'TextEdit', 'D. Inicio': 'TextEdit', 'D. Term.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_27.set('fieldImages', {'Nome': 'TextEdit', 'Area m²': 'TextEdit', 'Destinacao': 'TextEdit', 'Obs': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_28.set('fieldImages', {'Nome': 'TextEdit', 'Area m²': 'TextEdit', 'Destinacao': 'TextEdit', 'Obs': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_29.set('fieldImages', {'Nome': 'TextEdit', 'Area m²': 'TextEdit', 'Destinacao': 'TextEdit', 'Obs': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_30.set('fieldImages', {'Nome': 'TextEdit', 'Area m²': 'TextEdit', 'Destinacao': 'TextEdit', 'Obs': 'TextEdit', });
lyr_AcostagemLongoPrazo_31.set('fieldImages', {'ID_CAIS': 'TextEdit', 'COMP(M)': 'Range', 'CALADO': 'TextEdit', 'ID_BERÇO': 'Range', 'C_CONST': 'TextEdit', 'Per. Carga': 'TextEdit', 'PROFUND': 'TextEdit', 'Obs': 'TextEdit', });
lyr_AcostagemMdioPrazo_32.set('fieldImages', {'ID_CAIS': 'TextEdit', 'COMP(M)': 'Range', 'CALADO': 'TextEdit', 'ID_BERÇO': 'Range', 'C_CONST': 'TextEdit', 'Per. Carga': 'TextEdit', 'PROFUND': 'TextEdit', 'Obs': 'TextEdit', });
lyr_AcostagemCurtoPrazo_33.set('fieldImages', {'ID_CAIS': 'TextEdit', 'COMP(M)': 'Range', 'CALADO': 'TextEdit', 'ID_BERÇO': 'Range', 'C_CONST': 'TextEdit', 'Per. Carga': 'TextEdit', 'PROFUND': 'TextEdit', 'Obs': 'TextEdit', });
lyr_AcostagemSituaoAtual_34.set('fieldImages', {'ID_CAIS': 'TextEdit', 'COMP(M)': 'Range', 'CALADO': 'TextEdit', 'ID_BERÇO': 'Range', 'C_CONST': 'TextEdit', 'Per. Carga': 'TextEdit', 'PROFUND': 'TextEdit', 'Obs': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_35.set('fieldImages', {'Área m²': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_36.set('fieldImages', {'Área m²': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_37.set('fieldImages', {'Área m²': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_38.set('fieldImages', {'Área m²': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_39.set('fieldImages', {'Inst Legal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40.set('fieldImages', {'Perfil': 'TextEdit', 'Área m²': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41.set('fieldImages', {'Perfil': 'TextEdit', 'Área m²': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42.set('fieldImages', {'Perfil': 'TextEdit', 'Área m²': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43.set('fieldImages', {'Perfil': 'TextEdit', 'Área m²': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeralCargaConteinerizadaGranelSlido_45.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeralGranelSlido_46.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeral_47.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeralCargaConteinerizadaGranelSlido_49.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeralGranelSlido_50.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeral_51.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeralCargaConteinerizadaGranelSlido_53.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeralGranelSlido_54.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeral_55.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeralCargaConteinerizadaGranelSlido_57.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeralGranelSlido_58.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeral_59.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_60.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_61.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_62.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_63.set('fieldImages', {'Per Carga': 'TextEdit', 'Área m²': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeIlhus_64.set('fieldImages', {'Name': 'TextEdit', 'ins. legal': 'TextEdit', });
lyr_UnidadesdeConservao_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Inst legal': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasUrbanaseRurais_2.set('fieldLabels', {'INST.LEGAL': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', });
lyr_FundeadourosLongoPrazo_3.set('fieldLabels', {'FUNÇÃO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', 'N Ident': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_4.set('fieldLabels', {'FUNÇÃO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', 'N Ident': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_5.set('fieldLabels', {'FUNÇÃO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', 'N Ident': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_6.set('fieldLabels', {'FUNÇÃO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', 'N Ident': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldLabels', {'CALADO': 'inline label - visible with data', 'FUNÇÃO': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldLabels', {'CALADO': 'inline label - visible with data', 'FUNÇÃO': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldLabels', {'CALADO': 'inline label - visible with data', 'FUNÇÃO': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldLabels', {'CALADO': 'inline label - visible with data', 'FUNÇÃO': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldLabels', {'CALADO': 'inline label - visible with data', 'TRECHO': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldLabels', {'CALADO': 'inline label - visible with data', 'TRECHO': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldLabels', {'CALADO': 'inline label - visible with data', 'TRECHO': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_15.set('fieldLabels', {'N.PISTA': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_16.set('fieldLabels', {'N.PISTA': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_17.set('fieldLabels', {'N.PISTA': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_18.set('fieldLabels', {'N.PISTA': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_19.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'Jurisd': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area m²': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Util área': 'inline label - visible with data', 'T Explo': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area m²': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Util área': 'inline label - visible with data', 'T Explo': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area m²': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Util área': 'inline label - visible with data', 'T Explo': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area m²': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Util área': 'inline label - visible with data', 'T Explo': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_24.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area m²': 'inline label - visible with data', 'T.CESSAO': 'inline label - visible with data', 'RESPONSAV': 'inline label - visible with data', 'ATIVIDADE': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area m²': 'inline label - visible with data', 'T.CESSAO': 'inline label - visible with data', 'RESPONSAV': 'inline label - visible with data', 'ATIVIDADE': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area m²': 'inline label - visible with data', 'T.CESSAO': 'inline label - visible with data', 'RESPONSAV': 'inline label - visible with data', 'ATIVIDADE': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_27.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area m²': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_28.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area m²': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_29.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area m²': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_30.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area m²': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_31.set('fieldLabels', {'ID_CAIS': 'inline label - visible with data', 'COMP(M)': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', 'ID_BERÇO': 'inline label - visible with data', 'C_CONST': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', 'PROFUND': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_32.set('fieldLabels', {'ID_CAIS': 'inline label - visible with data', 'COMP(M)': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', 'ID_BERÇO': 'inline label - visible with data', 'C_CONST': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', 'PROFUND': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_33.set('fieldLabels', {'ID_CAIS': 'inline label - visible with data', 'COMP(M)': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', 'ID_BERÇO': 'inline label - visible with data', 'C_CONST': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', 'PROFUND': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_34.set('fieldLabels', {'ID_CAIS': 'inline label - visible with data', 'COMP(M)': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', 'ID_BERÇO': 'inline label - visible with data', 'C_CONST': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', 'PROFUND': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_35.set('fieldLabels', {'Área m²': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_36.set('fieldLabels', {'Área m²': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_37.set('fieldLabels', {'Área m²': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_38.set('fieldLabels', {'Área m²': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_39.set('fieldLabels', {'Inst Legal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_40.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_41.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_42.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_43.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_44.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeralCargaConteinerizadaGranelSlido_45.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeralGranelSlido_46.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeral_47.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_48.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeralCargaConteinerizadaGranelSlido_49.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeralGranelSlido_50.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeral_51.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_52.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeralCargaConteinerizadaGranelSlido_53.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeralGranelSlido_54.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeral_55.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeralCargaConteinerizadaGranelSlidoPassageiros_56.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeralCargaConteinerizadaGranelSlido_57.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeralGranelSlido_58.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeral_59.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_60.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_61.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_62.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_63.set('fieldLabels', {'Per Carga': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeIlhus_64.set('fieldLabels', {'Name': 'inline label - visible with data', 'ins. legal': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeIlhus_64.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});