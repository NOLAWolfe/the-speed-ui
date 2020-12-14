export class User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    picture: string;
    website: string;
    location: string;
    // twitter: string;
    // instragram: string;
    // facebook: string;

    constructor(
        id: number,
        username: string,
        firstname: string,
        lastname: string,
        email: string,
        picture: string,
        website: string,
        location: string
    ) {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.picture = picture;
        this.website = website;
        this.location = location;
    }
}
