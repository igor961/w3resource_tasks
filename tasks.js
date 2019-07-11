var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 
};

(function task1() {  
  console.log(""+Object.keys(student))
})();

(function task2() {
  var _student = {}
  Object.assign(_student, student)
  delete _student.rollno
  console.log(_student)
})();

(function task3() {
  console.log(Object.keys(student).length)
})();

(function task4() {
  var library = [ 
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
    },
    {
      author: 'Suzanne Collins',
      title:  'Mockingjay: The Final Book of The Hunger Games', 
      readingStatus: false
    }];
  library.map(e=>(e.readingStatus)?console.log("You've read",e.author+"'s",'"'+e.title+'"'):console.log("You can read",e.author+"'s",'"'+e.title+'"')) 
})();

(function task7() {
  function subset(str) {
    var res = []
    for (var i=0;i<str.length;++i)
      for (var j=i;j<str.length;j++)
        res.push(str.substring(i, j+1))
    return res
  }
  console.log(subset("dog"))
})();

(function task10() {
  var library = [ 
    {
      title:  'The Road Ahead',
      author: 'Bill Gates',
      libraryID: 1254
    },
    {
      title: 'Walter Isaacson',
      author: 'Steve Jobs',
      libraryID: 4264
    },
    {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      libraryID: 3245
    }];  
  function sortAofO(objs, key) {
    var res = objs.sort((o1, o2)=>{
      return o1[key]>o2[key]
    })
    return res
  }
  console.log(sortAofO(library, 'libraryID'))
})();

(function task14() {
  var library =  
    {
      title:  'The Road Ahead',
      author: 'Bill Gates',
      libraryID: 1254
    }

  function getValues(obj) {
    var res = []
    for (var key in obj)
      if (obj.hasOwnProperty(key))
        res.push(obj[key])
    return res;
  }

  console.log(getValues(library))
})();

(function task16() {
  var library =  
    {
      title:  'The Road Ahead',
      author: 'Bill Gates',
      libraryID: 1254
    }

  function turnKeysValues(obj) {
    var res = {}
    for (var key in obj)
      if (obj.hasOwnProperty(key))
        res[obj[key]] = key
    return res;
  }

  console.log(turnKeysValues(library))
})();

(function task17() {
  var library =  
    {
      title:  'The Road Ahead',
      author: 'Bill Gates',
      libraryID: 1254
    }

  function checkProp(obj, prop) {
    return obj != null && obj.hasOwnProperty(prop)
  }

  console.log(checkProp(library, 'title'))
})();


