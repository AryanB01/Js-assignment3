
// //assigning variable to form id
// const form = document.querySelector("#smoothyForm");

// //assigning variable to submit button
// const submit = form.querySelector(".submit");

// //i found our that an event listener should be added to the top of the form for the data inserted in the form to be submitted.
// //add event listener to top for the data to be submitted when the submit button is clicked
// submit.addEventListener("click", function () {

//   //capturing the form tags and assigning variables for them

//   const smoothieType = form.querySelector("#smoothyType").value;

//   //selects the option that is checked
//   const smoothieSize = form.querySelector('input[name="size"]:checked').value;

//   const options = form.querySelector("#addOn").options;

//   const other = form.querySelector("#other").value;

//   console.log(submit);

//   //loop created so that user can select different addOns. I only have 3 addon and can only select one. but could be useful for future when adding function of selecting different addOns. so this is just safe side for future improvements. but if we need the single input then we can use const addOns = form.querySelector("#addOn").value and capture single.
//   const addOns = [];
//   for (let i = 0; i < options.length; i++) {
//     if (options[i].selected) {
//       addOns.push(options[i].value);
//     }
//   }

//   //calling the function passig the value using three argument
//   const price = finalPrice(smoothieSize, smoothieType, addOns);

//   //description for the smoothy using the price and user preferance
//   const description = `Order received for ${smoothieSize} ${smoothieType} smoothie with ${addOns.join(", ")}.\nAdditional notes: ${other}.\n`;

//   // alert for showing the description in the screen as the form doesn't go anywhere
//   alert(`${description}Total price for the Smoothy is $${price}. `);
// });

// //functiono which determines the price of the smootny . weather it is small, medium or large and adds price accordingly.
// function finalPrice(size, type, addOns) {
//   let price;
//   switch (size) {
//     case "small":
//       switch (type) {
//         case "Banana":
//           price = 4;
//           break;
//         case "Strawberry":
//           price = 5;
//           break;
//         case "Chocolate":
//           price = 6;
//           break;
//         case "Peach":
//           price = 7;
//           break;
//         case "Protein":
//           price = 8;
//           break;
//       }
//       break;
//     case "medium":
//       switch (type) {
//         case "Banana":
//           price = 5;
//           break;
//         case "Strawberry":
//           price = 6;
//           break;
//         case "Chocolate":
//           price = 7;
//           break;
//         case "Peach":
//           price = 8;
//           break;
//         case "Protein":
//           price = 9;
//           break;
//       }
//       break;
//     case "large":
//       switch (type) {
//         case "Banana":
//           price = 6;
//           break;
//         case "Strawberry":
//           price = 7;
//           break;
//         case "Chocolate":
//           price = 8;
//           break;
//         case "Peach":
//           price = 9;
//           break;
//         case "Protein":
//           price = 10;
//           break;
//       }
//       break;
//   }
//   price = price + addOns.length;
//   return price;
// }
// -----------------------------------------------------------------------------------------------------------------------------------------


///using classes and method for the same smoothy maker

//creating a class and capturing the values inside of the form and maps it and assign the variables.
class SmoothyOrder {
  constructor(form) {
    this.form = document.querySelector(form);
    this.submitBtn = this.form.querySelector(".submit");
    //addinng event listener and using the submit method. note to self: regular function(){} didn't worked so added arrow function
    this.submitBtn.addEventListener("click", () =>{
    this.submit();
    });
  }

  //all the values and data inside the form is mapped and used same as above
  submit() {
    const smoothyType = this.form.querySelector("#smoothyType").value;
    const smoothySize = this.form.querySelector('input[name="size"]:checked').value;
    const options = this.form.querySelector("#addOn").options;
    const other = this.form.querySelector("#other").value;

    //loop for addons
    const addOns = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        addOns.push(options[i].value);
      }
    }

    // creating a new instance for price and calling the method finalPrice which has three argument for size type and addons which is then assigned to smoothySize , smoothyType and addOns.
    const price = new Price().finalPrice(smoothySize, smoothyType, addOns);
    
    //description for the smoothy.
    const description = `Order received for ${smoothySize} ${smoothyType} smoothie with ${addOns.join(", ")}.\nAdditional notes: ${other}\n`;

    // alert msg for the user 
    alert(`${description}Total price for the Smoothy is $${price}.`);
  }
}

//creating a new class and method which accepts three arguments which is used to calculate the price of the smoothy
class Price {
  finalPrice(size, type, addOns) {
    let price;
    switch (size) {
      case "small":
        switch (type) {
          case "Banana":
            price = 4;
            break;
          case "Strawberry":
            price = 5;
            break;
          case "Chocolate":
            price = 6;
            break;
          case "Peach":
            price = 7;
            break;
          case "Protein":
            price = 8;
            break;
        }
        break;
      case "medium":
        switch (type) {
          case "Banana":
            price = 5;
            break;
          case "Strawberry":
            price = 6;
            break;
          case "Chocolate":
            price = 7;
            break;
          case "Peach":
            price = 8;
            break;
          case "Protein":
            price = 9;
            break;
        }
        break;
      case "large":
        switch (type) {
          case "Banana":
            price = 6;
            break;
          case "Strawberry":
            price = 7;
            break;
          case "Chocolate":
            price = 8;
            break;
          case "Peach":
            price = 9;
            break;
          case "Protein":
            price = 10;
            break;
        }
        break;
    }
    price = price + addOns.length;
    return price;
  }
}

//creating instance of smoothy order and passing 3smoothyForm as an argument so it can execute the code form line 113
const smoothyOrder = new SmoothyOrder("#smoothyForm");
