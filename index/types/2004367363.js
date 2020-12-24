// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2004367363"] = [{"values":[{"sourceSpan":{"start":[49,1],"name":".spago/assert/v4.1.0/src/Test/Assert.purs","end":[53,17]},"score":76,"packageInfo":{"values":["assert"],"tag":"Package"},"name":"assertThrows'","moduleName":"Test.Assert","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Throws a runtime exception with the specified message, unless the argument\nthrows an exception when evaluated.\n\nThis function is specifically for testing unsafe pure code; for example,\nto make sure that an exception is thrown if a precondition is not\nsatisfied. Functions which use `Effect a` can be\ntested with `catchException` instead.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[71,1],"name":".spago/minibench/v2.0.0/src/Performance/Minibench.purs","end":[75,24]},"score":7,"packageInfo":{"values":["minibench"],"tag":"Package"},"name":"benchWith'","moduleName":"Performance.Minibench","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Performance","Minibench"],"BenchResult"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[52,1],"name":".spago/minibench/v2.0.0/src/Performance/Minibench.purs","end":[56,17]},"score":7,"packageInfo":{"values":["minibench"],"tag":"Package"},"name":"benchWith","moduleName":"Performance.Minibench","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Estimate the running time of a function and print a summary to the console,\nspecifying the number of samples to take. More samples will give a better\nestimate of both mean and standard deviation, but will increase running time.\n\nTo increase benchmark accuracy by forcing garbage collection before the\nbenchmark is run, node should be invoked with the '--expose-gc' flag.\n"}],"tag":"SearchResult"}]