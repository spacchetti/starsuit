// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1061217032"] = [{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/web-events/v2.0.1/src/Web/Event/EventTarget.purs","end":[30,26]},"score":7,"packageInfo":{"values":["web-events"],"tag":"Package"},"name":"eventListener","moduleName":"Web.Event.EventTarget","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Web","Event","Internal","Types"],"Event"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"a"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Web","Event","EventTarget"],"EventListener"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates an EventListener from a normal PureScript Effect function.\n\nThis function itself is effectful as otherwise it would break referential\ntransparency - `eventListener f /= eventListener f`. This is worth noting\nas you can only remove the exact event listener value that was added for\nan `EventTarget`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[111,1],"name":".spago/quickcheck/v6.1.0/src/Test/QuickCheck/Gen.purs","end":[111,44]},"score":44,"packageInfo":{"values":["quickcheck"],"tag":"Package"},"name":"sized","moduleName":"Test.QuickCheck.Gen","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Size"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"a"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a random generator which depends on the size parameter.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[93,1],"name":".spago/quickcheck/v6.1.0/src/Test/QuickCheck/Gen.purs","end":[93,51]},"score":44,"packageInfo":{"values":["quickcheck"],"tag":"Package"},"name":"stateful","moduleName":"Test.QuickCheck.Gen","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"GenState"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"a"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a random generator which uses the generator state explicitly.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[146,1],"name":".spago/optparse/v3.0.1/src/Options/Applicative/Builder.purs","end":[146,56]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"maybeReader","moduleName":"Options.Applicative.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"ReadM"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert a function producing a 'Maybe' into a reader.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[87,1],"name":".spago/dodo-printer/v1.0.8/src/Dodo.purs","end":[87,55]},"score":0,"packageInfo":{"values":["dodo-printer"],"tag":"Package"},"name":"withPosition","moduleName":"Dodo","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Dodo","Internal"],"Position"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Dodo","Internal"],"Doc"]},{"tag":"TypeVar","contents":"a"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Dodo","Internal"],"Doc"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Build a document based on the current layout position.\n"}],"tag":"SearchResult"}]