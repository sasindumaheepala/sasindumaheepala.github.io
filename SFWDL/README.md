# Styled Functional Web Development Language SFWDL
>***NOTE:*** This Version of the Styled Functional Web Development Language is still being developed and tested. Some components may not be functional.
#

## Usage

Embed the SFWDL.js file into your HTML file.
```HTML
<script type="text/javascript" src="https://sasindumaheepala.github.io/SFWDL/SFWDL.js"></script>
```
#
### Embeding HTML files
#
The following example shows how you can embed HTML files into your HTML file, either from either the root directory or the current directory.
```HTML
<styles>
  /file1.html,
  /folder/file2.html,
  css/file3.html,
  ../file4.html,
  ./file5.html
</styles>
```
#
### Embeding CSS files

The following example shows how you can embed CSS files into your HTML file, either from either the root directory or the current directory.
```HTML
<styles>
  /style1.css,
  /folder/style2.css,
  css/style3.css,
  ../style4.css,
  ./style5.css
</styles>
```
#
### Embeding JavaScript files

The following example shows how you can embed JavaScript files into your HTML file, either from either the root directory or the current directory.
```HTML
<scripts>
  /script1.js,
  /folder/script2.js,
  js/script3.js,
  ../script4.js,
  ./script5.js
</script>
```
#
### Styled Navbars

#### Navbar Example

```HTML
<nav bg-color="white" color="black" size="1" nav="modern">
  <brand>Navbar</brand>
  <menu color="black"></menu>
  <navigation>
    <a href="#Home" active="true">Home</a>
    <a href="#About">About Us</a>
    <a href="#Products">Products</a>
    <a href="#Contact">Contact Us</a>
  </navigation>
</nav>
```

##### Additional Features

For a search bar in the navigation insert this form into the navigation:
```HTML
...
<navigation>
  ...
  <form nav-form="search" form-type="search-bar" search-placeholder="Search"></form>
</navigation>
...
```
```nav-form``` attribute is for what type of form you want. ```search``` must be put in there for a search bar like used in the example above.
```form-type``` attribute is for a future feature coming to the navigation bar, which either allows the option of an animated search icon or a search bar, ```search-bar```, as specified in the example above.
```search-placeholder``` attribute is for the placceholder used in the search form.
#
#### Text Color
```color``` attributes can be used for ```<a></a>``` to style it, like in the example below.
```HTML
...
<a href="#" color="blue">Blue Link</a>
...
```
#
You can choose from a variety of navbar themes.
#
**Current themes are:**
#
***Modern***
```HTML
<nav bg-color="white" color="black" size="1" nav="modern">
  <brand>Navbar</brand>
  <menu color="black"></menu>
  <navigation>
    <a href="#Home" active="true">Home</a>
    <a href="#About">About Us</a>
    <a href="#Products">Products</a>
    <a href="#Contact">Contact Us</a>
    <form nav-form="search" form-type="search-bar" search-placeholder="Search"></form>
  </navigation>
</nav>
```
