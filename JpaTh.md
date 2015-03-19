# jquery.jpath.js #

| **Author** | Copyright (c) 2008 Maxime Haineault ([haineault.com](http://haineault.com)) |
|:-----------|:----------------------------------------------------------------------------|
| **License** | [MIT License](http://www.opensource.org/licenses/mit-license.php) |

Inspired by xPath and jQuery selectors, jPath is an experimental plugin to allow easy browsing of JavaScript object, namely JSON objects. The goal is make it easy to pull/compare/search data from these object. Here's a simple example of how it's supposed to work.

## Example ##

```

// .. some ajax call get a JSON object called "res"

// the conventional way to digg for data
if (res && res.employee && res.employee.name == 'Max') {
    alert(res.employee.name);
}

// with jpath
if ($(res).jpath('employee.name:is(Max)')) {
    alert($(res).jpath('employee.name');
}

```

Furthermore, in the above example the conventional way assume that employee.name is defined. But if the server returns a JSON object and the name isn't defined the script will throw an error. jPath will simply return false if either employee or name isn't defined, making it a bit more reliable.

## Basic usage ##

```

var obj = {
    a: {
        b: 'yay', 
        c:[1,2,3]
    }
}

$(obj).jpath('a.b');           // return "yay" 
$(obj).jpath('a.b:match(ya)'); // return "true"
$(obj).jpath('a.c');           // returns [1,2,3]
$(obj).jpath('a.c:eq(2)');     // returns "3"

```

## $.jpath.expr ##

| **expr** | **description** |
|:---------|:----------------|
| **:contains(value)** | Returns true if the object's contains value |
| **:first** | Returns the first element of an object |
| **:last** | Returns the last element of an object |
| **:eq(N)** | Returns the Nth element of an array or the N proprety of an array |
| **:is(str)** | Returns true if the object's value == str |
| **:match(str)** | Returns true if the object's value match str |