using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace GridInExtJS
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
    "Default", // Route name
    "", // URL with parameters
    new { controller = "Home", action = "Index" } // Parameter defaults
);
           routes.MapRoute(
    name: "Books",
    url: "{controller}/{action}/{id}",
    defaults: new { controller = "BooksController", action = "Index", id = UrlParameter.Optional });
           routes.MapRoute(
name: "BooksUpdate",
url: "{controller}/{action}/{id}",
defaults: new { controller = "BooksController", action = "Update", id = UrlParameter.Optional });
           routes.MapRoute(
name: "BooksLoad",
url: "{controller}/{action}/{id}",
defaults: new { controller = "BooksController", action = "Load", id = UrlParameter.Optional });
           routes.MapRoute(
name: "BooksDelete",
url: "{controller}/{action}/{id}",
defaults: new { controller = "BooksController", action = "Delete", id = UrlParameter.Optional });
           routes.MapRoute(
name: "BooksCreate",
url: "{controller}/{action}/{id}",
defaults: new { controller = "BooksController", action = "Create", id = UrlParameter.Optional });
            //routes.MapRoute(
            //    name: "Default",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            //);
 
        }
    }
}