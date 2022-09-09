#  Week 1

These are the key learnings for this week:

 - You’ll get to know SAPUI5 – the responsive UI library that SAP uses to create apps with the award-winning SAP Fiori user experience. We’ll introduce you to the library and start with a simple “Hello World” example. Step by step, we’ll then add more features to our app and explain how it all comes together.
 - You’ll learn about the main development concepts of SAPUI5. We’ll add many layout and UI controls and introduce the Model View Controller (MVC) concept to our app.
 - We’ll structure our application project with the application descriptor and a component. And we’ll introduce essential features to create enterprise-grade apps such as data binding and internationalization.

 **WEEK 1 UNIT 1**
 - 1.Open SAP Web IDE
 - 2.Bootstrap

 **WEEK 1 UNIT 2**
 DEFINING THE UI USING CONTROLS AND VIEWS
 - 1.View Controls
 - 2.Controls

 **WEEK 1 UNIT 3**
 Exercise: Structuring with Controllers and Modules
 - 1.Controllers
 - 2.Modules

 **WEEK 1 UNIT 4**
 CREATING A CONFIGURABLE APP COMPONENT
 -	The component file is named Component.js.
 -	Together with all UI assets of the app, the component is located in the webapp folder.
 -	If the index.html file is used productively, it is located in the webapp folder.
 -	The descriptor file is named manifest.json and located in the webapp folder.
 -	Use translatable strings for the title and the description of the app.

 **WEEK 1 UNIT 5**
 MANAGING DATA MODELS AND INTERNATIONALIZATION
 -	we have valueLiveUpdate enabled on the input field,
 -	both controls’ properties are bound to the same property within the JSON model,
 -	And the model uses a two-way binding.
 -	The resource model for internationalization is registered with name i18n.
 -	The default filename is i18n.properties.
 -	Resource bundle keys are written in (lower) camelCase.
 -	Resource bundle values can contain parameters like {0}, {1}, {2}, …
 -	Never concatenate strings that are translated, always use placeholders.
 -	Use Unicode escape sequences for special characters.
 
  **WEEK 1 UNIT 6**
  Containers and Layout
  -	Layout	
  - Icon Library	
  - Margins and Paddings	

# Week 2
These are the key learnings for you this week:

 - We’ll connect to an OData back-end service to display a list of products in your app project.     Using this service, we’ll explore the powerful data binding concepts of SAPUI5. They are an abstraction to the underlying data and make it easy to define operations such as sorting and filtering on the data model.
 - We’ll learn about property binding, aggregation binding, and context binding, the three binding modes that are essential when developing apps with SAPUI5.
 - We’ll explore the OData service of our development scenario and see how to debug common issues.

 **WEEK 2 UNIT 1**
 USING A REMOTE SERVICE WITH AGGREGATION BINDING

 - 1.Verify your destination to backend system ES5
 - 2.USE the Service in your app
 - 3.(Optional) Use mock server if you have a slow internet connection

 **WEEK 2 UNIT 2**
  WORKING WITH EXPRESSIONS AND FORMATTERS

  - 1.Expression Binding	
  - 2.Custom Formatter	

 **WEEK 2 UNIT 3**
 AUTOMATIC CONVERSION WITH DATA TYPES

 - 1.Usage of Data Types for Formatting
 - 2.Usage of Types for Form Validation	

**WEEK 2 UNIT 4**
SORTING, GROUPING AND FILTERING
 - 1Filtering	
 - 2Sorting and Grouping

