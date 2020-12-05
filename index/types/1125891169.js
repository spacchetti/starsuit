// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1125891169"] = [{"values":[{"sourceSpan":{"start":[187,1],"name":".spago/variant/v6.0.1/src/Data/Variant.purs","end":[192,19]},"score":12,"packageInfo":{"values":["variant"],"tag":"Package"},"name":"contract","moduleName":"Data.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["gt",{"tag":"ForAll","contents":["lt",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Variant","Internal"],"Contractable"],"constraintArgs":[{"tag":"TypeVar","contents":"gt"},{"tag":"TypeVar","contents":"lt"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"gt"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"lt"}]}}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Variant gt` can be cast to some `Variant lt`, where `lt` is is a subset\nof `gt`, as long as there is proof that the `Variant`'s runtime tag is\nwithin the subset of `lt`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[11,3],"name":".spago/functors/v3.1.1/src/Data/Functor/Coproduct/Inject.purs","end":[11,38]},"score":7,"packageInfo":{"values":["functors"],"tag":"Package"},"name":"prj","moduleName":"Data.Functor.Coproduct.Inject","info":{"values":[{"typeClassArguments":[["f",null],["g",null]],"typeClass":[["Data","Functor","Coproduct","Inject"],"Inject"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor","Coproduct","Inject"],"Inject"],"constraintArgs":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"g"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[57,1],"name":".spago/codec-argonaut/v7.1.0/src/Data/Codec/Argonaut/Variant.purs","end":[62,27]},"score":1,"packageInfo":{"values":["codec-argonaut"],"tag":"Package"},"name":"variantMatch","moduleName":"Data.Codec.Argonaut.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["ro",{"tag":"ForAll","contents":["ri",{"tag":"ForAll","contents":["rl",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"ri"},{"tag":"TypeVar","contents":"rl"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Codec","Argonaut","Variant"],"VariantCodec"],"constraintArgs":[{"tag":"TypeVar","contents":"rl"},{"tag":"TypeVar","contents":"ri"},{"tag":"TypeVar","contents":"ro"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ri"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JsonCodec"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"ro"}]}}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Builds a codec for a variant from a record, similar to the way\n`Variant.match` works to pattern match on a variant.\n\nCommonly used to write decoders for sum-types, by providing a mapping from\nand to a Variant from that type and then using `dimap`.\n\nEach field in the record accepts an `Either`, where `Right` is used to\nspecify a codec used for the constructor, and `Left` is used to specify a\nstatic value (generally as `Left unit` for nullary constructors).\n\nThe variant will be encoded as a JSON object of the form\n`{ \"tag\": <name>, \"value\": <value> }`, where `<name>` is the name of the\nvariant case, and `<value>` is the associated value (omitted in the case\nof static `Left`-defined values).\n\n```purescript\ncodecMaybeMatch ∷ ∀ a. JA.JsonCodec a → JA.JsonCodec (Maybe a)\ncodecMaybeMatch codecA =\n  dimap toVariant fromVariant\n    (JAV.variantMatch\n      { just: Right codecA\n      , nothing: Left unit\n      })\n  where\n  toVariant = case _ of\n    Just a → V.inj (SProxy ∷ _ \"just\") a\n    Nothing → V.inj (SProxy ∷ _ \"nothing\") unit\n  fromVariant = V.match\n    { just: Just\n    , nothing: \\_ → Nothing\n    }\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[33,1],"name":".spago/codec-argonaut/v7.1.0/src/Data/Codec/Argonaut/Record.purs","end":[38,30]},"score":1,"packageInfo":{"values":["codec-argonaut"],"tag":"Package"},"name":"record","moduleName":"Data.Codec.Argonaut.Record","info":{"values":[{"type":{"tag":"ForAll","contents":["rl",{"tag":"ForAll","contents":["ro",{"tag":"ForAll","contents":["ri",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"ri"},{"tag":"TypeVar","contents":"rl"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Codec","Argonaut","Record"],"RowListCodec"],"constraintArgs":[{"tag":"TypeVar","contents":"rl"},{"tag":"TypeVar","contents":"ri"},{"tag":"TypeVar","contents":"ro"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ri"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JPropCodec"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ro"}]}}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Constructs a `JPropCodec` for a `Record` from a record of codecs. Commonly\nthe `object` function in this module will be the preferred choice, as that\nproduces a `JsonCodec` instead.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[21,1],"name":".spago/arraybuffer/v10.0.2/src/Data/ArrayBuffer/Typed/Gen.purs","end":[25,33]},"score":6,"packageInfo":{"values":["arraybuffer"],"tag":"Package"},"name":"genTypedArray","moduleName":"Data.ArrayBuffer.Typed.Gen","info":{"values":[{"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Gen","Class"],"MonadGen"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","ArrayBuffer","Typed"],"TypedArray"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"t"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayBuffer","Types"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/tolerant-argonaut/v2.0.0/src/Data/Argonaut/Decode/Struct/Utils.purs","end":[34,18]},"score":0,"packageInfo":{"values":["tolerant-argonaut"],"tag":"Package"},"name":"reportObject","moduleName":"Data.Argonaut.Decode.Struct.Utils","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["l",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Operator","Bottom"],"Bottom2"],"constraintArgs":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Decode","Class"],"GDecodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"l"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"l"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Operator","Top"],"Top1_"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r"}]}}]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[84,1],"name":".spago/gen/v2.1.1/src/Control/Monad/Gen.purs","end":[90,13]},"score":10,"packageInfo":{"values":["gen"],"tag":"Package"},"name":"unfoldable","moduleName":"Control.Monad.Gen","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Gen","Class"],"MonadGen"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a generator that produces unfoldable structures based on an\nexisting generator for the elements.\n\nThe size of the unfoldable will be determined by the current size state\nfor the generator. To generate an unfoldable structure of a particular\nsize, use the `resize` function from the `MonadGen` class first.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[45,3],"name":".spago/fork/v4.0.0/src/Control/Monad/Fork/Class.purs","end":[45,28]},"score":4,"packageInfo":{"values":["fork"],"tag":"Package"},"name":"fork","moduleName":"Control.Monad.Fork.Class","info":{"values":[{"typeClassArguments":[["f",null],["m",null]],"typeClass":[["Control","Monad","Fork","Class"],"MonadFork"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Fork","Class"],"MonadFork"],"constraintArgs":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[44,3],"name":".spago/fork/v4.0.0/src/Control/Monad/Fork/Class.purs","end":[44,31]},"score":4,"packageInfo":{"values":["fork"],"tag":"Package"},"name":"suspend","moduleName":"Control.Monad.Fork.Class","info":{"values":[{"typeClassArguments":[["f",null],["m",null]],"typeClass":[["Control","Monad","Fork","Class"],"MonadFork"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Fork","Class"],"MonadFork"],"constraintArgs":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[17,3],"name":".spago/free/v5.2.0/src/Control/Comonad/Cofree/Class.purs","end":[17,43]},"score":14,"packageInfo":{"values":["free"],"tag":"Package"},"name":"unwrapCofree","moduleName":"Control.Comonad.Cofree.Class","info":{"values":[{"typeClassArguments":[["f",null],["w",null]],"typeClass":[["Control","Comonad","Cofree","Class"],"ComonadCofree"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["w",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Comonad","Cofree","Class"],"ComonadCofree"],"constraintArgs":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"w"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"w"},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]