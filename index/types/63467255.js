// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["63467255"] = [{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/unsafe-coerce/v5.0.0/src/Unsafe/Coerce.purs","end":[27,50]},"score":30,"packageInfo":{"values":["unsafe-coerce"],"tag":"Package"},"name":"unsafeCoerce","moduleName":"Unsafe.Coerce","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A _highly unsafe_ function, which can be used to persuade the type system that\nany type is the same as any other type. When using this function, it is your\n(that is, the caller's) responsibility to ensure that the underlying\nrepresentation for both types is the same.\n\nBecause this function is extraordinarily flexible, type inference\ncan greatly suffer. It is highly recommended to define specializations of\nthis function rather than using it as-is. For example:\n\n```purescript\nfromBoolean :: Boolean -> Json\nfromBoolean = unsafeCoerce\n```\n\nThis way, you won't have any nasty surprises due to the inferred type being\ndifferent to what you expected.\n\nAfter the v0.14.0 PureScript release, some of what was accomplished via\n`unsafeCoerce` can now be accomplished via `coerce` from\n`purescript-safe-coerce`. See that library's documentation for more\ncontext.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[34,1],"name":".spago/type-equality/v4.0.0/src/Type/Equality.purs","end":[34,45]},"score":5,"packageInfo":{"values":["type-equality"],"tag":"Package"},"name":"from","moduleName":"Type.Equality","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Equality"],"TypeEquals"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[29,1],"name":".spago/type-equality/v4.0.0/src/Type/Equality.purs","end":[29,43]},"score":5,"packageInfo":{"values":["type-equality"],"tag":"Package"},"name":"to","moduleName":"Type.Equality","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Equality"],"TypeEquals"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[26,1],"name":".spago/safe-coerce/v1.0.0/src/Safe/Coerce.purs","end":[26,46]},"score":1,"packageInfo":{"values":["safe-coerce"],"tag":"Package"},"name":"coerce","moduleName":"Safe.Coerce","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Coerce"],"Coercible"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Coerce a value of one type to a value of some other type, without changing\nits runtime representation. This function behaves identically to\n`unsafeCoerce` at runtime. Unlike `unsafeCoerce`, it is safe, because the\n`Coercible` constraint prevents any use of this function from compiling\nunless the compiler can prove that the two types have the same runtime\nrepresentation.\n\nOne application for this function is to avoid doing work that you know is a\nno-op because of newtypes. For example, if you have an `Array (Conj a)` and you\nwant an `Array (Disj a)`, you could do `Data.Array.map (un Conj >>> Disj)`, but\nthis performs an unnecessary traversal of the array, with O(n) cost.\n`coerce` accomplishes the same with only O(1) cost:\n\n```purescript\nmapConjToDisj :: forall a. Array (Conj a) -> Array (Disj a)\nmapConjToDisj = coerce\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[372,1],"name":".spago/matryoshka/v0.5.0/src/Matryoshka/Fold.purs","end":[372,57]},"score":0,"packageInfo":{"values":["matryoshka"],"tag":"Package"},"name":"isLeaf","moduleName":"Matryoshka.Fold","info":{"values":[{"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Matryoshka","Class","Recursive"],"Recursive"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[72,1],"name":".spago/debuggest/v0.4.0/src/Debug.purs","end":[72,27]},"score":0,"packageInfo":{"values":["debuggest"],"tag":"Package"},"name":"unsafeDir","moduleName":"Debug","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Like `dir` except it coerces the input to any type.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[68,1],"name":".spago/debuggest/v0.4.0/src/Debug.purs","end":[68,27]},"score":0,"packageInfo":{"values":["debuggest"],"tag":"Package"},"name":"unsafeLog","moduleName":"Debug","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Like `log` except it coerces the input to any type.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[159,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[159,45]},"score":4,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"isDivBy","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["d",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"IsDivBy"],"constraintArgs":[{"tag":"TypeVar","contents":"d"},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeVar","contents":"x"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[153,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[153,41]},"score":4,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"div10","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["q",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Div10"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"q"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"q"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[122,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[122,41]},"score":4,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"mul10","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["q",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Mul10"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"q"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"q"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[24,39]},"score":4,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"pred","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["y",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Pred"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"y"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[18,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[18,39]},"score":4,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"succ","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["y",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Succ"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"y"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[75,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Bool.purs","end":[75,43]},"score":4,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"not","moduleName":"Data.Typelevel.Bool","info":{"values":[{"type":{"tag":"ForAll","contents":["b1",{"tag":"ForAll","contents":["b2",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Bool"],"Not"],"constraintArgs":[{"tag":"TypeVar","contents":"b1"},{"tag":"TypeVar","contents":"b2"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b1"}]},{"tag":"TypeVar","contents":"b2"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[93,1],"name":".spago/datetime/v5.0.0/src/Data/Time/Duration.purs","end":[93,66]},"score":11,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"convertDuration","moduleName":"Data.Time.Duration","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Converts directly between durations of differing types.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[50,1],"name":".spago/prelude/v5.0.0/src/Data/Show/Generic.purs","end":[50,77]},"score":162,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"genericShow","moduleName":"Data.Show.Generic","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["rep",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Show","Generic"],"GenericShow"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `show` member from the `Show` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[75,1],"name":".spago/ring-modules/v5.0.1/src/Data/Ring/Module.purs","end":[75,45]},"score":0,"packageInfo":{"values":["ring-modules"],"tag":"Package"},"name":"mnegateR","moduleName":"Data.Ring.Module","info":{"values":[{"type":{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring","Module"],"RightModule"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"x"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[46,1],"name":".spago/ring-modules/v5.0.1/src/Data/Ring/Module.purs","end":[46,44]},"score":0,"packageInfo":{"values":["ring-modules"],"tag":"Package"},"name":"mnegateL","moduleName":"Data.Ring.Module","info":{"values":[{"type":{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring","Module"],"LeftModule"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"x"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[35,1],"name":".spago/newtype/v4.0.0/src/Data/Newtype.purs","end":[35,44]},"score":34,"packageInfo":{"values":["newtype"],"tag":"Package"},"name":"unwrap","moduleName":"Data.Newtype","info":{"values":[{"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[32,1],"name":".spago/newtype/v4.0.0/src/Data/Newtype.purs","end":[32,42]},"score":34,"packageInfo":{"values":["newtype"],"tag":"Package"},"name":"wrap","moduleName":"Data.Newtype","info":{"values":[{"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"t"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[69,1],"name":".spago/prelude/v5.0.0/src/Data/HeytingAlgebra/Generic.purs","end":[69,81]},"score":162,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"genericNot","moduleName":"Data.HeytingAlgebra.Generic","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["rep",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","HeytingAlgebra","Generic"],"GenericHeytingAlgebra"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `not` member from the `HeytingAlgebra` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[117,1],"name":".spago/enums/v5.0.0/src/Data/Enum/Generic.purs","end":[117,85]},"score":12,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"genericFromEnum","moduleName":"Data.Enum.Generic","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["rep",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum","Generic"],"GenericBoundedEnum"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `fromEnum` member from the `BoundedEnum`\ntype class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[9,3],"name":".spago/either/v5.0.0/src/Data/Either/Inject.purs","end":[9,16]},"score":48,"packageInfo":{"values":["either"],"tag":"Package"},"name":"inj","moduleName":"Data.Either.Inject","info":{"values":[{"typeClassArguments":[["a",null],["b",null]],"typeClass":[["Data","Either","Inject"],"Inject"],"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Either","Inject"],"Inject"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[77,1],"name":".spago/argonaut-generic/v7.0.0/src/Data/Argonaut/Encode/Generic.purs","end":[77,80]},"score":0,"packageInfo":{"values":["argonaut-generic"],"tag":"Package"},"name":"encodeLiteralSum","moduleName":"Data.Argonaut.Encode.Generic","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"r"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Encode","Generic"],"EncodeLiteral"],"constraintArgs":[{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A function for encoding `Generic` sum types using string literal representations.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[68,1],"name":".spago/argonaut-generic/v7.0.0/src/Data/Argonaut/Encode/Generic.purs","end":[68,77]},"score":0,"packageInfo":{"values":["argonaut-generic"],"tag":"Package"},"name":"genericEncodeJson","moduleName":"Data.Argonaut.Encode.Generic","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"r"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Encode","Generic"],"EncodeRep"],"constraintArgs":[{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Encode any `Generic` data structure into `Json`.\n"}],"tag":"SearchResult"}]