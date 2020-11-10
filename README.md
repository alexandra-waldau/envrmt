# Enrvmt - commit to climate change actions

Envrmt is a cross-platform mobile application which tracks your personal climate change efforts. The goal of the application is to motivate users to commit themselves to environmentally beneficial actions by providing them with recurring challenges and visualizing their impact on climate change. Users can be citizens in most countries of the world, however, the MVP focuses on Denmark as a use case and utilizes danish statistics.

## Prototype

A high fidelity prototype can be found here: http://bit.ly/figma-prototype

## Group members

- Dario Raven Stolze {dars@itu.dk}
- Marek Soos {masoo@itu.dk}
- Lærke Saura Birk {lsau@itu.dk}
- Alexandra Waldau {alew@itu.dk}

## Data Model

Data model for our prototype of envrm. We will be storing the data which user inputs. These information are basically divided into their starting level at the beginning when they are done with creation of their profile. This level tracks their performance, when it’s later transformed into the values which they will see on the dashboard.

1. Entities

Customer
Challenges
Progress

2. Attributes for entities

#### Model for Customer

| name     | type   | description                   |
| -------- | ------ | ----------------------------- |
| id       | number | Auto generated id             |
| name     | string | First and last name           |
| email    | string | Email address of user         |
| password | string | Password (restrictions tbd)   |
| country  | string | Countrycode as ISO2 (e.g. DK) |

#### Model for Challenges

| name        | type   | description           |
| ----------- | ------ | --------------------- |
| id          | number | auto generated id     |
| description | string | short description     |
| timeframe   | date   | duration of challenge |
| total       | number | CO2                   |

#### Model for Progress

| name       | type   | description                        |
| ---------- | ------ | ---------------------------------- |
| user id    | number | refers to user                     |
| percentage | number | percentage of completed challenges |
| CO2        | number | accumulated CO2 avoidance          |
| finished   | list   | list of finished challenges        |
| active     | list   | list of active challenges          |
| inactive   | list   | list of inactive challenges        |

3. Data Naming Convenction - would be be done in following manner for all the entities
   Example for Customer’s entity:
   Customer_number
   Customer_first_name
   Customer_second_name
   Customer_email
   Customer_password
   Customer_country

4. Identify relationships

Customer is associated with one instance of progress. This is done by performing a certain number of challenges, which can vary from zero to multiple.

5. Apply data model patterns

Firebase firestore

6. Assign keys (TBA)

Customer has a primary key, which has a specific ID of the customer. Challenges and Progress/Level can have primary keys, but they will definitely have foreign key because thanks to that, these specific columns will be assigned correctly to each individual customer.

7. Normalize to reduce Data Redundancy (TBA)
