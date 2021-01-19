// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1708092088"] = [{"values":[{"sourceSpan":{"start":[37,1],"name":".spago/tolerant-argonaut/v2.0.0/src/Data/Argonaut/Decode/Struct/Tolerant/Combinators.purs","end":[42,38]},"score":0,"packageInfo":{"values":["tolerant-argonaut"],"tag":"Package"},"name":"getFieldOptional'","moduleName":"Data.Argonaut.Decode.Struct.Tolerant.Combinators","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Decode","Struct","Tolerant","DecodeJson"],"DecodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt to get the value for a given key on an `Object Json`.\n\nThe result will be `Right Nothing` if the key and value are not present,\nor if the key is present and the value is `null`.\n\nUse this accessor if the key and value are optional in your object.\nIf the key and value are mandatory, use `getField` (`.::`) instead.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[63,1],"name":".spago/tolerant-argonaut/v2.0.0/src/Data/Argonaut/Decode/Struct/Tolerant/Combinators.purs","end":[68,38]},"score":0,"packageInfo":{"values":["tolerant-argonaut"],"tag":"Package"},"name":"getFieldOptional","moduleName":"Data.Argonaut.Decode.Struct.Tolerant.Combinators","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Decode","Struct","Tolerant","DecodeJson"],"DecodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt to get the value for a given key on an `Object Json`.\n\nThe result will be `Right Nothing` if the key and value are not present,\nbut will fail if the key is present but the value cannot be converted\nto the right type.\n\nThis function will treat `null` as a value and attempt to decode it into\nyour desired type. If you would like to treat `null` values the same as\nabsent values, use `getFieldOptional'` (`.::?`) instead.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[38,1],"name":".spago/argonaut-codecs/v7.0.0/src/Data/Argonaut/Decode/Combinators.purs","end":[38,108]},"score":12,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"getFieldOptional'","moduleName":"Data.Argonaut.Decode.Combinators","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Decode","Class"],"DecodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt to get the value for a given key on an `Object Json`.\n\nThe result will be `Right Nothing` if the key and value are not present,\nor if the key is present and the value is `null`.\n\nUse this accessor if the key and value are optional in your object.\nIf the key and value are mandatory, use `getField` (`.:`) instead.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[51,1],"name":".spago/argonaut-codecs/v7.0.0/src/Data/Argonaut/Decode/Combinators.purs","end":[51,107]},"score":12,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"getFieldOptional","moduleName":"Data.Argonaut.Decode.Combinators","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Decode","Class"],"DecodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt to get the value for a given key on an `Object Json`.\n\nThe result will be `Right Nothing` if the key and value are not present,\nbut will fail if the key is present but the value cannot be converted to the right type.\n\nThis function will treat `null` as a value and attempt to decode it into your desired type.\nIf you would like to treat `null` values the same as absent values, use\n`getFieldOptional'` (`.:?`) instead.\n"}],"tag":"SearchResult"}]