// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["747622536"] = [{"values":[{"sourceSpan":{"start":[267,1],"name":".spago/enums/v5.0.0/src/Data/Enum.purs","end":[267,72]},"score":14,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"defaultPred","moduleName":"Data.Enum","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Provides a default implementation for `pred`, given a function that maps\nintegers to values in the `Enum`, and a function that maps values in the\n`Enum` back to integers. The integer mapping must agree in both directions\nfor this to implement a law-abiding `pred`.\n\nIf a `BoundedEnum` instance exists for `a`, the `toEnum` and `fromEnum`\nfunctions can be used here:\n\n``` purescript\npred = defaultPred toEnum fromEnum\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[253,1],"name":".spago/enums/v5.0.0/src/Data/Enum.purs","end":[253,72]},"score":14,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"defaultSucc","moduleName":"Data.Enum","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Provides a default implementation for `succ`, given a function that maps\nintegers to values in the `Enum`, and a function that maps values in the\n`Enum` back to integers. The integer mapping must agree in both directions\nfor this to implement a law-abiding `succ`.\n\nIf a `BoundedEnum` instance exists for `a`, the `toEnum` and `fromEnum`\nfunctions can be used here:\n\n``` purescript\nsucc = defaultSucc toEnum fromEnum\n```\n"}],"tag":"SearchResult"}]