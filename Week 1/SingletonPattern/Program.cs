using System;

namespace SingletonPattern
{
    class Program
    {
        static void Main(string[] args)
        {
            Logger logger1 = Logger.Instance;
            Logger logger2 = Logger.Instance;

            logger1.Log("First message.");
            logger2.Log("Second message.");

            Console.WriteLine(Object.ReferenceEquals(logger1, logger2)
                ? "Both instances are the same."
                : "Different instances exist!");
        }
    }
}
