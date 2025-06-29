using NUnit.Framework;
using CalcLibrary;

namespace CalcTests
{
    [TestFixture]
    public class CalculatorTests
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
            // Optional cleanup
        }

        [Test]
        [TestCase(2, 3, 5)]
        [TestCase(-1, 1, 0)]
        public void Add_ShouldReturnCorrectSum(int a, int b, int expected)
        {
            Assert.That(calculator.Addition(a, b), Is.EqualTo(expected));
        }
    }
}