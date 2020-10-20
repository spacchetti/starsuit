// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1772196234"] = [{"values":[{"sourceSpan":{"start":[126,1],"name":".spago/signal/v10.1.0/src/Signal.purs","end":[126,65]},"score":1,"packageInfo":{"values":["signal"],"tag":"Package"},"name":"squigglyMap","moduleName":"Signal","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[25,3],"name":".spago/prelude/v4.1.1/src/Data/Functor.purs","end":[25,44]},"score":214,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"map","moduleName":"Data.Functor","info":{"values":[{"typeClassArguments":[["f",null]],"typeClass":[["Data","Functor"],"Functor"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[15,3],"name":".spago/contravariant/v4.0.1/src/Data/Functor/Contravariant.purs","end":[15,45]},"score":5,"packageInfo":{"values":["contravariant"],"tag":"Package"},"name":"cmap","moduleName":"Data.Functor.Contravariant","info":{"values":[{"typeClassArguments":[["f",null]],"typeClass":[["Data","Functor","Contravariant"],"Contravariant"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor","Contravariant"],"Contravariant"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[47,1],"name":".spago/prelude/v4.1.1/src/Control/Monad.purs","end":[47,58]},"score":214,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"liftM1","moduleName":"Control.Monad","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`liftM1` provides a default implementation of `(<$>)` for any\n[`Monad`](#monad), without using `(<$>)` as provided by the\n[`Functor`](#functor)-[`Monad`](#monad) superclass relationship.\n\n`liftM1` can therefore be used to write [`Functor`](#functor) instances\nas follows:\n\n```purescript\ninstance functorF :: Functor F where\n  map = liftM1\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[48,1],"name":".spago/transformers/v4.2.0/src/Control/Monad/Writer/Class.purs","end":[48,66]},"score":46,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"censor","moduleName":"Control.Monad.Writer.Class","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["w",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Writer","Class"],"MonadWriter"],"constraintArgs":[{"tag":"TypeVar","contents":"w"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeVar","contents":"w"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Modify the final accumulator value by applying a function.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[39,3],"name":".spago/transformers/v4.2.0/src/Control/Monad/Reader/Class.purs","end":[39,44]},"score":46,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"local","moduleName":"Control.Monad.Reader.Class","info":{"values":[{"typeClassArguments":[["r",null],["m",null]],"typeClass":[["Control","Monad","Reader","Class"],"MonadReader"],"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Reader","Class"],"MonadReader"],"constraintArgs":[{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"r"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[51,1],"name":".spago/transformers/v4.2.0/src/Control/Comonad/Store/Class.purs","end":[51,66]},"score":46,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"seeks","moduleName":"Control.Comonad.Store.Class","info":{"values":[{"type":{"tag":"ForAll","contents":["w",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Comonad","Store","Class"],"ComonadStore"],"constraintArgs":[{"tag":"TypeVar","contents":"s"},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"s"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"w"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"w"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Reposition the focus at the specified position, which depends on the current position.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[33,3],"name":".spago/transformers/v4.2.0/src/Control/Comonad/Env/Class.purs","end":[33,44]},"score":46,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"local","moduleName":"Control.Comonad.Env.Class","info":{"values":[{"typeClassArguments":[["e",null],["w",null]],"typeClass":[["Control","Comonad","Env","Class"],"ComonadEnv"],"type":{"tag":"ForAll","contents":["e",{"tag":"ForAll","contents":["w",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Comonad","Env","Class"],"ComonadEnv"],"constraintArgs":[{"tag":"TypeVar","contents":"e"},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"e"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"w"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"w"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[53,1],"name":".spago/prelude/v4.1.1/src/Control/Applicative.purs","end":[53,64]},"score":214,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"liftA1","moduleName":"Control.Applicative","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`liftA1` provides a default implementation of `(<$>)` for any\n[`Applicative`](#applicative) functor, without using `(<$>)` as provided\nby the [`Functor`](#functor)-[`Applicative`](#applicative) superclass\nrelationship.\n\n`liftA1` can therefore be used to write [`Functor`](#functor) instances\nas follows:\n\n```purescript\ninstance functorF :: Functor F where\n  map = liftA1\n```\n"}],"tag":"SearchResult"}]