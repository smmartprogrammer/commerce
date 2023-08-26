import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  pgTable,
  varchar,
  integer,
  serial,
} from 'drizzle-orm/pg-core';
import { data } from 'autoprefixer';
 
// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);


// Create a pgTable that maps to a table in your DB
export const cartColumns = pgTable("cartdata", {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id").notNull(),
    product_id: varchar("product_id").notNull(),
    product_title: varchar("product_title").notNull(),
    image_url: varchar("image_url").notNull(),
    product_price: integer("product_price").notNull(),
    product_quantity: integer("product_quantity").notNull(),

}
);
 
// ALTER TABLE cartdata
// ADD CONSTRAINT UNIQUENESS UNIQUE (
//         product_title
// )