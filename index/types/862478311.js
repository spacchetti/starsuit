// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["862478311"] = [{"values":[{"sourceSpan":{"start":[15,1],"name":".spago/unsafe-reference/v3.1.0/src/Unsafe/Reference.purs","end":[15,66]},"score":6,"packageInfo":{"values":["unsafe-reference"],"tag":"Package"},"name":"reallyUnsafeRefEq","moduleName":"Unsafe.Reference","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Compares two values of different types using strict (`===`) equality.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[48,3],"name":".spago/identy/v2.2.0/src/Identy/Populater.purs","end":[48,34]},"score":0,"packageInfo":{"values":["identy"],"tag":"Package"},"name":"unionObject","moduleName":"Identy.Populater","info":{"values":[{"typeClassArguments":[["from",null],["to",null]],"typeClass":[["Identy","Populater"],"ObjectUnion"],"type":{"tag":"ForAll","contents":["from",{"tag":"ForAll","contents":["to",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Identy","Populater"],"ObjectUnion"],"constraintArgs":[{"tag":"TypeVar","contents":"from"},{"tag":"TypeVar","contents":"to"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"from"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"to"}]},{"tag":"TypeVar","contents":"to"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[68,1],"name":".spago/foreign-generic/v10.0.0/src/Foreign/Generic.purs","end":[74,12]},"score":4,"packageInfo":{"values":["foreign-generic"],"tag":"Package"},"name":"genericEncodeJSON","moduleName":"Foreign.Generic","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Foreign","Generic","Class"],"GenericEncode"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign","Generic","Class"],"Options"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Write a value which has a `Generic` type as a JSON String\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[32,1],"name":".spago/foreign-generic/v10.0.0/src/Foreign/Generic.purs","end":[38,13]},"score":4,"packageInfo":{"values":["foreign-generic"],"tag":"Package"},"name":"genericEncode","moduleName":"Foreign.Generic","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Foreign","Generic","Class"],"GenericEncode"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign","Generic","Class"],"Options"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Generate a `Foreign` value compatible with the `genericDecode` function.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[40,1],"name":".spago/foreign-generic/v10.0.0/src/Foreign/Generic/Enum.purs","end":[46,13]},"score":4,"packageInfo":{"values":["foreign-generic"],"tag":"Package"},"name":"genericEncodeEnum","moduleName":"Foreign.Generic.EnumEncoding","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Foreign","Generic","EnumEncoding"],"GenericEncodeEnum"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign","Generic","EnumEncoding"],"GenericEnumOptions"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A generic function to be used with \"Enums\", or sum types with only no-argument constructors. This is used for encoding to strings from one of the constructors, combined with the `constructorTagTransform` property of `SumEncoding`.\n\nFor example:\n\n```purescript\ndata Fruit = Apple | Banana | Frikandel\nderive instance geFruit :: Generic Fruit _\ninstance eFruit :: Encode Fruit where\n  encode = genericEncodeEnum defaultGenericEnumOptions\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[95,1],"name":".spago/polymorphic-vectors/v2.0.1/src/Data/Vector/Polymorphic.purs","end":[95,71]},"score":2,"packageInfo":{"values":["polymorphic-vectors"],"tag":"Package"},"name":"parallel","moduleName":"Data.Vector.Polymorphic","info":{"values":[{"type":{"tag":"ForAll","contents":["n",{"tag":"ForAll","contents":["p",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Vector","Polymorphic","Class"],"ToPos"],"constraintArgs":[{"tag":"TypeVar","contents":"n"},{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","EuclideanRing"],"EuclideanRing"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Eq"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Check if two vectors are parallel\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[91,1],"name":".spago/polymorphic-vectors/v2.0.1/src/Data/Vector/Polymorphic.purs","end":[91,71]},"score":2,"packageInfo":{"values":["polymorphic-vectors"],"tag":"Package"},"name":"perpendicular","moduleName":"Data.Vector.Polymorphic","info":{"values":[{"type":{"tag":"ForAll","contents":["n",{"tag":"ForAll","contents":["p",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Vector","Polymorphic","Class"],"ToPos"],"constraintArgs":[{"tag":"TypeVar","contents":"n"},{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semiring"],"Semiring"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Eq"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Check if two vectors are perpendicular\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[84,1],"name":".spago/polymorphic-vectors/v2.0.1/src/Data/Vector/Polymorphic.purs","end":[84,48]},"score":2,"packageInfo":{"values":["polymorphic-vectors"],"tag":"Package"},"name":"dot","moduleName":"Data.Vector.Polymorphic","info":{"values":[{"type":{"tag":"ForAll","contents":["n",{"tag":"ForAll","contents":["p",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Vector","Polymorphic","Class"],"ToPos"],"constraintArgs":[{"tag":"TypeVar","contents":"n"},{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semiring"],"Semiring"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeVar","contents":"n"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get the dot product of two vectors\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[343,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[343,47]},"score":6,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"lteq","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"LtEq"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[337,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[337,47]},"score":6,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"gteq","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"GtEq"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[331,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[331,43]},"score":6,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"lt","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Lt"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[325,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[325,43]},"score":6,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"gt","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Gt"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[319,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[319,43]},"score":6,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"eq","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[63,3],"name":".spago/ring-modules/v5.0.1/src/Data/Ring/Module.purs","end":[63,24]},"score":1,"packageInfo":{"values":["ring-modules"],"tag":"Package"},"name":"mmulR","moduleName":"Data.Ring.Module","info":{"values":[{"typeClassArguments":[["x",null],["r",null]],"typeClass":[["Data","Ring","Module"],"RightModule"],"type":{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring","Module"],"RightModule"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"x"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[62,3],"name":".spago/ring-modules/v5.0.1/src/Data/Ring/Module.purs","end":[62,24]},"score":1,"packageInfo":{"values":["ring-modules"],"tag":"Package"},"name":"msubR","moduleName":"Data.Ring.Module","info":{"values":[{"typeClassArguments":[["x",null],["r",null]],"typeClass":[["Data","Ring","Module"],"RightModule"],"type":{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring","Module"],"RightModule"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"x"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[61,3],"name":".spago/ring-modules/v5.0.1/src/Data/Ring/Module.purs","end":[61,24]},"score":1,"packageInfo":{"values":["ring-modules"],"tag":"Package"},"name":"maddR","moduleName":"Data.Ring.Module","info":{"values":[{"typeClassArguments":[["x",null],["r",null]],"typeClass":[["Data","Ring","Module"],"RightModule"],"type":{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring","Module"],"RightModule"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"x"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[34,3],"name":".spago/ring-modules/v5.0.1/src/Data/Ring/Module.purs","end":[34,24]},"score":1,"packageInfo":{"values":["ring-modules"],"tag":"Package"},"name":"mmulL","moduleName":"Data.Ring.Module","info":{"values":[{"typeClassArguments":[["x",null],["r",null]],"typeClass":[["Data","Ring","Module"],"LeftModule"],"type":{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring","Module"],"LeftModule"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"x"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[33,3],"name":".spago/ring-modules/v5.0.1/src/Data/Ring/Module.purs","end":[33,24]},"score":1,"packageInfo":{"values":["ring-modules"],"tag":"Package"},"name":"msubL","moduleName":"Data.Ring.Module","info":{"values":[{"typeClassArguments":[["x",null],["r",null]],"typeClass":[["Data","Ring","Module"],"LeftModule"],"type":{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring","Module"],"LeftModule"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"x"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[32,3],"name":".spago/ring-modules/v5.0.1/src/Data/Ring/Module.purs","end":[32,24]},"score":1,"packageInfo":{"values":["ring-modules"],"tag":"Package"},"name":"maddL","moduleName":"Data.Ring.Module","info":{"values":[{"typeClassArguments":[["x",null],["r",null]],"typeClass":[["Data","Ring","Module"],"LeftModule"],"type":{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring","Module"],"LeftModule"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"x"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[26,3],"name":".spago/group/v4.1.1/src/Data/Group/Action.purs","end":[26,22]},"score":1,"packageInfo":{"values":["group"],"tag":"Package"},"name":"ract","moduleName":"Data.Group.Action","info":{"values":[{"typeClassArguments":[["g",null],["s",null]],"typeClass":[["Data","Group","Action"],"RightAction"],"type":{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Group","Action"],"RightAction"],"constraintArgs":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"g"}]},{"tag":"TypeVar","contents":"s"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[18,3],"name":".spago/group/v4.1.1/src/Data/Group/Action.purs","end":[18,22]},"score":1,"packageInfo":{"values":["group"],"tag":"Package"},"name":"lact","moduleName":"Data.Group.Action","info":{"values":[{"typeClassArguments":[["g",null],["s",null]],"typeClass":[["Data","Group","Action"],"LeftAction"],"type":{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Group","Action"],"LeftAction"],"constraintArgs":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"g"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"s"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[104,3],"name":".spago/geometry-plane/v1.0.1/src/Data/Geometry/Plane.purs","end":[104,22]},"score":0,"packageInfo":{"values":["geometry-plane"],"tag":"Package"},"name":"plus","moduleName":"Data.Geometry.Plane","info":{"values":[{"typeClassArguments":[["a",null],["b",null]],"typeClass":[["Data","Geometry","Plane"],"Summable"],"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Geometry","Plane"],"Summable"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[50,1],"name":".spago/generics-rep/v6.1.1/src/Data/Generic/Rep/Semiring.purs","end":[50,80]},"score":46,"packageInfo":{"values":["generics-rep"],"tag":"Package"},"name":"genericMul","moduleName":"Data.Generic.Rep.Semiring","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep","Semiring"],"GenericSemiring"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `mul` member from the `Semiring` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[46,1],"name":".spago/generics-rep/v6.1.1/src/Data/Generic/Rep/Semiring.purs","end":[46,80]},"score":46,"packageInfo":{"values":["generics-rep"],"tag":"Package"},"name":"genericAdd","moduleName":"Data.Generic.Rep.Semiring","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep","Semiring"],"GenericSemiring"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `add` member from the `Semiring` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[30,1],"name":".spago/generics-rep/v6.1.1/src/Data/Generic/Rep/Semigroup.purs","end":[30,84]},"score":46,"packageInfo":{"values":["generics-rep"],"tag":"Package"},"name":"genericAppend","moduleName":"Data.Generic.Rep.Semigroup","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep","Semigroup"],"GenericSemigroup"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `append` member from the `Semigroup` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[23,1],"name":".spago/generics-rep/v6.1.1/src/Data/Generic/Rep/Ring.purs","end":[23,76]},"score":46,"packageInfo":{"values":["generics-rep"],"tag":"Package"},"name":"genericSub","moduleName":"Data.Generic.Rep.Ring","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep","Ring"],"GenericRing"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `sub` member from the `Ring` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[38,1],"name":".spago/generics-rep/v6.1.1/src/Data/Generic/Rep/Ord.purs","end":[38,86]},"score":46,"packageInfo":{"values":["generics-rep"],"tag":"Package"},"name":"genericCompare","moduleName":"Data.Generic.Rep.Ord","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep","Ord"],"GenericOrd"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Ordering"],"Ordering"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `compare` member from the `Ord` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[65,1],"name":".spago/generics-rep/v6.1.1/src/Data/Generic/Rep/HeytingAlgebra.purs","end":[65,87]},"score":46,"packageInfo":{"values":["generics-rep"],"tag":"Package"},"name":"genericDisj","moduleName":"Data.Generic.Rep.HeytingAlgebra","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep","HeytingAlgebra"],"GenericHeytingAlgebra"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `disj` member from the `HeytingAlgebra` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[61,1],"name":".spago/generics-rep/v6.1.1/src/Data/Generic/Rep/HeytingAlgebra.purs","end":[61,87]},"score":46,"packageInfo":{"values":["generics-rep"],"tag":"Package"},"name":"genericConj","moduleName":"Data.Generic.Rep.HeytingAlgebra","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep","HeytingAlgebra"],"GenericHeytingAlgebra"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `conj` member from the `HeytingAlgebra` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[57,1],"name":".spago/generics-rep/v6.1.1/src/Data/Generic/Rep/HeytingAlgebra.purs","end":[57,90]},"score":46,"packageInfo":{"values":["generics-rep"],"tag":"Package"},"name":"genericImplies","moduleName":"Data.Generic.Rep.HeytingAlgebra","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep","HeytingAlgebra"],"GenericHeytingAlgebra"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `implies` member from the `HeytingAlgebra` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[34,1],"name":".spago/generics-rep/v6.1.1/src/Data/Generic/Rep/Eq.purs","end":[34,79]},"score":46,"packageInfo":{"values":["generics-rep"],"tag":"Package"},"name":"genericEq","moduleName":"Data.Generic.Rep.Eq","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep","Eq"],"GenericEq"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `eq` member from the `Eq` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[29,1],"name":".spago/prelude/v4.1.1/src/Data/Function.purs","end":[29,33]},"score":221,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"const","moduleName":"Data.Function","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns its first argument and ignores its second.\n\n```purescript\nconst 1 \"hello\" = 1\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[82,1],"name":".spago/argonaut-generic/v6.0.0/src/Data/Argonaut/Encode/Generic/Rep.purs","end":[82,93]},"score":2,"packageInfo":{"values":["argonaut-generic"],"tag":"Package"},"name":"genericEncodeJsonWith","moduleName":"Data.Argonaut.Encode.Generic.Rep","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"r"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Encode","Generic","Rep"],"EncodeRep"],"constraintArgs":[{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Types","Generic","Rep"],"Encoding"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Encode any `Generic` data structure into `Json`.\nTakes a record for encoding settings.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[22,1],"name":".spago/bucketchain-simple-api/v3.0.0/src/Bucketchain/SimpleAPI.purs","end":[27,16]},"score":0,"packageInfo":{"values":["bucketchain-simple-api"],"tag":"Package"},"name":"withSimpleAPI","moduleName":"Bucketchain.SimpleAPI","info":{"values":[{"type":{"tag":"ForAll","contents":["server",{"tag":"ForAll","contents":["ex",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Bucketchain","SimpleAPI","Class"],"Servable"],"constraintArgs":[{"tag":"TypeVar","contents":"ex"},{"tag":"TypeVar","contents":"server"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"ex"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"server"}]},{"tag":"TypeConstructor","contents":[["Bucketchain","Middleware"],"Middleware"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"SimpleAPI middleware.\n\n`ex` is any extra data. It is typically global context such as db connection and can be used in `Proc`.\n\n`server` is a `Servable` instance.\n"}],"tag":"SearchResult"}]