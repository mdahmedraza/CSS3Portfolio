import emailjs from '@emailjs/browser';
import React, {useRef, useState} from 'react';
import './Contact.css';

const Contact=()=>{
    const [done, setDone] = useState(false);
    // go to emailjs site it wants you to signin and then you got the dashboard first of all
    // click to 'Add New Service' then select gmail, and then click to 'Email Template' which 
    // is in left side and then click to 'create new template'
    // you got service ID easily.
    // for template id in after clicking 'create new template' go to setting and then you got
    // template id.
    // and in account we got 'public key'...

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_pr4mzuh', 'template_3eq992a', form.current, {
          publicKey: 'gylnWLT4ZM7jiCre7',
        })
        // .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        //   publicKey: 'YOUR_PUBLIC_KEY',
        // })
        .then(
          () => {
            console.log('SUCCESS!');
            setDone(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return(
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span>{done&&"thanks for contacting me"}</span>
                    <div className="blur c-blur1" style={{background: "var(--purple"}}></div>
                </form>
            </div>
        </div>
    )
}
export default Contact;


// import emailjs from '@emailjs/browser';
// import React, {useRef} from 'react';
// import './Contact.css';

// const Contact = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm(
//             'service_pr4mzuh', 
//             'template_3eq992a', 
//             form.current, 
//             'gylnWLT4ZM7jiCre7'  // Public key should be passed as a separate argument
//         )
//         .then(
//             () => {
//                 console.log('SUCCESS!');
//             },
//             (error) => {
//                 console.log('FAILED...', error.text);
//             }
//         );
//     };

//     return (
//         <div className="contact-form">
//             <div className="w-left">
//                 <div className="awesome">
//                     <span>Get in touch</span>
//                     <span>Contact me</span>
//                     <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
//                 </div>
//             </div>
//             <div className="c-right">
//                 <form ref={form} onSubmit={sendEmail}>
//                     <input type="text" name="user_name" className="user" placeholder="Name" />
//                     <input type="email" name="user_email" className="user" placeholder="Email" />
//                     <textarea name="message" className="user" placeholder="Message" />
//                     <input type="submit" value="Send" className="button" />
//                     <div className="blur c-blur1" style={{background: "var(--purple"}}></div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Contact;
