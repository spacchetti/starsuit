// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1000113991"] = [{"values":[{"sourceSpan":{"start":[184,1],"name":".spago/optparse/v3.0.1/src/Options/Applicative/Common.purs","end":[184,101]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"runParser","moduleName":"Options.Applicative.Common","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Options","Applicative","Internal"],"MonadP"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"ArgPolicy"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"IsCmdStart"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"Parser"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"Args"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"Args"]}]}}]}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Apply a 'Parser' to a command line, and return a result and leftover\narguments.  This function returns an error if any parsing error occurs, or\nif any options are missing and don't have a default value.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[133,1],"name":".spago/axios/v1.1.2/src/Axios.purs","end":[133,127]},"score":0,"packageInfo":{"values":["axios"],"tag":"Package"},"name":"defaultAxios'","moduleName":"Axios","info":{"values":[{"type":{"tag":"ForAll","contents":["res",{"tag":"ForAll","contents":["req",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Foreign","Generic","Class"],"Decode"],"constraintArgs":[{"tag":"TypeVar","contents":"res"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Foreign","Generic","Class"],"Encode"],"constraintArgs":[{"tag":"TypeVar","contents":"req"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Axios"],"Method"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Axios"],"Header"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"req"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeVar","contents":"res"}]}}]}]}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Another default implementation of the `axios` member from `Axios` class\ni.e. takes an url, method, array of header and request body and gives the `Either` `Error` response \n```purescript\ndefaultAxios' \"https://reqres.in/api/users/7\" PATCH \n [ Header \"Content-Type\" \"application/json\"]\n , Header \"Cache-Control\" \"no-cache\"]\n ] req\n```\n"}],"tag":"SearchResult"}]