import MailchimpSubscribe from "react-mailchimp-subscribe"
import { useEffect, useRef } from "react"
const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL


const SimpleForm = () => <MailchimpSubscribe  url={url}/>


export default function Mailchamp(){



    return(
        <MailchimpSubscribe
    
    url={url}
    render={({ subscribe, status, message }) => (
      <div className="email-form">
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
    )
}