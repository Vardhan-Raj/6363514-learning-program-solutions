namespace ECommerceSearchOptimization
{
    public class Product : IComparable<Product>
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Category { get; set; }

        public Product(int id, string name, string category)
        {
            ProductId = id;
            ProductName = name;
            Category = category;
        }

        public int CompareTo(Product? other)
        {
            if (other == null)
                return 1;
            return ProductId.CompareTo(other.ProductId);
        }

        public override string ToString()
        {
            return $"{ProductId}: {ProductName} [{Category}]";
        }
    }
}
