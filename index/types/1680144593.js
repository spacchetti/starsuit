// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1680144593"] = [{"values":[{"sourceSpan":{"start":[177,1],"name":".spago/strings/v4.0.2/src/Data/String/NonEmpty/CodeUnits.purs","end":[177,75]},"score":0,"packageName":"strings","name":"uncons","moduleName":"Data.String.NonEmpty.CodeUnits","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["head",{"tag":"TypeConstructor","contents":[["Prim"],"Char"]},{"tag":"RCons","contents":["tail",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"REmpty","contents":{}}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns the first character and the rest of the string.\n\n```purescript\nuncons \"a\" == { head: 'a', tail: Nothing }\nuncons \"Hello World\" == { head: 'H', tail: Just (NonEmptyString \"ello World\") }\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[91,1],"name":".spago/strings/v4.0.2/src/Data/String/NonEmpty/CodePoints.purs","end":[91,80]},"score":0,"packageName":"strings","name":"uncons","moduleName":"Data.String.NonEmpty.CodePoints","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["head",{"tag":"TypeConstructor","contents":[["Data","String","CodePoints"],"CodePoint"]},{"tag":"RCons","contents":["tail",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"REmpty","contents":{}}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[320,1],"name":".spago/sparse-matrices/v1.1.0/src/Data/Sparse/Matrix.purs","end":[320,70]},"score":0,"packageName":"sparse-matrices","name":"diagonalize","moduleName":"Data.Sparse.Matrix","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Sparse","Matrix"],"Symmetric"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["val",{"tag":"TypeConstructor","contents":[["Data","Sparse","Matrix"],"Symmetric"]},{"tag":"RCons","contents":["vec",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Sparse","Matrix"],"Square"]},{"tag":"TypeConstructor","contents":[["Prim"],"Number"]}]},{"tag":"REmpty","contents":{}}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Square real matrix diagonalization such that m = vec * val * recip vec\n"}],"tag":"SearchResult"}]