import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  pgTable,
  integer,
  varchar,
} from 'drizzle-orm/pg-core';
 
// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
export const cartColumns = pgTable("cartData", {
    product_title: varchar("product_title").notNull(),
    product_url: varchar("product_url").notNull(),
    product_price: varchar("product_price").notNull(),
}
);
 
