//coco2d 配置文件

(function () {
    var d = document;
    var c = {

        //coco2d 配置
        menuType:'canvas',
        COCOS2D_DEBUG:2,
        box2d:false,
        chipmunk:false,
        showFPS:true,
        frameRate:60,
        loadExtension:true,
        tag:'gameCanvas',

        // 2
        engineDir:'./../cocos2d-html5-v2.2.3/cocos2d/',
        appFiles:[
            './Src/resource.js',
            './Src/mainlayer.js',
            './Src/main.js'
        ]
    };

    //运行入口
    window.addEventListener('DOMContentLoaded', function () {
        var s = d.createElement('script');

        if (c.SingleEngineFile && !c.engineDir) {
            s.src = c.SingleEngineFile;
        }
        else if (c.engineDir && !c.SingleEngineFile) {
            s.src = c.engineDir + '/jsloader.js';
        }
        else {
            alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
        }

        document.ccConfig = c;
        s.id = 'cocos2d-html5';
        d.body.appendChild(s);
    });
})();