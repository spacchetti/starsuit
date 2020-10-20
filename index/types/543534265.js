// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["543534265"] = [{"values":[{"sourceSpan":{"start":[205,1],"name":".spago/foldable-traversable/v4.1.1/src/Data/FoldableWithIndex.purs","end":[211,12]},"score":67,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"forWithIndex_","moduleName":"Data.FoldableWithIndex","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["i",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","FoldableWithIndex"],"FoldableWithIndex"],"constraintArgs":[{"tag":"TypeVar","contents":"i"},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"b"}]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A version of `traverseWithIndex_` with its arguments flipped.\n\nThis can be useful when running an action written using do notation\nfor every element in a data structure:\n\nFor example:\n\n```purescript\nforWithIndex_ [\"a\", \"b\", \"c\"] \\i x -> do\n  logShow i\n  log x\n```\n"}],"tag":"SearchResult"}]