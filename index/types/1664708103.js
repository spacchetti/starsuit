// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1664708103"] = [{"values":[{"sourceSpan":{"start":[67,3],"name":".spago/quickcheck/v7.0.0/src/Test/QuickCheck/Arbitrary.purs","end":[67,47]},"score":39,"packageInfo":{"values":["quickcheck"],"tag":"Package"},"name":"coarbitrary","moduleName":"Test.QuickCheck.Arbitrary","info":{"values":[{"typeClassArguments":[["t",null]],"typeClass":[["Test","QuickCheck","Arbitrary"],"Coarbitrary"],"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","QuickCheck","Arbitrary"],"Coarbitrary"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"r"}]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/prelude/v5.0.0/src/Record/Unsafe.purs","end":[27,78]},"score":179,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"unsafeDelete","moduleName":"Record.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r2",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r2"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Unsafely removes a value on a record, using a string for the key.\n\nThe output record's row is unspecified so can be coerced to any row. If the\noutput type is incorrect it will cause a runtime error elsewhere.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[120,1],"name":".spago/aff-retry/v1.2.1/src/Effect/Aff/Retry.purs","end":[121,76]},"score":0,"packageInfo":{"values":["aff-retry"],"tag":"Package"},"name":"limitRetriesByCumulativeDelay","moduleName":"Effect.Aff.Retry","info":{"values":[{"type":{"tag":"ForAll","contents":["d",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff","Retry"],"RetryPolicyM"]},{"tag":"TypeVar","contents":"m"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff","Retry"],"RetryPolicyM"]},{"tag":"TypeVar","contents":"m"}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Add an upperbound to a policy such that once the cumulative delay\nover all retries has reached or exceeded the given limit, the\npolicy will stop retrying and fail.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[109,1],"name":".spago/aff-retry/v1.2.1/src/Effect/Aff/Retry.purs","end":[110,76]},"score":0,"packageInfo":{"values":["aff-retry"],"tag":"Package"},"name":"limitRetriesByDelay","moduleName":"Effect.Aff.Retry","info":{"values":[{"type":{"tag":"ForAll","contents":["d",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff","Retry"],"RetryPolicyM"]},{"tag":"TypeVar","contents":"m"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff","Retry"],"RetryPolicyM"]},{"tag":"TypeVar","contents":"m"}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Add an upperbound to a policy such that once the given time-delay\namount *per try* has been reached or exceeded, the policy will stop\nretrying and fail. If you need to stop retrying once *cumulative*\ndelay reaches a time-delay amount, use 'limitRetriesByCumulativeDelay'\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[13,5],"name":".spago/vectorfield/v1.0.1/src/Data/VectorField.purs","end":[13,33]},"score":1,"packageInfo":{"values":["vectorfield"],"tag":"Package"},"name":"scalarMul","moduleName":"Data.VectorField","info":{"values":[{"typeClassArguments":[["f",null],["k",null]],"typeClass":[["Data","VectorField"],"VectorField"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["k",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","VectorField"],"VectorField"],"constraintArgs":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"k"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"k"}]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"- ∀v in V: one * v == v \n- ∀a b in K, v in V: a * (b .* v) = (a * b) .* v\n- ∀a b in K, v in V: \n     - a .* (u + v) = a .* u + a .* v \n     - (a + b) .* v = a .* v + b .* v\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[406,1],"name":".spago/foldable-traversable/v5.0.0/src/Data/Foldable.purs","end":[406,58]},"score":55,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"indexr","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Try to get nth element from the right in a data structure\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[394,1],"name":".spago/foldable-traversable/v5.0.0/src/Data/Foldable.purs","end":[394,58]},"score":55,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"indexl","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Try to get nth element from the left in a data structure\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[52,1],"name":".spago/safely/v4.0.1/src/Control/Safely.purs","end":[52,62]},"score":0,"packageInfo":{"values":["safely"],"tag":"Package"},"name":"replicateM_","moduleName":"Control.Safely","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Safely replicate an action N times.\n"}],"tag":"SearchResult"}]