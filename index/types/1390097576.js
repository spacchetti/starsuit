// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1390097576"] = [{"values":[{"sourceSpan":{"start":[82,1],"name":".spago/signal/v10.1.0/src/Signal.purs","end":[82,75]},"score":0,"packageName":"signal","name":"unwrap","moduleName":"Signal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Signal"],"Signal"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Signal"],"Signal"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Takes a signal of effects of `a`, and produces an effect which returns a\nsignal which will take each effect produced by the input signal, run it,\nand yield its returned value.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[202,1],"name":".spago/react-basic-hooks/v4.2.0/src/React/Basic/Hooks.purs","end":[202,63]},"score":0,"packageName":"react-basic-hooks","name":"renderRefMaybe","moduleName":"React.Basic.Hooks","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic"],"Ref"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Nullable"],"Nullable"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Hooks","Internal"],"Pure"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[193,1],"name":".spago/react-basic-hooks/v4.2.0/src/React/Basic/Hooks.purs","end":[193,63]},"score":0,"packageName":"react-basic-hooks","name":"readRefMaybe","moduleName":"React.Basic.Hooks","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic"],"Ref"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Nullable"],"Nullable"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[131,1],"name":".spago/react-basic-hooks/v4.2.0/src/React/Basic/Hooks.purs","end":[134,32]},"score":0,"packageName":"react-basic-hooks","name":"memo","moduleName":"React.Basic.Hooks","info":{"values":[{"type":{"tag":"ForAll","contents":["props",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic"],"ReactComponent"]},{"tag":"TypeVar","contents":"props"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic"],"ReactComponent"]},{"tag":"TypeVar","contents":"props"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[105,1],"name":".spago/matrices/v5.0.1/src/Matrix.purs","end":[105,52]},"score":0,"packageName":"matrices","name":"fromArray","moduleName":"Matrix","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Matrix"],"Matrix"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Constructs a Matrix from an Array of Arrays. Returns `Nothing` if the\ndimensions don't line up.\n\n```purescript\n> fromMaybe empty (fromArray [[1,2,3], [4,5,6]])\n1, 2, 3\n4, 5, 6\n\n> fromArray [[1,2,3], [4,5]]\nNothing\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[752,1],"name":".spago/lists/v5.4.1/src/Data/List.purs","end":[752,54]},"score":0,"packageName":"lists","name":"transpose","moduleName":"Data.List","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The 'transpose' function transposes the rows and columns of its argument.\nFor example,\n\n    transpose ((1:2:3:Nil) : (4:5:6:Nil) : Nil) ==\n      ((1:4:Nil) : (2:5:Nil) : (3:6:Nil) : Nil)\n\nIf some of the rows are shorter than the following rows, their elements are skipped:\n\n    transpose ((10:11:Nil) : (20:Nil) : Nil : (30:31:32:Nil) : Nil) ==\n      ((10:20:30:Nil) : (11:31:Nil) : (32:Nil) : Nil)\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[728,1],"name":".spago/lists/v5.4.1/src/Data/List/Lazy.purs","end":[728,54]},"score":0,"packageName":"lists","name":"transpose","moduleName":"Data.List.Lazy","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The 'transpose' function transposes the rows and columns of its argument.\nFor example,\n\n    transpose ((1:2:3:nil) : (4:5:6:nil) : nil) ==\n      ((1:4:nil) : (2:5:nil) : (3:6:nil) : nil)\n\nIf some of the rows are shorter than the following rows, their elements are skipped:\n\n    transpose ((10:11:nil) : (20:nil) : nil : (30:31:32:nil) : nil) ==\n      ((10:20:30:nil) : (11:31:nil) : (32:nil) : nil)\n"}],"tag":"SearchResult"}]