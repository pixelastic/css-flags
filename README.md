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
- [png2svg converter][7]

## Getting SVG icons for flags

1. Find the wikipedia svg flag
2. Download id
3. Remove all the background parts to only keep the symbol
4. Change its color to #000;
5. Convert it to png using svg2png
6. Crop the whitespace (convert file.png -trim file-output.png)
7. Edit in editor if need be
8. Convert online back to svg
9. Run svgo on the file
10. Add it to icomoon
11. Center it in one cell of the grid
12. Export the font

## Techniques

### Invisible text-shadow

Putting a text in a before/after with a transparent color, so we can put it
anywhere. Then use text-shadow to duplicate the element and position it
anywhere, even being able to change its color.

### first-letter / first-line

By adding three symbols on two lines in a `content` and then carefully dealing
with the first-letter/first-line, we can target all three elements individually.
Each can have its own color/size and can text be text-shadowed to be placed
anywhere.

Is is not possible to apply any rotation to those element, though.

## TODO

- Add autoprefixer (we have -webkit-clip-path)
- Add CasperCSS?


[1]: http://en.wikipedia.org/wiki/List_of_countries_by_style_of_national_flags
[2]: https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.json
[3]: http://rgb.to/
[4]: http://www.vexilla-mundi.com/
[5]: http://www.crwflags.com/fotw/flags/country.html
[6]: https://icomoon.io/app/#/select
[7]: http://image.online-convert.com/convert-to-svg
