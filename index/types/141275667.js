// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["141275667"] = [{"values":[{"sourceSpan":{"start":[116,1],"name":".spago/run/v4.0.0/src/Run.purs","end":[123,14]},"score":0,"packageInfo":{"values":["run"],"tag":"Package"},"name":"lift","moduleName":"Run","info":{"values":[{"type":{"tag":"ForAll","contents":["proxy",{"tag":"ForAll","contents":["sym",{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"sym"},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"sym"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"sym"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run"],"Run"]},{"tag":"TypeVar","contents":"r2"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]}]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lifts an effect functor into the `Run` Monad according to the provided\n`Proxy` slot.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[128,1],"name":".spago/variant/v7.0.2/src/Data/Functor/Variant.purs","end":[135,18]},"score":3,"packageInfo":{"values":["variant"],"tag":"Package"},"name":"inj","moduleName":"Data.Functor.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["proxy",{"tag":"ForAll","contents":["sym",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r2",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"sym"},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"sym"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"sym"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Variant"],"VariantF"]},{"tag":"TypeVar","contents":"r2"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]}]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Inject into the variant at a given label.\n```purescript\nmaybeAtFoo :: forall r. VariantF (foo :: Maybe | r) Int\nmaybeAtFoo = inj (Proxy :: Proxy \"foo\") (Just 42)\n```\n"}],"tag":"SearchResult"}]