import Button from '../button/button';
import styles from './ContactForm.module.css';
import {MdMessage} from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { BsDisplay } from 'react-icons/bs';
import { useState } from 'react';
const ContactForm = () => {
    const [name,setName]=useState("Rameshwar waghmode");
    const [email,setEmail]=useState("rameshwarwaghmode123@gmail.com");
    const [text,setText]=useState("he is my brother is simple that");
    const onSubmit = (event) =>{
        setName (event.target[0].value);
        setEmail (event.target[1].value);
        setText (event.target[2].value);
        event.preventDefault();

        console.log(name.email,text,);
    };
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHA" icon={<MdMessage fontSize={"24px"} />}/>
                <Button text="VIA CALL" icon={<IoCallSharp fontSize={"24px"}/>}/>
                </div>
                <Button isoutline={true} text="VIA EMAIL FORM" icon={<IoMdMailUnread fontSize={"24px"}/>}/>
                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" name="email"/>
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">TEXT</label>
                        <textarea name="text" rows={8}/>
                    </div>
                    <div style={{display:"flex",justifyContent:"end"}}>
                    <Button text="Submit" />
                    </div>
                    <div>
                        {
                            name + " " + email + " " + text
                        }
                    </div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src="/images/contact.svg" alt="contact image" />
            </div>
        </section>
    )
}
export default ContactForm;