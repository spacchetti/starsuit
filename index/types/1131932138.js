// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1131932138"] = [{"values":[{"sourceSpan":{"start":[114,1],"name":".spago/promises/v3.1.1/src/Effect/Promise.purs","end":[114,94]},"score":2,"packageInfo":{"values":["promises"],"tag":"Package"},"name":"all","moduleName":"Effect.Promise","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Promise","Unsafe"],"Deferred"],"constraintArgs":[]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"g"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Promise"],"Promise"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Promise"],"Promise"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Run all promises in the given `Foldable`, returning a new promise which either\nresolves to a collection of all the given promises' results, or rejects with\nthe first promise to reject.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[65,1],"name":".spago/foldable-traversable/v4.1.1/src/Data/Traversable.purs","end":[70,13]},"score":67,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"sequenceDefault","moduleName":"Data.Traversable","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["t",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Traversable"],"Traversable"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A default implementation of `sequence` using `traverse`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[52,3],"name":".spago/foldable-traversable/v4.1.1/src/Data/Traversable.purs","end":[52,62]},"score":67,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"sequence","moduleName":"Data.Traversable","info":{"values":[{"typeClassArguments":[["t",null]],"typeClass":[["Data","Traversable"],"Traversable"],"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Traversable"],"Traversable"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[56,1],"name":".spago/foldable-traversable/v4.1.1/src/Data/Semigroup/Traversable.purs","end":[61,13]},"score":67,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"sequence1Default","moduleName":"Data.Semigroup.Traversable","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["t",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup","Traversable"],"Traversable1"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Apply"],"Apply"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A default implementation of `sequence1` using `traverse1`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[35,3],"name":".spago/foldable-traversable/v4.1.1/src/Data/Semigroup/Traversable.purs","end":[35,57]},"score":67,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"sequence1","moduleName":"Data.Semigroup.Traversable","info":{"values":[{"typeClassArguments":[["t",null]],"typeClass":[["Data","Semigroup","Traversable"],"Traversable1"],"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup","Traversable"],"Traversable1"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Apply"],"Apply"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"b"}]}}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[35,1],"name":".spago/distributive/v4.0.0/src/Data/Distributive.purs","end":[40,13]},"score":9,"packageInfo":{"values":["distributive"],"tag":"Package"},"name":"distributeDefault","moduleName":"Data.Distributive","info":{"values":[{"type":{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Distributive"],"Distributive"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"g"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A default implementation of `distribute`, based on `collect`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[23,3],"name":".spago/distributive/v4.0.0/src/Data/Distributive.purs","end":[23,60]},"score":9,"packageInfo":{"values":["distributive"],"tag":"Package"},"name":"distribute","moduleName":"Data.Distributive","info":{"values":[{"typeClassArguments":[["f",null]],"typeClass":[["Data","Distributive"],"Distributive"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["g",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Distributive"],"Distributive"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"g"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[109,1],"name":".spago/monad-loops/v0.5.0/src/Control/Monad/Rec/Loops.purs","end":[110,35]},"score":1,"packageInfo":{"values":["monad-loops"],"tag":"Package"},"name":"unfoldM'","moduleName":"Control.Monad.Rec.Loops","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Monoid"],"Monoid"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The supplied Maybe expression will be repeatedly called until it\nreturns Nothing.  All values returned are collected into an Applicative Monoid.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[118,1],"name":".spago/monad-loops/v0.5.0/src/Control/Monad/Loops.purs","end":[119,35]},"score":1,"packageInfo":{"values":["monad-loops"],"tag":"Package"},"name":"unfoldM'","moduleName":"Control.Monad.Loops","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Monoid"],"Monoid"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The supplied `Maybe` expression will be repeatedly called until it\nreturns `Nothing`.\nAll `Just` values are collected into an `Applicative` monoidal structure.\n"}],"tag":"SearchResult"}]