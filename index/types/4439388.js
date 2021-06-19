// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["4439388"] = [{"values":[{"sourceSpan":{"start":[115,1],"name":".spago/profunctor-lenses/v7.0.1/src/Data/Lens/Prism.purs","end":[115,63]},"score":13,"packageInfo":{"values":["profunctor-lenses"],"tag":"Package"},"name":"prism'","moduleName":"Data.Lens.Prism","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"s"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Prism'"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a `Prism` from a constructor and a matcher function that\nproduces a `Maybe`:\n\n```purescript\nsolidFocus :: Prism' Fill Color\nsolidFocus = prism' Solid case _ of\n  Solid color -> Just color\n  _ -> Nothing\n```\n"}],"tag":"SearchResult"}]