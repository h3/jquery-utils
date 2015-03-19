# Build system #

## Introduction ##

I build this library with a custom made [python build system](http://code.google.com/p/jquery-utils/source/browse/trunk/build.py) I made based on the jQuery build system.


## Basic usage ##

```

$: ./build.py

```

Build minified too:

```

$: ./build.py  -m

```


## Requirement ##

  * Linux (only tested on this OS ..)
  * Python
  * python-yaml

## Options ##

| **Option**| **Long**| **Description**|
|:|:|:|
| -o | -only | Build only specified modules |
| -m | -minify | Create a minified version |
| -q | -quiet | Not output |

## Build files ##

The build command will scan directory recursively for files named "build.py" and will
build them consecutively.

### Basic build file ###

```

title: build.title
version: 0.1
svnrev: true
dest: dist/
modules:
  - file: src/input.file.js
    name: 'myModuleName'
    depends:
      - src: src/jquery.plugin1.js
      - src: src/jquery.plugin2.js

```

This build file will take `jquery.plugin1.js` and `jquery.plugin2.js`, merge them into
`dist/input.file.js`.

The keyword `@VERSION` in this file will be replaced by `0.1 r<SVNREV>`.

The `title arguement` is solely used to print the build status in console.


### Multiple package build ###

In some case you might want to create two version of the library. I needed this feature to create a version of jquery.utils with UI widgets included and another without it.

```

title: build-title
version: 0.1
dest: dist/
modules:
  - file: src/input.file.js
    name: 'myModuleName'
    depends:
      - src: src/jquery.plugin1.js
      - src: src/jquery.plugin2.js

  - file: src/input.file.js
    name: 'myModuleNameExtra'
    title: input.file.extra
    destfile: input.file.ext.js
    depends:
      - src: src/jquery.plugin1.js
      - src: src/jquery.plugin2.js
      - src: src/jquery.plugin3.js

```

Notice that I use the "destfile" argument to override the default destination file name, which would have been `input.file.js`

### Merging files ###

Sometimes I work with separated stylesheets in development, but would like to have them merged in production. So it's possible to simply merge multiple files like this:

```

title: build.title
dest: dist/
modules:
  - file: src/input.file.js
    name: 'myModuleName'
    depends:
      - src: src/jquery.plugin1.js
      - src: src/jquery.plugin2.js
merge:
  - dest: dist/jquery.utils.css
    files:
      - src: src/css/ui.dropslide.css
      - src: src/css/ui.timepickr.css
      - src: src/css/ui.toaster.css

```

One may wonder why I don't use this to build module too. Well it's pretty simple, if the -m argument is given at build time the build system will automatically create the .min.js version of the file and we don't want this for merged files.

### Creating archives ###

I also got tired of creating archives.. obviously, the %v is replaced by the version

```

title: build.title
version: 0.1
dest: dist/
modules:
  - file: src/input.file.js
    name: 'myModuleName'
    depends:
      - src: src/jquery.plugin1.js
      - src: src/jquery.plugin2.js

zip:
  - dest: downloads/jquery.plugin-%v.zip
    src: folder/
    exclude: [".svn", "build.yml"]

gzip:
  - dest: downloads/jquery.plugin-%v.tar.gz
    src: folder/
    exclude: [".svn", "build.yml"]

```

### Build specific modules ###

The `-o` options allow to build only specified modules. Simply specify the modules `name` you want to build.

```

./build.py -m -o myModuleName

```

It's also possible to build multiple modules at once. For example, to build the standalone ui-timepickr I need to build `timepickr` and `uitimepickr`. It's simple as that:

```

./build.py -m -o timepickr -o uitimepickr

```

## Currently used build files ##

  * http://code.google.com/p/jquery-utils/source/browse/trunk/build.yml
  * http://code.google.com/p/jquery-utils/source/browse/trunk/standalone/ui-timepickr/build.yml