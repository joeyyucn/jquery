using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Diagnostics;
namespace testWait
{
    class Program
    {
        public static async Task testFunc()
        {
            var watch = Stopwatch.StartNew();
            Task t1 = Task.Run(() =>
            {
                for (int i = 0; i < 10; i++)
                {
                    Thread.Sleep(2000);
                    Console.WriteLine("Task 1 is running loop {0}", i);
                }
                Console.WriteLine("task 1 finished");
            });

            Task t2 = Task.Run(() =>
            {
                for (int i = 0; i < 10; i++)
                {
                    Thread.Sleep(400);
                    Console.WriteLine("Task 2 is running loop {0}", i);
                }
                return ("task 2 finished");
            });

            await t1;
            await t2;
            watch.Stop();
            Console.WriteLine("Run time: {0}", watch.Elapsed);
        }
        static void Main(string[] args)
        {
            Program.testFunc().Wait();
        }
    }
}
