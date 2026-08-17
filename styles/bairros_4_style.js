var size = 0;
var placement = 'point';

var style_bairros_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("''");
    var labelFont = "9.1px \'Roboto Condensed\', sans-serif";
    var labelFill = "#555555";
    var bufferColor = "#fafafa";
    var bufferWidth = 0.9000000000000005;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("NM_BAIRRO") !== null) {
        labelText = String(feature.get("NM_BAIRRO"));
    }
    
    var style = [ new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth,
                              textAlign, offsetX, offsetY, overflow, repeat)
    })];;

    return style;
};
