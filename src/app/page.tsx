import { db } from "../db";

export default async function Home() {

  const items = await db.query.testing.findMany({});

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        items.map((item) => (
          <div key={item.id} className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">{item.name}</h1>
          </div>
        ))
      }
    </main>
  );
}
