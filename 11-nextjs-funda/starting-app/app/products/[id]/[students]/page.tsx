export default async function StudentsPage({
  params,
}: {
  params: Promise<{ id: string; students: string }>;
}) {
  const { id, students } = await params;
  return <div>StudentsPage for {id} - {students}</div>;
}
