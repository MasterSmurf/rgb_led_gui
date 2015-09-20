/**
 * Created by MasterSmurf on 19.09.2015.
 */

var Controller = function(module){

    var selectors = {
        tabs: {
            default: '#default',
            oneColor: '#oneColor',
            twoColor: '#twoColor',
            threeColor: '#threeColor'
        }
    };

    function render(target, templateSelector, data){
        var source,
            template;

        source   = $("#" + templateSelector).html();
        template = Handlebars.compile(source);
        $(target).html(template(data));
    }

    function switchTab(newTabId){
        var i,
            keys;

        keys = Object.keys(selectors.tabs);

        for(i = 0; i < keys.length; i++){
            if(newTabId === selectors.tabs[keys[i]]){
                $(selectors.tabs[keys[i]]).removeClass('hidden');
            }else{
                $(selectors.tabs[keys[i]]).addClass('hidden');
            }
        }
    }

    function oneColor(color){
        $.ajax(
            {
                url: 'cgi-bin/response.php?action=one_color&color1=' + color.slice(1, 7)

            }
        ).then(

        ).fail(

        );
    }

    module.oneColor = oneColor;

    module.render = render;
    module.switchTab = switchTab;

    return module;
}(Controller || {});






$(document).on('click', '.menu-option[data-target]', function(){
    Controller.switchTab($(this).data('target'));
});

$(document).on('change', '#oneColorPicker', function(){
    console.log($(this).val());
    Controller.oneColor($(this).val());
});
