// import { Pool } from 'pg'

// export type Book = {
//   title: string
//   author: string
//   published: boolean
// }

// export type BookUpdate = {
//     title: string | undefined
//       author: string | undefined
//       published: boolean | undefined
// }

// class DBService {
//   private pool = new Pool({
//     connectionString:
//       'postgresql://neondb_owner:RdK2lGVm7PaM@ep-blue-dew-a2wobu6r.eu-central-1.aws.neon.tech/neondb?sslmode=require',
//   })

//   public async getBooks(): Promise<Book[]> {
//     const result = await this.pool.query('SELECT * FROM book')
//     return result.rows
//   }
//   public async getBookById(id: number): Promise<Book> {
//     const result = await this.pool.query('SELECT * FROM book WHERE id = $1', [id])
//     return result.rows[0]
//   }
//   public async insertBook(book: Book): Promise<void> {
//     await this.pool.query(
//       'INSERT INTO book (title, author, published) VALUES ($1, $2, $3)',
//       [book.title, book.author, String(book.published)]
//     )
//     return
//   }
//   public async updateBookById(id: number,updates: BookUpdate): Promise<Book> {
//     let query = "UPDATE book SET "
//     const keys = Object.keys(updates).filter(key => updates[key as keyof BookUpdate] !== undefined)
//     let commasNeeded = keys.length - 1
//     keys.forEach((key) => {
//         query += ` ${key} = '${updates[key as keyof BookUpdate]}'`
//         if(commasNeeded > 0) {
//             query += ","
//             commasNeeded--
//         }
//     })


//     query += ` WHERE id = ${id}`
//     console.log(query)
//     await this.pool.query(query)
//     const updatedBook = await this.getBookById(id)
//     return updatedBook
//   }
//   public async deleteBookById(id: number): Promise<void> {
//      await this.pool.query("DELETE FROM book WHERE id = $1", [id])
//      return
//   }
// }


// export default new DBService()
