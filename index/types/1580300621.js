// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1580300621"] = [{"values":[{"sourceSpan":{"start":[179,1],"name":".spago/parsing-replace/v1.0.2/src/Text/Parsing/Replace/String.purs","end":[183,36]},"score":0,"packageInfo":{"values":["parsing-replace"],"tag":"Package"},"name":"splitCap","moduleName":"Text.Parsing.Replace.String","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"NonEmptyList"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"#### Split on and capture all patterns\n\nFind all occurences of the pattern `sep`, split the input string, capture\nall the patterns and the splits.\n\nThe input string will be split on every leftmost non-overlapping occurence\nof the pattern `sep`. The output list will contain\nthe parsed result of input string sections which match the `sep` pattern\nin `Right`, and non-matching sections in `Left`.\n\n#### Access the matched section of text\n\nIf you want to capture the matched strings, then combine the pattern\nparser `sep` with the `match` combinator.\n\nWith the matched strings, we can reconstruct the input string.\nFor all `input`, `sep`, if\n\n```purescript\nlet output = splitCap (match sep) input\n```\n\nthen\n\n```purescript\ninput == fold (either identity fst <$> output)\n```\n\n(This invariant might not hold if `sep` can succeed without consuming\nany input, like if `sep` is a `lookAhead` parser.)\n"}],"tag":"SearchResult"}]