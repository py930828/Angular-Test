using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Angular_Webapi.Context;
using System.Web.Http.Cors;
using Angular_Webapi.Models;

namespace Angular_Webapi.Controllers
{

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class DefaultController : ApiController
    {
        //Creating Instance of DatabaseContext class  
        private DatabaseContext db = new DatabaseContext();
        //Creating a method to return Json Data
       
        public IHttpActionResult Get()
        {
            try
            {
                var result = from task in db.Tasklists
                             select task;
                return Ok(result);
            }
            catch(Exception)
            {
                return InternalServerError();
            }
        }

        [HttpPost]
        public void Post(Task task)
        {
            if (task == null)
            {
            }
            else
            {
                db.Tasklists.Add(new Task()
                {
                    QuoteType = task.QuoteType,
                    DueDate = task.DueDate,
                    TaskType = task.TaskType,
                    Status = task.Status,
                    ContactName = task.ContactName,
                    QuoteNum = task.QuoteNum,
                    Customer = task.Customer,
                    Contact = task.Contact
                });

                db.SaveChanges();
            }
        }

        [HttpPut]
        public void Put( Task task )
        {
            if (task == null)
            {
            }
            else
            {
                var existingTask = (from temptask in db.Tasklists
                                    where task.QuoteID == temptask.QuoteID
                                    select temptask).FirstOrDefault();
                existingTask.QuoteNum = task.QuoteNum;
                existingTask.QuoteType = task.QuoteType;
                existingTask.Status = task.Status;
                existingTask.TaskType = task.TaskType;
                db.SaveChanges();
            }
        }
    }
}
