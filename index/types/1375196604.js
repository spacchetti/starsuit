// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1375196604"] = [{"values":[{"sourceSpan":{"start":[105,1],"name":".spago/parsing-dataview/v1.1.1/src/Text/Parsing/Parser/DataView.purs","end":[114,30]},"score":1,"packageInfo":{"values":["parsing-dataview"],"tag":"Package"},"name":"anyPrim","moduleName":"Text.Parsing.Parser.DataView","info":{"values":[{"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["name",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","ArrayBuffer","ValueMapping"],"BinaryValue"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"t"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","ArrayBuffer","ValueMapping"],"BytesPerValue"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","ArrayBuffer","ValueMapping"],"ShowArrayViewType"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"name"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"name"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Class"],"MonadEffect"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","ArrayBuffer","DataView"],"Endian"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayBuffer","DataView"],"AProxy"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeConstructor","contents":[["Data","ArrayBuffer","Types"],"DataView"]}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"t"}]}]}]}]}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Parse one fixed-bit-width `Data.ArrayBuffer.Types.ArrayViewType` primitive\nof a given endianness.\n\n#### Example\n\nParse a little-endian 32-bit signed integer (4 bytes):\n\n    anyPrim LE (AProxy :: AProxy Int32)\n\nor just use the convenience function `anyInt32le`, see below.\n"}],"tag":"SearchResult"}]