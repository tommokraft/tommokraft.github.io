gdjs.End_32ScreenCode = {};
gdjs.End_32ScreenCode.GDStartObjects1= [];
gdjs.End_32ScreenCode.GDStartObjects2= [];
gdjs.End_32ScreenCode.GDNewObjectObjects1= [];
gdjs.End_32ScreenCode.GDNewObjectObjects2= [];
gdjs.End_32ScreenCode.GDDesertBackground2Objects1= [];
gdjs.End_32ScreenCode.GDDesertBackground2Objects2= [];
gdjs.End_32ScreenCode.GDNewObject2Objects1= [];
gdjs.End_32ScreenCode.GDNewObject2Objects2= [];
gdjs.End_32ScreenCode.GDObjectivesObjects1= [];
gdjs.End_32ScreenCode.GDObjectivesObjects2= [];
gdjs.End_32ScreenCode.GDStatsObjects1= [];
gdjs.End_32ScreenCode.GDStatsObjects2= [];

gdjs.End_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.End_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.End_32ScreenCode.condition1IsTrue_0 = {val:false};


gdjs.End_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Stats"), gdjs.End_32ScreenCode.GDStatsObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "AdhesiveWombat - Night Shade2.mp3", true, 10, 1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDStatsObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDStatsObjects1[i].setString("Kills: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + " TimePlayed: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))) + " Seconds");
}
}}

}


{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.End_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_32ScreenCode.GDStartObjects1.length = 0;
gdjs.End_32ScreenCode.GDStartObjects2.length = 0;
gdjs.End_32ScreenCode.GDNewObjectObjects1.length = 0;
gdjs.End_32ScreenCode.GDNewObjectObjects2.length = 0;
gdjs.End_32ScreenCode.GDDesertBackground2Objects1.length = 0;
gdjs.End_32ScreenCode.GDDesertBackground2Objects2.length = 0;
gdjs.End_32ScreenCode.GDNewObject2Objects1.length = 0;
gdjs.End_32ScreenCode.GDNewObject2Objects2.length = 0;
gdjs.End_32ScreenCode.GDObjectivesObjects1.length = 0;
gdjs.End_32ScreenCode.GDObjectivesObjects2.length = 0;
gdjs.End_32ScreenCode.GDStatsObjects1.length = 0;
gdjs.End_32ScreenCode.GDStatsObjects2.length = 0;

gdjs.End_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['End_32ScreenCode'] = gdjs.End_32ScreenCode;
