/**
 * Created by gbdai on 14-5-20.
 */

//继承 LayerColor 类
var MainLayer =  cc.LayerColor.extend({

      ctor : function(){
          this._super();
          cc.associateWithNative( this, cc.LayerColor );
      },

      onEnter : function(){
           this._super();
           var player = cc.Sprite.create(s_player);

           //设置player到屏幕中间
          player.setPosition(player.getContentSize().width / 2, winSize.height / 2);

          //添加到图层中
          this.addChild(player);

      }


});


//创建实例
MainLayer.create = function () {
    var sg = new MainLayer();
    if (sg && sg.init(cc.c4b(255, 255, 255, 255))) {
        return sg;
    }
    return null;
};

MainLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = MainLayer.create();
    scene.addChild(layer);
    return scene;
};