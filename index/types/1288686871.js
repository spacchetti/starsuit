// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1288686871"] = [{"values":[{"sourceSpan":{"start":[247,1],"name":".spago/routing-duplex/v0.5.0/src/Routing/Duplex.purs","end":[247,75]},"score":0,"packageInfo":{"values":["routing-duplex"],"tag":"Package"},"name":"optional","moduleName":"Routing.Duplex","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Duplex"],"RouteDuplex"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Duplex"],"RouteDuplex"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"b"}]}}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Augments the behavior of a given codec by making it return `Nothing` if parsing\nfails, or `Just value` if it succeeds.\n\n```purescript\nparse (optional segment) \"a\"        == Right (Just \"a\")\nparse (optional segment) \"\"         == Right Nothing\n\nprint (optional segment) (Just \"a\") == \"a\"\nprint (optional segment) Nothing    == \"\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[36,1],"name":".spago/halogen-vdom/v7.0.1/src/Halogen/VDom/Thunk.purs","end":[36,45]},"score":2,"packageInfo":{"values":["halogen-vdom"],"tag":"Package"},"name":"hoist","moduleName":"Halogen.VDom.Thunk","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["g",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"g"}]}}]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","VDom","Thunk"],"Thunk"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","VDom","Thunk"],"Thunk"]},{"tag":"TypeVar","contents":"g"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[79,1],"name":".spago/open-pairing/v6.1.0/src/Data/Functor/Pairing.purs","end":[79,79]},"score":0,"packageInfo":{"values":["open-pairing"],"tag":"Package"},"name":"freeCofree","moduleName":"Data.Functor.Pairing","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["g",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"g"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Functor","Pairing"],"⋈"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"g"}]}]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Functor","Pairing"],"⋈"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Free"],"Free"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Comonad","Cofree"],"Cofree"]},{"tag":"TypeVar","contents":"g"}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`Free` pairs with `Cofree`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[21,1],"name":".spago/functors/v4.1.1/src/Data/Functor/App.purs","end":[21,51]},"score":9,"packageInfo":{"values":["functors"],"tag":"Package"},"name":"hoistApp","moduleName":"Data.Functor.App","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["g",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"g"}]}}]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","App"],"App"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","App"],"App"]},{"tag":"TypeVar","contents":"g"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[174,1],"name":".spago/free/v6.0.1/src/Data/Coyoneda.purs","end":[174,66]},"score":13,"packageInfo":{"values":["free"],"tag":"Package"},"name":"hoistCoyoneda","moduleName":"Data.Coyoneda","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["g",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"g"}]}}]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Coyoneda"],"Coyoneda"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Coyoneda"],"Coyoneda"]},{"tag":"TypeVar","contents":"g"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Use a natural transformation to change the generating type constructor of a\n`Coyoneda`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[148,1],"name":".spago/free/v6.0.1/src/Control/Monad/Free.purs","end":[148,54]},"score":13,"packageInfo":{"values":["free"],"tag":"Package"},"name":"hoistFree","moduleName":"Control.Monad.Free","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["g",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"g"}]}}]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Free"],"Free"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Free"],"Free"]},{"tag":"TypeVar","contents":"g"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Use a natural transformation to change the generating type constructor of a\nfree monad.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[60,1],"name":".spago/free/v6.0.1/src/Control/Comonad/Cofree.purs","end":[60,73]},"score":13,"packageInfo":{"values":["free"],"tag":"Package"},"name":"hoistCofree","moduleName":"Control.Comonad.Cofree","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["g",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"g"}]}}]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Comonad","Cofree"],"Cofree"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Comonad","Cofree"],"Cofree"]},{"tag":"TypeVar","contents":"g"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[108,1],"name":".spago/concur-core/v0.4.2/src/Control/Cofree.purs","end":[108,73]},"score":1,"packageInfo":{"values":["concur-core"],"tag":"Package"},"name":"hoistCofree","moduleName":"Control.Cofree","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["g",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"g"}]}}]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Cofree"],"Cofree"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Cofree"],"Cofree"]},{"tag":"TypeVar","contents":"g"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]