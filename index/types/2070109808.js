// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2070109808"] = [{"values":[{"sourceSpan":{"start":[32,1],"name":".spago/halogen/v5.1.0/src/Halogen.purs","end":[36,4]},"score":12,"packageInfo":{"values":["halogen"],"tag":"Package"},"name":"HalogenIO","moduleName":"Halogen","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["query",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"query"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]},{"tag":"RCons","contents":["subscribe",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Coroutine"],"Consumer"]},{"tag":"TypeVar","contents":"output"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"RCons","contents":["dispose",{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"REmpty","contents":{}}]}]}]}]},"arguments":[["query",null],["output",null],["m",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"A record produced when the root component in a Halogen UI has been run.\n\n- `query` allows external sources to query the root component\n- `subscribe` allows external consumers to receive messages raised by the\n  root component\n- `dispose` stops running the UI and finalizes the root component\n"}],"tag":"SearchResult"}]