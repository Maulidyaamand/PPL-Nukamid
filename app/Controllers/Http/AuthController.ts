// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import User from "App/Models/User";

export default class AuthController {
  public async registerShow({ view }: HttpContextContract) {
    return view.render("auth/Register");
  }

  public async register({ request, response, auth }: HttpContextContract) {
    // create validation schema for expected user form data
    const userSchema = schema.create({
      name: schema.string({ trim: true }, [
        rules.unique({ table: "users", column: "name", caseInsensitive: true }),
      ]),
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.unique({
          table: "users",
          column: "email",
          caseInsensitive: true,
        }),
      ]),
      password: schema.string({}, [rules.minLength(8)]),
    });
    // get validated data by validating our userSchema
    // if validation fails the request will be automatically redirected back to the form
    const data = await request.validate({ schema: userSchema });
    // create a user record with the validated data
    const user = await User.create(data);
    // login the user using the user model record
    await auth.login(user);
    // redirect to the login page
    return response.redirect("/login");
  }
  public async loginShow({ view }: HttpContextContract) {
    return view.render("auth/login");
  }

  public async login({ request, response, auth, session }: HttpContextContract) {
    // grab email and password values from request body
    const { email, password } = request.all();

    // Get the user by email
    const user = await User.findBy("email", email);

    // Check if user exists and password matches
    if (user && user.password === password) {
      // Login successful, authenticate the user
      await auth.login(user);

      return response.redirect("/");
    } else {
      // Login failed, set flash message and redirect back to login page
      session.flash('form', 'Your username, email, or password is incorrect');
      return response.redirect().back();
    }

  }

  public async logout({ response, auth }: HttpContextContract) {
    // logout the user
    await auth.logout();
    // redirect to login page
    return response.redirect().toRoute("auth.login.show");
  }
}
