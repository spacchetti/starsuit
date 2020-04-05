// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["759548819"] = [{"values":[{"sourceSpan":{"start":[70,1],"name":".spago/uri/v7.0.0/src/URI/URI.purs","end":[78,4]},"score":0,"packageName":"uri","name":"URIParseOptions","moduleName":"URI.URI","info":{"values":[{"type":{"tag":"RCons","contents":["parseUserInfo",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["URI","UserInfo"],"UserInfo"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["URI","Common"],"URIPartParseError"]}]},{"tag":"TypeVar","contents":"userInfo"}]}]},{"tag":"RCons","contents":["parseHosts",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"hosts"}]},{"tag":"RCons","contents":["parsePath",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["URI","Path"],"Path"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["URI","Common"],"URIPartParseError"]}]},{"tag":"TypeVar","contents":"path"}]}]},{"tag":"RCons","contents":["parseHierPath",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["URI","Path","Absolute"],"PathAbsolute"]}]},{"tag":"TypeConstructor","contents":[["URI","Path","Rootless"],"PathRootless"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["URI","Common"],"URIPartParseError"]}]},{"tag":"TypeVar","contents":"hierPath"}]}]},{"tag":"RCons","contents":["parseQuery",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["URI","Query"],"Query"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["URI","Common"],"URIPartParseError"]}]},{"tag":"TypeVar","contents":"query"}]}]},{"tag":"RCons","contents":["parseFragment",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["URI","Fragment"],"Fragment"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["URI","Common"],"URIPartParseError"]}]},{"tag":"TypeVar","contents":"fragment"}]}]},{"tag":"TypeVar","contents":"r"}]}]}]}]}]}]},"arguments":[["userInfo",null],["hosts",null],["path",null],["hierPath",null],["query",null],["fragment",null],["r",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"A row type for describing the options fields used by the URI parser.\n\nUsed as `Record (URIParseOptions userInfo hosts path hierPath query fragment ())`\nwhen type anotating an options record.\n\nHaving this options record allows custom representations to be used for\nthe URI components. If this is not necessary, `pure` can be used for all\nthe options aside from `parseHosts`, which will typically be\n`HostPortPair.parseHosts pure pure`. See [`URI.HostPortPair`](../URI.HostPortPair)\nfor more information on the host/port pair parser.\n"}],"tag":"SearchResult"}]