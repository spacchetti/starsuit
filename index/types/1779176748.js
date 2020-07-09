// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1779176748"] = [{"values":[{"sourceSpan":{"start":[105,1],"name":".spago/halogen-select/v5.0.0/src/Select.purs","end":[108,4]},"score":0,"packageName":"halogen-select","name":"Debouncer","moduleName":"Select","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["var",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","AVar"],"AVar"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"RCons","contents":["fiber",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Fiber"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"REmpty","contents":{}}]}]}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[453,1],"name":".spago/react/v8.0.0/src/React.purs","end":[456,4]},"score":0,"packageName":"react","name":"Context","moduleName":"React","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["consumer",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React"],"ContextConsumer"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["provider",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React"],"ContextProvider"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]},"arguments":[["a",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[81,1],"name":".spago/psa-utils/v6.0.0/src/Psa/Types.purs","end":[84,4]},"score":0,"packageName":"psa-utils","name":"PsaResult","moduleName":"Psa.Types","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["warnings",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Psa","Types"],"PsaError"]}]},{"tag":"RCons","contents":["errors",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Psa","Types"],"PsaError"]}]},{"tag":"REmpty","contents":{}}]}]}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[15,1],"name":".spago/grain/v0.4.0/src/Grain/Internal/SpecialProp.purs","end":[18,4]},"score":0,"packageName":"grain","name":"SpecialProps","moduleName":"Grain.Internal.SpecialProp","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["css",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"RCons","contents":["className",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"REmpty","contents":{}}]}]}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[77,1],"name":".spago/freedom/v2.2.0/src/Freedom/UI.purs","end":[80,4]},"score":0,"packageName":"freedom","name":"Operation","moduleName":"Freedom.UI","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["query",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Freedom","Store"],"Query"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"RCons","contents":["renderer",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Freedom","UI"],"Renderer"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"REmpty","contents":{}}]}]}]},"arguments":[["state",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"The type of operations.\n\n- `query`: Operations for application state.\n- `renderer`: Operations for rendering.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[61,1],"name":".spago/freedom-transition/v2.0.0/src/Freedom/Transition.purs","end":[64,4]},"score":0,"packageName":"freedom-transition","name":"Config","moduleName":"Freedom.Transition","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["enter",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Freedom","Transition"],"Transition"]}]},{"tag":"RCons","contents":["leave",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Freedom","Transition"],"Transition"]}]},{"tag":"REmpty","contents":{}}]}]}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"The type of transition config\n\n- `enter`: The transition for adding nodes\n- `leave`: The transition for removing nodes\n\nYou have to style children like:\n\n```\n.enter {\n  opacity: 0;\n}\n.enter.enter-active {\n  opacity: 1;\n  transition: opacity 0.3s linear;\n}\n.leave {\n  opacity: 1;\n}\n.leave.leave-active {\n  opacity: 0;\n  transition: opacity 0.3s linear;\n}\n```\n"}],"tag":"SearchResult"}]