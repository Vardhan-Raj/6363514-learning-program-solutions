using System;

namespace SingletonPattern
{
    public sealed class Logger
    {
        private static readonly Lazy<Logger> instance = new Lazy<Logger>(() => new Logger());

        // Private constructor
        private Logger()
        {
            Console.WriteLine("Logger initialized.");
        }

        public static Logger Instance => instance.Value;

        public void Log(string message)
        {
            Console.WriteLine($"[LOG]: {message}");
        }
    }
}
