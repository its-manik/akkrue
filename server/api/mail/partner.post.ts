import nodemailer from 'nodemailer';
import validator from 'validator';
const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
	host: config.mailHost,
	port: config.mailPort,
	auth: {
		user: config.mailUser,
		pass: config.mailPassword,
	},
});

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);

		if (body.address) {
			return 'sweet sent!'
		}

		await isValid(body)
			.then(async (data) => {
        // console.log('data: ', data);
        const message = `
          <h1>New Partner Request</h1>
          <p>Name: ${data.firstname} ${data.lastname}</p>
          <p>E-Mail: ${data.email}</p>
          <p>Company: ${data.company}</p>
          <p>&nbsp;</p>
          <p><strong>Message:</strong></p>
					<p>${data.message}</p>
          `;
				const mail = await transporter.sendMail({
					from: 'no-reply@dce-academy.com',
					replyTo: `"${data.firstname} ${data.lastname}" <${data.email}>`,
					to: config.mailTo,
					subject: 'Akkrue: New Partner Request',
					text: message,
					html: message,
				});

				console.log('Message sent: %s', mail.messageId);
				console.log('Preview URL: %s', nodemailer.getTestMessageUrl(mail));
				return Promise.resolve();
			})
			.catch((errors) => {
				return Promise.reject(errors);
			});

		return 'sent!';
	} catch (error) {
		console.log('Error: ', error);
		  // if(!data) {
    throw createError({
      status: 404,
      statusMessage: 'Could not send support request'
    })
		// sendError(event, createError({ statusCode: 400, statusMessage: error }));
	}
});

async function isValid(body) {
	const errors = [];

	if (validator.isEmpty(body.firstname || ''))
		errors.push({ field: 'firstname', error: 'Field is required.' });
  if (validator.isEmpty(body.lastname || ''))
		errors.push({ field: 'lastname', error: 'Field is required.' });
  if (validator.isEmpty(body.email || ''))
		errors.push({ field: 'email', error: 'Field is required.' });
  if (validator.isEmpty(body.company || ''))
		errors.push({ field: 'company', error: 'Field is required.' });

	if (errors.length > 0) {
		return Promise.reject(errors);
	} else {
		return Promise.resolve({
      firstname: validator.escape(body.firstname),
      lastname: validator.escape(body.lastname),
      email: validator.normalizeEmail(body.email),
      company: validator.escape(body.company),
      message: validator.escape(body.message),
		});
	}
}