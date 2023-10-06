import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact = async (req, res) => {
    try {
        const contact = new Contact(req.body)
        const savedContact = await contact.save()

        res.json(savedContact)
    } 
    catch(err) {
        res.status(500).send(err)
    }
}

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({})
        res.json(contacts)
    } 
    catch(err) {
        res.status(500).send(err)
    }
}

export const getContactId = async (req, res) => {

    try {
        const contactId = await Contact.findById(req.params.contactId)
        res.json(contactId)
    } 
    catch(err) {
        res.status(500).send(err)
    } 

}

export const updateContact = async (req, res) => {
    try {
        const updateContactId = await Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, { new: true })
        res.json(updateContactId)
    } 
    catch(err) {
        res.status(500).send(err)
    }
}

export const deleteContact = async (req, res) => {
    try {
        await Contact.findOneAndDelete({ _id: req.params.contactId})
        res.json({message: 'successfully deleted contact'})
    } 
    catch(err) {
        res.status(500).send(err)
    }
    
}

