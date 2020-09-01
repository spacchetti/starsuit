// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["248390284"] = [{"values":[{"sourceSpan":{"start":[276,1],"name":".spago/game/v2.0.0/src/Game/Aff/Web/Event.purs","end":[279,73]},"score":0,"packageInfo":{"values":["game"],"tag":"Package"},"name":"reduceKeyboardEventRow","moduleName":"Game.Aff.Web.Event","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run"],"Run"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Game","Aff","Web","Event"],"KeyboardEventRow"]},{"tag":"RCons","contents":["event",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run","Reader"],"READER"]},{"tag":"TypeConstructor","contents":[["Web","Event","Internal","Types"],"Event"]}]},{"tag":"RCons","contents":["effect",{"tag":"TypeConstructor","contents":[["Run"],"EFFECT"]},{"tag":"TypeVar","contents":"r"}]}]}]}}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run"],"Run"]},{"tag":"RCons","contents":["event",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run","Reader"],"READER"]},{"tag":"TypeConstructor","contents":[["Web","Event","Internal","Types"],"Event"]}]},{"tag":"RCons","contents":["effect",{"tag":"TypeConstructor","contents":[["Run"],"EFFECT"]},{"tag":"TypeVar","contents":"r"}]}]}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Assumes that the relevant `Event` is a `KeyboardEvent` (and `UIEvent`).\nThrows an error when attempting to read a value that doesn't exist on the\n`Event`. This function is not intended for use with events that are not\n`KeyboardEvent`s.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[203,1],"name":".spago/game/v2.0.0/src/Game/Aff/Web/Event.purs","end":[206,70]},"score":0,"packageInfo":{"values":["game"],"tag":"Package"},"name":"reduceMouseEventRow","moduleName":"Game.Aff.Web.Event","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run"],"Run"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Game","Aff","Web","Event"],"MouseEventRow"]},{"tag":"RCons","contents":["event",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run","Reader"],"READER"]},{"tag":"TypeConstructor","contents":[["Web","Event","Internal","Types"],"Event"]}]},{"tag":"RCons","contents":["effect",{"tag":"TypeConstructor","contents":[["Run"],"EFFECT"]},{"tag":"TypeVar","contents":"r"}]}]}]}}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run"],"Run"]},{"tag":"RCons","contents":["event",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run","Reader"],"READER"]},{"tag":"TypeConstructor","contents":[["Web","Event","Internal","Types"],"Event"]}]},{"tag":"RCons","contents":["effect",{"tag":"TypeConstructor","contents":[["Run"],"EFFECT"]},{"tag":"TypeVar","contents":"r"}]}]}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Assumes that the relevant `Event` is a `MouseEvent` (and `UIEvent`). The\ncurrent event target (`event.currentTarget`) must be a `HTMLElement`.\nThis function is not intended for use with events that do not meet these\ncriteria.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[162,1],"name":".spago/game/v2.0.0/src/Game/Aff/Web/Event.purs","end":[165,67]},"score":0,"packageInfo":{"values":["game"],"tag":"Package"},"name":"reduceUIEventRow","moduleName":"Game.Aff.Web.Event","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run"],"Run"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Game","Aff","Web","Event"],"UIEventRow"]},{"tag":"RCons","contents":["event",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run","Reader"],"READER"]},{"tag":"TypeConstructor","contents":[["Web","Event","Internal","Types"],"Event"]}]},{"tag":"RCons","contents":["effect",{"tag":"TypeConstructor","contents":[["Run"],"EFFECT"]},{"tag":"TypeVar","contents":"r"}]}]}]}}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run"],"Run"]},{"tag":"RCons","contents":["event",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run","Reader"],"READER"]},{"tag":"TypeConstructor","contents":[["Web","Event","Internal","Types"],"Event"]}]},{"tag":"RCons","contents":["effect",{"tag":"TypeConstructor","contents":[["Run"],"EFFECT"]},{"tag":"TypeVar","contents":"r"}]}]}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]