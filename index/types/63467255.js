// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["63467255"] = [{"values":[{"sourceSpan":{"start":[40,1],"name":".spago/untagged-union/v0.2.0/src/Untagged/Castable.purs","end":[40,43]},"score":0,"packageInfo":{"values":["untagged-union"],"tag":"Package"},"name":"cast","moduleName":"Untagged.Castable","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Untagged","Castable"],"Castable"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/unsafe-coerce/v4.0.0/src/Unsafe/Coerce.purs","end":[27,50]},"score":37,"packageInfo":{"values":["unsafe-coerce"],"tag":"Package"},"name":"unsafeCoerce","moduleName":"Unsafe.Coerce","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A _highly unsafe_ function, which can be used to persuade the type system that\nany type is the same as any other type. When using this function, it is your\n(that is, the caller's) responsibility to ensure that the underlying\nrepresentation for both types is the same.\n\nOne application for this function is to avoid doing work that you know is a\nno-op because of newtypes. For example, if you have an `Array (Conj a)` and you\nwant an `Array (Disj a)`, you could do `Data.Array.map (runConj >>> Disj)`, but\nthis performs an unnecessary traversal. `unsafeCoerce` accomplishes the same\nfor free.\n\nIt is highly recommended to define specializations of this function rather than\nusing it as-is. For example:\n\n```purescript\nmapConjToDisj :: forall a. Array (Conj a) -> Array (Disj a)\nmapConjToDisj = unsafeCoerce\n```\n\nThis way, you won't have any nasty surprises due to the inferred type being\ndifferent to what you expected.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[19,3],"name":".spago/type-equality/v3.0.0/src/Type/Equality.purs","end":[19,17]},"score":8,"packageInfo":{"values":["type-equality"],"tag":"Package"},"name":"from","moduleName":"Type.Equality","info":{"values":[{"typeClassArguments":[["a",null],["b",null]],"typeClass":[["Type","Equality"],"TypeEquals"],"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Equality"],"TypeEquals"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[18,3],"name":".spago/type-equality/v3.0.0/src/Type/Equality.purs","end":[18,15]},"score":8,"packageInfo":{"values":["type-equality"],"tag":"Package"},"name":"to","moduleName":"Type.Equality","info":{"values":[{"typeClassArguments":[["a",null],["b",null]],"typeClass":[["Type","Equality"],"TypeEquals"],"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Equality"],"TypeEquals"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[334,1],"name":".spago/querydsl/v0.10.1/src/QueryDsl.purs","end":[334,64]},"score":0,"packageInfo":{"values":["querydsl"],"tag":"Package"},"name":"desc","moduleName":"QueryDsl","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["QueryDsl"],"ToExpression"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["QueryDsl"],"OrderingExpression"]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create an OrderingExpression that says to order by the given expression in descending order\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[330,1],"name":".spago/querydsl/v0.10.1/src/QueryDsl.purs","end":[330,63]},"score":0,"packageInfo":{"values":["querydsl"],"tag":"Package"},"name":"asc","moduleName":"QueryDsl","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["QueryDsl"],"ToExpression"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["QueryDsl"],"OrderingExpression"]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create an OrderingExpression that says to order by the given expression in ascending order\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[372,1],"name":".spago/matryoshka/v0.4.0/src/Matryoshka/Fold.purs","end":[372,57]},"score":0,"packageInfo":{"values":["matryoshka"],"tag":"Package"},"name":"isLeaf","moduleName":"Matryoshka.Fold","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["t",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Matryoshka","Class","Recursive"],"Recursive"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[85,3],"name":".spago/kishimen/v1.0.1/src/Kishimen.purs","end":[85,47]},"score":0,"packageInfo":{"values":["kishimen"],"tag":"Package"},"name":"variantArgImplToGenericSumImpl","moduleName":"Kishimen","info":{"values":[{"typeClassArguments":[["rep",null],["out",null]],"typeClass":[["Kishimen"],"GenericSumToVariantArg"],"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["out",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Kishimen"],"GenericSumToVariantArg"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"},{"tag":"TypeVar","contents":"out"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"out"}]},{"tag":"TypeVar","contents":"rep"}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[84,3],"name":".spago/kishimen/v1.0.1/src/Kishimen.purs","end":[84,43]},"score":0,"packageInfo":{"values":["kishimen"],"tag":"Package"},"name":"genericSumToVariantArgImpl","moduleName":"Kishimen","info":{"values":[{"typeClassArguments":[["rep",null],["out",null]],"typeClass":[["Kishimen"],"GenericSumToVariantArg"],"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["out",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Kishimen"],"GenericSumToVariantArg"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"},{"tag":"TypeVar","contents":"out"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeVar","contents":"out"}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,1],"name":".spago/halogen-formless/v1.0.0/src/Formless/Transform/Record.purs","end":[24,59]},"score":0,"packageInfo":{"values":["halogen-formless"],"tag":"Package"},"name":"wrapRecord","moduleName":"Formless.Transform.Record","info":{"values":[{"type":{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r0",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Heterogeneous","Mapping"],"HMap"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Formless","Transform","Record"],"WrapField"]},{"tag":"TypeVar","contents":"r0"},{"tag":"TypeVar","contents":"r1"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"r0"}]},{"tag":"TypeVar","contents":"r1"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[15,1],"name":".spago/halogen-formless/v1.0.0/src/Formless/Transform/Record.purs","end":[15,63]},"score":0,"packageInfo":{"values":["halogen-formless"],"tag":"Package"},"name":"unwrapRecord","moduleName":"Formless.Transform.Record","info":{"values":[{"type":{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r0",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Heterogeneous","Mapping"],"HMap"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Formless","Transform","Record"],"UnwrapField"]},{"tag":"TypeVar","contents":"r0"},{"tag":"TypeVar","contents":"r1"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"r0"}]},{"tag":"TypeVar","contents":"r1"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[72,1],"name":".spago/debuggest/v0.4.0/src/Debug.purs","end":[72,27]},"score":1,"packageInfo":{"values":["debuggest"],"tag":"Package"},"name":"unsafeDir","moduleName":"Debug","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Like `dir` except it coerces the input to any type.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[68,1],"name":".spago/debuggest/v0.4.0/src/Debug.purs","end":[68,27]},"score":1,"packageInfo":{"values":["debuggest"],"tag":"Package"},"name":"unsafeLog","moduleName":"Debug","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Like `log` except it coerces the input to any type.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[73,1],"name":".spago/polymorphic-vectors/v2.0.1/src/Data/Vector/Polymorphic.purs","end":[73,52]},"score":2,"packageInfo":{"values":["polymorphic-vectors"],"tag":"Package"},"name":"ratio","moduleName":"Data.Vector.Polymorphic","info":{"values":[{"type":{"tag":"ForAll","contents":["n",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Vector","Polymorphic","Class"],"ToSize"],"constraintArgs":[{"tag":"TypeVar","contents":"n"},{"tag":"TypeVar","contents":"s"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","EuclideanRing"],"EuclideanRing"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"n"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get the ratio of a size by dividing the width by the height\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[69,1],"name":".spago/polymorphic-vectors/v2.0.1/src/Data/Vector/Polymorphic.purs","end":[69,51]},"score":2,"packageInfo":{"values":["polymorphic-vectors"],"tag":"Package"},"name":"perimeter","moduleName":"Data.Vector.Polymorphic","info":{"values":[{"type":{"tag":"ForAll","contents":["n",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Vector","Polymorphic","Class"],"ToSize"],"constraintArgs":[{"tag":"TypeVar","contents":"n"},{"tag":"TypeVar","contents":"s"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semiring"],"Semiring"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"n"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get the perimeter of a size\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[65,1],"name":".spago/polymorphic-vectors/v2.0.1/src/Data/Vector/Polymorphic.purs","end":[65,46]},"score":2,"packageInfo":{"values":["polymorphic-vectors"],"tag":"Package"},"name":"area","moduleName":"Data.Vector.Polymorphic","info":{"values":[{"type":{"tag":"ForAll","contents":["n",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Vector","Polymorphic","Class"],"ToSize"],"constraintArgs":[{"tag":"TypeVar","contents":"n"},{"tag":"TypeVar","contents":"s"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semiring"],"Semiring"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"n"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get the area of a size\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[159,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[159,45]},"score":6,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"isDivBy","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["d",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"IsDivBy"],"constraintArgs":[{"tag":"TypeVar","contents":"d"},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeVar","contents":"x"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[153,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[153,41]},"score":6,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"div10","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["q",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Div10"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"q"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"q"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[122,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[122,41]},"score":6,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"mul10","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["q",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Mul10"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"q"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"q"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[24,39]},"score":6,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"pred","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Pred"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"y"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[18,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[18,39]},"score":6,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"succ","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Succ"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"y"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[75,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Bool.purs","end":[75,43]},"score":6,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"not","moduleName":"Data.Typelevel.Bool","info":{"values":[{"type":{"tag":"ForAll","contents":["b2",{"tag":"ForAll","contents":["b1",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Bool"],"Not"],"constraintArgs":[{"tag":"TypeVar","contents":"b1"},{"tag":"TypeVar","contents":"b2"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b1"}]},{"tag":"TypeVar","contents":"b2"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[93,1],"name":".spago/datetime/v4.1.1/src/Data/Time/Duration.purs","end":[93,66]},"score":20,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"convertDuration","moduleName":"Data.Time.Duration","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Converts directly between durations of differing types.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[75,1],"name":".spago/ring-modules/v5.0.1/src/Data/Ring/Module.purs","end":[75,45]},"score":1,"packageInfo":{"values":["ring-modules"],"tag":"Package"},"name":"mnegateR","moduleName":"Data.Ring.Module","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring","Module"],"RightModule"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"x"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[46,1],"name":".spago/ring-modules/v5.0.1/src/Data/Ring/Module.purs","end":[46,44]},"score":1,"packageInfo":{"values":["ring-modules"],"tag":"Package"},"name":"mnegateL","moduleName":"Data.Ring.Module","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring","Module"],"LeftModule"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"x"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[38,3],"name":".spago/newtype/v3.0.0/src/Data/Newtype.purs","end":[38,19]},"score":45,"packageInfo":{"values":["newtype"],"tag":"Package"},"name":"unwrap","moduleName":"Data.Newtype","info":{"values":[{"typeClassArguments":[["t",null],["a",null]],"typeClass":[["Data","Newtype"],"Newtype"],"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[37,3],"name":".spago/newtype/v3.0.0/src/Data/Newtype.purs","end":[37,17]},"score":45,"packageInfo":{"values":["newtype"],"tag":"Package"},"name":"wrap","moduleName":"Data.Newtype","info":{"values":[{"typeClassArguments":[["t",null],["a",null]],"typeClass":[["Data","Newtype"],"Newtype"],"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"t"}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[38,3],"name":".spago/generics-rep/v6.1.1/src/Data/Generic/Rep.purs","end":[38,19]},"score":46,"packageInfo":{"values":["generics-rep"],"tag":"Package"},"name":"from","moduleName":"Data.Generic.Rep","info":{"values":[{"typeClassArguments":[["a",null],["rep",null]],"typeClass":[["Data","Generic","Rep"],"Generic"],"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["rep",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"rep"}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[37,3],"name":".spago/generics-rep/v6.1.1/src/Data/Generic/Rep.purs","end":[37,17]},"score":46,"packageInfo":{"values":["generics-rep"],"tag":"Package"},"name":"to","moduleName":"Data.Generic.Rep","info":{"values":[{"typeClassArguments":[["a",null],["rep",null]],"typeClass":[["Data","Generic","Rep"],"Generic"],"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["rep",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[50,1],"name":".spago/generics-rep/v6.1.1/src/Data/Generic/Rep/Show.purs","end":[50,77]},"score":46,"packageInfo":{"values":["generics-rep"],"tag":"Package"},"name":"genericShow","moduleName":"Data.Generic.Rep.Show","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep","Show"],"GenericShow"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `show` member from the `Show` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[69,1],"name":".spago/generics-rep/v6.1.1/src/Data/Generic/Rep/HeytingAlgebra.purs","end":[69,81]},"score":46,"packageInfo":{"values":["generics-rep"],"tag":"Package"},"name":"genericNot","moduleName":"Data.Generic.Rep.HeytingAlgebra","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep","HeytingAlgebra"],"GenericHeytingAlgebra"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `not` member from the `HeytingAlgebra` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[117,1],"name":".spago/generics-rep/v6.1.1/src/Data/Generic/Rep/Enum.purs","end":[117,85]},"score":46,"packageInfo":{"values":["generics-rep"],"tag":"Package"},"name":"genericFromEnum","moduleName":"Data.Generic.Rep.Enum","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep","Enum"],"GenericBoundedEnum"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `fromEnum` member from the `BoundedEnum`\ntype class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[9,3],"name":".spago/either/v4.1.1/src/Data/Either/Inject.purs","end":[9,16]},"score":58,"packageInfo":{"values":["either"],"tag":"Package"},"name":"inj","moduleName":"Data.Either.Inject","info":{"values":[{"typeClassArguments":[["a",null],["b",null]],"typeClass":[["Data","Either","Inject"],"Inject"],"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Either","Inject"],"Inject"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[282,3],"name":".spago/array-views/v0.0.2/src/Data/ArrayView/Internal.purs","end":[282,16]},"score":0,"packageInfo":{"values":["array-views"],"tag":"Package"},"name":"use","moduleName":"Data.ArrayView.Internal","info":{"values":[{"typeClassArguments":[["a",null],["b",null]],"typeClass":[["Data","ArrayView","Internal"],"ArrayToView"],"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","ArrayView","Internal"],"ArrayToView"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[86,1],"name":".spago/argonaut-generic/v6.0.0/src/Data/Argonaut/Encode/Generic/Rep.purs","end":[86,80]},"score":2,"packageInfo":{"values":["argonaut-generic"],"tag":"Package"},"name":"encodeLiteralSum","moduleName":"Data.Argonaut.Encode.Generic.Rep","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"r"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Encode","Generic","Rep"],"EncodeLiteral"],"constraintArgs":[{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A function for encoding `Generic` sum types using string literal representations.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[77,1],"name":".spago/argonaut-generic/v6.0.0/src/Data/Argonaut/Encode/Generic/Rep.purs","end":[77,77]},"score":2,"packageInfo":{"values":["argonaut-generic"],"tag":"Package"},"name":"genericEncodeJson","moduleName":"Data.Argonaut.Encode.Generic.Rep","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"r"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Encode","Generic","Rep"],"EncodeRep"],"constraintArgs":[{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Encode any `Generic` data structure into `Json`.\n"}],"tag":"SearchResult"}]