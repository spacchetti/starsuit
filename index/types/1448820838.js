// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1448820838"] = [{"values":[{"sourceSpan":{"start":[255,1],"name":".spago/variant/v7.0.2/src/Data/Functor/Variant.purs","end":[255,40]},"score":10,"packageInfo":{"values":["variant"],"tag":"Package"},"name":"default","moduleName":"Data.Functor.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Variant"],"VariantF"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Combinator for partial matching with a default value in case of failure.\n```purescript\ncaseFn :: forall r. VariantF (foo :: Maybe, bar :: Tuple String | r) Int -> String\ncaseFn = default \"No match\"\n # on (Proxy :: Proxy \"foo\") (\\foo -> \"Foo: \" <> maybe \"nothing\" show foo)\n # on (Proxy :: Proxy \"bar\") (\\bar -> \"Bar: \" <> show (snd bar))\n```\n"}],"tag":"SearchResult"}]