// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1736122355"] = [{"values":[{"sourceSpan":{"start":[313,1],"name":".spago/routing-duplex/v0.4.1/src/Routing/Duplex.purs","end":[313,37]},"score":0,"packageInfo":{"values":["routing-duplex"],"tag":"Package"},"name":"record","moduleName":"Routing.Duplex","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Duplex"],"RouteDuplex"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"REmpty","contents":{}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Combined with `prop` or `:=`, builds a Record where the order of\nparsing and printing matters.\n\n```purescript\ndate =\n  record\n    # prop (SProxy :: _ \"year\") (int segment)\n    # prop (SProxy :: _ \"month\") (int segment)\n    # prop (SProxy :: _ \"day\") (int segment)\n\nparse (path \"blog\" date) \"blog/2019/1/2\" ==\n  Right { year: 2019, month: 1, day: 2 }\n````\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[42,1],"name":".spago/node-readline/v4.0.1/src/Node/ReadLine.purs","end":[42,57]},"score":1,"packageInfo":{"values":["node-readline"],"tag":"Package"},"name":"output","moduleName":"Node.ReadLine","info":{"values":[{"type":{"tag":"ForAll","contents":["w",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Options"],"Option"]},{"tag":"TypeConstructor","contents":[["Node","ReadLine"],"InterfaceOptions"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","Stream"],"Writable"]},{"tag":"TypeVar","contents":"w"}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[75,1],"name":".spago/matryoshka/v0.4.0/src/Matryoshka/DistributiveLaw.purs","end":[75,58]},"score":0,"packageInfo":{"values":["matryoshka"],"tag":"Package"},"name":"distHisto","moduleName":"Matryoshka.DistributiveLaw","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Matryoshka","DistributiveLaw"],"DistributiveLaw"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Comonad","Cofree"],"Cofree"]},{"tag":"TypeVar","contents":"f"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[13,1],"name":".spago/grain/v1.0.0/src/Grain/Internal/Ref.purs","end":[13,56]},"score":2,"packageInfo":{"values":["grain"],"tag":"Package"},"name":"new","moduleName":"Grain.Internal.Ref","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Uncurried"],"EffectFn1"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Grain","Internal","Ref"],"Ref"]},{"tag":"TypeVar","contents":"a"}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[508,1],"name":".spago/graphql-parser/v0.0.11/src/Data/GraphQL/Parser.purs","end":[508,93]},"score":0,"packageInfo":{"values":["graphql-parser"],"tag":"Package"},"name":"operationTypesDefinition","moduleName":"Data.GraphQL.Parser","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Text","Parsing","Parser","String"],"StringLike"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"OperationTypeDefinition"]}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[265,1],"name":".spago/graphql-parser/v0.0.11/src/Data/GraphQL/Parser.purs","end":[265,62]},"score":0,"packageInfo":{"values":["graphql-parser"],"tag":"Package"},"name":"optDv","moduleName":"Data.GraphQL.Parser","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Text","Parsing","Parser","String"],"StringLike"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"DefaultValue"]}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[262,1],"name":".spago/graphql-parser/v0.0.11/src/Data/GraphQL/Parser.purs","end":[262,61]},"score":0,"packageInfo":{"values":["graphql-parser"],"tag":"Package"},"name":"optDir","moduleName":"Data.GraphQL.Parser","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Text","Parsing","Parser","String"],"StringLike"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"Directives"]}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[259,1],"name":".spago/graphql-parser/v0.0.11/src/Data/GraphQL/Parser.purs","end":[259,54]},"score":0,"packageInfo":{"values":["graphql-parser"],"tag":"Package"},"name":"optDesc","moduleName":"Data.GraphQL.Parser","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Text","Parsing","Parser","String"],"StringLike"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[34,1],"name":".spago/functors/v3.1.1/src/Data/Functor/Product/Nested.purs","end":[34,38]},"score":7,"packageInfo":{"values":["functors"],"tag":"Package"},"name":"product1","moduleName":"Data.Functor.Product.Nested","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Product","Nested"],"Product1"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[39,1],"name":".spago/pairing/v5.1.0/src/Data/Functor/Pairing/Co.purs","end":[39,42]},"score":0,"packageInfo":{"values":["pairing"],"tag":"Package"},"name":"pairCo","moduleName":"Data.Functor.Pairing.Co","info":{"values":[{"type":{"tag":"ForAll","contents":["w",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"w"}]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Functor","Pairing"],"⋈"]},{"tag":"TypeVar","contents":"w"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Pairing","Co"],"Co"]},{"tag":"TypeVar","contents":"w"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`w` pairs with `Co w` whenever `w` is a `Functor`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[164,1],"name":".spago/free/v5.2.0/src/Data/Coyoneda.purs","end":[164,42]},"score":14,"packageInfo":{"values":["free"],"tag":"Package"},"name":"liftCoyoneda","moduleName":"Data.Coyoneda","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Coyoneda"],"Coyoneda"]},{"tag":"TypeVar","contents":"f"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift a value described by the type constructor `f` to `Coyoneda f`.\n\nNote that for any functor `f` `liftCoyoneda` has a right inverse\n`lowerCoyoneda`:\n```purescript\nliftCoyoneda <<< lowerCoyoneda $ (Coyoneda e)\n= liftCoyoneda <<< unCoyoneda map $ (Coyoneda e)\n= liftCoyonead (runExists (\\(CoyonedaF k fi) -> map k fi) e)\n= liftCoyonead (Coyoneda e)\n= coyoneda identity (Coyoneda e)\n= Coyoneda e\n```\nMoreover if `f` is a `Functor` then `liftCoyoneda` is an isomorphism of\nfunctors with inverse `lowerCoyoneda`:  we already showed that\n`lowerCoyoneda <<< hoistCoyoneda identity = lowerCoyoneda` is its left inverse\nwhenever `f` is a functor.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[123,1],"name":".spago/free/v5.2.0/src/Control/Monad/Free.purs","end":[123,31]},"score":14,"packageInfo":{"values":["free"],"tag":"Package"},"name":"liftF","moduleName":"Control.Monad.Free","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Free"],"Free"]},{"tag":"TypeVar","contents":"f"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift an impure value described by the generating type constructor `f` into\nthe free monad.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[111,1],"name":".spago/folds/v5.2.0/src/Control/Fold.purs","end":[111,35]},"score":0,"packageInfo":{"values":["folds"],"tag":"Package"},"name":"last","moduleName":"Control.Fold","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Fold"],"Fold"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Fold` which keeps the last input.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[107,1],"name":".spago/folds/v5.2.0/src/Control/Fold.purs","end":[107,35]},"score":0,"packageInfo":{"values":["folds"],"tag":"Package"},"name":"head","moduleName":"Control.Fold","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Fold"],"Fold"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Fold` which remembers the first input.\n"}],"tag":"SearchResult"}]