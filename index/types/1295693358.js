// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1295693358"] = [{"values":[{"sourceSpan":{"start":[84,1],"name":".spago/foreign-object/v3.0.0/src/Foreign/Object.purs","end":[84,78]},"score":31,"packageInfo":{"values":["foreign-object"],"tag":"Package"},"name":"runST","moduleName":"Foreign.Object","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","ST","Internal"],"ST"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object","ST"],"STObject"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}}]},null]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Freeze a mutable Object, creating an immutable Object. Use this function as you would use\n`Control.Monad.ST.run` (from the `purescript-st` package) to freeze a mutable reference.\n\nThe rank-2 type prevents the Object from escaping the scope of `runST`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[57,1],"name":".spago/arrays/v6.0.0/src/Data/Array/ST.purs","end":[57,59]},"score":56,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"run","moduleName":"Data.Array.ST","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"ForAll","contents":["h",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","ST","Internal"],"ST"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","ST"],"STArray"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"a"}]}}]},null]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A safe way to create and work with a mutable array before returning an\nimmutable array for later perusal. This function avoids copying the array\nbefore returning it - it uses unsafeFreeze internally, but this wrapper is\na safe interface to that function.\n"}],"tag":"SearchResult"}]