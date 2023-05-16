import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class ContactController {
  public async sendEmail({ request, response }: HttpContextContract) {
    const { name, email, isi} = request.all()

    try {
      await Mail.send((message) => {
        message
          .from(email)
          .to('shyva0503@gmail.com')
          .subject('New Contact Form Submission')
          .html(`<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${isi}</p>`)
      })

      return response.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      console.error(error)
      return response.status(500).json({ message: 'Failed to send email' })
    }
  }
}
