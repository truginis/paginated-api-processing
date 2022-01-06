# PaginatedApiProcessing

## How to use
1. Clone this repo
2. `npm i`
3. `ng server --open`
4. Open console in developer tools
5. Hit "Get data and process it"

## Using *instantwebtools* for the fake API data
### [https://www.instantwebtools.net/fake-rest-api]()



#### [https://api.instantwebtools.net/v1/passenger?page=0&size=10]() endpoint to get the paginated passenger data.


##### Response example
```json
{
    "totalPassengers": 6,
    "totalPages": 6,
    "data": [
        {
            "_id": "5eef7f1bdfaf515ddc9feade",
            "name": "Saman Jeewantha",
            "trips": 500,
            "airline": [
                {
                    "id": 4,
                    "name": "Emirates",
                    "country": "Dubai",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/150px-Emirates_logo.svg.png",
                    "slogan": "From Dubai to destinations around the world.",
                    "head_quaters": "Garhoud, Dubai, United Arab Emirates",
                    "website": "www.emirates.com/",
                    "established": "1985"
                }
            ],
            "__v": 0
        }
    ]
}
```








## Angular Boilerplate readme
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
