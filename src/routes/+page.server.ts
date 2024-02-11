



/* import { sql } from "@vercel/postgres";


async function seed() {
    const createTable = await sql`
    CREATE TABLE IF NOT EXISTS users (
        "id" serial NOT NULL,
        "name" varchar(35) NOT NULL,
        "full_name" varchar(65) NOT NULL,
        "password" varchar(30) NOT NULL,
        "email" varchar(35) NOT NULL,
        CONSTRAINT "users_pk" PRIMARY KEY ("id")
    ) WITH (
      OIDS=FALSE
    );
    `;
    console.log("created DB");

    const users = await Promise.all([
        sql`
        INSERT INTO users (name, full_name, password, email)
        VALUES ('admin', 'admin of the system', 'admin123', 'admin@risinginfra.nl')
        `,
        sql`
        INSERT INTO users (name, full_name, password, email)
        VALUES ('test1', 'test account', 'test123', 'test@risinginfra.nl')
        `,
        sql`
        INSERT INTO users (name, full_name, password, email)
        VALUES ('alpha', 'alpha of the system', 'alpha123', 'alpha@risinginfra.nl')
        `
    ]);
    console.log(`Seeded ${users.length} users`);

    return {
        createTable,
        users
    };
}

export async function load() {
  
    const startTime = Date.now();
  
    try {
        const { rows: users } = await sql`SELECT * FROM users`;
        const duration = Date.now() - startTime;
        
        return {
            users: users,
            duration: duration - startTime
    };
  } catch (error) {
    if (error?.message === `relation users does not exist`) {
        console.log("Table does not exist");

        await seed();
        const { rows: users } = await sql`SELECT * FROM users`;
        const duration = Date.now() - startTime;
        return {
            users: users,
            duration: duration
        };
    } else {
        throw error;
    }
  }
}
 */