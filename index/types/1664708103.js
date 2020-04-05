// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1664708103"] = [{"values":[{"sourceSpan":{"start":[42,3],"name":".spago/strongcheck/v4.1.1/src/Test/StrongCheck/Arbitrary.purs","end":[42,47]},"score":0,"packageName":"strongcheck","name":"coarbitrary","moduleName":"Test.StrongCheck.Arbitrary","info":{"values":[{"typeClassArguments":[["t",null]],"typeClass":[["Test","StrongCheck","Arbitrary"],"Coarbitrary"],"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","StrongCheck","Arbitrary"],"Coarbitrary"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","StrongCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","StrongCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"r"}]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[243,1],"name":".spago/quickcheck/v6.1.0/src/Test/QuickCheck/Arbitrary.purs","end":[243,92]},"score":0,"packageName":"quickcheck","name":"genericCoarbitrary","moduleName":"Test.QuickCheck.Arbitrary","info":{"values":[{"type":{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","QuickCheck","Arbitrary"],"Coarbitrary"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `coarbitrary` member from the `Coarbitrary` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[66,3],"name":".spago/quickcheck/v6.1.0/src/Test/QuickCheck/Arbitrary.purs","end":[66,47]},"score":0,"packageName":"quickcheck","name":"coarbitrary","moduleName":"Test.QuickCheck.Arbitrary","info":{"values":[{"typeClassArguments":[["t",null]],"typeClass":[["Test","QuickCheck","Arbitrary"],"Coarbitrary"],"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","QuickCheck","Arbitrary"],"Coarbitrary"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"r"}]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/prelude/v4.1.1/src/Record/Unsafe.purs","end":[27,78]},"score":0,"packageName":"prelude","name":"unsafeDelete","moduleName":"Record.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r1",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r2"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Unsafely removes a value on a record, using a string for the key.\n\nThe output record's row is unspecified so can be coerced to any row. If the\noutput type is incorrect it will cause a runtime error elsewhere.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[57,3],"name":".spago/optparse/v3.0.1/src/Options/Applicative/Internal.purs","end":[57,61]},"score":0,"packageName":"optparse","name":"enterContext","moduleName":"Options.Applicative.Internal","info":{"values":[{"typeClassArguments":[["m",{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"NamedKind","contents":[["Prim"],"Type"]}]}]],"typeClass":[["Options","Applicative","Internal"],"MonadP"],"type":{"tag":"ForAll","contents":["m",{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"NamedKind","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Options","Applicative","Internal"],"MonadP"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"ParserInfo"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[57,3],"name":".spago/optparse/v3.0.1/src/Options/Applicative/Builder/Internal.purs","end":[57,42]},"score":0,"packageName":"optparse","name":"name","moduleName":"Options.Applicative.Builder.Internal","info":{"values":[{"typeClassArguments":[["f",null]],"typeClass":[["Options","Applicative","Builder","Internal"],"HasName"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Options","Applicative","Builder","Internal"],"HasName"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"OptName"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[66,1],"name":".spago/makkori/v1.0.0/src/Makkori.purs","end":[71,23]},"score":0,"packageName":"makkori","name":"makeStaticMiddleware","moduleName":"Makkori","info":{"values":[{"type":{"tag":"ForAll","contents":["trash",{"tag":"ForAll","contents":["options",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"options"},{"tag":"TypeVar","contents":"trash"},{"tag":"TypeConstructor","contents":[["Makkori"],"StaticOptions"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Makkori"],"Path"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"options"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Makkori"],"Middleware"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[120,1],"name":".spago/aff-retry/v1.2.1/src/Effect/Aff/Retry.purs","end":[121,76]},"score":0,"packageName":"aff-retry","name":"limitRetriesByCumulativeDelay","moduleName":"Effect.Aff.Retry","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["d",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff","Retry"],"RetryPolicyM"]},{"tag":"TypeVar","contents":"m"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff","Retry"],"RetryPolicyM"]},{"tag":"TypeVar","contents":"m"}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Add an upperbound to a policy such that once the cumulative delay\nover all retries has reached or exceeded the given limit, the\npolicy will stop retrying and fail.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[109,1],"name":".spago/aff-retry/v1.2.1/src/Effect/Aff/Retry.purs","end":[110,76]},"score":0,"packageName":"aff-retry","name":"limitRetriesByDelay","moduleName":"Effect.Aff.Retry","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["d",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff","Retry"],"RetryPolicyM"]},{"tag":"TypeVar","contents":"m"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff","Retry"],"RetryPolicyM"]},{"tag":"TypeVar","contents":"m"}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Add an upperbound to a policy such that once the given time-delay\namount *per try* has been reached or exceeded, the policy will stop\nretrying and fail. If you need to stop retrying once *cumulative*\ndelay reaches a time-delay amount, use 'limitRetriesByCumulativeDelay'\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[13,5],"name":".spago/vectorfield/v1.0.1/src/Data/VectorField.purs","end":[13,33]},"score":0,"packageName":"vectorfield","name":"scalarMul","moduleName":"Data.VectorField","info":{"values":[{"typeClassArguments":[["f",null],["k",null]],"typeClass":[["Data","VectorField"],"VectorField"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["k",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","VectorField"],"VectorField"],"constraintArgs":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"k"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"k"}]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"- ∀v in V: one * v == v \n- ∀a b in K, v in V: a * (b .* v) = (a * b) .* v\n- ∀a b in K, v in V: \n     - a .* (u + v) = a .* u + a .* v \n     - (a + b) .* v = a .* v + b .* v\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[354,1],"name":".spago/foldable-traversable/v4.1.1/src/Data/Foldable.purs","end":[354,58]},"score":0,"packageName":"foldable-traversable","name":"indexr","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Try to get nth element from the right in a data structure\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[342,1],"name":".spago/foldable-traversable/v4.1.1/src/Data/Foldable.purs","end":[342,58]},"score":0,"packageName":"foldable-traversable","name":"indexl","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Try to get nth element from the left in a data structure\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[52,1],"name":".spago/safely/v4.0.1/src/Control/Safely.purs","end":[52,62]},"score":0,"packageName":"safely","name":"replicateM_","moduleName":"Control.Safely","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Safely replicate an action N times.\n"}],"tag":"SearchResult"}]