import React from "react";
import { DeleteBtn, ContactItem } from "./ContactList.styled";

export const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ul>
            {contacts.map(({id, name, number}) => 
                <ContactItem key = {id}>{name}: {number}
                <DeleteBtn type="button" onClick = {()=> onDeleteContact(id)} >Delete</DeleteBtn>
            </ContactItem>
                )}
            
            </ul>
    )
}