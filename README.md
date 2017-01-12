# Feel++ Ace Mode

[Feel++](https://github.com/feelpp/feelpp) syntax for **gitbook ace plugin** ([Github](https://github.com/ymcatar/gitbook-plugin-ace))
extended from ace c++ syntax.

[Feel++](https://github.com/feelpp/feelpp) stands for _Finite Element Embedded language using C++_.

# Usage

Just install this package.
Specific css class are created and have to be customized.
Note that default ace theme does not color these class.

| class | description |
| --- | --- |
| ace_feelpp | class for all feel++ keywords |
| ace_feelvf | class for feelvf keywords |
| ace_feeldiscr | class for feeldiscr keywords |

NB: For to [Feel++](https://github.com/feelpp/feelpp) for keywords meaning.

# Install note

To install this plugin just use

```sh
npm install gitbook-plugin-ace-mode-feelpp
```

- :information_source: This plugin requires the nodejs package `gitbook-ace-plugin`.
- :information_source: It copies the feelpp mode and snippet .js file into the ace plugin.

# Development

See [ace-mode-feelpp](https://github.com/gdolle/ace-mode-feelpp) for mode and snippet creation.
