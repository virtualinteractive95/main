function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MXHDIy7ul1":
        Script1();
        break;
      case "6b39BG98D0u":
        Script2();
        break;
      case "6II8Rwpf7RM":
        Script3();
        break;
      case "5XyVkJxEgnK":
        Script4();
        break;
      case "5t8ZMEGNPGJ":
        Script5();
        break;
      case "6a3GJkz24og":
        Script6();
        break;
      case "5bHSaVEJPEv":
        Script7();
        break;
      case "6HEPnTksY5m":
        Script8();
        break;
      case "6kGrAmiiV2D":
        Script9();
        break;
      case "5rDqkbnTWNs":
        Script10();
        break;
      case "6WExhDwJFX9":
        Script11();
        break;
      case "6fIncd1FCmW":
        Script12();
        break;
      case "6DIZyKng9QY":
        Script13();
        break;
      case "6CehiWt3CHj":
        Script14();
        break;
      case "6HBDvpEwuch":
        Script15();
        break;
      case "6jCCoNdqVDV":
        Script16();
        break;
      case "6OrUF9zIzjB":
        Script17();
        break;
      case "6kYIsKaYnk1":
        Script18();
        break;
      case "68KxNSrJ4Sx":
        Script19();
        break;
      case "6OLMNcp6KyD":
        Script20();
        break;
      case "62WHs0jXmPa":
        Script21();
        break;
      case "5rVTX6ekCHg":
        Script22();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('63zoAP8nqZo');
const duration = 750;
const easing = 'ease-out';
const id = '5vOsVjATiT8';
const teeterAmount = 4;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
