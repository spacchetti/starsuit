let upstream =
      https://github.com/purescript/package-sets/releases/download/psc-0.13.3-20190827/packages.dhall sha256:93f6b11068b42eac6632d56dab659a151c231381e53a16de621ae6d0dab475ce

let overrides = {=}

let additions = {=}

in  upstream // overrides // additions
