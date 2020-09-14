// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1163235987"] = [{"values":[{"sourceSpan":{"start":[90,1],"name":".spago/profunctor-lenses/v6.3.0/src/Data/Lens/Types.purs","end":[90,63]},"score":11,"packageInfo":{"values":["profunctor-lenses"],"tag":"Package"},"name":"Traversal","moduleName":"Data.Lens.Types","info":{"values":[{"type":{"tag":"ForAll","contents":["p",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Lens","Internal","Wander"],"Wander"],"constraintArgs":[{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Optic"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},"arguments":[["s",null],["t",null],["a",null],["b",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"A traversal.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[82,1],"name":".spago/profunctor-lenses/v6.3.0/src/Data/Lens/Types.purs","end":[82,59]},"score":11,"packageInfo":{"values":["profunctor-lenses"],"tag":"Package"},"name":"Prism","moduleName":"Data.Lens.Types","info":{"values":[{"type":{"tag":"ForAll","contents":["p",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Profunctor","Choice"],"Choice"],"constraintArgs":[{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Optic"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},"arguments":[["s",null],["t",null],["a",null],["b",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"A prism.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[52,1],"name":".spago/profunctor-lenses/v6.3.0/src/Data/Lens/Types.purs","end":[52,58]},"score":11,"packageInfo":{"values":["profunctor-lenses"],"tag":"Package"},"name":"Lens","moduleName":"Data.Lens.Types","info":{"values":[{"type":{"tag":"ForAll","contents":["p",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Profunctor","Strong"],"Strong"],"constraintArgs":[{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Optic"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},"arguments":[["s",null],["t",null],["a",null],["b",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"Given a type whose \"focus element\" always exists,\na lens provides a convenient way to view, set, and transform\nthat element. \n\nFor example, `_2` is a tuple-specific `Lens` available from `Data.Lens`, so:\n```purescript\nover _2 String.length $ Tuple \"ignore\" \"four\" == Tuple \"ignore\" 4\n```\nNote the result has a different type than the original tuple.\nThat is, the four `Lens` type variables have been narrowed to:\n\n* `s` is `Tuple String String`\n* `t` is `Tuple String Int`\n* `a` is `String`\n* `b` is `Int`\n\nSee `Data.Lens.Getter` and `Data.Lens.Setter` for functions and operators\nfrequently used with lenses.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[86,1],"name":".spago/profunctor-lenses/v6.3.0/src/Data/Lens/Types.purs","end":[86,61]},"score":11,"packageInfo":{"values":["profunctor-lenses"],"tag":"Package"},"name":"Iso","moduleName":"Data.Lens.Types","info":{"values":[{"type":{"tag":"ForAll","contents":["p",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Profunctor"],"Profunctor"],"constraintArgs":[{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Optic"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},"arguments":[["s",null],["t",null],["a",null],["b",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"A generalized isomorphism.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[117,1],"name":".spago/profunctor-lenses/v6.3.0/src/Data/Lens/Types.purs","end":[117,59]},"score":11,"packageInfo":{"values":["profunctor-lenses"],"tag":"Package"},"name":"Grate","moduleName":"Data.Lens.Types","info":{"values":[{"type":{"tag":"ForAll","contents":["p",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Profunctor","Closed"],"Closed"],"constraintArgs":[{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Optic"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},"arguments":[["s",null],["t",null],["a",null],["b",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"A grate (http://r6research.livejournal.com/28050.html)\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[124,1],"name":".spago/profunctor-lenses/v6.3.0/src/Data/Lens/Types.purs","end":[124,47]},"score":11,"packageInfo":{"values":["profunctor-lenses"],"tag":"Package"},"name":"Getter","moduleName":"Data.Lens.Types","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Fold"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]},null]},"arguments":[["s",null],["t",null],["a",null],["b",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"A getter.\n"}],"tag":"SearchResult"}]