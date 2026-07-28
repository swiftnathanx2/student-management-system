import { StudentRow } from "../components/StudentRow";
// import students from "../data/students";

export function Students({ students }) {
  return (
    <div>
      <StudentRow students={students} />
    </div>
  );
}
