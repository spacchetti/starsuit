// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["784002358"] = [{"values":[{"sourceSpan":{"start":[411,1],"name":".spago/pointed/v0.1.1/src/Data/Pointed/Wedge.purs","end":[411,85]},"score":0,"packageInfo":{"values":["pointed"],"tag":"Package"},"name":"codistribute","moduleName":"Data.Pointed.Wedge","info":{"values":[{"type":{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Wedge"],"Wedge"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"c"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Wedge"],"Wedge"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Wedge"],"Wedge"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeVar","contents":"c"}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Codistribute `Either` over a `Wedge`.\n\n```purescript\n> codistribute (Left Non :: Either (Wedge String Int) (Wedge Boolean Int))\nNon\n\n> codistribute (Left (One \"hello\") :: Either (Wedge String Int) (Wedge Boolean Int))\nOne (Left \"hello\")\n\n> codistribute (Left (Eno 42) :: Either (Wedge String Int) (Wedge Boolean Int))\nEno 42\n\n> codistribute (Right Non :: Either (Wedge String Int) (Wedge Boolean Int))\nNon\n\n> codistribute (Right (One true) :: Either (Wedge String Int) (Wedge Boolean Int))\nOne (Right true)\n\n> codistribute (Right (Eno 42) :: Either (Wedge String Int) (Wedge Boolean Int))\nEno 42\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[312,1],"name":".spago/pointed/v0.1.1/src/Data/Pointed/Smash.purs","end":[312,83]},"score":0,"packageInfo":{"values":["pointed"],"tag":"Package"},"name":"redistribute","moduleName":"Data.Pointed.Smash","info":{"values":[{"type":{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Smash"],"Smash"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"c"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Smash"],"Smash"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Smash"],"Smash"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeVar","contents":"c"}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Distribute a `Tuple` over `Smash`.\n\n```purescript\n> redistribute (Tuple Non Non :: Tuple (Smash String Int) (Smash String Int))\nNon\n\n> redistribute Tuple (Two \"hello\" 42) (Two \"world\" 42)\nTwo (Tuple \"hello\" \"world\") 42\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[59,1],"name":".spago/pointed/v0.1.1/src/Data/Pointed/Distributivity.purs","end":[59,75]},"score":0,"packageInfo":{"values":["pointed"],"tag":"Package"},"name":"canSmash","moduleName":"Data.Pointed.Distributivity","info":{"values":[{"type":{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Can"],"Can"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Smash"],"Smash"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"c"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Smash"],"Smash"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Smash"],"Smash"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Can"],"Can"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeVar","contents":"c"}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`canSmash` returns `S.Non` except when:\n\n`C.One (S.Two a c)` goes to `S.Two (C.One a) c`\n`C.Eno (S.Two b c)` goes to `S.Two (C.Eno b) c`\n`C.Two (S.Two a c)` goes to `S.Two (C.Two a b) c`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[36,1],"name":".spago/pointed/v0.1.1/src/Data/Pointed/Distributivity.purs","end":[36,81]},"score":0,"packageInfo":{"values":["pointed"],"tag":"Package"},"name":"wedgeSmash","moduleName":"Data.Pointed.Distributivity","info":{"values":[{"type":{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Wedge"],"Wedge"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Smash"],"Smash"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"c"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Smash"],"Smash"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Smash"],"Smash"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Wedge"],"Wedge"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeVar","contents":"c"}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`wedgeSmash` returns `S.Non` in all cases except:\n\n- `W.One (S.Two a c)`, in which case it returns `S.Two (W.One a) c`\n- `W.Eno (S.Two b c)`, in which case it returns `S.Two (W.Eno b) c`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[558,1],"name":".spago/pointed/v0.1.1/src/Data/Pointed/Can.purs","end":[558,79]},"score":0,"packageInfo":{"values":["pointed"],"tag":"Package"},"name":"codistribute","moduleName":"Data.Pointed.Can","info":{"values":[{"type":{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Can"],"Can"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"c"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Can"],"Can"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Can"],"Can"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeVar","contents":"c"}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Codistribute `Either` over a `Can`.\n\n```purescript\n> codistribute (Left Non :: Either (Can String Int) (Can Boolean Int))\nNon\n\n> codistribute (Left (One \"hello\") :: Either (Can String Int) (Can Boolean Int))\nOne (Left \"hello\")\n\n> codistribute (Left (Eno 42) :: Either (Can String Int) (Can Boolean Int))\nEno 42\n\n> codistribute (Left (Two \"hello\" 42) :: Either (Can String Int) (Can Boolean Int))\nTwo (Left \"hello\") 42\n\n> codistribute (Right Non :: Either (Can String Int) (Can Boolean Int))\nNon\n\n> codistribute (Right (One true) :: Either (Can String Int) (Can Boolean Int))\nOne (Right true)\n\n> codistribute (Right (Eno 42) :: Either (Can String Int) (Can Boolean Int))\nEno 42\n\n> codistribute (Right (Two true 42) :: Either (Can String Int) (Can Boolean Int))\nTwo (Right true) 42\n```\n"}],"tag":"SearchResult"}]