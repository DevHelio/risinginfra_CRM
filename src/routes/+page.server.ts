import { sql } from '@vercel/postgres';
import { redirect } from '@sveltejs/kit'; //wordt nog gebruikt

export const actions = {
    default: async ({request}) => {
        //Alle data processeren dat binnenstroomt van de form
        const loginData = await request.formData();
        const email:string =  String(loginData.get('email')).toLowerCase().trim(); //lowercase en trim is nodig voor emails (komen ze cleaner uit, minder errors)
        const password:string =  String(loginData.get('password'));

        // try catch, catch moet uitgebreider worden 12/2/2024
        try {
            console.log(email);
            const result = await sql`
            SELECT password FROM users WHERE email = ${email};
            `;

            if (password === '') {
                console.log("Wrong password, please try again")
            }
            else if (password === result.rows[0].password) {
                    console.log("SUCCESFULLY LOGED IN");
                    // Redirect should step here
                    
            } else if (result.rowCount === 0) {
                console.log("Email not found, check for typos!");
            } else {
                console.log("Wrong password, please try again");
            }
            
        } catch (err) {
            console.log(err);
        }
    }
}