// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1499962955"] = [{"values":[{"sourceSpan":{"start":[176,1],"name":".spago/newtype/v4.0.0/src/Data/Newtype.purs","end":[183,7]},"score":51,"packageInfo":{"values":["newtype"],"tag":"Package"},"name":"under","moduleName":"Data.Newtype","info":{"values":[{"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"s"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"t"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"s"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The opposite of `over`: lowers a function that operates on `Newtype`d\nvalues to operate on the wrapped value instead.\n\n``` purescript\nnewtype Degrees = Degrees Number\nderive instance newtypeDegrees :: Newtype Degrees _\n\nnewtype NormalDegrees = NormalDegrees Number\nderive instance newtypeNormalDegrees :: Newtype NormalDegrees _\n\nnormaliseDegrees :: Degrees -> NormalDegrees\nnormaliseDegrees (Degrees deg) = NormalDegrees (deg % 360.0)\n\nasNormalDegrees :: Number -> Number\nasNormalDegrees = under Degrees normaliseDegrees\n```\n\nAs with `over` the `Newtype` is polymorphic, as illustrated in the example\nabove - both `Degrees` and `NormalDegrees` are instances of `Newtype`,\nso even though `normaliseDegrees` changes the result type we can still put\na `Number` in and get a `Number` out via `under`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[123,1],"name":".spago/newtype/v4.0.0/src/Data/Newtype.purs","end":[130,7]},"score":51,"packageInfo":{"values":["newtype"],"tag":"Package"},"name":"over","moduleName":"Data.Newtype","info":{"values":[{"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"s"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"t"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"s"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lifts a function operate over newtypes. This can be used to lift a\nfunction to manipulate the contents of a single newtype, somewhat like\n`map` does for a `Functor`:\n\n``` purescript\nnewtype Label = Label String\nderive instance newtypeLabel :: Newtype Label _\n\ntoUpperLabel :: Label -> Label\ntoUpperLabel = over Label String.toUpper\n```\n\nBut the result newtype is polymorphic, meaning the result can be returned\nas an alternative newtype:\n\n``` purescript\nnewtype UppercaseLabel = UppercaseLabel String\nderive instance newtypeUppercaseLabel :: Newtype UppercaseLabel _\n\ntoUpperLabel' :: Label -> UppercaseLabel\ntoUpperLabel' = over Label String.toUpper\n```\n"}],"tag":"SearchResult"}]