using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Angular_Webapi.Models;

namespace Angular_Webapi.Context
{
    public class DatabaseInitializer: DropCreateDatabaseIfModelChanges<DatabaseContext>
    {
        protected override void Seed(DatabaseContext context)
        {
            base.Seed(context);

            context.Tasklists.Add(
                new Task
                {
                    QuoteType = "DYR",
                    DueDate = DateTime.Now.ToString(),
                    TaskType = "Follow-up",
                    Status = "open",
                    ContactName = "Chen",
                    QuoteNum = 1,
                    Customer = "Itlize",
                    Contact = "Riki"
                }
             );

            context.Tasklists.Add(
                new Task
                {
                    QuoteType = "BF",
                    DueDate = DateTime.Now.ToString(),
                    TaskType = "Follow-down",
                    Status = "close",
                    ContactName = "Ben",
                    QuoteNum = 2,
                    Customer = "Itlize",
                    Contact = "Amanda"
                }
             );

            context.SaveChanges();

        }
    }
}