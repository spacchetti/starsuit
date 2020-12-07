// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1916529058"] = [{"values":[{"sourceSpan":{"start":[18,1],"name":".spago/uri/v7.0.0/src/URI/HostPortPair.purs","end":[18,54]},"score":1,"packageInfo":{"values":["uri"],"tag":"Package"},"name":"HostPortPair","moduleName":"URI.HostPortPair","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","These"],"These"]},{"tag":"TypeVar","contents":"host"}]},{"tag":"TypeVar","contents":"port"}]}}]},"arguments":[["host",null],["port",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"A spec-conformant host/port pair (may also be empty).\nFor example: `purescript.org`, `localhost:3000`, `:9000`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[37,1],"name":".spago/uri/v7.0.0/src/URI/Extra/MultiHostPortPair.purs","end":[37,59]},"score":1,"packageInfo":{"values":["uri"],"tag":"Package"},"name":"MultiHostPortPair","moduleName":"URI.Extra.MultiHostPortPair","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","These"],"These"]},{"tag":"TypeVar","contents":"host"}]},{"tag":"TypeVar","contents":"port"}]}}]},"arguments":[["host",null],["port",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"Multi-host/port pairs, where host & port combinations can be separated by\n`,`, as used by some connection URI schemes. This is not strictly\ncompatible with RFC 3986, as in that spec `RegName`s can contain `,`, and\nonly one port can be specified in the authority.\n\nA motivating example for where this may be useful: dealing with mongodb\nconnection strings.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[44,1],"name":".spago/run-streaming/v2.0.0/src/Run/Streaming.purs","end":[44,34]},"score":0,"packageInfo":{"values":["run-streaming"],"tag":"Package"},"name":"STEP","moduleName":"Run.Streaming","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant","Internal"],"FProxy"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run","Streaming"],"Step"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeVar","contents":"o"}]}}]},"arguments":[["i",null],["o",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[134,1],"name":".spago/routing/v9.0.1/src/Routing/Match.purs","end":[134,38]},"score":2,"packageInfo":{"values":["routing"],"tag":"Package"},"name":"params","moduleName":"Routing.Match","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Match"],"Match"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`params` matches an entire query block. For exmaple, `params`\nmatches `/?q=a&r=b` as the map `{q : \"a\", r : \"b\"}`. Note that\n`lit \"foo\" *> params` does *not* match `/foo`, since a query component\nis *required*.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[5,1],"name":".spago/routing-duplex/v0.4.1/src/Routing/Duplex/Types.purs","end":[5,47]},"score":0,"packageInfo":{"values":["routing-duplex"],"tag":"Package"},"name":"RouteParams","moduleName":"Routing.Duplex.Types","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[113,1],"name":".spago/grain-router/v1.0.0/src/Grain/Router/Parser.purs","end":[113,39]},"score":0,"packageInfo":{"values":["grain-router"],"tag":"Package"},"name":"params","moduleName":"Grain.Router.Parser","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Grain","Router","Parser"],"Parser"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[21,1],"name":".spago/grain/v1.0.0/src/Grain/Internal/Prop.purs","end":[22,30]},"score":2,"packageInfo":{"values":["grain"],"tag":"Package"},"name":"Props","moduleName":"Grain.Internal.Prop","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[113,1],"name":".spago/freedom-router/v2.0.0/src/Freedom/Router/Parser.purs","end":[113,39]},"score":0,"packageInfo":{"values":["freedom-router"],"tag":"Package"},"name":"params","moduleName":"Freedom.Router.Parser","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Freedom","Router","Parser"],"Parser"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[134,1],"name":".spago/halogen-formless/v1.0.0/src/Formless/Types/Component.purs","end":[135,25]},"score":0,"packageInfo":{"values":["halogen-formless"],"tag":"Package"},"name":"PublicState","moduleName":"Formless.Types.Component","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Component"],"StateRow"]},{"tag":"TypeVar","contents":"form"}]},{"tag":"TypeVar","contents":"st"}]}]},"arguments":[["form",null],["st",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"The component's public state\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[38,1],"name":".spago/fuzzy/v0.3.0/src/Data/Fuzzy.purs","end":[38,45]},"score":0,"packageInfo":{"values":["fuzzy"],"tag":"Package"},"name":"Segments","moduleName":"Data.Fuzzy","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"Type representing segments of matched and unmatched substrings.\nFor example, when matching the pattern `\"foo bar\"` against the value\n`\"food barn\"`, the resulting `Segments` would be:\n\n```[ Right \"foo\", Left \"d \", Right \"bar\", Left \"n\" ]```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[252,1],"name":".spago/abc-parser/v1.8.0/src/Data/Abc/KeySignature.purs","end":[252,41]},"score":0,"packageInfo":{"values":["abc-parser"],"tag":"Package"},"name":"pitchNumbers","moduleName":"Data.Abc.KeySignature","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeConstructor","contents":[["Data","Abc"],"Pitch"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"a relationship between a Pitch and a note number\ni.e. C is 0, C Sharp is 1 B is 11 etc.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[50,1],"name":".spago/css/v4.0.0/src/CSS/Render.purs","end":[50,43]},"score":1,"packageInfo":{"values":["css"],"tag":"Package"},"name":"Rendered","moduleName":"CSS.Render","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","These"],"These"]},{"tag":"TypeConstructor","contents":[["CSS","Render"],"Inline"]}]},{"tag":"TypeConstructor","contents":[["CSS","Render"],"Sheet"]}]}}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[181,1],"name":".spago/coroutines/v5.0.1/src/Control/Coroutine.purs","end":[181,46]},"score":4,"packageInfo":{"values":["coroutines"],"tag":"Package"},"name":"CoTransformer","moduleName":"Control.Coroutine","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Coroutine"],"Co"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Coroutine"],"CoTransform"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeVar","contents":"o"}]}}]},"arguments":[["i",null],["o",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"A type synonym for a `Co`routine which \"cotransforms\" values, emitting an output\nbefore waiting for its input.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[164,1],"name":".spago/coroutines/v5.0.1/src/Control/Coroutine.purs","end":[164,42]},"score":4,"packageInfo":{"values":["coroutines"],"tag":"Package"},"name":"Transformer","moduleName":"Control.Coroutine","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Coroutine"],"Co"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Coroutine"],"Transform"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeVar","contents":"o"}]}}]},"arguments":[["i",null],["o",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"A type synonym for a `Co`routine which transforms values.\n"}],"tag":"SearchResult"}]