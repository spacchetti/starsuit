// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1117490937"] = [{"values":[{"sourceSpan":{"start":[33,1],"name":".spago/react-basic-hooks/v6.2.0/src/React/Basic/Hooks/Aff.purs","end":[38,33]},"score":3,"packageInfo":{"values":["react-basic-hooks"],"tag":"Package"},"name":"useAff","moduleName":"React.Basic.Hooks.Aff","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["deps",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Eq"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"deps"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"deps"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Hooks","Internal"],"Hook"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Hooks","Aff"],"UseAff"]},{"tag":"TypeVar","contents":"deps"}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`useAff` is used for asynchronous effects or `Aff`. The asynchronous effect\nis re-run whenever the deps change. If another `Aff` runs when the deps\nchange before the previous async resolves, it will cancel the previous\nin-flight effect.\n\n*Note: This hook requires parent components to handle error states! Don't\n  forget to implement a React error boundary or avoid `Aff` errors entirely\n  by incorporating them into your result type!*\n"}],"tag":"SearchResult"}]