using System;

namespace ECommerceSearchOptimization
{
    class Program
    {
        static void Main(string[] args)
        {
            Product[] products = new Product[]
            {
                new Product(105, "Bluetooth Speaker", "Electronics"),
                new Product(101, "Running Shoes", "Footwear"),
                new Product(108, "Laptop", "Electronics"),
                new Product(103, "Notebook", "Stationery"),
                new Product(102, "Backpack", "Accessories"),
                new Product(107, "Smartphone", "Electronics"),
            };

            Console.WriteLine("Original Product List:");
            foreach (var product in products)
                Console.WriteLine(product);

            // Linear Search Technique
            Console.WriteLine("\nLinear Search for ProductId 107:");
            Product? linearResult = SearchEngine.LinearSearch(products, 107);
            Console.WriteLine(linearResult != null ? $"Found: {linearResult}" : "Not Found");

            // Sorting for Binary Search
            Array.Sort(products);

            Console.WriteLine("\nSorted Product List (for Binary Search):");
            foreach (var product in products)
                Console.WriteLine(product);

            // Binary Search Tecghnique
            Console.WriteLine("\nBinary Search for ProductId 107:");
            Product? binaryResult = SearchEngine.BinarySearch(products, 107);
            Console.WriteLine(binaryResult != null ? $"Found: {binaryResult}" : "Not Found");

            // Time Complexity Comparison
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine("\nTime Complexity Comparison:");
            Console.ResetColor();

            Console.WriteLine("- Linear Search: O(n) → Scans each element.");
            Console.WriteLine("- Binary Search: O(log n) → Splits the array into halves.");
            Console.WriteLine("\nBinary Search is more efficient for large datasets (sorted), while Linear Search works for small or unsorted arrays.");
        }
    }
}