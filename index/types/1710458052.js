// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1710458052"] = [{"values":[{"sourceSpan":{"start":[88,1],"name":".spago/react-basic-hooks/v4.2.0/src/React/Basic/Hooks.purs","end":[95,57]},"score":0,"packageName":"react-basic-hooks","name":"componentFromHook","moduleName":"React.Basic.Hooks","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["props",{"tag":"ForAll","contents":["hooks",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Lacks"],"constraintArgs":[{"tag":"TypeLevelString","contents":"children"},{"tag":"TypeVar","contents":"props"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Lacks"],"constraintArgs":[{"tag":"TypeLevelString","contents":"key"},{"tag":"TypeVar","contents":"props"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Lacks"],"constraintArgs":[{"tag":"TypeLevelString","contents":"ref"},{"tag":"TypeVar","contents":"props"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["render",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["React","Basic"],"JSX"]}]},{"tag":"TypeVar","contents":"props"}]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Hooks","Internal"],"Hook"]},{"tag":"TypeVar","contents":"hooks"}]},{"tag":"TypeVar","contents":"r"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic"],"ReactComponent"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["render",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["React","Basic"],"JSX"]}]},{"tag":"TypeVar","contents":"props"}]}]}]}}]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert a hook to a render-prop component. The value returned from the\nhook will be passed to the `render` prop, a function from that value\nto `JSX`.\n\nThis function is useful for consuming a hook within a non-hook component.\n"}],"tag":"SearchResult"}]