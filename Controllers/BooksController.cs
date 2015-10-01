using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GridInExtJS.Models;
using Newtonsoft.Json;
using System.Collections;

namespace GridInExtJS.Controllers
{
    public class BooksController : Controller
    {
        BookRepository books = new BookRepository();
        //public ActionResult Index()
        //{
        //    var list = new List<BookModel>();

        //    //add the mockup data to display in the grid
        //    list.Add(new BookModel() {  Id=1, Author="Толстой"});
        //    list.Add(new BookModel() { Id=2, Author="" });

        //    //push the data on to the ViewBag.
        //    ViewBag.data = JsonConvert.SerializeObject(list);

        //    return View();
        //}
        [HttpGet]
        //[ActionName("Index")]
        public JsonResult Load(int? id)
        {

            try
            {
                if (null != id)
                {
                    BookEntity book = books.GetBookEntity((int)id);
                    return this.Json(new { success = true, data = book }, JsonRequestBehavior.AllowGet);
                }
                //int start =Convert.ToInt32( this.HttpContext.Request.Params["page"]) * Convert.ToInt32(this.HttpContext.Request.Params["limit"]);
                var list = books.FindRangeBookEntitys(Convert.ToInt32(this.HttpContext.Request.Params["start"]), Convert.ToInt32(this.HttpContext.Request.Params["limit"]));
                //var list = books.FindAllBookEntitys();
                var t = books.FindAllBookEntitys().Count();
                return this.Json(new { data = list, total = t }, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                return this.Json(new { success = false, data = "" }, JsonRequestBehavior.AllowGet);
            }


        }
        //PUT /BookEntitys/Index/id
        [HttpPut]
        //[ActionName("Update")]
        public JsonResult Update(BookModel BookEntity)
        {

            try
            {
                if (BookEntity.Id == 0)       
                    return Create(new BookEntity { Name = BookEntity.Name, Author = BookEntity.Author });                
                BookEntity dbBookEntity = books.GetBookEntity(BookEntity.Id);
                //dbBookEntity.Id = BookEntity.Id;


                dbBookEntity.Author = BookEntity.Author;
                dbBookEntity.Name = BookEntity.Name;
                books.Save();
                return this.Json(new { success = true, data = BookEntity }, JsonRequestBehavior.DenyGet);
            }
            catch
            {
                return this.Json(new { success = false, data = "" }, JsonRequestBehavior.DenyGet);
            }

        }


        //POST /BookEntitys/Index/BookEntity
        [HttpPost]
        //[ActionName("Index")]
        public JsonResult Create(BookEntity BookEntity)
        {
            Response.BufferOutput = true;
            try
            {
                var list = books.FindAllBookEntitys().ToList();
                if ((list.Where(x => x.Name == BookEntity.Name && x.Author == BookEntity.Author).SingleOrDefault() != null)||(BookEntity.Name==null && BookEntity.Author==null))
                {
                    return this.Json(new { success = true, data = "" }, JsonRequestBehavior.DenyGet);
                }
                //BookEntity book = books.GetBookEntity((int)id);
                books.Create(BookEntity);
                books.Save();
                //Created
                Response.StatusCode = 201;
                //Set Location header to absolute path of entity.
                Response.AddHeader("LOCATION", Request.Url.AbsoluteUri);
                return this.Json(new { success = true, data = BookEntity }, JsonRequestBehavior.DenyGet);

            }
            catch
            {
                return this.Json(new { success = false }, JsonRequestBehavior.DenyGet);

            }

        }


        //DELETE /BookEntitys/Index/id
        [HttpDelete]
        //[ActionName("Index")]
        public JsonResult Delete(int id)
        {

            try
            {

                BookEntity BookEntity = books.GetBookEntity(id);
                books.Delete(BookEntity);
                books.Save();
                //200 OK...could be 204 No Content if no status describing entity in response.
                //Response.StatusCode = 204;
                return this.Json(new { success = true });
            }
            catch
            {
                return this.Json(new { success = false });
            }

        }
    }
}