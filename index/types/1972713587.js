// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1972713587"] = [{"values":[{"sourceSpan":{"start":[224,1],"name":".spago/newtype/v3.0.0/src/Data/Newtype.purs","end":[233,9]},"score":46,"packageInfo":{"values":["newtype"],"tag":"Package"},"name":"underF","moduleName":"Data.Newtype","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"g"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"s"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"t"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"t"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"s"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"b"}]}]}]}]}]}]}]}]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Much like `under`, but where the lifted function operates on values in a\n`Functor`:\n\n``` purescript\nnewtype EmailAddress = EmailAddress String\nderive instance newtypeEmailAddress :: Newtype EmailAddress _\n\nisValid :: EmailAddress -> Boolean\nisValid x = false -- imagine a slightly less strict predicate here\n\nfindValidEmailString :: Array String -> Maybe String\nfindValidEmailString = underF EmailAddress (Foldable.find isValid)\n```\n\nThe above example also demonstrates that the functor type is polymorphic\nhere too, the input is an `Array` but the result is a `Maybe`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[165,1],"name":".spago/newtype/v3.0.0/src/Data/Newtype.purs","end":[174,9]},"score":46,"packageInfo":{"values":["newtype"],"tag":"Package"},"name":"overF","moduleName":"Data.Newtype","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"g"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"s"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"t"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"b"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"t"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"s"}]}]}]}]}]}]}]}]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Much like `over`, but where the lifted function operates on values in a\n`Functor`:\n\n``` purescript\nfindLabel :: String -> Array Label -> Maybe Label\nfindLabel s = overF Label (Foldable.find (_ == s))\n```\n\nThe above example also demonstrates that the functor type is polymorphic\nhere too, the input is an `Array` but the result is a `Maybe`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[111,1],"name":".spago/newtype/v3.0.0/src/Data/Newtype.purs","end":[120,9]},"score":46,"packageInfo":{"values":["newtype"],"tag":"Package"},"name":"alaF","moduleName":"Data.Newtype","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"g"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"s"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"t"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"t"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"s"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"b"}]}]}]}]}]}]}]}]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Similar to `ala` but useful for cases where you want to use an additional\nprojection with the higher order function:\n\n``` purescript\nalaF Additive foldMap String.length [\"hello\", \"world\"] -- 10\nalaF Multiplicative foldMap Math.abs [1.0, -2.0, 3.0, -4.0] -- 24.0\n```\n\nThe type admits other possibilities due to the polymorphic `Functor`\nconstraints, but the case described above works because ((->) a) is a\n`Functor`.\n"}],"tag":"SearchResult"}]