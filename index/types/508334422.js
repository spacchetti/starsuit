// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["508334422"] = [{"values":[{"sourceSpan":{"start":[165,1],"name":".spago/substitute/v0.1.1/src/Substitute.purs","end":[174,6]},"score":0,"packageInfo":{"values":["substitute"],"tag":"Package"},"name":"Options","moduleName":"Substitute","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["marker",{"tag":"TypeConstructor","contents":[["Prim"],"Char"]},{"tag":"RCons","contents":["open",{"tag":"TypeConstructor","contents":[["Prim"],"Char"]},{"tag":"RCons","contents":["close",{"tag":"TypeConstructor","contents":[["Prim"],"Char"]},{"tag":"RCons","contents":["missing",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"RCons","contents":["normalizeString",{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]},{"tag":"RCons","contents":["normalizeSubstitutions",{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]},{"tag":"RCons","contents":["indent",{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]},{"tag":"RCons","contents":["suppress",{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]},{"tag":"REmpty","contents":{}}]}]}]}]}]}]}]}]}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"### marker, open, close :: Char\nThese three characters are used for detecting places to substitute values. Unless preceded by a `\\`, sequences of the form `<marker><open>key<close>` will be replaced by the value at `key` in the substitution record, if it exists. When it doesn't exist, see `missing` below.\n\n### missing :: String -> String\nWhen there is no value associated with `key`, the substituter returns the result of passing `key` into `missing`.\n\n### normalizeString :: Boolean\nUse `normalize` on the string passed to the function.\n\n### normalizeSubstitutions :: Boolean\nUse `normalize` on the substitutions.\n\n### indent :: Boolean\nWhen substituting in multi-line strings, pad with the appropriate whitespace so that all the lines are at the indentation level of the marker. Empty lines are not padded.\n\n\n```\n-- str1 = str2\n\nstr1 =\n  substitute\n    \"\"\"\n    f = do\n      ${body}\n    \"\"\"\n    { body:\n        \"\"\"\n        log foo\n        log bar\n        log baz\n        \"\"\"\n    }\n\nstr2 =\n  \"\"\"f = do\n  log foo\n  log bar\n  log baz\n\"\"\"\n```\n\n### suppress :: Boolean\nWhen substituting in multi-line strings that end in a `\\n`, drop the `\\n`. With `suppress = false`, `str1` in the example above evaluates to\n```\n\"\"\"f = do\n  log foo\n  log bar\n  log baz\n\n\"\"\"\n```\n"}],"tag":"SearchResult"}]