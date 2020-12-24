// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1327027084"] = [{"values":[{"sourceSpan":{"start":[61,1],"name":".spago/elmish/v0.3.1/src/Elmish/React.purs","end":[67,20]},"score":1,"packageInfo":{"values":["elmish"],"tag":"Package"},"name":"createElement","moduleName":"Elmish.React","info":{"values":[{"type":{"tag":"ForAll","contents":["content",{"tag":"ForAll","contents":["props",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Elmish","React"],"ValidReactProps"],"constraintArgs":[{"tag":"TypeVar","contents":"props"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Elmish","React"],"ReactChildren"],"constraintArgs":[{"tag":"TypeVar","contents":"content"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Elmish","React"],"ReactComponent"]},{"tag":"TypeVar","contents":"props"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"props"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"content"}]},{"tag":"TypeConstructor","contents":[["Elmish","React"],"ReactElement"]}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The PureScript import of the React’s `createElement` function. Takes a\ncomponent constructor, a record of props, some children, and returns a\nReact DOM element.\n\nTo represent HTML `data-` attributes, `createElement` supports the\n`_data :: Object` prop.\n\n**Example**\n\n```purescript\nimport Elmish.HTML as H\nimport Foreign.Object as FO\n\nH.div\n  { _data: FO.fromHomogenous { toggle: \"buttons } }\n  [...]\n```\n\nrepresents the `<div data-toggle=\"buttons\">` DOM element.\n\n"}],"tag":"SearchResult"}]