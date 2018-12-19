using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace Angular_Webapi.Models
{
    public class Task
    {
        [Key]
        public int QuoteID { get; set; }
        public string QuoteType { get; set; }
        public string DueDate { get; set; }
        public string TaskType { get; set; }
        public string Status { get; set; }
        public string ContactName { get; set; }
        public int QuoteNum { get; set; }
        public string Customer { get; set; }
        public string Contact { get; set; }
    }
}