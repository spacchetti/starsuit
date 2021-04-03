// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1390097576"] = [{"values":[{"sourceSpan":{"start":[42,1],"name":".spago/web-promise/v2.0.1/src/Web/Promise.purs","end":[42,58]},"score":2,"packageInfo":{"values":["web-promise"],"tag":"Package"},"name":"race","moduleName":"Web.Promise","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Web","Promise","Internal"],"Promise"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Web","Promise","Internal"],"Promise"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[59,1],"name":".spago/web-promise/v2.0.1/src/Web/Promise/Lazy.purs","end":[59,64]},"score":2,"packageInfo":{"values":["web-promise"],"tag":"Package"},"name":"all","moduleName":"Web.Promise.Lazy","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Web","Promise","Lazy"],"LazyPromise"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Web","Promise","Lazy"],"LazyPromise"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[40,1],"name":".spago/matryoshka/v0.5.0/src/Matryoshka/DistributiveLaw.purs","end":[40,50]},"score":0,"packageInfo":{"values":["matryoshka"],"tag":"Package"},"name":"DistributiveLaw","moduleName":"Matryoshka.DistributiveLaw","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]}]},null]},"arguments":[["f",null],["g",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[105,1],"name":".spago/matrices/v5.0.1/src/Matrix.purs","end":[105,52]},"score":0,"packageInfo":{"values":["matrices"],"tag":"Package"},"name":"fromArray","moduleName":"Matrix","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Matrix"],"Matrix"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Constructs a Matrix from an Array of Arrays. Returns `Nothing` if the\ndimensions don't line up.\n\n```purescript\n> fromMaybe empty (fromArray [[1,2,3], [4,5,6]])\n1, 2, 3\n4, 5, 6\n\n> fromArray [[1,2,3], [4,5]]\nNothing\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[829,1],"name":".spago/lists/v6.0.0/src/Data/List.purs","end":[829,54]},"score":38,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"transpose","moduleName":"Data.List","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The 'transpose' function transposes the rows and columns of its argument.\nFor example,\n\n    transpose ((1:2:3:Nil) : (4:5:6:Nil) : Nil) ==\n      ((1:4:Nil) : (2:5:Nil) : (3:6:Nil) : Nil)\n\nIf some of the rows are shorter than the following rows, their elements are skipped:\n\n    transpose ((10:11:Nil) : (20:Nil) : Nil : (30:31:32:Nil) : Nil) ==\n      ((10:20:30:Nil) : (11:31:Nil) : (32:Nil) : Nil)\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[740,1],"name":".spago/lists/v6.0.0/src/Data/List/Lazy.purs","end":[740,54]},"score":38,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"transpose","moduleName":"Data.List.Lazy","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The 'transpose' function transposes the rows and columns of its argument.\nFor example,\n\n    transpose ((1:2:3:nil) : (4:5:6:nil) : nil) ==\n      ((1:4:nil) : (2:5:nil) : (3:6:nil) : nil)\n\nIf some of the rows are shorter than the following rows, their elements are skipped:\n\n    transpose ((10:11:nil) : (20:nil) : nil : (30:31:32:nil) : nil) ==\n      ((10:20:30:nil) : (11:31:nil) : (32:nil) : nil)\n"}],"tag":"SearchResult"}]