// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1704792792"] = [{"values":[{"sourceSpan":{"start":[73,1],"name":".spago/halogen-formless/v1.0.0/src/Formless/Component.purs","end":[78,52]},"score":0,"packageInfo":{"values":["halogen-formless"],"tag":"Package"},"name":"raiseResult","moduleName":"Formless.Component","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["output",{"tag":"ForAll","contents":["wrappedOutput",{"tag":"ForAll","contents":["slots",{"tag":"ForAll","contents":["act",{"tag":"ForAll","contents":["st",{"tag":"ForAll","contents":["form",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"OutputField"]}]}},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"wrappedOutput"}]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Heterogeneous","Mapping"],"HMap"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Formless","Transform","Record"],"UnwrapField"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"wrappedOutput"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"output"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Component"],"Event"]},{"tag":"TypeVar","contents":"form"}]},{"tag":"TypeVar","contents":"st"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Component"],"HalogenM"]},{"tag":"TypeVar","contents":"form"}]},{"tag":"TypeVar","contents":"st"}]},{"tag":"TypeVar","contents":"act"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"output"}]}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A convenience function for raising a form's validated and unwrapped outputs\nas its only message to a parent component. Useful when you only want to be\nnotified with a form's successfully-parsed data. For example:\n\n```purescript\ntype User = { name :: String, email :: Email }\n\nnewtype UserForm r f = UserForm (r\n  ( name :: f Void String String\n  , email :: f EmailError String Email\n  ))\nderive instance newtypeUserForm :: Newtype (UserForm r f) _\n\n-- we only want to handle our `User` type on successful submission; we can\n-- use `raiseResult` as our `handleEvent` function to do this conveniently.\nformSpec = F.defaultSpec { handleEvent = raiseResult }\n\n-- the parent can now just handle the `User` output\ndata ParentAction = HandleForm User\n\ntype ChildSlots = ( formless :: F.Slot' UserForm User Unit )\n```\n"}],"tag":"SearchResult"}]