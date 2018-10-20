<h1 align="center">
  <img src="media/gradeulator%20icon/gradeulator.png" width="25%">
  <br> gradeulator
</h1>

<p align="center"> <b> a desktop grade-calculator </b> </p>

<p align="center">
  <a href="https://electronjs.org/"><img src="https://img.shields.io/badge/electron-2.0.8-8240ac.svg"></a>
  <a href="https://github.com/Furqan17/gradeulator/blob/master/package.json"><img src="https://img.shields.io/badge/version-1.0.1-40c123.svg"></a>
  <a href="https://technet.microsoft.com/en-us/library/bb496995.aspx"><img src="https://img.shields.io/badge/platform(s)-win64%20%7C%20osx-red.svg" alt="ver"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-ff69b4.svg"></a>
</p>

<div align="center">
  <a href="https://raw.githubusercontent.com/Furqan17/gradeulator/master/media/gradeulator-src/calculate-purple-bg.PNG" target="_blank">
    <img src="https://raw.githubusercontent.com/Furqan17/gradeulator/master/media/gradeulator-src/calculate-purple-bg.PNG" title="Gradeulator-Electron">
  </a>
</div>

## :zap: Installation
Gradeulator is in the **final stages** of the packaging process and will be available to download *(soon™)*, but for now you can open gradeulator using *node*.  
  
gradeulator **requires** _nodejs_ (and aditionally npm). If you don't have it already you can download it **[here.](https://nodejs.org/en/)**  
**1.** Fork (or clone) this repository  
**2.** Clone the repository and extract the zip file  
**3.** Using a terminal, `cd` into the file repository  
**4.** Run `npm install` to install the dependencies *(dependencies are listed below)*  
**5.** Run `npm start` to launch **gradeulator**

## :open_file_folder: Dependencies
This application is built using **HTML/CSS** and with **[Bulma](https://bulma.io/)**

- **[Electron:](https://electronjs.org)** *(from their [website](https://electronjs.org/docs/tutorial/about))* "is an open source library developed by GitHub for building cross-platform desktop applications with HTML, CSS, and JavaScript. Electron accomplishes this by combining [Chromium](https://www.chromium.org/Home) and [Node.js](https://nodejs.org/en/) into a single runtime and apps can be packaged for Mac, Windows, and Linux."

## :heavy_division_sign: Calculating Grades
**Gradeulator** is *essentially* a grade calculator, It takes in inputs of numbers with grades & weights and outputs a final score. Heres the process of how I coded that into a desktop application.

Gradeulator was inspired by the use of constantly calculating grades using numerous grade calculator websites (my favourite being **[this one.](http://www.benegg.net/grade_calculator.html)**)

**1. Non-numeric Inputs**  
The first challenge of gradeulator was tackling the non-numeric inputs from the user. There were two *solutions* to this problem. The first solution I thought of was to create a function which goes through all the inputs and remove them if they are non-numeric. This would be done using **JavaScripts** built in methods. After a quick google search I found out the methods I needed (source: **[google](https://www.google.ca/)**): 
<p align="center">
  <img src="https://raw.githubusercontent.com/Furqan17/gradeulator/master/media-calculate/javascript-google-search.PNG">
</p>

## :wrench: Build Customization

#### 1.) App responsiveness
This app was designed with a *mobile first* approach. The application is responsive and you can resize the app to your liking.
<p align="center">
  <img src="https://raw.githubusercontent.com/Furqan17/gradeulator/master/media/gradeulator-src/white-bg/responsive-white-bg.PNG">
</p>

**Note:** Electron allows you to set different starting sizes for your desktop applications, if you wish to change the app size follow the instructions below:  
**1.** Navigate to and open *main.js*   
**2.** Find and edit the `createWindow` function
<p align="center">
  <img src="https://raw.githubusercontent.com/Furqan17/gradeulator/master/media/gradeulator-src/resize-mainjs.png">
</p>

**3.** You are now able to edit the minimum/maxium height/width.
                                                                                                             
## :heavy_exclamation_mark: To-Do List
A list of components to *(eventually)* add.
- [x] Fix list tabbing error
- [ ] Implement app functions on a website  


<p align="center"> ...
  <br>2018 <a href="https://github.com/Furqan17"><strong>Furqan17</strong></a>
  <br> Licensed under the <a href="https://github.com/Furqan17/crypto-desk/blob/master/LICENSE">MIT License</a>
</p>

