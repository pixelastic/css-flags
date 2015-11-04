require 'sass'

module Sass::Script::Functions

  module CustomMath

    # Hypotenuse
    def hypotenuse(a, b)
      value = Math.sqrt(a.value * a.value + b.value * b.value)
      Sass::Script::Number.new(value, a.numerator_units, a.denominator_units)
    end

    # Square root
    def sqrt(number)
      Sass::Script::Number.new(Math.sqrt(number.value))
    end
    Sass::Script::Functions.declare :sqrt, []

    # These methods will expect a value in degrees and output a float
    def cos(number)
      Sass::Script::Number.new(Math.cos(deg_to_rad(number.value)))
    end

    def sin(number)
      Sass::Script::Number.new(Math.sin(deg_to_rad(number.value)))
    end

    def tan(number)
      Sass::Script::Number.new(Math.tan(deg_to_rad(number.value)))
    end

    Sass::Script::Functions.declare :cos, [:number]
    Sass::Script::Functions.declare :sin, [:number]
    Sass::Script::Functions.declare :tan, [:number]

    # These methods will expect a float as input and will output a value in
    # degrees
    def acos(number)
      sass_deg(rad_to_deg(Math.acos(number.value)))
    end

    def asin(number)
      sass_deg(rad_to_deg(Math.asin(number.value)))
    end

    def atan(number)
      sass_deg(rad_to_deg(Math.atan(number.value)))
    end

    Sass::Script::Functions.declare :acos, [:number]
    Sass::Script::Functions.declare :asin, [:number]
    Sass::Script::Functions.declare :atan, [:number]


    private

    # Converts a value in radian to degrees
    def rad_to_deg(value)
      value * 180 / Math::PI
    end
    
    # Converts a value in degress to radian
    def deg_to_rad(value)
      value * Math::PI / 180;
    end

    # Cast a value to Sass deg
    def sass_deg(value)
      Sass::Script::Number.new(value, 'deg', 'deg')
    end

    # def pi()
    #   Sass::Script::Number.new(Math::PI)
    # end
    # Sass::Script::Functions.declare :pi, []

  end

  include CustomMath

end
