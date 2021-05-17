// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2068865576"] = [{"values":[{"sourceSpan":{"start":[17,1],"name":".spago/spec/v5.0.1/src/Test/Spec/Console.purs","end":[17,72]},"score":28,"packageInfo":{"values":["spec"],"tag":"Package"},"name":"logWriter","moduleName":"Test.Spec.Console","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Class"],"MonadEffect"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Writer","Trans"],"WriterT"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[350,1],"name":".spago/pipes/v7.0.1/src/Pipes/Prelude.purs","end":[350,55]},"score":1,"packageInfo":{"values":["pipes"],"tag":"Package"},"name":"toList","moduleName":"Pipes.Prelude","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pipes","Core"],"Producer"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Identity"],"Identity"]}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert a pure `Producer` into a list\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[270,1],"name":".spago/pipes/v7.0.1/src/Pipes/Prelude.purs","end":[270,64]},"score":1,"packageInfo":{"values":["pipes"],"tag":"Package"},"name":"or","moduleName":"Pipes.Prelude","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pipes","Core"],"Producer"]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Determines whether any element is `True`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[266,1],"name":".spago/pipes/v7.0.1/src/Pipes/Prelude.purs","end":[266,65]},"score":1,"packageInfo":{"values":["pipes"],"tag":"Package"},"name":"and","moduleName":"Pipes.Prelude","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pipes","Core"],"Producer"]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Determines whether all elements are `True`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[112,1],"name":".spago/machines/v6.1.0/src/Data/Machine/Mealy.purs","end":[112,62]},"score":0,"packageInfo":{"values":["machines"],"tag":"Package"},"name":"runMealy","moduleName":"Data.Machine.Mealy","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Machine","Mealy"],"MealyT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Run a machine as an effectful computatation.\n\nFor example:\n```purescript\nrunMealy $ take 10 $ source (pure 1) >>> sink logShow\n```\n"}],"tag":"SearchResult"}]