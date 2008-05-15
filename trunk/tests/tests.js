// unsigned -> positive only
// http://svn.python.org/projects/python/trunk/Lib/test/test_format.py

String.prototype.repeat = function(l) { return (new Array(l||1)).join(this)  };

function test_format(a) {
    expect(a.length);
    $(a).each(function(){ equals($.format(this[0], this[1]), this[2], this[3]); });
}

module('jquery.strings.js');
test('Format - basic string replacement', function() {
    test_format([
        ['{a}bc',       {a:'A'},     'Abc',       'Single character replacement (start)'],
        ['a{b}c',       {b:'B'},     'aBc',       'Single character replacement (middle)'],
        ['ab{c}',       {c:'C'},     'abC',       'Single character replacement (end)'],
        ['{abc}defghi', {abc:'ABC'}, 'ABCdefghi', 'Multiple character replacement (start)'],
        ['abc{def}ghi', {def:'DEF'}, 'abcDEFghi', 'Multiple character replacement (middle)'],
        ['abcdef{ghi}', {ghi:'GHI'}, 'abcdefGHI', 'Multiple character replacement (end)']
    ]);
    // TODO: escapinng
});

test('Format - DECIMAL (d)', function() {
    test_format([
        ['{a:d}',       {a:10.5},  '10',     '10.5 -> 10 (float to decimal)'],
        ['{a:d}',       {a:-10.5}, '-10',    '-10.5 -> -10 (negative float to negative decimal)'],
        ['{a:d}',       {a:-10},   '-10',    '-10 -> -10 (signed)'],
        ['a{a:03d}b',   {a:1},     'a001b',  '1 -> 001 (Zero padding)']
    ]);
});

test('Format - DECIMAL (i)', function() {
    test_format([
        ['{a:i}', {a:10.5},  '10',     '10.5 -> 10 (float to decimal)'],
        ['{a:i}', {a:-10.5}, '-10',    '-10.5 -> -10 (negative float to negative decimal)'],
        ['{a:d}', {a:-10},   '-10',    '-10 -> -10 (unsigned decimal)'],
        ['a{a:03i}b', {a:1}, 'a001b',  '1 -> 001 (Zero padding)']
    ]);
});

test("Format - OCTAL (o) ", function() {
    test_format([
        ['{a:o}', {a:0377}, '377', '0377 -> 377'],
        ['{a:o}', {a:377},  '571', '377 -> 571'],
        ['{a:o}', {a:255},  '377', '255 -> 377'],
        ['{a:o}', {a:0255}, '255', '0255 -> 255']
    ]);
});

test("Format - UNSIGNED INT (u)", function() {
    test_format([
        ['{a:u}', {a:10},    '10', '10 -> 10 (Integer to Unsigned Integer)'],
        ['{a:u}', {a:-10},   '10', '-10 -> 10 (Integer to Unsigned Integer)'],
        ['{a:u}', {a:10.5},  '10', '10.5 -> 10 (Float to Unsigned Integer)'],
        ['{a:u}', {a:-10.5}, '10', '-10.5 -> 10 (Float to Unsigned Integer)']
    ]);
});

test("Format - UNSIGNED HEXADECIMAL (x)", function() {
    test_format([
        ['{a:x}', {a:75}, '4b', '75 -> 4b (Signed integer to hexadecimal)'],
        ['{a:x}', {a:0},  '0',  '0 -> 0']
    ]);
});

test("Format - UNSIGNED UPPER CASE HEXADECIMAL (X)", function() {
    test_format([
        ['{a:X}', {a:75}, '4B',    '75 -> 4B (Signed integer to hexadecimal)'],
        ['{a:X}', {a:0},  '0',  '0 -> 0']
    ]);
});

test("Format - FLOATING POINT DECIMAL (f|F)", function() {
    expect(3);
    ok($.format('{a:f}', {a:1.0}).toString().length == '1.000000'.length,   '1.0 -> 1.000000 (default precision (6))');
    ok($.format('{a:.2f}', {a:1}).toString().length == '1.00'.length,       'Unsigned decimal to float');
    ok($.format('{a:05.2f}', {a:1}).toString().length == '02.00'.length,    'Unsigned decimal to float with zero padding');
});

test("Format - SINGLE CHARACTER (c)", function() {
    test_format([
        ['{a:c}', {a:'abc'},    'a', 'abc -> a'],
        ['{a:c}', {a:'~@abc'},  'a', '~@abc -> a'],
        ['{a:c}', {a:'123'},    '1', '123 -> 1'],
        ['{a:c}', {a:'~@123'},  '1', '~@123 -> 1']
    ]);
});

test("Format - STRING (s)", function() {
    test_format([
        ['{a:s}', {a:[1,2,3]}, '123',    '[1,2,3] -> 123 (Array to string)']
    ]);
});

test("Format - flag: Alternate form (#)", function() {
    test_format([
        ['a{a:#7d}b',  {a:1}, 'a      1b',    'Alternate form padding (string)'],
        ['a{a:0#8d}b', {a:1}, 'a00000001b',   'Alternate form padding with zero (1)'],
        ['a{a:#09d}b', {a:1}, 'a000000001b',  'Alternate form padding with zero (2)'],
        // octal
        ['a{a:#o}b',   {a:1}, 'a01b',         'Alternate form octal padding with zero (1)'],
        ['a{a:#5o}b',  {a:1}, 'a   01b',      'Alternate form octal padding with zero and string (2)'],
        ['a{a:0#5o}b', {a:1}, 'a00001b',      'Alternate form octal padding with zero and string (3)'],
        ['a{a:#05o}b', {a:1}, 'a00001b',      'Alternate form octal padding with zero and string (4)'],
        // hexadecimal
        ['{a:#x}',     {a:0}, '0x0',          'Alternate form hexadecimal (lower) padding with zero (1)'],
        ['{a:#X}',     {a:0}, '0X0',          'Alternate form hexadecimal (upper) padding with zero (2)']
    ]);
});
test("Format - tests from python format_tests.py", function() {
    expect(5);
    equals($.format('{a:.1d}', {a:1}), '1', '.1d -> 1');
//  equals($.format('{a:.*d}', [Number.MAX_VALUE, 1]), '1', '.1d -> 1'); // expect overflow
    equals($.format('{a:.100d}', {a:1}), '0'.repeat(100)+'1', '.100d');
    equals($.format('{a:#.117x}', {a:1}), '0x'+'0'.repeat(117)+'1', '#.117x');
    equals($.format('{a:#.118x}', {a:1}), '0x'+'0'.repeat(118)+'1', '#.118x');

    ok($.format('{a:f}', {a:1.0}).toString().length == '1.000000'.length,   'f: 1.0 -> 1.000000 (default precision (6))');

});