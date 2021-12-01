Must Have:

Added (
  prisma
  uuid
  passport
  bcrypt
  react-icons
)

login page (
  show: [
    input for user data
    sign in page redirect
  ]

  receive: [
    cpf or account code
    passwd
  ]
) {
  goes to home page
}

sign in page (
  show: [
    input for user data
  ]

  receive: [
    name
    cpf
    phone
    email
    passwd
  ]
) {
  generate account code
  goes to home page with account code, name and cpf pop-up
}

home page (
  show: [
    personal info sidebar (with all listed bank options)
    balance (show/hide money info)
    extract page redirect
    transfer page redirect
    insert money page redirect
  ]

  receive: [
    clickable inputs to different pages
  ]
)

extract page (
  show: [
    now balance
    search by date input
    all the user extract in order(and select especific date)
  ]
)

transfer page redirect (
  show: [
    input for transfering accout

    ::after::

    input for money quantity(showing now balance)

    ::after::
  
    confirmation
  ]

  recevive: {
    tranfering accout {
      return name, incomplete cpf, and account code
    }

    money quantity {
      check if it's enough
    }

    confirmation {
      return succes message
    }
  }
)

insert money page redirect (

)



