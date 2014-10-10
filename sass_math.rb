require 'sass'

module Sass::Script::Functions

  module CustomMath

    def pi()
      Sass::Script::Number.new(Math::PI)
    end
    Sass::Script::Functions.declare :pi, []

    def sin(number)
      trig(:sin, number)
    end
    Sass::Script::Functions.declare :sin, [:number]

    def cos(number)
      trig(:cos, number)
    end
    Sass::Script::Functions.declare :cos, [:number]

    def tan(number)
      trig(:tan, number)
    end
    Sass::Script::Functions.declare :tan, [:number]

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
