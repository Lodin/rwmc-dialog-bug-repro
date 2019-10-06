# `<Dialog>` bug repro

Bug repro for the `<Dialog>` component of the [rmwc](https://github.com/jamesmfriedman/rmwc)
project.

Dialog does not open in IE11. No `mdc-dialog--opening` or `mdc-dialog--open` are
added during the opening process.

To see the bug, clone it locally and run the following command:
```bash
$ npm run start:ie
```
