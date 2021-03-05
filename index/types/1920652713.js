// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1920652713"] = [{"values":[{"sourceSpan":{"start":[252,1],"name":".spago/either/v5.0.0/src/Data/Either.purs","end":[252,57]},"score":48,"packageInfo":{"values":["either"],"tag":"Package"},"name":"fromRight'","moduleName":"Data.Either","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Similar to `fromRight` but for use in cases where the default value may be\nexpensive to compute. As PureScript is not lazy, the standard `fromRight`\nhas to evaluate the default value before returning the result,\nwhereas here the value is only computed when the `Either` is known\nto be `Left`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[236,1],"name":".spago/either/v5.0.0/src/Data/Either.purs","end":[236,56]},"score":48,"packageInfo":{"values":["either"],"tag":"Package"},"name":"fromLeft'","moduleName":"Data.Either","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Similar to `fromLeft` but for use in cases where the default value may be\nexpensive to compute. As PureScript is not lazy, the standard `fromLeft`\nhas to evaluate the default value before returning the result,\nwhereas here the value is only computed when the `Either` is known\nto be `Right`.\n"}],"tag":"SearchResult"}]