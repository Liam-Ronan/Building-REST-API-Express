import { addNewContact,
         getContacts,
         getContactId,
         updateContact,
         deleteContact } from "../controllers/crmController";


const routes = (app) => {

    app.route('/contact')
    //get all contact
    .get((req, res, next) => {
        //Middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    }, getContacts)

    //Post a new contact
    .post(addNewContact);

    app.route('/contact/:contactId')
    //Get specific contact ID
    .get(getContactId)

    .put(updateContact)

    .delete(deleteContact)

}

export default routes;