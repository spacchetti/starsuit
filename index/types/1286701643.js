// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1286701643"] = [{"values":[{"sourceSpan":{"start":[134,1],"name":".spago/halogen/v5.1.1/src/Halogen/Component.purs","end":[140,4]},"score":12,"packageInfo":{"values":["halogen"],"tag":"Package"},"name":"EvalSpec","moduleName":"Halogen.Component","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["handleAction",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","HalogenM"],"HalogenM"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"output"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"RCons","contents":["handleQuery",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"query"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","HalogenM"],"HalogenM"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"output"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]},{"tag":"RCons","contents":["receive",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"input"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"action"}]}]},{"tag":"RCons","contents":["initialize",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"action"}]},{"tag":"RCons","contents":["finalize",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"action"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]}]},"arguments":[["state",null],["query",null],["action",null],["slots",null],["input",null],["output",null],["m",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"The spec record that `mkEval` accepts to construct a component `eval`\nfunction.\n\nIt's not a requirement to use `mkEval`, and sometimes it's preferrable\nto write a component `eval` function from scratch, but often `mkEval` is\nmore convenient for common cases.\n\nSee below for more details about `mkEval` and `defaultEval`.\n"}],"tag":"SearchResult"}]