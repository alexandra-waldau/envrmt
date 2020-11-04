# Enrvmt - commit to climate change actions

Envrmt is a cross-platform mobile application which tracks your personal climate change efforts. The goal of the application is to motivate users to commit themselves to environmentally beneficial actions by providing them with recurring challenges and visualizing their impact on climate change. Users can be citizens in most countries of the world, however, the MVP focuses on Denmark as a use case and utilizes danish statistics.

## Prototype

A high fidelity prototype can be found here: http://bit.ly/figma-prototype

## Group members

* Dario Raven Stolze {dars@itu.dk}
* Marek Soos {masoo@itu.dk}
* Lærke Saura Birk {lsau@itu.dk}
* Alexandra Waldau {alew@itu.dk}

## Data Model

Data model for our prototype of envrm. We will be storing the data which user inputs. These information are basically divided into their starting level at the beginning when they are done with creation of their profile. This level tracks their performance, when it’s later transformed into the values which they will see on the dashboard. 

1.Entities

Customer
Challenges
Progress/Level

2.Attributes for entities
Customer has number, first name, last name, password, country, email,
Challenges have some number, small informative description about the challenge
Progress/level tracks avoidance of CO2 - it has home value/integer and customer’s id

3.Data Naming Convenction - would be be done in following manner for all the entities
Example for Customer’s entity:
Customer_number
Customer_first_name
Customer_second_name
Customer_email
Customer_password
Customer_country

4.Identify relationships

Customer has a certain number of progress/levels. This is done by performing a certain number of challenges, which can vary from zero to multiple.

5.Apply data model patterns

Relational Database/Firebase firestore

6.Assign keys

Customer has a primary key, which has a specific ID of  the customer. Challenges and Progress/Level can have primary keys, but they will definitely have foreign key because thanks to that, these specific columns will be assigned correctly to each individual customer. 

7.Normalize to reduce Data Redundancy (TBA)
