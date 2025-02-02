<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# bunary4d

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a unary callback to elements in a [broadcasted][@stdlib/array/base/broadcast-array] nested input array and assign results to elements in a four-dimensional nested output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-base-broadcasted-unary4d
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var bunary4d = require( '@stdlib/array-base-broadcasted-unary4d' );
```

#### bunary4d( arrays, shapes, fcn )

Applies a unary callback to elements in a [broadcasted][@stdlib/array/base/broadcast-array] nested input array and assigns results to elements in a four-dimensional nested output array.

```javascript
var zeros4d = require( '@stdlib/array-base-zeros4d' );
var abs = require( '@stdlib/math-base-special-abs' );

var x = [ [ [ [ -1.0, -2.0 ] ] ] ];
var y = zeros4d( [ 1, 1, 2, 2 ] );

var shapes = [
    [ 1, 1, 1, 2 ],
    [ 1, 1, 2, 2 ]
];

// Compute the absolute values:
bunary4d( [ x, y ], shapes, abs );
// y => [ [ [ [ 1.0, 2.0 ], [ 1.0, 2.0 ] ] ] ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing one input nested array and one output nested array.
-   **shapes**: array shapes.
-   **fcn**: unary function to apply.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The input and output array shapes must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var filled4dBy = require( '@stdlib/array-base-filled4d-by' );
var zeros4d = require( '@stdlib/array-base-zeros4d' );
var abs = require( '@stdlib/math-base-special-abs' );
var bunary4d = require( '@stdlib/array-base-broadcasted-unary4d' );

var shapes = [
    [ 1, 1, 1, 3 ],
    [ 2, 3, 1, 3 ]
];

var x = filled4dBy( shapes[ 0 ], discreteUniform( -100, 100 ) );
console.log( x );

var y = zeros4d( shapes[ 1 ] );
console.log( y );

bunary4d( [ x, y ], shapes, abs );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-broadcasted-unary4d.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-broadcasted-unary4d

[test-image]: https://github.com/stdlib-js/array-base-broadcasted-unary4d/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-broadcasted-unary4d/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-broadcasted-unary4d/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-broadcasted-unary4d?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-broadcasted-unary4d.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-broadcasted-unary4d/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-broadcasted-unary4d/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-broadcasted-unary4d/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-broadcasted-unary4d/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-broadcasted-unary4d/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-broadcasted-unary4d/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-broadcasted-unary4d/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-broadcasted-unary4d/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-broadcasted-unary4d/main/LICENSE

[@stdlib/array/base/broadcast-array]: https://github.com/stdlib-js/array-base-broadcast-array

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

</section>

<!-- /.links -->
