// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["405520407"] = [{"values":[{"sourceSpan":{"start":[73,1],"name":".spago/halogen-select/v5.0.0/src/Select/Setters.purs","end":[76,54]},"score":0,"packageInfo":{"values":["halogen-select"],"tag":"Package"},"name":"setInputProps","moduleName":"Select.Setters","info":{"values":[{"type":{"tag":"ForAll","contents":["act",{"tag":"ForAll","contents":["props",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","HTML","Properties"],"IProp"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Select","Setters"],"InputProps"]},{"tag":"TypeVar","contents":"props"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Select"],"Action"]},{"tag":"TypeVar","contents":"act"}]}}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","HTML","Properties"],"IProp"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Select","Setters"],"InputProps"]},{"tag":"TypeVar","contents":"props"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Select"],"Action"]},{"tag":"TypeVar","contents":"act"}]}}]}}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A helper function that augments an array of `IProps` with `InputProps`. It\nallows the input element to capture string values, register key events for\nnavigation, record open and close events based on focus and blur, and to be\nfocused with the tab key.\n\n```purescript\nrenderInput = input_ (setInputProps [ class \"my-class\" ])\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[39,1],"name":".spago/halogen-select/v5.0.0/src/Select/Setters.purs","end":[42,55]},"score":0,"packageInfo":{"values":["halogen-select"],"tag":"Package"},"name":"setToggleProps","moduleName":"Select.Setters","info":{"values":[{"type":{"tag":"ForAll","contents":["act",{"tag":"ForAll","contents":["props",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","HTML","Properties"],"IProp"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Select","Setters"],"ToggleProps"]},{"tag":"TypeVar","contents":"props"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Select"],"Action"]},{"tag":"TypeVar","contents":"act"}]}}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","HTML","Properties"],"IProp"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Select","Setters"],"ToggleProps"]},{"tag":"TypeVar","contents":"props"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Select"],"Action"]},{"tag":"TypeVar","contents":"act"}]}}]}}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A helper function that augments an array of `IProps` with `ToggleProps`. It\nallows the toggle element to register key events for navigation or highlighting,\nrecord open and close events based on focus and blur, and to be focused with\nthe tab key.\n\n```purescript\nrenderToggle = div (setToggleProps [ class \"btn-class\" ]) [ ...html ]\n```\n"}],"tag":"SearchResult"}]