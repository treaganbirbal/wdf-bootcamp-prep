let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW

function attendanceCheck(day){
    const studentsPresent = [];

    for(let i = 0; i < classRoom.length; i++){
        let studentObj = classRoom[i];
        let studentName = Object.keys(studentObj)[0];
        let attendanceObjs = studentObj[studentName];
        for(let j = 0; j < attendanceObjs.length; j++){
            let attendanceObj = attendanceObjs[j];
            let dayName = Object.keys(attendanceObj)[0]
            if(dayName === day && attendanceObj[dayName]){
                studentsPresent.push(studentName)
            }
        }
    }
    
    return studentsPresent
  }
