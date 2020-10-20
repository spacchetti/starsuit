// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["251509922"] = [{"values":[{"sourceSpan":{"start":[186,1],"name":".spago/pointed/v0.1.1/src/Data/Pointed/Can.purs","end":[186,73]},"score":0,"packageInfo":{"values":["pointed"],"tag":"Package"},"name":"toRepr","moduleName":"Data.Pointed.Can","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Pointed","Can"],"Can"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]}}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Destructs a `Can` to its isomorphic representation. Note that this is\nthe precise inverse of `fromRepr`.\n\n```purescript\n> toRepr (Non :: Can String Int)\nNothing\n\n> toRepr (One \"hello\" :: Can String Int)\nJust (Left (Left \"hello\"))\n\n> toRepr (Eno 42 :: Can String Int)\nJust (Left (Right 42))\n\n> toRepr Two \"hello\" 42\nJust (Right (Tuple \"hello\" 42))\n```\n"}],"tag":"SearchResult"}]