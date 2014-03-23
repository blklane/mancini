class ContactMailer < ActionMailer::Base
  default from: "from@example.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.inquiry.subject
  #
  def inquiry(inquiry)
    @inquiry = inquiry
    mail to: "nmancini11@gmail.com", subject: 'New Contact Form Submission'

  end
end
