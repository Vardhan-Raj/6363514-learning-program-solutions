using System;
using System.Collections.Generic;

namespace FinancialForecasting
{
    class Program
    {
        static void Main(string[] args)
        {
            double initialAmount = 10000;  // ₹10,000, for a while kuch bhi le liya
            double annualGrowthRate = 0.07;  // 7% growth, suppose that
            int years = 10;

            Console.WriteLine($"Predicting future value for ₹{initialAmount} at {annualGrowthRate * 100}% annual growth for {years} years...");

            double recursiveValue = ForecastRecursive(initialAmount, annualGrowthRate, years);
            Console.WriteLine($"\nRecursive Prediction: ₹{recursiveValue:F2}");

            var memo = new Dictionary<int, double>();
            double optimizedValue = ForecastRecursiveMemo(initialAmount, annualGrowthRate, years, memo);
            Console.WriteLine($"Optimized Recursive (Memoized) Prediction: ₹{optimizedValue:F2}");

            double iterativeValue = ForecastIterative(initialAmount, annualGrowthRate, years);
            Console.WriteLine($"Iterative Prediction: ₹{iterativeValue:F2}");
        }

        // Recursive Method
        static double ForecastRecursive(double amount, double rate, int years)
        {
            if (years == 0)
                return amount;

            return (1 + rate) * ForecastRecursive(amount, rate, years - 1);
        }

        // Recursive with Memoization (to avoid repeated work)
        static double ForecastRecursiveMemo(double amount, double rate, int years, Dictionary<int, double> memo)
        {
            if (years == 0)
                return amount;

            if (memo.ContainsKey(years))
                return memo[years];

            memo[years] = (1 + rate) * ForecastRecursiveMemo(amount, rate, years - 1, memo);
            return memo[years];
        }

        // Iterative Alternative for comparison
        static double ForecastIterative(double amount, double rate, int years)
        {
            double result = amount;
            for (int i = 0; i < years; i++)
                result *= (1 + rate);

            return result;
        }
    }
}
