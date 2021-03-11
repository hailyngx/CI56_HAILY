// string(JSON) --> array/object parse
import CourseContainer from './CourseContainer.js';
import InfoContainer from './InfoContainer.js';

let data = [
    {
        id: 1,
        name: 'TC-CIJS-56',
        teacher: { name: 'Teacher 1', age: 22, address: 'HN' },
        students: [
            { name: 'Student 1', age: 18, address: 'HP' },
            { name: 'Student 2', age: 22, address: 'TB' },
            { name: 'Student 3', age: 20, address: 'HY' },
            { name: 'Student 4', age: 21, address: 'HN' },
            { name: 'Student 5', age: 23, address: 'BG' }
        ],
        status: 'Pending'
    },
    {
        id: 2,
        name: 'TC-CIJS-53',
        teacher: { name: 'Teacher 2', age: 22, address: 'HN' },
        students: [
            { name: 'Student 1', age: 20, address: 'TB' },
            { name: 'Student 2', age: 22, address: 'HB' },
            { name: 'Student 3', age: 25, address: 'HY' },
            { name: 'Student 4', age: 21, address: 'HN' },
            { name: 'Student 5', age: 18, address: 'QN' }
        ],
        status: 'Ended'
    }
]

let $app = document.getElementById('app');

for(let courseData of data) {
    let $courseData = document.createElement('course');

    let $courseContainer = document.createElement('course-container');
    $courseContainer.setAttribute('name', courseData.name);
    $courseContainer.setAttribute('status', "Status: " + courseData.status);

    let $classMembers = document.createElement('div')

    let $teacher = document.createElement('info-container');
    $teacher.setAttribute('name', "Teacher's name: " + courseData.teacher.name);
    $teacher.setAttribute('age', "Age: " + courseData.teacher.age);
    $teacher.setAttribute('address', "Address: " + courseData.teacher.address);


    let $students = document.createElement('div');
    for (let student of courseData.students) {
        let $student = document.createElement('info-container');
        $student.setAttribute('name', "Student's name: " + student.name)
        $student.setAttribute('age', "Age: " + student.age)
        $student.setAttribute('address', "Address: " + student.address)
        $students.appendChild($student);
    }

    $courseData.appendChild($courseContainer);
    $courseData.appendChild($classMembers);
    $classMembers.appendChild($teacher);
    $classMembers.appendChild($students);

    $app.appendChild($courseData);
}
