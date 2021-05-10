gdjs.Start_32ScreenCode = {};
gdjs.Start_32ScreenCode.GDStartObjects1= [];
gdjs.Start_32ScreenCode.GDStartObjects2= [];
gdjs.Start_32ScreenCode.GDNewObjectObjects1= [];
gdjs.Start_32ScreenCode.GDNewObjectObjects2= [];
gdjs.Start_32ScreenCode.GDDesertBackground2Objects1= [];
gdjs.Start_32ScreenCode.GDDesertBackground2Objects2= [];
gdjs.Start_32ScreenCode.GDNewObject2Objects1= [];
gdjs.Start_32ScreenCode.GDNewObject2Objects2= [];
gdjs.Start_32ScreenCode.GDObjectivesObjects1= [];
gdjs.Start_32ScreenCode.GDObjectivesObjects2= [];

gdjs.Start_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition1IsTrue_0 = {val:false};


gdjs.Start_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "AdhesiveWombat - Night Shade2.mp3", true, 10, 1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


};

gdjs.Start_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32ScreenCode.GDStartObjects1.length = 0;
gdjs.Start_32ScreenCode.GDStartObjects2.length = 0;
gdjs.Start_32ScreenCode.GDNewObjectObjects1.length = 0;
gdjs.Start_32ScreenCode.GDNewObjectObjects2.length = 0;
gdjs.Start_32ScreenCode.GDDesertBackground2Objects1.length = 0;
gdjs.Start_32ScreenCode.GDDesertBackground2Objects2.length = 0;
gdjs.Start_32ScreenCode.GDNewObject2Objects1.length = 0;
gdjs.Start_32ScreenCode.GDNewObject2Objects2.length = 0;
gdjs.Start_32ScreenCode.GDObjectivesObjects1.length = 0;
gdjs.Start_32ScreenCode.GDObjectivesObjects2.length = 0;

gdjs.Start_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Start_32ScreenCode'] = gdjs.Start_32ScreenCode;
