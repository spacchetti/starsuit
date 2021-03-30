// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2104205063"] = [{"values":[{"sourceSpan":{"start":[130,1],"name":".spago/spec/v5.0.0/src/Test/Spec/Tree.purs","end":[130,62]},"score":26,"packageInfo":{"values":["spec"],"tag":"Package"},"name":"parentSuite","moduleName":"Test.Spec.Tree","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Test","Spec","Tree"],"Path"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["path",{"tag":"TypeConstructor","contents":[["Test","Spec","Tree"],"Path"]},{"tag":"RCons","contents":["name",{"tag":"TypeConstructor","contents":[["Prim"],"String"]},{"tag":"REmpty","contents":{}}]}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[140,1],"name":".spago/strings/v5.0.0/src/Data/String/CodeUnits.purs","end":[140,59]},"score":37,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"uncons","moduleName":"Data.String.CodeUnits","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["head",{"tag":"TypeConstructor","contents":[["Prim"],"Char"]},{"tag":"RCons","contents":["tail",{"tag":"TypeConstructor","contents":[["Prim"],"String"]},{"tag":"REmpty","contents":{}}]}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns the first character and the rest of the string,\nif the string is not empty.\n\n```purescript\nuncons \"\" == Nothing\nuncons \"Hello World\" == Just { head: 'H', tail: \"ello World\" }\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[191,1],"name":".spago/strings/v5.0.0/src/Data/String/CodePoints.purs","end":[191,64]},"score":37,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"uncons","moduleName":"Data.String.CodePoints","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["head",{"tag":"TypeConstructor","contents":[["Data","String","CodePoints"],"CodePoint"]},{"tag":"RCons","contents":["tail",{"tag":"TypeConstructor","contents":[["Prim"],"String"]},{"tag":"REmpty","contents":{}}]}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns a record with the first code point and the remaining code points\nof the string. Returns Nothing if the string is empty. Operates in\nconstant space and time.\n\n```purescript\n>>> uncons \"𝐀𝐀 c 𝐀\"\nJust { head: CodePoint 0x1D400, tail: \"𝐀 c 𝐀\" }\n>>> uncons \"\"\nNothing\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[152,1],"name":".spago/bytestrings/v8.0.0/src/Data/ByteString.purs","end":[152,66]},"score":0,"packageInfo":{"values":["bytestrings"],"tag":"Package"},"name":"unsnoc","moduleName":"Data.ByteString","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","ByteString"],"ByteString"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeConstructor","contents":[["Data","ByteString"],"ByteString"]},{"tag":"RCons","contents":["last",{"tag":"TypeConstructor","contents":[["Data","ByteString"],"Octet"]},{"tag":"REmpty","contents":{}}]}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"*Θ(n)* Unappend a byte.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[147,1],"name":".spago/bytestrings/v8.0.0/src/Data/ByteString.purs","end":[147,66]},"score":0,"packageInfo":{"values":["bytestrings"],"tag":"Package"},"name":"uncons","moduleName":"Data.ByteString","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","ByteString"],"ByteString"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["head",{"tag":"TypeConstructor","contents":[["Data","ByteString"],"Octet"]},{"tag":"RCons","contents":["tail",{"tag":"TypeConstructor","contents":[["Data","ByteString"],"ByteString"]},{"tag":"REmpty","contents":{}}]}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"*Θ(n)* Unprepend a byte.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[460,1],"name":".spago/ace/v8.0.0/src/Ace/EditSession.purs","end":[460,85]},"score":0,"packageInfo":{"values":["ace"],"tag":"Package"},"name":"getWrapLimitRange","moduleName":"Ace.EditSession","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ace","Types"],"EditSession"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["min",{"tag":"TypeConstructor","contents":[["Prim"],"Int"]},{"tag":"RCons","contents":["max",{"tag":"TypeConstructor","contents":[["Prim"],"Int"]},{"tag":"REmpty","contents":{}}]}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]