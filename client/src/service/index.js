import axios from "axios";

const url = "http://localhost:3000";

class Service {
    // get * from student record
    static getStudentRaw() {
        // making the function static means we don't need to create an instance of Service class to be able to use the function; we can simply call Service.getStudentRaw()
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}/data`);
                const data = res.data;
                console.log(res.data);
                resolve(data);
            } catch (err) {
                reject(err);
            }
        });
    }

    // get * from student record
    static getStudentProcessed(rollNumber) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}/data`, {
                    params: {
                        rollNumber,
                    },
                });
                const data = res.data.attendance;
                var response = [];
                data.forEach((item) => {
                    var info = {
                        courseId: "",
                        title: "",
                        lecture: 0,
                        present: 0,
                        absent: 0,
                        leave: 0,
                        percentage: 0,
                        required: 0,
                    };
                    var present = 0;
                    var absent = 0;
                    var leave = 0;
                    info.courseId = item.courseId;
                    info.title = item.title;
                    info.lecture = Object.keys(item.record).length;

                    const val = Object.values(item.record);
                    val.forEach((v) => {
                        if (v === "P") {
                            present++;
                        } else if (v === "A") {
                            absent++;
                        } else {
                            leave++;
                        }
                    });
                    info.present = present;
                    info.absent = absent;
                    info.leave = leave;

                    info.percentage = ((present / info.lecture) * 100).toFixed(
                        2
                    );

                    info.required = Math.ceil(
                        (75 * info.lecture - 100 * present) / (100 - 75)
                    );

                    response.push(info);
                });
                resolve(response);
            } catch (err) {
                reject(err);
            }
        });
    }

    static getSubjectAttendance(rollNumber, courseId) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}/data`, {
                    params: {
                        rollNumber,
                    },
                });
                const data = res.data.attendance;
                const response = data.filter(
                    (item) => item.courseId === courseId
                );
                const result = response[0].record;
                const keys = Object.keys(result);
                const values = Object.values(result);
                var output = [];
                for (let i = 0; i < keys.length; i++) {
                    var item = {};
                    item.date = keys[i];
                    item.status = values[i];
                    output.unshift(item);
                }
                resolve(output);
            } catch (err) {
                reject(err);
            }
        });
    }

    static getCourseStudents(course) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}/courseStudents`, {
                    params: {
                        course,
                    },
                });
                const data = res.data.students;
                resolve(data);
            } catch (err) {
                reject(err);
            }
        });
    }

    static markAttendance(course, date, present, absent, leave) {
        console.log(course, date, present, absent, leave);
        return axios.post(`${url}/markAttendance`, {
            course,
            date,
            present,
            absent,
            leave,
        });
    }
}

export default Service;
