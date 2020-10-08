// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1390097576"] = [{"values":[{"sourceSpan":{"start":[82,1],"name":".spago/signal/v10.1.0/src/Signal.purs","end":[82,75]},"score":1,"packageInfo":{"values":["signal"],"tag":"Package"},"name":"unwrap","moduleName":"Signal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Signal"],"Signal"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Signal"],"Signal"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Takes a signal of effects of `a`, and produces an effect which returns a\nsignal which will take each effect produced by the input signal, run it,\nand yield its returned value.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[269,1],"name":".spago/react-basic-hooks/v6.1.1/src/React/Basic/Hooks.purs","end":[269,63]},"score":2,"packageInfo":{"values":["react-basic-hooks"],"tag":"Package"},"name":"readRefMaybe","moduleName":"React.Basic.Hooks","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic"],"Ref"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Nullable"],"Nullable"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[161,1],"name":".spago/react-basic-hooks/v6.1.1/src/React/Basic/Hooks.purs","end":[164,32]},"score":2,"packageInfo":{"values":["react-basic-hooks"],"tag":"Package"},"name":"memo","moduleName":"React.Basic.Hooks","info":{"values":[{"type":{"tag":"ForAll","contents":["props",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic"],"ReactComponent"]},{"tag":"TypeVar","contents":"props"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic"],"ReactComponent"]},{"tag":"TypeVar","contents":"props"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Prevents a component from re-rendering if its new props are referentially\nequal to its old props (not value-based equality -- this is due to the\nunderlying React implementation).\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[28,1],"name":".spago/payload/v0.3.0/src/Payload/Client/Response.purs","end":[28,78]},"score":0,"packageInfo":{"values":["payload"],"tag":"Package"},"name":"unwrapResponse","moduleName":"Payload.Client.Response","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Payload","Client","Response"],"ClientResponse"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Payload","ResponseTypes"],"ResponseContent"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[40,1],"name":".spago/matryoshka/v0.4.0/src/Matryoshka/DistributiveLaw.purs","end":[40,50]},"score":0,"packageInfo":{"values":["matryoshka"],"tag":"Package"},"name":"DistributiveLaw","moduleName":"Matryoshka.DistributiveLaw","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]}]},null]},"arguments":[["f",null],["g",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[105,1],"name":".spago/matrices/v5.0.1/src/Matrix.purs","end":[105,52]},"score":0,"packageInfo":{"values":["matrices"],"tag":"Package"},"name":"fromArray","moduleName":"Matrix","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Matrix"],"Matrix"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Constructs a Matrix from an Array of Arrays. Returns `Nothing` if the\ndimensions don't line up.\n\n```purescript\n> fromMaybe empty (fromArray [[1,2,3], [4,5,6]])\n1, 2, 3\n4, 5, 6\n\n> fromArray [[1,2,3], [4,5]]\nNothing\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[752,1],"name":".spago/lists/v5.4.1/src/Data/List.purs","end":[752,54]},"score":45,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"transpose","moduleName":"Data.List","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The 'transpose' function transposes the rows and columns of its argument.\nFor example,\n\n    transpose ((1:2:3:Nil) : (4:5:6:Nil) : Nil) ==\n      ((1:4:Nil) : (2:5:Nil) : (3:6:Nil) : Nil)\n\nIf some of the rows are shorter than the following rows, their elements are skipped:\n\n    transpose ((10:11:Nil) : (20:Nil) : Nil : (30:31:32:Nil) : Nil) ==\n      ((10:20:30:Nil) : (11:31:Nil) : (32:Nil) : Nil)\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[728,1],"name":".spago/lists/v5.4.1/src/Data/List/Lazy.purs","end":[728,54]},"score":45,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"transpose","moduleName":"Data.List.Lazy","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The 'transpose' function transposes the rows and columns of its argument.\nFor example,\n\n    transpose ((1:2:3:nil) : (4:5:6:nil) : nil) ==\n      ((1:4:nil) : (2:5:nil) : (3:6:nil) : nil)\n\nIf some of the rows are shorter than the following rows, their elements are skipped:\n\n    transpose ((10:11:nil) : (20:nil) : nil : (30:31:32:nil) : nil) ==\n      ((10:20:30:nil) : (11:31:nil) : (32:nil) : nil)\n"}],"tag":"SearchResult"}]