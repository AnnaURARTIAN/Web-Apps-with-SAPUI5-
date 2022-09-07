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
