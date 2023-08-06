<?php

namespace app\Http\Controllers ;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactControlllers extends Controller {

    public function addOrUpdateContact(Request $request, $id = "add"){
        if($id == "add"){
            $contact = new contact;
        }else{
            $contact = Contact :: find($id);
        }

        $contact->id = $request->$id;
        $contact->name = $request->$name ? $request->name : $contact->name;
        $contact->phonenumber = $request->$phonenumber ? $request->phonenumber : $contact->phonenumber;
        $contact->longitude = $request->$longitude ? $request->longitude : $contact->longitude;
        $contact->latitude = $request->$latitude ? $request->latitude: $contact->latitude;
        $contact->save();

        return response(["contacts" => $contact]);
    }

    public function getContacts()
    {
        $contacts = Contact::all();

        return response(["contacts" => $contacts]);
    }
}