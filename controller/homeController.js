
const Items = ["Cricket", "Football", "Hockey"];
const workItems  = [];

exports.getHome = (req,res) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let currentDay = new Date();
    let Date= currentDay.toLocaleDateString("en-US", options);

      res.render("home", {
        titlePage: "Home",
        listTittle : Date,
        ITEM : Items
      }) 
}
exports.postHome = (req,res) => {
    var Item=  req.body.newItem;
    console.log(req.body); 
    if (req.body.list === "Work") {
      workItems.push(Item);
      console.log("Work new item: "+workItems);
      res.redirect ("/work")
    }
    else {
     Items.push(Item);
     res.redirect("/");
      } 
    }
exports.getWork = (req,res) => {
    res.render("home", {
      titlePage: "Work",
      listTittle : "Work",
      ITEM : workItems
    }) 
}
exports.postWork = (req,res) => {
  var Item=  req.body.newItem;
   workItems.push(Item);
   res.redirect("/work");
  }