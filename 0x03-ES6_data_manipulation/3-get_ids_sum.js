/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Daniel Ongom <https://github.com/domodan>
 * @returns {Number}
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((total, student) => total + student.id, 0);
  }
  return 0;
}
