// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["616476538"] = [{"values":[{"sourceSpan":{"start":[30,1],"name":".spago/queue/v8.0.2/src/IOQueues.purs","end":[35,24]},"score":1,"packageInfo":{"values":["queue"],"tag":"Package"},"name":"callAsync","moduleName":"IOQueues","info":{"values":[{"type":{"tag":"ForAll","contents":["q",{"tag":"ForAll","contents":["output",{"tag":"ForAll","contents":["input",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Queue","Types"],"Queue"],"constraintArgs":[{"tag":"TypeVar","contents":"q"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Queue","Types"],"QueueScope"],"constraintArgs":[{"tag":"TypeVar","contents":"q"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["IOQueues"],"IOQueues"]},{"tag":"TypeVar","contents":"q"}]},{"tag":"TypeVar","contents":"input"}]},{"tag":"TypeVar","contents":"output"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"input"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeVar","contents":"output"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Invoke the queue in `Aff`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[45,1],"name":".spago/transformers/v4.2.0/src/Control/Monad/State/Trans.purs","end":[45,66]},"score":43,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"execStateT","moduleName":"Control.Monad.State.Trans","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","State","Trans"],"StateT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"s"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Run a computation in the `StateT` monad discarding the result.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[41,1],"name":".spago/transformers/v4.2.0/src/Control/Monad/State/Trans.purs","end":[41,66]},"score":43,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"evalStateT","moduleName":"Control.Monad.State.Trans","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","State","Trans"],"StateT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Run a computation in the `StateT` monad, discarding the final state.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[37,1],"name":".spago/transformers/v4.2.0/src/Control/Monad/Reader/Trans.purs","end":[37,56]},"score":43,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"runReaderT","moduleName":"Control.Monad.Reader.Trans","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Reader","Trans"],"ReaderT"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Run a computation in the `ReaderT` monad.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[34,1],"name":".spago/aff-coroutines/v7.0.0/src/Control/Coroutine/Aff.purs","end":[34,52]},"score":0,"packageInfo":{"values":["aff-coroutines"],"tag":"Package"},"name":"close","moduleName":"Control.Coroutine.Aff","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Coroutine","Aff"],"Emitter"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[31,1],"name":".spago/aff-coroutines/v7.0.0/src/Control/Coroutine/Aff.purs","end":[31,51]},"score":0,"packageInfo":{"values":["aff-coroutines"],"tag":"Package"},"name":"emit","moduleName":"Control.Coroutine.Aff","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Coroutine","Aff"],"Emitter"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]