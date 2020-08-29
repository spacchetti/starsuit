// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["294551127"] = [{"values":[{"sourceSpan":{"start":[107,1],"name":".spago/payload/v0.3.0/src/Payload/Server.purs","end":[113,32]},"score":0,"packageInfo":{"values":["payload"],"tag":"Package"},"name":"start","moduleName":"Payload.Server","info":{"values":[{"type":{"tag":"ForAll","contents":["handlers",{"tag":"ForAll","contents":["routesSpec",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Payload","Server","Routable"],"Routable"],"constraintArgs":[{"tag":"TypeVar","contents":"routesSpec"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"REmpty","contents":{}}]},{"tag":"TypeVar","contents":"handlers"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Payload","Server"],"Options"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Payload","Spec"],"Spec"]},{"tag":"TypeVar","contents":"routesSpec"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"handlers"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Payload","Server"],"Server"]}]}}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Start server with given routes and handlers (no guards).\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[73,1],"name":".spago/httpure-contrib-biscotti/v0.1.2/src/HTTPure/Contrib/Biscotti/SessionManager.purs","end":[80,25]},"score":0,"packageInfo":{"values":["httpure-contrib-biscotti"],"tag":"Package"},"name":"getSession","moduleName":"HTTPure.Contrib.Biscotti.SessionManager","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Aff","Class"],"MonadAff"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Decode","Class"],"DecodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Biscotti","Session","Store"],"SessionStore"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["HTTPure","Request"],"Request"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[110,1],"name":".spago/axios/v1.1.2/src/Axios.purs","end":[110,116]},"score":0,"packageInfo":{"values":["axios"],"tag":"Package"},"name":"genericAxios","moduleName":"Axios","info":{"values":[{"type":{"tag":"ForAll","contents":["res",{"tag":"ForAll","contents":["req",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Foreign","Generic","Class"],"Decode"],"constraintArgs":[{"tag":"TypeVar","contents":"res"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Foreign","Generic","Class"],"Encode"],"constraintArgs":[{"tag":"TypeVar","contents":"req"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Axios"],"Config"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"req"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeVar","contents":"res"}]}}]}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A generic implementation of the `axios` member from `Axios` class \ni.e. takes an url, array of config and request body and gives the `Either` `Error` response \n```purescript\ngenericAxios \"/req_res/users/9\" \n [ method GET\n , headers [ Header \"Content-Type\" \"application/json\" ]\n , baseUrl \"https://grandeur-backend.herokuapp.com\"\n , auth \"1234\" \"1234\"\n ] req\n```\n"}],"tag":"SearchResult"}]