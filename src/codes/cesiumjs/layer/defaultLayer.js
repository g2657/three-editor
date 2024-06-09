export default

    `import { Cesium } from '/three-editor/dist/cesium/index.js'

const viewer = new Cesium.Viewer(document.getElementById('box'), {

    animation: false,//是否创建动画小器件，左下角仪表    

        baseLayerPicker: false,//是否显示图层选择器，右上角图层选择按钮

        fullscreenButton: false,//是否显示全屏按钮，右下角全屏选择按钮

        geocoder: false,//是否显示geocoder小器件，右上角查询按钮    

        homeButton: false,//是否显示Home按钮，右上角home按钮 

        sceneMode: Cesium.SceneMode.SCENE3D,//初始场景模式

        sceneModePicker: false,//是否显示3D/2D选择器，右上角按钮 

        navigationHelpButton: false,//是否显示右上角的帮助按钮  

        selectionIndicator: false,//是否显示选取指示器组件   

        timeline: false,//是否显示时间轴    

        infoBox: false,//是否显示信息框   

        scene3DOnly: true,//如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源  

        orderIndependentTranslucency: false, //是否启用无序透明

        contextOptions: { webgl: { alpha: true } },

        skyBox: new Cesium.SkyBox({ show: false }),

        fxaa: false

})

viewer.scene.postProcessStages.fxaa.enabled = false;

viewer.scene.globe.maximumScreenSpaceError = 4 / 3;

viewer.scene.sun.show = false

viewer.scene.moon.show = false

viewer.scene.skyBox.show = false

viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0)

viewer._cesiumWidget._creditContainer.style.display = "none"

`