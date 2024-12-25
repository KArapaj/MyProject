const dateOfBirth = "15/02/1969"

const getStudentName = () => {
    return "Klenis Arapaj"
}

const getCampusName = () => {
    return "UEL Campus"
}

exports.getName = getStudentName
exports.location = getCampusName

exports.dob = dateOfBirth

exports.StudentGrade = (marks) => {
    if (marks>50 && marks<70)
        return "B grade"
    else "A grade"
}