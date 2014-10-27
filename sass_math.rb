require 'sass'

module Sass::Script::Functions

  module CustomMath

    def deg(number)
      Sass::Script::Number.new(number.value * 180 / Math::PI);
    end
    Sass::Script::Functions.declare :deg, [:number]

    def rad(number)
      Sass::Script::Number.new(number.value * Math::PI / 180);
    end
    Sass::Script::Functions.declare :rad, [:number]

    def sqrt(number)
      Sass::Script::Number.new(Math.sqrt(number.value))
    end
    Sass::Script::Functions.declare :sqrt, []

    def pi()
      Sass::Script::Number.new(Math::PI)
    end
    Sass::Script::Functions.declare :pi, []

    def sin(number)
      trig(:sin, number)
    end
    Sass::Script::Functions.declare :sin, [:number]

    def asin(number)
      trig(:asin, number)
    end
    Sass::Script::Functions.declare :asin, [:number]

    def cos(number)
      trig(:cos, number)
    end
    Sass::Script::Functions.declare :cos, [:number]

    def acos(number)
      trig(:acos, number)
    end
    Sass::Script::Functions.declare :acos, [:number]

    def tan(number)
      trig(:tan, number)
    end
    Sass::Script::Functions.declare :tan, [:number]

    def atan(number)
      trig(:atan, number)
    end
    Sass::Script::Functions.declare :atan, [:number]


    private

    def trig(operation, number)
      if number.numerator_units == ['deg'] && number.denominator_units == []
        Sass::Script::Number.new(Math.send(operation, Math::PI * number.value / 180))
      else
        Sass::Script::Number.new(Math.send(operation, number.value), number.numerator_units, number.denominator_units)
      end
    end

  end

  include CustomMath

end
