// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1254625857"] = [{"values":[{"sourceSpan":{"start":[48,1],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Internal.purs","end":[48,84]},"score":18,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"usingToImmutable","moduleName":"Node.Buffer.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Node","Buffer","Immutable"],"ImmutableBuffer"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"buf"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[45,1],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Internal.purs","end":[45,86]},"score":18,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"usingFromImmutable","moduleName":"Node.Buffer.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Buffer","Immutable"],"ImmutableBuffer"]}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"buf"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[186,1],"name":".spago/open-memoize/v6.1.0/src/Data/Function/Memoize.purs","end":[192,12]},"score":1,"packageInfo":{"values":["open-memoize"],"tag":"Package"},"name":"genericTabulate","moduleName":"Data.Function.Memoize","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["rep",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Function","Memoize"],"Tabulate"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"r"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lazy"],"Lazy"]},{"tag":"TypeVar","contents":"r"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A default implementation of `Tabulate` for `Generic` types.\n\nGiven a data type made up of data types with `Tabulate` instances:\n\n```purescript\ndata MyDataType\n  = A Int\n  | B String\n```\n\nFirst, derive an instance of `Data.Generics.Rep.Generic`:\n\n```purescript\nderive instance genericMyDataType :: Generic MyDataType _\n```\n\nNow, `Tabulate` can be defined in terms of `genericTabulate`:\n\n```purescript\ninstance tabulateMyDataType :: Tabulate MyDataType where\n  tabulate = genericTabulate\n```\n\n_Note_: this function should not be used to derive instances for recursive\ndata types, and attempting to do so will lead to stack overflow errors\nat runtime.\n"}],"tag":"SearchResult"}]