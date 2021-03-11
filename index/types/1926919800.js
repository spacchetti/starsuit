// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1926919800"] = [{"values":[{"sourceSpan":{"start":[195,1],"name":".spago/react-enzyme/v1.1.1/src/Enzyme/Wrapper.purs","end":[196,74]},"score":0,"packageInfo":{"values":["react-enzyme"],"tag":"Package"},"name":"someWhere","moduleName":"Enzyme.Wrapper","info":{"values":[{"type":{"tag":"ForAll","contents":["w",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Enzyme","Wrapper"],"Wrapper"],"constraintArgs":[{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns whether or not any of the nodes in the wrapper pass the provided\npredicate function.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[145,1],"name":".spago/react-enzyme/v1.1.1/src/Enzyme/Wrapper.purs","end":[146,74]},"score":0,"packageInfo":{"values":["react-enzyme"],"tag":"Package"},"name":"everyWhere","moduleName":"Enzyme.Wrapper","info":{"values":[{"type":{"tag":"ForAll","contents":["w",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Enzyme","Wrapper"],"Wrapper"],"constraintArgs":[{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns whether or not all of the nodes in the wrapper pass the provided\npredicate function.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[67,3],"name":".spago/react-enzyme/v1.1.1/src/Enzyme/Wrapper.purs","end":[67,54]},"score":0,"packageInfo":{"values":["react-enzyme"],"tag":"Package"},"name":"findWhere","moduleName":"Enzyme.Wrapper","info":{"values":[{"typeClassArguments":[["w",null]],"typeClass":[["Enzyme","Wrapper"],"Wrapper"],"type":{"tag":"ForAll","contents":["w",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Enzyme","Wrapper"],"Wrapper"],"constraintArgs":[{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"w"}]}]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"Finds every node in the render tree that returns true for the provided\npredicate function.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[22,1],"name":".spago/node-postgres/v5.0.0/src/Database/Postgres/Transaction.purs","end":[22,66]},"score":0,"packageInfo":{"values":["node-postgres"],"tag":"Package"},"name":"withTransaction","moduleName":"Database.Postgres.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Database","Postgres"],"Client"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeVar","contents":"a"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Database","Postgres"],"Client"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Runs an asynchronous action in a database transaction. The transaction\nwill be rolled back if the computation fails and committed otherwise.\n\nHere the first insert will be rolled back:\n\n```purescript\nmoneyTransfer :: forall e. (Client -> Aff e Unit) -> Client -> Aff e Unit\nmoneyTransfer = withTransaction $ \\c -> do\n  execute_ (Query \"insert into accounts ...\") c\n  throwError $ error \"Something went wrong\"\n  execute_ (Query \"insert into accounts ...\") c\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[52,1],"name":".spago/datetime/v5.0.0/src/Data/DateTime.purs","end":[52,81]},"score":15,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"modifyTimeF","moduleName":"Data.DateTime","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Time"],"Time"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Data","Time"],"Time"]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","DateTime"],"DateTime"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Data","DateTime"],"DateTime"]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[43,1],"name":".spago/datetime/v5.0.0/src/Data/DateTime.purs","end":[43,81]},"score":15,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"modifyDateF","moduleName":"Data.DateTime","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Date"],"Date"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Data","Date"],"Date"]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","DateTime"],"DateTime"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Data","DateTime"],"DateTime"]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]