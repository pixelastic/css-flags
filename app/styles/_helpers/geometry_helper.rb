require 'sass'
module Sass::Script::Functions
  module GeometryHelper
    # @arg number: Angle in degrees
    # @returns: Cosinus as float
    def cos(number)
      Sass::Script::Number.new(Math.cos(deg_to_rad(number.value)))
    end

    # @arg number: Cosinus as float
    # @returns: Angle in degrees
    def acos(number)
      sass_deg(rad_to_deg(Math.acos(number.value)))
    end

    # @arg number: Angle in degrees
    # @returns: Sinus as float
    def sin(number)
      Sass::Script::Number.new(Math.sin(deg_to_rad(number.value)))
    end

    # @arg number: Sin as float
    # @returns: Angle in degrees
    def asin(number)
      sass_deg(rad_to_deg(Math.asin(number.value)))
    end

    # @arg number: Angle in degrees
    # @returns: Tangent as float
    def tan(number)
      Sass::Script::Number.new(Math.tan(deg_to_rad(number.value)))
    end

    # @arg number: Tangent as float
    # @returns: Angle in degrees
    def atan(number)
      sass_deg(rad_to_deg(Math.atan(number.value)))
    end

    # @arg number: Input number
    # @returns: Square root of number
    def sqrt(number)
      Sass::Script::Number.new(Math.sqrt(number.value))
    end
    
    # Given the other two sides of a triangle, returns the hypotenuse length
    # @arg a: length of one side
    # @arg b: length of the other side
    # @returns: length of hypotenuse
    def hypotenuse(a, b)
      value = Math.sqrt(a.value * a.value + b.value * b.value)
      Sass::Script::Number.new(value, a.numerator_units, a.denominator_units)
    end

    # Sass::Script::Functions.declare :sqrt, []
    # Sass::Script::Functions.declare :cos, [:number]
    # Sass::Script::Functions.declare :sin, [:number]
    # Sass::Script::Functions.declare :tan, [:number]
    # Sass::Script::Functions.declare :acos, [:number]
    # Sass::Script::Functions.declare :asin, [:number]
    # Sass::Script::Functions.declare :atan, [:number]


    private

    # @arg value: Angle in radian
    # @returns: Angle in degrees
    def rad_to_deg(value)
      value * 180 / Math::PI
    end
    
    # @arg value: Angle in degrees
    # @returns: Angle in radian
    def deg_to_rad(value)
      value * Math::PI / 180;
    end

    # @arg value: Angle in float degrees
    # @returns: Angle in Sass degrees
    def sass_deg(value)
      Sass::Script::Number.new(value, 'deg', 'deg')
    end
  end
  include GeometryHelper
end
