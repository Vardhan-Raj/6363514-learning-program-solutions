using NUnit.Framework;
using CalcLibrary;
using System;

namespace CalcLibrary.Tests
{
    [TestFixture]
    public class SimpleCalculatorTests
    {
        private SimpleCalculator calculator;

        [SetUp]
        public void Setup()
        {
            calculator = new SimpleCalculator();
        }

        [TearDown]
        public void TearDown()
        {
            calculator = null;
        }

        [Test]
        [TestCase(2, 3, 5)]
        [TestCase(-5, 5, 0)]
        [TestCase(0, 0, 0)]
        public void Addition_ReturnsCorrectResult(double a, double b, double expected)
        {
            var result = calculator.Addition(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        [TestCase(5, 3, 2)]
        [TestCase(3, 5, -2)]
        public void Subtraction_ReturnsCorrectResult(double a, double b, double expected)
        {
            var result = calculator.Subtraction(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        [TestCase(4, 5, 20)]
        [TestCase(3, 0, 0)]
        public void Multiplication_ReturnsCorrectResult(double a, double b, double expected)
        {
            var result = calculator.Multiplication(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        [TestCase(10, 2, 5)]
        [TestCase(9, 3, 3)]
        public void Division_ReturnsCorrectResult(double a, double b, double expected)
        {
            var result = calculator.Division(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        public void Division_ByZero_ThrowsException()
        {
            var ex = Assert.Throws<ArgumentException>(() => calculator.Division(10, 0));
            Assert.That(ex.Message, Is.EqualTo("Second Parameter Can't be Zero"));
        }

        [Test]
        [Ignore("Not implemented yet")]
        public void Percentage_Calculation_ShouldBeImplementedLater()
        {
        }
    }
}