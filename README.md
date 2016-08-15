This tool helps deploy a directory to a remote git branch.

install

```sh
$ npm install --save haishanh/gitdeploy
```

in your scripts

```js
var deploy = require('gitdeploy');

deploy({
  directory: 'dist',
  remote: 'git@github.com:haishanh/gitdeploy.git',
  branch: 'gh-pages'
});
```