// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1260754365"] = [{"values":[{"sourceSpan":{"start":[93,1],"name":".spago/catenable-lists/v6.0.0/src/Data/CatQueue.purs","end":[93,63]},"score":2,"packageInfo":{"values":["catenable-lists"],"tag":"Package"},"name":"unsnoc","moduleName":"Data.CatQueue","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","CatQueue"],"CatQueue"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","CatQueue"],"CatQueue"]},{"tag":"TypeVar","contents":"a"}]}}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Decompose a queue into a `Tuple` of the last element and the rest of the queue.\n\nRunning time: `O(1)`\n\nNote that any single operation may run in `O(n)`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[83,1],"name":".spago/catenable-lists/v6.0.0/src/Data/CatQueue.purs","end":[83,63]},"score":2,"packageInfo":{"values":["catenable-lists"],"tag":"Package"},"name":"uncons","moduleName":"Data.CatQueue","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","CatQueue"],"CatQueue"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","CatQueue"],"CatQueue"]},{"tag":"TypeVar","contents":"a"}]}}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Decompose a queue into a `Tuple` of the first element and the rest of the queue.\n\nRunning time: `O(1)`\n\nNote that any single operation may run in `O(n)`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[100,1],"name":".spago/catenable-lists/v6.0.0/src/Data/CatList.purs","end":[100,61]},"score":2,"packageInfo":{"values":["catenable-lists"],"tag":"Package"},"name":"uncons","moduleName":"Data.CatList","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","CatList"],"CatList"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","CatList"],"CatList"]},{"tag":"TypeVar","contents":"a"}]}}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Decompose a catenable list into a `Tuple` of the first element and\nthe rest of the catenable list.\n\nRunning time: `O(1)`\n\nNote that any single operation may run in `O(n)`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[177,1],"name":".spago/affjax/v12.0.0/src/Affjax.purs","end":[177,66]},"score":2,"packageInfo":{"values":["affjax"],"tag":"Package"},"name":"request","moduleName":"Affjax","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Affjax"],"Request"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Affjax"],"Error"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Affjax"],"Response"]},{"tag":"TypeVar","contents":"a"}]}}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Makes an HTTP request.\n\nThe example below performs a `GET` request to the URL `/resource` and\ninterprets the response body as JSON.\n\n```purescript\nimport Affjax.ResponseFormat (json)\n...\nrequest (defaultRequest { url = \"/resource\", method = Left GET, responseFormat = json})\n```\n\nFor common cases helper functions can often be used instead of `request` .\nFor instance, the above example is equivalent to the following.\n\n```purescript\nget json \"/resource\"\n```\n"}],"tag":"SearchResult"}]