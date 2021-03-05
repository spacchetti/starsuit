// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["63462450"] = [{"values":[{"sourceSpan":{"start":[240,1],"name":".spago/quickcheck/v7.0.0/src/Test/QuickCheck/Arbitrary.purs","end":[240,74]},"score":36,"packageInfo":{"values":["quickcheck"],"tag":"Package"},"name":"genericArbitrary","moduleName":"Test.QuickCheck.Arbitrary","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["rep",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","QuickCheck","Arbitrary"],"Arbitrary"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `arbitrary` member from the `Arbitrary` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[93,1],"name":".spago/unfoldable/v5.0.0/src/Data/Unfoldable.purs","end":[93,40]},"score":18,"packageInfo":{"values":["unfoldable"],"tag":"Package"},"name":"none","moduleName":"Data.Unfoldable","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The container with no elements - unfolded with zero iterations.\nFor example:\n\n``` purescript\nnone == ([] :: Array Unit)\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[107,1],"name":".spago/enums/v5.0.0/src/Data/Enum/Generic.purs","end":[107,93]},"score":12,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"genericCardinality","moduleName":"Data.Enum.Generic","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["rep",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum","Generic"],"GenericBoundedEnum"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Enum"],"Cardinality"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `cardinality` member from the\n`BoundedEnum` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[11,1],"name":".spago/enums/v5.0.0/src/Data/Enum/Gen.purs","end":[11,65]},"score":12,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"genBoundedEnum","moduleName":"Data.Enum.Gen","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Gen","Class"],"MonadGen"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum"],"BoundedEnum"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a random generator for a finite enumeration.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[13,3],"name":".spago/contravariant/v5.0.0/src/Data/Divisible.purs","end":[13,27]},"score":4,"packageInfo":{"values":["contravariant"],"tag":"Package"},"name":"conquer","moduleName":"Data.Divisible","info":{"values":[{"typeClassArguments":[["f",null]],"typeClass":[["Data","Divisible"],"Divisible"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Divisible"],"Divisible"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[68,3],"name":".spago/these/v5.0.0/src/Data/Align.purs","end":[68,23]},"score":2,"packageInfo":{"values":["these"],"tag":"Package"},"name":"nil","moduleName":"Data.Align","info":{"values":[{"typeClassArguments":[["f",null]],"typeClass":[["Data","Align"],"Alignable"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Align"],"Alignable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,3],"name":".spago/control/v5.0.0/src/Control/Plus.purs","end":[24,25]},"score":35,"packageInfo":{"values":["control"],"tag":"Package"},"name":"empty","moduleName":"Control.Plus","info":{"values":[{"typeClassArguments":[["f",null]],"typeClass":[["Control","Plus"],"Plus"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Plus"],"Plus"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[28,1],"name":".spago/transformers/v5.0.0/src/Control/Monad/State/Class.purs","end":[28,41]},"score":32,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"get","moduleName":"Control.Monad.State.Class","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","State","Class"],"MonadState"],"constraintArgs":[{"tag":"TypeVar","contents":"s"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"s"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get the current state.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[17,3],"name":".spago/transformers/v5.0.0/src/Control/Monad/Reader/Class.purs","end":[17,13]},"score":32,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"ask","moduleName":"Control.Monad.Reader.Class","info":{"values":[{"typeClassArguments":[["r",null],["m",null]],"typeClass":[["Control","Monad","Reader","Class"],"MonadAsk"],"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Reader","Class"],"MonadAsk"],"constraintArgs":[{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"r"}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[64,1],"name":".spago/concur-react/v0.4.2/src/Concur/React/DOM.purs","end":[65,41]},"score":0,"packageInfo":{"values":["concur-react"],"tag":"Package"},"name":"ElLeaf'","moduleName":"Concur.React.DOM","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Concur","Core","LiftWidget"],"LiftWidget"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Concur","React"],"HTML"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},null]},null]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"}]