// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["199208642"] = [{"values":[{"sourceSpan":{"start":[198,1],"name":".spago/react-testing-library/v3.1.4/src/React/TestingLibrary.purs","end":[203,12]},"score":0,"packageInfo":{"values":["react-testing-library"],"tag":"Package"},"name":"describeComponent","moduleName":"React.TestingLibrary","info":{"values":[{"type":{"tag":"ForAll","contents":["props",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic"],"ReactComponent"]},{"tag":"TypeVar","contents":"props"}]}}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","Spec"],"SpecT"]},{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic"],"ReactComponent"]},{"tag":"TypeVar","contents":"props"}]}}]},{"tag":"TypeConstructor","contents":[["Data","Identity"],"Identity"]}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","Spec"],"Spec"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Example use:\n```purescript\nspec = describeComponent mkMyComponent \"My Component\" do\n it \"renders\" \\myComponent ->\n   { findByText } <- renderComponent myComponent { someProp: \"test text\"} \n   result <- findByText \"test text\"\n   result `textContentShouldEqual` \"I am rendering test text\"\n```\n"}],"tag":"SearchResult"}]