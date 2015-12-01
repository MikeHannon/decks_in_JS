var MyDB = (function(){
  this.schemas = [];

  return {
    add_schema : function(schema){
      console.log(schema);
      this.schemas.push(schema);
    },
    schemas : this.schemas
  }
})();

function Schema(name, base_object){
  MyDB.add_schema(this);
  this.name = name;
  var that = this;
  this.base_object = base_object;
  this.data = [];
  var new_data_object = {};
  this.new = function(data){
    Object.keys(data).forEach(function(key){
      if (that.base_object[key]){
        if (typeof(data[key]) == typeof(that.base_object[key])){
          console.log('???');
          new_data_object[key] = data[key];
        }
        else if (isArray(data[key]) && isArray(that.base_object[key])){

          new_data_object[key] = data[key];
        }
      }
    });
    console.log(new_data_object);
  }
  this.save = function(){
    var d = new Date();
    new_data_object._id = d.valueOf();
    that.data.push(new_data_object);
    new_data_object = {};
    console.log(MyDB);
  }
  this.populate = function(key_name){

    if (Array.isArray(this.data[0][key_name])){
      for (var i = 0; i < this.data.length; i ++){
        for (var object in this.data[i][key_name]){
          if (this.data[i][key_name][object].ref){
            console.log(this.data[i][key_name][object].ref);
          }
        }
      }
    }
  };
  this.exec = function(){};
}

var mySchema = new Schema('test', { name: String(' '), test_array:[] });
mySchema.new({name:'mike',test_array:[{_id:1234, ref: 'otherSchema'},{_id : 4567, ref: 'otherSchema'}]});
mySchema.save();
mySchema.populate('test_array');




if (words[i][j] == ' '){
  words[i] = words[i].substring(0,j) + '&nbsp;' + words[i].substring(j+1, words[i].length);
}
