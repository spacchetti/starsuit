// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1212750442"] = [{"values":[{"sourceSpan":{"start":[39,1],"name":".spago/trout/v0.12.3/src/Type/Trout/Record.purs","end":[46,15]},"score":3,"packageInfo":{"values":["trout"],"tag":"Package"},"name":"insert","moduleName":"Type.Trout.Record","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["l",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r1",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"l"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"l"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Symbol"],"SProxy"]},{"tag":"TypeVar","contents":"l"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r2"}]}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[94,1],"name":".spago/record/v2.0.2/src/Record.purs","end":[102,15]},"score":32,"packageInfo":{"values":["record"],"tag":"Package"},"name":"insert","moduleName":"Record","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["l",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r1",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"l"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Lacks"],"constraintArgs":[{"tag":"TypeVar","contents":"l"},{"tag":"TypeVar","contents":"r1"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"l"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Symbol"],"SProxy"]},{"tag":"TypeVar","contents":"l"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r2"}]}]}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Insert a new property for a label which is specified using a value-level proxy for\na type-level string.\n\nFor example:\n\n```purescript\ninsert (SProxy :: SProxy \"x\")\n  :: forall r a. Lacks \"x\" r => a -> { | r } -> { x :: a | r }\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[142,3],"name":".spago/heterogeneous/v0.4.1/src/Heterogeneous/Mapping.purs","end":[142,69]},"score":1,"packageInfo":{"values":["heterogeneous"],"tag":"Package"},"name":"mapVariantWithIndex","moduleName":"Heterogeneous.Mapping","info":{"values":[{"typeClassArguments":[["xs",{"tag":"NamedKind","contents":[["Prim","RowList"],"RowList"]}],["f",null],["as",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}}],["bs",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}}]],"typeClass":[["Heterogeneous","Mapping"],"MapVariantWithIndex"],"type":{"tag":"ForAll","contents":["xs",{"tag":"NamedKind","contents":[["Prim","RowList"],"RowList"]},{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["as",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}},{"tag":"ForAll","contents":["bs",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Heterogeneous","Mapping"],"MapVariantWithIndex"],"constraintArgs":[{"tag":"TypeVar","contents":"xs"},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"as"},{"tag":"TypeVar","contents":"bs"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Data","RowList"],"RLProxy"]},{"tag":"TypeVar","contents":"xs"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"as"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"bs"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]