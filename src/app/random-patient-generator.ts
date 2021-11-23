import {Address, Patient} from "./model/patient";

const FIRST_NAMES = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
const LAST_NAMES = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan"];
const DOBS = ["1986-01-20", "1989-10-12", "1980-01-02", "1983-06-10", "1987-04-28", "1981-08-22", "1980-06-28", "1989-02-21", "1984-10-20", "1986-08-23"];
const PHONES = ["123123", "12312123", "1234234", "34324234"];
const STREETS = ["Cottage Street", "Academy Street", "Poplar Street", "Olive Street", "East Street", "Lawrence Street", "Park Avenue", "Route 9"];
const SUBURBS = ["Cottage", "Academy", "Poplar", "Olive", "East", "Lawrence", "Park", "Route"];
const STATES = ["Vermont", "Minnesota", "Wyoming", "New Hampshire", "Arizona", "South Carolina", "South Dakota", "Michigan"];
const POSTCODES = ["NE613LG", "BR1 2ET", "WR142ET", "PH106HJ", "PR4 0EH"];


export default class RandomPatientGenerator {
  static generate() {
    let address = new Address();
    address.street = STREETS[Math.floor(Math.random() * STREETS.length)];
    address.suburb = SUBURBS[Math.floor(Math.random() * SUBURBS.length)];
    address.state = STATES[Math.floor(Math.random() * STATES.length)];
    address.postCode = POSTCODES[Math.floor(Math.random() * POSTCODES.length)];

    let patient = new Patient();
    patient.firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    patient.lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    patient.dob = DOBS[Math.floor(Math.random() * DOBS.length)];
    patient.gender = Math.floor(Math.random() * 2) % 2 == 0 ? 'MALE' : 'FEMALE';
    patient.phone = PHONES[Math.floor(Math.random() * PHONES.length)];
    patient.address = address;

    return patient;
  }
}
