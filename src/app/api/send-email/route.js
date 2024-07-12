import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const POST = async (request) => {
  const body = await request.json()
  console.log(body)

  const firstName = body.firstName
  const lastName = body.lastName
  const email = body.email
  const number = body.number
  const address = body.address
  const message = body.message
  const comingFrom = body.comingFrom
  const myBusinessEmail = process.env.EMAIL
  const myBusinessEmailPassword = process.env.EMAIL_PASSWORD
  const myName = process.env.MY_NAME
  console.log(myBusinessEmail)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: myBusinessEmail,
      pass: myBusinessEmailPassword,
    },
  })
  ///////////////////////////////////////////////////////
  try {
    //lead
    await transporter.sendMail({
      from: {
        name: myName,
        email: myBusinessEmail,
      },
      to: email,
      subject: 'Thank You From Alberta Colour Painting',
      text: message,
      html: `<div>
              <p>
                Hello ${firstName}, we have you in the system, you wrote:${message}
              </p>
               <p>
               ${message} 
              </p>
               <p>
               We will get back to you shortly!
              </p>
            </div>`,
    })
    //me
    await transporter.sendMail({
      from: {
        name: `${firstName} ${lastName}`,
        email: myBusinessEmail,
      },
      to: myBusinessEmail,
      replyTo: email,
      subject: `An email has been sent ${firstName} ${lastName}`,
      text: message,
      html: `<div>
    <h4>First Name: <span style="font-weight:normal;">${firstName}</span><h4/>
      <h4>Last Name: <span style="font-weight:normal;">${lastName}</span><h4/>
      <h4>Email: <span style="font-weight:normal;">${email}</span><h4/>
      <h4>Number: <span style="font-weight:normal;">${number}</span><h4/>
      <h4>Address: <span style="font-weight:normal;">${address}</span><h4/>
      <h4>Message:<h4/>
      <p>${message}</P>
      </div>`,
    })
    return new NextResponse('Email has been sent', { status: 201 })
  } catch (err) {
    console.log(err)
    return new NextResponse(err, {
      status: 500,
    })
  }
}
