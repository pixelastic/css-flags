# CSS Flags

Recreating all the flags of the nations of the world in pure CSS, using only one
`div` per flag.

You can see it live on [https://pixelastic.github.io/css-flags/]()

This side-project has no real-world application, it was just an exercice to push
the boundaries of what I know about CSS. Trying to use the language to do things
it wasn't meant to do in the first place teached me a lot about the language.

## Running the project locally

```sh
npm install
npm run serve
```

The website will then be available on http://localhost:4001/.

## Contributing

If you've spotted an issue with the rendering of a specific flag or if you know
how to do one of the missing flags, I'm open to pull requests.

## Compatibility

I've only tested the rendering on Chrome and Safari so far. I plan on making it
cross-browser but I need to add visual non-regression testing first.

## Sources

To create the flags, my three most important sources were the [Wikipedia][1],
[CRWFlags][2] and [Vexilla Mundi][3]. CRWFlags contains valuable information
about every flag history, allowing me to better understand how they were
constructed. Vexilla Mundi contains handy construction sheet images with
dimensions and angles.

I also used [this list][4] to get the list of all countries with their three
letter ISO code.)

Not all flags have an exact definition of the colors to use. Best case scenario,
we have the official RGB/Hexa (or even Pantone) name of the color. Worst case,
we have nothing and have to use the color used on the Wikipedia or Vexilla
Mundi, even if it is not the official one.

## Icons

To be able to display some of the very specific symbols used on some flags,
I had to craft my own icon font, using [icomoon.io][5].

I had to find svg versions of all the symbols used. Sometimes the symbols
already exists in the UTF8 table, so I just have to grab them from existing
fonts (or use [utf8icons.com][6]).

But more often, I had to use Vexilla Mundi. The website provides nice png images
of all the symbols. Unfortunatly, the symbols they provide are already colored,
and I needed them black to use in the font so I was able to define the color
myself.

The following script will do exactly that:

```
convert input.png \
        -alpha off \
        -fill black \
        -colorize 100 \
        -alpha on \
        output.png
```

I then had to trim the image to remove any whitespace left around the symbol:

```
convert input.png -trim output.png
```

Then, I need to convert the png to an svg. I couldn't find any commandline tool
giving satisfying results, so I had to use an online service to do it:
[online-convert.com][7]

Once I got the svg, it is just a matter of uploading it to icomoon, center the
symbol, scale it and adjust the border. I also used the reserved namespace in
the UTF8 table for custom characters. And finally exported the font.

## Sibling projects

Here are two others projects I did while working on CSS Flags.

### img2css

[http://github.com/pixelastic/img2css/]()

Commanline tool to convert any image (jpg or png) to full CSS. This will
replicate all pixels of the initial image using numerous `box-shadows`.

This works wel but results in really heavy generated CSS (several MB), so
I choose not to use it in this project.

### pantone2hex

[http://github.com/pixelastic/pantone2hex/]() 

Commandline tool to get an approximation in hexadecimal of a Pantone color
value. Really useful as Vexilla Mundi gives color values in Pantone.

## Tips and tricks

Here is an incomplete list of the tricks I had to use:

### Invisible text-shadow

I sometimes put an invisible symbol in an `after` or `before` element (through
`color: transparent`) and positionned it at `top:0; left: 0`.

Then I added several `text-shadow` to it, with a full color. Doing so helped in
getting the coordinates right because everything is then relative to the origin
`0,0`.

### first-letter / first-line

When I needed to add more than 1 symbol in an `after`/`before`, or if I needed
the same symbol, but on different sizes, I had to be sneaky.

By setting a `content` of `"XY\AZ"` and then using both `first-letter` and
`first-line`, I was able to independently target `X`, `Y` and `Z`. `\A` is the
special character to add a new line in a `content`.

Doing so let me use three different symbols, with different color and sizes with
only one pseudo-element.

It is impossible to apply any `transform` (like a rotation) on those elements,
though.

## TODO

This project is not over, there are still some elements that I would like to
add:

- Link to codepen to let users play with the code
- Making it work on more browsers...
- ...which implies that I need to add a visual testing framework on top if it
- Adding the missings flags


[1]: http://en.wikipedia.org/wiki/List_of_countries_by_style_of_national_flags
[2]: http://www.crwflags.com/fotw/flags/country.html
[3]: http://www.vexilla-mundi.com/
[4]: https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.json
[5]: http://icomoon.io/app
[6]: http://www.utf8icons.com/
[7]: http://image.online-convert.com/convert-to-svg
