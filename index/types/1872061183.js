// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1872061183"] = [{"values":[{"sourceSpan":{"start":[49,1],"name":".spago/svg-parser/v1.0.0/src/Svg/Parser.purs","end":[53,4]},"score":0,"packageName":"svg-parser","name":"Element","moduleName":"Svg.Parser","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["name",{"tag":"TypeConstructor","contents":[["Prim"],"String"]},{"tag":"RCons","contents":["attributes",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["Svg","Parser"],"SvgAttribute"]}]},{"tag":"RCons","contents":["children",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["Svg","Parser"],"SvgNode"]}]},{"tag":"REmpty","contents":{}}]}]}]}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"An Element consists of a tag name, a list of attributes, a list of children nodes.\n\n<svg xmlns=\"http://www.w3.org/2000/svg\"></svg>\n\nwill be parsed as\n\n``` purescript\n{ name: \"svg\"\n, attributes: [ SvgAttribute \"xmlns\" \"http://www.w3.org/2000/svg\" ]\n, children: []\n}\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[49,1],"name":".spago/radox/v1.0.0/src/Internal/Types.purs","end":[53,6]},"score":0,"packageName":"radox","name":"RadoxStore","moduleName":"Radox.Internal.Types","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["dispatch",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Radox","Internal","Types"],"Dispatcher"]},{"tag":"TypeVar","contents":"combinedActionType"}]},{"tag":"RCons","contents":["getState",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"stateType"}]},{"tag":"RCons","contents":["state",{"tag":"TypeVar","contents":"stateType"},{"tag":"REmpty","contents":{}}]}]}]}]},"arguments":[["combinedActionType",null],["stateType",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"Type of store shared around so that the state can be accessed without needing Effect\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[28,1],"name":".spago/html-parser-halogen/v1.0.0-rc.2/src/Html/Parser.purs","end":[32,4]},"score":0,"packageName":"html-parser-halogen","name":"Element","moduleName":"Html.Parser","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["name",{"tag":"TypeConstructor","contents":[["Prim"],"String"]},{"tag":"RCons","contents":["attributes",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["Html","Parser"],"HtmlAttribute"]}]},{"tag":"RCons","contents":["children",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["Html","Parser"],"HtmlNode"]}]},{"tag":"REmpty","contents":{}}]}]}]}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"}]