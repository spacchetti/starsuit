// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1973516452"] = [{"values":[{"sourceSpan":{"start":[46,1],"name":".spago/profunctor/v5.0.0/src/Data/Profunctor/Strong.purs","end":[52,31]},"score":18,"packageInfo":{"values":["profunctor"],"tag":"Package"},"name":"splitStrong","moduleName":"Data.Profunctor.Strong","info":{"values":[{"type":{"tag":"ForAll","contents":["p",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["d",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Category"],"Category"],"constraintArgs":[{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Profunctor","Strong"],"Strong"],"constraintArgs":[{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeVar","contents":"d"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"c"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"d"}]}}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Compose a value acting on a `Tuple` from two values, each acting on one of\nthe components of the `Tuple`.\n\nSpecializing `(***)` to function application would look like this:\n```\n(***) :: forall a b c d. (a -> b) -> (c -> d) -> (Tuple a c) -> (Tuple b d)\n```\nWe take two functions, `f` and `g`, and we transform them into a single function which\ntakes a `Tuple` and maps `f` over the first element and `g` over the second.  Just like `bi-map`\nwould do for the `bi-functor` instance of `Tuple`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[47,1],"name":".spago/profunctor/v5.0.0/src/Data/Profunctor/Choice.purs","end":[53,33]},"score":18,"packageInfo":{"values":["profunctor"],"tag":"Package"},"name":"splitChoice","moduleName":"Data.Profunctor.Choice","info":{"values":[{"type":{"tag":"ForAll","contents":["p",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["d",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Category"],"Category"],"constraintArgs":[{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Profunctor","Choice"],"Choice"],"constraintArgs":[{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeVar","contents":"d"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"c"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"d"}]}}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Compose a value acting on a sum from two values, each acting on one of\nthe components of the sum.\n\nSpecializing `(+++)` to function application would look like this:\n```\n(+++) :: forall a b c d. (a -> b) -> (c -> d) -> (Either a c) -> (Either b d)\n```\nWe take two functions, `f` and `g`, and we transform them into a single function which\ntakes an `Either`and maps `f` over the left side and `g` over the right side.  Just like\n`bi-map` would do for the `bi-functor` instance of `Either`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[55,1],"name":".spago/monoidal/v0.16.0/src/Data/Bifunctor/Monoidal/Specialized.purs","end":[55,102]},"score":0,"packageInfo":{"values":["monoidal"],"tag":"Package"},"name":"splice","moduleName":"Data.Bifunctor.Monoidal.Specialized","info":{"values":[{"type":{"tag":"ForAll","contents":["p",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["d",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Bifunctor","Monoidal"],"Semigroupal"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeVar","contents":"d"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Either","Nested"],"\\/"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"c"}]}}]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeVar","contents":"b"},{"tag":"TypeVar","contents":"d"}]}}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[43,1],"name":".spago/monoidal/v0.16.0/src/Data/Bifunctor/Monoidal/Specialized.purs","end":[43,102]},"score":0,"packageInfo":{"values":["monoidal"],"tag":"Package"},"name":"switch","moduleName":"Data.Bifunctor.Monoidal.Specialized","info":{"values":[{"type":{"tag":"ForAll","contents":["p",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["d",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Bifunctor","Monoidal"],"Semigroupal"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeVar","contents":"d"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"c"}]}}]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Either","Nested"],"\\/"]},{"tag":"TypeVar","contents":"b"},{"tag":"TypeVar","contents":"d"}]}}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[34,1],"name":".spago/monoidal/v0.16.0/src/Data/Bifunctor/Monoidal/Specialized.purs","end":[34,102]},"score":0,"packageInfo":{"values":["monoidal"],"tag":"Package"},"name":"demux","moduleName":"Data.Bifunctor.Monoidal.Specialized","info":{"values":[{"type":{"tag":"ForAll","contents":["p",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["d",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Bifunctor","Monoidal"],"Semigroupal"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeVar","contents":"d"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Either","Nested"],"\\/"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"c"}]}}]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Either","Nested"],"\\/"]},{"tag":"TypeVar","contents":"b"},{"tag":"TypeVar","contents":"d"}]}}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[25,1],"name":".spago/monoidal/v0.16.0/src/Data/Bifunctor/Monoidal/Specialized.purs","end":[25,98]},"score":0,"packageInfo":{"values":["monoidal"],"tag":"Package"},"name":"mux","moduleName":"Data.Bifunctor.Monoidal.Specialized","info":{"values":[{"type":{"tag":"ForAll","contents":["p",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["d",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Bifunctor","Monoidal"],"Semigroupal"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeVar","contents":"d"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"c"}]}}]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeVar","contents":"b"},{"tag":"TypeVar","contents":"d"}]}}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]