using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GridInExtJS.Models
{
    public class BookRepository
    {
        private BookEntityDataContext db = new BookEntityDataContext();
        //
        // Select All
        public IQueryable<BookEntity> FindAllBookEntitys()
        {
            return db.BookEntity;
        }
        public IList<BookEntity> FindRangeBookEntitys(int start, int limit)
        {
            //var coll = db.BookEntity.ToArray();
            //var total = coll.Length;
            //var result = new List<BookEntity>();
            //for (int i = start; (i < start + limit && i < coll.Length); i++)
            //    result.Add(coll[i]);
            return db.BookEntity.Skip(start).Take(limit).ToList();
        }

        //Select Single
        public BookEntity GetBookEntity(int id)
        {
            return db.BookEntity.SingleOrDefault(d => d.Id == id);
        }
        
        // Create
        public void Create(BookEntity BookEntity)
        {
            db.BookEntity.InsertOnSubmit(BookEntity);
        }

        //Delete
        public void Delete(BookEntity BookEntity)
        {
            db.BookEntity.DeleteOnSubmit(BookEntity);
        }
        //
        // Persistence
        public void Save()
        {
            db.SubmitChanges();
        }
    }
}