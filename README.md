# Enrvmt - commit to climate change actions

Envrmt is a mobile application which tracks your personal climate change efforts. The goal of the application is to motivate users to commit themselves to environmentally beneficial actions by providing them with recurring challenges and visualizing their impact on climate change. Users can be citizens in most countries of the world, however, the MVP focuses on Denmark as a use case and utilizes danish statistics.

## Prototype

A high fidelity prototype can be found here: http://bit.ly/figma-prototype

## Group members

- Dario Raven Stolze {dars@itu.dk}
- Marek Soos {masoo@itu.dk}
- Lærke Saura Birk {lsau@itu.dk}
- Alexandra Waldau {alew@itu.dk}

## Data Model

Our data model utilizes a document-based NoSQL database. Data is stored in three different document collections: users, challenges and progress. Information about users that sign up to the application will be stored dynamically in the users collection. All available challenges are pre-defined and will be stored (statically) in the challenges collection. Information about which challenges a user completes and how much impact it creates is stored in the progress collection.

### 1. Entities

User,
Challenges,
Progress,

### 2. Attributes for entities

### Model for User

| name        | type      | description                                                            |
| -------------------------------------------------------------------------------------------------|
| name        | string    | first and last name                                                    |
| level       | number    | level calculated based on the results from the onboarding questionnaire|
| preference  | string    | preferred category as indicated in the onboarding                      |

### Model for Challenges

| name           | type   | description                                                                  |
| -------------------------------------------------------------------------------------------------------|
| id             | number | unique id                                                                    |
| duration       | number | duration of the challenge (in days/nº tasks to be completed)                 |
| avoidance      | number | quantity of Co2 avoided by completing the whole challenge                    |
| category       | string | category the challenge corresponds to (Food, Transportation, Waste, Shopping)|
| level          | number | the level of difficulty that the challenge corresponds to                    |
| title          | string | title of the challenge                                                       |
| description    | string | description of the challenge                                                 |

### Model for Progress

| name      | type   | description                                       |
| -----------------------------------------------------------------------|
| user      | number | auto generated id generated in the user collection|
| completed | number | amount of completed challenges                    |
| failed    | number | amount of failed challenges                       |
| avoided   | number | total CO2 avoidance                               |
| finished  | array  | list of finished challenges (id)                  |
| active    | array  | list of active challenges (id)                    |

### 3. Data Naming Convenction - would be be done in following manner for all the entities

Example for User entity:
user_id,
user_name,
user_email,
user_progress

### 4. Relationships

User and Progress share a one-to-one relationship. Progress and challenges share a one-to-many relationship. One instance of Progress can refer to many instances of challenges.

### 5. Normalize to reduce Data Redundancy

We normalized our data model by creating a separate entity for Progress. Alternatively, progress could be embedded into the User entity to speed up information retrieval. However, creating a separate Progress entity allows us to extend the functionality of our application more easily as it makes it possible to extract all progress levels from all users and, for example, display a leaderboard.
