/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.on('/detail').render('page/moviedesc');
Route.on('/search').render('page/search');
Route.get('/contact', async ({ view }) => {
    return view.render('page/contact')
  })
Route.get('/aboutus', async ({ view }) => {
      return view.render('page/aboutus')
    })


Route.post('search', 'SearchesController.index').as('search.movie')


Route.get('/', 'BerandaController.index')
Route.get('register', 'AuthController.registerShow').as('auth.register.show')
Route.post('register', 'AuthController.register').as('auth.register') // ++
Route.get('login', 'AuthController.loginShow').as('auth.login.show')
Route.post('login', 'AuthController.login').as('auth.login')          // ++
Route.get('logout', 'AuthController.logout').as('auth.logout')
// routes.ts
Route.post('/send-email', 'ContactsController.sendEmail')
Route.get('/movies/:id', 'MovieDescsController.show').as('movies.show')
