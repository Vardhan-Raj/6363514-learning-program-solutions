using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

// doing all the labs from 4 to 7 in a single file for simplicity and clean look

class Program
{
    static async Task Main()
    {
        using var context = new AppDbContext();

        // LAB 4: Insert initial data (run only once or comment after first run)
        if (!await context.Products.AnyAsync())
        {
            var electronics = new Category { Name = "Electronics" };
            var groceries = new Category { Name = "Groceries" };

            await context.Categories.AddRangeAsync(electronics, groceries);

            var product1 = new Product { Name = "Laptop", Price = 75000, Category = electronics };
            var product2 = new Product { Name = "Rice Bag", Price = 1200, Category = groceries };

            await context.Products.AddRangeAsync(product1, product2);
            await context.SaveChangesAsync();

            Console.WriteLine(" Lab 4: Data inserted.\n");
        }

        // LAB 5: Retrieve data
        Console.WriteLine(" Lab 5: All Products");
        var products = await context.Products.ToListAsync();
        foreach (var p in products)
            Console.WriteLine($"{p.Name} - ₹{p.Price}");

        var productById = await context.Products.FindAsync(1);
        Console.WriteLine($"\n Found by ID 1: {productById?.Name}");

        var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
        Console.WriteLine($"First expensive product (> ₹50000): {expensive?.Name}");

        // LAB 6: Update and Delete
        Console.WriteLine("\n Lab 6: Updating and Deleting..........");

        var laptop = await context.Products.FirstOrDefaultAsync(p => p.Name == "Laptop");
        if (laptop != null)
        {
            laptop.Price = 70000;
            await context.SaveChangesAsync();
            Console.WriteLine(" Updated 'Laptop' price to ₹70000");
        }

        var riceBag = await context.Products.FirstOrDefaultAsync(p => p.Name == "Rice Bag");
        if (riceBag != null)
        {
            context.Products.Remove(riceBag);
            await context.SaveChangesAsync();
            Console.WriteLine(" Deleted 'Rice Bag'");
        }

        // LAB 7: LINQ Queries
        Console.WriteLine("\n Lab 7: LINQ Queries");

        var filteredSorted = await context.Products
            .Where(p => p.Price > 1000)
            .OrderByDescending(p => p.Price)
            .ToListAsync();

        Console.WriteLine("\n Filtered & Sorted Products (Price > 1000):");
        foreach (var p in filteredSorted)
            Console.WriteLine($"{p.Name} - ₹{p.Price}");

        var productDTOs = await context.Products
            .Select(p => new { p.Name, p.Price })
            .ToListAsync();

        Console.WriteLine("\n Product DTOs:");
        foreach (var dto in productDTOs)
            Console.WriteLine($"{dto.Name} - ₹{dto.Price}");
    }
}