// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2021819219"] = [{"values":[{"sourceSpan":{"start":[38,1],"name":".spago/assert/v4.1.0/src/Test/Assert.purs","end":[38,53]},"score":74,"packageInfo":{"values":["assert"],"tag":"Package"},"name":"assertThrows","moduleName":"Test.Assert","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Throws a runtime exception with message \"Assertion failed: An error should\nhave been thrown\", unless the argument throws an exception when evaluated.\n\nThis function is specifically for testing unsafe pure code; for example,\nto make sure that an exception is thrown if a precondition is not\nsatisfied. Functions which use `Effect a` can be\ntested with `catchException` instead.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[23,1],"name":".spago/stylesheet/v0.0.3/src/Stylesheet/Types/CSSRuleSet.purs","end":[23,59]},"score":1,"packageInfo":{"values":["stylesheet"],"tag":"Package"},"name":"fun","moduleName":"Stylesheet.Types.CSSRuleSet","info":{"values":[{"type":{"tag":"ForAll","contents":["props",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"props"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Stylesheet","Types","CSSRuleSet"],"CSSRuleSet"]},{"tag":"TypeVar","contents":"props"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a rule that receives the props\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[120,1],"name":".spago/minibench/v2.0.0/src/Performance/Minibench.purs","end":[120,46]},"score":7,"packageInfo":{"values":["minibench"],"tag":"Package"},"name":"bench","moduleName":"Performance.Minibench","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Estimate the running time of a function and print a summary to the console,\nby running the function 1000 times.\n\nFor example:\n\n```\n> import Data.Array\n> import Data.Foldable\n> import Performance.Minibench\n> bench \\_ -> sum (1 .. 10000)\n\nmean   = 414.00 μs\nstddev = 494.82 μs\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[9,1],"name":".spago/node-fs/v5.0.1/src/Node/FS/Internal.purs","end":[9,46]},"score":11,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"mkEffect","moduleName":"Node.FS.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[33,1],"name":".spago/lazy/v4.0.0/src/Data/Lazy.purs","end":[33,56]},"score":7,"packageInfo":{"values":["lazy"],"tag":"Package"},"name":"defer","moduleName":"Data.Lazy","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lazy"],"Lazy"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Defer a computation, creating a `Lazy` value.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[39,1],"name":".spago/functions/v4.0.0/src/Data/Function/Uncurried.purs","end":[39,55]},"score":31,"packageInfo":{"values":["functions"],"tag":"Package"},"name":"mkFn0","moduleName":"Data.Function.Uncurried","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Function","Uncurried"],"Fn0"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a function of no arguments\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[28,1],"name":".spago/free/v5.2.0/src/Control/Monad/Trampoline.purs","end":[28,47]},"score":14,"packageInfo":{"values":["free"],"tag":"Package"},"name":"delay","moduleName":"Control.Monad.Trampoline","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Trampoline"],"Trampoline"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Use the `Trampoline` monad to represent the delayed evaluation of a value.\n"}],"tag":"SearchResult"}]