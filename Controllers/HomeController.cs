using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GridInExtJS.Models;
using Newtonsoft.Json;

namespace GridInExtJS.Controllers
{
    public class HomeController : Controller
    {
        BookRepository books = new BookRepository();
        //Returns default view that sets up ExtJS 4 MVC app
        public ActionResult Index()
        {
            var list = books.FindAllBookEntitys().ToList();
            //var list = new List<BookModel>();

            ////add the mockup data to display in the grid
            //list.Add(new BookModel() { Id = 1, Author = "Толстой" });
            //list.Add(new BookModel() { Id = 2, Author = "Тургенев" });

            //push the data on to the ViewBag.
            ViewBag.data = JsonConvert.SerializeObject(list);
            return View();
        }

        
    }
}
