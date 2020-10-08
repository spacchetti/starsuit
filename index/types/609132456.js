// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["609132456"] = [{"values":[{"sourceSpan":{"start":[175,1],"name":".spago/quickcheck/v6.1.0/src/Test/QuickCheck/Gen.purs","end":[175,54]},"score":42,"packageInfo":{"values":["quickcheck"],"tag":"Package"},"name":"arrayOf1","moduleName":"Test.QuickCheck.Gen","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","NonEmpty"],"NonEmpty"]},{"tag":"TypeConstructor","contents":[["Prim"],"Array"]}]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a random generator which generates a non-empty array of random values.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[103,1],"name":".spago/promises/v3.1.1/src/Effect/Promise.purs","end":[103,71]},"score":2,"packageInfo":{"values":["promises"],"tag":"Package"},"name":"attempt","moduleName":"Effect.Promise","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Promise","Unsafe"],"Deferred"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Promise"],"Promise"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Promise"],"Promise"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Same as `try`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[100,1],"name":".spago/exceptions/v4.0.0/src/Effect/Exception.purs","end":[100,53]},"score":36,"packageInfo":{"values":["exceptions"],"tag":"Package"},"name":"try","moduleName":"Effect.Exception","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Runs an Eff and returns eventual Exceptions as a `Left` value. If the\ncomputation succeeds the result gets wrapped in a `Right`.\n\nFor example:\n\n```purescript\nmain :: forall eff. Effect Unit\nmain = do\n  result <- try (readTextFile UTF8 \"README.md\")\n  case result of\n    Right lines ->\n      Console.log (\"README: \\n\" <> lines )\n    Left error ->\n      Console.error (\"Couldn't open README.md. Error was: \" <> show error)\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[264,1],"name":".spago/aff/v5.1.2/src/Effect/Aff.purs","end":[264,44]},"score":62,"packageInfo":{"values":["aff"],"tag":"Package"},"name":"attempt","moduleName":"Effect.Aff","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A monomorphic version of `try`. Catches thrown errors and lifts them\ninto an `Either`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[219,1],"name":".spago/sparse-polynomials/v1.0.3/src/Data/Sparse/Polynomial.purs","end":[219,62]},"score":0,"packageInfo":{"values":["sparse-polynomials"],"tag":"Package"},"name":"sortedMonoms","moduleName":"Data.Sparse.Polynomial","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Sparse","Polynomial"],"Polynomial"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Dispatches the terms in list of tuples (degree,coefficient) and order it\nby decreasing degree\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[190,1],"name":".spago/css/v4.0.0/src/CSS/Render.purs","end":[190,53]},"score":1,"packageInfo":{"values":["css"],"tag":"Package"},"name":"nel","moduleName":"CSS.Render","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","NonEmpty"],"NonEmpty"]},{"tag":"TypeConstructor","contents":[["Prim"],"Array"]}]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]