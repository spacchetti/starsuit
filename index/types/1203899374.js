// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1203899374"] = [{"values":[{"sourceSpan":{"start":[181,1],"name":".spago/lenient-html-parser/v4.0.0/src/LenientHtmlParser.purs","end":[181,52]},"score":0,"packageName":"lenient-html-parser","name":"parseTags","moduleName":"LenientHtmlParser","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Text","Parsing","StringParser"],"ParseError"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["LenientHtmlParser"],"Tag"]}]}}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[123,1],"name":".spago/html-parser-halogen/v1.0.0-rc.2/src/Html/Parser.purs","end":[123,53]},"score":0,"packageName":"html-parser-halogen","name":"parse","moduleName":"Html.Parser","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Text","Parsing","StringParser"],"ParseError"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["Html","Parser"],"HtmlNode"]}]}}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[118,1],"name":".spago/argonaut-codecs/v6.0.2/src/Data/Argonaut/Decode/Class.purs","end":[118,56]},"score":0,"packageName":"argonaut-codecs","name":"decodeJObject","moduleName":"Data.Argonaut.Decode.Class","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[115,1],"name":".spago/argonaut-codecs/v6.0.2/src/Data/Argonaut/Decode/Class.purs","end":[115,51]},"score":0,"packageName":"argonaut-codecs","name":"decodeJArray","moduleName":"Data.Argonaut.Decode.Class","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[148,1],"name":".spago/biscotti-cookie/v0.2.0/src/Biscotti/Cookie/Parser.purs","end":[148,55]},"score":0,"packageName":"biscotti-cookie","name":"parseMany","moduleName":"Biscotti.Cookie.Parser","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Text","Parsing","StringParser"],"ParseError"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["Biscotti","Cookie","Types"],"Cookie"]}]}}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Parses a `String` into an `Either ParseError (List Cookie)`.\nHTTP requests can include multiple cookies in a single\n`Cookie` header consisting of only name/value pairs. This\nfunction can be used to parse this header.\n\n```purescript\n> parseMany \"key1=value1; key2=value2\"\n(Right ({ name: \"key1\", value: \"value1\", ... } : { name: \"key2\", value: \"value2\", ... } : Nil))\n```\n"}],"tag":"SearchResult"}]