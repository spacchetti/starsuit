// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1645334343"] = [{"values":[{"sourceSpan":{"start":[103,1],"name":".spago/pathy/v8.0.0/src/Pathy/Printer.purs","end":[110,12]},"score":0,"packageInfo":{"values":["pathy"],"tag":"Package"},"name":"debugPrintPath","moduleName":"Pathy.Printer","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","TypeError"],"Warn"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim","TypeError"],"Text"]},{"tag":"TypeLevelString","contents":"debugPrintPath usage"}]}}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Pathy","Phantom"],"IsRelOrAbs"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Pathy","Phantom"],"IsDirOrFile"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Pathy","Printer"],"Printer"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Path"],"Path"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Prints a path exactly according to its representation. This should only be\nused for debug purposes. Using this function will raise a warning at\ncompile time as a reminder!\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[91,1],"name":".spago/pathy/v8.0.0/src/Pathy/Printer.purs","end":[97,12]},"score":0,"packageInfo":{"values":["pathy"],"tag":"Package"},"name":"unsafePrintPath","moduleName":"Pathy.Printer","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Pathy","Phantom"],"IsRelOrAbs"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Pathy","Phantom"],"IsDirOrFile"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Pathy","Printer"],"Printer"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Sandboxed"],"SandboxedPath"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Prints a `SandboxedPath` into its canonical `String` representation, using\nthe specified printer. This will print a relative path if `b ~ Rel`, which\ndepending on how the resulting string is used, may be unsafe.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[72,1],"name":".spago/pathy/v8.0.0/src/Pathy/Printer.purs","end":[78,12]},"score":0,"packageInfo":{"values":["pathy"],"tag":"Package"},"name":"printPath","moduleName":"Pathy.Printer","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Pathy","Phantom"],"IsRelOrAbs"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Pathy","Phantom"],"IsDirOrFile"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Pathy","Printer"],"Printer"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Sandboxed"],"SandboxedPath"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Prints a `SandboxedPath` into its canonical `String` representation, using\nthe specified printer. The printed path will always be absolute, as this\nis the only way to ensure the path is safely referring to the intended\nlocation.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[149,1],"name":".spago/remotedata/v5.0.0/src/Network/RemoteData.purs","end":[149,52]},"score":1,"packageInfo":{"values":["remotedata"],"tag":"Package"},"name":"withDefault","moduleName":"Network.RemoteData","info":{"values":[{"type":{"tag":"ForAll","contents":["e",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Network","RemoteData"],"RemoteData"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"If the `RemoteData` has been successfully loaded, return that,\notherwise return a default value.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[106,1],"name":".spago/identy/v3.0.0/src/Identy/ObjectMap.purs","end":[106,72]},"score":0,"packageInfo":{"values":["identy"],"tag":"Package"},"name":"member","moduleName":"Identy.ObjectMap","info":{"values":[{"type":{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"k"},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Identy","ObjectMap"],"ObjectMap"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[371,1],"name":".spago/veither/v1.0.3/src/Data/Veither.purs","end":[371,61]},"score":1,"packageInfo":{"values":["veither"],"tag":"Package"},"name":"vfromRight","moduleName":"Data.Veither","info":{"values":[{"type":{"tag":"ForAll","contents":["errorRows",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Veither"],"Veither"]},{"tag":"TypeVar","contents":"errorRows"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Extract the value from a `Veither`, using a default value in case the underlying\n`Variant` is storing one of the error rows' values.\n\n```\nvError :: Veither (foo :: Int) String\nvError = Veither (inj (Proxy :: Proxy \"foo\") 4)\n\nvSuccess :: Veither (foo :: Int) String\nvSuccess = pure \"yay\"\n\nvfromRight \"\" vError   == \"\"\nvfromRight \"\" vSuccess == \"yay\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[419,1],"name":".spago/ordered-collections/v2.0.1/src/Data/Map/Internal.purs","end":[419,55]},"score":23,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"member","moduleName":"Data.Map.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Test if a key is a member of a map\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[301,1],"name":".spago/unordered-collections/v2.1.0/src/Data/HashMap.purs","end":[301,64]},"score":0,"packageInfo":{"values":["unordered-collections"],"tag":"Package"},"name":"member","moduleName":"Data.HashMap","info":{"values":[{"type":{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Hashable"],"Hashable"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","HashMap"],"HashMap"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Test whether a key is in a map.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[243,1],"name":".spago/either/v5.0.0/src/Data/Either.purs","end":[243,46]},"score":65,"packageInfo":{"values":["either"],"tag":"Package"},"name":"fromRight","moduleName":"Data.Either","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A function that extracts the value from the `Right` data constructor.\nThe first argument is a default value, which will be returned in the\ncase where a `Left` is passed to `fromRight`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[227,1],"name":".spago/either/v5.0.0/src/Data/Either.purs","end":[227,45]},"score":65,"packageInfo":{"values":["either"],"tag":"Package"},"name":"fromLeft","moduleName":"Data.Either","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A function that extracts the value from the `Left` data constructor.\nThe first argument is a default value, which will be returned in the\ncase where a `Right` is passed to `fromLeft`.\n"}],"tag":"SearchResult"}]