// === 1. SINGLE INHERITANCE ===
class Student {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(this.name + " is eating chicken biryani")
  }
}

class AimlMajor extends Student {
  study() {
    console.log("stuck studying")
  }
}

let me = new AimlMajor("bro")
me.eat()
me.study()


// === 2. MULTILEVEL INHERITANCE ===
// chain of classes. A -> B -> C
class Human {
  exist() { 
    console.log("just breathing") 
  }
}

class CseKid extends Human {
  code() { 
    console.log("copy pasting from stackoverflow") 
  }
}

class AiSpecialist extends CseKid {
  train() { 
    console.log("gpu prices hiked") 
  }
}


// === 3. HIERARCHICAL INHERITANCE ===
// one parent to multiple child classes
class Project {
  submit() { 
    console.log("uploading to github 5 mins before deadline") 
  }
}

class Frontend extends Project {
  centerDiv() { 
    console.log("front") 
  }
}

class Backend extends Project {
  fixDb() { 
    console.log("back") 
  }
}


// === 4. MULTIPLE & HYBRID INHERITANCE ===
// js doesnt actually support multiple inheritance 
// so we implement it with mixins (using Object.assign)

const gamerVibes = {
  player() { 
    console.log("chill") 
  }
}

const lazyVibes = {
  skipClass() { 
    console.log("proxy gives attendance") 
  }
}

// combining our multilevel class with multiple traits (hybrid)
class UltimateStudent extends AiSpecialist {
  constructor() {
    super()
    // mixins
    Object.assign(this, gamerVibes, lazyVibes)
  }
}

let finalBoss = new UltimateStudent()
finalBoss.code() // from CseKid
finalBoss.player() // from gamerVibes mixin