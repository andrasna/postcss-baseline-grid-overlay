import postcss from 'postcss';
import test    from 'ava';
import fs      from 'fs';
import path    from 'path';
import plugin  from './';

function run(t, input, output, opts = { }) {
    const testsDir = './test/',
        inputName = input,
        expectName = output,
        inputPath = path.resolve(testsDir + inputName),
        expectPath = path.resolve(testsDir + expectName),
        inputCSS = fs.readFileSync(inputPath, 'utf8'),
        expectCSS = fs.readFileSync(expectPath, 'utf8');

    return postcss([ plugin(opts) ]).process(inputCSS).then( result => {
        t.deepEqual(result.css, expectCSS);
        t.deepEqual(result.warnings().length, 0);
    });
}

test('Grid overlay with linear-gradiens.', t => {
    return run(t, 'input.css', 'expected-output.css', { });
});
