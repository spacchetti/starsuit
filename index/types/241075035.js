// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["241075035"] = [{"values":[{"sourceSpan":{"start":[84,1],"name":".spago/profunctor-lenses/v6.3.0/src/Data/Lens/Traversal.purs","end":[85,61]},"score":10,"packageInfo":{"values":["profunctor-lenses"],"tag":"Package"},"name":"sequenceOf","moduleName":"Data.Lens.Traversal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["f",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Optic"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Profunctor","Star"],"Star"]},{"tag":"TypeVar","contents":"f"}]}}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"t"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"t"}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Sequence the foci of an optic, pulling out an \"effect\".\nIf you do not need the result, see `sequenceOf_` for `Fold`s.\n\n`sequenceOf traversed` has the same result as `Data.Traversable.sequence`:\n\n```purescript\nsequenceOf traversed (Just [1, 2]) == [Just 1, Just 2]\nsequence             (Just [1, 2]) == [Just 1, Just 2]\n```\n\nAn example with effects:\n```purescript\n> array = [random, random]\n> :t array\nArray (Eff ... Number)\n\n> effect = sequenceOf traversed array\n> :t effect\nEff ... (Array Number)\n\n> effect >>= logShow\n[0.15556037108154985,0.28500369615270515]\nunit\n```\n"}],"tag":"SearchResult"}]