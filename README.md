# CSS Flags

## Installation

```sh
npm install
npm run serve
```

The Wikiedia list is nice to have an overview of all the flags and sort them by
type so I can do all the flags with vertical stripes first, etc. CRW Flags gives
a few historical information, but Vexilla Mundi gives construction sheets
instructions which is highly valuable. For the colors, I either use the ones
defined on the Wikipedia page (if any), otherwise I take the one in the SVG of
the Wikipedia article.

The colors from CRW Flags are too bright, and those of Vexila Mundi are in
pantone and my pantone2hex converter does not always gives nice results.

I use Icomoon to add custom SVG to my Symbols font. I search on the UTF8
database to get the correct unicode (if any), and then find a SVG in
thenounproject, crop it so it exactly fits the canvas in icomoon and add it to
the page.

## Sources

- [Wikipedia list of countries with national flags][1]
- [ISO 3166 list of countries][2]
- [RGB/HEXA/PANTONE Converter][3]
- [Vexilla Mundi][4]
- [CRW Flags][5]
- [Icomoon App][6]


[1]: http://en.wikipedia.org/wiki/List_of_countries_by_style_of_national_flags
[2]: https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.json
[3]: http://rgb.to/
[4]: http://www.vexilla-mundi.com/
[5]: http://www.crwflags.com/fotw/flags/country.html
[6]: https://icomoon.io/app/#/select
