// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1980087980"] = [{"values":[{"sourceSpan":{"start":[338,1],"name":".spago/strings/v4.0.2/src/Data/String/CodeUnits.purs","end":[338,81]},"score":54,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"splitAt","moduleName":"Data.String.CodeUnits","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["before",{"tag":"TypeConstructor","contents":[["Prim"],"String"]},{"tag":"RCons","contents":["after",{"tag":"TypeConstructor","contents":[["Prim"],"String"]},{"tag":"REmpty","contents":{}}]}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Splits a string into two substrings, where `before` contains the\ncharacters up to (but not including) the given index, and `after` contains\nthe rest of the string, from that index on.\n\n```purescript\nsplitAt 2 \"Hello World\" == { before: \"He\", after: \"llo World\"}\nsplitAt 10 \"Hi\" == { before: \"Hi\", after: \"\"}\n```\n\nThus the length of `(splitAt i s).before` will equal either `i` or\n`length s`, if that is shorter. (Or if `i` is negative the length will be\n0.)\n\nIn code:\n```purescript\nlength (splitAt i s).before == min (max i 0) (length s)\n(splitAt i s).before <> (splitAt i s).after == s\nsplitAt i s == {before: take i s, after: drop i s}\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[385,1],"name":".spago/strings/v4.0.2/src/Data/String/CodePoints.purs","end":[385,66]},"score":54,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"splitAt","moduleName":"Data.String.CodePoints","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["before",{"tag":"TypeConstructor","contents":[["Prim"],"String"]},{"tag":"RCons","contents":["after",{"tag":"TypeConstructor","contents":[["Prim"],"String"]},{"tag":"REmpty","contents":{}}]}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Splits a string into two substrings, where `before` contains the code\npoints up to (but not including) the given index, and `after` contains the\nrest of the string, from that index on.\n\n```purescript\n>>> splitAt 3 \"b 𝐀𝐀 c 𝐀\"\n{ before: \"b 𝐀\", after: \"𝐀 c 𝐀\" }\n```\n\nThus the length of `(splitAt i s).before` will equal either `i` or\n`length s`, if that is shorter. (Or if `i` is negative the length will be\n0.)\n\nIn code:\n```purescript\nlength (splitAt i s).before == min (max i 0) (length s)\n(splitAt i s).before <> (splitAt i s).after == s\nsplitAt i s == {before: take i s, after: drop i s}\n```\n"}],"tag":"SearchResult"}]