// Run the init function when page finishes loading
$(init);

function init() {
    // Get all anchors that are the clickable tabs
    var tabAnchors = $(".navTab");

    // Tell all tabs to run doTabClick when they are clicked
    tabAnchors.click(doTabClick);

    // Programmatically perform a "click" on the first tab
    tabAnchors.first().click();

    $("#outputButton").click(final);
}

function doTabClick() {
    // Get all of the divs that contain the tabs' contents
    var tabContainers = $(".divTab");

    // Hide them all
    tabContainers.hide();

    // The hash is the part after the # in the href attribute
    tabContainers.filter(this.hash).show();

    // Get all anchors that are the clickable tabs
    var tabAnchors = $(".navTab");

    // Remove the "selected" class from all tabs
    tabAnchors.removeClass("selected");

    // Add the "selected" class to just the tab that was clicked on
    $(this).addClass("selected");

    // Don't try to follow the link (because we're using <a> tags)
    return false;
}

function final() {
    //Size
    var sizeBoxes = $("input[name='size']:checked").val();
    $("#outputSize").text(sizeBoxes);
    //Type
    var crustBoxes = $("input[name='type']:checked").val();
    $("#outputCrust").text(crustBoxes);
    //Meat
    var meatBoxes = $("input[name='meats']:checked");
    var meat = [];
    meatBoxes.each(function () {
        meat.push(this.value);
    });
    $("#outputMeat").text("You asked for " + meat.length + " toppings " + meat + ".");
    //Non Meats
    var veggiesBoxes = $("input[name='nonMeats']:checked");
    var veggies = [];
    veggiesBoxes.each(function () {
        veggies.push(this.value);
    });
    $("#outputVeggies").text("You asked for " + veggies.length + " toppings " + veggies + ".");
    //Name
    var name = $("#name").val();
    $("#outputName").text(name);
    //Phone
    var phone = $("#phone").val();
    $("#outputPhone").text(phone);
    //Address
    var address = $("#street").val();
    $("#outputStreet").text(address);
    //Math
    //Size math
    if (sizeBoxes === "Small") {
        var sizePrice = 7;
    } else if (sizeBoxes === "Medium") {
        var sizePrice = 9;
    } else if (sizeBoxes === "Large") {
        var sizePrice = 12;
    }
    //meat math
    var meatPrice = meat.length * 1.50;
    //veggies math
    var veggiesPrice = veggies.length * 1;
    //Subtotal output
    var subtotal = sizePrice + meatPrice + veggiesPrice;
    $("#outputSubTotal").text(subtotal);
    //tax
    var tax = subtotal * .051;
    $("#outputTaxTotal").text(tax);
    //delivery fee
    var delivery = 2;
    //total
    var total = subtotal + tax + delivery;
    $("#outputGrandTotal").text(total);
}
