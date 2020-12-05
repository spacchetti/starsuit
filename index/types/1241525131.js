// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1241525131"] = [{"values":[{"sourceSpan":{"start":[117,1],"name":".spago/record/v2.0.2/src/Record/Builder.purs","end":[122,37]},"score":34,"packageInfo":{"values":["record"],"tag":"Package"},"name":"disjointUnion","moduleName":"Record.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["r3",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r1",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"},{"tag":"TypeVar","contents":"r3"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Nub"],"constraintArgs":[{"tag":"TypeVar","contents":"r3"},{"tag":"TypeVar","contents":"r3"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Record","Builder"],"Builder"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r2"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r3"}]}}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Build by merging some disjoint set of fields from another record.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[109,1],"name":".spago/record/v2.0.2/src/Record/Builder.purs","end":[113,37]},"score":34,"packageInfo":{"values":["record"],"tag":"Package"},"name":"union","moduleName":"Record.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["r3",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r1",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"},{"tag":"TypeVar","contents":"r3"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r2"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Record","Builder"],"Builder"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r3"}]}}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Build by merging existing fields from another record. Unlike `merge`,\nthis does not remove duplicate labels from the resulting record type.\nThis can result in better inference for some pipelines, deferring the\nneed for a `Nub` constraint.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,3],"name":".spago/naporitan/v1.0.0/src/Naporitan.purs","end":[24,69]},"score":1,"packageInfo":{"values":["naporitan"],"tag":"Package"},"name":"reflectRecordProxyBuilder","moduleName":"Naporitan","info":{"values":[{"typeClassArguments":[["rl",{"tag":"NamedKind","contents":[["Prim","RowList"],"RowList"]}],["i",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}}],["o",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}}]],"typeClass":[["Naporitan"],"ReflectRecordProxyBuilder"],"type":{"tag":"ForAll","contents":["rl",{"tag":"NamedKind","contents":[["Prim","RowList"],"RowList"]},{"tag":"ForAll","contents":["i",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}},{"tag":"ForAll","contents":["o",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Naporitan"],"ReflectRecordProxyBuilder"],"constraintArgs":[{"tag":"TypeVar","contents":"rl"},{"tag":"TypeVar","contents":"i"},{"tag":"TypeVar","contents":"o"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Data","RowList"],"RLProxy"]},{"tag":"TypeVar","contents":"rl"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Record","Builder"],"Builder"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"i"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"o"}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[64,1],"name":".spago/game/v2.0.1/src/Game/Aff/Run.purs","end":[67,38]},"score":0,"packageInfo":{"values":["game"],"tag":"Package"},"name":"runBaseAffGameAt","moduleName":"Game.Aff.Run","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["extra",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"s"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Game","Aff","Run"],"AFFGAME"]},{"tag":"TypeVar","contents":"extra"}]}},{"tag":"REmpty","contents":{}},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Symbol"],"SProxy"]},{"tag":"TypeVar","contents":"s"}]}]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run"],"Run"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Game","Aff"],"AffGame"]},{"tag":"TypeVar","contents":"extra"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Runs a base `AffGame` effect at the provided label\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[94,1],"name":".spago/subcategory/v0.2.0/src/Endofunctor/Monad.purs","end":[106,19]},"score":1,"packageInfo":{"values":["subcategory"],"tag":"Package"},"name":"unlessM","moduleName":"Control.Subcategory.Endofunctor.Monad","info":{"values":[{"type":{"tag":"ForAll","contents":["u",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["c",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Endofunctor","HasBind"],"HasBind"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Endofunctor","HasPure"],"HasPure"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","HasUnit"],"HasUnit"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"u"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Endofunctor","HasUnpoint"],"HasUnpoint"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"u"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"u"}]}}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Restrictable"],"Restrictable"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"c"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Slackable"],"Slackable"],"constraintArgs":[{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"c"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"u"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"u"}]}}]}]}]}]}]}]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[74,1],"name":".spago/subcategory/v0.2.0/src/Endofunctor/Monad.purs","end":[86,19]},"score":1,"packageInfo":{"values":["subcategory"],"tag":"Package"},"name":"whenM","moduleName":"Control.Subcategory.Endofunctor.Monad","info":{"values":[{"type":{"tag":"ForAll","contents":["u",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["c",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Endofunctor","HasBind"],"HasBind"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Endofunctor","HasPure"],"HasPure"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","HasUnit"],"HasUnit"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"u"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Endofunctor","HasUnpoint"],"HasUnpoint"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"u"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"u"}]}}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Restrictable"],"Restrictable"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"c"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Slackable"],"Slackable"],"constraintArgs":[{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"c"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"u"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"u"}]}}]}]}]}]}]}]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]